import request from "@/assets/js/request.js";
// 订单列表
export const orderList = params => {
  return request({
    method: "get",
    url: "/orders",
    params
  });
};
