import React from 'react';

const withAuthentication =(WrappedComponent)=>{
    return class extends React.Component{
        constructor(props){
            super(props);
            this.state ={
                isAuthenticated:false

            }
        }
        componentDidMount(){
            this.setState({isAuthenticated:true});
        }
        render(){
            return this.state.isAuthenticated?
            <WrappedComponent {...this.props}/>:
            <h1>Please Login here</h1>
        }

    };
}
    
export default withAuthentication;

