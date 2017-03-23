import React from 'react'
import { Route, IndexRoute } from 'react-router'

// COMPONENT / CONTAINER
import App from './components/app'
import PostsIndex from './containers/posts_index'
import PostsNew from './containers/posts_new'




export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} />
    <Route path="new" component={PostsNew} />
  </Route>
)
