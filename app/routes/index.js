import React from 'react';
// import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import * as urls from 'configs/page-url';

import HomePage from 'containers/HomePage/Loadable';
// import DetailPage from 'containers/DetailPage/Loadable';
// import CollectionPage from 'containers/CollectionPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage';

function RootRouter() {
  return (
    <Switch>
      <Route path={urls.URL_ROOT()} component={HomePage} exact />
      {/* <Route path={urls.URL_DETAIL(':id')} component={DetailPage} />
      <Route path={urls.URL_COLLECTIONS()} component={CollectionPage} /> */}
      <Route component={NotFoundPage} />
    </Switch>
  );
}

RootRouter.propTypes = {};

export default RootRouter;
