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
import {getPostsAsync} from './posts/posts-actions.js';
import {getSinglePostAsync} from './post/post-actions.js';


const App = (props) => (
    <div >
      <Navbar links={[{title: 'Posts', url: '/'}, {title: 'CreatePost', url: 'create-post'}]}/>
      {props.children}
    </div>
)

const getPost = (nextState) => {store.dispatch(getSinglePostAsync(nextState.params.id))}
const getAllPosts = () => {store.dispatch(getPostsAsync())}

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
