import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from './Card';
import appleData from '../appleData';



const SubNav = (props) => {

    const params = useParams();

    return (
        <div>
       
       {appleData.map((elem, i) => (
           <Link key={i} to={`/${elem.name}/${elem.sub}`}>{elem.sub}</Link>
       ))}
       

         <Card />
        
        </div>
    );
};

export default SubNav;