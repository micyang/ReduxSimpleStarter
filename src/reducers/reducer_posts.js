import { FETCH_POSTS } from '../actions/index';

// two pieces of app state in reducer
//: an array to hold list of blog posts (title/cat)
// active post state with all the content
const INITIAL_STATE = {
  all: [],
  post: null
};

// data we care about is in action.payload.data
export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_POSTS:
      return { ...state, all: action.payload.data};
    default:
      return state;
  }
}