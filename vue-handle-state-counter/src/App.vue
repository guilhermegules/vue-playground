<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>Counter: {{ counter }}</h1>
    <button @click="decrement">Decrement</button>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Counter",
  computed: {
    ...mapGetters(["counter"])
  },
  methods: {
    ...mapActions(["decrement", "increment"])
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
