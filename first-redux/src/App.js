import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import TodoList from "./TodoList/TodoList";
import PlayList from "./PlayList/PlayList";
import Layout from "./PlayList/Layout";

function App() {
  const router = createBrowserRouter([
    { path: "", element: <Home /> },
    { path: "/todolist", element: <TodoList /> },
    {
      path: "/playlist",
      element: <Layout />,
      children: [{ path: "", element: <PlayList /> }],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
