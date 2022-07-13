    import { Routes, Route } from "react-router-dom";
import BlogLayout from "../layouts/BlogLayout";
import MainLayout from "../layouts/MainLayout";
import PramotionLayout from "../layouts/PramotionLayout";
import ShopLayout from "../layouts/ShopLayout";

    export const routes = [
        <Route path="/" element={<MainLayout/>}/>,
        <Route path="/pramotion" element={<PramotionLayout/>}/>,
        <Route path="/Blog" element={<BlogLayout/>}/>,
        <Route path="/shop" element={<ShopLayout/>} />,
        <Route path="*" element={<h1>404 Error Page Not Found</h1>} />
    ]