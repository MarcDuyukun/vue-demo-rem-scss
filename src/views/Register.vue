<template>
   <div class="register">
        <NavBar pageName='注册' @onLeftClick='onBackClick'></NavBar>
        <div class="register-content">
            <div class="input-container">
              <input v-model="username" placeholder="请输入用户名" type="text">
          </div>
          <div class="input-container">
              <input v-model="password" placeholder="请输入密码" type="password">
          </div>
          <div class="input-container">
              <input v-model="confirmPassword" placeholder="请确认密码" type="password">
          </div>
          <div class="register-content-register page-commit" @click="onRegisterClick">
                注册
          </div>
        </div>
   </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
export default {
  name: 'register',
  components: { NavBar },
  data () {
    return {
      username: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    onBackClick () {
      this.$router.go(-1)
    },
    onRegisterClick () {
      if (this.username.length === 0) {
        alert('请输入用户名')
        return
      }
      if (this.password.length === 0 || this.confirmPassword !== this.password) {
        alert('请输入密码')
        return
      }
      // 原生保存密码交互
      console.log(1)
    }
  }
}
</script>
<style lang='scss' scoped>
.register{
    position: absolute;
    height: 100%;
    width:100%;
    background-color: #fff;
    &-content{
    height: 100%;
    width:100%;
         &-register{
             margin-top: 40%;
         }
    }
}
</style>
