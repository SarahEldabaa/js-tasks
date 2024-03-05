import "./App.css";
import Tasks from "./Components/Tasks/Tasks";
import StandardErrorBoundry from "./Components/LCM/StandardErrorBoundry";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Products from "./Components/Products/Products";
import Addproduct from "./Components/Addproduct/Addproduct";
import Notfound from "./Components/Notfound/Notfound";
import Layout from "./Components/Layout/Layout";
import Productdetails from "./Components/Products/Productsdetails";
import Editproduct from "./Components/Products/Editproduct";

let routers = createBrowserRouter([
  {
    path: "",
    element: (
      <Layout />
        
    ),
    errorElement: <Notfound />,
    children: [
      { index: true, element: <Tasks /> },
      { path: "tasks", element: <Tasks /> },
      { path: "products", element: <Products /> },
      { path: "products/:id", element: <Productdetails /> },
      { path: "products/:id/edit", element: <Editproduct /> },
      { path: "addproduct", element: <Addproduct /> },
    ],
  },
]);

function App() {
  return (
    <>
      <StandardErrorBoundry>
          <RouterProvider router={routers}></RouterProvider>
      </StandardErrorBoundry>
    </>
  );
}

export default App;
