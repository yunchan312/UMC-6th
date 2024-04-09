import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Counter from "./Counter";
import Modal from "./Modal";
import Todo from "./Todo";
import Movie from "./Movie";

function App() {
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
    {
      path: "/todo",
      element: <Todo />,
    },
    {
      path: "/movie",
      element: <Movie />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
