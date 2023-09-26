import {postsApi} from "../../api/services/postService";
import { IPost } from "../../model/types/post";
import PostCard from "../PostCard/PostCard";
import {useEffect, useState} from "react";
import classes from "./PostList.module.scss"
const DIVIDER = 4;

const PostList = () => {
  const [page, setPage] = useState(0);
  const { data: posts, isLoading} = postsApi.useGetPostsQuery(page);

  useEffect(() => {
    const onScroll = () => {
      const height = document.body.offsetHeight;
      const screenHeight = window.innerHeight;
      // Записываем, сколько пикселей пользователь уже проскроллил:
      const scrolled = window.scrollY;
      // Обозначим порог, по приближении к которому
      // будем вызывать какое-то действие.
      // В нашем случае — четверть экрана до конца страницы:
      const threshold = height - screenHeight / DIVIDER;
      // Отслеживаем, где находится низ экрана относительно страницы:
      const position = scrolled + screenHeight;

      if (position >= threshold) {
        setPage(prev => prev + 1);
      }
    };

    document.addEventListener("scroll", onScroll);

    return function () {
      document.removeEventListener("scroll", onScroll);
    };
  }, [page]);

  return (
    <div>
      <div className={classes.postList}>
        {isLoading && <h1>Loading...</h1>}
        {posts && posts.map((post: IPost, i: number) =>
          <PostCard key={post.id+page} post={post} id={i}/>
        )}
      </div>
    </div>
  );
};

export default PostList;
