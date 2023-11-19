import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { ContactForm } from "./contactform";



export const Profile = (props) => {
    const { store, actions } = useContext(Context);


    return(
       <div> <div className="container">
            <h1>{"Welcome " + store?.user?.name + "!"}</h1>
            <br></br>
           <ContactForm />
        </div>
    
        </div>
    );
};