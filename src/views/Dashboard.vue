<template>
  <div class="position-relative">
      <div class="position-absolute top"></div>
      <div class="container d-flex flex-column" style="min-height: 100vh;">
        <div class="row justify-content-center my-auto">
          <div class="col-md-8 text-center bgcolor text-white">
              <h2 class="mt-3">你的自選蔬菜箱</h2>
              <h3 class="mb-3 px-2">用你喜歡的蔬果Cover未來每一天</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class='h2 text-center mt-5'>本月推薦</div>
      <div class="row">
        <div v-for="(item) in productsData" :key="item.id" class="col-md-4 mt-md-4">
          <div class="card border-0 mb-4">
            <img
              :src="item.imageUrl"
              class="card-img-top rounded-0 img-thumbnail "
              style="max-height:231px"
            />
            <div class="card-body text-start">
              <h4>{{item.title}}</h4>
              <div class="d-flex justify-content-between">
                <p class="card-text text-muted mb-0">
                  {{item.content}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      productsData: [],
    };
  },
  components: {
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/?page=1`;
      this.$http.get(url).then((res) => {
        this.productsData = res.data.products.slice(0, 3);
      });
    },
  },
};
</script>
<style scoped>
.top {
  top:0;
  bottom:0;
  left:0;
  right:0;
  background: url("https://images.unsplash.com/photo-1440689165598-ac7dc9621a77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80")
  no-repeat left / cover;
  background-position: center center;
  z-index:-1

}
.bgcolor{
  background-color: rgba(0,0,0,.5);
}
</style>
