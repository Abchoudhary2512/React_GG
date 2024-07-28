import React, { useState, useMemo } from 'react';

const NumberFilter = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [filter, setFilter] = useState('all');

  const filteredNumbers = useMemo(() => {
    console.log('Filtering numbers...');
    if (filter === 'even') {
      return numbers.filter(number => number % 2 === 0);
    }
    return numbers;
  }, [numbers, filter]);

  return (
    <div>
      <h2>Number Filter</h2>
      <label>
        Filter:
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="even">Even</option>
        </select>
      </label>
      <ul>
        {filteredNumbers.map(number => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default NumberFilter;
