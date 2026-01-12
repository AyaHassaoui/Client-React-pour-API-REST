import React,{useState} from 'react';
import axios from 'axios';
import API_BASE_URL from '../config';
export default function CompteForm(){
 const [compte,setCompte]=useState({solde:'',dateCreation:'',type:'COURANT'});
 const handleChange=e=>setCompte({...compte,[e.target.name]:e.target.value});
 const handleSubmit=e=>{
  e.preventDefault();
  axios.post(`${API_BASE_URL}/comptes`,compte).then(()=>alert("Compte ajouté"));
 };
 return(<div className="mt-4">
  <h2>Ajouter un Compte</h2>
  <form onSubmit={handleSubmit}>
   <input name="solde" className="form-control mb-2" onChange={handleChange} placeholder="Solde"/>
   <input name="dateCreation" className="form-control mb-2" onChange={handleChange} placeholder="Date"/>
   <select name="type" className="form-select mb-2" onChange={handleChange}>
    <option value="COURANT">CourANT</option><option value="EPARGNE">EPARGNE</option>
   </select>
   <button className="btn btn-primary">Ajouter</button>
  </form>
 </div>);
}