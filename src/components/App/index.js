import React from 'react';

import Shelf from '../Shelf';
import Filter from '../Shelf/Filter';
import { Corner } from '../github/Corner';
import FloatCart from '../FloatCart';

const App = () => (
  <React.Fragment>
    <Corner />
    <main>
      <Filter />
      <Shelf />
    </main>
    <FloatCart />
  </React.Fragment>
);

export default App;
