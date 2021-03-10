import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../../components/Header';

const ItemList = lazy(() => import('../ItemsList'));
const ItemDetail = lazy(() => import('../ItemDetail'));

const App = () => {
  const [ search, setSearch ] = useState('');

  const handleChange = e => {
    setSearch(e.target.value);
  }

  return (
    <Router>
      <Header value={search} onChange={handleChange} />
      <Suspense fallback={() => {}}>
        <Switch>
          <Route exact path="/items" component={ItemList} />
          <Route path="/items/:itemId" component={ItemDetail} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
