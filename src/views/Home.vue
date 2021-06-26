<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark mb-1 fixed-top">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/" class="nav-link">首頁</router-link>
          <router-link to="/products" class="nav-link">前台產品列表</router-link>
          <router-link to="/cart" class="nav-link">購物車列表</router-link>
          <router-link to="/login" class="nav-link">後台登入</router-link>
          <a href="#" @click.prevent="logout" class="nav-link">登出</a>
        </div>
      </div>
    </div>
  </nav>
  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {
      check: false,
    };
  },
  created() {

  },
};
</script>
