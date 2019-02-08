<template>
  <div id="app" @click="updateLocalStorage">
    <p>Amount of records: {{ records.length }}</p>
    <div class="days">
      <Day v-for="(dayData, index) in records" :key="dayData.date"
        :dayData="dayData"
        :showLabels="index === records.length - 1 ? true : false" />
    </div>
  </div>
</template>

<script>
import Day from './components/Day.vue'

const millisecondsPerDay = 86400000;

export default {
  name: 'app',
  data() {
    return {
      appTitle: 'Daily records',
      records: [
        {
          date: '2019-02-04T20:06:27.827Z',
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
        }
      ],
      recordsStart: new Date(Date.UTC(2019, 2, 1)),
    }
  },
  methods: {
    addDay(date) {
      /* eslint-disable */
      console.log(`adding a day: ${date}`);
      const cleanDayRecord = {
        date: date.toISOString(),
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
      }
      this.records.push(cleanDayRecord);
    },
    addRequiredRecords() {
      const now = new Date();
      const today = this.sanitizeDate(now);
      let lastRecordDateDirty = new Date(Date.parse(this.records[this.records.length - 1].date));
      let lastRecordDate = this.sanitizeDate(lastRecordDateDirty);
      while (lastRecordDate < today) {
        const missingRecords = (today - lastRecordDate) / millisecondsPerDay;  // difference in milliseconds
        const nextDay = this.nextDay(lastRecordDate);
        const nextDaySanitized = this.sanitizeDate(nextDay)
        this.addDay(nextDaySanitized);
        lastRecordDate = nextDay;
      }
    },
    nextDay(date) {
      return new Date(date.getTime() + millisecondsPerDay)
    },
    sanitizeDate(dirtyDate) {
      return new Date(Date.UTC(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate()));
    },
    updateLocalStorage() {
      localStorage.records = JSON.stringify(this.records);
    },
  },
  mounted() {
    // Load data from Local Storage
    if (localStorage.records && localStorage.records !== undefined) {
      this.records = JSON.parse(localStorage.records)
    }

    // Add required dates
    this.addRequiredRecords();
  },
  watch: {
    records(records) {
      if (records) {
        localStorage.records = JSON.stringify(this.records)
      }
    }
  },
  components: {
    Day,
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
  margin: 0.5em;
}

.days {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
}
</style>
