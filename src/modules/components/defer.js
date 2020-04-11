/* eslint-disable react/no-multi-comp, react/no-did-mount-set-state */

import React from 'react';
import * as PropTypes from 'prop-types';

export class Defer extends React.Component {
  state = {
    mounted: false,
  };

  componentDidMount() {
    this.setState({
      mounted: true,
    });
  }

  render() {
    if (this.state.mounted) {
      return this.props.children;
    }

    return null;
  }
}

Defer.displayName = 'Defer';

Defer.propTypes = {
  children: PropTypes.node,
};

function defer(Component) {
  class DeferHOC extends React.Component {
    state = {
      mounted: false,
    };

    componentDidMount() {
      this.setState({
        mounted: true,
      });
    }

    render() {
      return <Component mounted={this.state.mounted} {...this.props} />;
    }
  }

  DeferHOC.displayName = 'DeferHOC';

  return DeferHOC;
}

export default defer;

