import { commonState } from '@/types/views/common.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as HomeApi from '@/api/home'

const state: commonState = {
  author: '三毛',
  publicPath: ''
}

// 强制使用getter获取state
const getters: GetterTree<commonState, any> = {
  author: (state: commonState) => state.author
}

// 更改state
const mutations: MutationTree<commonState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: commonState, data: commonState) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) { return }
      state[key] = data[key]
    }
  }
}

const actions: ActionTree<commonState, any> = {
  UPDATE_STATE_ASYN({ commit, state: commonState }, data: commonState) {
    commit('UPDATE_STATE', data)
  },
  // GET_DATA_ASYN({ commit, state: LoginState }) {
  //   Home.getData()
  // }
}

export default {
  state,
  getters,
  mutations,
  actions
}

