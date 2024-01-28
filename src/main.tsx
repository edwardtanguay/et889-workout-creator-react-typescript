import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.scss"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { PageHome, PageWorkout, PageProfile, PageNotFound } from "./pages"

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <PageNotFound />,
    element: <App />,
    children: [
      {
        path: "/",
        element: <PageHome />,
      },
      {
        path: "/workout",
        element: <PageWorkout />,
      },
      {
        path: "/profile",
        element: <PageProfile />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
)
