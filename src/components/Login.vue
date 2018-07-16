<template>
  <el-row style="margin: 20px;">
    <el-col :xs="24" :sm="{span: 16, offset: 4}" :md="{span: 16, offset: 4}" :lg="{span: 12, offset: 6}"
            :xl="{span: 8, offset: 8}">
      <el-card class="box-card">
        <p style="font-size:25px; margin-bottom:20px; text-align:center; color:#333;">Login <span
          style="font-size:16px; color:#666; margin-left:10px;"> Voting Website</span></p>
        <el-form :label-position="loginLabelPosition" :model="loginForm">
          <el-form-item label="username">
            <el-input v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item label="password">
            <el-input v-model="loginForm.password" type="password"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" @click="confirmLogin" style="width:100%; margin-top:30px; font-size:20px;"
            >Login
        </el-button>

        <el-col :span="24" style="margin: 10px 0px;">
          <div style="border-top: 1px solid #eee; height:1px; width:100%;"></div>
        </el-col>
        <el-row>
          <el-col :xs="24" :sm="18">
          <p></p>
          </el-col>
          <el-col :xs="24" :sm="6" style="text-align: right;">
            <router-link :to="{ path: 'Register' }">
              <el-button type="primary" class="btn_green" style="width:100%; margin-top:10px;">
                Register
              </el-button>
            </router-link>
          </el-col>
        </el-row>
      </el-card>
    </el-col>
  </el-row>

</template>

<script>
  export default {
    name: "Login"
    ,
    data() {
      return {
        loginLabelPosition: 'left',
        loginForm: {
          username: '',
          password: '',
          isRemember: false
        }
      }
    },
    computed: {},
    methods: {}
  }
</script>


<style scoped>

</style>
