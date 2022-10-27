import React from 'react';
import ContributionForm from '../ContributionForm/ContributionForm';
import "./Goal.css";

function Goal({ goal, handleSubmit, input, setInput }) {
    const { progress, name, total, current } = goal;

    return (
      <div className='card'>
        <div className='name'>
          <h3>{name.toUpperCase()}</h3>
        </div>
        <div className='total'>
          <h3>{total}</h3>
        </div>
        <div className='current'>
          <h3>{current}</h3>
        </div>
        <div className='progress'>
          <h3>{progress}</h3>
        </div>
        <div>
          <ContributionForm
            handleSubmit={handleSubmit}
            setInput={setInput}
            input={input}
            goalName={name}
          />
        </div>
      </div>
    );
  }

export default Goal;