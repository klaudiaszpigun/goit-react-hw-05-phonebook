import '../index.css';
export const Filter = ({ filter }) => {
  return (
    <div className="filter-container">
      <p>Find contacts by name</p>
      <input className="input" onChange={filter} />
    </div>
  );
};
