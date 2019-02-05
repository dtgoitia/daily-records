<template>
  <div id="app" @click="updateLocalStorage">
    <h1>{{ appTitle }}</h1>
    <p>First record: {{ recordsStart.toUTCString() }}</p>
    <div v-if="records.length === 0">No records</div>
    <div v-else>These are the records:</div>
    <Day v-bind:record="records[0]" />
  </div>
</template>

<script>
import Day from './components/Day.vue'

export default {
  name: 'app',
  data() {
    return {
      appTitle: 'Daily records',
      records: [
        {
          rest: 1,
          backPain: false,
          allergy: false,
          irritatedEyes: false,
          mugs: false,
          phlegm: false,
          throatPain: false,
          soreness: false,
          sternumPain: false,
        },
        {
          rest: 1,
          backPain: false,
          allergy: false,
          irritatedEyes: false,
          mugs: false,
          phlegm: false,
          throatPain: false,
          soreness: false,
          sternumPain: false,
        },
      ],
      recordsStart: new Date(Date.UTC(2019, 2, 1))
    }
  },
  methods: {
    updateLocalStorage() {
      // TODO
    }
  },
  components: {
    Day
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
