import Home from './pages/Home'
import Login from './pages/Login'
import AllBooks from './pages/Books'
import News from './pages/News'
import BookProperties from "./widgets/BookProperties";

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
        path: '/all/:id',
        component: BookProperties
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
