<template>
  <div id="app">
    <div id="nav" style="height: 80px;">
      <Header/>
    </div>
    <router-view />
    <Footer/>
  </div>
</template>

<style lang="scss">
  @import "./scss/_style.scss";
  @import "./scss/_basics.scss";
</style>

<script>
  import {mapGetters} from "vuex";
  import Header from "@/components/Header/Header.vue";
  import Footer from "@/components/Footer/Footer.vue";

  export default {
    name: 'App',
    props: {
    },
    components: {
      Header,
      Footer
    },
    computed: {
      ...mapGetters([
      ]),
    },
    data() {
      return {
      };
    },
    created() {
    },
    mounted() {
      console.log("this.$languages.country");
      console.log(this.$languages.country);
    },
    methods: {
    }
  }
</script>
