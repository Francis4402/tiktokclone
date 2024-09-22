import { storage } from "@/libs/AppWriteClient";
import Image from "image-js";


export default async function useChangeUserImage(file: File, cropper: any, currentImage: string) {

    let videoId = Math.random().toString(36).slice(2, 22)

    const x = cropper.left;
    const y = cropper.top;
    const width = cropper.width;
    const height = cropper.height;

    try {
        const res = await fetch(URL.createObjectURL(file));
        const imageBuffer = await res.arrayBuffer();

        const image = await Image.load(imageBuffer);
        const croppedImage = image.crop({x, y, width, height});
        const resizedImage = croppedImage.resize({width: 1024, height: 1024});
        const blob = await resizedImage.toBlob();
        const arrayBuffer = await blob?.arrayBuffer();
        const finalFile = new File([arrayBuffer], file.name, {type: blob.type});

        const result = await storage.createFile(String(process.env.NEXT_PUBLIC_BUCKET_ID), videoId, finalFile);
        
        if(currentImage != String(process.env.NEXT_PUBLIC_PLACEHOLDER_DEFAULT_IMAGE_ID)) {
            await storage.deleteFile(String(process.env.NEXT_PUBLIC_BUCKET_ID), currentImage)
        }

        return result?.$id;


    } catch (error) {
        console.log(error);
    }

}
