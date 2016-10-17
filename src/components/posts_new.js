import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
// like connect
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object // gives us access to this.context.router AVOID USING THIS EXCEPT ROUTER
  };

  onSubmit(props) { //Helper function gotta bind function
    this.props.createPost(props) // call action creater, which creates a promise
      .then(() => { 
        // blog post has been created, navigate the user to the index
        // we navigate by call this.context.router.push with the
        // new path to navigate to.
        // All conponents have react router with context
        this.context.router.push('/');
      });
  }

  render() { // const handleSubmit = this.props.handleSubmit
    // const title = this.props.fields.title
    const { fields: { title, categories, content }, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create A New Post</h3>

        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories}/>
          <div className="text-help">
            {categories.touched ? categories.error : ''}
          </div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label>Content</label>
          <textarea type="text" className="form-control" {...content}/>
          <div className="text-help">
            {content.touched ? content.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if(!values.title) {
    errors.title = 'Enter a username';
  }
  if(!values.categories) {
    errors.categories = 'Enter categories';
  }
  if(!values.content) {
    errors.content = 'Enter content';
  }

  return errors;
}

// reduxForm injects helpers onto the form and makes it easy it's on props
// connect: first arg is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: first arg is config, 2nd is mapStateToProps, 3rd mapDispatchToProps
export default reduxForm({
  form: 'PostsNewForm', 
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew);
//we have access to this.props.createPost This is the action creater
// when user types it updates the app state from component level to app level
