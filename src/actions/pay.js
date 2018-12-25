import Services from '../api/services'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const INVALIDATE_PAYLOAD = 'INVALIDATE_PAYLOAD'
export const FETCH_STATUS_SUCCESS = 'SUCCESS'
export const FETCH_STATUS_EXCEPTION = 'EXCEPTION'
export const FETCH_STATUS_FAILURE = 'FAILURE'


export const invalidatePayLoad = () => ({
  type: INVALIDATE_PAYLOAD
})

export const requestPosts = () => ({
  type: REQUEST_POSTS
})

export const receivePosts = (json, fetchStatus) => ({
  type: RECEIVE_POSTS,
  fetchStatus: fetchStatus,
  response: json
})

const fetchPosts = dispatch => {
  dispatch(requestPosts())
  return Services.getData()
    .then(
    function (response) {
      // //async ajax
      // response.json().then(json => {
      //   dispatch(receivePosts(json, FETCH_STATUS_SUCCESS))
      // })
      dispatch(receivePosts(response, FETCH_STATUS_SUCCESS))
    },
    function (error) {
      dispatch(receivePosts({}, FETCH_STATUS_FAILURE))
    }
    )
}

const shouldFetchPosts = (state) => {
  const posts = state.payLoad
  if (!posts || Object.keys(posts).length === 0) {
    return true
  }
  if (posts.isFetching) {
    return false
  }
  return posts.didInvalidate
}

export const fetchPostsIfNeeded = (dispatch, getState) => {
  if (shouldFetchPosts(getState())) {
    return dispatch(fetchPosts)
  }
}