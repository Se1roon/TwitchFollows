import Header from "../Header";
import InputGroup from "../InputGroup";

const Search = () => {
  return (
    <Header
      item1Content={
        <h2>
          Enter the <span>username</span>
        </h2>
      }
      item2Content={<InputGroup />}
    />
  );
};

export default Search;
