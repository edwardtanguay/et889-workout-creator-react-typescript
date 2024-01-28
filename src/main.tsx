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

const rootElem = document.getElementById("root");
if (rootElem !== null) {
	ReactDOM.createRoot(rootElem).render(
		<RouterProvider router={router} />
	)
} else {
	alert("We're sorry, the site is experiencing a technical problem. Our adminstrator has been notified. Contact 030 / 23 23434 43 for more information.")
}
