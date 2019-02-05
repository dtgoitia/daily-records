<template>
  <div v-bind:class="getClass()" v-on:click="toggleCheckA()">
    {{ this.name.length > 0 ? this.name : 'NAME IS EMPTY' }}
  </div>
</template>

<script>
export default {
  name: 'RecordItem',
  props: {
    name: String,
    checked: Boolean,
    toggleCheck: Function,
  },
  methods: {
    getClass() {
      return this.checked ? 'record-item checked' : 'record-item';
    },
    getContent() {
      return this.name.length > 0 ? this.name : '&nbsp;';
    },
    toggleCheckA() {
      alert('done!');
      this.props.toggleCheck(!this.checked);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.record-item {
  align-self: center;
  border: 1px solid black;
  height: 3em;
  width: 3em;
  margin: 0.5em;
}
.checked {
  background-color: #8f8f8f;
}
</style>
