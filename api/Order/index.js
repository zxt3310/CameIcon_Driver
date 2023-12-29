import $http from "@/api/requestBase.js"

const orderApi = {
	get:"api/v1/query-order-list"
}
// 获取所有订单
export const getOrder = () => {
	return $http.get(orderApi.get, {page:1,size:999})
}
