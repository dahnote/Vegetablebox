<template>
   <div id="delProductModal" ref="delProductModal" class="modal fade" tabindex="-1"
        aria-labelledby="delProductModalLabel" aria-hidden="true">
      <Loading :active="isLoading"  :z-index="1060"></Loading>
     <div class="modal-dialog">
       <div class="modal-content border-0">
         <div class="modal-header bg-danger text-white">
           <h5 id="delProductModalLabel" class="modal-title">
             <span>刪除產品</span>
           </h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div class="modal-body">
           是否刪除
           <strong class="text-danger">{{productName}}</strong> 商品(刪除後將無法恢復)。
         </div>
         <div class="modal-footer">
           <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
             取消
           </button>
           <button type="button" class="btn btn-danger" @click="deleteProducet">
             確認刪除
           </button>
         </div>
       </div>
     </div>
   </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  data() {
    return {
      modal: '',
      productId: '',
      productName: '',
      isLoading: false,
    };
  },
  // props: [
  //   'infoId',
  // ],
  mounted() {
    this.modal = new Modal(this.$refs.delProductModal, {
      keyboard: false,
      backdrop: 'static',
    });
  },
  methods: {
    open(id) {
      this.infoId = id;
      // console.log(id.productName);
      this.productId = id.productId;
      this.productName = id.productName;
      this.modal.show();
    },
    deleteProducet() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.productId}`;
      this.$http.delete(url)
        .then((res) => {
          // console.log(res);
          alert(res.data.message);
          if (res.data.success) {
            this.modal.hide();
            this.$emit('refesh');
          }
          this.isLoading = false;
        })
        .catch((err) => {
          this.isLoading = false;
          console.log(err.response);
        });
    },
  },
};
</script>
