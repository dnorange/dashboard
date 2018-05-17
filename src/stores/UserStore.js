import { observable, action, extendObservable } from 'mobx';
import { get } from 'lodash';
import Store from './Store';

export default class UserStore extends Store {
  @observable users = [];
  @observable userDetail = {};
  @observable isLoading = false;
  @observable totalCount = 0;

  constructor(initialState) {
    super(initialState, 'userStore');
  }

  @action
  async fetchUsers({ page }) {
    this.isLoading = true;
    page = page ? page : 1;
    const result = await this.request.get('users', { _page: page });
    this.users = get(result, 'user_set', []);
    this.totalCount = get(result, 'total_count', 0);
    this.isLoading = false;
  }

  @action
  async fetchUsersDetail(userId) {
    this.isLoading = true;
    const result = await this.request.get(`users`, { user_id: userId });
    this.userDetail = get(result, 'app_set[0]', {});
    this.isLoading = false;
  }
}