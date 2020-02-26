import React from 'react';
import { useParams } from 'react-router-dom';
import Card from './Card';
import appleData from '../appleData';



const SubNav = () => {

    const params = useParams();
    console.log(params)
    const subNames = appleData.filter(elem => elem.id ===Number(params.id))
    console.log(subNames)

    return (
        <div class='SubNav'>
            {subNames[0].sub.map((elem, i) => (
                <Card key={i} elem={elem}/>
            ))}
        </div>
    );
};

export default SubNav;