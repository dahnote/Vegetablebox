<template>
    <div class="container">
      <div class="text-end">
        <button class="btn btn-primary" @click="callModal('create')">
          建立優惠券
        </button>
      </div>
      <table class="table mt-4">
          <thead>
            <tr>
              <th>
                名稱
              </th>
              <th>
                折扣碼
              </th>
              <th>
                折數
              </th>
              <th>
                到期日
              </th>
              <th>
                是否啟用
              </th>
              <th>
                編輯
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item) in couponsData" :key="item.id">
              <td>{{item.title}}</td>
              <td>{{item.code}}</td>
              <td>{{item.percent}}</td>
              <td>{{date(item.due_date)}}</td>
              <td>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :id="`switch${item.id}`"
                    :checked="status(item.is_enabled)"
                    :true-value="1"
                    :false-value="0"
                    @change="updateCoupons(item)"
                    v-model="item.is_enabled"
                  />
                  <label class="form-check-label" :for="`switch${item.id}`">
                    <span v-if="item.is_enabled===1">以啟用</span>
                    <span v-else>未啟用</span>
                  </label>
                </div>
              </td>
              <td>
                <div class="btn-group">
                  <button type="button" class="btn btn-outline-primary btn-sm" @click="callModal(item)">
                    編輯
                  </button>
                  <button type="button" class="btn btn-outline-danger btn-sm" @click="delModal(item.id,'優惠券')">
                    刪除
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <pagination :pagination=pagination :page=page @refesh="getData"></pagination>
    <couponInfo
      ref="couponModal"
      :info=info
      :mode=mode
      @couponsflow="couponsflow"
    >
    </couponInfo>
    <deleteModel
      ref="deleteModel"
      :delobject=delobject
      @clickDelete="deleteCoupon"
    ></deleteModel>
    </div>

</template>
<script>
import pagination from '@/components/pagination.vue';
import couponInfo from '@/components/admin/couponInfo.vue';
import deleteModel from '@/components/admin/deleteModel.vue';

export default {
  data() {
    return {
      couponsData: {},
      pagination: {},
      page: 1,
      editInfo: {},
      info: {},
      delobject: {},
      mode: '',
    };
  },
  components: {
    pagination, couponInfo, deleteModel,
  },
  emits: { loadingpage: null },
  created() {
    this.getData();
  },
  methods: {
    getData(item) {
      this.$emit('loadingpage', true);
      if (item !== undefined) {
        this.page = item;
      }
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons/?page=${this.page}`;
      this.$http(url)
        .then((res) => {
          if (res.data.success) {
            this.couponsData = res.data.coupons;
            this.pagination = res.data.pagination;
            if (this.page > this.pagination.total_pages) {
              this.page -= 1;
            }
          }
          this.$emit('loadingpage', false);
        })
        .catch((err) => {
          this.$emit('loadingpage', false);
          console.log(err.response);
        });
    },
    callModal(item) {
      console.log(item);
      if (item === 'create') {
        this.mode = 'create';
        this.$refs.couponModal.openModal('create');
        // this.mode = 'create';
      } else {
        this.info = { ...item };
        this.mode = 'edit';
        this.$refs.couponModal.openModal(this.mode);
      }
    },
    delModal(id, title) {
      this.delobject.delId = id;
      this.delobject.title = title;
      this.delobject.bodyInfo = `刪除優惠券${id}`;
      this.$refs.deleteModel.open();
    },
    deleteCoupon() {
      this.$emit('loadingpage', true);
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.delobject.delId}`;
      this.$http.delete(url)
        .then((res) => {
          // console.log(res);
          alert(res.data.message);
          if (res.data.success) {
            this.$refs.deleteModel.close();
            this.getData(this.page);
          }
          this.$emit('loadingpage', false);
        })
        .catch((err) => {
          this.$emit('loadingpage', false);
          console.log(err.response);
        });
    },
    date(time) {
      const localDate = new Date(time * 1000);
      return localDate.toLocaleDateString();
    },
    status(item) {
      let resultstatus = '';
      if (item === 1) {
        resultstatus = true;
      } else if (item === 0) {
        resultstatus = false;
      }
      return resultstatus;
    },
    couponsflow(item) {
      console.log(this.mode);
      if (this.mode === 'edit') {
        this.updateCoupons(item);
      } else if (this.mode === 'create') {
        this.addCoupons(item);
      }
    },
    addCoupons(item) {
      this.$emit('loadingpage', true);
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`;
      this.$http.post(url, { data: item })
        .then((res) => {
          if (res.data.success) {
            alert(res.data.message);
            this.$refs.couponModal.hideModal();
            this.getData(this.page);
          } else {
            alert(res.data.message);
          }
          this.$emit('loadingpage', false);
        })
        .catch((err) => {
          this.$emit('loadingpage', false);
          console.log(err);
        });
    },
    updateCoupons(item) {
      this.$emit('loadingpage', true);
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`;
      this.$http.put(url, { data: item })
        .then((res) => {
          if (res.data.success) {
            alert(res.data.message);
            if (this.mode === 'edit') {
              this.$refs.couponModal.hideModal();
            }
            this.getData(this.page);
          } else {
            alert(res.data.message);
          }
          this.$emit('loadingpage', false);
        })
        .catch((err) => {
          this.$emit('loadingpage', false);
          console.log(err);
        });
    },
  },
};
</script>
