import { useDispatch } from 'react-redux';
import { setFilter } from '../../store/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = evt => {
    const value = evt.target.value.toLowerCase();
    dispatch(setFilter(value));
  };

  return (
    <div>
      <h1>Search contact</h1>
      <input
        type="text"
        name="filter"
        onChange={handleFilter}
        placeholder="Enter name"
      />
    </div>
  );
};

export default Filter;
