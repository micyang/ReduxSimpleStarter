import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
// like connect
import { createPost } from '../actions/index';


class PostsNew extends Component {
  render() { // const handleSubmit = this.props.handleSubmit
    // const title = this.props.fields.title
    const { fields: { title, categories, content }, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}> // needs action creator
        <h3>Create A New Post</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title} /> // destructoring of object and passes into input
        </div>

        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories}/>
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea type="text" className="form-control" {...content}/>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

// reduxForm injects helpers onto the form and makes it easy it's on props
export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content']
})(PostsNew);

// when user types it updates the app state from component level to app level
