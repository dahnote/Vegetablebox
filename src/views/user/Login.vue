<template>
    <div class="container">
        <div class="my-5 row justify-content-center">
            <Form ref="order" class="col-md-3" v-slot="{ errors }" @submit="onSubmit">
              <div class="mb-3">
                <label for="email" class="form-label">帳號</label>
                <Field name="email" type="email" class="form-control" :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email" rules="email|required" v-model="user.username"></Field>
                <error-message name="email" class="invalid-feedback"></error-message>
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">密碼</label>
                <Field name="密碼" type="password" class="form-control" :class="{ 'is-invalid': errors['密碼'] }" placeholder="請輸入 密碼" rules="required" v-model="user.password"></Field>
                <error-message name="密碼" class="invalid-feedback"></error-message>
              </div>
            <div class="text-end">
              <button type="submit" class="btn btn-danger">登入</button>
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
        password: '',
        username: '',
      },
      message: '',
    };
  },
  mounted() {
  },
  created() {
    this.checkCookie();
  },
  methods: {
    onSubmit() {
      const url = `${process.env.VUE_APP_API}admin/signin`;
      this.$http.post(url, this.user)
        .then((res) => {
          if (res.data.success) {
            alert(res.data.message);
            const { token } = res.data;
            const { expired } = res.data;
            document.cookie = `mytoken=${token}; expires=${new Date(expired)}`;
            this.$router.push('/admin/products');
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    checkCookie() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)mytoken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      if (token) {
        const url = `${process.env.VUE_APP_API}api/user/check`;
        this.$http.defaults.headers.common.Authorization = `${token}`;
        this.$http.post(url, { api_token: token }).then((response) => {
          if (response.data.success) {
            this.$router.push('/admin/products');
          }
        });
      }
    },
  },
};
</script>
