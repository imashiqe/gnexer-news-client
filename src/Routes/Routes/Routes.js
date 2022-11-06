import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import News from "../../Pages/News/News";
import Profile from "../../Pages/Others/Profile/Profile";
import TermsAndConditions from "../../Pages/Others/TermsAndConditions/TermsAndConditions";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
      {
        path: '/',
        element: <Main></Main>,
        children: [
             {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://gnexer-news-server.vercel.app/news')
             },
             {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`https://gnexer-news-server.vercel.app/news-categories/${params.id}`)

             },
             {
                path: '/news/:id',
                element: <PrivateRoute> <News></News></PrivateRoute>,
                loader: ({params}) => fetch(`https://gnexer-news-server.vercel.app/news/${params.id}`)
                
             },
             {
             path: '/login',
             element: <Login></Login>
            },
            {
               path: '/register',
               element: <Register></Register>
            },
            {
               path: '/terms',
               element: <TermsAndConditions></TermsAndConditions>
            }
            ,
             {
                path: '/profile',
                element:
                 <PrivateRoute>
                  <Profile></Profile>
                </PrivateRoute>
             }
           
        ]
      }
]);