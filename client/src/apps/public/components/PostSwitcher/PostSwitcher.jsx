import React, { useEffect, useState } from 'react'

import {postsAPI} from "../../../../shared/api/posts";
import { PostSwitchItem } from './PostSwitchItem/PostSwitchItem'
import {Preloader} from "../../../../shared/components/UI/Preloader/Preloader";
import s from './PostSwitcher.module.sass'

export const PostSwitcher = ({ slug }) => {
  const [posts, setPosts] = useState([null, null]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result  = await postsAPI.getPostsToSwitch(slug);

        setPosts(result);

      } catch (e) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [slug]);

  return (
    <>
      {isError && 'Something went wrong'}
      {isLoading ? (
        <Preloader />
      ) : (
    <div className={s.list}>
      {posts[0] !== null ? (
        <PostSwitchItem
          {...posts[0]}
          isPost={true}
          type="prev"
        />
      ) : (
        <div className={s.spacer}></div>
      )}

      {posts[1] !== null ? (
        <PostSwitchItem
          {...posts[1]}
          isPost={true}
          type="next"
        />
      ) : (
        <div className={s.spacer}></div>
      )}
    </div>
        )}
    </>
  )
};
