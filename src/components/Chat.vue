<template>
  <div id="chat">
    <div class="save-button">
      <button @click="saveToPng">이미지로 저장</button>
    </div>
    <div id="chat-preview" class="chat-preview" :class="[getCurrentPage.theme, getCurrentPage.font]">
      <div v-if="getCurrentPage.title" class="page-title">
        {{ getCurrentPage.title }}
      </div>
      <div class="chat-list">
        <div class="line"
          v-for="(chat, index) in getCurrentPage.chats"
          v-bind:class="getProfiles[chat.profile].direction">

          <div class="pic"
            v-if="isDuplicateProfile(index, chat.profile)"
            v-bind:style="{ 'background-image': 'url(' + getProfiles[chat.profile].pic + ')' }">
          </div>

          <div class="text-wrap">
            <div class="name" v-if="isDuplicateProfile(index, chat.profile)">
              {{ getProfiles[chat.profile].name }}
            </div>
            <div class="text" v-bind:class="{ bold : getCurrentPage.fontWeight, first: isDuplicateProfile(index, chat.profile) }" v-html="chat.text.replace(/\n/g, '<br>')"></div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'chat',
  data () {
    return {
    }
  },
  methods: {
    updatePageTitle: function (e) {
      this.$store.dispatch('updatePageTitle', e.target.value)
    },
    pageThemeChange: function (data) {
      this.$store.dispatch('pageThemeChange', data)
    },
    saveToPng: function () {
      var origin = document.getElementById('chat-preview')
      var temp = origin.cloneNode(true)
      var filename = 'chat-' + this.getChat.currentPage + '-' + Date.now() + '.png'
      document.getElementById('chat-render').innerHTML = ''
      document.getElementById('chat-render').appendChild(temp)
      window.html2canvas(document.getElementById('chat-render').lastChild, {
        onrendered: function (canvas) {
          document.getElementById('chat-render').innerHTML = ''
          var data = canvas.toDataURL()
          window.download(data, filename, 'image/png')
        }
      })
    },
    isDuplicateProfile: function (before, after) {
      if (before === 0) {
        return true
      } else {
        return !(this.getCurrentPage.chats[before - 1].profile === after)
      }
    }
  },
  computed: {
    getProfiles: function () {
      return this.$store.getters.profiles
    },
    getChat: function () {
      return this.$store.getters.chat
    },
    getCurrentPage: function () {
      return this.$store.getters.currentPage
    }
  }
}
</script>

<style lang="sass">
.font-default
  font-family: 'Noto Sans KR'
.font-nanum
  font-family: 'Nanum Gothic'
.font-malgun
  font-family: 'Malgun Gothic'
.font-nanum-mj
  font-family: 'Nanum Myeongjo'

#chat
  .save-button
    text-align: center
    padding: 20px
    button
      border: 0
      border-radius: 99px
      padding: 10px 20px
      margin: 0 auto
      background: #009EE7
      color: #ffffff
      cursor: pointer

#chat-preview
  zoom: 0.4
  width: 1200px
  min-height: 1800px
  height: auto
  margin: 0 auto 30px auto
  font-size: 38px
  box-sizing: border-box
  &:after
    content: ''
    display: block
    clear: both
  .page-title
    padding: 30px
    font-weight: bold
  .chat-list
    padding: 20px 0
    &:after
      content: ''
      display: block
      clear: both
    .line
      max-width: 80%
      position: relative
      clear: both
      margin-top: 10px
      margin-bottom: 10px
      box-sizing: border-box
      padding: 0 30px
      line-height: 1.5em
      &.left
        float: left
        .pic
          left: 30px
        .text-wrap
          margin-left: 170px
          .name
            text-align: left
          .text
            background: #ffffff
            &.first:before
              position: absolute
              left: -22px
              top: 22px
              display: block
              content: ''
              width: 22px
              height: 22px
              background-image: url('/static/png/chat-arrow.png')
              background-repeat: no-repeat
              background-size: cover
              background-position: center
      &.right
        float: right
        .pic
          display: none
        .text-wrap
          margin-right: 20px
          .name
            text-align: right
            display: none
          .text
            background: #73b785
      &:after
        content: ''
        display: block
        clear: both
      .pic
        position: absolute
        width: 130px
        height: 130px
        border-radius: 65px
        overflow: hidden
        background-size: cover
        background-repeat: no-repeat
        background-position: center
      .text-wrap
        margin-top: 0px
        .name
          margin-bottom: 20px
        .text
          position: relative
          padding: 20px 26px
          border-radius: 7px
          box-shadow: 1px 1px 2px 0 rgba(0,0,0,0.24)
          &.bold
            font-weight: bold

.dummy
  background: #3e4a5e
  .page-title
    background: rgba(0,0,0,0.5)
    color: #ffffff
  .line
    &.right
      .text-wrap
        .text
          background: #73b785 !important
          color: #ffffff !important
    .pic
    .text-wrap
      .name
        color: #ffffff
        margin-bottom: 20px
      .text
        padding: 20px
        background: #ffffff

.default
  background: #3e4a5e
  .page-title
    background: rgba(0,0,0,0.5)
    color: #ffffff
  .line
    &.right
      .text-wrap
        .text
          background: #73b785 !important
          color: #ffffff !important
    .pic
    .text-wrap
      .name
        color: #ffffff
        margin-bottom: 20px
      .text
        padding: 20px
        background: #ffffff
        box-shadow: 0 4px 8px rgba(0,0,0,0.5)

.kakao
  background: #A0C0D7
  .page-title
    background: rgba(0,0,0,0.3)
    color: #ffffff
  .line
    &.left
      .text-wrap
        .text
          background: #ffffff
    &.right
      .text-wrap
        .text
          background: #FFEC42 !important
    .pic
    .text-wrap
      .name
        color: #262626
        margin-bottom: 20px
      .text


</style>
