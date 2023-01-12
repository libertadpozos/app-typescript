import '../styles/Filters.css';

interface Props {
  clearLists: () => void;
  onFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filterInput: string;
}

function Filters({ clearLists, onFilterChange, filterInput }: Props) {
  return (
    <div className='filters__wrapper'>
      <div>
        <label htmlFor='textFilter' aria-label='text filter' />
        <input
          type='text'
          id='textFilter'
          name='textFilter'
          value={filterInput}
          placeholder='Type to search'
          onChange={(e) => onFilterChange(e)}
        />
      </div>
      <button onClick={clearLists}>Clear all! </button>
    </div>
  );
}

export default Filters;
