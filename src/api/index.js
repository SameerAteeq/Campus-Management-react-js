import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";

export const ImageUploader = async (file) => {
    console.log(file, "file")
    try {
        const storageRef = ref(storage, file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);
        const ImgUrl = await getDownloadURL(uploadTask.snapshot.ref);
        return ImgUrl;
    } catch (error) {
        console.log(error);
    }
}