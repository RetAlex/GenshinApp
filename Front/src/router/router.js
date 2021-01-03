import Changelog from "@/views/Changelog";
import AboutUs from "@/views/AboutUs";
import Home from "@/views/Home";
import CharExp from "@/views/CharExp";

export const routes = [
    {path: '/', component: Home},
    {path: '/changelog', component: Changelog},
    {path: '/about-us', component: AboutUs},
    {path: '/calc', component: CharExp}
];
