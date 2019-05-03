import HomePage from "../routes/Home";
import ItemDetailPage from "../routes/ItemDetail";

const ApplicationRouting =[
    {
        path:'/app/home',
        requireAuthentication:true,
        exact:true,
        component:HomePage
    },
    {
        path:'/app/details/:id',
        exact:true,
        requireAuthentication:true,
        component:ItemDetailPage
    },
    {
        redirect:true,
        from:'/app',
        to:'/app/home'
    },


]



export default ApplicationRouting