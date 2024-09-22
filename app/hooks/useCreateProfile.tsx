import { database, ID } from '@/libs/AppWriteClient'


const useCreateProfile = async (userId: string, name: string, image: string, bio: string) => {
  try {
    await database.createDocument(
        process.env.NEXT_PUBLIC_DATABASE_ID as string,
        process.env.NEXT_PUBLIC_COLLECTION_ID_PROFILE as string,
        ID.unique(),
        {
            user_id: userId,
            name: name,
            image: image,
            bio: bio
        }
    )
  } catch (error) {
    
  }
}

export default useCreateProfile