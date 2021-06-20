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
    <div class="modal-dialog" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span v-if="mode==='edit'">編輯優惠券</span>
            <span v-else>新增優惠券</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <Form ref="form" class="" v-slot="{ errors }" @submit="update">
            <div class="mb-1">
                <label for="title" class="form-label">名稱</label>
                <Field id="title" name="名稱" type="text" class="form-control"
                :class="{ 'is-invalid': errors['名稱'] }" placeholder="請輸入名稱"
                rules="required" v-model="tempinfo.title"></Field>
                <error-message name="名稱" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-1">
                <label for="code" class="form-label">折扣碼</label>
                <Field id="code" name="折扣碼" type="text" class="form-control"
                :class="{ 'is-invalid': errors['折扣碼'] }" placeholder="請輸入折扣碼"
                rules="required" v-model="tempinfo.code"></Field>
                <error-message name="折扣碼" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-1">
                <label for="percent" class="form-label">折數</label>
                <Field id="percent" name="折數" type="number" class="form-control"
                :class="{ 'is-invalid': errors['折數'] }" placeholder="請輸入折數"
                rules="required" v-model.number="tempinfo.percent"></Field>
                <error-message name="折數" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-2">
                <label for="due_date" class="form-label">到期日</label>
                <Field id="due_date" name="到期日" type="date" class="form-control"
                :class="{ 'is-invalid': errors['到期日'] }" placeholder="到期日"
                rules="required" v-model="tempinfo.due_date"></Field>
                <error-message name="到期日" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-1">
                <input
                    class="form-check-input"
                    type="checkbox"
                    :id="`switch2${tempinfo.id}`"
                    :checked="tempinfo.is_enabled"
                    :true-value="1"
                    :false-value="0"
                    v-model="tempinfo.is_enabled"
                  />
                  <label class="form-check-label" :for="`switch2${tempinfo.id}`">
                    <span v-if="tempinfo.is_enabled===1">啟用</span>
                    <span v-else>不啟用</span>
                  </label>
            </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
            <button type="submit" class="btn btn-primary">儲存</button>
          </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  props: {
    info: {
      type: Object,
      default() { return {}; },
    },
    mode: {
      type: String,
      default() { return ''; },
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
    openModal(item) {
      console.log(item);
      this.modal.show();
      if (item === 'create') {
        this.$nextTick(() => {
          this.clear();
        });
      }
    },
    hideModal() {
      this.modal.hide();
    },
    date(time) {
      const localDate = new Date(time * 1000);
      return localDate.toLocaleDateString();
    },
    update() {
      // console.log(this.tempinfo.due_date);
      this.tempinfo.due_date = Math.floor(new Date(this.tempinfo.due_date) / 1000);
      // console.log(this.tempinfo.due_date);
      // this.tempinfo.is_paid = !this.tempinfo.is_paid;
      this.$emit('couponsflow', this.tempinfo);
    },
    clear() {
      this.$refs.form.resetForm();
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
  watch: {
    info() {
      console.log(this.mode);
      this.tempinfo = { ...this.info };
      if (this.tempinfo.due_date) {
        let localDate = new Date(this.tempinfo.due_date * 1000);
        localDate = localDate.toISOString().split('T');
        this.tempinfo.due_date = localDate[[0]];
      } else {
        this.$nextTick(() => {
          this.clear();
        });
      }
    },
  },
};
</script>
