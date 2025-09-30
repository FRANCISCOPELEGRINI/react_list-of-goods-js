import 'bulma/css/bulma.css';
import './App.scss';
import React, { useState, useCallback } from 'react';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [visibleList, setVisibleList] = useState(goodsFromServer);
  const [sortMode, setSortMode] = useState('none');
  const [isReversed, setIsReversed] = useState(false);
  
  const baseList = goodsFromServer;
  
  const getSortedAndReversedList = useCallback((mode, reversed) => {
    let sortedList = [...baseList];
    
    if (mode === 'alphabetical') {
      sortedList.sort((a, b) => a.localeCompare(b));
    } else if (mode === 'length') {
      sortedList.sort((a, b) => a.length - b.length);
    }
    
    if (reversed) {
      sortedList.reverse();
    }
    
    return sortedList;
  }, [baseList]);

  const handleSortAlphabetically = () => {
    const newSortMode = 'alphabetical';
    const newList = getSortedAndReversedList(newSortMode, isReversed);
    
    setSortMode(newSortMode);
    setVisibleList(newList);
  };

  const handleSortByLength = () => {
    const newSortMode = 'length';
    const newList = getSortedAndReversedList(newSortMode, isReversed);
    
    setSortMode(newSortMode);
    setVisibleList(newList);
  };
  
  const handleToggleReverse = () => {
    const newIsReversed = !isReversed;
    const newList = getSortedAndReversedList(sortMode, newIsReversed);
    
    setIsReversed(newIsReversed);
    setVisibleList(newList);
  };

  const handleReset = () => {
    setVisibleList(goodsFromServer);
    setSortMode('none');
    setIsReversed(false);
  };
  
  const alphabeticallyClassName = `button is-info ${sortMode === 'alphabetical' ? '' : 'is-light'}`;
  const lengthClassName = `button is-success ${sortMode === 'length' ? '' : 'is-light'}`;
  const reverseClassName = `button is-warning ${isReversed ? '' : 'is-light'}`;
  
  const isResetVisible = sortMode !== 'none' || isReversed;
  const resetClassName = `button is-danger ${isResetVisible ? '' : 'is-light'}`;

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={alphabeticallyClassName}
          onClick={handleSortAlphabetically}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={lengthClassName}
          onClick={handleSortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={reverseClassName}
          onClick={handleToggleReverse}
        >
          Reverse
        </button>
        
        {isResetVisible && (
          <button
            type="button"
            className={resetClassName}
            onClick={handleReset}
          >
            Reset
          </button>
        )}
      </div>
      
      <ul>
        {visibleList.map((item, i) => (
          <li key={item + i} data-cy="Good">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};