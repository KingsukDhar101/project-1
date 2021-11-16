import React, {Component} from 'react'
import './WriterSection.css'
class WriterSection extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: [],
        }
    }
    componentDidMount(){
        console.log('component did mount ...');
        this.getUsers();
    }
    getUsers = async () => {
        const res = await fetch('/api/user.json');
        // const users = await(res.json());
        this.setState({users: await(res.json())});
    };
    
    render(){
        console.log(this.state.users);
        return(
            <div className='writer-container'>
                <h1 className='writer-header'>Featured Writers</h1>
                <div className='writer-section'>
                    {this.state.users.map((user)=>{
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
