import 'bulma/css/bulma.css';
import './App.scss';

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
  let alphabeticallyClassName = "button is-info is-light"
  let lengthClassName = "button is-success is-light"
  let reverseClassName = "button is-warning is-light"
  let resetClassName = "button is-danger is-light"
  let [listaVisivel, setarListasVisivel] = useState(goodsFromServer)
   
  function alphabetically () {
    return listaVisivel.sort((good1,good2) => good1.length - good2.length)
  }
  function sortbylength () {
     return listaVisivel.sort()
  }
  function reverse () {
    return listaVisivel.reverse()
  }
  
  return(

  <div className="section content">
    <div className="buttons">
      <button 
      type="button" className={alphabeticallyClassName}
      onClick={ () => {
        setarListasVisivel(alphabetically());
        alphabeticallyClassName = "button is-info"}}
      >
        Sort alphabetically
      </button>

      <button 
      type="button" className={lengthClassName}
      onClick={ () => {
        setarListasVisivel(sortbylength())
        lengthClassName = "button is-success"
      }}
      >
        Sort by length
      </button>

      <button 
      type="button" className={reverseClassName}
      onClick={ () => {
        setarListasVisivel(reverse())
        reverseClassName = "button is-warning"
      }}
      >
        Reverse
      </button>

      <button 
      type="button" className={resetClassName}
      onClick={ () => {
        setarListasVisivel(goodsFromServer)
        resetClassName = "button is-danger"
      }}
      >
        Reset
      </button>
    </div>

    <ul>
      <li data-cy="Good">Dumplings</li>
      <li data-cy="Good">Carrot</li>
      <li data-cy="Good">Eggs</li>
      <li data-cy="Good">Ice cream</li>
      <li data-cy="Good">Apple</li>
      <li data-cy="Good">...</li>
    </ul>
  </div>
  )
};
