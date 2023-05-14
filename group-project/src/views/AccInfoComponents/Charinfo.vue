<template>
    <h1>Dupa {{myProp}}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CharInfo',
  props: {
    myProp: {
      type: String,
      required: true
    }
  },
  created() {
    console.log(this.$route.params.myProp)
  }
})
</script>