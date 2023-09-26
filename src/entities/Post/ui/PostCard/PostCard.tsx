import {IPost} from "../../model/types/post";
import {FC} from "react";
import classes from './PostCard.module.scss'
import {Link} from "react-router-dom";
import {AppLink} from "../../../../shared/ui/AppLink/AppLink";

interface PostItemProps {
  post: IPost;
  id: number;
}

const PostItem: FC<PostItemProps> = ({post, id}) => {

  return (
    <div className={classes.post}>
     <p className={classes.text}>
       {`${id+1} ${post.title} ${post.body}`}
     </p>
      <AppLink to={'/post/' + post.id}>Details</AppLink>
    </div>
  );
};

export default PostItem;
