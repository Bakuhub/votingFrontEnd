<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="1">
      <router-link :to="{ path: 'Login' }">Login</router-link>


    </el-menu-item>
    <el-menu-item index="2">
      <router-link :to="{ path: 'AddRecord' }">Create Poll</router-link>


    </el-menu-item>
    <el-menu-item index="3">
      <router-link :to="{ path: 'Login' }">Vote Poll</router-link>
    </el-menu-item>
  </el-menu>

</template>

<script>
  import OperatorButton from "./Dialog/VoteOption"
  import * as Events from '../foundation/event-hub'
  import {passInputToCalculator} from "../api/api-utils";
  import 'element-ui/lib/theme-chalk/display.css';
  import historyTable from "./Dialog/historyTable";
  import * as types from "../store/mutation-types"
  import {isSingleNumber} from "../api/api-utils";
  import {isOperator} from "../api/api-utils";
  import {main} from "../store/modules/q2";

  export default {
    name: 'header',

    data() {
      return {}
    },
    beforeMount: function () {
    },
    computed: {},
    created: function () {
      Events.hub.$on(Events.PASS_INPUT_TO_CALCULATOR, input => this.handleInput(input))
    },

    methods: {}
  }
</script>

<style scoped>
  .inputBar {
    font-size: 40px;
    text-align: right;
  }

  .calculatorBoard {
    border: 8px solid #5e4c65;
    background-color: #b0dcff;
    padding: 10px;
    border-radius: 10px;
  }

  .mainPage {
    background-image: url("../assets/background.jpg");
    /* Full height */
    height: 100%;
    font-family: Lcdd;
    background-size: cover;
  }

</style>
