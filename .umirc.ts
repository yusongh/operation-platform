import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '运维平台',
  },
  routes: [
    {
      path: '/',
      redirect: '/table',
    },
    {
      name: '主机管理',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'pnpm',
});
