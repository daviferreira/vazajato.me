import classnames from 'classnames';
import groupBy from 'lodash.groupby';
import map from 'lodash.map';
import React, { Component } from 'react';
import { InView } from 'react-intersection-observer';

import Footer from '../Footer';
import Section from './Section';
import Sort from '../Sort';

import data from '../../../public/pages/data.json';
import monthsData from '../../../public/pages/months.json';

import styles from './styles.module.css';

const INITIAL_ARTICLES = data.slice().reverse();
const MONTHS_ASC = monthsData.slice().reverse();

export default class Timeline extends Component {
  state = {
    articles: INITIAL_ARTICLES,
    cache: { [monthsData[0]]: data.slice() },
    hasLoadedAll: false,
    hasNext: true,
    isLoading: false,
    months: monthsData.slice(1),
    order: 'desc'
  };

  handleSortChange = () => {
    const { articles, hasLoadedAll, order } = this.state;

    const nextOrder = order === 'asc' ? 'desc' : 'asc';

    let nextState;
    if (hasLoadedAll) {
      nextState = {
        articles: articles.slice().reverse(),
        hasNext: false
      };
    } else if (nextOrder === 'asc') {
      nextState = {
        articles: [],
        months: MONTHS_ASC
      };
    } else {
      nextState = {
        articles: INITIAL_ARTICLES,
        months: monthsData.slice(1)
      };
    }

    this.setState({ hasNext: true, order: nextOrder, ...nextState }, () => {
      window.scrollTo(0, 0);

      return !hasLoadedAll && nextOrder === 'asc' && this.loadArticles();
    });
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

    if (cache[page]) {
      return this.setState({
        articles: articles.concat(
          order === 'desc' ? cache[page].slice().reverse() : cache[page]
        ),
        hasNext: !!nextMonths.length,
        isLoading: false,
        months: nextMonths
      });
    }

    let response;

    try {
      response = await fetch(`/pages/${page}.json`);

      const nextArticles = await response.json();
      const nextCache = { ...cache, [page]: nextArticles };

      const hasLoadedAll = Object.keys(nextCache).length === monthsData.length;
      const hasNext = !!nextMonths.length;

      return this.setState({
        articles: articles.concat(
          order === 'desc' ? nextArticles.slice().reverse() : nextArticles
        ),
        cache: nextCache,
        hasLoadedAll,
        hasNext,
        isLoading: false,
        months: nextMonths
      });
    } catch (err) {
      return this.setState({ isLoading: false });
    }
  };

  render() {
    const { articles, hasLoadedAll, hasNext, order } = this.state;

    const groupedArticles = groupBy(articles, ({ publishDate }) =>
      publishDate.slice(0, 7)
    );

    let count = 0;
    let articlesCount = 0;

    return (
      <>
        <Sort onClick={this.handleSortChange} order={order} />
        <section
          className={classnames(styles.root, {
            [styles.loaded]: !hasNext || hasLoadedAll
          })}
        >
          {map(groupedArticles, (group, month) => {
            const sectionArticles = groupBy(group, 'publishDate');

            const component = (
              <Section
                group={sectionArticles}
                isFirst={count === 0}
                key={month}
                month={month}
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
            rootMargin="800px 0px"
          >
            <div className={styles.loader}>
              <div />
              <div />
              <div />
            </div>
          </InView>
        )}
        <Footer />
      </>
    );
  }
}
