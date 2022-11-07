<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import $q from 'q'
export default {
  name: "App",
  components: {},
  created() {
// function sleep(ms) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(resolve,ms);
//     })
// }
// async function handle(){
//     console.log("AAA")
//     await sleep(5000)
//     console.log("BBB")
// }

// handle();

// AAA
// BBB (5000ms后)


    console.log(process.env.VUE_APP_TEXT,process.env.NODE_ENV);
    console.log(this.$env);
    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(sessionStorage.getItem("store"))
        )
      );
    }
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    });
  },
};
</script>

<style>
* {
  touch-action: pan-y;
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
