import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
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

export const postedJobs = async (userId) => {
    const q = query(collection(db, "jobs"), where("createdBy", "==", userId));
    const querySnapshot = await getDocs(q);
    let list = [];
    querySnapshot.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() })
    });
    return list;
}

export const AllPostedJobs = async () => {
    const querySnapshot = await getDocs(collection(db, "jobs"));
    let jobList = []
    querySnapshot.forEach((doc) => {
        jobList.push({ id: doc.id, ...doc.data() })
    });
    return jobList;
}

export const allCandidates = async (userRole) => {
    const q = query(collection(db, "users"), where("role", "==", userRole));
    const querySnapshot = await getDocs(q);
    let Candidatelist = [];
    querySnapshot.forEach((doc) => {
        Candidatelist.push({ id: doc.id, ...doc.data() })
    });
    return Candidatelist;
}