<template>
  <div class="day">
    <p class="title">{{ getDate() }}</p>
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
import RecordItem from "./RecordItem.vue";

export default {
  name: 'Day',
  props: {
    data: Object,
    showLabels: Boolean,
  },
  methods: {
    getDate(){
      return this.data.date;
    },
    toggleCheck(name){
      this.data.record[name] = !this.data.record[name]
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
</style>
