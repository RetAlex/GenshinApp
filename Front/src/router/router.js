import Changelog from "@/views/Changelog";
import ContactUs from "@/views/ContactUs";
import Home from "@/views/Home";

export const routes = [
    {path: '/', component: Home},
    {path: '/changelog', component: Changelog},
    {path: '/contact-us', component: ContactUs}
];
