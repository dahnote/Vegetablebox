<template>
    <div class="container">
        <table class="table mt-4">
          <thead>
            <tr>
              <th width="120">
                分類
              </th>
              <th>產品名稱</th>
              <th width="120">
                原價
              </th>
              <th width="120">
                售價
              </th>
              <th width="100">
                是否啟用
              </th>
              <th width="120">
                編輯
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in productsData" :key="item.id">
              <td>{{item.category}}</td>
              <td>{{item.title}}</td>
              <td class="text-end">{{item.origin_price}}</td>
              <td class="text-end">{{item.price}}</td>
              <td>
                <span class="text-success" v-if="item.is_enabled===1">啟用</span>
                <span v-else>未啟用</span>
              </td>
              <td>
                <div class="btn-group">
                  <button type="button" class="btn btn-outline-primary btn-sm" @click="editModal('edit',index)">
                    編輯
                  </button>
                  <button type="button" class="btn btn-outline-danger btn-sm" @click="delModal(item.id,item.title)">
                    刪除
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <pagination :pagination=pagination :page=page @refesh="getData"></pagination>
    </div>
    <deletemodal ref="deletemodal" @refesh="getData"></deletemodal>

</template>
<script>
import pagination from '@/components/pagination.vue';
import deletemodal from '@/components/deleteProduct.vue';

export default {
  data() {
    return {
      productsData: {},
      pagination: {},
      page: 1,
      delProductObj: {
        productId: '',
        productName: '',
      },
    };
  },
  components: {
    pagination, deletemodal,
  },
  created() {
    this.getData();
  },
  methods: {
    getData(item) {
      if (item !== undefined) {
        this.page = item;
      }
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=${this.page}`;
      this.$http(url)
        .then((res) => {
          if (res.data.success) {
            this.productsData = res.data.products;
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
    delModal(id, title) {
      this.delProductObj.productId = id;
      this.delProductObj.productName = title;
      this.$refs.deletemodal.open(this.delProductObj);
    },
  },
};
</script>
