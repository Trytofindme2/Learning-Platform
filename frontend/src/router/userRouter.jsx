import Login from "../pages/user/Login";
import Register from "../pages/user/Register";
import UserLayout from "../layout/userLayout";

const userRouter = [
    {
        path : '/student',
        element : <UserLayout/>,
        children : [
            {
                path : 'log-in',
                element : <Login/>
            },
            {
                path : 'register',
                element : <Register/>
            }
        ]
    } 
]


export default userRouter