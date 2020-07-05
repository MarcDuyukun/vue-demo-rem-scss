<template>
  <div class="login">
      <NavBar pageName="登录" @onLeftClick='onBackClick'></NavBar>
      <div class="login-content">
          <div class="input-container">
              <input v-model="username" placeholder="请输入用户名" type="text">
          </div>
          <div class="input-container">
              <input v-model="password" placeholder="请输入密码" type="password">
          </div>
          <div class="login-content-login page-commit" @click="onLoginClick">
                登录
          </div>
          <a class="login-content-register" @click="onToRegisterClick">注册新用户</a>
      </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
export default {
  name: 'login',
  components: { NavBar },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onBackClick () {
      this.$router.go(-1)
    },
    onLoginClick () {
      if (this.username.length === 0 || this.password.length === 0) {
        alert('用户名和密码不能为空')
      }
      // 原生native交互
    },
    onToRegisterClick () {
      this.$router.push({
        name: 'register',
        params: {
          routerType: 'push'
        }
      })
    }
  }
}
</script>
<style lang='scss' scoped>
.login{
    position: absolute;
    width: 100%;
    background-color: #fff;
    &-content{
        width:100%;
        height: 100%;
        &-login{
            margin-top: 40%;

        }
        &-register{
            font-size: $infoSize;
            color: $hintColor;
            margin-top: $marginSize;
            padding: $marginSize;
            float: right;
        }
    }
}
</style>
