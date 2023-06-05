import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useState } from "react";
import AmountCartContext from "./AmountCartContext";

// layouts
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

import data from "./data";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
    </Route>,
  ),
);

const initialData = [];

data.forEach((item) => {
  initialData.push({ id: item.id, amount: item.amount });
});

function App() {
  const amountCart = useState(initialData);
  return (
    <AmountCartContext.Provider value={amountCart}>
      <RouterProvider router={router} />
    </AmountCartContext.Provider>
  );
}

export default App;
