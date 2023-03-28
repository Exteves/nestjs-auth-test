import { Link } from "react-router-dom";

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <header className="">
      <nav>
        <h1>Church website</h1>
        <Link to="/login">
          Login
        </Link>
      </nav>
    </header>
  );
}

export default Header;
