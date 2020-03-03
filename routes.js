import Home from './pages/Home'
import Login from './pages/Login'
import AllBooks from './pages/AllBooks'
import News from './pages/News'


export default [
    {
        path: '/news',
        component: News
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/all',
        component: AllBooks
    },
    {
        path: '/',
        component: Home
    },
]
