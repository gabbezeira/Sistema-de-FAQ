import {initializeApp} from 'firebase/app'
import {getDatabase, set, ref, onValue} from 'firebase/database';
import firebase from './utils/firebase-config';

const app = initializeApp(firebase);
const db = getDatabase(app);

export const readDb = () => {
    const allData = ref(db,);
    onValue(allData, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
    })
};

export const writeDb = (id:string, table:string, name:string, age: number) => {
    set(ref(db, table + '/' + id), {
        name,
        age
    })
}

