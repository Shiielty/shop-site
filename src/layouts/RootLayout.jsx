import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Cart from "../pages/Cart";

export default function RootLayout({ coffeeData }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <Cart coffeeData={coffeeData} />
    </>
  );
}
