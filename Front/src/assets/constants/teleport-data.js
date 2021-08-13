import L from 'leaflet';

export const teleportIcons = {
    waypoint: L.icon({
        iconUrl: 'https://genshin-application-ci.herokuapp.com/game/images/maps/icons/waypoint.png',
        iconSize: [27, 32],
        iconAnchor: [11, 32]
    }),
    domain: L.icon({
        iconUrl: 'https://genshin-application-ci.herokuapp.com/game/images/maps/icons/domain.png',
        iconSize: [27, 27],
        iconAnchor: [16, 16]
    }),
    trial: L.icon({
        iconUrl: 'https://genshin-application-ci.herokuapp.com/game/images/maps/icons/trial.png',
        iconSize: [32, 32],
        iconAnchor: [11, 11]
    }),
    seven: L.icon({
        iconUrl: 'https://genshin-application-ci.herokuapp.com/game/images/maps/icons/seven.png',
        iconSize: [27, 32],
        iconAnchor: [11, 32]
    })
};

export const teleports = {
    mondstadt: [{name: "Brightcrown Mountains, Mondstadt, 1", lng: 394, lat: -135, type: 'waypoint'},
        {name: "Brightcrown Mountains, Mondstadt, 2 ", lng: 465.6, lat: -162, type: 'waypoint'},
        {name: "Brightcrown Mountains, Mondstadt, 3", lng: 380.3, lat: -203, type: 'waypoint'},
        {name: "Brightcrown Mountains, Mondstadt, Statue", lng: 413.6, lat: -191.4, type: 'seven'},
        {name: "Confront Stormterror", lng: 422.3, lat: -186, type: 'domain'},
        {name: "Brightcrown Mountains, Mondstadt, 5", lng: 424.2, lat: -189.1, type: 'waypoint'},
        {name: "Brightcrown Mountains, Mondstadt, 6", lng: 440.6, lat: -243.6, type: 'waypoint'},
        {name: "Cecilia Garden", lng: 496, lat: -264.6, type: 'trial'},
        {name: "Windwail Highland, Mondstadt, 1", lng: 525.1, lat: -258.8, type: 'waypoint'},
        {name: "Brightcrown Mountains, Mondstadt, 7", lng: 535, lat: -200.8, type: 'waypoint'},
        {name: "Windwail Highland, Mondstadt, 2", lng: 552.8, lat: -282.3, type: 'waypoint'},
        {name: "Windwail Highland, Mondstadt, 3", lng: 490.6, lat: -344.8, type: 'waypoint'},
        {name: "Windwail Highland, Mondstadt, Statue", lng: 563.5, lat: -347, type: 'seven'},
        {name: "Windwail Highland, Mondstadt, 4", lng: 622.6, lat: -318.3, type: 'waypoint'},
        {name: "Windwail Highland, Mondstadt, 5", lng: 630.8, lat: -358.6, type: 'waypoint'},
        {name: "Valley of Remembrance", lng: 579.3, lat: -377.1, type: 'trial'},
        {name: "Forsaken Rift", lng: 626.4, lat: -381.6, type: 'trial'},
        {name: "Windwail Highland, Mondstadt, 6", lng: 674.6, lat: -398.3, type: 'waypoint'},
        {name: "Galesong Hill, Mondstadt, 1", lng: 735, lat: -427.3, type: 'waypoint'},
        {name: "Temple of the Lion", lng: 736.3, lat: -385, type: 'domain'},
        {name: "Eagles's Gate", lng: 823, lat: -452.6, type: 'domain'},
        {name: "Galesong Hill, Mondstadt, 2", lng: 849, lat: -431.6, type: 'waypoint'},
        {name: "Galesong Hill, Mondstadt, Statue", lng: 700.8, lat: -334.2, type: 'seven'},
        {name: "Starfell Valley, Mondstadt, 1", lng: 752.5, lat: -324.9, type: 'waypoint'},
        {name: "Temple of the Falcon", lng: 684, lat: -288.2, type: 'domain'},
        {name: "Starfell Valley, Mondstadt, 2", lng: 672.3, lat: -278.4, type: 'waypoint'},
        {name: "Starfell Valley, Mondstadt, 3", lng: 749.4, lat: -258.4, type: 'waypoint'},
        {name: "Temple of the Wolf", lng: 776.3, lat: -283.1, type: 'domain'},
        {name: "Midsummer Courtyard", lng: 760, lat: -219.4, type: 'trial'},
        {name: "Starfell Valley, Mondstadt, Statue", lng: 713.8, lat: -204.7, type: 'seven'},
        {name: "Starfell Valley, Mondstadt, 4", lng: 774.5, lat: -182.9, type: 'waypoint'},
        {name: "Starfell Valley, Mondstadt, 5", lng: 703, lat: -175.2, type: 'waypoint'},
        {name: "Starfell Valley, Mondstadt, 6", lng: 773.3, lat: -152.9, type: 'waypoint'},
        {name: "Starfell Valley, Mondstadt, 7", lng: 598, lat: -267.1, type: 'waypoint'},
        {name: "Starfell Valley, Mondstadt, 8", lng: 623, lat: -262.41, type: 'waypoint'},
        {name: "Dragonspine, Mondstadt, 1", lng: 563, lat: -427.6, type: 'waypoint'},
        {name: "Dragonspine, Mondstadt, 2", lng: 650.1, lat: -452.2, type: 'waypoint'},
        {name: "Dragonspine, Mondstadt, 3", lng: 616.7, lat: -464.7, type: 'waypoint'},
        {name: "Dragonspine, Mondstadt, 4", lng: 559.5, lat: -471.4, type: 'waypoint'},
        {name: "Dragonspine, Mondstadt, Statue", lng: 653, lat: -483.1, type: 'seven'},
        {name: "Dragonspine, Mondstadt, 5", lng: 606.5, lat: -510.4, type: 'waypoint'},
        {name: "Peak of Vindagnyr", lng: 613.5, lat: -508.4, type: 'trial'},
        {name: "Dragonspine, Mondstadt, 6", lng: 651.4, lat: -514.4, type: 'waypoint'},
        {name: "Dragonspine, Mondstadt, 7", lng: 589, lat: -533.7, type: 'waypoint'},
        {name: "Dragonspine, Mondstadt, 8", lng: 546.5, lat: -547.4, type: 'waypoint'},
        {name: "Dragonspine, Mondstadt, 9", lng: 650.3, lat: -547.6, type: 'waypoint'},
        {name: "Dragonspine, Mondstadt, 10", lng: 714.8, lat: -550.7, type: 'waypoint'},
        {name: "Ridge Watch", lng: 512.5, lat: -423.7, type: 'trial'}],
    liyue: [{name: "Bishui Plain, Liyue, 1", lng: 289, lat: -361.9, type: 'waypoint'},
        {name: "Hidden Palace of Zhou Formula", lng: 368, lat: -378.8, type: 'trial'},
        {name: "Bishui Plain, Liyue, 2", lng: 388.8, lat: -385, type: 'waypoint'},
        {name: "Bishui Plain, Liyue, 3", lng: 281, lat: -411.8, type: 'waypoint'},
        {name: "Bishui Plain, Liyue, 4", lng: 351.8, lat: -429.8, type: 'waypoint'},
        {name: "Bishui Plain, Liyue, 5", lng: 407.6, lat: -404.6, type: 'waypoint'},
        {name: "Bishui Plain, Liyue, Statue", lng: 397.6, lat: -463.3, type: 'seven'},
        {name: "Bishui Plain, Liyue, 6", lng: 480.3, lat: -482.8, type: 'waypoint'},
        {name: "Bishui Plain, Liyue, 7", lng: 383, lat: -542.6, type: 'waypoint'},
        {name: "Qiongji Estuary, Liyue, 1", lng: 485.6, lat: -525.3, type: 'waypoint'},
        {name: "Qiongji Estuary, Liyue, 2", lng: 459.5, lat: -587.8, type: 'waypoint'},
        {name: "Hidden Palace of Lianshan Formula", lng: 531, lat: -570.3, type: 'trial'},
        {name: "Qiongji Estuary, Liyue, Statue", lng: 499.8, lat: -593, type: 'seven'},
        {name: "Qiongji Estuary, Liyue, 3", lng: 543.3, lat: -630, type: 'waypoint'},
        {name: "Sea of Clouds, Liyue, 1", lng: 580.3, lat: -738.3, type: 'waypoint'},
        {name: "Domain of Guyun", lng: 642, lat: -776.1, type: 'trial'},
        {name: "Bishui Plain, Liyue, 8", lng: 193.5, lat: -405.6, type: 'waypoint'},
        {name: "Clear Pool and Mountain Cavern", lng: 163, lat: -460.3, type: 'trial'},
        {name: "Minlin, Liyue, 1", lng: 225.3, lat: -481.3, type: 'waypoint'},
        {name: "Minlin, Liyue, 2", lng: 303, lat: -505.8, type: 'waypoint'},
        {name: "Minlin, Liyue, 3", lng: 239, lat: -528.1, type: 'waypoint'},
        {name: "Minlin, Liyue, 4", lng: 127.5, lat: -510, type: 'waypoint'},
        {name: "Minlin, Liyue, 5", lng: 160.3, lat: -515.4, type: 'waypoint'},
        {name: "Minlin, Liyue, 6", lng: 161.3, lat: -552.1, type: 'waypoint'},
        {name: "Minlin, Liyue, Statue", lng: 154.8, lat: -565.3, type: 'seven'},
        {name: "Minlin, Liyue, 7", lng: 89.3, lat: -575.6, type: 'waypoint'},
        {name: "Beneath the Dragon-Queller", lng: 98.3, lat: -596.4, type: 'domain'},
        {name: "Taishan Mansion", lng: 213.5, lat: -586, type: 'trial'},
        {name: "Minlin, Liyue, 8", lng: 212.3, lat: -595, type: 'waypoint'},
        {name: "Minlin, Liyue, 9", lng: 269.3, lat: -601.8, type: 'waypoint'},
        {name: "Minlin, Liyue, 10", lng: 170, lat: -614.6, type: 'waypoint'},
        {name: "Minlin, Liyue, 11", lng: 116.3, lat: -641.3, type: 'waypoint'},
        {name: "Minlin, Liyue, 12", lng: 218, lat: -691.6, type: 'waypoint'},
        {name: "Minlin, Liyue, 13", lng: 196, lat: -731.8, type: 'waypoint'},
        {name: "Qiongji Estuary, Liyue, 4", lng: 281, lat: -671.3, type: 'waypoint'},
        {name: "Hidden Palace of Guizang Formula", lng: 342.8, lat: -696.3, type: 'domain'},
        {name: "Qiongji Estuary, Liyue, 5", lng: 380.3, lat: -609.6, type: 'waypoint'},
        {name: "Domain of Forsaken Ruins", lng: 412, lat: -641.6, type: 'domain'},
        {name: "Qiongji Estuary, Liyue, 6", lng: 351, lat: -674.1, type: 'waypoint'},
        {name: "Sea of Clouds, Liyue, 2", lng: 437.3, lat: -692, type: 'waypoint'},
        {name: "Sea of Clouds, Liyue, 3", lng: 443.3, lat: -741.8, type: 'waypoint'},
        {name: "Sea of Clouds, Liyue, Statue", lng: 396.8, lat: -722, type: 'seven'},
        {name: "Sea of Clouds, Liyue, 4", lng: 389.5, lat: -767.1, type: 'waypoint'},
        {name: "Sea of Clouds, Liyue, 5", lng: 327.3, lat: -774, type: 'waypoint'},
        {name: "Lisha, Liyue, Statue", lng: 251, lat: -788.4, type: 'seven'},
        {name: "Sea of Clouds, Liyue, 6", lng: 373.8, lat: -820, type: 'waypoint'},
        {name: "Sea of Clouds, Liyue, 7", lng: 394.8, lat: -851.6, type: 'waypoint'},
        {name: "Sea of Clouds, Liyue, 8", lng: 342.5, lat: -842.6, type: 'waypoint'},
        {name: "Enter the Golden House", lng: 396.8, lat: -897.3, type: 'domain'},
        {name: "Lisha, Liyue, 1", lng: 281.7, lat: -835, type: 'waypoint'},
        {name: "Domain of the Wayward Path", lng: 270.6, lat: -832, type: 'domain'},
        {name: "Lisha, Liyue, 2", lng: 239.3, lat: -833.4, type: 'waypoint'},
        {name: "Lisha, Liyue, 3", lng: 306, lat: -872, type: 'waypoint'},
        {name: "Lisha, Liyue, 4", lng: 223.3, lat: -915.8, type: 'waypoint'}],
    inazuma: []
};


