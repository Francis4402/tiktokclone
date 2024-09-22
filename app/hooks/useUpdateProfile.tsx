import { database } from "@/libs/AppWriteClient"


const useUpdateProfile = async(id: string, name: string, bio: string) => {
  try {
    await database.updateDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID as string,
      process.env.NEXT_PUBLIC_COLLECTION_ID_PROFILE as string,
      id,
      {
        name: name,
        bio: bio,
      }
    )
  } catch (error) {

    console.log(error)
  }
}

export default useUpdateProfile