import StyleSwitcher from '../style_switcher/style_switcher.vue'

const settings = {
  data () {
    return {
      hideAttachmentsLocal: this.$store.state.config.hideAttachments,
      hideAttachmentsInConvLocal: this.$store.state.config.hideAttachmentsInConv,
      hideNsfwLocal: this.$store.state.config.hideNsfw
    }
  },
  components: {
    StyleSwitcher
  },
  watch: {
    hideAttachmentsLocal (value) {
      this.$store.dispatch('setOption', { name: 'hideAttachments', value })
    },
    hideAttachmentsInConvLocal (value) {
      this.$store.dispatch('setOption', { name: 'hideAttachmentsInConv', value })
    },
    hideNsfwLocal (value) {
      this.$store.dispatch('setOption', { name: 'hideNsfw', value })
    }
  }
}

export default settings
