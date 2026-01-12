import React,{useState,useEffect} from 'react';
import axios from 'axios';
import API_BASE_URL from '../config';
export default function CompteList(){
 const [comptes,setComptes]=useState([]);
 useEffect(()=>{
  axios.get(`${API_BASE_URL}/comptes`).then(r=>setComptes(r.data));
 },[]);
 return(<div className="mt-4">
  <h2>Liste des Comptes</h2>
  <table className="table table-bordered">
   <thead><tr><th>ID</th><th>Solde</th><th>Date</th><th>Type</th></tr></thead>
   <tbody>
    {comptes.map(c=>(<tr key={c.id}>
      <td>{c.id}</td><td>{c.solde}</td><td>{c.dateCreation}</td><td>{c.type}</td>
    </tr>))}
   </tbody>
  </table>
 </div>);
}