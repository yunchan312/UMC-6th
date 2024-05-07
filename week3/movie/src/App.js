import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Routes/Layout";
import Home from "./Routes/Home";
import MakeAccount from "./Routes/MakeAccount";
import NowPlaying from "./Routes/NowPlaying";
import Popular from "./Routes/Popular";
import TopRated from "./Routes/TopRated";
import Upcoming from "./Routes/Upcoming";
import Detail from "./Routes/Detail";
import NotFound from "./Routes/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "/now", element: <NowPlaying /> },
        { path: "/popular", element: <Popular /> },
        { path: "/top", element: <TopRated /> },
        { path: "/upcoming", element: <Upcoming /> },
        {
          path: "/*",
          element: <NotFound />,
        },
      ],
    },
    { path: "/create", element: <MakeAccount /> },
    {
      path: "/detail/:id",
      element: <Detail />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
