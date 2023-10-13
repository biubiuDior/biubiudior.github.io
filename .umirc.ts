import { defineConfig } from '@umijs/max';
import routers from './config/routes'

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {},
  routes: routers,
  npmClient: 'npm',
});
