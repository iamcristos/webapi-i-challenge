import React, {Component} from 'react';
import {toast} from 'react-toastify';
import axois from '../axois';
import './User.css';
import UserList from '../component/users/user';
class User extends Component {
    constructor(props){
        super(props)
        this.state = {
            users: [],
            err: '',
            loading: false
        }
    }

    componentDidMount() {
        this.setState({loading: true});
        axois.get()
            .then(res=> {
                this.setState({users: res.data.user})
            })
            .catch(err=> {
                this.setState({err: err.message})
            })
            .finally(()=> {
                this.setState({loading:false})
            })
    }
     deleteHandler = ()=>(id)=>{
        alert('continue to delete')
        this.setState({loading:true})
        axois.delete(`/${id}`)
            .then(()=> {
                toast.success('user deleted')
                const user = this.state.users;
                const users= user.filter(users=> users.id != id)
                this.setState({users})
            })
            .catch(()=>toast.error('user not deleted'))
            .finally(()=> this.setState({loading:false}));
    }

    render() {
        return (
            <div className="User">
                {this.state.users && 
                    this.state.users.map(user=> <UserList users={user} key={user.id} deleteUser={this.deleteHandler}/> )
                }
            </div>
        )
    }
}

export default User;