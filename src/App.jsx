import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./components/layouts/RootLayout";
import IndexLayout from "./components/layouts/IndexLayout";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<IndexLayout/>}/>
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
