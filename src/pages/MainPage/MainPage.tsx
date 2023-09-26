import Navbar from "../../widgets/Navbar/Navbar";
import {PostList} from "../../entities/Post";


const MainPage = () => {
  return (
    <div>
      <Navbar />
      <PostList />
    </div>
  );
};

export default MainPage;
