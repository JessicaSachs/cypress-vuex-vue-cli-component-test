<template>
  <div class="puppies">
    <h2>Puppies</h2>
    <button @click="addPuppy">Add a random puppy</button>
    <div class="puppy-container">
    <PuppyDetails v-for="(puppy, idx) in puppies" :puppy="puppy" :key="puppy.id" :showImage="idx < 10">{{ puppy.name }}</PuppyDetails>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PuppyDetails from '@/components/PuppyDetails.vue'
import { mapGetters, mapActions} from 'vuex'

export default {
  name: 'Puppies',
  components: {
    PuppyDetails
  },
  methods: {
      ...mapActions({ fetchPuppies: 'puppies/fetchPuppies', addPuppy: 'puppies/addPuppy' })
  },
  computed: {
      ...mapGetters({ puppies: 'puppies/puppies' })
  },
  async created() {
      await this.fetchPuppies()
  }
}
</script>

<style scoped>
.puppy-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
}
</style>