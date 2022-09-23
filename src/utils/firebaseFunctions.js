import {
    collection,
    doc,
    getDocs,
    orderBy,
    query,
    setDoc
} from "firebase/firestore"
import {
    firestore
} from "../firebase.config"

// Saving new Item
export const saveItem = async (data) => {
    await setDoc(doc(firestore, 'softwareItems', `${Date.now()}`), data, {
        merge: true
    });
};

// getall Software Items
export const getAllSoftwareItems = async () => {
    const items = await getDocs(
        query(collection(firestore, 'softwareItems'), orderBy('id', 'desc'))
    );
    return items.docs.map((doc) => doc.data());
};


