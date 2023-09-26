import {createBrowserRouter} from "react-router-dom";
import MainPage from "../../pages/MainPage/MainPage";
import DetailPage from "../../pages/DetailPage/DetailPage";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />

  },
  {
    path: "post/:id",
    element: <DetailPage />
  },
]);

export default AppRouter;
