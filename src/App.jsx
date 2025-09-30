import 'bulma/css/bulma.css';
import './App.scss';
import React, { useState } from 'react';
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
  let [alphabeticallyClassName, setalphabeticallyClassName] = useState("button is-info is-light")
  let [lengthClassName, setlengthClassName] = useState("button is-success is-light")
  let [reverseClassName, setreverseClassName] = useState("button is-warning is-light")
  let [resetClassName, setresetClassName] = useState("button is-danger is-light")
  let [listaVisivel, setarListasVisivel] = useState(goodsFromServer)
   
  function handleSortAlphabetically () {
    // return [...listaVisivel].sort()
    return [...listaVisivel].sort((a, b) => a.localeCompare(b))
  }
  function handleSortByLength () {
     return [...listaVisivel].sort((good1,good2) => good1.length - good2.length)
  }
  function handleToggleReverse () {
    return [...listaVisivel].reverse()
  }
  
  return(

  <div className="section content">
    <div className="buttons">
      <button 
      type="button" className={alphabeticallyClassName}
      onClick={ () => {
        setarListasVisivel(handleSortAlphabetically());
        setalphabeticallyClassName("button is-info")}}
      >
        Sort alphabetically
      </button>

      <button 
      type="button" className={lengthClassName}
      onClick={ () => {
        setarListasVisivel(handleSortByLength())
        setlengthClassName("button is-success")
      }}
      >
        Sort by length
      </button>

      <button 
      type="button" className={reverseClassName}
      onClick={ () => {
        setarListasVisivel(handleToggleReverse())
        setreverseClassName("button is-warning")
      }}
      >
        Reverse
      </button>

      <button 
      type="button" className={resetClassName}
      onClick={ () => {
        setarListasVisivel(goodsFromServer)
        setresetClassName("button is-danger")
      }}
      >
        Reset
      </button>
    </div>

    <ul>
      {listaVisivel.map((item, i) => <li key={item + i} data-cy="Good">{item}</li>)}
    </ul>
  </div>
  )
};
