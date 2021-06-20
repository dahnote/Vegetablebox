<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-1">
    <div class="container-fluid">
      <a class="navbar-brand" href="#/admin/products">後台</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/admin/products" class="nav-link">產品列表</router-link>
          <router-link to="/admin/orders" class="nav-link">訂單列表</router-link>
          <router-link to="/admin/coupons" class="nav-link">優惠券列表</router-link>
          <router-link to="/" class="nav-link">回到前台</router-link> -->
          <!-- <a href="#" @click.prevent="logout" class="nav-link">登出</a> -->
        </div>
      </div>
    </div>
  </nav>
   <!-- <router-link to="/admin/products">後台產品列表</router-link> |
   <router-link to="/">回到前台</router-link> -->
  <router-view v-if="check"></router-view>
</template>

<script>
export default {
  data() {
    return {
      check: false,
    };
  },
  created() {
    this.checkCookie();
  },
  methods: {
    checkCookie() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)mytoken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      if (token) {
        const url = `${process.env.VUE_APP_API}api/user/check`;
        this.$http.defaults.headers.common.Authorization = `${token}`;
        this.$http.post(url, { api_token: token }).then((response) => {
          if (response.data.success) {
            this.check = true;
          } else {
            alert(response.data.message);
            this.$router.push('/login');
          }
        });
      } else {
        alert('您尚未登入。');
        this.$router.push('/login');
      }
    },
  },
};
</script>
