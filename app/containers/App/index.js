/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Layout } from 'antd';
import Routes from 'routes/index';
import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div``;

function App() {
  return (
    <AppWrapper>
      <Layout className="main">
        <Helmet
          titleTemplate="%s - SimplePokéApp"
          defaultTitle="A Pokémon Application"
        >
          <meta name="description" content="A Pokemon Application" />
        </Helmet>
        <Routes />
        <GlobalStyle />
      </Layout>
    </AppWrapper>
  );
}

App.propTypes = {};

export default App;
