import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import App from './App';
import { store } from './store/store';
import './index.css';


const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);  
