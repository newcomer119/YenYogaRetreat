import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "./firebase";
const db = getFirestore(app);

export const fetchTranslations = async (lang, component) => {
  try {
    const docRef = doc(db, lang, component);
    const docSnap = await getDoc(docRef);

    return docSnap.data();
  } catch (error) {
    console.error("Error fetching translations:", error);
    return {};
  }
};
