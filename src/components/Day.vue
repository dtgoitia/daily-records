<template>
  <div class="day">
    <DayDate v-bind:date="data.date" />
    <div class="record-container">
      <RecordItem v-for="(value, key, index) in data.record"
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
    data: Object,
    showLabels: Boolean,
  },
  methods: {
    toggleCheck(name){
      this.data.record[name] = !this.data.record[name]
    },
  },
  components: {
    DayDate,
    RecordItem,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.record-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
