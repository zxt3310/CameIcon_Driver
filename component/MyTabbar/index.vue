<template>
	<u-tabbar :value="value" @change="change">
		<u-tabbar-item text="任务" icon="order"></u-tabbar-item>
		<u-tabbar-item text="我的" icon="account"></u-tabbar-item>
	</u-tabbar>
</template>

<script>
	import {
		mapState
	} from "vuex"
	export default {
		props: {
			value: {
				type: String | Number,
				default: () => 0,
			}
		},
		computed: {
			...mapState(['user'])
		},
		onShow() {
			// if(this.user.userInfo.type == "sub"){
			// 	uni.switchTab({
			// 		url:"/pages/DriverSub/DriverSub"
			// 	})
			// }
		},
		methods: {
			change(e) {
				// this.value = e
				if (e == 0) {
					switch (this.user.type) {
						case "main":
							uni.switchTab({
								url: "/pages/DriverMain/DriverMain"
							})
							break;
						default:
							uni.switchTab({
								url: "/pages/DriverSub/DriverSub"
							})
							break;
					}
				}else{
					uni.switchTab({
						url:"/pages/User/User"
					})
				}
			}
		}
	}
</script>

<style>
</style>