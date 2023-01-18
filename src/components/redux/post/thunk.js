import {getPostsActionCreator, getPostsFailureActionCreator, getPostsReceiveActionCreator} from "./actions";

const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(getPostsActionCreator())
    try {
      const request = await fetch('https://jsonplaceholder.typicode.com/posts');
      const parseData = await request.json()
      setTimeout(() => {
        dispatch(getPostsReceiveActionCreator(parseData))
      }, 2000)
    } catch (e) {
        dispatch(getPostsFailureActionCreator(e))
    }
  }
}

export default {
  fetchPosts
}