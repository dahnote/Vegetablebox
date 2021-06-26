<template>
  <div class="position-relative">
      <div class="position-absolute top">
        <div class="position-absolute top-50 start-50 translate-middle bgcolor text-center text-white">
          <h2 class="mt-3">你的自選蔬菜箱</h2>
          <h3 class="mb-3 px-2">用你喜歡的蔬果Cover未來每一天</h3>
        </div>
      </div>
    </div>
    <div>123</div>
</template>

<script>
// style="top:0; bottom:20px; left:0; right:0; background-image: url(https://images.unsplash.com/photo-1480399129128-2066acb5009e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);
//       background-position: center center; opacity: 0.1;"
export default {
  data() {
    return {
    };
  },
  components: {
  },
  created() {
  },
  methods: {
  },
};
</script>
<style scoped>
.top {
  background: url("https://images.unsplash.com/photo-1440689165598-ac7dc9621a77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80")
  no-repeat left / cover;
  background-position: center center;
  top: 0;
  bottom: 40%;
  left: 0;
  right: 0;
  min-height:60vh
}

.bgcolor{
  background-color: rgba(0,0,0,.5);
}
</style>
