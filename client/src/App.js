import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Home from "./components/home";

import SellerProfileForm from "./components/SellerProfileform/SellerProfileForm";
import AccountDetail from "./components/SellerProfileform/AccountDetail";



import { AuthProvider } from "./contexts/authContext";
import { useRoutes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Buyer from "./components/BuyerSection/Buyer";

function App() {
  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/home/buyer",
      element: <Buyer />,
    },
    {
      path: "/SellerForm",
      element: <SellerProfileForm />,
    },
    {
      path: "/SellerForm/Accountdetail",
      element: <AccountDetail />,
    },
    {
      path: "/SellerForm/Accountdetail/dashboard",
      element: <Dashboard />,
    },
  ];
  let routesElement = useRoutes(routesArray);
  return (
    <AuthProvider>
      <div className="w-full h-screen flex flex-col">{routesElement}</div>
    </AuthProvider>
  );
}

export default App;
