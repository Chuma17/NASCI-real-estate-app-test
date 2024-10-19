import React from 'react';
import ReactDOM from 'react-dom';
import PropertyDetail from './PropertyDetail';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PropertyDetail />, div);
  ReactDOM.unmountComponentAtNode(div);
});