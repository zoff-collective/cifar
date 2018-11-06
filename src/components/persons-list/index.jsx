import React, { Component } from 'react';

import Constraint from '../constraint';
import Network from '../network';
import Person from './person';

import data from './data';

const updateHistory = view => {
  const url = window && new URL(window.location.href);
  const param = 'view';

  if (url && view === 'network') {
    url.searchParams.append(param, 'network');
  } else if (url) {
    url.searchParams.delete(param);
  }

  window.history.pushState(null, document.title, url);
};

export default class PersonList extends Component {
  state = {
    view: 'list'
  };

  updateView = event => {
    const { value } = event.target;

    updateHistory(value);

    this.setState({ view: value });
  };

  render() {
    const { persons } = this.props;
    const { view } = this.state;
    const url = window && new URL(window.location.href);
    const showGraph =
      (url && url.searchParams.get('view') === 'network') || view === 'network';

    return (
      <Constraint>
        Show as:
        <label>
          List
          <input
            type="radio"
            name="view"
            value="list"
            checked={!showGraph}
            onChange={this.updateView}
          />
        </label>
        <label>
          Network
          <input
            type="radio"
            name="view"
            value="network"
            checked={showGraph}
            onChange={this.updateView}
          />
        </label>
        {showGraph && <Network data={data} />}
        {!showGraph && (
          <ul>
            {persons &&
              persons.map(({ node }) => (
                <Person key={node.frontmatter.title} {...node} />
              ))}
          </ul>
        )}
      </Constraint>
    );
  }
}
