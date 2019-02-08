<template>
  <div class="day">
    <DayDate v-bind:date="dayData.date" />
    <div class="record-container">
      <RecordItem v-for="(value, key, index) in dayData.record"
        :name="key" :checked="value"
        :key="`${index}-${key}`"
        v-on:toggle-check="toggleCheck"
        :showLabels="showLabels" />
    </div>
    <DayLock
      :locked="locked"
      v-on:toggle-lock="toggleLock" />
  </div>
</template>

<script>
import DayDate from "./DayDate.vue";
import DayLock from "./DayLock.vue";
import RecordItem from "./RecordItem.vue";

const millisecondsPerDay = 86400000;

export default {
  name: 'Day',
  props: {
    dayData: Object,
    showLabels: Boolean,
  },
  data: function() {
    return {
      locked: Date.parse(this.dayData.date) < (Date.now() - millisecondsPerDay)
        ? true
        : false
    }
  },
  computed: {
    is_past: function() {
      return Date.parse(this.dayData.date) < (Date.now() - millisecondsPerDay)
        ? true
        : false
    }
  },
  methods: {
    toggleLock() {
      this.locked = !this.locked;
    },
    toggleCheck(name){
      if (this.locked) {
        return;
      }
      this.dayData.record[name] = !this.dayData.record[name]
    },
  },
  components: {
    DayDate,
    DayLock,
    RecordItem,
  }
}
</script>

<style scoped>
.record-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
