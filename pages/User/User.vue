<template>
	<view>
		我的
		<MyTabbar :value="1"></MyTabbar>
	</view>
</template>

<script>
	import MyTabbar from "@/component/MyTabbar/index.vue"
	export default {
		components:{MyTabbar},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">

</style>
