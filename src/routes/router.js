import { createBrowserRouter } from "react-router-dom";
import Layout from "../component/layout/Layout";
import Start from '../pages/start/Start';
import Todo from "../pages/todo/Todo";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
            //true yani to hamon / safhe Home ham baz kone
            index: true,
            element: <Start/>,
              
        },
        {
            path: "Register",
            element: <Register/>,
              
        },
        {
            path: "Login",
            element: <Login/>,
              
        },
        {
            path: "Todo",
            element: <Todo/>,
              
        },
      ]
        
    },

    // {
    //   path: "/",
    //   element: <Layout2 />,
    //   children: [
    //     {
    //       path: "login",
    //       element: <Login />,
    //     },
    //     {
    //       path: "register",
    //       element: <Register />,
    //     },
    //   ],
    // },
  ]);
  
  export default router;
  