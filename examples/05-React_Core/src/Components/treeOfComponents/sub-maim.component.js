import React from 'react';
import Child8 from './child8.component';
import Child1 from './child1.component';

const SubMain = (props) => {
    return (
    <div>
        <Child1 />
        <Child8 date = {props.date} />
    </div>);
}

export default SubMain;