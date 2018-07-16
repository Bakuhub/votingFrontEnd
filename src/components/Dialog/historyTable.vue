<template>
  <el-table :data="input"
            style="width: 100%"
            :height="height"
            @row-click="passInputToCalculator">
    <el-table-column prop="value" label="input"></el-table-column>
  </el-table>
</template>

<script>
  import {passInputToCalculator} from "../../api/api-utils";

  export default {
        name: "historyTable",
      props: ["input","height"],
      methods: {
        passInputToCalculator
      }
    }
</script>

<style scoped>

</style>
