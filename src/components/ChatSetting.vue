<template>
  <div id="chat-setting">
    <div class="chat-preview">
      <div class="line" v-for="(chat, index) in getCurrentPage.chats">
        <div class="name">
          #{{chat.profile}} {{ getProfiles[chat.profile].name }}
          <button class="delete" @click="deleteChatLine(index)">
            삭제
          </button>
        </div>
        <div class="text">
          <textarea :value="chat.text" @change="updateChatLine(index, $event)"></textarea>
        </div>
      </div>
    </div>
    <div class="input-form">
      <div class="profile-selector">
        <select @change="profileChanged">
          <option v-for="(profile, index) in getProfiles" :value="index">#{{index}} {{ profile.name }}</option>
        </select>
        <div class="text">
          <textarea :value="currentChat" @change="currentChatUpdate"></textarea>
        </div>
        <div class="submit" @click="insertChatLine">
          입력
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'chat-setting',
  data () {
    return {
      profileIndex: 0,
      currentChat: ''
    }
  },
  methods: {
    updatePageTitle: function (e) {
      this.$store.dispatch('updatePageTitle', e.target.value)
    },
    pageThemeChange: function (data) {
      this.$store.dispatch('pageThemeChange', data)
    },
    profileChanged: function (e) {
      this.profileIndex = e.target.value
    },
    insertChatLine: function () {
      var data = {
        profile: this.profileIndex,
        text: this.currentChat
      }
      if (this.currentChat !== '') {
        this.$store.dispatch('insertChatLine', data)
      }
      this.currentChat = ''
    },
    updateChatLine: function (index, e) {
      var data = {
        index: index,
        text: e.target.value
      }
      this.$store.dispatch('updateChatLine', data)
    },
    deleteChatLine: function (index) {
      this.$store.dispatch('deleteChatLine', index)
    },
    currentChatUpdate: function (e) {
      this.currentChat = e.target.value
    }
  },
  computed: {
    getProfiles: function () {
      return this.$store.getters.profiles
    },
    getCurrentPage: function () {
      return this.$store.getters.currentPage
    }
  }
}
</script>

<style scoped lang="sass">
#chat-setting
  width: 100%
  height: 100%
  box-sizing: border-box
  padding-bottom: 110px
  .chat-preview
    width: 100%
    height: 100%
    box-sizing: border-box
    overflow: auto
    .line
      padding: 5px
      border-bottom: 1px solid #e6e6e6
      font-size: 14px
      .name
        font-weight: bold
      .text
        textarea
          width: 100%
          height: 40px
          box-sizing: border-box
      .delete
        color: #ff0000

  .input-form
    position: absolute
    left: 0
    bottom: 0
    width: 100%
    height: 110px
    background: #ffffff
    box-sizing: border-box
    border-top: 1px solid #e6e6e6
    select
      width: 100%
      height: 25px
    .text
      height: 45px
      textarea
        width: 100%
        height: 100%
        border: 0
        box-sizing: border-box
    .submit
      width: 100%
      height: 40px
      line-height: 40px
      border-top: 1px solid #e6e6e6
      text-align: center
      box-sizing: border-box
      color: #009EE7
      cursor: pointer
</style>
