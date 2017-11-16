import { easyStore } from 'react-easy-state'
import { fetchUsers, fetchUser, fetchCommentsForUser } from './api'

export default easyStore({
  users: [],
  query: 'endava',
  user: {},
  comments: [],
  userId: '',
  loading: false,
  async getUsers () {
    this.loading = true
    this.users = await fetchUsers(this.query)
    this.query = ''
    this.loading = false
  },
  async initComments (userId) {
    this.loading = true
    this.userId = userId
    this.user = await fetchUser(this.userId)
    this.comments = await fetchCommentsForUser(this.userId)
    this.loading = false
  }
})
