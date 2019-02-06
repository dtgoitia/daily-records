<template>
  <div id="app" @click="updateLocalStorage">
    <h1>{{ appTitle }}</h1>
    <p>First record date: {{ recordsStart.toUTCString() }}</p>
    <div class="days">
      <Day v-for="(dayData, index) in data" :key="index"
        v-bind:title="'X'"
        :data="dayData"
        :showLabels="index === data.length - 1 ? true : false" />
    </div>
  </div>
</template>

<script>
import Day from './components/Day.vue'

export default {
  name: 'app',
  data() {
    return {
      appTitle: 'Daily records',
      data: [
        {
          date: '2019-02-06T20:06:27.827Z',
          record: {
            backPain: false,
            allergy: false,
            irritatedEyes: false,
            mugs: false,
            phlegm: false,
            throatPain: false,
            soreness: false,
            sternumPain: false,
          }
        },
        {
          date: '2019-02-06T20:06:27.827Z',
          record: {
            backPain: false,
            allergy: false,
            irritatedEyes: false,
            mugs: false,
            phlegm: false,
            throatPain: false,
            soreness: false,
            sternumPain: false,
          }
        },
      ],
      recordsStart: new Date(Date.UTC(2019, 2, 1))
    }
  },
  methods: {
    updateLocalStorage() {
      // TODO
    },
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

.days {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
}
</style>
