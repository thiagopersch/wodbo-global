type Route = {
  id?: string
  path: string
  name: string
  prefix?: string
  category?: string
  children?: Route[]
}

const Routes: Route[] = [
  {
    id: 'home',
    path: '/',
    name: 'Home',
    prefix: 'home',
  },
  {
    id: 'automations',
    path: '/automations',
    name: 'Automações',
    prefix: 'automations',
    children: [
      {
        id: 'monsters',
        path: '/monsters',
        name: 'Monstros',
        prefix: 'monsters',
      },
    ],
  },
  {
    id: 'registers',
    name: 'Cadastros',
    path: '/registers',
  },
]

function buildRoutesWithPrefix(routes: Route[], parentPrefix = ''): Route[] {
  return routes.map((route) => {
    const fullPath = `${parentPrefix}${route.path}`

    return {
      ...route,
      path: fullPath,
      children: route.children ? buildRoutesWithPrefix(route.children, fullPath) : undefined,
    }
  })
}

const updatedRoutes = buildRoutesWithPrefix(Routes)

export { updatedRoutes }
