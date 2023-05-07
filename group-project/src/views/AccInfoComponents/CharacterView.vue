<script setup lang="ts">
import axios from "axios"
import { BaseURL } from "@/App.vue";

</script>

<template>
    <!-- <input type="text" v-model="pom"/>
    <p>
        {{pom}}
    </p> -->
  <div v-for="champion in CHAMPS">
    <p>{{champion.name}} is a {{champion.sex}} {{ champion.race }}</p>
    <p>{{champion.lvl}}lvl {{champion.prof}} </p>
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
                                let pomage = rep.data.age;
                                let sec,min,hour,day = 0;
                                //while(pomage >= 60*60*24){

                                //}
                                this.CHAMPS.push({
                                    name: rep.data.name,
                                    race: rep.data.race,
                                    sex: rep.data.gender,
                                    prof: rep.data.profession,
                                    lvl: rep.data.level,
                                    age: rep.data.age,
                                    titleid: rep.data.title,
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
                sex: "",
                prof: "",
                lvl: 0,
                age: [0,0,0,0],
                titleid: 0,
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
