import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>Something wen't wrong</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
