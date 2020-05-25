<template>
	<div class="login-wrap" :style="`background: url(${publicPath}/img/login/01.png) center no-repeat; height: ${data.loginWrapperHeight}`">
		<a-row type="flex" justify="space-around" align="middle" class="login-wrap-main">
			<a-col :span="14" :push="1" class="login-wrap-main-img" >
				<div>
					<a-row>
						<a-col :span="24">
							<img :src="`${publicPath}/img/login/02.png`" alt="">
						</a-col>
						<a-col :span="24" class="login-wrap-main-text">
							<span class="small">一站式服务使用</span> <span class="normal">WD 掌柜</span>
						</a-col>
					</a-row>
				</div>
			</a-col>
			<a-col :span="10"  class="login-wrap-form-wrap">
				<div class="login-wrap-form">
					<a-menu v-model="data.current" mode="horizontal" class="w-100">
						<a-menu-item key="mail"> 快速登录 </a-menu-item>
					</a-menu>
					<a-form class="umar-t20" :form="data.form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit" :layout="data.formLayout">
						<a-form-item  >
							<a-input
								v-decorator="['note', { rules: [{ required: true, message: '请输入手机号' }] }]"
								placeholder="手机号"
							/>
						</a-form-item>
						<a-form-item >
							<a-input
									v-decorator="['yzm', { rules: [{ required: true, message: '请输入验证码' }] }]"
									placeholder="验证码"
							/>
						</a-form-item>
						<a-form-item class="ta-l">
							<a-checkbox v-decorator="['remember',{ valuePropName: 'checked',initialValue: false,},]">
								<span class="fz-12 cr-b7b7b7">自动登录</span>
							</a-checkbox>
						</a-form-item>
						<a-form-item>
							<a-button block html-type="submit" size="large"  class="login-wrap-btn">
								登录
							</a-button>
							<div class="cr-b7b7b7 fz-12 ta-l">
								其他登录方式 <img :src="`${publicPath}/img/login/wechat.png`" alt="">
							</div>
						</a-form-item>
					</a-form>
				</div>
			</a-col>
		</a-row>
		<div class="login-wrap-footer">

		</div>
	</div>
</template>
<script lang="ts" src="./login.ts"></script>
<style lang="scss">
	@import "./login.scss";
</style>

