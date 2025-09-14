import { createBrowserRouter } from 'react-router'
import adminRouter from "./adminRouter";
import userRouter from "./userRouter";

const router = createBrowserRouter([
    ...adminRouter,
    ...userRouter
])

export default router