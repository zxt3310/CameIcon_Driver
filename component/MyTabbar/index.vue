<template>
	<u-tabbar :value="value" @change="change" @click="jump">
		<u-tabbar-item name="0" text="任务" icon="order"></u-tabbar-item>	
		<u-tabbar-item name="1" text="我的" icon="account"></u-tabbar-item>
	</u-tabbar>
</template>
	
<script>
	import {mapState} from "vuex"
	export default {
		computed:{
			...mapState(['user'])
		},
		props:{
			
		},
		methods:{
			jump(e){
				console.log(e)
			},
			change(e){
				console.log(e)
				// console.log(this.user)
			}
		}
	}
</script>

<style>
</style>