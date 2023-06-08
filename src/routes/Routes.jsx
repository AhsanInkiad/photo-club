import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Instructors from "../pages/instructors/Instructors";
import Classes from "../pages/classes/Classes";
import Dashboard from "../pages/dashboard/Dashboard";
import SelectedClasses from "../pages/dashboard/selected classes/SelectedClasses";
import PrivateRoutes from "./PrivateRoutes";
import EnrolledClasses from "../pages/dashboard/enrolled classes/EnrolledClasses";
import Payment from "../pages/dashboard/payment/Payment";
import PaymentHistory from "../pages/dashboard/payment history/PaymentHistory";
import UserHome from "../pages/dashboard/user home/UserHome";
import Idashboard from "../pages/i_dashboard/Idashboard";
import MyClasses from "../pages/i_dashboard/my classes/MyClasses";
import AddClass from "../pages/i_dashboard/Add Class/AddClass";
import IUserHome from "../pages/i_dashboard/i user home/IUserHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
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
        path: '/instructors',
        element: <Instructors></Instructors>
      },
      {
        path: '/classes',
        element: <Classes></Classes>
      }



    ]
  },
  {

    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'selectedclasses',
        element: <PrivateRoutes><SelectedClasses></SelectedClasses></PrivateRoutes>
      },
      {
        path: 'enrolledclasses',
        element: <EnrolledClasses></EnrolledClasses>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'paymenthistory',
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: 'userhome',
        element: <UserHome></UserHome>
      }
      
    ]
  },


  {

    path: 'idashboard',
    element: <Idashboard></Idashboard>,
    children: [
      {
        path: 'myclasses',
        element: <PrivateRoutes><MyClasses></MyClasses></PrivateRoutes>
      },
      {
        path: 'addclass',
        element: <AddClass></AddClass>
      },
      
      {
        path: 'iuserhome',
        element: <IUserHome></IUserHome>
      }
      
    ]
  }
]);

export default router;