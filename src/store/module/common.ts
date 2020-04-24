import { CommonState } from '@/types/views/common.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as HomeApi from '@/api/home'

const state: CommonState = {
  author: '三毛',
  publicPath: ''
}

// 强制使用getter获取state
const getters: GetterTree<CommonState, any> = {
  author: (state: CommonState) => state.author
}

// 更改state
const mutations: MutationTree<CommonState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: CommonState, data: CommonState) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) { return }
      state[key] = data[key]
    }
  }
}

const actions: ActionTree<CommonState, any> = {
  UPDATE_STATE_ASYN({ commit, state: CommonState }, data: CommonState) {
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

