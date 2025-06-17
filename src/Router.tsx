import { Route, Routes } from "react-router";
import App from "./App";
import NotFound from "./NotFound";
import Blog from "./Blog";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/blog/:id" element={<Blog />} />
        </Routes>
    );
}

export default Router;