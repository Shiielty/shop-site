import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  // HashRouter,
} from "react-router-dom";
import { useState } from "react";
import AmountCartContext from "./AmountCartContext";

// layouts
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

import data from "./data";
import Cart from "./pages/Cart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout coffeeData={data} />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop coffeeData={data} />} />
      <Route path="cart" element={<Cart coffeeData={data} />} />
    </Route>,
  ),
  {
    basename: import.meta.env.DEV ? "/" : "/shop-site/",
  },
);

const initialData = [];

data.forEach((item) => {
  initialData.push({ id: item.id, amount: item.amount });
});

function App() {
  const amountCart = useState(initialData);
  return (
    // <HashRouter>
    <AmountCartContext.Provider value={amountCart}>
      <RouterProvider router={router} />
    </AmountCartContext.Provider>
    // </HashRouter>
  );
}

export default App;
