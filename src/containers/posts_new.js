import React from 'react'
import { Row, Input, Button } from 'react-materialize'

class PostsNew extends React.Component {
  render() {
    return(
      <div>
        <h2>New Posts</h2>
        <form action="">
          <Row>
            <Input s={12} label="Title" />
            <Input s={12} label="Categories" />
            <Input s={12} label="Content" type="textarea" />
            <Button waves="light">Submit</Button>
          </Row>
        </form>
      </div>
    )
  }
}

export default PostsNew
