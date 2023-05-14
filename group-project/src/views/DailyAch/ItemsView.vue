<script setup lang="ts">
import axios from 'axios';




</script>

<template>
  <div v-for="(item) in itemsData" class="ItemContainer">
    <div class="ItemDesc">
      <p>{{ item.name }}</p>
      <a :href="item.wikiLink"> Go Wiki </a>
    </div>
    <img :src="item.iconLink" alt="Photo" class="Image">
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      itemsData: [{
        name: "",
        iconLink: "",
        wikiLink: ""
      }]
    }
  },
  props: {
    Ids: [Number]
  },
  methods: {
  },
  beforeMount() {
    this.itemsData.pop()
    this.Ids?.forEach(async (element: number) => {
      const Item = await axios.get("https://api.guildwars2.com/v2/items/" + element)
      this.itemsData.push({
        name: Item.data.name,
        iconLink: Item.data.icon,
        wikiLink: "https://wiki.guildwars2.com/wiki/" + Item.data.name
      })
    });
  }
}

</script>

<style>
.ItemContainer {
  display: flex;
  flex-direction: row;
}

.ItemDesc {
  padding: 5px;
  height: 100px;
  width: 100px;
}

.Image {
  height: 100px;
  width: 100px;
}

p {
  padding: 2px;
  margin: 0;
}
</style>
