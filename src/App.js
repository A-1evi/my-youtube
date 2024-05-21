import React from "react";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import store from "./utils/store";
import Head from "./components/Head";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

import SuggestedVideosList from "./components/SuggestedVideosList";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Head></Head>
        <Body></Body>
      </>
    ),
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/search",
        element: <SuggestedVideosList />,
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter}>
        <Head></Head>
      </RouterProvider>
    </Provider>
  );
};

export default App;
