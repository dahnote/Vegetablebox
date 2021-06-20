<template>
    <div class="container">
        <table class="table mt-4">
          <thead>
            <tr>
              <th>
                時間
              </th>
              <th>Email</th>
              <th  class="text-start">
                購買項目
              </th>
              <th class="text-start">
                總價
              </th>
              <th>
                是否付款
              </th>
              <th>
                編輯
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item) in ordersData" :key="item.id">
              <td>{{date(item.create_at)}}</td>
              <td>{{item.user.email}}</td>
              <td  class="text-start">
                <ul>
                  <li v-for="(product, index) in item.products" :key="index">
                    {{ product.product.title }} 數量：{{ product.qty }}
                    {{ product.product.unit }}
                  </li>
                </ul>
              </td>
              <td class="text-start">{{item.total}}</td>
              <td>
                <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                :id="`switch${item.id}`"
                v-model="item.is_paid"
                @change="updateOrder(item)"
              />
              <label class="form-check-label" :for="`switch${item.id}`">
                <span v-if="item.is_paid">已付款</span>
                <span v-else>未付款</span>
              </label>
            </div>
              </td>
              <td>
                <div class="btn-group">
                  <button type="button" class="btn btn-outline-primary btn-sm" @click="callModal(item)">
                    瀏覽
                  </button>
                  <button type="button" class="btn btn-outline-danger btn-sm" @click="delModal(item.id,'訂單')">
                    刪除
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <pagination :pagination=pagination :page=page @refesh="getData"></pagination>
    <orderInfo
      ref="productModal"
      :orderinfo=info
      @updateorderinfo="updateOrder"
    >
    </orderInfo>
    <deleteModel
      ref="deleteModel"
      :delobject=delobject
      @clickDelete="deleteorder"
    ></deleteModel>
    </div>

</template>
<script>
import pagination from '@/components/pagination.vue';
import orderInfo from '@/components/admin/orderInfo.vue';
import deleteModel from '@/components/admin/deleteModel.vue';

export default {
  data() {
    return {
      ordersData: {},
      pagination: {},
      page: 1,
      editInfo: {},
      info: {},
      open: false,
      delobject: {},
    };
  },
  components: {
    pagination, orderInfo, deleteModel,
  },
  created() {
    this.getData();
  },
  methods: {
    getData(item) {
      if (item !== undefined) {
        this.page = item;
      }
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders/?page=${this.page}`;
      this.$http(url)
        .then((res) => {
          if (res.data.success) {
            this.ordersData = res.data.orders;
            this.pagination = res.data.pagination;
            if (this.page > this.pagination.total_pages) {
              this.page -= 1;
            }
          }
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    callModal(item) {
      this.info = item;
      this.open = true;
      this.$refs.productModal.openModal();
    },
    delModal(id, title) {
      this.delobject.delId = id;
      this.delobject.title = title;
      this.delobject.bodyInfo = `刪除訂單${id}`;
      this.$refs.deleteModel.open();
    },
    deleteorder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${this.delobject.delId}`;
      this.$http.delete(url)
        .then((res) => {
          // console.log(res);
          alert(res.data.message);
          if (res.data.success) {
            this.$refs.deleteModel.close();
            this.getData(this.page);
          }
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    date(time) {
      const localDate = new Date(time * 1000);
      return localDate.toLocaleDateString();
    },
    updateOrder(item) {
      console.log(item);
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`;
      this.$http.put(url, { data: item })
        .then((res) => {
          if (res.data.success) {
            alert(res.data.message);
            this.getData(this.page);
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
