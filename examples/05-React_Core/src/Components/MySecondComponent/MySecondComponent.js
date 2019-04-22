import React, {Component} from 'react';
import FriendsList from '../Friends/FriendsComponent';

export default class SecondComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {friends: ['Gena', 'Girl', 'Shapokliak']}
    }
    
    render() {
        return <div>
            <h1>{this.props.name}</h1>
            <FriendsList friends={this.state.friends} />
        </div>
    }
}