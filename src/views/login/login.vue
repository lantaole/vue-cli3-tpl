<template>
	<div class="login-wrap" :style="`background: url(${publicPath}/img/login/01.png) center no-repeat; height: ${data.loginWrapperHeight}`">
		<div class="login-wrap-main">
			<a-row type="flex">
				<a-col :span="10" class="login-wrap-main-img" :push="1">
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
				<a-col :span="14" :push="2" class="login-wrap-form-wrap">
					<div class="login-wrap-form">
						<a-menu v-model="data.current" mode="horizontal" class="w-100">
							<a-menu-item key="mail"> 快速登录 </a-menu-item>
						</a-menu>

					</div>
				</a-col>
			</a-row>
		</div>
		<div class="login-wrap-footer">

		</div>
	</div>
</template>
<script lang="ts" src="./login.ts"></script>
<style lang="scss">
	@import "./login.scss";
</style>

