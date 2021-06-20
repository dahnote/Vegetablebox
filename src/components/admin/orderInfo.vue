<template>
  <div
    class="modal fade"
    id="productModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>訂單細節</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div   v-if="JSON.stringify(tempinfo) !== '{}'" class="modal-body">
          <div class="row">
            <div class="col-5">
                <div class="h2">用戶資訊</div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">客戶名稱 {{tempinfo.user.address}}</li>
                  <li class="list-group-item">email {{tempinfo.user.email}}</li>
                  <li class="list-group-item">郵寄地址 {{tempinfo.user.address}}</li>
                  <li class="list-group-item">聯絡電話 {{tempinfo.user.tel}}</li>
                  <li class="list-group-item">備註訊息 {{tempinfo.message}}</li>
                </ul>
            </div>
             <div class="col-7">
               <div class="h2">訂單資訊</div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">訂單建立時間 {{date(tempinfo.create_at)}}</li>
                  <li class="list-group-item">訂單總價 {{tempinfo.class="list-group-item"}}</li>
                  <li class="list-group-item">付款狀態
                    <span v-if="tempinfo.is_paid">已付款</span>
                    <span v-else>未付款</span>
                  </li>
                </ul>
               <div class="h2">訂單產品</div>
               <ul  class="list-group list-group-flush">
                  <li class="list-group-item" v-for="(product, i) in tempinfo.products" :key="i">
                    {{ product.product.title }} 數量：{{ product.qty }}
                    {{ product.product.unit }}
                  </li>
                </ul>
             </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
            <button type="button" class="btn btn-primary" @click="update"><span v-if="tempinfo.is_paid">取消付款</span>
                    <span v-else>確認付款</span></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  props: {
    orderinfo: {
      type: Object,
      default() { return {}; },
    },
  },
  data() {
    return {
      status: {},
      modal: '',
      tempinfo: {},
      isPaid: false,
    };
  },
  methods: {
    openModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
    date(time) {
      const localDate = new Date(time * 1000);
      return localDate.toLocaleDateString();
    },
    update() {
      this.tempinfo.is_paid = !this.tempinfo.is_paid;
      this.$emit('updateorderinfo', this.tempinfo);
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
  watch: {
    orderinfo() {
      this.tempinfo = this.orderinfo;
    },
  },
};
</script>
