import { useRouteError } from "react-router-dom";
import Button from "./Button";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="error-page">
      <h1>An Error has occured!</h1>
      <p>Something definitely went wrong 🤔</p>
      <p>{error.statusText || error.message}</p>
      <Button text="Go Back" url="/" />
    </div>
  );
}
