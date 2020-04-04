import React from 'react';
import Layout from './components/Layout';
import ListsHeader from './containers/list/ScreenHeader';
import ListFooter from './containers/list/Footer';
import ListBody from './containers/list/Body';

import '@blueprintjs/core/lib/css/blueprint.css';
// @import "~normalize.css";
// @import "~@blueprintjs/core/lib/css/blueprint.css";
// @import "~@blueprintjs/icons/lib/css/blueprint-icons.css";

function App() {
  return (
    <Layout
      header={<ListsHeader />}
      body={<ListBody />}
      footer={<ListFooter />}
    />
  );
}

export default App;
