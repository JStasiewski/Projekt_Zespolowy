<template>
    <div class="item_holder">
        <img :src="itemsData.iconLink" alt="Photo" class="Image">
        <li class = "itemInfo">

        </li>
    </div>
  </template>
  
  <script lang="ts">
  import axios from 'axios'
import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'CharInfo',
    props: {
      itemID: Number,
    },
    data() {
      return {
        isLoaded: false,
        itemsData: {
        name: "",
        iconLink: "",
        wikiLink: ""
      }

      }
    },
    async beforeMount() {
      const Item = await axios.get("https://api.guildwars2.com/v2/items/" + this.itemID)
      this.itemsData = {
        name: Item.data.name,
        iconLink: Item.data.icon,
        wikiLink: "https://wiki.guildwars2.com/wiki/" + Item.data.name
      }
  }
  })
  </script>
  
  <style>
  </style>
  