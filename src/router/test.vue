<template>
  <div>
    <div id="test" @click="tests()">
      {{ test }}
    </div>

    <div @click="show()">
      show
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: {
      },
    };
  },
  created() {},
  methods: {
    tests() {
      this.test.b = "test";
      console.log(document.getElementById("test").textContent,this.test);
      this.$nextTick(()=>{
        console.log(document.getElementById("test").textContent, this.test);
      })
    },
    show() {
      console.log(document.getElementById("test").textContent);
    },
  },
};
</script>

<style>
</style>