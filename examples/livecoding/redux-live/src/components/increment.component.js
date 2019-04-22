import React from 'react';

export default ({click, isActive}) => {
    return (
        <div>
            <button disabled={isActive} onClick={click}>+</button>
        </div>
    );
}