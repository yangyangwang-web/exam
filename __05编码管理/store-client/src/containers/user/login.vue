<template>
  <div>
    <h3 class="text-center pt15 pb15 bdb1 bg-danger">登录</h3>
    <div class="pl15 pr15">
      <van-cell-group class="mt25">
        <van-field
          v-model="username"
          clearable
          label="用户名"
          left-icon="friends-o"
          placeholder="请输入用户名"
        />

        <van-field
          v-model="password"
          type="password"
          label="密码"
          clearable
          left-icon="closed-eye"
          placeholder="请输入密码"
        />
        <div class="mt15">
          <van-button color="#7232dd" plain size="large" @click="_userLogin"
            >登录</van-button
          >
        </div>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import { userLogin } from "@/api/user";
import { UPDATE_TOKEN, UPDATE_UID, HEADER_STATUS } from "@/store/type";
export default {
  name: "Login",
  data() {
    return {
      username: "zhiqian",
      password: "123321"
    };
  },
  methods: {
    async _userLogin() {
      if (this.username === "" || this.username === null) {
        this.$toast("用户名不能为空");
        return false;
      }
      if (this.password === "" || this.password === null) {
        this.$toast("密码不能为空");
        return false;
      }
      const result = await userLogin({
        username: this.username,
        password: this.password
      });
      if (result.data.code === 1) {
        this.$store.commit({ type: UPDATE_TOKEN, payload: result.data.token });
        this.$store.commit({ type: UPDATE_UID, payload: result.data.uid });
        this.$store.commit({ type: HEADER_STATUS, payload: true });
        this.$router.push("/home");
      }
    }
  }
};
</script>

<style></style>
