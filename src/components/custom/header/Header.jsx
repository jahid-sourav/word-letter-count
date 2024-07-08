import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="template-container">
        <div className="flex items-center justify-between">
          {/* Logo Starts Here */}
          <Link to="/">
            <img
              className="max-w-[40px]"
              src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzU2ZHIyYjRjM28yaGQwa3k0djRpM2h1a3piN3VycWwxenRsdHRnZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/eNAsjO55tPbgaor7ma/giphy.webp"
              alt="Logo"
            />
          </Link>
          {/* Logo Ends Here */}

          {/* Nav Links Starts Here */}
          <ul className="flex items-center gap-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-green-600" : "text-black"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/another"
                className={({ isActive }) =>
                  isActive ? "text-green-600" : "text-black"
                }
              >
                Another
              </NavLink>
            </li>
          </ul>
          {/* Nav Links Ends Here */}
        </div>
      </div>
    </header>
  );
}

export default Header;
