import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPosts } from '../actions'
import { Link } from 'react-router'


class PostsIndex extends React.Component {

  componentWillMount() {
    this.props.fetchPosts()
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return(
        <li className="collection-item" key={post.id}>
          <strong>{post.title}</strong>
          <span className="secondary-content">{post.categories}</span>
        </li>
      )
    })
  }

  render() {
    return(
      <div>
        <div className="row valign-wrapper">
          <h2 className="col s6 left-align valign">All Posts</h2>
          <span className="col s6 right-align valign">
            <Link to="new" className="btn btn-primary">New Post</Link>
          </span>
        </div>
        <ul className="collection with-header">
          <li className="collection-header"><h4>Recent Posts</h4></li>
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchPosts: fetchPosts }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.all
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex)
