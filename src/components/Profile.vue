<template>
  <div id="profile">
    <div class="profiles">
      <h2>프로필 목록</h2>
      <div
      v-for="(profile, index) in getProfiles"
      class="profile">
        <div class="title">
          #{{ index }}
          <input type="text" class="name" :value="profile.name" @input="updateProfileName(index, $event)">
        </div>
        <div class="inner">
          <div class="pic">
            <input type="file" @change="onProfileChange(index, $event)">
          </div>
          <div class="direction">
            <div @click="updateProfileDirection(index, 'left')" :class="{ active: profile.direction === 'left' }">왼쪽</div>
            <div @click="updateProfileDirection(index, 'right')" :class="{ active: profile.direction === 'right' }">오른쪽</div>
          </div>
        </div>
      </div>
      <div class="profile-new profile" v-on:click="newProfile">
        프로필 추가
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profile',
  components: {
  },
  data () {
    return {
      profileIndex: 0
    }
  },
  methods: {
    newProfile: function () {
      this.$store.dispatch('newProfile')
    },
    onProfileChange (index, event) {
      var input = event.target
      if (input.files && input.files[0]) {
        var reader = new FileReader()
        this.profileIndex = index
        reader.onload = (e) => {
          this.updateProfilePicture(e.target.result)
        }
        reader.readAsDataURL(input.files[0])
      }
    },
    updateProfilePicture: function (data) {
      var temp = {
        index: this.profileIndex,
        pic: data
      }
      this.$store.dispatch('updateProfilePicture', temp)
    },
    updateProfileDirection: function (index, data) {
      var temp = {
        index: index,
        direction: data
      }
      this.$store.dispatch('updateProfileDirection', temp)
    },
    updateProfileName: function (index, e) {
      var temp = {
        index: index,
        name: e.target.value
      }
      this.$store.dispatch('updateProfileName', temp)
    }
  },
  computed: {
    getChat: function () {
      return this.$store.getters.chat
    },
    getProfiles: function () {
      return this.$store.getters.profiles
    }
  }
}
</script>

<style scoped lang="sass">
#profile
  width: 100%
  overflow: auto
  z-index: 500
  input
    max-width: 100%
  .profile
    margin-bottom: 10px
    border: 1px solid #E6E6E6
    .title
      color: #333333
      padding: 5px
      border-bottom: 1px solid #e6e6e6
      margin-bottom: 5px
      .name
    .inner
      width: 100%
      box-sizing: border-box
      padding: 5px
      .pic
        margin-bottom: 5px
      .direction
        font-size: 14px
        div
          float: left
          background: #e6e6e6
          padding: 5px
          cursor: pointer
          &.active
            background: #009EE7
            color: #ffffff
        &:after
          content: ''
          display: block
          clear: both
  .profile-new
    background: #009EE7
    color: #ffffff
    border-radius: 99px
    padding: 10px
    border: 0
    font-size: 14px
    text-align: center
    cursor: pointer

</style>
