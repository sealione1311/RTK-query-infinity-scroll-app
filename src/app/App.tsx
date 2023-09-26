import "./styles/index.scss"
import {Provider} from "react-redux";
import {store} from "../entities/Post/api/store/store";
import AppRouter from "./providers/AppRouter";
import {RouterProvider} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={AppRouter} />
      </Provider>
    </div>
  );
};

export default App;

