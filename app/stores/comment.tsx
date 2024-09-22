import { create } from 'zustand';
import { persist, devtools, createJSONStorage } from 'zustand/middleware';

import useGetLikesByPostId from '../hooks/useGetLikesByPostId';
import { CommentWithProfile } from '../types';

  
interface CommentStore {
    commentsByPost: CommentWithProfile[];
    setCommentsByPost: (postId: string) => void;
}

export const useCommentStore = create<CommentStore>()( 
    devtools(
        persist(
            (set) => ({
                commentsByPost: [],

                setCommentsByPost: async (postId: string) => {
                    const result = await useGetLikesByPostId(postId);
                    set({ commentsByPost: result as CommentWithProfile[] });
                },
            }),
            { 
                name: 'store', 
                storage: createJSONStorage(() => localStorage)
            }
        )
    )
)