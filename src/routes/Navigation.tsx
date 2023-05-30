import { Suspense } from "react";
import {
  BrowserRouter,
  Route,
  NavLink,
  Routes,
  Navigate,
} from "react-router-dom";
import { routes } from "./routes";

import logo from "../assets/react.svg";

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map(({ to, name }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? "activado" : "")}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />}></Route>
            ))}

            <Route
              path="/*"
              element={<Navigate to={routes[0].to} replace />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
