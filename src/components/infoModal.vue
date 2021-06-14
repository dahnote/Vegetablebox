<template>
  <div id="productModal2" ref="infoModal" class="modal fade" tabindex="-1" aria-labelledby="productModalLabel"
        aria-hidden="true">
     <div class="modal-dialog modal-lg">
       <div class="modal-content border-0">
         <div class="modal-header bg-dark text-white">
           <h5 id="productModalLabel" class="modal-title">
             詳細資訊
           </h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div class="modal-body">
            <div class="row">
            <div class="col-8">
              <div class="card">
                <img :src="productData.imageUrl" class="card-img-top" alt="...">
                <div class="card-body">
                  <p class="card-text">{{productData.content}}</p>
                </div>
              </div>
            </div>
            <div class="col-4">
                <ul class="list-group">
                  <li class="list-group-item">產品名稱 {{productData.title}}</li>
                  <li class="list-group-item">種類 {{productData.category}}</li>
                  <li class="list-group-item">單位 {{productData.unit}}</li>
                  <li class="list-group-item">原價 {{productData.origin_price}}</li>
                  <li class="list-group-item">折扣價 {{productData.price}}</li>
                </ul>
                <div>
                  <button type="button" class="btn btn-outline-danger btn-sm mt-1" @click="addCart">
                    加入購物車
                  </button>
                </div>
            </div>

            </div>
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
      productData: [],
      modal: '',
      infoId: '',
    };
  },
  // props: [
  //   'infoId',
  // ],
  mounted() {
    this.modal = new Modal(this.$refs.infoModal, {
      keyboard: false,
      backdrop: 'static',
    });
  },
  methods: {
    open(id) {
      this.infoId = id;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.infoId}`;
      this.$http(url)
        .then((res) => {
          if (res.data.success) {
            // console.log(res.data.product)
            this.productData = res.data.product;
            this.modal.show();
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    addCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const postData = { product_id: this.infoId, qty: 1 };
      this.$http.post(url, { data: postData })
        .then((res) => {
          if (res.data.success) {
            alert(res.data.message);
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
