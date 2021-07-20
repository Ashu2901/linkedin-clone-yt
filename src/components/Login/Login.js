import {useState} from "react";
import "./Login.css";
import {auth} from "../../firebase";
import {useDispatch} from "react-redux";
import {login} from "../../features/userSlice";

function Login(){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [name,setName]=useState('');
    const [profilePic,setProfilePic]=useState('');
    const dispatch=useDispatch();

    const register=()=>{
       if(!name){
           return alert("Please Enter a Full name");
       }

       auth.createUserWithEmailAndPassword(email,password)
       .then((userAuth)=>{
           userAuth.user.updateProfile({
               displayName:name,
               photoUrl:profilePic

           })
           .then(()=>{
               dispatch(login({
                   email:userAuth.user.email,
                   uid:userAuth.user.uid,
                   displayName:name,
                   photoURL:profilePic
               }))

           })
       }).catch(err=>alert(err))





    }

    const loginApp=e=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(userAuth=>{
            dispatch(login({
                email:userAuth.user.email,
                   uid:userAuth.user.uid,
                   displayName:userAuth.user.displayName,
                   profileUrl:userAuth.user.photoURL

            }))
        })
        .catch(err=>alert(err))



    }
    return(<div className="login">
        <img src="https://www.technipages.com/wp-content/uploads/2020/09/LinkedIn-Does-Not-Load-Images-fix.jpg" alt="" />
        <form>
            <input type="text" value={name} onChange={e=>setName(e.target.value)}  placeholder="Full name (required if registering)"  />
            <input type="text" value={profilePic} onChange={e=>setProfilePic(e.target.value)} placeholder="Profile pic URL (optional)"  />
            <input type="text" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" />

            <button type="submit" onClick={loginApp}>Sign In</button>
        
        </form>

        <p>Not a Member? <span className="login__register" onClick={register}>Register Now</span></p>
    </div>);
}

export default Login;