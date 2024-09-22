import { create } from "zustand";
import { Post, PostWithProfile } from "../types"
import * as zustandMiddleware from "zustand/middleware";
import useGetAllPosts from "../hooks/useGetAllPosts";
import useGetPostByUser from "../hooks/useGetPostByUser";
import useGetPostById from "../hooks/useGetPostById";

interface PostStore {
  allPosts: PostWithProfile[];
  postByUser: Post[];
  postById: PostWithProfile | null;
  setAllPosts: () => void;
  setPostByUser: (userId: string) => void;
  setPostById: (postId: string) => void;
}

export const usePostStore = create<PostStore>()(
  zustandMiddleware.devtools(
    zustandMiddleware.persist(
      (set) => ({
        allPosts: [] as PostWithProfile[],
        postByUser: [] as Post[],
        postById: null as PostWithProfile | null,

        setAllPosts: async () => {
          const result = await useGetAllPosts();
          set({ allPosts: result });
        },

        setPostByUser: async (userId: string) => {
          const result = await useGetPostByUser(userId);
          set({ postByUser: result });
        },

        setPostById: async (postId: string) => {
          const result = await useGetPostById(postId);
          set({ postById: result });
        }
      }),
      {
        name: 'store',
        storage: zustandMiddleware.createJSONStorage(() => localStorage)
      }
    )
  )
)
