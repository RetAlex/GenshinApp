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
    liyue: [{name: "Bishui Plain, Liyue, 1", lat: -142, lng: 598.3014512086668, type: 'waypoint'},
        {name: "Hidden Palace of Zhou Formula", lat: -134.25, lng: 565.6098552833697, type: 'trial'},
        {name: "Bishui Plain, Liyue, 2", lat: -112.80398368835449, lng: 520.6579336840716, type: 'waypoint'},
        {name: "Bishui Plain, Liyue, 3", lat: -105.75, lng: 443.2957150941871, type: 'waypoint'},
        {name: "Bishui Plain, Liyue, 4", lat: -183.5, lng: 430.4067224512895, type: 'waypoint'},
        {name: "Bishui Plain, Liyue, 5", lat: -209.75, lng: 537.8562050287007, type: 'waypoint'},
        {name: "Bishui Plain, Liyue, Statue", lat: -260, lng: 611.8596814617188, type: 'seven'},
        {name: "Bishui Plain, Liyue, 6", lat: -173.5, lng: 626.8687201875657, type: 'waypoint'},
        {name: "Bishui Plain, Liyue, 7", lat: -290, lng: 737.463594470046, type: 'waypoint'},
        {name: "Qiongji Estuary, Liyue, 1", lat: -353.12896728515625, lng: 745.4884560822419, type: 'waypoint'},
        {name: "Qiongji Estuary, Liyue, 2", lat: -447.5, lng: 704.8492521626647, type: 'waypoint'},
        {name: "Hidden Palace of Lianshan Formula", lat: -424.25, lng: 814.8767159835072, type: 'trial'},
        {name: "Qiongji Estuary, Liyue, Statue", lat: -456.25, lng: 766.8595076400679, type: 'seven'},
        {name: "Qiongji Estuary, Liyue, 3", lat: -513.814453125, lng: 834.2343788844591, type: 'waypoint'},
        {name: "Sea of Clouds, Liyue, 1", lat: -674.9644927978516, lng: 890.6015226763986, type: 'waypoint'},
        {name: "Domain of Guyun", lat: -733.8744812011719, lng: 983.0297300079836, type: 'trial'},
        {name: "Bishui Plain, Liyue, 8", lat: -171.75, lng: 298.07874120785834, type: 'waypoint'},
        {name: "Bishui Plain, Liyue, 9", lat: -380.625, lng: 588.0662260489935, type: 'waypoint'},
        {name: "Clear Pool and Mountain Cavern", lat: -255.6121597290039, lng: 250.16498659072076, type: 'trial'},
        {name: "Minlin, Liyue, 1", lat: -288.75, lng: 347.8591599967661, type: 'waypoint'},
        {name: "Minlin, Liyue, 2", lat: -326.5, lng: 465.38749292586306, type: 'waypoint'},
        {name: "Minlin, Liyue, 3", lat: -360, lng: 368.3374322904034, type: 'waypoint'},
        {name: "Minlin, Liyue, 4", lat: -330.25, lng: 197.04971299215782, type: 'waypoint'},
        {name: "Minlin, Liyue, 5", lat: -342.625, lng: 251.52711617754062, type: 'waypoint'},
        {name: "Minlin, Liyue, 6", lat: -393.25, lng: 249.8337820357345, type: 'waypoint'},
        {name: "Minlin, Liyue, Statue", lat: -414.5, lng: 237.7978009539979, type: 'seven'},
        {name: "Minlin, Liyue, 7", lat: -430.75, lng: 138.0486700622524, type: 'waypoint'},
        {name: "Beneath the Dragon-Queller", lat: -462, lng: 152.78146171881315, type: 'domain'},
        {name: "Taishan Mansion", lat: -447.25, lng: 330.33864904195974, type: 'trial'},
        {name: "Minlin, Liyue, 8", lat: -460.5361099243164, lng: 326.63976604502693, type: 'waypoint'},
        {name: "Minlin, Liyue, 9", lat: -470.9717254638672, lng: 414.70461074245594, type: 'waypoint'},
        {name: "Minlin, Liyue, 10", lat: -490.125, lng: 263.05562292828847, type: 'waypoint'},
        {name: "Minlin, Liyue, 11", lat: -530, lng: 177.5366763683402, type: 'waypoint'},
        {name: "Minlin, Liyue, 12", lat: -605.8029403686523, lng: 336.6337208397127, type: 'waypoint'},
        {name: "Minlin, Liyue, 13", lat: -666.3087997436523, lng: 300.78941852804894, type: 'waypoint'},
        {name: "Qiongji Estuary, Liyue, 4", lat: -576.7015380859375, lng: 431.54639170064775, type: 'waypoint'},
        {name: "Hidden Palace of Guizang Formula", lat: -615.0993385314941, lng: 526.783606335016, type: 'domain'},
        {name: "Qiongji Estuary, Liyue, 5", lat: -581, lng: 539.3480354111084, type: 'waypoint'},
        {name: "Domain of Forsaken Ruins", lat: -529.8140640258789, lng: 632.4600966093409, type: 'domain'},
        {name: "Qiongji Estuary, Liyue, 6", lat: -484.75, lng: 583.6630669415474, type: 'waypoint'},
        {name: "Sea of Clouds, Liyue, 2", lat: -604.6796340942383, lng: 671.743006962972, type: 'waypoint'},
        {name: "Sea of Clouds, Liyue, 3", lat: -683.3793411254883, lng: 680.4200012221835, type: 'waypoint'},
        {name: "Sea of Clouds, Liyue, Statue", lat: -652.038818359375, lng: 609.578897186262, type: 'seven'},
        {name: "Sea of Clouds, Liyue, 4", lat: -722.5, lng: 598.1169819710567, type: 'waypoint'},
        {name: "Sea of Clouds, Liyue, 5", lat: -733.25, lng: 500.8456019079958, type: 'waypoint'},
        {name: "Lisha, Liyue, Statue", lat: -750.5, lng: 386.35411916888995, type: 'seven'},
        {name: "Sea of Clouds, Liyue, 6", lat: -836.5, lng: 528.3090993613065, type: 'waypoint'},
        {name: "Sea of Clouds, Liyue, 7", lat: -803.5440292358398, lng: 573.5418334773426, type: 'waypoint'},
        {name: "Sea of Clouds, Liyue, 8", lat: -851.75, lng: 605.7893706039292, type: 'waypoint'},
        {name: "Enter the Golden House", lat: -920.875, lng: 611.9166302853909, type: 'domain'},
        {name: "Lisha, Liyue, 1", lat: -881, lng: 469.56865955210606, type: 'waypoint'},
        {name: "Domain of the Wayward Path", lat: -820.2951812744141, lng: 416.9010435457343, type: 'domain'},
        {name: "Lisha, Liyue, 2", lat: -826, lng: 434.70962891098713, type: 'waypoint'},
        {name: "Lisha, Liyue, 3", lat: -817.6426391601562, lng: 370.70511184557915, type: 'waypoint'},
        {name: "Lisha, Liyue, 4", lat: -948.9208679199219, lng: 342.77109677387773, type: 'waypoint'},
        {name: "The Chasm, Liyue, 1", lat: -870.125, lng: 239.05762187727385, type: 'waypoint'},
        {name: "The Chasm, Liyue, 2", lat: -911.3088912963867, lng: 151.68860070728738, type: 'waypoint'},
        {name: "The Chasm, Liyue, 3", lat: -880.5, lng: 103.3217883418223, type: 'waypoint'},
        {name: "The Chasm, Liyue, 4", lat: -825.5, lng: 166.06796426550247, type: 'waypoint'},
        {name: "The Chasm, Liyue, Statue", lat: -856.9119415283203, lng: 74.55601091232998, type: 'seven'},
        {name: "The Lost Valley, Liyue", lat: -788.25, lng: 107.56692133559706, type: 'trial'}],
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
    ],
    chasm: [
        {name: "The Chasm, The Chasm 1", lat: -275.6390329487332, lng: 413.3115328644191, type: 'waypoint'},
        {name: "The Chasm, The Chasm 2", lat: -251.49999021927414, lng: 553.3587791934473, type: 'waypoint'},
        {name: "The Chasm, The Chasm 3", lat: -311.4265377577837, lng: 622.7736241672098, type: 'waypoint'},
        {name: "The Chasm, The Chasm 4", lat: -298.7698703461401, lng: 747.3492521626647, type: 'waypoint'},
        {name: "The Chasm, The Chasm 5", lat: -421.81337441083326, lng: 779.855602337497, type: 'waypoint'},
        {name: "The Chasm, The Chasm 6", lat: -416.93314981307435, lng: 419.27948111837054, type: 'waypoint'},
        {name: "The Chasm, The Chasm 7", lat: -460.80215942629656, lng: 554.1762620070842, type: 'waypoint'},
        {name: "The Chasm, The Chasm 8", lat: -562.2763155947517, lng: 635.4601782382493, type: 'waypoint'},
        {name: "The Chasm, The Chasm 9", lat: -578.7814184852002, lng: 764.0495225668126, type: 'waypoint'},
        {name: "The Chasm, The Chasm 10", lat: -638.2998198174233, lng: 709.2614556252652, type: 'waypoint'},
        {name: "The Chasm, The Chasm 11", lat: -765.2403671117631, lng: 734.1191547574833, type: 'waypoint'},
        {name: "The Chasm, The Chasm 12", lat: -749.857422072473, lng: 592.8600882719652, type: 'waypoint'},
        {name: "The Chasm, The Chasm 13", lat: -672.6205147472901, lng: 466.496197667177, type: 'waypoint'},
        {name: "The Chasm, The Chasm 14", lat: -572.7791789951825, lng: 230.4051837791303, type: 'waypoint'},
        {name: "The Chasm, The Chasm 15", lat: -695.5367253479244, lng: 163.34108254507234, type: 'waypoint'}
    ],
    sumeru: [
        {name: "Lokapala Jungle 1, Sumeru", lat: -132.7700994063656, lng: 830.2879682194398, type: 'waypoint'},
        {name: "Lokapala Jungle 2, Sumeru", lat: -197.104736328125, lng: 832.5345434528863, type: 'waypoint'},
        {name: "Lokapala Jungle 3, Sumeru", lat: -208.9982147216797, lng: 936.5736968113328, type: 'waypoint'},
        {name: "Lokapala Jungle 4, Sumeru", lat: -242.06552124023438, lng: 809.1694881419779, type: 'waypoint'},
        {name: "Lokapala Jungle 5, Sumeru", lat: -286.73704528808594, lng: 789.0622784910865, type: 'waypoint'},
        {name: "Lokapala Jungle 6, Sumeru", lat: -238.73704528808594, lng: 709.8391885080645, type: 'waypoint'},
        {name: "Lokapala Jungle, Sumeru, Statue", lat: -247.8249969482422, lng: 852.591236470713, type: 'seven'},
        {name: "Under the Umbrella's Shade, Sumeru", lat: -94.3807373046875, lng: 902.225212887309, type: 'domain'},
        {name: "Steeple of Ignorance, Sumeru", lat: -270.6768798828125, lng: 644.7352451188456, type: 'trial'},
        {name: "Vanarana 1, Sumeru", lat: -304.08843994140625, lng: 573.3711879244482, type: 'waypoint'},
        {name: "Vanarana, Sumeru, Statue", lat: -278.33843994140625, lng: 515.8907125424448, type: 'seven'},
        {name: "Vissudha Field 1, Sumeru", lat: -355.08843994140625, lng: 617.6061624575552, type: 'waypoint'},
        {name: "Vissudha Field 2, Sumeru", lat: -346.83843994140625, lng: 557.1267057512733, type: 'waypoint'},
        {name: "Vissudha Field 3, Sumeru", lat: -319.5449523925781, lng: 323.295806584253, type: 'waypoint'},
        {name: "Vissudha Field 4, Sumeru", lat: -294.5449523925781, lng: 359.28358247559424, type: 'waypoint'},
        {name: "Vissudha Field 5, Sumeru", lat: -402.7575225830078, lng: 429.85330074808996, type: 'waypoint'},
        {name: "Vissudha Field 6, Sumeru", lat: -433.9119873046875, lng: 499.36696333828525, type: 'waypoint'},
        {name: "Vissudha Field 7, Sumeru", lat: -468.875, lng: 626.931494057725, type: 'waypoint'},
        {name: "Vissudha Field, Sumeru, Statue", lat: -430.65924072265625, lng: 571.394175774618, type: 'seven'},
        {name: "Lost Nursery, Sumeru, Statue", lat: -473.4375, lng: 323.85182512733445, type: 'seven'},
        {name: "Lost Nursery 1, Sumeru", lat: -420.42613220214844, lng: 386.894818415747, type: 'waypoint'},
        {name: "Lost Nursery 2, Sumeru", lat: -474.34400939941406, lng: 398.6612080857385, type: 'waypoint'},
        {name: "Lost Nursery 3, Sumeru", lat: -437.6999206542969, lng: 440.17088152589133, type: 'waypoint'},
        {name: "Fragment of Childhood Dreams, Sumeru", lat: -496.1275939941406, lng: 538.2913996179966, type: 'domain'},
        {name: "Ashavan Realm 1, Sumeru", lat: -528.1568984985352, lng: 587.3183507533956, type: 'waypoint'},
        {name: "Ashavan Realm 2, Sumeru", lat: -489.875, lng: 467.68565365025466, type: 'waypoint'},
        {name: "Ashavan Realm 3, Sumeru", lat: -553.6858825683594, lng: 337.1279734587224, type: 'waypoint'},
        {name: "Ashavan Realm 4, Sumeru", lat: -690.5037384033203, lng: 446.99417444821734, type: 'waypoint'},
        {name: "Ashavan Realm 5, Sumeru", lat: -701.1600952148438, lng: 515.3720255464771, type: 'waypoint'},
        {name: "Ashavan Realm 6, Sumeru", lat: -735.5866394042969, lng: 501.72251764112906, type: 'waypoint'},
        {name: "Ashavan Realm 7, Sumeru", lat: -808.66796875, lng: 551.6989196466469, type: 'waypoint'},
        {name: "Ashavan Realm 8, Sumeru", lat: -870.2275390625, lng: 477.44749907151953, type: 'waypoint'},
        {name: "Ashavan Realm 9, Sumeru", lat: -785.5954895019531, lng: 607.6854566797539, type: 'waypoint'},
        {name: "Ashavan Realm, Sumeru, Statue", lat: -610.5036163330078, lng: 522.4404651687182, type: 'seven'},
        {name: "The Coordinate of Sun and Rain, Sumeru", lat: -817.5349731445312, lng: 576.9372008966468, type: 'domain'},
        {name: "The Dark Valley, Sumeru", lat: -696.8260498046875, lng: 659.1150480157046, type: 'domain'},
        {name: "Tower of Abject Pride, Sumeru", lat: -788.875, lng: 502.2095076400679, type: 'trial'},
        {name: "Ardravi Valley 1, Sumeru", lat: -839.8167724609375, lng: 778.4741086587436, type: 'waypoint'},
        {name: "Ardravi Valley 2, Sumeru", lat: -852.1067962646484, lng: 745.686486298281, type: 'waypoint'},
        {name: "Ardravi Valley 3, Sumeru", lat: -803.6883697509766, lng: 710.124408093697, type: 'waypoint'},
        {name: "Ardravi Valley 4, Sumeru", lat: -771.9824371337891, lng: 885.1012905878608, type: 'waypoint'},
        {name: "Ardravi Valley 5, Sumeru", lat: -743.9824371337891, lng: 871.3559595182512, type: 'waypoint'},
        {name: "Ardravi Valley 6, Sumeru", lat: -709.875, lng: 801.4659592529712, type: 'waypoint'},
        {name: "Ardravi Valley 7, Sumeru", lat: -624.1013641357422, lng: 873.4461799660442, type: 'waypoint'},
        {name: "Ardravi Valley 8, Sumeru", lat: -627.375, lng: 711.7249575551782, type: 'waypoint'},
        {name: "Ardravi Valley, Sumeru, Statue", lat: -688.9727325439453, lng: 782.3537285123091, type: 'seven'},
        {name: "Avidya Forest, Sumeru, Statue", lat: -508.9375, lng: 866.5981748726656, type: 'seven'},
        {name: "Spire of Solitary Enlightenment, Sumeru", lat: -419.6952819824219, lng: 893.2298440152802, type: 'trial'},
        {name: "Avidya Forest 1, Sumeru", lat: -562.375, lng: 764.6910016977929, type: 'waypoint'},
        {name: "Avidya Forest 2, Sumeru", lat: -483.5228271484375, lng: 741.3141613168506, type: 'waypoint'},
        {name: "Avidya Forest 3, Sumeru", lat: -439.3976593017578, lng: 817.8560931531197, type: 'waypoint'},
        {name: "Avidya Forest 4, Sumeru", lat: -417.4661407470703, lng: 758.6070534672114, type: 'waypoint'},
        {name: "Avidya Forest 5, Sumeru", lat: -394.7161407470703, lng: 714.3720789341044, type: 'waypoint'},
        {name: "Avidya Forest 6, Sumeru", lat: -373.9661407470703, lng: 743.8620619561757, type: 'waypoint'},
        {name: "Avidya Forest 7, Sumeru", lat: -360.2922058105469, lng: 686.5958616298811, type: 'waypoint'},
        {name: "Avidya Forest 8, Sumeru", lat: -332.5422058105469, lng: 687.0956918505942, type: 'waypoint'},
        {name: "Avidya Forest 9, Sumeru", lat: -380.1143341064453, lng: 891.6982259390917, type: 'waypoint'}
    ]
};


