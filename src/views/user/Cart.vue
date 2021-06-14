<template>
    <div class="container">
        <div class="h2">購物車列表</div>
        <button type="button" class="btn btn-outline-danger btn-sm" @click="clearCart">
          清空購物車
        </button>
        <table class="table mt-4">
          <thead>
            <tr>
              <th>品名</th>
              <th>單價</th>
              <th width="150">數量</th>
              <th>總價</th>
              <th>編輯</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in cartData" :key="item.id">
              <td>{{item.product.title}}</td>
              <td>{{item.product.price}}</td>
              <td>
                <div class="input-group input-group-sm">
                  <div class="input-group">
                    <input v-model.number="item.qty" min="1" type="number" class="form-control" @blur=updataCart(index)>
                  </div>
                </div>
              </td>
              <td>{{item.total}}</td>
              <td>
                <button type="button" class="btn btn-outline-danger btn-sm" @click="deleteItem(item.id)">
                  刪除
              </button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="4">總計{{final_total}}元</td>
            </tr>
          </tfoot>
        </table>
        <div class="my-5 row justify-content-center">
          <div class="h2">預訂資料</div>
            <Form ref="order" class="col-md-6" v-slot="{ errors }" @submit="onSubmit">
              <div class="mb-3">
                <label for="name" class="form-label">姓名</label>
                <Field id="name" name="姓名" type="text" class="form-control"
                :class="{ 'is-invalid': errors['姓名'] }" placeholder="請輸入姓名"
                rules="required" v-model="user.name"></Field>
                <error-message name="姓名" class="invalid-feedback"></error-message>
              </div>
            </Form>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      cartData: {},
      final_total: 0,
      user: {
        name: '',
        email: '',
        tel: '',
        address: '',
      },
      message: '',
    };
  },
  mounted() {
    this.getCart();
  },
  methods: {
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http(url)
        .then((res) => {
          if (res.data.success) {
            this.cartData = res.data.data.carts;
            this.final_total = res.data.data.final_total;
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    clearCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`;
      this.$http.delete(url)
        .then((res) => {
          // console.log(res);
          if (res.data.success) {
            alert(res.data.message);
            this.getCart();
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    updataCart(index) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${this.cartData[index].id}`;
      const postData = { product_id: this.cartData[index].id, qty: this.cartData[index].qty };
      this.$http.put(url, { data: postData })
        .then((res) => {
          if (res.data.success) {
            alert(res.data.message);
            this.getCart();
          } else {
            alert(res.data.message);
          }
          // this.data.productsData=res.data.products;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    deleteItem(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http.delete(url)
        .then((res) => {
          // console.log(res);
          if (res.data.success) {
            alert(res.data.message);
            this.getCart();
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    onSubmit() {

    },
  },
};
</script>
