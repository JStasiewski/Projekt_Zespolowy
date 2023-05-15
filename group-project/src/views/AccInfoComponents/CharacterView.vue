<script setup lang="ts">
import axios from "axios"
import { BaseURL } from "@/App.vue";
import { RouterLink } from 'vue-router'
import CharInfo from '../AccInfoComponents/Charinfo.vue'


</script>

<template>
    <!-- <input type="text" v-model="pom"/>
    <p>
        {{pom}}
    </p> -->
    <main class = "champion_holder">
    <div v-for="champion in CHAMPS">
        <div v-if="champion.prof == 'Guardian'" class = "champion_displayG">
            <div class = "champion_displayL">
                <p class = "championinfo">{{champion.name}} is a {{champion.sex}} {{ champion.race }}</p>
                <p class = "championinfo">{{champion.lvl}}lvl {{champion.prof}} </p>
            </div>
            <div class = "champion_displayR">
                <button @click="toggleComponent">See details {{ showComponent ? 'Hide' : 'Show' }}</button>
            </div>
        </div>
        <div v-else-if="champion.prof == 'Mesmer'" class = "champion_displayM">
            <div class = "champion_displayL">
                <p class = "championinfo">{{champion.name}} is a {{champion.sex}} {{ champion.race }}</p>
                <p class = "championinfo">{{champion.lvl}}lvl {{champion.prof}} </p>
            </div>
            <div class = "champion_displayR">
                <button @click="toggleComponent">See details {{ showComponent ? 'Hide' : 'Show' }}</button>
            </div>
        </div>
        <div v-else-if="champion.prof == 'Engineer'" class = "champion_displayE">
            <div class = "champion_displayL">
                <p class = "championinfo">{{champion.name}} is a {{champion.sex}} {{ champion.race }}</p>
                <p class = "championinfo">{{champion.lvl}}lvl {{champion.prof}} </p>
            </div>
            <div class = "champion_displayR">
                <button @click="toggleComponent">See details {{ showComponent ? 'Hide' : 'Show' }}</button>
            </div>
        </div>
        <div v-else-if="champion.prof == 'Ranger'" class = "champion_displayRen">
            <div class = "champion_displayL">
                <p class = "championinfo">{{champion.name}} is a {{champion.sex}} {{ champion.race }}</p>
                <p class = "championinfo">{{champion.lvl}}lvl {{champion.prof}} </p>
            </div>
            <div class = "champion_displayR">
                <button @click="toggleComponent">See details {{ showComponent ? 'Hide' : 'Show' }}</button>
            </div>
        </div>
        <div v-else-if="champion.prof == 'Revenant'" class = "champion_displayRev">
            <div class = "champion_displayL">
                <p class = "championinfo">{{champion.name}} is a {{champion.sex}} {{ champion.race }}</p>
                <p class = "championinfo">{{champion.lvl}}lvl {{champion.prof}} </p>
            </div>
            <div class = "champion_displayR">
                <button @click="toggleComponent">See details {{ showComponent ? 'Hide' : 'Show' }}</button>
            </div>
        </div>
        <div v-else-if="champion.prof == 'Warrior'" class = "champion_displayW">
            <div class = "champion_displayL">
                <p class = "championinfo">{{champion.name}} is a {{champion.sex}} {{ champion.race }}</p>
                <p class = "championinfo">{{champion.lvl}}lvl {{champion.prof}} </p>
            </div>
            <div class = "champion_displayR">
                <button @click="toggleComponent">See details {{ showComponent ? 'Hide' : 'Show' }}</button>
            </div>
        </div>
        <div v-else-if="champion.prof == 'Elementalist'" class = "champion_displayEle">
            <div class = "champion_displayL">
                <p class = "championinfo">{{champion.name}} is a {{champion.sex}} {{ champion.race }}</p>
                <p class = "championinfo">{{champion.lvl}}lvl {{champion.prof}} </p>
            </div>
            <div class = "champion_displayR">
                <button @click="toggleComponent">See details {{ showComponent ? 'Hide' : 'Show' }}</button>
            </div>
        </div>
        <div v-else-if="champion.prof == 'Necromancer'" class = "champion_displayN">
            <div class = "champion_displayL">
                <p class = "championinfo">{{champion.name}} is a {{champion.sex}} {{ champion.race }}</p>
                <p class = "championinfo">{{champion.lvl}}lvl {{champion.prof}} </p>
            </div>
            <div class = "champion_displayR">
                <button @click="toggleComponent">See details {{ showComponent ? 'Hide' : 'Show' }}</button>
            </div>
        </div>
        <div v-else-if="champion.prof == 'Thief'" class = "champion_displayT">
            <div class = "champion_displayL">
                <p class = "championinfo">{{champion.name}} is a {{champion.sex}} {{ champion.race }}</p>
                <p class = "championinfo">{{champion.lvl}}lvl {{champion.prof}} </p>
            </div>
            <div class = "champion_displayR">
                <button @click="toggleComponent">See details {{ showComponent ? 'Hide' : 'Show' }}</button>
            </div>
        </div>
        <div v-else class = "champion_display">
            <div class = "champion_displayL">
                <p class = "championinfo">{{champion.name}} is a {{champion.sex}} {{ champion.race }}</p>
                <p class = "championinfo">{{champion.lvl}}lvl {{champion.prof}} </p>
            </div>
            <div class = "champion_displayR">
                <button @click="toggleComponent">See details {{ showComponent ? 'Hide' : 'Show' }}</button>
            </div>
        </div>
        <CharInfo v-if="showComponent" :myProp="champion.name" :ApiKey="ApiKey"/>
    </div>
    </main>
</template>

<script lang="ts">
export default {
    async beforeMount() {
        await this.doChamps()
    },
    methods:{
        toggleComponent() {
            this.showComponent = !this.showComponent
        },
        async doChamps(){
            this.CHAMPS = [];
            await this.getNames();
            console.log(this.CHAMPS);
        },
        async getNames(){
            var options = {
                method: "GET",
                url: BaseURL + "characters?access_token=" + this.ApiKey?.toString(),
            };
            var Names: [string]
            axios
                .request(options)
                .then((response) =>{
                    Names = response.data
                    Names.forEach(chname => {
                        options.url = BaseURL + "characters/"+ chname +"/core?access_token=" + this.ApiKey?.toString(),
                        axios
                            .request(options)
                            .then((rep) =>{
                                //let pomage = rep.data.age;
                                //let sec,min,hour,day = 0;
                                this.CHAMPS.push({
                                    name: rep.data.name,
                                    race: rep.data.race,
                                    sex: rep.data.gender,
                                    prof: rep.data.profession,
                                    lvl: rep.data.level,
                                })
                            })
                    });
                })
                .catch((err) => {
                    console.log(err);
                })

            this.doWeHaveNames = true;        
        },
    },
    data() {
        return{
            showComponent: false,
            doWeHaveNames: false,
            CHAMPS: [{
                name: "",
                race: "",
                sex: "",
                prof: "",
                lvl: 0,
            }],
            pom: "",
        };
    },
    props:{
        ApiKey: String,
    }
}

</script>


<style scoped src="./CharacterStyle.css">

</style>
