<template>
  <div>
    <Header>

    </Header>
<router-view>

</router-view>
  </div>
</template>

<script>
  import OperatorButton from "./Dialog/VoteOption"
  import Header from "./Header"
  import Login from "./Login"
  import * as Events from "../foundation/event-hub"

  export default {
    name: 'Main',
    components: { OperatorButton,Header,Login},
    data() {
      return {}
    },
    created: function () {
      Events.hub.$on(Events.SHOW_SUCCESS_MESSAGE, msg => this.showSuccessMessage(msg))
      Events.hub.$on(Events.SHOW_ERROR_MESSAGE, msg => this.showErrorMessage(msg))
    }
    , methods: {
      showErrorMessage(msg) {
        this.$message.error(msg)
      },
      showSuccessMessage(msg) {
        this.$message.success(msg)
      }
    }
  }
</script>
<style>


</style>
