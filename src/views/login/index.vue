<template>
  <div>
    login
    <el-button type="primary" @click="userLogin">登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { login } from '/@/api/user'
const userLogin = async () => {
  const res = await login({
    userName: 'admin',
    password: '123456',
  })
  if (res.data.code === 200) {
  }
}
</script>

<style lang="scss" scoped></style>
