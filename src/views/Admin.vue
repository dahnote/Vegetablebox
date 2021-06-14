<template>
  <div id="nav">
   <router-link to="/admin/products">後台產品列表</router-link>
  </div>
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
