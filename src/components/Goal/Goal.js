import React from 'react';

function Goal({ goal }) {
    const { progress, total, current } = goal;

    return (
      <div>
        <h3>{progress}</h3>
        <h3>{total}</h3>
        <h3>{current}</h3>
      </div>
    );
  }

export default Goal;