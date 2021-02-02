import axiosTool from '@/utils/axios';

// 获取首页列表
export async function getHomeList(params) {
  return axiosTool({
    url: '/mock-web/api/home/getHomeList',
    method: 'get',
    params,
    title: '获取首页列表',
  });
}

// 提交首页列表
export async function saveHomeList(params) {
  return axiosTool({
    url: '/mock-web/api/home/saveHomeList',
    method: 'post',
    data: params,
    title: '提交首页列表',
  });
}
