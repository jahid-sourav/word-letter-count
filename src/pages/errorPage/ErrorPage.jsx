import PageTitle from "@/components/custom/pageTitle/PageTitle";
import { useNavigate, useRouteError } from "react-router-dom";
import errorImage from "../../assets/images/404.gif";
import "./ErrorPage.css";

function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();
  const goToHomeHandler = () => {
    navigate("/");
  };

  return (
    <section>
      <PageTitle title="Not Found" />
      <div className="flex justify-center">
        <img src={errorImage} alt="Error Image" />
      </div>
      <p className="error-text">{error.statusText || error.message}</p>
      <div className="text-center">
        <button className="error-button" onClick={goToHomeHandler}>
          Go To Home
        </button>
      </div>
    </section>
  );
}

export default ErrorPage;
