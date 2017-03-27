import React from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../actions/index'



class PostsShow extends React.Component {

  componentWillMount(id) {
      this.props.fetchPost(this.props.params.id)
  }

  render() {
      if (!this.props.post) {
        return (
           <div>
          <h1>L O A D I N G . . .</h1>
        </div>
      )
      } else {
        return (<div>
          <div className="row">
            <div className="col s12">
              <div className="card blue-grey darken-1 center">
                <div className="card-content white-text">
                  <span className="card-title">{this.props.post.title}</span>
                  <h6>{this.props.post.categories}</h6>
                  <p>{this.props.post.content}</p>
                </div>
                <div className="card-action">
                  <a href="#">This is a link</a>
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
      }
  }
}

const mapStateToProps = (state) => {
  return {
    post : state.posts.post
  }
}

export default connect(mapStateToProps, { fetchPost })(PostsShow)
