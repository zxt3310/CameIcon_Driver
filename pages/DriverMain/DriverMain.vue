<template>
	<view>
		<u-subsection fontSize="26" :list="lines" :current="current" @change="onChange"></u-subsection>
		<view class="">
			
		</view>
		<MyTabbar :value="0"></MyTabbar>
	</view>
</template>

<script>
	import { mapState } from "vuex"
	import storage from '@/Tootls/storage.js'
	import MyTabbar from "@/component/MyTabbar/index.vue"
	import {getOrder} from "@/api/Order"
	export default {
		components:{MyTabbar},
		computed:{
			...mapState(['user'])
		},
		data() {
			return {
				current:0,
				lines:['北京-上海','上海-北京']
			};
		},
		onLoad() {
			if(!this.user.token){
				uni.redirectTo({
					url:"/pages/Login/Login"
				})
			}
			getOrder().then((res)=>{
				console.log(res)
			})
			
		},
		onShow() {
			if(this.$store.state.user.type == "sub"){
				uni.switchTab({
					url:"/pages/DriverSub/DriverSub"
				})
			}
		},
		methods:{
			onChange(e){
				this.current = e
			}
		}
	}
</script>

<style lang="scss">

</style>
