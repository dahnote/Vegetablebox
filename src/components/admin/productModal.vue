<template>
   <div id="productModal" ref="productModal" class="modal fade" tabindex="-1" aria-labelledby="productModalLabel"
        aria-hidden="true">
      <Loading :active="isLoading"  :z-index="1060"></Loading>
     <div class="modal-dialog modal-xl text-start">
       <div class="modal-content border-0">
         <div class="modal-header bg-dark text-white">
           <h5 id="productModalLabel" class="modal-title">
             <span v-if="mode==='create'">新增產品</span>
             <span v-else-if="mode==='edit'">編輯產品</span>
           </h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div class="modal-body">
           <div class="row">
             <div class="col-sm-4" style="overflow: auto;height: 400PX;">
               <div class="mb-1">
                 <div class="form-group">
                   <label for="imageUrl">主要圖片</label>
                   <input type="text" class="form-control"
                          placeholder="請輸入圖片連結"
                          v-model="productInfo.imageUrl">
                 </div>
               </div>
               <div class="mb-1">
                 <div class="form-group">
                   <label for="imageUrl">上傳主要圖片</label>
                   <input
                    type="file"
                    class="form-control"
                    ref="file"
                    @change="uploadFile"
                  />
                 </div>
               </div>
               <img class="img-fluid" :src="productInfo.imageUrl" alt="">
               <div class="mb-1">
                 <div class="form-group">
                   <label for="imageUrl">輸入多圖片網址</label>
                   <input type="text" class="form-control"
                          placeholder="請輸入圖片連結"
                          v-model="imagesUrl">
                 </div>
               </div>
               <div>
                 <button class="btn btn-outline-primary btn-sm d-block w-100" @click="addImage">
                   新增圖片
                 </button>
               </div>
               <div v-for="(itmm,index) in productInfo.imagesUrl" :key="index">
                 <img class="img-fluid" :src="itmm" alt="">
                 <button class="btn btn-outline-danger btn-sm d-block w-100" @click="delImage(index)">
                   刪除圖片
                 </button>
               </div>
             </div>
             <div class="col-sm-8">
               <div class="form-group">
                 <label for="title">標題</label>
                 <input v-model="productInfo.title" id="title" type="text" class="form-control" placeholder="請輸入標題">
               </div>

               <div class="row">
                 <div class="form-group col-md-6">
                   <label for="category">分類</label>
                   <input v-model="productInfo.category" id="category" type="text" class="form-control"
                          placeholder="請輸入分類">
                 </div>
                 <div class="form-group col-md-6">
                   <label for="price">單位</label>
                   <input v-model.number="productInfo.unit" id="unit" type="text" class="form-control" placeholder="請輸入單位">
                 </div>
               </div>

               <div class="row">
                 <div class="form-group col-md-6">
                   <label for="origin_price ">原價</label>
                   <input v-model.number="productInfo.origin_price" id="origin_price" type="number" min="0" class="form-control" placeholder="請輸入原價">
                 </div>
                 <div class="form-group col-md-6">
                   <label for="price">售價</label>
                   <input v-model.number="productInfo.price" id="price" type="number" min="0" class="form-control"
                          placeholder="請輸入售價">
                 </div>
               </div>
               <hr>

               <div class="form-group">
                 <label for="description">產品描述</label>
                 <textarea v-model="productInfo.description" id="description" type="text" class="form-control"
                           placeholder="請輸入產品描述">
                 </textarea>
               </div>
               <div class="form-group">
                 <label for="content">說明內容</label>
                 <textarea v-model="productInfo.content" id="description" type="text" class="form-control"
                           placeholder="請輸入說明內容">
                 </textarea>
               </div>
               <div class="form-group">
                 <div class="form-check">
                   <input v-model="productInfo.is_enabled" id="is_enabled" class="form-check-input" type="checkbox"
                          :true-value="1" :false-value="0">
                   <label class="form-check-label" for="is_enabled">是否啟用</label>
                 </div>
               </div>
             </div>
           </div>
         </div>
         <div class="modal-footer">
           <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
             取消
           </button>
           <button type="button" class="btn btn-primary" @click="processingflow">
             確認
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
      imagesUrl: '',
      productInfo: {},
      productId: '',
      isLoading: false,
    };
  },
  props: [
    'mode', 'editInfo',
  ],
  watch: {
    editInfo() {
      this.imagesUrl = '';
      this.alertMessage = '';
      this.productInfo = { ...this.editInfo };
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.productModal, {
      keyboard: false,
      backdrop: 'static',
    });
  },
  emits: { refesh: null },
  methods: {
    open() {
      this.modal.show();
    },
    addImage() {
      if (this.imagesUrl !== '') {
        this.productInfo.imagesUrl.push(this.imagesUrl);
        this.imagesUrl = '';
      }
    },
    processingflow() {
      if (this.mode === 'create') {
        this.createProducet();
      } else if (this.mode === 'edit') {
        this.updateProducet();
      }
    },
    uploadFile() {
      this.isLoading = true;
      const uploadedFile = this.$refs.file.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', uploadedFile);
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`;
      this.$http.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        .then((res) => {
          if (res.data.success) {
            alert('上傳成功');
            this.productInfo.imageUrl = res.data.imageUrl;
            this.$refs.fileInput.value = '';
            this.isLoading = false;
          }
        })
        .catch((err) => {
          this.isLoading = false;
          console.log(err.response);
        });
    },
    createProducet() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
      this.$http.post(url, { data: this.productInfo })
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            alert(res.data.message);
            this.modal.hide();
            this.$emit('refesh');
          } else {
            alert(res.data.message[0]);
          }
          // this.data.productsData=res.data.products;
        })
        .catch((err) => {
          this.isLoading = false;
          console.log(err.response);
        });
    },
    updateProducet() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.editInfo.id}`;
      this.$http.put(url, { data: this.productInfo })
        .then((res) => {
          if (res.data.success) {
            alert(res.data.message);
            this.modal.hide();
            this.$emit('refesh');
          } else {
            alert(res.data.message[0]);
          }
          this.isLoading = false;
          // this.data.productsData=res.data.products;
        })
        .catch((err) => {
          this.isLoading = false;
          console.log(err.response);
        });
    },
  },
};
</script>
