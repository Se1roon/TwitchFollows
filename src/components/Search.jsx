import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import InputGroup from "./InputGroup";

const Search = () => {
  const navigation = useNavigation();

  return (
    <>
      <Header
        item1Content={
          <h2 className={navigation.state === "loading" ? "loading" : ""}>
            Enter the <span>username</span>
          </h2>
        }
        item2Content={<InputGroup />}
      />
      <Outlet />
    </>
  );
};

export default Search;
