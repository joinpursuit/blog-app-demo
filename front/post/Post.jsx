import React from 'react';
import {Link} from 'react-router';
import Transition from 'react-inline-transition-group';

const Post = React.createClass({
  render: function() {
    return (
      <Transition
        childrenStyles={{
          base: styles.base,
          appear: styles.appear,
          enter: styles.appear,
          leave: styles.leave,
        }} >
      <div>
        <Link to={`/post/${this.props.post._id}`}><h2>{this.props.post.title}</h2></Link>
        <p>{this.props.post.text}</p>

      </div>
    </Transition>
    );
  }
});

Post.propTypes = {
  post: React.PropTypes.object
}

const styles = {
  base: {
    opacity: '0.1',
  },
  appear: {
    opacity: '1',
    transition: 'all 3000ms',
  },
  leave: {
    background: '#F00',
    transition: 'all 250ms',
  },
};

export default Post;
