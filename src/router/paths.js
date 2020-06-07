export default [
  {
    path: '/',
    name: 'Layout',
    view: 'Layout',
    meta: {
      requiresAuth: true
    },
    children:[
      {
        path: '',
        name: 'UserList',
        view: 'UserList',
        meta: {
          requiresAuth: true
        },
      },    
      {
        path: '/blog/:id',
        name: 'blog',
        view: 'BlogList',
        meta: {
          requiresAuth: true
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    view: 'Login',
    meta: {
      requiresVisitor: true
    }
  },
]
