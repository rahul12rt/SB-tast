
import React, { useState } from "react";
import List from "./List";
import './style.css';
const Food = () => {
    const[Name,setName]=useState("");
    const[Foodi,setFoodi]=useState();
    const[Letter,setLetter]=useState("");
    const[Foodlist,setFoodilist]=useState();
     

    const submith = e =>{
        e.preventDefault();
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${Name}`)
        .then(Response=>Response.json())
        .then(
            data=> setFoodi(data.meals))
    }

    const submithh = e =>{
        e.preventDefault();
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${Letter}`)
        .then(Response=>Response.json())
        .then(
            data=> setFoodilist(data.meals))
    }


    return (
        <>
            <div className="First-page">
                <div class="block">  
                    <img className="header" src="https://media.istockphoto.com/vectors/restaurant-food-drinks-logo-fork-knife-background-vector-image-vector-id981368726?k=20&m=981368726&s=612x612&w=0&h=Um4YOExWlUgOfpUs2spnN0NrrXs-M71OUuUMbStVFNQ="/>
                    <div className="form">
                   <form onSubmit={submith} className="First-form">
                       <h1 className="title"></h1>
                    <input type="search" placeholder="Enter Your Recipe Name" className="search-bar" onChange={(e)=>setName(e.target.value)} value={Name} />
                    <input type="submit" value="Search" className="buton"/>
                    </form>
                    <form onSubmit={submithh} className="Sec-form">
                    <input type="search" placeholder="Search by First letter" className="search-bar2" onChange={(e)=>setLetter(e.target.value)} value={Letter} />
                    <input type="submit" value="Search" className="buton2"/>
                    </form>
                    </div>
                </div>

                <div className="section"> 
                { 
                (Foodi==null)? null : Foodi.map((Response)=>{
                           return(
                          <List data={Response}/>)})
                          } 

{ 
                (Foodlist==null)? null : Foodlist.map((Alist)=>{
                           return(
                          <List data={Alist}/>)})
                          } 
                </div>
            </div>
        </>
    )
}
export default Food;