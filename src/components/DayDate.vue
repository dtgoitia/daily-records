<template>
  <div class="date">
    <div class="day">{{ getDay() }}</div>
    <div class="month">{{ getMonth() }}</div>
  </div>
</template>

<script>
export default {
  name: 'DayDate',
  props: {
    date: String,
  },
  computed: {
    months() {
      return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    currentDate() { return new Date(this.date); },
  },
  methods: {
    getMonth() { return this.months[this.currentDate.getMonth()]; },
    getDay() { return this.currentDate.getDate(); },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.day {
  font-size: 1.5rem;
}
.month {
  font-size: 1.1rem;
}
.date {
  font-weight: 700;
  max-width: 4rem;
}
</style>
