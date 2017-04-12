import React, { Component } from 'react';
import LayoutContainer from '../layouts/LayoutContainer';
import LayoutHalfs from '../layouts/LayoutHalfs';
import LayoutMixedGrid from '../layouts/LayoutMixedGrid';
import Logo from '../atoms/Logo';
import Header from '../atoms/Header';
import Navigation from '../molecules/Navigation';
import NavigationItem from '../atoms/NavigationItem';
import ProjectPreview from '../organisms/ProjectPreview';

class Main extends Component {
  render() {

    return (
      <div className="main">
        <LayoutContainer>
          <LayoutHalfs modifiers="has-padding-top has-padding-bottom">
            <Logo />
            <Navigation>
              <NavigationItem title="Cases" link="/cases" />
              <NavigationItem title="About" link="/about" />
              <NavigationItem title="Contact" link="/contact" />
            </Navigation>
          </LayoutHalfs>
          <Header />
          <LayoutMixedGrid>
            {
              this.props.projects.items.map((project, i) =>
                <ProjectPreview key={`ProjectList-project-:${i}`} project={ project } />
              )
            }
          </LayoutMixedGrid>
        </LayoutContainer>
      </div>
    );
  }
}

export default Main;