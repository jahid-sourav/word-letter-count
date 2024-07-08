import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <p className="text-center">
        <span>&copy;</span>
        <Link to="https://github.com/jahid-sourav" className="text-green-600">
          Jahidul Islam
        </Link>{" "}
        All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
