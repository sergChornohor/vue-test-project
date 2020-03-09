import {
  createModule, mutation, action,
} from 'vuex-class-component';
import { Tasks, Status } from '../../types';

const VuexModule = createModule({
  namespaced: 'task',
  strict: true,
});

// eslint-disable-next-line
export class TaskStore extends VuexModule {
  private tasks: Tasks[] = [];
}
