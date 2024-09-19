import { database, Query } from '@/libs/AppWriteClient'

const useGetProfileByUserId = async (userId: string) => {
    
    try {
        const response = await database.listDocuments(
            String(process.env.NEXT_APPWRITE_DATABASE_ID),
            String(process.env.NEXT_APPWRITE_COLLECTION_ID_PROFILE),
            [
                Query.equal('user_id', userId)
            ]
        )
        const documents = response.documents;

        return {
            id: documents[0]?.$id,
            user_id: documents[0]?.user_id,
            name: documents[0]?.name,
            image: documents[0]?.image,
            bio: documents[0]?.bio,
        }
    } catch (error) {
        console.log(error)
    }
}

export default useGetProfileByUserId