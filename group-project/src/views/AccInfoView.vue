<script setup lang="ts">



</script>

<template>
  <main calss = "accInfoMain" >
    <div v-if="ApiKey != ''">
      <div class = "accInfoElem">
        Api Key I have
      </div>
    </div>
    <div class = "ApiInfoElem">
      <p class = "ApiSubElem">Current Account Api Key:</p>
      <p class = "ApiSubElem" v-if="ApiKey != ''">{{ApiKey}}</p>
      <p class = "ApiSubElem" v-else>You didnt add youre api key!</p>
      <input v-model="CurrentApiKey" placeholder="Copy youre GW2 Api-Key here" class = "ApiInput"/>
      <button type="submit" @click.prevent="passAPIinfo" class = "ApiButton">Change Api-Key</button>
      <button type="submit" @click.prevent="deleteApiKey" class = "ApiButton">Delete Api-Key</button>
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
        await this.$emit("swapApi",this.CurrentApiKey)
      },
      async deleteApiKey(){
        await this.$emit("swapApi","!")
      }
    }
  }
</script>

<style>

.accInfoMain{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.accInfoElem{
  margin: 10px 0;
  width: fit-content;
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
}
</style>
