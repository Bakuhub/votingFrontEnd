<template>

  <el-col :pull="1" :offset="1" :span="5">
    <div class="wrap">
      <a href="#" class="button2 fontsforweb_fontid_523"
         type="info"
         @click='passInputToCalculator(value)'
      >{{label}}</a></div>
  </el-col>
</template>

<script>

  export default {
    name: "VoteOption",
    props: ["value", "label"],
    methods: {
    }
  }
</script>

<style scoped>


  a {
    -webkit-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
    -moz-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
    -ms-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
    -o-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
    transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
    text-align: center;
    display: block;
    margin: 5px auto;
    max-width: 180px;
    text-decoration: none;
    border-radius: 4px;
    padding: 20px 20px;
  }

  a.button2:hover  {
    color: rgba(30, 22, 54, 0.6);
    box-shadow: rgba(30, 22, 54, 0.4) 0 0px 0px 2px inset;
  }

  a.button2{
    color: rgba(255, 255, 255, 0.85);
    box-shadow: rgba(30, 22, 54, 0.7) 0 80px 0px 2px inset;
  }
</style>
