import React from "react";
import auth from "./firebase";
import './Home.css'

const Home =()=> {
    return(
        <div>
        <h1>Dashboard</h1>
        <p> Welcome ! {auth?.currentUser?.email}</p>
        </div>
    );
}
export default Home;