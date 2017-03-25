import React from 'react'
import { reduxForm } from 'redux-form'
import { createPost } from '../actions/index'
import { Link, browserHistory } from 'react-router'

class PostsNew extends React.Component {

  onSubmitForm(props) {
    this.props.createPost(props)
  }

  render() {
    const { fields: {title, categories, content}, handleSubmit } = this.props

    return(
      <div>
        <h3>New Post</h3>

        <form onSubmit={handleSubmit(this.onSubmitForm.bind(this))}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" {...title} />
          </div>

          <div className="form-group">
            <label htmlFor="categories">Category</label>
            <input type="text" className="form-control" {...categories} />
          </div>

          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea type="text" className="form-control" {...content} />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary">Submit</button>
            <span>&nbsp;</span>
            <Link to="/">Cancel</Link>
          </div>
        </form>

      </div>
    )
  }
}

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content']
}, null, { createPost })(PostsNew)
