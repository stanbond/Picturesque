import React from 'react';
import ReactDOM from 'react-dom';
import conStore from './store/store';
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = conStore(preloadedState);
    delete window.currentUser;
  } else {
    store = conStore();
  }

  // Testing start
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // Testing end

  ReactDOM.render(<Root store={store} />, root);
});