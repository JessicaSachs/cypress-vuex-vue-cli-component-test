<template>
  <div>
      <b>{{ puppy.name }}</b>
      <img v-if="showImage" :alt="`Image of a puppy named ${puppy.name}`"
          :src="`https://random.dog/${randomPhoto()}`" style="max-width: 150px"/>
  </div>
</template>

<script>
import puppers from './puppers.json'

export default {
  props: { puppy: { type: Object, default: () => ({}) }, showImage: { default: false } },
  methods: {
    randomPhoto() {
      const i = Math.floor(Math.random() * 1000)
      const total = puppers.filter(p => p.toLowerCase().indexOf('jpg') > -1)
      return total[i % total.length]
    }
  }
}
</script>