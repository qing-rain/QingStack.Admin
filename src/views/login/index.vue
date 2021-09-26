<template>
  <div>
    login
    <el-button type="prinary" @click="userLogin">登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { login } from '@/api/user'
const userLogin = async () => {
  const res = await login({
    userName: 'admin',
    password: '123456',
  })
}
</script>

<style lang="scss" scoped></style>
