import React from 'react';
import { Link } from 'react-router-dom';
import appleData from '../appleData';





const NavWrapper = () => {
    return (
        <div>
           {appleData.map((elem, i) => <Link key={i} to={`/${elem.id}`} >{elem.name}</Link>)}     
        </div>
    );
};

export default NavWrapper;