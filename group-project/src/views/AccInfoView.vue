<script setup lang="ts">
import CharacterView from './AccInfoComponents/CharacterView.vue';


</script>

<template>
  <main calss = "accInfoMain" >
    <div v-if="ApiKey !== ''">
      <div class = "accInfoElem">   
        <CharacterView :ApiKey = "ApiKey"/>
      </div>
    </div>
    <div class = "ApiInfoElem">
      <p class = "ApiSubElem">Current Account Api Key:</p>
      <p class = "ApiSubElem" v-if="ApiKey != ''">{{ApiKey}}</p>
      <p class = "ApiSubElem" v-else>You didnt add youre api key!</p>
      <input v-model="CurrentApiKey" placeholder="Copy youre GW2 Api-Key here" class = "ApiInput"/>
      <div class = "holderApiButtonChange">
        <button  @click="passAPIinfo" class = "ApiButton">Change Api-Key</button>
        <button  @click="deleteApiKey" class = "ApiButton">Delete Api-Key</button>
      </div>
    </div>
    
</main>
</template>

<script lang="ts">
  export default {
    props:{
      ApiKey: String,
      isLogged: Boolean
    },
    data(){
      return{
        CurrentApiKey: "",
      };
    },
    methods:{
      async passAPIinfo(){
        this.$emit("swapApi",this.CurrentApiKey)
        this.$emit("swapApi",this.CurrentApiKey)
        this.CurrentApiKey = "";
      },
      async deleteApiKey(){
        this.$emit("swapApi","!")
        this.$emit("swapApi","!")
        
      }
    }
  }
</script>

<style>

.holderApiButtonChange{
  display: flex;
  flex-direction: row ;
  width:750px;
  justify-content: space-evenly;
}

.accInfoMain{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.accInfoElem{
  margin: 10px 0;
}

.ApiInfoElem{
  margin: 10px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 1;
}

.ApiSubElem{
 width: fit-content;
 margin: 5px 0;
 font-size: larger;
 
}
.ApiInput{
 width: fit-content;
 margin: 5px 0;
 font-size: larger;
 width: 750px;
}

.ApiButton{
 width: fit-content;
 margin: 5px 0;
 font-size: larger;
 width: 100px;
 height: 50px;
  flex: 1;
}
</style>
