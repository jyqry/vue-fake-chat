<template>
  <div class="hello">
    <toolbar></toolbar>
    <div class="profile-wrap">
      <page-setting></page-setting>
      <profile></profile>
    </div>
    <div class="chat-setting-wrap">
      <chat-setting></chat-setting>
    </div>
    <div class="chats">
      <chat></chat>
    </div>
    <div id="chat-render"></div>
  </div>
</template>

<script>
import Toolbar from '@/components/Toolbar'
import Profile from '@/components/Profile'
import PageSetting from '@/components/PageSetting'
import Chat from '@/components/Chat'
import ChatSetting from '@/components/ChatSetting'

export default {
  name: 'hello',
  components: {
    Toolbar,
    Profile,
    PageSetting,
    Chat,
    ChatSetting
  },
  data () {
    return {
    }
  },
  methods: {

  },
  computed: {
    getChat: function () {
      return this.$store.getters.chat
    },
    currentPage: function () {
      return this.$store.getters.currentPage
    }
  }
}
</script>

<style lang="sass">
.profile-wrap
  position: fixed
  top: 0
  left: 0
  width: 240px
  height: 100%
  box-sizing: border-box
  padding: 40px 10px 10px 10px
  background: #ffffff
  border-right: 1px solid #E6E6E6
  word-break: break-all
  overflow: auto
.chat-setting-wrap
  position: fixed
  top: 0
  left: 240px
  width: 200px
  height: 100%
  box-sizing: border-box
  padding: 40px 0 0 0
  background: #ffffff
  border-right: 1px solid #E6E6E6
  word-break: break-all
.chats
  margin-top: 40px
  margin-left: 440px
.dev
  div
    margin: 20px 0

h2
  font-weight: bold
  font-size: 16px
  margin: 20px 0

#chat-render
  position: absolute
  left: 200%
  top: 0
  .chat-preview
    zoom: 1 !important
</style>
