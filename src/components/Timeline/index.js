import classnames from 'classnames';
import groupBy from 'lodash.groupby';
import map from 'lodash.map';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InView } from 'react-intersection-observer';

import Footer from '../Footer';
import Section from './Section';
import Header from './Header';

import data from '../../../public/pages/data.json';
import monthsData from '../../../public/pages/months.json';

import * as styles from './styles.module.css';

const INITIAL_ARTICLES = data.slice();
const MONTHS_ASC = monthsData.slice(1);
const MONTHS_DESC = monthsData.slice().reverse();

const Loader = () => (
  <div className={styles.loader}>
    <div />
    <div />
    <div />
  </div>
);

export default class Timeline extends Component {
  state = {
    articles: INITIAL_ARTICLES,
    cache: { [monthsData[0]]: data.slice() },
    hasNext: true,
    isLoading: false,
    months: MONTHS_ASC,
    order: 'asc',
  };

  handleSortChange = () => {
    const { articles, hasNext, order } = this.state;

    const nextOrder = order === 'asc' ? 'desc' : 'asc';

    let nextState;
    if (!hasNext) {
      nextState = {
        articles: articles.slice().reverse(),
      };
    } else if (nextOrder === 'asc') {
      nextState = {
        articles: INITIAL_ARTICLES,
        months: MONTHS_ASC,
      };
    } else {
      nextState = {
        articles: [],
        months: MONTHS_DESC,
      };
    }

    this.setState({ order: nextOrder, ...nextState }, () => {
      window.scrollTo(0, 0);

      return hasNext && nextOrder === 'desc' && this.loadArticles();
    });
  };

  handleLoadNext = (inView) => {
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
        isLoading: true,
      },
      () => this.fetchArticles(page),
    );
  };

  fetchArticles = async (page) => {
    const { articles, cache, months, order } = this.state;

    const nextMonths = months.slice(1);
    const hasNext = !!nextMonths.length;

    if (cache[page]) {
      return this.setState({
        articles: articles.concat(
          order === 'desc' ? cache[page].slice().reverse() : cache[page],
        ),
        hasNext,
        isLoading: false,
        months: nextMonths,
      });
    }

    try {
      const response = await fetch(`/pages/${page}.json`);

      const nextArticles = await response.json();
      const nextCache = { ...cache, [page]: nextArticles };

      return this.setState({
        articles: articles.concat(
          order === 'desc' ? nextArticles.slice().reverse() : nextArticles,
        ),
        cache: nextCache,
        hasNext,
        isLoading: false,
        months: nextMonths,
      });
    } catch (err) {
      return this.setState({ isLoading: false });
    }
  };

  render() {
    const { articles, hasNext, isLoading, order } = this.state;
    const { location } = this.props;

    const groupedArticles = groupBy(articles, ({ publishDate }) =>
      publishDate.slice(0, 7),
    );

    let count = 0;
    let articlesCount = 0;

    return (
      <div
        className={classnames({
          [styles.loaded]: !hasNext,
        })}
      >
        <Header
          location={location}
          onSortChange={this.handleSortChange}
          order={order}
          source="all"
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
        {hasNext &&
          (isLoading ? (
            <div className={styles.loaderContainer}>
              <Loader />
            </div>
          ) : (
            <InView
              as="div"
              className={styles.loaderContainer}
              onChange={this.handleLoadNext}
              rootMargin="400px"
            >
              <Loader />
            </InView>
          ))}
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    );
  }
}

Timeline.propTypes = {
  location: PropTypes.object,
};
