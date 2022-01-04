/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';

// type Props = {

// }

export function Movie({ id, name }) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{name}</p>
            <p className="subtitle is-6">{id}</p>
          </div>
        </div>

        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
};

Movie.defaultProps = {
  name: 'some movie',
  id: 0,
};
