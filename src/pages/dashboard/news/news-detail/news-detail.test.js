import React from 'react';
import ReactDOM from 'react-dom';
import NewsNewsDetail from './NewsNewsDetail';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewsNewsDetail />, div);
  ReactDOM.unmountComponentAtNode(div);
});