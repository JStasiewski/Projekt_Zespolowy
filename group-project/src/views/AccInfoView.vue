<script setup lang="ts">
</script>

<template>
  <main calss = "accInfoMain">
    <h1>Account info display</h1>
    <div class = "accInfoElem">
    <p class = "ApiInfoElem">Account Api key</p>
    <input v-model="CurrentApiKey" class = "ApiInfoElem"/>
    </div>
</main>
</template>

<script lang="ts">
  export default {
    props:{
      ApiKey: String
    },
    data(){
      return{
        CurrentApiKey: "",
      };
    }
  }
</script>

<style>

.accInfoMain{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width:fit-content;
}

.accInfoElem{
  width: fit-content;
}

.ApiInfoElem{
  width: fit-content;
}

</style>
