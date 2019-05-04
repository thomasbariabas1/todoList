import HomePage from "../routes/Home";

const ApplicationRouting =[
    {
        path:'/app/home',
        requireAuthentication:true,
        exact:true,
        component:HomePage
    },
    {
        redirect:true,
        from:'/app',
        to:'/app/home'
    },


]



export default ApplicationRouting