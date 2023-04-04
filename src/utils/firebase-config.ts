// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const firebaseConfig = {
    apiKey: "AIzaSyBgezo5gStHCRlPhCA2qR_qc3PW3tGVbUE",
    authDomain: "react-ecommerce-project-79fb8.firebaseapp.com",
    projectId: "react-ecommerce-project-79fb8",
    storageBucket: "react-ecommerce-project-79fb8.appspot.com",
    messagingSenderId: "836616173917",
    appId: "1:836616173917:web:c12bfe0aeb873270a590b4"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const uploadFile = async (file: File) => {
    const storageRef = ref(storage, v4());
    await uploadBytes(storageRef, file);
    const url = getDownloadURL(storageRef);
    return url;
};