import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import RecipesLayout from "./pages/Recipes/RecipesLayout";
import RecipeDetailPage from "./pages/Recipes/RecipeDetailPage";
import RecipeFilterPage from "./pages/Recipes/RecipeFilterPage";
import FilteredMealsPage from "./pages/Recipes/FilteredMealsPage";
import ErrorPage from "./pages/ErrorPage";

import { DEVICE } from "./utils/constants";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="recipes" element={<RecipesLayout />}>
              <Route path=":filter" element={<RecipeFilterPage />} />
              <Route
                path=":filter/:filterValue"
                element={<FilteredMealsPage />}
              />
              <Route
                path=":filter/:filterValue/detail/:mealId"
                element={<RecipeDetailPage />}
              />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

const GlobalStyles = createGlobalStyle`
:root, * {
  font-family: "DM Sans", sans-serif;
  font-optical-sizing: auto;
  line-height: 1.5;
  font-weight: 400;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  @media ${DEVICE.tablet} {
    font-size: 48%;
  }
  @media ${DEVICE.desktop} {
    font-size: 62.5%;
  }
  @media ${DEVICE.mobile} {
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar { 
      display: none;
    }
  }
}

body {
  padding: 0.8rem;
  margin: 0;
  // disabling the tap effect on mobiles.
  -webkit-tap-highlight-color: transparent;
}

p, h1, h2, h3 {
  margin: 0
}

button, a {
  cursor: pointer;
  text-decoration: none;
}

`;

export default App;
