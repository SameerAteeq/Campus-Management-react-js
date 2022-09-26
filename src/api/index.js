import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebase";
import { collection, query, where, getDocs, deleteDoc, doc, getDoc } from "firebase/firestore";
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

export const deleteJob = async (jobId) => {
    await deleteDoc(doc(db, "jobs", jobId));
}

export const getJob = async (jobId) => {
    const docRef = doc(db, "jobs", jobId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        console.log("No such document!");
    }
}

export const getCandidate = async (candidateId) => {
    const candidateRef = doc(db, "users", candidateId);
    const docSnap = await getDoc(candidateRef);

    if (docSnap.exists()) {
        return docSnap.data()
    } else {
        console.log("No such document!");
    }
}