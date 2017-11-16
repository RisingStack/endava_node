import { easyStore } from 'react-easy-state'
import { remove as removeItems } from 'lodash'
import { fetchUsers, fetchUser, fetchCommentsForUser, addComment, deleteComment } from './api'

export default easyStore({
  query: 'endava',
  users: [],
  userId: '',
  user: {},
  comments: [],
  commentText: '',
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
  },
  async addComment () {
    const comment = await addComment({ text: this.commentText, user: this.userId })
    this.comments.push(comment)
    this.commentText = ''
  },
  async deleteComment (commentId) {
    await deleteComment(commentId)
    removeItems(this.comments, comment => comment._id === commentId)
  }
})
