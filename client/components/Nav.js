import React from 'react';
import { connect } from 'react-redux';
import {
  navigate as navigateAction,
  setMode as setModeAction,
} from '../../actions';
import { modes } from '../../shared/modes';
import '../styles/Nav.scss';

const Item = ({ title, style, action }) => (
  <button className={`nav__item ${style ? `-${style}` : ''}`} onClick={action}>{ title }</button>
);

const mapItems = (items, navigate, setMode) => items.map((item) => {
  let props = {
    title: item,
    style: null,
    action: () => navigate(item),
  };

  switch(item) {
    case 'blackout':
      props = {
        ...props,
        style: 'blackout',
        action: () => setMode(modes.BLACKOUT, true)
      }
      break;
    case 'sync': // TODO
  }

  return ( <Item key={item} {...props} /> );
});

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  navigate: path => dispatch(navigateAction(path)),
  setMode: (mode, isLive) => dispatch(setModeAction(mode, isLive)),
});

const Nav = ({ items, navigate, setMode }) => (
  <div className="nav">
    { mapItems(items, navigate, setMode) }
  </div>
);

Nav.defaultProps = {
  items: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
