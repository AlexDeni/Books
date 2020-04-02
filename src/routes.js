import Home from './pages/Home'
import Login from './pages/Login'
import AllBooks from './pages/Books'
import News from './pages/News'
import BookProperties from "./widgets/BookCard";

export default [
    {
        path: '/news',
        component: News,
        exact: true,
    },
    {
        path: '/login',
        component: Login,
        exact: true,
    },
    {
        path: '/all/:id',
        component: BookProperties
    },
    {
        path: '/all',
        component: AllBooks,
        exact: true,
    },
    {
        path: '/',
        component: Home,
        exact: true,
    },
]
