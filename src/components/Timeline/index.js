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
const MONTHS_DESC = monthsData.slice(1);

export default class Timeline extends Component {
  state = {
    articles: INITIAL_ARTICLES,
    cache: { [monthsData[0]]: data.slice() },
    hasNext: true,
    isLoading: false,
    months: MONTHS_DESC,
    order: 'desc'
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

    let response;

    try {
      response = await fetch(`/pages/${page}.json`);

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

  render() {
    const { articles, hasNext, order } = this.state;

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
            [styles.loaded]: !hasNext
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
