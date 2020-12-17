import axios from 'axios'

axios.interceptors.response.use(null, error => {
  const er = error.response
  const expectedError = er && er.status >= 400 && er.status < 500

  if (!expectedError) {
    console.log('logging error', error)
    alert('unexpected error occurred')
  }

  return Promise.reject(error)
})

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
}
