import { store, params } from 'react-easy-stack';
import { remove as removeItems } from 'lodash';
import {
  fetchUsers,
  fetchUser,
  fetchCommentsForUser,
  addComment,
  deleteComment
} from './api';

const appStore = store({
  users: [],
  userId: '',
  user: {},
  comments: [],
  commentText: '',
  isLoading: false,
  async getUsers() {
    appStore.users = await fetchUsers(params.query);
  },
  async getComments() {
    appStore.user = await fetchUser(params.userId);
    appStore.comments = await fetchCommentsForUser(params.userId);
  },
  async addComment() {
    const comment = await addComment({
      text: appStore.commentText,
      user: params.userId
    });
    appStore.comments.push(comment);
    appStore.commentText = '';
  },
  async deleteComment(commentId) {
    await deleteComment(commentId);
    removeItems(appStore.comments, comment => comment._id === commentId);
  },
  startLoading() {
    this.isLoading = true;
  },
  stopLoading() {
    this.isLoading = false;
  }
});
export default appStore;
