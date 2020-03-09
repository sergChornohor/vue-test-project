import {
  createModule, mutation, action,
} from 'vuex-class-component';
import { ActivityPosts } from '../../types';

const VuexModule = createModule({
  namespaced: 'activity',
  strict: true,
});

// eslint-disable-next-line
export class ActivityStore extends VuexModule {
  private posts: ActivityPosts[] = [];
}
