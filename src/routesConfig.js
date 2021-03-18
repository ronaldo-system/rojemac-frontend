import CreateEmpresa from './pages/CreateEmpresa'
import ListEmpresa from './pages/ListEmpresa'
import EditEmpresa from './pages/EditEmpresa'
import Home from './pages/Home'

const routesConfig = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/create',
        component: CreateEmpresa,
        exact: true
    },
    {
        path: '/list',
        component: ListEmpresa,
        exact: true
    },
    {
        path: '/edit/:id',
        component: EditEmpresa
    },


]

export default routesConfig