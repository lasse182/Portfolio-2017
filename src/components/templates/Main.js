import React, { Component } from 'react';
import LayoutContainer from '../layouts/LayoutContainer';
import LayoutOneThird from '../layouts/LayoutOneThird';
import Navigation from '../molecules/Navigation';
import NavigationItem from '../atoms/NavigationItem';

class Main extends Component {
  render() {
    return (
      <LayoutContainer>
        <LayoutOneThird modifiers="has-padding-top has-padding-bottom">
          <h1>Lasse Iversen</h1>
          <Navigation>
            <NavigationItem title="Cases" link="/cases" />
            <NavigationItem title="About" link="/about" />
            <NavigationItem title="Contact" link="/contact" />
          </Navigation>
        </LayoutOneThird>
      </LayoutContainer>
    );
  }
}

export default Main;