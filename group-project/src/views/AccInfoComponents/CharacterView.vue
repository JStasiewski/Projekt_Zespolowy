<script setup lang="ts">
import axios from "axios"
import { BaseURL } from "@/App.vue";
import {rerenderAPP} from "../../App.vue"
import { getCurrentInstance } from "vue";
import { ref } from 'vue';
</script>

<template>
    <!-- <input type="text" v-model="pom"/>
    <p>
        {{pom}}
    </p> -->
  <div v-for="champion in CHAMPS">
    <p>{{champion.name}} is a {{ champion.race }}</p>
  </div>
</template>

<script lang="ts">
export default {
    async beforeMount() {
        await this.doChamps()
    },
    methods:{
        async doChamps(){
            this.CHAMPS = [];
            await this.getNames();
            console.log(this.CHAMPS);
        },
        async setChampsData(Names:[string]){

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
                                this.CHAMPS.push({
                                    name: rep.data.name,
                                    race: rep.data.race,
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
            doWeHaveNames: false,
            CHAMPS: [{
                name: "",
                race: "",
            }],
            pom: "",
        };
    },
    props:{
        ApiKey: String,
    }


}

</script>

<style>
</style>
