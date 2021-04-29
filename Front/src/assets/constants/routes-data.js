import L from "leaflet";

export const pointIcons = {
    abbysMage: L.icon({
        iconUrl: 'https://genshin-application-ci.herokuapp.com/game/images/AbyssMage.jpg',
        iconSize: [26, 26],
        iconAnchor: [13, 13],
        className: 'point-icon'
    }),
    hilichurl: L.icon({
        iconUrl: 'https://genshin-application-ci.herokuapp.com/game/images/Hilichurl.jpg',
        iconSize: [26, 26],
        iconAnchor: [13, 13],
        className: 'point-icon'
    }),
};

export const routes = [
    {
        name: 'Stormterror Route',
        drop: {
            mora: 20000,
            exp: 500
        },
        points: [{name: "1a", lng: 72, lat: 749.9, type: 'abbysMage'},
            {name: "2a", lng: 59.2, lat: 743.4, type: 'hilichurl'}],
        line: {
            latlngs: [[727.8, 125.7], [749.9, 72], [743.4, 59.2]],
            color: 'white',
            weight: 2
        },
        show: false
    }
];
