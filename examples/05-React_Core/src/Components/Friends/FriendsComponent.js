import React, { Component } from 'react';
import ListItem from '../FuctionalComponent/ListItemComponent';
import PropTypes from 'prop-types';

const Friends = (props) => {
    return  <ul>
                {props.friends.map((item, index)=><ListItem key={index} value={item} />)}
            </ul>
}

Friends.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.string)
}

export default Friends;