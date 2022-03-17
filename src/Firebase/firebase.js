import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyApdXh_Xch24cWzTGGMxBdm2QBFdRe4r8o",
  authDomain: "netflix-clone-b1de9.firebaseapp.com",
  projectId: "netflix-clone-b1de9",
  storageBucket: "netflix-clone-b1de9.appspot.com",
  messagingSenderId: "611500692204",
  appId: "1:611500692204:web:c5dc6bdf987a10d2654bc9"
};

const app = initializeApp(firebaseConfig);

export default app