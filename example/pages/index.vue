<template>
  <div>
    <pre>{{ collection }}</pre>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      collection: []
    }
  },

  async fetch() {
    this.collection = this.$collect([
      { id: 1, name: 'Joe doe' },
      { id: 2, name: 'John Doe' },
      { id: 3, name: 'Alex Doe' },
      { id: 4, name: 'Mary Doe' }
    ]).primaryKey()
  }
})
</script>
