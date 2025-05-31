import { createBrowserRouter } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Videos from "./Videos"
import Blog from "./Blog"
import Donations from "./Donations"
import Contact from "./Contact"
import JobListings from "./JobListings"
import Layout from "./Layout"
import Article1 from "./Article1"
import Article2 from "./Article2"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
            { path: "videos", element: <Videos /> },
            { path: "blog", element: <Blog /> },
            { path: "blog/mercy-clinic-is-open", element: <Article1 /> },
            { path: "blog/welcome", element: <Article2 /> },
            { path: "donations", element: <Donations /> },
            { path: "contact", element: <Contact /> },
            { path: "joblisting", element: <JobListings /> },
        ],
    },
])

export default router
