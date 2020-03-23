import React from 'react';
import Layout from './components/Layout';
import ListsHeader from './containers/list/ScreenHeader';

import '@blueprintjs/core/lib/css/blueprint.css';
// @import "~normalize.css";
// @import "~@blueprintjs/core/lib/css/blueprint.css";
// @import "~@blueprintjs/icons/lib/css/blueprint-icons.css";

function App() {
  return (
    <Layout
      header={<ListsHeader />}
      // header={<div>BB</div>}
      body={<div>body</div>}
    />
  );
}

export default App;
