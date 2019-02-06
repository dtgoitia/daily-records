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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.record-item {
  align-items: center;
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;

  border: 1px solid rgb(226, 226, 226);
  margin: 0.5em;
  width: 100%;
}
.square {
  align-self: center;
  border: 1px solid black;
  height: 3em;
  width: 3em;
  margin: 0.5em;
  background-color: rgba(150, 0, 150, 0.5)
}
.checked {
  background-color: #8f8f8f;
}
</style>
