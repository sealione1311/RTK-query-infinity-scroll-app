import Navbar from "../../widgets/Navbar/Navbar";
import {useParams} from "react-router-dom";
import {postsApi} from "../../entities/Post/api/services/postService";
import classes from "./DetailPage.module.scss"
import {AppLink} from "../../shared/ui/AppLink/AppLink";

const DetailPage = () => {
  const {id} = useParams();
  console.log(id)
  const {data: post, isLoading} = postsApi.useGetPostQuery(id);
  return (
    <div>
      <Navbar/>
      {isLoading && <h1>Loading...</h1>}
      <div className={classes.card}>
        <h2>{post && post.title}</h2>
        <p>
          {post && post.body}
        </p>
        <AppLink to='..'>Back
        </AppLink>
      </div>
    </div>
  );
};

export default DetailPage;
