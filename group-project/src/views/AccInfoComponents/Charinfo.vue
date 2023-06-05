<script setup lang="ts">
import ItemDisplay from './ItemDisplay.vue'


</script>

<template>
  <div class="CharInventory">
    <h1>Inventory of {{ myProp }}</h1>
    <div v-if="items">
      <ul class="items_block">
        <li v-for="(item, index) in items" :key="index">
          <ItemDisplay :itemID="item.id" :item="item" />
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
      items: null,
      BackpackI: null,
      CoatI: null,
      BootsI: null,
      GlovesI: null,
      HelmI: null,
      LeggingsI: null,
      ShouldersI: null,
      WeaponA1I: null,
      WeaponA2I: null,
    }
  },
  async created() {
    const response = await fetch(`https://api.guildwars2.com/v2/characters/${this.myProp}/equipment?access_token=${this.ApiKey}`)
    const data = await response.json()
    this.items = data.equipment
    this.items.forEach(element => {
      switch (element.slot) {
        case "Backpack":
          this.BackpackI = element;
          break;
        case "Coat":
          this.CoatI = element;
          break;
        case "Boots":
          this.BootsI = element;
          break;
        case "Gloves":
          this.GlovesI = element;
          break;
        case "Helm":
          this.HelmI = element;
          break;
        case "Leggings":
          this.LeggingsI = element;
          break;
        case "Shoulders":
          this.ShouldersI = element;
          break;
        case "WeaponA1":
          this.WeaponA1I = element;
          break;
        case "WeaponA2":
          this.WeaponA2I = element;
          break;
        default:
          break;
      }
    });
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

.items_block {
  width: 420px;
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding-left: 15px;
}

li {
  margin: 2px;
}
</style>
