import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {IPost} from "../../model/types/post";


export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (build) => ({
    getPosts: build.query({
      query: (page) => `posts?take=10&limit=10&offset=${page * 10}`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      }
    }),
    getPost: build.query({
      query: (id) =>  `posts/${id}`,
    })
  })
});


