//npm modules
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import $ from 'jquery';

//Components
import Posts from './posts/Posts.jsx';
import PostPage from './post-page/PostPage.jsx';
import CreatePost from './create-post/CreatePost.jsx';
import Navbar from './navbar/Navbar.jsx';
import HomePage from './home-page/Home.jsx';
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
        <Navbar links={[{title: 'Posts', url: '/'}, {title: 'CreatePost', url: 'create-post'}]}/>
        {this.props.children}
      </div>
    );
  }

});

const appStyles = {
  backgroundColor: 'azure',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column'
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
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="create-post" component={CreatePost} />
      <Route path="/post/:id" component={PostPage} />
    </Route>
    <Route path="*" component={NoRoute} />
  </Router>,
  document.getElementById('root')
);

render();
store.subscribe(render);


export default App;
