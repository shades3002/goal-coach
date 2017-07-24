import * as firebase from  'firebase';

const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "m",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');