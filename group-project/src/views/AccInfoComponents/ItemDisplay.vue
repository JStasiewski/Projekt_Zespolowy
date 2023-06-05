<template>
  <div class="item_holder" @mouseover="hover = true" @mouseleave="hover = false">
    <img :src="itemsData.iconLink" alt="Photo" class="Image">
    <div class="itemInfo" v-if="hover" @mouseover="hover = true" @mouseleave="hover = false">
      <p>{{ itemsData.name }}</p>
      <a :href="itemsData.wikiLink" target="_blank">Link do wiki</a>
    </div>
  </div>
</template>
  
<script lang="ts">
import axios from 'axios'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CharInfo',
  props: {
    itemID: Number,
    item: null,
  },
  data() {
    return {
      isLoaded: false,
      itemsData: {
        name: "",
        iconLink: "",
        wikiLink: ""
      },
      hover: false,

    }
  },
  async beforeMount() {
    const Item = await axios.get("https://api.guildwars2.com/v2/items/" + this.itemID)
    this.itemsData = {
      name: Item.data.name,
      iconLink: Item.data.icon,
      wikiLink: "https://wiki.guildwars2.com/wiki/" + Item.data.name,
    }
  }
})
</script>
  
<style>
.itemInfo {
  background-color: black;
  color: aliceblue;
  opacity: 0.8;
  position: absolute;
  height: 100px;
  aspect-ratio: 1/1;
  top: 95px;
  left: 95px;
  padding: 5px;
  z-index: 1;
}

.Image {
  height: 100px;
  aspect-ratio: 1/1;
  z-index: 1;
}

.item_holder {
  position: relative;
  height: 100px;
  aspect-ratio: 1/1;
  text-shadow: none;
}
</style>
  