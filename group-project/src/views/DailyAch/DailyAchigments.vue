<script setup lang="ts">
import axios from 'axios';


</script>

<template>

</template>

<script lang="ts">

export default {
  data() {
    return {
        pveDaily: [{
            name: String,
            what_to_do: String,
            how_much: Number,
            rewardsItems: [{
                id: Number,
                count: Number,
                wikiLink: String
            }],
            rewardsCoin: {
                count: Number
            },
        }]
    }
  },
  methods: {
    async getEvents(){
        let PVE_Ids: [number] = [0]
        PVE_Ids.pop()
        let PVP_Ids: [number] = [0]
        PVP_Ids.pop()
        let WVW_Ids: [number] = [0]
        WVW_Ids.pop()
        let Frac_Ids: [number] = [0]
        Frac_Ids.pop()

        const response = await axios.get("https://api.guildwars2.com/v2/achievements/daily")
        const pve = response.data.pve
        const pvp = response.data.pvp
        const wvw = response.data.wvw
        const frac = response.data.fractals
        pve.forEach((achigment: { id: number; }) => {
            PVE_Ids.push(achigment.id)
        })
        pvp.forEach((achigment: { id: number; }) => {
            PVP_Ids.push(achigment.id)
        })
        wvw.forEach((achigment: { id: number; }) => {
            WVW_Ids.push(achigment.id)
        })
        frac.forEach((achigment: { id: number; }) => {
            Frac_Ids.push(achigment.id)
        })

        PVE_Ids.forEach(async id =>{
            const achigment = await axios.get("https://api.guildwars2.com/v2/achievements?id=" + id)
            let Coins: {
                count: Number
            } = {count: 0}
            let Items: [{
                count: Number
                name: String
                iconLink: String
                wikiLink: String
            }] = [{}]
            Items.pop()

            await achigment.data.rewards.forEach(async (reward: { type: String; count: Number; id:Number}) => {
                switch(reward.type){
                    case "Item":
                        const item = await axios.get("https://api.guildwars2.com/v2/items/" + reward.id)
                        Items.push({
                            name: item.data.name,
                            iconLink: item.data.icon,
                            wikiLink: "https://wiki.guildwars2.com/wiki/" + item.data.name.replace(/\s+/g, '_'),
                            count: reward.count
                            
                        })
                        break;
                    case "Coins":
                        Coins = {count: reward.count}
                        break;
                }
            })
            this.pveDaily.push({
                name: achigment.data.name,
                what_to_do: achigment.data.requirement,
                how_much: achigment.data.tiers[0].count,
                rewardsItems: Items,
                rewardsCoin: Coins,
            })
        })

        console.log(this.pveDaily)
    }
  },
  beforeMount() {
      this.getEvents()
  },
}
    
</script>

<style>


</style>