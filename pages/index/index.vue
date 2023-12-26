<template>
	<view class="content">
		<!-- <MyTabbar></MyTabbar> -->
		<u-button type="primary" text="跳转" @click="jump"></u-button>
	</view>
</template>

<script>
	import MyTabbar from "@/component/MyTabbar"
	export default {
		components: {
			MyTabbar
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {},
		methods: {
			jump(){
				uni.navigateTo({
					url:"/page/DriverMain/DriverMain"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>