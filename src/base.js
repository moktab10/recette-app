import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC94fDBTWGxJqat1SSjXVa2Ix-_gNjpIIc",
    authDomain: "recettes-app-2387b.firebaseapp.com",
    databaseURL: "https://recettes-app-2387b-default-rtdb.europe-west1.firebasedatabase.app"

})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
