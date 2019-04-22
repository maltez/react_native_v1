import React from 'react';
import SubMain from './sub-maim.component';

const Main = (props) => {
    const dateLocal = (new Date()).toDateString();
    return (
        <SubMain date={dateLocal} />
    )
}

export default Main;