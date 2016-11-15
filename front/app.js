//npm modules
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

//Components
import PostsContainer from './posts/PostsContainer.jsx';
import PostContainer from './post/PostContainer.jsx';
import CreatePost from './create-post/CreatePost.jsx';
import Navbar from './navbar/Navbar.jsx';
import NoRoute from './404/NoRoute';

//Redux
import store from './store/store.js';

//Route utils
import {getPost, getAllPosts} from './route-utils';


const App = (props) => (
    <div >
      <Navbar links={[{title: 'Posts', url: '/'}, {title: 'CreatePost', url: 'create-post'}]}/>
      {props.children}
    </div>
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={PostsContainer}  onEnter={getAllPosts}/>
        <Route path="/create-post" component={CreatePost} />
        <Route path="/post/:id" component={PostContainer}  onEnter={getPost}/>
      </Route>
      <Route path="*" component={NoRoute} />
    </Router>
  </Provider>,
  document.getElementById('root')
)

export default App;
