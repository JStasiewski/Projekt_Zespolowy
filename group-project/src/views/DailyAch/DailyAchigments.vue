<script setup lang="ts">
import axios from 'axios';
import ItemsView from './ItemsView.vue';

</script>

<template>
    <div class="ach_container">
        <p>PVE daily achigments</p>
        <div class="pve_container">
            <ol class="list_of_pve_ach" v-for="achigment in pveDaily" :key="achigment.name">
                <p>{{ achigment.name }}</p>
                <p>{{ achigment.what_to_do }}</p>
                <p v-if="achigment.how_much > 1 ? true : false">Required to obtain {{ achigment.how_much }} to get
                    reward</p>
                <p v-if="achigment.rewardsCoin > 0 ? true : false">{{ achigment.rewardsCoin }} coins</p>
                <ItemsView :Ids="achigment.rewardItemIds" />
            </ol>
        </div>
        <p>PVP daily achigments</p>
        <div class="pve_container">
            <ol class="list_of_pve_ach" v-for="achigment in pvpDaily" :key="achigment.name">
                <p>{{ achigment.name }}</p>
                <p>{{ achigment.what_to_do }}</p>
                <p v-if="achigment.how_much > 1 ? true : false">Required to obtain {{ achigment.how_much }} to get
                    reward</p>
                <p v-if="achigment.rewardsCoin > 0 ? true : false">{{ achigment.rewardsCoin }} coins</p>
                <ItemsView :Ids="achigment.rewardItemIds" />
            </ol>
        </div>
        <p>WvW daily achigments</p>
        <div class="pve_container">
            <ol class="list_of_pve_ach" v-for="achigment in WvWDaily" :key="achigment.name">
                <p>{{ achigment.name }}</p>
                <p>{{ achigment.what_to_do }}</p>
                <p v-if="achigment.how_much > 1 ? true : false">Required to obtain {{ achigment.how_much }} to get
                    reward</p>
                <p v-if="achigment.rewardsCoin > 0 ? true : false">{{ achigment.rewardsCoin }} coins</p>
                <ItemsView :Ids="achigment.rewardItemIds" />
            </ol>
        </div>
        <p>Fractals daily achigments</p>
        <div class="pve_container">
            <ol class="list_of_pve_ach" v-for="achigment in fracDaily" :key="achigment.name">
                <p>{{ achigment.name }}</p>
                <p>{{ achigment.what_to_do }}</p>
                <p v-if="achigment.how_much > 1 ? true : false">Required to obtain {{ achigment.how_much }} to get
                    reward</p>
                <p v-if="achigment.rewardsCoin > 0 ? true : false">{{ achigment.rewardsCoin }} coins</p>
                <ItemsView :Ids="achigment.rewardItemIds" />
            </ol>
        </div>
    </div>
</template>

<script lang="ts">

export default {
    data() {
        return {
            pveDaily: [{
                name: "NONE",
                what_to_do: "NONE",
                how_much: 0,
                rewardsCoin: 0,
                rewardItemIds: [0],
            }],
            pvpDaily: [{
                name: "NONE",
                what_to_do: "NONE",
                how_much: 0,
                rewardsCoin: 0,
                rewardItemIds: [0],
            }],
            WvWDaily: [{
                name: "NONE",
                what_to_do: "NONE",
                how_much: 0,
                rewardsCoin: 0,
                rewardItemIds: [0],
            }],
            fracDaily: [{
                name: "NONE",
                what_to_do: "NONE",
                how_much: 0,
                rewardsCoin: 0,
                rewardItemIds: [0],
            }]
        }
    },
    methods: {
        async getEvents() {
            this.pveDaily.pop()
            this.pvpDaily.pop()
            this.WvWDaily.pop()
            this.fracDaily.pop()
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

            PVE_Ids.forEach(async id => {
                const achigment = await axios.get("https://api.guildwars2.com/v2/achievements?id=" + id)
                let Coins = 0
                let itemIds = [0]
                itemIds.pop()

                await achigment.data.rewards.forEach(async (reward: { type: String; count: Number; id: Number }) => {
                    if (reward.type == "Coins") {
                        Coins = reward.count.valueOf()
                    } else if (reward.type == "Item") {
                        itemIds.push(reward.id.valueOf())
                    }
                })
                if (itemIds.length < 1) {
                    itemIds.push(0)
                }
                this.pveDaily.push({
                    name: achigment.data.name,
                    what_to_do: achigment.data.requirement,
                    how_much: achigment.data.tiers[0].count,
                    rewardsCoin: Coins,
                    rewardItemIds: itemIds,
                })
            })

            PVP_Ids.forEach(async id => {
                const achigment = await axios.get("https://api.guildwars2.com/v2/achievements?id=" + id)
                let Coins = 0
                let itemIds = [0]
                itemIds.pop()

                await achigment.data.rewards.forEach(async (reward: { type: String; count: Number; id: Number }) => {
                    if (reward.type == "Coins") {
                        Coins = reward.count.valueOf()
                    } else if (reward.type == "Item") {
                        itemIds.push(reward.id.valueOf())
                    }
                })
                if (itemIds.length < 1) {
                    itemIds.push(0)
                }
                this.pvpDaily.push({
                    name: achigment.data.name,
                    what_to_do: achigment.data.requirement,
                    how_much: achigment.data.tiers[0].count,
                    rewardsCoin: Coins,
                    rewardItemIds: itemIds,
                })
            })
            WVW_Ids.forEach(async id => {
                const achigment = await axios.get("https://api.guildwars2.com/v2/achievements?id=" + id)
                let Coins = 0
                let itemIds = [0]
                itemIds.pop()

                await achigment.data.rewards.forEach(async (reward: { type: String; count: Number; id: Number }) => {
                    if (reward.type == "Coins") {
                        Coins = reward.count.valueOf()
                    } else if (reward.type == "Item") {
                        itemIds.push(reward.id.valueOf())
                    }
                })
                if (itemIds.length < 1) {
                    itemIds.push(0)
                }
                this.WvWDaily.push({
                    name: achigment.data.name,
                    what_to_do: achigment.data.requirement,
                    how_much: achigment.data.tiers[0].count,
                    rewardsCoin: Coins,
                    rewardItemIds: itemIds,
                })
            })
            Frac_Ids.forEach(async id => {
                const achigment = await axios.get("https://api.guildwars2.com/v2/achievements?id=" + id)
                let Coins = 0
                let itemIds = [0]
                itemIds.pop()

                await achigment.data.rewards.forEach(async (reward: { type: String; count: Number; id: Number }) => {
                    if (reward.type == "Coins") {
                        Coins = reward.count.valueOf()
                    } else if (reward.type == "Item") {
                        itemIds.push(reward.id.valueOf())
                    }
                })
                if (itemIds.length < 1) {
                    itemIds.push(0)
                }
                this.fracDaily.push({
                    name: achigment.data.name,
                    what_to_do: achigment.data.requirement,
                    how_much: achigment.data.tiers[0].count,
                    rewardsCoin: Coins,
                    rewardItemIds: itemIds,
                })
            })

            console.log(this.pveDaily)
        }
    },
    async beforeMount() {
        await this.getEvents()
    },
}

</script>

<style scoped src="./DailyAch.css"></style>