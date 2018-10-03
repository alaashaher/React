const { Link } = require('react-router')

const React = require('react');

import {
  NavLink
} from 'react-router-dom';

const Posts = (props) => (<div>Posts
    <ol>

    {props.posts.map((post, index) =>

      <li key={post.slug}><NavLink to={`/posts/${post.slug}`} >{post.title}</NavLink></li>
    )}

  </ol>
</div>
//mmmm
)

export default Posts;