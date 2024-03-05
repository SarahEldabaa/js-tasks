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
let routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Notfound />,
    children: [
      { path: "products", element: <Products /> },
      { path: "addproduct", element: <Addproduct /> },
      { index: true, element: <Tasks /> },
      { path: "tasks", element: <Tasks /> },
      // { path: "*", element: <Notfound /> },
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
