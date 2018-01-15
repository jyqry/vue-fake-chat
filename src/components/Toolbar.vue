<template>
  <div class="toolbar">
    <div class="pages">
      <div class="page-new page" v-on:click="newPage">
        새 페이지
      </div>
      <div
      v-for="(page, index) in getPages"
      class="page"
      :class="{ active: getChat.currentPage === index}"
      v-on:click="pageChange(index)">
        #{{ index }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'toolbar',
  data () {
    return {
    }
  },
  methods: {
    newPage: function () {
      this.$store.dispatch('newPage')
      this.pageChange(this.getPages.length - 1)
    },
    pageChange: function (index) {
      this.$store.dispatch('pageChange', index)
    }
  },
  computed: {
    getChat: function () {
      return this.$store.getters.chat
    },
    getPages: function () {
      return this.$store.getters.pages
    }
  }
}
</script>

<style scoped lang="sass">
.toolbar
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 40px
  background: #ffffff
  border-bottom: 1px solid #E6E6E6
  overflow: auto
  z-index: 1000
  .page
    float: left
    width: auto
    height: 30px
    line-height: 30px
    box-sizing: border-box
    margin: 5px
    padding: 0 10px
    border: 1px solid #E6E6E6
    text-align: center
    font-size: 14px
    cursor: pointer
  .active
    background: #E6E6E6
  .page-new
    background: #009EE7
    border: 1px solid #009EE7
    border-radius: 30px
    color: #ffffff

</style>
