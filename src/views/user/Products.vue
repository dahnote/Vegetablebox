<template>
  <div class="container">
        <table class="table mt-4">
          <thead>
            <tr>
              <th width="250">
                圖片
              </th>
              <th>商品名稱</th>
              <th>
                售價
              </th>
              <th>
                編輯
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in productsData" :key="item.id">
              <td><img :src="item.imageUrl" class="img-thumbnail" alt=""></td>
              <td>{{item.title}}</td>
              <td>
                <div>打折前{{item.origin_price}} </div>
                <div class="h3">打折後{{item.price}}</div>
              </td>
              <!-- <td class="text-end">{{item.price}}</td> -->
              <td>
                <div class="btn-group">
                  <button type="button" class="btn btn-outline-primary btn-sm" @click="infoOpen(index)">
                      詳細資訊
                    <!-- <span v-if="spinnerId===index" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> -->
                  </button>
                  <button type="button" class="btn btn-outline-danger btn-sm" @click="addCart(item.id)">
                    加入購物車
                    <!-- <span v-if="spinnerId===item.id" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> -->
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- <pagination :pagination=pagination :page=page @refesh="getData"></pagination> -->
      </div>
</template>

<script>
export default {
  data() {
    return {
      productsData: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(url).then((res) => {
        this.productsData = res.data.products;
      });
    },
    addCart(id) {
      console.log(id);
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const postData = { product_id: id, qty: 1 };
      this.$http.post(url, { data: postData })
        .then((res) => {
          if (res.data.success) {
            alert(res.data.message);
            this.getData();
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
