import * as types from './mutation-types'

export const newPage = ({ commit }) => {
  commit(types.CREATE_PAGE)
}
export const newProfile = ({ commit }) => {
  commit(types.CREATE_PROFILE)
}
export const pageChange = ({ commit }, data) => {
  commit(types.PAGE_CHANGE, data)
}
export const pageThemeChange = ({ commit }, data) => {
  commit(types.PAGE_THEME_CHANGE, data)
}
export const updatePageTitle = ({ commit }, data) => {
  commit(types.UPDATE_PAGE_TITLE, data)
}
export const updatePageFont = ({ commit }, data) => {
  commit(types.UPDATE_PAGE_FONT, data)
}
export const updatePageFontWeight = ({ commit }, data) => {
  commit(types.UPDATE_PAGE_FONT_WEIGHT, data)
}
export const updateProfilePicture = ({ commit }, data) => {
  commit(types.UPDATE_PROFILE_PICTURE, data)
}
export const updateProfileDirection = ({ commit }, data) => {
  commit(types.UPDATE_PROFILE_DIRECTION, data)
}
export const updateProfileName = ({ commit }, data) => {
  commit(types.UPDATE_PROFILE_NAME, data)
}
export const insertChatLine = ({ commit }, data) => {
  commit(types.INSERT_CHAT_LINE, data)
}
export const updateChatLine = ({ commit }, data) => {
  commit(types.UPDATE_CHAT_LINE, data)
}
export const deleteChatLine = ({ commit }, data) => {
  commit(types.DELETE_CHAT_LINE, data)
}
