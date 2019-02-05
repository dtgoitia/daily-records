<template>
  <div class="day">
    <p class="title">{{ title }}</p>
    <p>Record: {{ JSON.stringify(record) }}</p>
    <div class="record-container">
      <RecordItem v-for="(value, key, index) in record"
        :name="key" :checked="value"
        :toggleCheck="toggleChecker(record, key)"
        :key="`${index}-${key}`"/>
    </div>
  </div>
</template>

<script>
import RecordItem from "./RecordItem.vue";

export default {
  name: 'Day',
  props: {
    title: String,
    record: Object,
  },
  data() {
    return {
      message: 'blah',
      checked: false
    }
  },
  methods: {
    toggleChecker(record, key){
      return function(newValue) {
        this.record[key] = newValue;
      };
    },
  },
  components: {
    RecordItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  font-weight: 700;
}
.record-container {
  align-items: center;  
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
}
.record-item {
  align-self: center;
  border: 1px solid black;
  height: 3em;
  width: 3em;
  margin: 0.5em;
}
</style>
