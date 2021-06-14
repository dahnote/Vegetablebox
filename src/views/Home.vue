<template>
  <div id="nav">
   <router-link to="/products">前台產品列表</router-link> |
   <router-link to="/cart">購物車列表</router-link> |
   <router-link to="/login">後台登入</router-link>
  </div>
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
