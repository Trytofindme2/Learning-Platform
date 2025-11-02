import AdminLayout from "../layout/adminLayout"
import Login from "../pages/admin/Login"
import Dashboard from "../pages/admin/Dashboard"


const adminRouter = [
    {
        path : '/NeuroLingua/admin',
        element : <AdminLayout/>,
        children : [
            {
                path : 'log-in',
                element : <Login/>
            },
            {
                path : 'dashboard',
                element : <Dashboard/>
            }
        ]
    }
]

export default adminRouter