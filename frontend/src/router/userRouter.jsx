
import Register from "../pages/user/Register";
import UserLayout from "../layout/userLayout";
import Main from "../pages/user/Main"
import UserInfo from "../pages/user/UserInfo"
import Password from "../components/user/user-info/editpassword"
import EditProfile from "../components/user/user-info/editProfile"
import Setting from "../components/user/user-info/setting";
import Courses from "../pages/user/Courses";
import Community from "../pages/user/Community";
import Practice from "../pages/user/Practice";
import Contact from "../pages/user/Contact";
import Profile from "../pages/user/profile";

const userRouter = [
    {
        path : '/NeuroLingua',
        element : <UserLayout/>,
        children : [
            {
                path : 'register',
                element : <Register/>
            },
            {
                path : 'home',
                element : <Main/>
            },
            {
                path : 'courses',
                element : <Courses/>
            },
            {
                path : 'practice',
                element : <Practice/>
            },
            {
                path : 'community',
                element : <Community/>
            },
            {
                path : 'contact',
                element : <Contact/>
            },
            {
                path : 'profile/:id',
                element : <Profile/>
            },
            {
                path : 'updateInfo',
                element : <UserInfo/>,
                children : [
                    {
                        path : 'editpassword',
                        element : <Password/>
                    },
                    {
                        path : 'editprofile',
                        element : <EditProfile/>
                    },
                    {
                        path : 'setting',
                        element : <Setting/>
                    }
                ]
            }
        ]
    } 
]


export default userRouter