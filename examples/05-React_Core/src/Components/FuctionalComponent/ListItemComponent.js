import React from 'react';
import PropTypes from 'prop-types';


const ListItemComponent = (props) => {
    return <li>{props.value}</li>
}

ListItemComponent.propTypes = {
    value: PropTypes.string
};

export default ListItemComponent;