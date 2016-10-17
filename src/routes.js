import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

//Whenever user is at this path show component | IndexRoute is shown on default path
export default (
  <Route path="/" component={App} >
    <IndexRoute component={PostsIndex} />
    <Route path="posts/new" component={PostsNew}/>
    <Route path="posts/:id" component={PostsShow} />
  </Route>
); 
// this is done by react-router for us | this.props.params.id
