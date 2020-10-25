import classnames from 'classnames';
import groupBy from 'lodash.groupby';
import map from 'lodash.map';
import React, { Component } from 'react';
import { InView } from 'react-intersection-observer';

import Footer from '../Footer';
import Section from './Section';
import Header from './Header';

import data from '../../../public/pages/data.json';
import monthsData from '../../../public/pages/months.json';

import styles from './styles.module.css';

const INITIAL_ARTICLES = data.slice().reverse();
const MONTHS_ASC = monthsData.slice().reverse();
const MONTHS_DESC = monthsData.slice(1);

export default class Timeline extends Component {
  state = {
    articles: INITIAL_ARTICLES,
    cache: { [monthsData[0]]: data.slice() },
    hasNext: true,
    isLoading: false,
    months: MONTHS_DESC,
    order: 'desc',
    source: 'all'
  };

  handleSortChange = () => {
    const { articles, hasNext, order } = this.state;

    const nextOrder = order === 'asc' ? 'desc' : 'asc';

    let nextState;
    if (!hasNext) {
      nextState = {
        articles: articles.slice().reverse()
      };
    } else if (nextOrder === 'asc') {
      nextState = {
        articles: [],
        months: MONTHS_ASC
      };
    } else {
      nextState = {
        articles: INITIAL_ARTICLES,
        months: MONTHS_DESC
      };
    }

    this.setState({ order: nextOrder, ...nextState }, () => {
      window.scrollTo(0, 0);

      return hasNext && nextOrder === 'asc' && this.loadArticles();
    });
  };

  handleSourceChange = async source => {
    const { order, source: currentSource } = this.state;

    if (source === currentSource) {
      return;
    } else if (source === 'all') {
      return this.resetArticles();
    }

    try {
      const response = await fetch(`/pages/sources/${source}.json`);

      const articles = await response.json();

      return this.setState({
        articles: order === 'desc' ? articles.slice().reverse() : articles,
        hasNext: false,
        isLoading: false,
        source
      });
    } catch (err) {
      return this.setState({ isLoading: false });
    }
  };

  handleLoadNext = inView => {
    const { isLoading } = this.state;

    if (!isLoading && inView) {
      return this.loadArticles();
    }
  };

  loadArticles = async () => {
    const { months } = this.state;

    const page = months[0];

    this.setState(
      {
        isLoading: true
      },
      () => this.fetchArticles(page)
    );
  };

  fetchArticles = async page => {
    const { articles, cache, months, order } = this.state;

    const nextMonths = months.slice(1);
    const hasNext = !!nextMonths.length;

    if (cache[page]) {
      return this.setState({
        articles: articles.concat(
          order === 'desc' ? cache[page].slice().reverse() : cache[page]
        ),
        hasNext,
        isLoading: false,
        months: nextMonths
      });
    }

    try {
      const response = await fetch(`/pages/${page}.json`);

      const nextArticles = await response.json();
      const nextCache = { ...cache, [page]: nextArticles };

      return this.setState({
        articles: articles.concat(
          order === 'desc' ? nextArticles.slice().reverse() : nextArticles
        ),
        cache: nextCache,
        hasNext,
        isLoading: false,
        months: nextMonths
      });
    } catch (err) {
      return this.setState({ isLoading: false });
    }
  };

  resetArticles() {
    const { order } = this.state;

    let nextState;
    if (order === 'asc') {
      nextState = {
        articles: [],
        months: MONTHS_ASC
      };
    } else {
      nextState = {
        articles: INITIAL_ARTICLES,
        months: MONTHS_DESC
      };
    }

    this.setState(
      {
        ...nextState,
        hasNext: true,
        source: 'all'
      },
      () => {
        window.scrollTo(0, 0);

        return order === 'asc' && this.loadArticles();
      }
    );
  }

  render() {
    const { articles, hasNext, order, source } = this.state;

    const groupedArticles = groupBy(articles, ({ publishDate }) =>
      publishDate.slice(0, 7)
    );

    let count = 0;
    let articlesCount = 0;

    return (
      <div
        className={classnames(styles.container, {
          [styles.loaded]: !hasNext
        })}
      >
        <Header
          onSourceChange={this.handleSourceChange}
          onSortChange={this.handleSortChange}
          order={order}
          source={source}
        />
        <section className={styles.root}>
          {map(groupedArticles, (group, month) => {
            const sectionArticles = groupBy(group, 'publishDate');

            const component = (
              <Section
                group={sectionArticles}
                isFirst={count === 0}
                key={month}
                month={month}
                order={order}
                previousCount={articlesCount}
              />
            );

            count++;

            articlesCount += Object.keys(sectionArticles).length;

            return component;
          })}
        </section>
        {hasNext && (
          <InView
            as="div"
            className={styles.loaderContainer}
            onChange={this.handleLoadNext}
            rootMargin="400px"
          >
            <div className={styles.loader}>
              <div />
              <div />
              <div />
            </div>
          </InView>
        )}
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    );
  }
}
