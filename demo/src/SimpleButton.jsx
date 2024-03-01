import React from 'react';

function SimpleButton({onClick,children}){
    return(
        <button onClick={onClick}>
            {children}
        </button>
    );
}
export default SimpleButton;