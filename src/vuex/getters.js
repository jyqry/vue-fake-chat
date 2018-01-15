/* eslint-disable import/prefer-default-export */
export const pages = state => state.chat.pages
export const currentPage = state => state.chat.pages[state.chat.currentPage]
export const chat = state => state.chat
export const profiles = state => state.chat.profiles
export const oneProfile = state => index => state.chat.profiles[index]
