import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Counter from "./Counter";
import Modal from "./Modal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
  {
    path: "/modal",
    element: <Modal />,
  },
]);

function App() {
  <RouterProvider router={router} />;
}

export default App;
