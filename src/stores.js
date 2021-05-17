import { writable } from "svelte/store";

export const welcomeBar = [
    {
        title: "Join Us",
        icon: "fas fa-user-cog fa-3x",
        colour: "color:rgb(70,130,180)",
        link: "/#/signup",
    },
    {
        title: "Login",
        icon: "fas fa-user-edit fa-3x",
        colour: "color:rgb(0,191,255)",
        link: "/#/login",
    },
];

export const mainBar = [{
    title: "Report",
    icon: "fas fa-umbrella-beach fa-3x",
    colour: "color:rgb(63, 122, 139)",
    link: "/#/categories",
}, {
    title: "Add POI",
    icon: "fas fa-plus-square fa-3x",
    colour: "color:rgb(153, 196, 74)",
    link: "/#/pois",
}, {
    title: "Settings",
    icon: "fas fa-user-edit fa-3x",
    colour: "color:rgb(14, 168, 160)",
    link: "/#/categories",
}, {
    title: "Logout",
    icon: "fas fa-sign-out-alt fa-3x",
    colour: "color:rgb(156, 70, 128)",
    link: "/#/logout",
}];

export const navBar = writable({
    bar: [],
});
export const title = writable("");
export const subTitle = writable("");