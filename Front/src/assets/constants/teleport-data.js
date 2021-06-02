import L from 'leaflet';

export const teleportIcons = {
    waypoint: L.icon({
        iconUrl: 'http://genshin-application-ci.herokuapp.com/game/images/maps/icons/waypoint.png',
        iconSize: [32, 37],
        iconAnchor: [16, 37]
    }),
    domain: L.icon({
        iconUrl: 'http://genshin-application-ci.herokuapp.com/game/images/maps/icons/domain.png',
        iconSize: [32, 32],
        iconAnchor: [16, 16]
    }),
    trial: L.icon({
        iconUrl: 'http://genshin-application-ci.herokuapp.com/game/images/maps/icons/trial.png',
        iconSize: [32, 32],
        iconAnchor: [16, 16]
    }),
    seven: L.icon({
        iconUrl: 'http://genshin-application-ci.herokuapp.com/game/images/maps/icons/seven.png',
        iconSize: [32, 37],
        iconAnchor: [16, 37]
    })
};

export const teleports = [
    { name: "1", lng: 85.6, lat: 802, type: 'waypoint' },
    { name: "2", lng: 112, lat: 716.4, type: 'seven' },
    { name: "3", lng: 190.5, lat: 763, type: 'waypoint' },
    { name: "4", lng: 125.5, lat: 727.8, type: 'domain' },
    { name: "5", lng: 125.5, lat: 722, type: 'waypoint' },
    { name: "6", lng: 63.3, lat: 698.5, type: 'waypoint' },
    { name: "7", lng: 153.9, lat: 638.1, type: 'waypoint' },
    { name: "8", lng: 291.8, lat: 702.1, type: 'waypoint' },
    { name: "9", lng: 277, lat: 612.6, type: 'waypoint' },
    { name: "10", lng: 236, lat: 611.3, type: 'trial' },
    { name: "11", lng: 322, lat: 579.7, type: 'waypoint' },
    { name: "12", lng: 227.5, lat: 489, type: 'waypoint' },
    { name: "13", lng: 334.4, lat: 487, type: 'seven' },
    { name: "14", lng: 365.3, lat: 448.5, type: 'trial' },
    { name: "15", lng: 426.8, lat: 436.8, type: 'trial' },
    { name: "16", lng: 435.2, lat: 474.9, type: 'waypoint' },
    { name: "17", lng: 421.7, lat: 527.7, type: 'waypoint' },
    { name: "18", lng: 386.6, lat: 608.2, type: 'waypoint' },
    { name: "19", lng: 423, lat: 617, type: 'waypoint' },
    { name: "20", lng: 558.4, lat: 700, type: 'seven' },
    { name: "21", lng: 539.3, lat: 739.6, type: 'waypoint' },
    { name: "22", lng: 647.2, lat: 772, type: 'waypoint' },
    { name: "23", lng: 649.3, lat: 733.7, type: 'waypoint' },
    { name: "24", lng: 631, lat: 684, type: 'trial' },
    { name: "25", lng: 609.6, lat: 614.5, type: 'waypoint' },
    { name: "26", lng: 646.7, lat: 584, type: 'domain' },
    { name: "27", lng: 497.2, lat: 582.7, type: 'waypoint' },
    { name: "28", lng: 512, lat: 577, type: 'domain' },
    { name: "29", lng: 615.7, lat: 519.6, type: 'waypoint' },
    { name: "30", lng: 538.1, lat: 504.5, type: 'seven' },
    { name: "31", lng: 499.2, lat: 413, type: 'waypoint' },
    { name: "32", lng: 592, lat: 439.5, type: 'domain' },
    { name: "33", lng: 589.6, lat: 374, type: 'waypoint' },
    { name: "34", lng: 723.7, lat: 339.3, type: 'domain' },
    { name: "35", lng: 756.2, lat: 365.6, type: 'waypoint' }
];
