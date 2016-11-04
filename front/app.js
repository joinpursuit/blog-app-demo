//npm modules
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import $ from 'jquery';

//Components
import Posts from './posts/Posts.jsx';
import PostPage from './post-page/PostPage.jsx';
import CreatePost from './create-post/CreatePost.jsx';
import Navbar from './navbar/Navbar.jsx';
import NoRoute from './NoRoute';

//Redux
import store from './store/store.js';
import {getPostsAsync} from './actions/actions.js';

const App = React.createClass({
  componentDidMount() {
    store.dispatch(getPostsAsync())
  },
  render: function() {
    return (
      <div style={appStyles}>
        <Posts posts={store.getState().posts}/>
        {this.props.children}
      </div>
    );
  }

});

const appStyles = {
  backgroundColor: 'azure'
}

// ReactDOM.render(
//   <Router history={browserHistory}>
//     <Route path="/" component={App} />
//     <Route path="create-post" component={CreatePost} />
//     <Route path="/post/:id" component={PostPage} />
//     <Route path="*" component={NoRoute} />
//   </Router>,
//   document.getElementById('root')
// )


const render = () => ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="create-post" component={CreatePost} />
    <Route path="/post/:id" component={PostPage} />
    <Route path="*" component={NoRoute} />
  </Router>,
  document.getElementById('root')
);

render();
store.subscribe(render);


export default App;
