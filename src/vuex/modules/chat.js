import * as types from '../mutation-types'

const state = {
  pages: [{
    title: '',
    theme: 'default',
    font: 'font-default',
    chats: []
  }],
  profiles: [{
    name: '홍길동',
    pic: '',
    type: 'normal',
    direction: 'left'
  }],
  currentPage: 0,
  page: {
    title: '',
    theme: 'default',
    font: 'font-default',
    fontWeight: false,
    chats: []
  },
  profile: {
    name: '홍길동',
    pic: '',
    type: 'normal',
    direction: 'left'
  },
  chat: {
    text: '',
    profile: ''
  }
}

/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
const mutations = {
  [types.CREATE_PAGE] (state) {
    var page = state.page
    state.pages.push(page)
  },
  [types.CREATE_PROFILE] (state) {
    var profile = state.profile
    state.profiles.push(profile)
  },
  [types.INSERT_CHAT_LINE] (state, data) {
    state.pages[state.currentPage].chats.push(data)
  },
  [types.PAGE_CHANGE] (state, data) {
    state.currentPage = data
  },
  [types.UPDATE_CHAT_LINE] (state, data) {
    var newData = JSON.parse(JSON.stringify(state.pages[state.currentPage].chats[data.index]))
    newData.text = data.text
    state.pages[state.currentPage].chats.splice(data.index, 1, newData)
  },
  [types.DELETE_CHAT_LINE] (state, data) {
    state.pages[state.currentPage].chats.splice(data, 1)
  },
  [types.PAGE_THEME_CHANGE] (state, data) {
    var newData = JSON.parse(JSON.stringify(state.pages[state.currentPage]))
    newData.theme = data
    state.pages.splice(state.currentPage, 1, newData)
  },
  [types.UPDATE_PAGE_TITLE] (state, data) {
    var newData = JSON.parse(JSON.stringify(state.pages[state.currentPage]))
    newData.title = data
    state.pages.splice(state.currentPage, 1, newData)
  },
  [types.UPDATE_PAGE_FONT] (state, data) {
    var newData = JSON.parse(JSON.stringify(state.pages[state.currentPage]))
    newData.font = data
    state.pages.splice(state.currentPage, 1, newData)
  },
  [types.UPDATE_PAGE_FONT_WEIGHT] (state, data) {
    var newData = JSON.parse(JSON.stringify(state.pages[state.currentPage]))
    newData.fontWeight = data
    state.pages.splice(state.currentPage, 1, newData)
  },
  [types.UPDATE_PROFILE_PICTURE] (state, data) {
    var newData = JSON.parse(JSON.stringify(state.profiles[data.index]))
    newData.pic = data.pic
    state.profiles.splice(data.index, 1, newData)
  },
  [types.UPDATE_PROFILE_DIRECTION] (state, data) {
    var newData = JSON.parse(JSON.stringify(state.profiles[data.index]))
    newData.direction = data.direction
    state.profiles.splice(data.index, 1, newData)
  },
  [types.UPDATE_PROFILE_NAME] (state, data) {
    var newData = JSON.parse(JSON.stringify(state.profiles[data.index]))
    newData.name = data.name
    state.profiles.splice(data.index, 1, newData)
  }
}

export default {
  state,
  mutations
}
