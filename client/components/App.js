import React from 'react';
import { connect } from 'react-redux';

import Nav from './Nav';
import Panel from './Panel';
import Screen from './Screen';

import Voice from './Voice';
import Manage from './Manage';
import Slides from './Slides';

import '../styles/App.scss';

const mapStateToProps = (state) => ({
  path: state.navigation.path,
});

const mapDispatchToProps = (dispatch) => ({});

const App = ({ path }) => {
  if (path === 'present') return ( <Screen size="full" /> );

  return (
    <div className="app">
      <Panel>
        <Nav items={['present', 'blackout']} />
        <Screen />
        <Screen show="preview" />
      </Panel>
      <Panel>
        <Nav items={['voice', 'slides', 'manage', 'sync']} />
        <Voice />
        <Manage />
        <Slides />
      </Panel>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
