//npm modules
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import $ from 'jquery';
import {Provider} from 'react-redux';

//Components
import Posts from './posts/Posts.jsx';
import Post from './post/Post.jsx';
import CreatePost from './create-post/CreatePost.jsx';
import Navbar from './navbar/Navbar.jsx';
import NoRoute from './NoRoute';

//Redux
import store from './store/store.js';
import {getPostsAsync} from './actions/actions.js';
console.log('STORE', store)

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

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Posts}/>
        <Route path="/create-post" component={CreatePost} />
        <Route path="/post/:id" component={Post} />
      </Route>
      <Route path="*" component={NoRoute} />
    </Router>
  </Provider>,
  document.getElementById('root')
)



export default App;
