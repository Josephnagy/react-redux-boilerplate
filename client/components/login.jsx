import React, { useState, useEffect} from "react";
import { connect } from 'react-redux';
// get actions we need to update state with 
import { setUser } from '../actions/userActions';


// map dispatch to props
const mapDispatchToProps = (dispatch) => ({
    setUser: (user) => dispatch(setUser(user)), 
});

// map state to props
const mapStateToProps = (state) => ({
    currUser: state.user.name
}); 

const login = (props) => {
    // handle successful login, redirect to dashboard + update user state 
    function handleStateChange(){
        // update current user 
        props.setUser('Joe'); 
        return;
    }

    return (
        <div>
            <h1>Please login</h1>
            <h2>Hello, {props.currUser} </h2>
            <button onClick={handleStateChange}>Login</button>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(login);