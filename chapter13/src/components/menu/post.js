const React = require('react')


const Post = ({ match }) => (
  <div>
    <h3>{match.params.id}</h3>
  </div>
)


export default Post;

