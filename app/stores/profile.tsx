import * as zustandMiddleware from "zustand/middleware";
import useGetProfileByUserId from "../hooks/useGetProfileByUserId";
import { create } from "zustand";
import { Profile } from "../types";

interface ProfileStore {
    currentProfile: Profile | null,
    setCurrentProfile: (userId: string) => void
}

export const useProfileStore = create<ProfileStore>() (
    zustandMiddleware.devtools(
        zustandMiddleware.persist(
            (set) => ({
                currentProfile: null,
                
                setCurrentProfile: async(userId: string) => {
                    const result = await useGetProfileByUserId(userId)
                    set({ currentProfile: result })
                }
            }),
            {
                name: 'store',
                storage: zustandMiddleware.createJSONStorage(() => localStorage)
            }
        )
    )
)