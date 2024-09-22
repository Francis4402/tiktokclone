import { database, Query } from "@/libs/AppWriteClient"
import useGetProfileByUserId from "./useGetProfileByUserId";


const useGetAllPosts = async () => {
  try {
    const res = await database.listDocuments(
        String(process.env.NEXT_PUBLIC_DATABASE_ID),
        String(process.env.NEXT_PUBLIC_COLLECTION_ID_POST),
        [
            Query.orderDesc('$id')
        ]
    )

    const documents = res.documents;

    const objPromises = documents.map(async doc => {
        let profile = await useGetProfileByUserId(doc?.user_id)

        return {
            id: doc?.$id,
            user_id: doc?.user_id,
            text: doc?.text,
            video_url: doc?.video_url,
            created_at: doc?.created_at,
            profile: {
                user_id: profile?.user_id,
                name: profile?.name,
                image: profile?.image,
            }
        }
    })

    const result = await Promise.all(objPromises)
    return result;

  } catch (error) {
    console.log(error);
  }
}

export default useGetAllPosts