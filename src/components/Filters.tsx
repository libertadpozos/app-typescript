// import '../styles/Filters.css';

interface Props {
  clearLists: () => void;
  onFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filterInput: string;
}

function Filters({ clearLists, onFilterChange, filterInput }: Props) {
  return (
    <>
      <label htmlFor='textFilter' aria-label='text filter' />
      <input
        type='text'
        id='textFilter'
        name='textFilter'
        value={filterInput}
        onChange={(e) => onFilterChange(e)}
      />
      <button onClick={clearLists}>Clear</button>
    </>
  );
}

export default Filters;
