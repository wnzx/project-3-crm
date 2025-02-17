import TabsView from '@/layouts/tabs/TabsView'
import BlankView from '@/layouts/BlankView'
import PageView from '@/layouts/PageView'

// 路由配置
const options = {
  routes: [
    {
      path: '/login',
      name: '登录页',
      component: () => import('@/pages/login')
    },
    {
      path: '*',
      name: '404',
      component: () => import('@/pages/exception/404'),
    },
    {
      path: '/403',
      name: '403',
      component: () => import('@/pages/exception/403'),
    },
    {
      path: '/',
      name: '首页',
      component: TabsView,
      redirect: '/login',
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          meta: {
            icon: 'dashboard'
          },
          component: BlankView,
          children: [
            {
              path: 'workplace',
              name: '工作台',
              meta: {
                page: {
                  closable: false
                }
              },
              component: () => import('@/pages/dashboard/workplace'),
            },
            {
              path: 'analysis',
              name: '分析页',
              component: () => import('@/pages/dashboard/analysis'),
            }
          ]
        },
        {

          path: '/system',
          name: '系统设置',
          meta: {
            icon: 'setting',
            page: {
              cacheAble: false
            }
          },
          component: PageView,
          children: [
            {
            path:'role',
            name:'角色管理',
            component:()=>import('@/pages/role/index')
            },
            {
              path:'permission',
              name:'权限管理',
              component:()=>import('@/pages/permission/index')
            },
            {
              path:'department',
              name:'部门管理',
              component:()=>import('@/pages/department/index')
            },
            {
              path:'employee',
              name:'员工管理',
              component:()=>import('@/pages/employee/index')
            },
            {
              path: 'dictionary/contents',
              name: '字典列表',
              component:()=>import('@/pages/dictionary/contents')
            },
            {
              path: 'dictionary/details',
              name: '字典明细',
              component:()=>import('@/pages/dictionary/details')
            }
          ]
        },
        {
          path: '/customer',
          name: '客户管理',
          meta: {
            icon: 'setting',
            page: {
              cacheAble: false
            }
          },
          component: PageView,
          children: [
            {
              path:'manager',
              name:'潜在客户管理',
              component:()=>import('@/pages/customer/manager')
            },
            {
              path:'official',
              name:'正式客户管理',
              component:()=>import('@/pages/customer/official')
            },
            {
              path:'resource',
              name:'客户资源池',
              component:()=>import('@/pages/customer/resource')
            },
            {
              path:'followHistory',
              name:'跟进历史',
              component:()=>import('@/pages/customer/followHistory')
            },
          ]
        },
        {
          path: '/analysis',
          name: '统计分析',
          meta: {
            icon: 'setting',
            page: {
              cacheAble: false
            }
          },
          component: ()=>import('@/pages/analysis/index'),
        },
        {
          name: '关于创作者',
          path: 'antdv',
          meta: {
            icon: 'ant-design',
            link: 'https://msy.plus'
          }
        }
      ]
    },
  ]
}

export default options
