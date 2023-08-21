import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
   `  <Router>
        <div>
          <Navbar />
          <Switch>
            <Route 
              exact path='/' 
              element={<SearchBooks/>}
            />
            <Route 
              exact path='/saved'
              element={<SavedBooks/>} 
            />
            <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
          </Switch>
        </div>
      </Router>`
    </ApolloProvider>
  );
}

export default App;
