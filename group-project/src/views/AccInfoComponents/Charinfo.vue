<script setup lang="ts">
import ItemDisplay from './ItemDisplay.vue'


</script>

<template>
  <div class="CharInventory">
    <h1>Inventory of {{ myProp }}</h1>
    <div v-if="items">
      <ul>
        <li v-for="(item, index) in items" :key="index">
          <ItemDisplay :itemID="item.id" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
  name: 'CharInfo',
  props: {
    myProp: String,
    ApiKey: String
  },
  data() {
    return {
      items: null
    }
  },
  async created() {
    const response = await fetch(`https://api.guildwars2.com/v2/characters/${this.myProp}/equipment?access_token=${this.ApiKey}`)
    const data = await response.json()
    this.items = data.equipment
  }
})
</script>

<style>
.CharInventory {
  background-color: darkgray;
  padding-bottom: 10px;
  border-radius: 10px;
  margin-bottom: 50px;
  text-shadow: 0px 0px 3px #FFFFFF;
}
</style>
