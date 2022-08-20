const Filter = (props) => {
  const searchHandler = (e) => {
    props.setSearchPerson(e.target.value);
  };

  return (
    <form>
      <div>
        filter shown with{' '}
        <input type="text" value={props.value} onChange={searchHandler} />
      </div>
    </form>
  );
};

export default Filter;
