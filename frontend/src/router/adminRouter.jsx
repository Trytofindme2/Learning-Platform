import AdminLayout from "../layout/adminLayout"
import Login from "../pages/admin/Login"


const adminRouter = [
    {
        path : '/admin',
        element : <AdminLayout/>,
        children : [
            {
                path : 'log-in',
                element : <Login/>
            }
        ]
    }
]

export default adminRouter