<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			uni.hideTabBar()
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	page{
		width: 100%;
		height: 100%
	}
	/*每个页面公共css */
	@import "@/uni_modules/uview-ui/index.scss";
</style>
