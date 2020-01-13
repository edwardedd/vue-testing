<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <input  v-model="value"/>
        <button
        class="btn btn-success"
        v-on:click = "changeInputValue">Save</button>
    </div>
</template>

<script>
export default {
  name: 'User',
  mounted() {
    if (localStorage.value) {
      this.value = localStorage.value;
    }
  },
  methods: {
    changeInputValue(){
      localStorage.value = this.$store.state.value
    },
    qwert(){
      window.console.log(this.value)
    }
  },
  computed: {
    value:{
      get(){
        return this.$store.state.value
      },
      set(value){
        this.$store.commit('updateValue', value)
      }
    }
  }
}
</script>