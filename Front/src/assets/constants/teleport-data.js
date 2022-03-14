import L from 'leaflet';

export const teleportIcons = {
    waypoint: L.icon({
        iconUrl: process.env.VUE_APP_API + '/game/images/maps/icons/waypoint.png',
        iconSize: [27, 32],
        iconAnchor: [11, 32]
    }),
    domain: L.icon({
        iconUrl: process.env.VUE_APP_API + '/game/images/maps/icons/domain.png',
        iconSize: [27, 27],
        iconAnchor: [16, 16]
    }),
    trial: L.icon({
        iconUrl: process.env.VUE_APP_API + '/game/images/maps/icons/trial.png',
        iconSize: [32, 32],
        iconAnchor: [11, 11]
    }),
    seven: L.icon({
        iconUrl: process.env.VUE_APP_API + '/game/images/maps/icons/seven.png',
        iconSize: [27, 32],
        iconAnchor: [11, 32]
    }),
    marker: L.icon({
        iconUrl: process.env.VUE_APP_API + '/game/images/maps/icons/marker.png',
        iconSize: [15, 20],
        iconAnchor: [8, 12]
    })
};

export const teleports = {
    mondstadt: [{name: "Brightcrown Mountains, Mondstadt, 1", lat: -277, lng: 167.22445000548657, type: 'waypoint'},
        {name: "Brightcrown Mountains, Mondstadt, 2 ", lat: -201.875, lng: 124.24544152080267, type: 'waypoint'},
        {name: "Brightcrown Mountains, Mondstadt, 3", lat: -240.75, lng: 226.44777446055403, type: 'waypoint'},
        {name: "Brightcrown Mountains, Mondstadt, Statue", lat: -283.5, lng: 150.60395220716293, type: 'seven'},
        {name: "Confront Stormterror", lat: -275.5, lng: 163.23356696388123, type: 'domain'},
        {name: "Brightcrown Mountains, Mondstadt, 5", lat: -301.75, lng: 103.49977488991618, type: 'waypoint'},
        {name: "Brightcrown Mountains, Mondstadt, 6", lat: -360.75, lng: 192.74189603698252, type: 'waypoint'},
        {name: "Cecilia Garden", lat: -394, lng: 271.9589174097031, type: 'trial'},
        {name: "Windwail Highland, Mondstadt, 1", lat: -384.75, lng: 313.7110559554993, type: 'waypoint'},
        {name: "Brightcrown Mountains, Mondstadt, 7", lat: -297.75, lng: 325.7030645475238, type: 'waypoint'},
        {name: "Windwail Highland, Mondstadt, 2", lat: -420.25, lng: 353.7082420794516, type: 'waypoint'},
        {name: "Windwail Highland, Mondstadt, 3", lat: -512.5, lng: 262.9854803995937, type: 'waypoint'},
        {name: "Windwail Highland, Mondstadt, Statue", lat: -516.25, lng: 366.2237746752351, type: 'seven'},
        {name: "Windwail Highland, Mondstadt, 4", lat: -472.5, lng: 452.6849431857763, type: 'waypoint'},
        {name: "Windwail Highland, Mondstadt, 5", lat: -533.25, lng: 465.95497798323623, type: 'waypoint'},
        {name: "Valley of Remembrance", lat: -557.75, lng: 393.4504757815599, type: 'trial'},
        {name: "Forsaken Rift", lat: -562.75, lng: 457.9518264420628, type: 'trial'},
        {name: "Windwail Highland, Mondstadt, 6", lat: -592.5, lng: 528.9359561811535, type: 'waypoint'},
        {name: "Galesong Hill, Mondstadt, 1", lat: -632.25, lng: 616.660631296724, type: 'waypoint'},
        {name: "Temple of the Lion", lat: -571, lng: 617.4357310710698, type: 'domain'},
        {name: "Eagles's Gate", lat: -671, lng: 742.8979125769881, type: 'domain'},
        {name: "Galesong Hill, Mondstadt, 2", lat: -639.625, lng: 779.8286836002543, type: 'waypoint'},
        {name: "Galesong Hill, Mondstadt, Statue", lat: -496.75, lng: 566.7234370101094, type: 'seven'},
        {name: "Starfell Valley, Mondstadt, 1", lat: -481, lng: 641.4504757815598, type: 'waypoint'},
        {name: "Temple of the Falcon", lat: -427, lng: 542.0970300720855, type: 'domain'},
        {name: "Starfell Valley, Mondstadt, 2", lat: -412.5, lng: 525.6947354744225, type: 'waypoint'},
        {name: "Starfell Valley, Mondstadt, 3", lat: -383.5, lng: 635.9198608101606, type: 'waypoint'},
        {name: "Temple of the Wolf", lat: -420.75, lng: 676.4231249063758, type: 'domain'},
        {name: "Midsummer Courtyard", lat: -323.5, lng: 652.1660339387356, type: 'trial'},
        {name: "Starfell Valley, Mondstadt, Statue", lat: -304.25, lng: 587.1942852542549, type: 'seven'},
        {name: "Starfell Valley, Mondstadt, 4", lat: -270.75, lng: 673.9244755668788, type: 'waypoint'},
        {name: "Starfell Valley, Mondstadt, 5", lat: -225.75, lng: 670.9137828378973, type: 'waypoint'},
        {name: "Starfell Valley, Mondstadt, 6", lat: -259.25, lng: 569.2309781979174, type: 'waypoint'},
        {name: "Starfell Valley, Mondstadt, 7", lat: -396.25, lng: 418.3572163033783, type: 'waypoint'},
        {name: "Starfell Valley, Mondstadt, 8", lat: -387.875, lng: 453.85941112669553, type: 'waypoint'},
        {name: "Dragonspine, Mondstadt, 1", lat: -668.5, lng: 493.7142074966728, type: 'waypoint'},
        {name: "Dragonspine, Mondstadt, 2", lat: -689.125, lng: 444.84348458826537, type: 'waypoint'},
        {name: "Dragonspine, Mondstadt, 3", lat: -632.625, lng: 368.74442852542546, type: 'waypoint'},
        {name: "Dragonspine, Mondstadt, 4", lat: -698.75, lng: 363.8537833746001, type: 'waypoint'},
        {name: "Dragonspine, Mondstadt, Statue", lat: -714, lng: 497.72670110632475, type: 'seven'},
        {name: "Dragonspine, Mondstadt, 5", lat: -721.5, lng: 319.49622940609606, type: 'waypoint'},
        {name: "Peak of Vindagnyr", lat: -753.125, lng: 439.7196664162054, type: 'trial'},
        {name: "Dragonspine, Mondstadt, 6", lat: -756.25, lng: 433.4771513264924, type: 'waypoint'},
        {name: "Dragonspine, Mondstadt, 7", lat: -761.625, lng: 495.46606465486434, type: 'waypoint'},
        {name: "Dragonspine, Mondstadt, 8", lat: -809.25, lng: 343.1154328214377, type: 'waypoint'},
        {name: "Dragonspine, Mondstadt, 9", lat: -790.5, lng: 405.2249565031752, type: 'waypoint'},
        {name: "Dragonspine, Mondstadt, 10", lat: -811.125, lng: 492.4653330470919, type: 'waypoint'},
        {name: "Dragonspine, Mondstadt, 11", lat: -816.25, lng: 587.4400081626623, type: 'waypoint'},
        {name: "Ridge Watch", lat: -628.375, lng: 295.23998260127007, type: 'trial'}],
    liyue: [{name: "Bishui Plain, Liyue, 1", lat: -129.75, lng: 458.3516448288038, type: 'waypoint'},
        {name: "Hidden Palace of Zhou Formula", lat: -150.5, lng: 501.3237874559312, type: 'trial'},
        {name: "Bishui Plain, Liyue, 2", lat: -122.25, lng: 378.7321037483364, type: 'waypoint'},
        {name: "Bishui Plain, Liyue, 3", lat: -157.75, lng: 532.9375319517403, type: 'waypoint'},
        {name: "Bishui Plain, Liyue, 4", lat: -199.375, lng: 367.9893072710186, type: 'waypoint'},
        {name: "Bishui Plain, Liyue, 5", lat: -226.625, lng: 477.71229406096035, type: 'waypoint'},
        {name: "Bishui Plain, Liyue, Statue", lat: -275.5, lng: 546.1814539794772, type: 'seven'},
        {name: "Bishui Plain, Liyue, 6", lat: -187.25, lng: 561.3392074966728, type: 'waypoint'},
        {name: "Bishui Plain, Liyue, 7", lat: -397, lng: 522.7198915262892, type: 'waypoint'},
        {name: "Qiongji Estuary, Liyue, 1", lat: -370.375, lng: 679.9604931802899, type: 'waypoint'},
        {name: "Qiongji Estuary, Liyue, 2", lat: -465, lng: 639.4224495761243, type: 'waypoint'},
        {name: "Hidden Palace of Lianshan Formula", lat: -439, lng: 748.665471163526, type: 'trial'},
        {name: "Qiongji Estuary, Liyue, Statue", lat: -473.25, lng: 701.9248132320045, type: 'seven'},
        {name: "Qiongji Estuary, Liyue, 3", lat: -529.75, lng: 767.4316790895609, type: 'waypoint'},
        {name: "Sea of Clouds, Liyue, 1", lat: -692.75, lng: 825.1742504567949, type: 'waypoint'},
        {name: "Domain of Guyun", lat: -752.5, lng: 918.4303284290581, type: 'trial'},
        {name: "Bishui Plain, Liyue, 8", lat: -307, lng: 670.1810037593095, type: 'waypoint'},
        {name: "Bishui Plain, Liyue, 9", lat: -190, lng: 234.46837203322346, type: 'waypoint'},
        {name: "Clear Pool and Mountain Cavern", lat: -273, lng: 188.50292643108963, type: 'trial'},
        {name: "Minlin, Liyue, 1", lat: -304.75, lng: 284.682917195022, type: 'waypoint'},
        {name: "Minlin, Liyue, 2", lat: -348, lng: 135.50529008696975, type: 'waypoint'},
        {name: "Minlin, Liyue, 3", lat: -357.25, lng: 187.23086564287541, type: 'waypoint'},
        {name: "Minlin, Liyue, 4", lat: -343, lng: 400.65567887487987, type: 'waypoint'},
        {name: "Minlin, Liyue, 5", lat: -377.25, lng: 305.7258006659895, type: 'waypoint'},
        {name: "Minlin, Liyue, 6", lat: -409.25, lng: 188.27780109535166, type: 'waypoint'},
        {name: "Minlin, Liyue, Statue", lat: -431.75, lng: 175.49257136723398, type: 'seven'},
        {name: "Minlin, Liyue, 7", lat: -449, lng: 75.49752378907799, type: 'waypoint'},
        {name: "Beneath the Dragon-Queller", lat: -478.75, lng: 89.98412973909078, type: 'domain'},
        {name: "Taishan Mansion", lat: -463.25, lng: 267.21364472146325, type: 'trial'},
        {name: "Minlin, Liyue, 8", lat: -478, lng: 263.73728128026426, type: 'waypoint'},
        {name: "Minlin, Liyue, 9", lat: -487.25, lng: 350.7092550748288, type: 'waypoint'},
        {name: "Minlin, Liyue, 10", lat: -506.5, lng: 200.46229406096035, type: 'waypoint'},
        {name: "Minlin, Liyue, 11", lat: -550.5, lng: 116.00704096028502, type: 'waypoint'},
        {name: "Minlin, Liyue, 12", lat: -628, lng: 273.70385243281714, type: 'waypoint'},
        {name: "Minlin, Liyue, 13", lat: -687.5, lng: 238.46612093238525, type: 'waypoint'},
        {name: "Qiongji Estuary, Liyue, 4", lat: -593.5, lng: 369.69484802946437, type: 'waypoint'},
        {name: "Hidden Palace of Guizang Formula", lat: -630.75, lng: 462.93944538745274, type: 'domain'},
        {name: "Qiongji Estuary, Liyue, 5", lat: -501.25, lng: 520.9483372357636, type: 'waypoint'},
        {name: "Domain of Forsaken Ruins", lat: -548.5, lng: 570.9357310710698, type: 'domain'},
        {name: "Qiongji Estuary, Liyue, 6", lat: -597, lng: 474.2390821609348, type: 'waypoint'},
        {name: "Sea of Clouds, Liyue, 2", lat: -622.75, lng: 606.9316790895609, type: 'waypoint'},
        {name: "Sea of Clouds, Liyue, 3", lat: -700, lng: 614.4311163143515, type: 'waypoint'},
        {name: "Sea of Clouds, Liyue, Statue", lat: -669.875, lng: 547.843934808433, type: 'seven'},
        {name: "Sea of Clouds, Liyue, 4", lat: -739.5, lng: 533.972592847295, type: 'waypoint'},
        {name: "Sea of Clouds, Liyue, 5", lat: -749.25, lng: 436.70058833660175, type: 'waypoint'},
        {name: "Lisha, Liyue, Statue", lat: -768, lng: 323.7113936206251, type: 'seven'},
        {name: "Sea of Clouds, Liyue, 6", lat: -819.5, lng: 509.175376007214, type: 'waypoint'},
        {name: "Sea of Clouds, Liyue, 7", lat: -864.875, lng: 540.7194975836426, type: 'waypoint'},
        {name: "Sea of Clouds, Liyue, 8", lat: -853.75, lng: 462.9416964882909, type: 'waypoint'},
        {name: "Enter the Golden House", lat: -937.5, lng: 546.6886575021593, type: 'domain'},
        {name: "Lisha, Liyue, 1", lat: -898, lng: 405.22433745044464, type: 'waypoint'},
        {name: "Domain of the Wayward Path", lat: -838, lng: 353.4698352487683, type: 'domain'},
        {name: "Lisha, Liyue, 2", lat: -842.25, lng: 369.4568914189487, type: 'waypoint'},
        {name: "Lisha, Liyue, 3", lat: -835.75, lng: 307.95632864373914, type: 'waypoint'},
        {name: "Lisha, Liyue, 4", lat: -964.25, lng: 282.97287423489985, type: 'waypoint'}],
    inazuma: [
        {name: "Narukami Island 1, Inazuma", lat: -25.338794126131617, lng: 819.556682208251, type: 'waypoint'},
        {name: "Narukami Island 2, Inazuma", lat: -166.741279109425, lng: 727.5223489849675, type: 'waypoint'},
        {name: "Narukami Island, Inazuma, Statue", lat: -148.83522155464635, lng: 777.5501394619271, type: 'seven'},
        {name: "Narukami Island 3, Inazuma", lat: -171.59165218331984, lng: 760.9390670902402, type: 'waypoint'},
        {name: "Narukami Island 4, Inazuma", lat: -96.08545972607868, lng: 862.1731312922634, type: 'waypoint'},
        {
            name: "Empty Boat of a Thousand Gates, Inazuma",
            lat: -101.46436573756925,
            lng: 883.9341438355807,
            type: 'domain'
        },
        {name: "Narukami Island 5, Inazuma", lat: -142.0878890746887, lng: 837.6755929195931, type: 'waypoint'},
        {name: "Narukami Island 6, Inazuma", lat: -161.20269533738403, lng: 868.54819607193, type: 'waypoint'},
        {name: "Narukami Island 7, Inazuma", lat: -176.2090306974846, lng: 906.1004732628539, type: 'waypoint'},
        {name: "Narukami Island 8, Inazuma", lat: -219.09803517770683, lng: 877.5505281399265, type: 'waypoint'},
        {name: "Narukami Island 9, Inazuma", lat: -190.8406042290175, lng: 804.0155471199774, type: 'waypoint'},
        {name: "Narukami Island 10, Inazuma", lat: -209.71193638895926, lng: 819.8161400395705, type: 'waypoint'},
        {name: "Narukami Island 11, Inazuma", lat: -257.2210345376751, lng: 838.5507872585929, type: 'waypoint'},
        {name: "Narukami Island 12, Inazuma", lat: -266.7248929148792, lng: 871.8075891235829, type: 'waypoint'},
        {name: "Narukami Island 13, Inazuma", lat: -296.87023275520204, lng: 890.6958689552303, type: 'waypoint'},
        {name: "Violet Court, Inazuma", lat: -293.72775097206744, lng: 783.65939800295, type: 'trial'},
        {name: "Narukami Island: Tenshukaku, Inazuma", lat: -320.3335543546199, lng: 901.4375123782424, type: 'domain'},
        {name: "Court of Flowing Sand, Inazuma", lat: -142.59236669761688, lng: 872.1876419375756, type: 'trial'},
        {name: "Kannazuka 1, Inazuma", lat: -286.59031842329864, lng: 651.9036973922916, type: 'waypoint'},
        {name: "Kannazuka 2, Inazuma", lat: -314.7110789718028, lng: 690.3108281069116, type: 'waypoint'},
        {name: "Kannazuka 3, Inazuma", lat: -360.63328454969485, lng: 682.89106535731, type: 'waypoint'},
        {name: "Kannazuka 4, Inazuma", lat: -397.4573634974581, lng: 698.0332967486182, type: 'waypoint'},
        {name: "Kannazuka 5, Inazuma", lat: -372.728513120651, lng: 611.6537621719582, type: 'waypoint'},
        {name: "Kannazuka, Inazuma, Statue", lat: -356.58493574892753, lng: 653.3972194256344, type: 'seven'},
        {name: "Kannazuka 6, Inazuma", lat: -377.7258456006086, lng: 663.0600507509128, type: 'waypoint'},
        {name: "Kannazuka 7, Inazuma", lat: -421.8517506520515, lng: 637.5773469218875, type: 'waypoint'},
        {name: "Shakkel Pavilion, Inazuma", lat: -417.9878494407991, lng: 650.0447627496015, type: 'domain'},
        {name: "Yashiori Island 1, Inazuma", lat: -333.83726982896457, lng: 559.275004951297, type: 'waypoint'},
        {name: "Yashiori Island 2, Inazuma", lat: -358.08907993185045, lng: 519.4239086482622, type: 'waypoint'},
        {name: "Yashiori Island 3, Inazuma", lat: -347.34103293759574, lng: 456.7955401056005, type: 'waypoint'},
        {name: "Yashiori Island 4, Inazuma", lat: -363.08098210315046, lng: 413.4082967486182, type: 'waypoint'},
        {name: "Yashiori Island, Inazuma, Statue", lat: -388.85075033203566, lng: 461.3922313913083, type: 'seven'},
        {name: "Momiji-Dyed Court, Inazuma", lat: -400.3417474518928, lng: 489.2818068162871, type: 'trial'},
        {name: "Yashiori Island 5, Inazuma", lat: -429.71231746325105, lng: 495.68783627657535, type: 'waypoint'},
        {name: "Yashiori Island 6, Inazuma", lat: -468.48475321217853, lng: 494.92954447925405, type: 'waypoint'},
        {name: "Formation Estate, Inazuma", lat: -442.7266077491921, lng: 462.55046336026, type: 'domain'},
        {name: "Watatsumi Island 1, Inazuma", lat: -404.4753692577439, lng: 186.2818068162871, type: 'waypoint'},
        {name: "Watatsumi Island 2, Inazuma", lat: -362.58707929181867, lng: 186.66898539360272, type: 'waypoint'},
        {name: "Watatsumi Island 3, Inazuma", lat: -400.48537245790266, lng: 291.0551274962532, type: 'waypoint'},
        {name: "Watatsumi Island 4, Inazuma", lat: -435.1036560235103, lng: 241.4256576992597, type: 'waypoint'},
        {name: "Watatsumi Island, Inazuma, Statue", lat: -412.2263219434733, lng: 151.64585905263635, type: 'seven'},
        {name: "Palace in a Pool, Inazuma", lat: -369.5868887546728, lng: 255.81529790390508, type: 'domain'},
        {name: "Watatsumi Island 5, Inazuma", lat: -445.4729875434204, lng: 184.41419169827634, type: 'waypoint'},
        {name: "Seirai Island 1, Inazuma", lat: -497.3379843432616, lng: 736.0213125103023, type: 'waypoint'},
        {name: "Seirai Island 2, Inazuma", lat: -518.3523698977757, lng: 775.0553866149195, type: 'waypoint'},
        {name: "Seirai Island 3, Inazuma", lat: -491.09303357762747, lng: 832.5540262419215, type: 'waypoint'},
        {name: "Seirai Island 4, Inazuma", lat: -517.4578398403228, lng: 832.5574595642498, type: 'waypoint'},
        {name: "Seirai Island 5, Inazuma", lat: -498.5884606861263, lng: 880.4376419375756, type: 'waypoint'},
        {name: "Seirai Island 6, Inazuma", lat: -553.492803406592, lng: 886.1811639709183, type: 'waypoint'},
        {name: "Seirai Island 7, Inazuma", lat: -592.6113727779185, lng: 844.3300676678837, type: 'waypoint'},
        {name: "Seirai Island 8, Inazuma", lat: -551.348654423431, lng: 828.1912695989037, type: 'waypoint'},
        {name: "Seirai Island 9, Inazuma", lat: -573.2343245036003, lng: 739.2425503383441, type: 'waypoint'},
        {name: "Seirai Island, Inazuma, Statue", lat: -526.8393181032828, lng: 802.0454753259339, type: 'seven'},
        {name: "Moshiri Kara, Inazuma", lat: -624.8518935549109, lng: 522.553184106256, type: 'domain'},
        {name: "Tsurumi Island 1, Inazuma", lat: -820.7259408691815, lng: 523.6427496286409, type: 'waypoint'},
        {name: "Tsurumi Island 2, Inazuma", lat: -828.3606582636214, lng: 571.6704105462674, type: 'waypoint'},
        {name: "Tsurumi Island 3, Inazuma", lat: -860.4886115893827, lng: 534.9261759365922, type: 'waypoint'},
        {name: "Tsurumi Island 4, Inazuma", lat: -874.1158980351332, lng: 578.0491677669286, type: 'waypoint'},
        {name: "Tsurumi Island 5, Inazuma", lat: -871.3709472694991, lng: 628.1689853936027, type: 'waypoint'},
        {name: "Tsurumi Island 6, Inazuma", lat: -949.7243213034416, lng: 531.9236495295959, type: 'waypoint'},
        {name: "Tsurumi Island 7, Inazuma", lat: -913.619518240905, lng: 534.5472243769314, type: 'waypoint'},
        {name: "Tsurumi Island, Inazuma, Statue", lat: -845.7574271325384, lng: 658.8215815315626, type: 'seven'}
    ],
    enkanomiya: [
        {name: "The Serpent's Bowels 1, Enkanomiya", lat: -748.9569931030273, lng: 211.7303993666121, type: 'waypoint'},
        {name: "The Serpent's Bowels 2, Enkanomiya", lat: -633.2536315917969, lng: 154.16101089022328, type: 'waypoint'},
        {name: "The Serpent's Bowels 3, Enkanomiya", lat: -551.9449653625488, lng: 303.72825627813864, type: 'waypoint'},
        {name: "Enkanomiya 1, Enkanomiya", lat: -94.375, lng: 392.6652397121837, type: 'waypoint'},
        {name: "The Narrows 1, Enkanomiya", lat: -485.35630798339844, lng: 397.37745886263036, type: 'waypoint'},
        {name: "The Narrows 2, Enkanomiya", lat: -408.9059371948242, lng: 394.4613545977469, type: 'waypoint'},
        {name: "The Narrows 3, Enkanomiya", lat: -439.9179153442383, lng: 438.829091748714, type: 'waypoint'},
        {name: "The Narrows 4, Enkanomiya", lat: -388.625, lng: 469.6777548710486, type: 'waypoint'},
        {name: "Enkanomiya 2, Enkanomiya", lat: -240, lng: 909.551103565365, type: 'waypoint'},
        {name: "Dainichi Mikoshi 1, Enkanomiya", lat: -456.8521270751953, lng: 584.6843213399868, type: 'waypoint'},
        {name: "Dainichi Mikoshi 2, Enkanomiya", lat: -473.494384765625, lng: 553.3609962208634, type: 'waypoint'},
        {name: "Dainichi Mikoshi 3, Enkanomiya", lat: -505.375, lng: 582.0551883741612, type: 'waypoint'},
        {name: "Dainichi Mikoshi 4, Enkanomiya", lat: -511.875, lng: 646.6737569730778, type: 'waypoint'},
        {name: "Dainichi Mikoshi 5, Enkanomiya", lat: -562.125, lng: 555.6627192982456, type: 'waypoint'},
        {name: "Evernight Temple 1, Enkanomiya", lat: -405, lng: 815.4132407631984, type: 'waypoint'},
        {name: "Evernight Temple 2, Enkanomiya", lat: -441.375, lng: 725.9155873554855, type: 'waypoint'},
        {name: "Evernight Temple 3, Enkanomiya", lat: -455.25, lng: 782.5491915272052, type: 'waypoint'},
        {name: "Evernight Temple 4, Enkanomiya", lat: -519.5, lng: 803.4302752849867, type: 'waypoint'},
        {name: "The Serpent's Heart 1, Enkanomiya", lat: -633.5, lng: 670.6752344571105, type: 'waypoint'},
        {name: "The Serpent's Heart 2, Enkanomiya", lat: -659.7284240722656, lng: 615.1227710389254, type: 'waypoint'},
        {name: "The Serpent's Heart 3, Enkanomiya", lat: -638.625, lng: 528.9170648395182, type: 'waypoint'},
        {name: "The Serpent's Heart 4, Enkanomiya", lat: -710.7137832641602, lng: 550.6667171962164, type: 'waypoint'},
        {name: "The Serpent's Heart 5, Enkanomiya", lat: -777, lng: 520.8198763036623, type: 'waypoint'},
        {name: "Kunado's Locus 1, Enkanomiya", lat: -861.75, lng: 696.1688899668526, type: 'waypoint'}
    ]
};


