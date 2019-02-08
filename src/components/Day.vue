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
  </div>
</template>

<script>
import DayDate from "./DayDate.vue";
import RecordItem from "./RecordItem.vue";

export default {
  name: 'Day',
  props: {
    dayData: Object,
    showLabels: Boolean,
  },
  methods: {
    toggleCheck(name){
      this.dayData.record[name] = !this.dayData.record[name]
    },
  },
  components: {
    DayDate,
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
