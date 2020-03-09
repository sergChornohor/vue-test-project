import Vue from 'vue';
import Vuex from 'vuex';
import { extractVuexModule } from 'vuex-class-component';
import { TaskStore } from './modules/TaskStore';
import { ActivityStore } from './modules/ActivityStore';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ...extractVuexModule(TaskStore),
    ...extractVuexModule(ActivityStore),
  },
});
