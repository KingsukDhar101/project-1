import React, {Component} from 'react'
import './WriterSection.css'
// import axios from 'axios'

class WriterSection extends Component{
    constructor(props){
        super(props)
        this.state = {
            user: [],
        }
    }
    getUser(){
        fetch('https://reqres.in/api/users?page=2')
            .then(res => res.json())
            .then(json => json.data) 
            .then(data => {
                this.setState({user: data});
            })
            .catch(err => console.log("Error --> " + err));
    }
    
    componentDidMount(){
        this.getUser();
    }
    
    render(){
        return(
            <div className='writer-container'>
                <h1 className='writer-header'>Featured Writers</h1>
                <div className='writer-section'>
                    {this.state.user && this.state.user.map((user)=>{
                        return(
                            <div className='user-card' key={user.id}>
                                <img src={user.avatar} alt='image_'/>
                                <h4>{user.first_name}</h4>
                                <p>Email: {user.email}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
    
    
}

export default WriterSection
