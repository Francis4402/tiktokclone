import { database } from "@/libs/AppWriteClient"


const useUpdateProfileImage = async (id: string, image: string) => {
  try {
    await database.updateDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID as string,
      process.env.NEXT_PUBLIC_COLLECTION_ID_PROFILE as string,
      id,
      {
        image: image,
      }
    )
  } catch (error) {

    console.log(error)
  }
}

export default useUpdateProfileImage