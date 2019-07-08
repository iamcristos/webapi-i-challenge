import React from 'react';
import axois from '../../axois';
import {toast} from 'react-toastify';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
    border: 1px solid #78797F;
    width: 300px;

    h2 {
        margin: 3px;
    }
    button {
        width: 100px;
        margin: 3px;
        background-color: rgba(0.6, 0.9, 0.9, .9);
        outline: none;
        color: white;
        cursor: pointer;
        &:hover{
            transition: all 5 ease-in-out;
            background-color: rgba(0.9, 0.9, 0.9, 1);
        }
    }
`;
const User = (props)=>{
    const {users} = props;
    const {deleteUser} = props
    return (
        <Div>
            <h2>{users.name}</h2>
            <p>{users.bio}</p>
            <button>Update</button>
            <button onClick={(e)=>deleteUser(e)(users.id)}>Delete</button>
        </Div>
    )
};


export default User;