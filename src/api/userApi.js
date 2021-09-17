
import firebase from "firebase";

const userApi = {
    getMe: ()=>{
        //CALL API to get current user

        return new Promise((resolve, reject)=>{
            
            const currentUser = firebase.auth().currentUser;

            setTimeout(()=>{
                resolve({
                    id:currentUser.uid,
                    name:currentUser.displayName,
                    email:currentUser.email,
                    photoUrl:currentUser.photoURL
                })
            },500)

        })
    }
}
export default userApi