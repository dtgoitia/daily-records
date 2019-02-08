<template>
  <div v-bind:class="getClass()" v-on:click="$emit('toggle-check', name)">
    <div class="square">&nbsp;</div>
    <div class="label" v-if="showLabels">
      {{ this.getContent() }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecordItem',
  props: {
    name: String,
    checked: Boolean,
    showLabels: Boolean,
  },
  methods: {
    getClass() {
      return this.checked ? 'record-item checked' : 'record-item';
    },
    getContent() {
      return this.name.length > 0 ? this.name : '&nbsp;';
    },
  }
}
</script>

<style scoped>
.record-item {
  align-items: center;
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;

  width: 100%;
}
.square {
  align-self: center;
  border: 1px solid black;
  border-radius: .3rem;
  height: 3rem;
  width: 3rem;
  margin: 0.5rem;
  background-color: rgb(150, 0, 150);
  opacity: 0.1;
}
.checked {
  background-color: #d3d3d3;
}
.label {
  padding-right: 1rem;
}
</style>
