import React from 'react';
import CompteList from './components/CompteList';
import CompteForm from './components/CompteForm';
export default function App(){
 return (<div className="container">
   <CompteForm/>
   <CompteList/>
 </div>);
}