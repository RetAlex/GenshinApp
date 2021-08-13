import Changelog from "@/views/Changelog";
import AboutUs from "@/views/AboutUs";
import Home from "@/views/Home";
import CharExp from "@/views/CharExp";
import RouteMap from "@/views/RouteMap";
import Roadmap from "@/views/Roadmap";

export const routes = [
    {path: '/home', component: Home},
    {path: '/changelog', component: Changelog},
    {path: '/about-us', component: AboutUs},
    {path: '/', component: CharExp},
    {path: '/routes', component: RouteMap},
    {path: '/roadmap', component: Roadmap}
];
