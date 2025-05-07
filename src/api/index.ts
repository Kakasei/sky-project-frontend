import request from "@/utils/request";

//登录
export function login(data: any) {
  return request({
    url: "/employee/login",
    method: "post",
    data
  });
}