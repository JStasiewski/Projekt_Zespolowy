<script setup lang="ts">
import DailyAchigments from './DailyAch/DailyAchigments.vue';
import {} from '../App.vue'
</script>

<template>
  
  <div class="Home_body">
    <DailyAchigments/>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      renterCount: ''
    }
  },
  methods: {
  }
}
    
</script>

<style>
.L_body_elem{
  color: black;
  width: auto;
  align-items: center;
  text-align: center;
  margin-top: 25px;
  margin-bottom: 15px;
  font-family:  "Papyrus";
  text-decoration: none;
}

.L_body_elem:hover{
  color: rgb(109, 0, 0);
}

.L_body_elem:active{
  color: rgb(167, 1, 1);
}


 .Home_body{
  margin-top: 20px;
  display: flex;
  flex-direction: row;
}

.Home_body_L{
  height: auto;
  display: flex;
  flex-direction: column;
  height:fit-content;
  flex: 1;
}

.Home_body_R{
  height: auto;
  display: flex;
  flex-direction: column;
  flex: 7;
}


</style>
