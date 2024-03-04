import React from 'react';

const withErrrorBoundary =(WrappedComponent)=>{
    return class extends React.Component{
        constructor(props){
            super(props);
            this.state ={hasError:false}
        }
        componentDidMount(error,errinfo){
            this.setState({hasError:false});
            console.log("Error caught by error biundary",error ,errinfo);
    }
    render(){
        if(this.state.hasError){
           return <h1>Something went wrong</h1>
            
        }

           return <WrappedComponent {...this.props}/>;
        }
    };
    
};

export default withErrrorBoundary;