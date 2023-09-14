<template>
  <CommonNavbar title="登录" />
  <van-form class="login-form">
    <van-field
      v-model="areaCode"
      is-link
      readonly
      required
      name="picker"
      label="国际区号"
      placeholder="点击选择国际区号"
      @click="showPicker = true"
    />
    <van-popup v-model:show="showPicker" position="bottom">
      <van-picker :columns="areaCodes" @confirm="showPicker = false" @cancel="showPicker = false" />
    </van-popup>
    <van-field
      label="手机号"
      placeholder="手机号"
      v-model="phone"
      :rules="[{ required: true, message: '请填写手机号' }]"
      maxlength="11"
      required
      type="digit"
    >
      <template #button>
        <van-button size="mini" type="primary" @click="sendCode">发送验证码</van-button>
      </template>
    </van-field>
    <template v-if="step === 2">
      <van-cell title="请输入验证码" />
      <van-password-input
        :mask="false"
        :value="code"
        :focused="showKeyboard"
        @focus="showKeyboard = true"
      />
      <van-number-keyboard v-model="code" :show="showKeyboard" @blur="showKeyboard = false" />
      <van-button class="login-btn" type="primary" block @click="login">登录</van-button>
    </template>
  </van-form>
</template>
<script setup lang="ts">
const phone = ref('')
const code = ref('')
const showKeyboard = ref(false)
const showPicker = ref(false)
const areaCodes = [
  {
    text: '+86',
    value: '+86',
  },
]
const areaCode = ref('+86')
const step = ref(1) // 1 - 输入手机号 2 - 已点发送

function sendCode() {
  step.value = 2
}

function login() {}
</script>
<style scoped>
.login-form {
  margin: 10px;
}
.login-btn {
  margin-top: 20px;
}
</style>
