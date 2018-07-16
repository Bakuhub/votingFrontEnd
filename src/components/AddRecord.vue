<template>
  <el-row style="margin: 20px;">
    <el-col :xs="24" :sm="{span: 16, offset: 4}" :md="{span: 16, offset: 4}" :lg="{span: 12, offset: 6}"
            :xl="{span: 8, offset: 8}">
      <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
        <el-form-item
          prop="email"
          label="Poll Question"
          :rules="[
      { required: true, message: 'please enter poll option ', trigger: 'blur' },
    ]"
        >
          <el-input v-model="dynamicValidateForm.email"></el-input>
        </el-form-item>
        <el-form-item
          v-for="(domain, index) in dynamicValidateForm.domains"
          :label="'option' + (index+1)"
          :key="domain.key"
          :prop="'domains.' + index + '.value'"
          :rules="{
      required: true, message: 'option can not be empty', trigger: 'blur'
    }"
        >
          <el-input v-model="domain.value"></el-input>
          <el-button @click.prevent="removeDomain(domain)">删除</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
          <el-button @click="addDomain">新增域名</el-button>
          <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>

</template>

<script>
  import * as Events from '../foundation/event-hub'

  export default {
    name: "AddRecord",
    data() {
      return {
        dynamicValidateForm: {
          domains: [{
            value: ''
          }],
          email: ''
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      removeDomain(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item)
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1)
        }
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          value: '',
          key: Date.now()
        });
      }
    }
  }
</script>
