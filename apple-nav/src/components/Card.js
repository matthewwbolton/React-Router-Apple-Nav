import React from 'react';
import { Link } from 'react-router-dom';


const Card = (props) => {
    
    
    return (
        <div>
            <Link>{props.elem}</Link>
        </div>
    );
};

export default Card;