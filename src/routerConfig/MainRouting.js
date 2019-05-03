import LoginPage from '../routes/Login'
import ApplicationPage from '../routes'
const MainRouting =[
    {
        path:'/app',
        requireAuthentication:true,
        component:ApplicationPage
    },
    {
        path:'/login',
        exact:true,
        component:LoginPage
    },
    {
        redirect:true,
        to:'/app/home'
    }
]



export default MainRouting