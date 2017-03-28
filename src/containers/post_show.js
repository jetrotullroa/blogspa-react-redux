import React from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../actions/index'
import { Link } from 'react-router'



class PostsShow extends React.Component {

  componentWillMount(id) {
      this.props.fetchPost(this.props.params.id)
  }

  render() {
      if (!this.props.post) {
        return (
          <div className="row">
            <div className="col s12">
              <div className="col s6 offset-s6">
              <div className="preloader-wrapper big active valign-wrapper">
                <div className="spinner-layer spinner-blue-only valign">
                  <div className="circle-clipper left">
                    <div className="circle"></div>
                  </div><div className="gap-patch">
                    <div className="circle"></div>
                  </div><div className="circle-clipper right">
                    <div className="circle"></div>
                  </div>
                </div>
              </div>
            </div>
            </div>
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
                  <Link to="/">Back</Link>
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
