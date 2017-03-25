import React from 'react'
import { reduxForm } from 'redux-form'
import { createPost } from '../actions/index'
import { Link, browserHistory } from 'react-router'

class PostsNew extends React.Component {

  onSubmitForm(props) {
    this.props.createPost(props)
      .then(() => {
        browserHistory.push('/')
      })
  }

  render() {
    const { fields: {title, categories, content}, handleSubmit } = this.props

    return(
      <div>
        <h3>New Post</h3>

        <form  className="post-form" onSubmit={handleSubmit(this.onSubmitForm.bind(this))}>
          <div className={`input-field ${title.touched && title.invalid ? 'has-danger' : ''}`}>
            <label htmlFor="title">Title</label>
            <input type="text" className="form" {...title} />
            <div className="text-help">
              {title.touched ? title.error : ''}
            </div>
          </div>

          <div className={`input-field ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
            <label htmlFor="categories">Category</label>
            <input type="text" className="form" {...categories} />
            <div className="text-help">
              {categories.touched ? categories.error : ''}
            </div>
          </div>

          <div className={`input-field ${content.touched && content.invalid ? 'has-danger' : ''}`}>
            <label htmlFor="content">Content</label>
            <textarea type="text" className="form" {...content} />
            <div className="text-help">
              {content.touched ? content.error : ''}
            </div>
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

const validate = (values) => {
  const errors = {}

  if (!values.title) {
    errors.title = "There is no title"
  }

  if (!values.categories) {
    errors.categories = "There is no category"
  }

  if (!values.content) {
    errors.content = "There is no content"
  }

  return errors
}

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'], validate
}, null, { createPost })(PostsNew)
