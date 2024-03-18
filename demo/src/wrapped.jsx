import React from 'react';
import ContentComponent from './content'
const renderContent=(data)=>{
    return(
        <div>
            {data}
        </div>
    );
};

const WrapperComponent =()=>{
    return(
        <div>
            <h1>Wrapper Component or parent component</h1>
            <ContentComponent render={renderContent}/>
        </div>
    );
}
export default WrapperComponent;