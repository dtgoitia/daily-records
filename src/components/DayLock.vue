<template>
  <div v-if="locked" class="lock-container" v-on:click="$emit('toggle-lock')">
    <svg width="24" height="24" viewBox="0 0 24 24" class="lock locked">
      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
    </svg>
  </div>
  <div v-else class="lock-container" v-on:click="$emit('toggle-lock')">
    <svg width="24" height="24" viewBox="0 0 24 24" class="lock open">
      <path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'DayLock',
  props: {
    locked: Boolean,
  },
}
</script>

<style scoped>
.lock-container {
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;

  margin-top: 1rem;
  max-width: 4rem;
}
.lock {
  width: 2em;
}
.locked {
  fill: rgb(196, 196, 196);
}
.open {
  fill: blue;
}
</style>
