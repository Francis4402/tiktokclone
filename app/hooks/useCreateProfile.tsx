import { database, ID } from '@/libs/AppWriteClient'


const useCreateProfile = async (userId: string, name: string, image: string, bio: string) => {
  try {
    await database.createDocument(
        String(process.env.NEXT_APPWRITE_DATABASE_ID),
        String(process.env.NEXT_APPWRITE_COLLECTION_ID_PROFILE),
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