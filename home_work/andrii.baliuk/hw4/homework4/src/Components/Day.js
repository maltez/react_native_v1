import React from 'react';

const Day = ({ day, isToday }) => {
  return (
    <div>
      <div className={'day' + (isToday ? ' isToday' : '')}>{day || ''}</div>
    </div>
  );
};

export default Day;
