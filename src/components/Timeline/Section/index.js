import classnames from 'classnames';
import _ from 'lodash';
import React, { createRef, useState } from 'react';
import PropTypes from 'prop-types';

import { InView } from 'react-intersection-observer';
import Day from './Day';

import styles from './styles.module.css';

const MONTHS = {
  6: 'Junho',
  7: 'Julho',
  8: 'Agosto',
  9: 'Setembro'
};

const Section = ({ group, isFirst, month, previousCount }) => {
  const [isVisible, setVisible] = useState(isFirst);
  const [style, setStyle] = useState();

  let count = previousCount + 1;

  const node = createRef();
  const onChange = inView => {
    if (!inView) {
      setStyle({
        paddingTop:
          node.current.node.clientHeight - (window.innerWidth < 768 ? 40 : 100)
      });
      setVisible(false);
    } else {
      setStyle();
      setVisible(true);
    }
  };

  return (
    <InView
      as="div"
      className={classnames(styles.root, {
        [styles.hidden]: !isVisible
      })}
      onChange={onChange}
      ref={node}
      rootMargin="200px 0px"
      style={style}
    >
      {isVisible && (
        <>
          <h2
            className={classnames(styles.month, {
              [styles.first]: isFirst
            })}
          >
            {MONTHS[parseInt(month.slice(5, 7))]}
          </h2>
          {_.map(group, (articles, day) => {
            count++;
            return (
              <Day
                articles={articles}
                day={day}
                key={day}
                left={!!(count % 2)}
              />
            );
          })}
        </>
      )}
    </InView>
  );
};

Section.propTypes = {
  group: PropTypes.object.isRequired,
  isFirst: PropTypes.bool,
  month: PropTypes.string.isRequired,
  previousCount: PropTypes.number
};

export default Section;
