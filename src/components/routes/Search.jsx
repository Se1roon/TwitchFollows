import Header from "../Header";

const Search = () => {
  return (
    <Header
      item1Content={
        <h2>
          Enter the <span>username</span>
        </h2>
      }
      item2Content={
        <div className="input-group">
          <input type="text" />
        </div>
      }
    />
  );
};

export default Search;
