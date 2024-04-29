import { Link } from "react-router-dom"

export default function Header() {
  return (
    <section>
        <header>
          <h1 className="text-5xl text-center uppercase ichigo-header mt-20 ">Bankai</h1>

        <nav>
          <ul className="flex my-10 text-2xl">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/Quincy"}>Quincy</Link>
            </li>
          </ul>
        </nav>

        </header>

    </section>
  )
}
