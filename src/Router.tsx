import { Route, Routes } from "react-router";
import App from "./App";
import Blog from "./Blog";
import NotFound from "./NotFound";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default Router;