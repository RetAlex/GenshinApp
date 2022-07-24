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

export const camps = {
    mondstadt: [
        {
            "id": 1,
            "name": "Camp",
            "mobs": [{id: 13, amount: 4}],
            "lat": -608.0658645629883,
            "lng": 800.80451175191,
            "mobIcon": 13
        },
        {
            "id": 2,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -626.2702255249023,
            "lng": 805.2098007202148,
            "mobIcon": 13
        },
        {
            "id": 3,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -620.9940338134766,
            "lng": 774.625,
            "mobIcon": 13
        },
        {
            "id": 4,
            "name": "Camp",
            "mobs": [{id: 13, amount: 4}],
            "lat": -628.1608963012695,
            "lng": 761.3078994750977,
            "mobIcon": 13
        },
        {
            "id": 5,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -617.7458801269531,
            "lng": 766.8313522338867,
            "mobIcon": 15
        },
        {
            "id": 6,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}, {id: 11, amount: 1}],
            "lat": -638.75, "lng": 769.75,
            "mobIcon": 11
        },
        {
            "id": 7,
            "name": "Camp",
            "mobs": [{id: 8, amount: 2}],
            "lat": -701.3722915649414, "lng": 725.2683181762695,
            "mobIcon": 8
        },
        {
            "id": 8,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -675.7542839050293, "lng": 705.9188537597656,
            "mobIcon": 15
        },
        {
            "id": 9,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}, {id: 10, amount: 1}],
            "lat": -690.6838684082031, "lng": 698.5889282226562,
            "mobIcon": 10
        },
        {
            "id": 10,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -701.9862060546875, "lng": 685.8141174316406,
            "mobIcon": 10
        },
        {
            "id": 11,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}, {id: 10, amount: 1}],
            "lat": -690.25, "lng": 678.5,
            "mobIcon": 10
        },
        {
            "id": 12,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -679.5, "lng": 681,
            "mobIcon": 10
        },
        {
            "id": 13,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -658.9897003173828, "lng": 686.2595367431641,
            "mobIcon": 10
        },
        {
            "id": 14,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -642.0891647338867, "lng": 704.25,
            "mobIcon": 9
        },
        {
            "id": 15,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -642.2826042175293, "lng": 725.6280059814453,
            "mobIcon": 13
        },
        {
            "id": 16,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -621.75, "lng": 706.75,
            "mobIcon": 13
        },
        {
            "id": 17,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -603.3210639953613, "lng": 692.1819152832031,
            "mobIcon": 13
        },
        {
            "id": 18,
            "name": "Camp",
            "mobs": [{id: 9, amount: 3}],
            "lat": -583.8215179443359, "lng": 673.4278793334961,
            "mobIcon": 9
        },
        {
            "id": 19,
            "name": "Camp",
            "mobs": [{id: 9, amount: 4}, {id: 10, amount: 1}],
            "lat": -601.0808944702148, "lng": 654.4293518066406,
            "mobIcon": 10
        },
        {
            "id": 20,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -610.7288932800293, "lng": 669.4928665161133,
            "mobIcon": 9
        },
        {
            "id": 21,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -619.1247253417969, "lng": 662.2303085327148,
            "mobIcon": 9
        },
        {
            "id": 22,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -638.1511535644531, "lng": 662.1128311157227,
            "mobIcon": 9
        },
        {
            "id": 23,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -662.6335868835449, "lng": 666.7328567504883,
            "mobIcon": 9
        },
        {
            "id": 24,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}, {id: 13, amount: 3}],
            "lat": -674.3871040344238, "lng": 659.0195999145508,
            "mobIcon": 13
        },
        {
            "id": 25,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -676.1551704406738, "lng": 648.0522689819336,
            "mobIcon": 9
        },
        {
            "id": 26,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -670.9042663574219, "lng": 640.7527618408203,
            "mobIcon": 9
        },
        {
            "id": 27,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -681.018856048584, "lng": 626.6803283691406,
            "mobIcon": 10
        },
        {
            "id": 28,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -688.375, "lng": 646.25,
            "mobIcon": 10
        },
        {
            "id": 29,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -699.5597305297852, "lng": 650.071891784668,
            "mobIcon": 9
        },
        {
            "id": 30,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}],
            "lat": -656.8180446624756, "lng": 597.1218338012695,
            "mobIcon": 7
        },
        {
            "id": 31,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -654.7264556884766, "lng": 582.4508743286133,
            "mobIcon": 15
        },
        {
            "id": 32,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}],
            "lat": -691.1543197631836, "lng": 575.125,
            "mobIcon": 7
        },
        {
            "id": 33,
            "name": "Camp",
            "mobs": [{id: 8, amount: 3}],
            "lat": -640.8702621459961, "lng": 571.5403747558594,
            "mobIcon": 8
        },
        {
            "id": 34,
            "name": "Camp",
            "mobs": [{id: 4, amount: 1}],
            "lat": -641.221118927002, "lng": 549.4348831176758,
            "mobIcon": 4
        },
        {
            "id": 35,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}],
            "lat": -630.0501747131348, "lng": 570.7912673950195,
            "mobIcon": 11
        },
        {
            "id": 36,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 12, amount: 1}, {id: 9, amount: 1}],
            "lat": -617, "lng": 551.25,
            "mobIcon": 11
        },
        {
            "id": 37,
            "name": "Camp",
            "mobs": [{id: 8, amount: 2}],
            "lat": -606.1678924560547, "lng": 572.9791641235352,
            "mobIcon": 8
        },
        {
            "id": 38,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -601.1798973083496, "lng": 552.9910659790039,
            "mobIcon": 15
        },
        {
            "id": 39,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -579.2054252624512, "lng": 536.8821029663086,
            "mobIcon": 15
        },
        {
            "id": 40,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}],
            "lat": -582.3755416870117, "lng": 555.5544052124023,
            "mobIcon": 7
        },
        {
            "id": 41,
            "name": "Camp",
            "mobs": [{id: 13, amount: 4}],
            "lat": -586.013916015625, "lng": 595.914924621582,
            "mobIcon": 13
        },
        {
            "id": 42,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -574.5605010986328, "lng": 597.6535568237305,
            "mobIcon": 13
        },
        {
            "id": 43,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 9, amount: 2}],
            "lat": -553.6804656982422, "lng": 538.5644836425781,
            "mobIcon": 12
        },
        {
            "id": 44,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -539.5525588989258, "lng": 550.073127746582,
            "mobIcon": 15
        },
        {
            "id": 45,
            "name": "Camp",
            "mobs": [{id: 10, amount: 2}, {id: 9, amount: 2}],
            "lat": -525.9013938903809, "lng": 565.4672927856445,
            "mobIcon": 10
        },
        {
            "id": 46,
            "name": "Camp",
            "mobs": [{id: 9, amount: 3}],
            "lat": -543.5834274291992, "lng": 601.9162368774414,
            "mobIcon": 9
        },
        {
            "id": 47,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -559.6033782958984, "lng": 631.513916015625,
            "mobIcon": 13
        },
        {
            "id": 48,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -540.2718696594238, "lng": 640.973991394043,
            "mobIcon": 13
        },
        {
            "id": 49,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -517.4231414794922, "lng": 601.3827056884766,
            "mobIcon": 13
        },
        {
            "id": 50,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -514.3343963623047, "lng": 541.7500991821289,
            "mobIcon": 13
        },
        {
            "id": 51,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -503.58507919311523, "lng": 545.6352043151855,
            "mobIcon": 13
        },
        {
            "id": 52,
            "name": "Camp",
            "mobs": [{id: 10, amount: 2}, {id: 9, amount: 2}],
            "lat": -482.9936981201172, "lng": 536.6373825073242,
            "mobIcon": 10
        },
        {
            "id": 53,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -454.93232345581055, "lng": 530.9559860229492,
            "mobIcon": 13
        },
        {
            "id": 54,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -484.75, "lng": 555.25,
            "mobIcon": 13
        },
        {
            "id": 55,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}, {id: 10, amount: 2}, {id: 9, amount: 2}],
            "lat": -466.75, "lng": 594.125,
            "mobIcon": 13
        },
        {
            "id": 56,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -453.35413360595703, "lng": 597.1618347167969,
            "mobIcon": 13
        },
        {
            "id": 57,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -462.5565986633301, "lng": 612.5079345703125,
            "mobIcon": 13
        },
        {
            "id": 58,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -439.61227798461914, "lng": 581.0609664916992,
            "mobIcon": 10
        },
        {
            "id": 59,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -498.625, "lng": 616,
            "mobIcon": 13
        },
        {
            "id": 60,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 10, amount: 2}, {id: 10, amount: 1}],
            "lat": -506.0628967285156, "lng": 650.9311218261719,
            "mobIcon": 10
        },
        {
            "id": 61,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -472.9549865722656, "lng": 670.6992263793945,
            "mobIcon": 15
        },
        {
            "id": 62,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -456.7022285461426, "lng": 660.5947799682617,
            "mobIcon": 15
        },
        {
            "id": 63,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}, {id: 13, amount: 1}],
            "lat": -447.625, "lng": 680.375,
            "mobIcon": 15
        },
        {
            "id": 64,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 10, amount: 2}, {id: 9, amount: 1}],
            "lat": -416.47559356689453, "lng": 703.7949752807617,
            "mobIcon": 10
        },
        {
            "id": 65,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -395, "lng": 695.625,
            "mobIcon": 10
        },
        {
            "id": 66,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -403.15494537353516, "lng": 690.3049545288086,
            "mobIcon": 10
        },
        {
            "id": 67,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 9, amount: 1}],
            "lat": -386.73499298095703, "lng": 676.3263244628906,
            "mobIcon": 11
        },
        {
            "id": 68,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -410.95789337158203, "lng": 673.8481674194336,
            "mobIcon": 9
        },
        {
            "id": 69,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}],
            "lat": -399.16636657714844, "lng": 658.3467330932617,
            "mobIcon": 7
        },
        {
            "id": 70,
            "name": "Camp",
            "mobs": [{id: 9, amount: 3}],
            "lat": -409.28382873535156, "lng": 654.5994873046875,
            "mobIcon": 9
        },
        {
            "id": 71,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -403.4293518066406, "lng": 640.9146575927734,
            "mobIcon": 9
        },
        {
            "id": 72,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -390.75, "lng": 633.466438293457,
            "mobIcon": 9
        },
        {
            "id": 73,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -427.30148696899414, "lng": 651.4781875610352,
            "mobIcon": 9
        },
        {
            "id": 74,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -441.3451385498047, "lng": 633.5120086669922,
            "mobIcon": 9
        },
        {
            "id": 75,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -447.0530319213867, "lng": 643.9948425292969,
            "mobIcon": 12
        },
        {
            "id": 76,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 9, amount: 2}],
            "lat": -411.77569580078125, "lng": 630.0991744995117,
            "mobIcon": 9
        },
        {
            "id": 77,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -413.125, "lng": 578.125,
            "mobIcon": 9
        },
        {
            "id": 78,
            "name": "Camp",
            "mobs": [{id: 9, amount: 3}],
            "lat": -404.415283203125, "lng": 546.4171905517578,
            "mobIcon": 9
        },
        {
            "id": 79,
            "name": "Camp",
            "mobs": [{id: 9, amount: 3}],
            "lat": -377.75, "lng": 550.625,
            "mobIcon": 9
        },
        {
            "id": 80,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}, {id: 13, amount: 1}],
            "lat": -376.5, "lng": 519.75,
            "mobIcon": 9
        },
        {
            "id": 81,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -440.125, "lng": 554.625,
            "mobIcon": 13
        },
        {
            "id": 82,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -429.75, "lng": 545.625,
            "mobIcon": 13
        },
        {
            "id": 83,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -407.25, "lng": 607.875,
            "mobIcon": 13
        },
        {
            "id": 84,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -401.6369323730469, "lng": 593.5236663818359,
            "mobIcon": 13
        },
        {
            "id": 85,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -378.448055267334, "lng": 606.4794616699219,
            "mobIcon": 13
        },
        {
            "id": 86,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -353.75, "lng": 561.75,
            "mobIcon": 13
        },
        {
            "id": 87,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -356.375, "lng": 518,
            "mobIcon": 13
        },
        {
            "id": 88,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -315.2835235595703, "lng": 528.2131652832031,
            "mobIcon": 9
        },
        {
            "id": 89,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -310.25, "lng": 550.25,
            "mobIcon": 9
        },
        {
            "id": 90,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -323.76527404785156, "lng": 555.652473449707,
            "mobIcon": 13
        },
        {
            "id": 91,
            "name": "Camp",
            "mobs": [{id: 9, amount: 3}],
            "lat": -330.1880531311035, "lng": 560.9965896606445,
            "mobIcon": 9
        },
        {
            "id": 92,
            "name": "Camp",
            "mobs": [{id: 9, amount: 3}],
            "lat": -345.25, "lng": 568.75,
            "mobIcon": 9
        },
        {
            "id": 93,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -333.125, "lng": 611.75,
            "mobIcon": 9
        },
        {
            "id": 94,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -335.5, "lng": 639.375,
            "mobIcon": 9
        },
        {
            "id": 95,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -337.1000289916992, "lng": 655.3774185180664,
            "mobIcon": 13
        },
        {
            "id": 96,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -332.75455474853516, "lng": 684.0589370727539,
            "mobIcon": 13
        },
        {
            "id": 97,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 9, amount: 1}],
            "lat": -345.125, "lng": 675.5,
            "mobIcon": 12
        },
        {
            "id": 98,
            "name": "Camp",
            "mobs": [{id: 1, amount: 1}],
            "lat": -362.96703338623047, "lng": 703.8222579956055,
            "mobIcon": 1
        },
        {
            "id": 99,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}, {id: 15, amount: 1}],
            "lat": -307.3390884399414, "lng": 655.9330825805664,
            "mobIcon": 13
        },
        {
            "id": 100,
            "name": "Camp",
            "mobs": [{id: 9, amount: 3}],
            "lat": -294.649959564209, "lng": 673.5576629638672,
            "mobIcon": 9
        },
        {
            "id": 101,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}],
            "lat": -281.90821838378906, "lng": 689.1164093017578,
            "mobIcon": 11
        },
        {
            "id": 102,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}],
            "lat": -274.8510551452637, "lng": 652.6406478881836,
            "mobIcon": 11
        },
        {
            "id": 103,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -250.74628448486328, "lng": 679.2382278442383,
            "mobIcon": 15
        },
        {
            "id": 104,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 10, amount: 1}],
            "lat": -223.55020141601562, "lng": 685.5796279907227,
            "mobIcon": 12
        },
        {
            "id": 105,
            "name": "Camp",
            "mobs": [{id: 1, amount: 1}],
            "lat": -215.375, "lng": 702,
            "mobIcon": 1
        },
        {
            "id": 106,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 13, amount: 1}],
            "lat": -205.49901580810547, "lng": 731.050651550293,
            "mobIcon": 12
        },
        {
            "id": 107,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -200.68217086791992, "lng": 725.6178855895996,
            "mobIcon": 9
        },
        {
            "id": 108,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}],
            "lat": -197.7631492614746, "lng": 720.0065612792969,
            "mobIcon": 12
        },
        {
            "id": 109,
            "name": "Camp",
            "mobs": [{id: 9, amount: 3}],
            "lat": -190.31079864501953, "lng": 718.2513275146484,
            "mobIcon": 9
        },
        {
            "id": 110,
            "name": "Camp",
            "mobs": [{id: 13, amount: 4}],
            "lat": -188.25, "lng": 703,
            "mobIcon": 13
        },
        {
            "id": 111,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -183.60897827148438, "lng": 686.9068298339844,
            "mobIcon": 13
        },
        {
            "id": 112,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -193.5, "lng": 692,
            "mobIcon": 13
        },
        {
            "id": 113,
            "name": "Camp",
            "mobs": [{id: 4, amount: 1}],
            "lat": -194.375, "lng": 699.25,
            "mobIcon": 4
        },
        {
            "id": 114,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -200.625, "lng": 608.25,
            "mobIcon": 15
        },
        {
            "id": 115,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}],
            "lat": -219.625, "lng": 589.875,
            "mobIcon": 12
        },
        {
            "id": 116,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -222.75, "lng": 621.375,
            "mobIcon": 11
        },
        {
            "id": 117,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 9, amount: 3}],
            "lat": -232.89967727661133, "lng": 630.9056396484375,
            "mobIcon": 9
        },
        {
            "id": 118,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -243, "lng": 621.875,
            "mobIcon": 9
        },
        {
            "id": 119,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -248.5, "lng": 632.125,
            "mobIcon": 9
        },
        {
            "id": 120,
            "name": "Camp",
            "mobs": [{id: 9, amount: 3}],
            "lat": -253.26727294921875, "lng": 601.923770904541,
            "mobIcon": 9
        },
        {
            "id": 121,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 9, amount: 2}],
            "lat": -257.125, "lng": 609.625,
            "mobIcon": 9
        },
        {
            "id": 122,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -281.86940002441406, "lng": 574.6838989257812,
            "mobIcon": 9
        },
        {
            "id": 123,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 13, amount: 1}, {id: 9, amount: 1}],
            "lat": -263.14488983154297, "lng": 575.8240814208984,
            "mobIcon": 12
        },
        {
            "id": 124,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -269.25, "lng": 571,
            "mobIcon": 9
        },
        {
            "id": 125,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -262, "lng": 566.5,
            "mobIcon": 9
        },
        {
            "id": 126,
            "name": "Camp",
            "mobs": [{id: 9, amount: 3}],
            "lat": -245.13098907470703, "lng": 560.399787902832,
            "mobIcon": 9
        },
        {
            "id": 127,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -239.42525100708008, "lng": 572.396110534668,
            "mobIcon": 10
        },
        {
            "id": 128,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -234.375, "lng": 564.375,
            "mobIcon": 10
        },
        {
            "id": 129,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -237.43415069580078, "lng": 549.8648300170898,
            "mobIcon": 9
        },
        {
            "id": 130,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -230.7637939453125, "lng": 546.1320266723633,
            "mobIcon": 15
        },
        {
            "id": 131,
            "name": "Camp",
            "mobs": [{id: 10, amount: 2}, {id: 9, amount: 2}],
            "lat": -251.46831512451172, "lng": 542.1418914794922,
            "mobIcon": 10
        },
        {
            "id": 132,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -261.04779052734375, "lng": 533.3769607543945,
            "mobIcon": 9
        },
        {
            "id": 133,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -254.45914840698242, "lng": 521.5539016723633,
            "mobIcon": 13
        },
        {
            "id": 134,
            "name": "Camp",
            "mobs": [{id: 13, amount: 4}],
            "lat": -269.125, "lng": 527.375,
            "mobIcon": 13
        },
        {
            "id": 135,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -294.24853515625, "lng": 516.995304107666,
            "mobIcon": 13
        },
        {
            "id": 136,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -557.5743942260742, "lng": 507.9560317993164,
            "mobIcon": 15
        },
        {
            "id": 137,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -548.0453720092773, "lng": 485.6776466369629,
            "mobIcon": 15
        },
        {
            "id": 138,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 9, amount: 3}],
            "lat": -534.6333770751953, "lng": 500.1095733642578,
            "mobIcon": 9
        },
        {
            "id": 139,
            "name": "Camp",
            "mobs": [{id: 3, amount: 1}],
            "lat": -573.9841003417969, "lng": 481.15809631347656,
            "mobIcon": 3
        },
        {
            "id": 140,
            "name": "Camp",
            "mobs": [{id: 4, amount: 1}],
            "lat": -503.53858947753906, "lng": 433.3450393676758,
            "mobIcon": 4
        },
        {
            "id": 141,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -554.1421432495117, "lng": 428.60995864868164,
            "mobIcon": 9
        },
        {
            "id": 142,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}],
            "lat": -557.7960052490234, "lng": 420,
            "mobIcon": 11
        },
        {
            "id": 143,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -572.4393577575684, "lng": 433.2246398925781,
            "mobIcon": 9
        },
        {
            "id": 144,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -580.4249000549316, "lng": 427.58348846435547,
            "mobIcon": 9
        },
        {
            "id": 145,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 12, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 2}],
            "lat": -573.625, "lng": 420.5,
            "mobIcon": 9
        },
        {
            "id": 146,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -598.7075347900391, "lng": 412.57747650146484,
            "mobIcon": 13
        },
        {
            "id": 147,
            "name": "Camp",
            "mobs": [{id: 11, amount: 2}, {id: 10, amount: 2}],
            "lat": -573.5395278930664, "lng": 372.83956146240234,
            "mobIcon": 11
        },
        {
            "id": 148,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -550.4662399291992, "lng": 384.7255439758301,
            "mobIcon": 13
        },
        {
            "id": 149,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -554.234992980957, "lng": 373.95720291137695,
            "mobIcon": 13
        },
        {
            "id": 150,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -546.125, "lng": 375.16529083251953,
            "mobIcon": 13
        },
        {
            "id": 151,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -531.6621551513672, "lng": 353.6711883544922,
            "mobIcon": 13
        },
        {
            "id": 152,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -500.45467376708984, "lng": 387.7954444885254,
            "mobIcon": 10
        },
        {
            "id": 153,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -483.4113464355469, "lng": 368.80694580078125,
            "mobIcon": 9
        },
        {
            "id": 154,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -475.875, "lng": 370.75,
            "mobIcon": 9
        },
        {
            "id": 155,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -459.5115280151367, "lng": 396.1735610961914,
            "mobIcon": 13
        },
        {
            "id": 156,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -471.7254638671875, "lng": 359.47978591918945,
            "mobIcon": 13
        },
        {
            "id": 157,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -476.375, "lng": 354.75,
            "mobIcon": 13
        },
        {
            "id": 158,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -478.88578033447266, "lng": 313.6314468383789,
            "mobIcon": 13
        },
        {
            "id": 159,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}],
            "lat": -452.320499420166, "lng": 328.39173889160156,
            "mobIcon": 11
        },
        {
            "id": 160,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -444.56842041015625, "lng": 330.4651985168457,
            "mobIcon": 10
        },
        {
            "id": 161,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -446.37589263916016, "lng": 368.44525146484375,
            "mobIcon": 9
        },
        {
            "id": 162,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 12, amount: 1}, {id: 9, amount: 2}],
            "lat": -443.6670608520508, "lng": 374.9215965270996,
            "mobIcon": 9
        },
        {
            "id": 163,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -418.02527618408203, "lng": 343.25429916381836,
            "mobIcon": 13
        },
        {
            "id": 164,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -401.4778594970703, "lng": 335.7561569213867,
            "mobIcon": 13
        },
        {
            "id": 165,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}, {id: 12, amount: 1}, {id: 9, amount: 2}],
            "lat": -407, "lng": 348.25,
            "mobIcon": 9
        },
        {
            "id": 166,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 9, amount: 2}, {id: 13, amount: 4}],
            "lat": -421.27574920654297, "lng": 333.39791107177734,
            "mobIcon": 13
        },
        {
            "id": 167,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}, {id: 9, amount: 3}],
            "lat": -430.875, "lng": 334.4779396057129,
            "mobIcon": 9
        },
        {
            "id": 168,
            "name": "Camp",
            "mobs": [{id: 13, amount: 4}],
            "lat": -515.6421203613281, "lng": 255.15435028076172,
            "mobIcon": 13
        },
        {
            "id": 169,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -562.0215530395508, "lng": 266.7709732055664,
            "mobIcon": 15
        },
        {
            "id": 170,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}],
            "lat": -478.8438720703125, "lng": 251.28395462036133,
            "mobIcon": 11
        },
        {
            "id": 171,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -467.67599868774414, "lng": 227.84870529174805,
            "mobIcon": 9
        },
        {
            "id": 172,
            "name": "Camp",
            "mobs": [{id: 10, amount: 2}, {id: 9, amount: 1}],
            "lat": -454, "lng": 219.875,
            "mobIcon": 10
        },
        {
            "id": 173,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -428.1164093017578, "lng": 219.87212753295898,
            "mobIcon": 9
        },
        {
            "id": 174,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -405.48834228515625, "lng": 213.81104278564453,
            "mobIcon": 12
        },
        {
            "id": 175,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -379, "lng": 222.375,
            "mobIcon": 9
        },
        {
            "id": 176,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -366.25, "lng": 221.125,
            "mobIcon": 9
        },
        {
            "id": 177,
            "name": "Camp",
            "mobs": [{id: 20, amount: 3}, {id: 15, amount: 1}],
            "lat": -439.375, "lng": 261.25,
            "mobIcon": 20
        },
        {
            "id": 178,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -409.4926071166992, "lng": 262.1063995361328,
            "mobIcon": 15
        },
        {
            "id": 179,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}],
            "lat": -400.75, "lng": 256.875,
            "mobIcon": 7
        },
        {
            "id": 180,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 10, amount: 1}, {id: 13, amount: 1}, {id: 9, amount: 1}],
            "lat": -402.375, "lng": 279.75,
            "mobIcon": 12
        },
        {
            "id": 181,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -393, "lng": 279,
            "mobIcon": 9
        },
        {
            "id": 182,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -384.6121826171875, "lng": 281.2107810974121,
            "mobIcon": 10
        },
        {
            "id": 183,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -381.693603515625, "lng": 263.3125228881836,
            "mobIcon": 9
        },
        {
            "id": 184,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -342.1355400085449, "lng": 257.550838470459,
            "mobIcon": 13
        },
        {
            "id": 185,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -361.7738265991211, "lng": 283.04650497436523,
            "mobIcon": 10
        },
        {
            "id": 186,
            "name": "Camp",
            "mobs": [{id: 13, amount: 4}],
            "lat": -357.56419372558594, "lng": 292.17346954345703,
            "mobIcon": 13
        },
        {
            "id": 187,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 9, amount: 3}],
            "lat": -356, "lng": 298.625,
            "mobIcon": 9
        },
        {
            "id": 188,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -337.09093856811523, "lng": 288.2370910644531,
            "mobIcon": 9
        },
        {
            "id": 189,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 12, amount: 1}, {id: 13, amount: 1}, {id: 9, amount: 2}],
            "lat": -344.4288864135742, "lng": 318.7532482147217,
            "mobIcon": 9
        },
        {
            "id": 190,
            "name": "Camp",
            "mobs": [{id: 13, amount: 4}],
            "lat": -326.87294006347656, "lng": 326.8128776550293,
            "mobIcon": 13
        },
        {
            "id": 191,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -312.946231842041, "lng": 333.35142517089844,
            "mobIcon": 13
        },
        {
            "id": 192,
            "name": "Camp",
            "mobs": [{id: 13, amount: 4}],
            "lat": -313.3408508300781, "lng": 298.16089630126953,
            "mobIcon": 13
        },
        {
            "id": 193,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -278.8293991088867, "lng": 353.3889617919922,
            "mobIcon": 13
        },
        {
            "id": 194,
            "name": "Camp",
            "mobs": [{id: 9, amount: 3}],
            "lat": -271.7850112915039, "lng": 349.26530838012695,
            "mobIcon": 9
        },
        {
            "id": 195,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 10, amount: 1}, {id: 13, amount: 1}],
            "lat": -262.5, "lng": 326.875,
            "mobIcon": 12
        },
        {
            "id": 196,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}],
            "lat": -272.125, "lng": 329,
            "mobIcon": 11
        },
        {
            "id": 197,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -281.5, "lng": 336.5,
            "mobIcon": 9
        },
        {
            "id": 198,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -285.7608947753906, "lng": 329.1180953979492,
            "mobIcon": 9
        },
        {
            "id": 199,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 13, amount: 1}],
            "lat": -279.625, "lng": 339.75,
            "mobIcon": 12
        },
        {
            "id": 200,
            "name": "Camp",
            "mobs": [{id: 10, amount: 2}, {id: 9, amount: 3}],
            "lat": -283.5, "lng": 347,
            "mobIcon": 9
        },
        {
            "id": 201,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -276.75, "lng": 344.75,
            "mobIcon": 10
        },
        {
            "id": 202,
            "name": "Camp",
            "mobs": [{id: 4, amount: 1}],
            "lat": -271.7800598144531, "lng": 320.2479782104492,
            "mobIcon": 4
        },
        {
            "id": 203,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -272.73442459106445, "lng": 306.5177764892578,
            "mobIcon": 13
        },
        {
            "id": 204,
            "name": "Camp",
            "mobs": [{id: 1, amount: 1}],
            "lat": -262.7335433959961, "lng": 289.281063079834,
            "mobIcon": 1
        },
        {
            "id": 205,
            "name": "Camp",
            "mobs": [{id: 10, amount: 2}, {id: 9, amount: 2}],
            "lat": -327.6629333496094, "lng": 220.09771728515625,
            "mobIcon": 10
        },
        {
            "id": 206,
            "name": "Camp",
            "mobs": [{id: 1, amount: 1}],
            "lat": -314.375, "lng": 202,
            "mobIcon": 1
        },
        {
            "id": 207,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -322.5, "lng": 187.75,
            "mobIcon": 13
        },
        {
            "id": 208,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -301.375, "lng": 215.375,
            "mobIcon": 13
        },
        {
            "id": 209,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -291.875, "lng": 219.375,
            "mobIcon": 13
        },
        {
            "id": 210,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -285.875, "lng": 243.75,
            "mobIcon": 13
        },
        {
            "id": 211,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -286, "lng": 173.375,
            "mobIcon": 13
        },
        {
            "id": 212,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -290.25, "lng": 133.875,
            "mobIcon": 13
        },
        {
            "id": 213,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -316.1356506347656, "lng": 124.55473899841309,
            "mobIcon": 13
        },
        {
            "id": 214,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -255.5793685913086, "lng": 126.00486755371094,
            "mobIcon": 13
        },
        {
            "id": 215,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -203.66024780273438, "lng": 143.37870025634766,
            "mobIcon": 13
        },
        {
            "id": 216,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -185.41172790527344, "lng": 174.2690887451172,
            "mobIcon": 13
        },
        {
            "id": 217,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -212.09896850585938, "lng": 191.33906745910645,
            "mobIcon": 13
        },
        {
            "id": 218,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -207.25, "lng": 202.625,
            "mobIcon": 13
        },
        {
            "id": 219,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -313.32967376708984, "lng": 169.3572998046875,
            "mobIcon": 9
        },
        {
            "id": 220,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -287.25, "lng": 189.5,
            "mobIcon": 9
        },
        {
            "id": 221,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -283.7664031982422, "lng": 206.33964157104492,
            "mobIcon": 9
        },
        {
            "id": 222,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}],
            "lat": -294.737060546875, "lng": 164.94845581054688,
            "mobIcon": 12
        },
        {
            "id": 223,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 9, amount: 2}],
            "lat": -267.75, "lng": 175.375,
            "mobIcon": 9
        },
        {
            "id": 224,
            "name": "Camp",
            "mobs": [{id: 12, amount: 2}, {id: 10, amount: 2}],
            "lat": -243.6977081298828, "lng": 246.3948745727539,
            "mobIcon": 12
        },
        {
            "id": 225,
            "name": "Camp",
            "mobs": [{id: 1, amount: 1}],
            "lat": -265.375, "lng": 149.75,
            "mobIcon": 1
        },
        {
            "id": 226,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -252.71220016479492, "lng": 171.21774291992188,
            "mobIcon": 10
        },
        {
            "id": 227,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -245.1642074584961, "lng": 178.0281162261963,
            "mobIcon": 9
        },
        {
            "id": 228,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}],
            "lat": -241.25, "lng": 171.25,
            "mobIcon": 11
        },
        {
            "id": 229,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -215.73220825195312, "lng": 209.2413330078125,
            "mobIcon": 10
        },
        {
            "id": 230,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}],
            "lat": -212.125, "lng": 228.75,
            "mobIcon": 7
        },
        {
            "id": 231,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 9, amount: 1}],
            "lat": -207.125, "lng": 217.375,
            "mobIcon": 11
        },
        {
            "id": 232,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -203.5180320739746, "lng": 186.56381225585938,
            "mobIcon": 15
        },
        {
            "id": 233,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 10, amount: 1}],
            "lat": -178.3095245361328, "lng": 184.86629486083984,
            "mobIcon": 12
        },
        {
            "id": 234,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 12, amount: 1}, {id: 10, amount: 1}],
            "lat": -189.43935775756836, "lng": 120.43231201171875,
            "mobIcon": 11
        },
        {
            "id": 235,
            "name": "Camp",
            "mobs": [{id: 8, amount: 2}],
            "lat": -240.36956787109375, "lng": 70.80426406860352,
            "mobIcon": 8
        },
        {
            "id": 236,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 12, amount: 2}, {id: 10, amount: 1}],
            "lat": -257.125, "lng": 103.75,
            "mobIcon": 12
        },
        {
            "id": 237,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}],
            "lat": -253.125, "lng": 111.97702026367188,
            "mobIcon": 12
        },
        {
            "id": 238,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}],
            "lat": -271.375, "lng": 120.125,
            "mobIcon": 12
        },
        {
            "id": 239,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}],
            "lat": -306.1563491821289, "lng": 129.79588317871094,
            "mobIcon": 12
        },
        {
            "id": 240,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}],
            "lat": -310.58921813964844, "lng": 143.14478874206543,
            "mobIcon": 12
        },
        {
            "id": 241,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}],
            "lat": -325.4356803894043, "lng": 63.566070556640625,
            "mobIcon": 12
        },
        {
            "id": 242,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}],
            "lat": -330.79969787597656, "lng": 70.45339965820312,
            "mobIcon": 12
        },
        {
            "id": 243,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}],
            "lat": -258.9914245605469, "lng": 116.73467636108398,
            "mobIcon": 7
        },
        {
            "id": 244,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 2}],
            "lat": -244.4526596069336, "lng": 132.67933654785156,
            "mobIcon": 9
        },
        {
            "id": 245,
            "name": "Camp",
            "mobs": [{id: 10, amount: 2}],
            "lat": -254.625, "lng": 140.25,
            "mobIcon": 10
        },
        {
            "id": 246,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -244.15867233276367, "lng": 148.76825714111328,
            "mobIcon": 10
        },
        {
            "id": 247,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}, {id: 9, amount: 2}],
            "lat": -250.75, "lng": 153.75,
            "mobIcon": 9
        },
        {
            "id": 248,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}, {id: 9, amount: 2}],
            "lat": -336.32540130615234, "lng": 142.80902481079102,
            "mobIcon": 9
        },
        {
            "id": 249,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 10, amount: 2}],
            "lat": -295.0662307739258, "lng": 73.96213150024414,
            "mobIcon": 10
        },
        {
            "id": 250,
            "name": "Camp",
            "mobs": [{id: 11, amount: 2}, {id: 12, amount: 1}, {id: 10, amount: 1}],
            "lat": -349.98870849609375, "lng": 90.33940124511719,
            "mobIcon": 11
        },
        {
            "id": 251,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -323.625, "lng": 97.125,
            "mobIcon": 12
        },
        {
            "id": 252,
            "name": "Camp",
            "mobs": [{id: 23, amount: 1}, {id: 13, amount: 2}],
            "lat": -334.4226875305176, "lng": 98.47061920166016,
            "mobIcon": 23
        },
        {
            "id": 253,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -583, "lng": 978,
            "mobIcon": 15
        },
        {
            "id": 254,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 12, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 2}],
            "lat": -682.850700378418, "lng": 554.1546401977539,
            "mobIcon": 9
        },
        {
            "id": 255,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 2}],
            "lat": -736.3596324920654, "lng": 542.2107696533203,
            "mobIcon": 9
        },
        {
            "id": 256,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 10, amount: 2}, {id: 9, amount: 1}],
            "lat": -683.8642349243164, "lng": 541.5594024658203,
            "mobIcon": 10
        },
        {
            "id": 257,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -731.4464244842529, "lng": 526.0869216918945,
            "mobIcon": 9
        },
        {
            "id": 258,
            "name": "Camp",
            "mobs": [{id: 9, amount: 3}],
            "lat": -719.9747276306152, "lng": 503.21026611328125,
            "mobIcon": 9
        },
        {
            "id": 259,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -704.6964225769043, "lng": 535.9579162597656,
            "mobIcon": 9
        },
        {
            "id": 260,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -704.0131988525391, "lng": 501.625,
            "mobIcon": 9
        },
        {
            "id": 261,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -656.5011138916016, "lng": 548.2411193847656,
            "mobIcon": 9
        },
        {
            "id": 262,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -663.4796142578125, "lng": 524.1086654663086,
            "mobIcon": 9
        },
        {
            "id": 263,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -640, "lng": 539.375,
            "mobIcon": 9
        },
        {
            "id": 264,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -698.125, "lng": 494.5,
            "mobIcon": 10
        },
        {
            "id": 265,
            "name": "Camp",
            "mobs": [{id: 12, amount: 2}],
            "lat": -689.3576431274414, "lng": 497.5644302368164,
            "mobIcon": 12
        },
        {
            "id": 266,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -679.6610298156738, "lng": 508.78941345214844,
            "mobIcon": 13
        },
        {
            "id": 267,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -678.1440773010254, "lng": 513.6952972412109,
            "mobIcon": 10
        },
        {
            "id": 268,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 9, amount: 3}],
            "lat": -688.7231292724609, "lng": 458.7614059448242,
            "mobIcon": 9
        },
        {
            "id": 269,
            "name": "Camp",
            "mobs": [{id: 4, amount: 1}],
            "lat": -685.7138900756836, "lng": 429.8887023925781,
            "mobIcon": 4
        },
        {
            "id": 270,
            "name": "Camp",
            "mobs": [{id: 8, amount: 2}],
            "lat": -668.3381042480469, "lng": 448.829345703125,
            "mobIcon": 8
        },
        {
            "id": 271,
            "name": "Camp",
            "mobs": [{id: 8, amount: 3}],
            "lat": -649.25, "lng": 505.125,
            "mobIcon": 8
        },
        {
            "id": 272,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -662.5379371643066, "lng": 468.9423828125,
            "mobIcon": 15
        },
        {
            "id": 273,
            "name": "Camp",
            "mobs": [{id: 4, amount: 1}],
            "lat": -663.9196014404297, "lng": 483.8659439086914,
            "mobIcon": 4
        },
        {
            "id": 274,
            "name": "Camp",
            "mobs": [{id: 4, amount: 1}],
            "lat": -639.3573837280273, "lng": 522.9678192138672,
            "mobIcon": 4
        },
        {
            "id": 275,
            "name": "Camp",
            "mobs": [{id: 14, amount: 4}],
            "lat": -616.875, "lng": 531.25,
            "mobIcon": 14
        },
        {
            "id": 276,
            "name": "Camp",
            "mobs": [{id: 14, amount: 2}],
            "lat": -629.6791000366211, "lng": 493.9634704589844,
            "mobIcon": 14
        },
        {
            "id": 277,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 12, amount: 1}, {id: 9, amount: 2}],
            "lat": -646.9014549255371, "lng": 482.6151428222656,
            "mobIcon": 9
        },
        {
            "id": 278,
            "name": "Camp",
            "mobs": [{id: 14, amount: 5}],
            "lat": -610.9111213684082, "lng": 449.45268630981445,
            "mobIcon": 14
        },
        {
            "id": 279,
            "name": "Camp",
            "mobs": [{id: 14, amount: 2}],
            "lat": -605.9080581665039, "lng": 442.17552185058594,
            "mobIcon": 14
        },
        {
            "id": 280,
            "name": "Camp",
            "mobs": [{id: 4, amount: 1}],
            "lat": -626.375, "lng": 412.0507926940918,
            "mobIcon": 4
        },
        {
            "id": 281,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}],
            "lat": -614.625, "lng": 402.875,
            "mobIcon": 7
        },
        {
            "id": 282,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}],
            "lat": -620.125, "lng": 404,
            "mobIcon": 7
        },
        {
            "id": 283,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -626.25, "lng": 385.75,
            "mobIcon": 13
        },
        {
            "id": 284,
            "name": "Camp",
            "mobs": [{id: 8, amount: 2}],
            "lat": -641.2681579589844, "lng": 392.96846771240234,
            "mobIcon": 8
        },
        {
            "id": 285,
            "name": "Camp",
            "mobs": [{id: 8, amount: 1}],
            "lat": -656, "lng": 381.875,
            "mobIcon": 8
        },
        {
            "id": 286,
            "name": "Camp",
            "mobs": [{id: 8, amount: 1}],
            "lat": -658.1969871520996, "lng": 407.46917724609375,
            "mobIcon": 8
        },
        {
            "id": 287,
            "name": "Camp",
            "mobs": [{id: 8, amount: 1}],
            "lat": -656.0573501586914, "lng": 416.2058792114258,
            "mobIcon": 8
        },
        {
            "id": 288,
            "name": "Camp",
            "mobs": [{id: 8, amount: 2}],
            "lat": -658.8585662841797, "lng": 361.6148910522461,
            "mobIcon": 8
        },
        {
            "id": 289,
            "name": "Camp",
            "mobs": [{id: 8, amount: 2}],
            "lat": -665.9452857971191, "lng": 351.32090759277344,
            "mobIcon": 8
        },
        {
            "id": 290,
            "name": "Camp",
            "mobs": [{id: 8, amount: 3}],
            "lat": -647.6319732666016, "lng": 344.67847061157227,
            "mobIcon": 8
        },
        {
            "id": 291,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}],
            "lat": -694.7946090698242, "lng": 310.58741760253906,
            "mobIcon": 7
        },
        {
            "id": 292,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -722.0793151855469, "lng": 347.472957611084,
            "mobIcon": 13
        },
        {
            "id": 293,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -729.8015670776367, "lng": 317.4668388366699,
            "mobIcon": 9
        },
        {
            "id": 294,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -718.4889907836914, "lng": 409.73923110961914,
            "mobIcon": 9
        },
        {
            "id": 295,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -728.3319396972656, "lng": 410.78160858154297,
            "mobIcon": 9
        },
        {
            "id": 296,
            "name": "Camp",
            "mobs": [{id: 9, amount: 6}],
            "lat": -783.75, "lng": 393,
            "mobIcon": 9
        },
        {
            "id": 297,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -814.3742065429688, "lng": 345.78749084472656,
            "mobIcon": 9
        },
        {
            "id": 298,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -779.6160469055176, "lng": 310.04150390625,
            "mobIcon": 9
        },
        {
            "id": 299,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -781.125, "lng": 317.125,
            "mobIcon": 9
        },
        {
            "id": 300,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 12, amount: 1}, {id: 10, amount: 2}, {id: 9, amount: 1}],
            "lat": -740.4815101623535, "lng": 306.5537414550781,
            "mobIcon": 10
        },
        {
            "id": 301,
            "name": "Camp",
            "mobs": [{id: 6, amount: 1}, {id: 10, amount: 1}],
            "lat": -767.3302536010742, "lng": 313.5332221984863,
            "mobIcon": 6
        },
        {
            "id": 302,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 9, amount: 3}],
            "lat": -787.7128677368164, "lng": 329.62647247314453,
            "mobIcon": 9
        },
        {
            "id": 303,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}],
            "lat": -769.1002235412598, "lng": 340.12063217163086,
            "mobIcon": 11
        },
        {
            "id": 304,
            "name": "Camp",
            "mobs": [{id: 6, amount: 1}],
            "lat": -739.75, "lng": 406,
            "mobIcon": 6
        },
        {
            "id": 305,
            "name": "Camp",
            "mobs": [{id: 4, amount: 1}],
            "lat": -761.5003662109375, "lng": 390.4974365234375,
            "mobIcon": 4
        },
        {
            "id": 306,
            "name": "Camp",
            "mobs": [{id: 8, amount: 1}],
            "lat": -763.8467407226562, "lng": 395.9028911590576,
            "mobIcon": 8
        },
        {
            "id": 307,
            "name": "Camp",
            "mobs": [{id: 8, amount: 2}],
            "lat": -778.25, "lng": 374,
            "mobIcon": 8
        },
        {
            "id": 308,
            "name": "Camp",
            "mobs": [{id: 8, amount: 2}],
            "lat": -833.0198059082031, "lng": 358.6959228515625,
            "mobIcon": 8
        },
        {
            "id": 309,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -783.6132965087891, "lng": 441.85245513916016,
            "mobIcon": 9
        },
        {
            "id": 310,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -782.6382064819336, "lng": 459.4314880371094,
            "mobIcon": 9
        },
        {
            "id": 311,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -776.9150695800781, "lng": 451.8796577453613,
            "mobIcon": 9
        },
        {
            "id": 312,
            "name": "Camp",
            "mobs": [{id: 6, amount: 1}],
            "lat": -823.2389068603516, "lng": 468.7018737792969,
            "mobIcon": 6
        },
        {
            "id": 313,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 12, amount: 2}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -810.2368850708008, "lng": 488.3840103149414,
            "mobIcon": 12
        },
        {
            "id": 314,
            "name": "Camp",
            "mobs": [{id: 15, amount: 3}],
            "lat": -868.2043228149414, "lng": 473.375,
            "mobIcon": 15
        },
        {
            "id": 315,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -838.1165237426758, "lng": 503.60145568847656,
            "mobIcon": 10
        },
        {
            "id": 316,
            "name": "Camp",
            "mobs": [{id: 11, amount: 2}],
            "lat": -836, "lng": 518.25,
            "mobIcon": 11
        },
        {
            "id": 317,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -830.625, "lng": 521.5,
            "mobIcon": 10
        },
        {
            "id": 318,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}],
            "lat": -838, "lng": 536.625,
            "mobIcon": 11
        },
        {
            "id": 319,
            "name": "Camp",
            "mobs": [{id: 1, amount: 1}],
            "lat": -875.2396545410156, "lng": 531.2651748657227,
            "mobIcon": 1
        },
        {
            "id": 320,
            "name": "Camp",
            "mobs": [{id: 1, amount: 1}],
            "lat": -901.5816421508789, "lng": 548.0173416137695,
            "mobIcon": 1
        },
        {
            "id": 321,
            "name": "Camp",
            "mobs": [{id: 6, amount: 1}],
            "lat": -820.1325988769531, "lng": 566.0789947509766,
            "mobIcon": 6
        },
        {
            "id": 322,
            "name": "Camp",
            "mobs": [{id: 4, amount: 1}],
            "lat": -799.875, "lng": 554.1489105224609,
            "mobIcon": 4
        },
        {
            "id": 323,
            "name": "Camp",
            "mobs": [{id: 7, amount: 2}],
            "lat": -796.3473205566406, "lng": 530.8632049560547,
            "mobIcon": 7
        },
        {
            "id": 324,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -778.5769081115723, "lng": 559.0350952148438,
            "mobIcon": 9
        },
        {
            "id": 325,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 9, amount: 2}],
            "lat": -770.7323303222656, "lng": 570.9060897827148,
            "mobIcon": 9
        }
    ],
    liyue: [
        {
            "id": 326,
            "name": "Camp",
            "mobs": [{id: 8, amount: 2}],
            "lat": -188.11505126953125,
            "lng": 796.0464515465832,
            "mobIcon": 8
        },
        {
            "id": 327,
            "name": "Camp",
            "mobs": [{id: 5, amount: 1}],
            "lat": -225.50370025634766,
            "lng": 786.4083559926783,
            "mobIcon": 5
        },
        {
            "id": 328,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -161.5984992980957, "lng": 770.595359255624,
            "mobIcon": 15
        },
        {
            "id": 329,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -173.30313110351562, "lng": 780.0428510319398,
            "mobIcon": 13
        },
        {
            "id": 330,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}],
            "lat": -189.88922119140625, "lng": 765.2366736523769,
            "mobIcon": 12
        },
        {
            "id": 331,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}, {id: 9, amount: 3}],
            "lat": -190.65457153320312, "lng": 748.286349679011,
            "mobIcon": 9
        },
        {
            "id": 332,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -199.125, "lng": 730.9770373514432,
            "mobIcon": 13
        },
        {
            "id": 333,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}, {id: 11, amount: 1}, {id: 10, amount: 1}],
            "lat": -192.54906463623047, "lng": 719.9103180708828,
            "mobIcon": 11
        },
        {
            "id": 334,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -171.75, "lng": 722.220246179966,
            "mobIcon": 15
        },
        {
            "id": 335,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -164.25, "lng": 743.3468166383701,
            "mobIcon": 10
        },
        {
            "id": 336,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -162.53678131103516, "lng": 708.2281405852079,
            "mobIcon": 12
        },
        {
            "id": 337,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -179.75, "lng": 701.7102905480688,
            "mobIcon": 10
        },
        {
            "id": 338,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}, {id: 13, amount: 1}],
            "lat": -162.125, "lng": 693.9736417657045,
            "mobIcon": 12
        },
        {
            "id": 339,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 10, amount: 1}],
            "lat": -164.50731658935547, "lng": 683.066607531303,
            "mobIcon": 12
        },
        {
            "id": 340,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}, {id: 10, amount: 2}],
            "lat": -178.18680572509766, "lng": 678.225896315259,
            "mobIcon": 7
        },
        {
            "id": 341,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -205.49974822998047, "lng": 681.998785348578,
            "mobIcon": 10
        },
        {
            "id": 342,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}],
            "lat": -210.58487701416016, "lng": 669.6225716919568,
            "mobIcon": 7
        },
        {
            "id": 343,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -218, "lng": 655.3530560271647,
            "mobIcon": 13
        },
        {
            "id": 344,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -213.25, "lng": 661.7273344651952,
            "mobIcon": 9
        },
        {
            "id": 345,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -202.875, "lng": 640.9821307300509,
            "mobIcon": 10
        },
        {
            "id": 346,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -154.96184539794922, "lng": 642.1375984852505,
            "mobIcon": 13
        },
        {
            "id": 347,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -147.01553344726562, "lng": 641.9235505756579,
            "mobIcon": 10
        },
        {
            "id": 348,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -143.625, "lng": 656.224533106961,
            "mobIcon": 15
        },
        {
            "id": 349,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -138.05859375, "lng": 661.5024515200552,
            "mobIcon": 13
        },
        {
            "id": 350,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -139.38687133789062, "lng": 669.0586741630411,
            "mobIcon": 13
        },
        {
            "id": 351,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -105.375, "lng": 649.5980899830221,
            "mobIcon": 13
        },
        {
            "id": 352,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -109.25, "lng": 661.4711799660441,
            "mobIcon": 10
        },
        {
            "id": 353,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -120, "lng": 668.1881154499151,
            "mobIcon": 10
        },
        {
            "id": 354,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -119.125, "lng": 683.0961799660441,
            "mobIcon": 15
        },
        {
            "id": 355,
            "name": "Camp",
            "mobs": [{id: 8, amount: 2}],
            "lat": -114.125, "lng": 704.969779286927,
            "mobIcon": 8
        },
        {
            "id": 356,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -132.25, "lng": 690.3431663837011,
            "mobIcon": 12
        },
        {
            "id": 357,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -138.02070999145508, "lng": 695.936040959253,
            "mobIcon": 13
        },
        {
            "id": 358,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -151.375, "lng": 622.9767826825127,
            "mobIcon": 13
        },
        {
            "id": 359,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -183.90654754638672, "lng": 617.4559545442487,
            "mobIcon": 13
        },
        {
            "id": 360,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -190.42150115966797, "lng": 608.8078509656197,
            "mobIcon": 10
        },
        {
            "id": 361,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -143.67713928222656, "lng": 605.2784930761884,
            "mobIcon": 10
        },
        {
            "id": 362,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -150.875, "lng": 571.4801782682513,
            "mobIcon": 10
        },
        {
            "id": 363,
            "name": "Camp",
            "mobs": [{id: 4, amount: 1}],
            "lat": -156.75, "lng": 595.967869269949,
            "mobIcon": 4
        },
        {
            "id": 364,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 12, amount: 1}, {id: 10, amount: 1}, {id: 13, amount: 3}],
            "lat": -166.3640365600586, "lng": 595.2837210844652,
            "mobIcon": 11
        },
        {
            "id": 365,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 12, amount: 1}],
            "lat": -133.57491302490234, "lng": 557.2191960022284,
            "mobIcon": 11
        },
        {
            "id": 366,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 12, amount: 1}],
            "lat": -157.85334014892578, "lng": 518.1246256234083,
            "mobIcon": 11
        },
        {
            "id": 367,
            "name": "Camp",
            "mobs": [{id: 11, amount: 3}],
            "lat": -164, "lng": 501.23043293718166,
            "mobIcon": 11
        },
        {
            "id": 368,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -142.125, "lng": 531.2303056027165,
            "mobIcon": 13
        },
        {
            "id": 369,
            "name": "Camp",
            "mobs": [{id: 13, amount: 4}],
            "lat": -98.99911499023438, "lng": 531.5916818097411,
            "mobIcon": 13
        },
        {
            "id": 370,
            "name": "Camp",
            "mobs": [{id: 13, amount: 5}],
            "lat": -104.04003143310547, "lng": 466.9361669673175,
            "mobIcon": 13
        },
        {
            "id": 371,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -52.30354309082031, "lng": 507.593927737691,
            "mobIcon": 13
        },
        {
            "id": 372,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -84.87799835205078, "lng": 429.1874353379669,
            "mobIcon": 13
        },
        {
            "id": 373,
            "name": "Camp",
            "mobs": [{id: 14, amount: 2}],
            "lat": -76.875, "lng": 428.23043293718166,
            "mobIcon": 14
        },
        {
            "id": 374,
            "name": "Camp",
            "mobs": [{id: 14, amount: 4}],
            "lat": -67.125, "lng": 417.8560271646859,
            "mobIcon": 14
        },
        {
            "id": 375,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -115.125, "lng": 426.85666383701187,
            "mobIcon": 15
        },
        {
            "id": 376,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -143.8444938659668, "lng": 424.48982020638795,
            "mobIcon": 9
        },
        {
            "id": 377,
            "name": "Camp",
            "mobs": [{id: 14, amount: 5}],
            "lat": -172.125, "lng": 453.47440577249574,
            "mobIcon": 14
        },
        {
            "id": 378,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -212.0780487060547, "lng": 467.945507315099754,
            "mobIcon": 10
        },
        {
            "id": 379,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 9, amount: 1}],
            "lat": -220.25, "lng": 456.7101018675722,
            "mobIcon": 11
        },
        {
            "id": 380,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -233.5, "lng": 467.6061544991511,
            "mobIcon": 10
        },
        {
            "id": 381,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -222, "lng": 557.8433361629882,
            "mobIcon": 10
        },
        {
            "id": 382,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 9, amount: 1}],
            "lat": -236.25, "lng": 531.602843803056,
            "mobIcon": 11
        },
        {
            "id": 383,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -244.25, "lng": 532.1062818336163,
            "mobIcon": 12
        },
        {
            "id": 384,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -226.83643341064453, "lng": 493.06873507799236,
            "mobIcon": 11
        },
        {
            "id": 385,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -238.5328140258789, "lng": 488.08221130889217,
            "mobIcon": 13
        },
        {
            "id": 386,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -222.29082489013672, "lng": 506.8895109892296,
            "mobIcon": 13
        },
        {
            "id": 387,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -203.25, "lng": 502.10165534804753,
            "mobIcon": 13
        },
        {
            "id": 388,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -252.86173248291016, "lng": 535.7943382587011,
            "mobIcon": 13
        },
        {
            "id": 389,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -186.9357566833496, "lng": 522.8843173015705,
            "mobIcon": 13
        },
        {
            "id": 390,
            "name": "Camp",
            "mobs": [{id: 13, amount: 4}],
            "lat": -197.0809783935547, "lng": 529.1581377997666,
            "mobIcon": 13
        },
        {
            "id": 391,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -252.43341064453125, "lng": 604.2252042657046,
            "mobIcon": 13
        },
        {
            "id": 392,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}, {id: 10, amount: 1}],
            "lat": -225.375, "lng": 603.8520797962649,
            "mobIcon": 13
        },
        {
            "id": 393,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -240.80216217041016, "lng": 519.4734719864176,
            "mobIcon": 15
        },
        {
            "id": 394,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -184.98845672607422, "lng": 541.974474413731,
            "mobIcon": 15
        },
        {
            "id": 395,
            "name": "Camp",
            "mobs": [{id: 4, amount: 1}],
            "lat": -167.68113708496094, "lng": 544.6137017190152,
            "mobIcon": 4
        },
        {
            "id": 396,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -181.625, "lng": 530.1018675721562,
            "mobIcon": 9
        },
        {
            "id": 397,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -197.375, "lng": 546.725636672326,
            "mobIcon": 9
        },
        {
            "id": 398,
            "name": "Camp",
            "mobs": [{id: 10, amount: 2}],
            "lat": -213.375, "lng": 571.4730899830221,
            "mobIcon": 10
        },
        {
            "id": 399,
            "name": "Camp",
            "mobs": [{id: 5, amount: 1}, {id: 10, amount: 1}],
            "lat": -193.11969757080078, "lng": 580.1790480090726,
            "mobIcon": 5
        },
        {
            "id": 400,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 10, amount: 1}, {id: 13, amount: 1}],
            "lat": -273.9499816894531, "lng": 643.4848966070671,
            "mobIcon": 12
        },
        {
            "id": 401,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -274.36914825439453, "lng": 578.6440219121392,
            "mobIcon": 11
        },
        {
            "id": 402,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -286, "lng": 583.9712648556877,
            "mobIcon": 12
        },
        {
            "id": 403,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 12, amount: 1}, {id: 10, amount: 2}, {id: 9, amount: 1}],
            "lat": -323.25, "lng": 628.9415110356537,
            "mobIcon": 11
        },
        {
            "id": 404,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 9, amount: 1}],
            "lat": -354.125, "lng": 638.4635398981325,
            "mobIcon": 12
        },
        {
            "id": 405,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -289.625, "lng": 527.8553056027165,
            "mobIcon": 9
        },
        {
            "id": 406,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -283.375, "lng": 542.4794991511036,
            "mobIcon": 13
        },
        {
            "id": 407,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -311.97742462158203, "lng": 548.8194231483446,
            "mobIcon": 13
        },
        {
            "id": 408,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -331.2394828796387, "lng": 564.632228552101,
            "mobIcon": 13
        },
        {
            "id": 409,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -322.99840545654297, "lng": 582.6222258329797,
            "mobIcon": 13
        },
        {
            "id": 410,
            "name": "Camp",
            "mobs": [{id: 13, amount: 4}],
            "lat": -334.80133056640625, "lng": 582.6299153093166,
            "mobIcon": 13
        },
        {
            "id": 411,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -330.98441314697266, "lng": 623.7342380491299,
            "mobIcon": 13
        },
        {
            "id": 412,
            "name": "Camp",
            "mobs": [{id: 5, amount: 1}],
            "lat": -301.625, "lng": 556.2258913412563,
            "mobIcon": 5
        },
        {
            "id": 413,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -330.8079299926758, "lng": 588.6155881923812,
            "mobIcon": 10
        },
        {
            "id": 414,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -390.75, "lng": 634.6915959252972,
            "mobIcon": 10
        },
        {
            "id": 415,
            "name": "Camp",
            "mobs": [{id: 10, amount: 2}, {id: 9, amount: 1}],
            "lat": -413.5, "lng": 645.4506791171477,
            "mobIcon": 10
        },
        {
            "id": 416,
            "name": "Camp",
            "mobs": [{id: 6, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -240.8163299560547, "lng": 730.6119764033319,
            "mobIcon": 6
        },
        {
            "id": 417,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -269.875, "lng": 694.4850169779287,
            "mobIcon": 10
        },
        {
            "id": 418,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -272.0687713623047, "lng": 753.581439343697,
            "mobIcon": 10
        },
        {
            "id": 419,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 9, amount: 2}],
            "lat": -301.5682678222656, "lng": 778.675068309635,
            "mobIcon": 11
        },
        {
            "id": 420,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -262.875, "lng": 734.8464346349746,
            "mobIcon": 9
        },
        {
            "id": 421,
            "name": "Camp",
            "mobs": [{id: 13, amount: 4}],
            "lat": -297.30423736572266, "lng": 700.864878899618,
            "mobIcon": 13
        },
        {
            "id": 422,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -314.49745178222656, "lng": 669.3100269259338,
            "mobIcon": 13
        },
        {
            "id": 423,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -319.75, "lng": 736.9700764006791,
            "mobIcon": 13
        },
        {
            "id": 424,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -325.0828323364258, "lng": 746.3510355873302,
            "mobIcon": 13
        },
        {
            "id": 425,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -329.0954284667969, "lng": 724.9983161343379,
            "mobIcon": 13
        },
        {
            "id": 426,
            "name": "Camp",
            "mobs": [{id: 13, amount: 4}],
            "lat": -323.75, "lng": 726.8432937181664,
            "mobIcon": 13
        },
        {
            "id": 427,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}, {id: 11, amount: 1}, {id: 10, amount: 2}, {id: 9, amount: 2}],
            "lat": -334.25, "lng": 672.6044567062818,
            "mobIcon": 7
        },
        {
            "id": 428,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -349.8402099609375, "lng": 687.9575160494483,
            "mobIcon": 12
        },
        {
            "id": 429,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -346.6403579711914, "lng": 736.0828131632004,
            "mobIcon": 12
        },
        {
            "id": 430,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -322.2384567260742, "lng": 698.2694828363752,
            "mobIcon": 9
        },
        {
            "id": 431,
            "name": "Camp",
            "mobs": [{id: 4, amount: 1}],
            "lat": -319.125, "lng": 712.7189303904923,
            "mobIcon": 4
        },
        {
            "id": 432,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 9, amount: 1}, {id: 13, amount: 1}],
            "lat": -341.9417266845703, "lng": 775.2515386247878,
            "mobIcon": 11
        },
        {
            "id": 433,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}, {id: 13, amount: 1}],
            "lat": -346.875, "lng": 766.0894736842106,
            "mobIcon": 9
        },
        {
            "id": 434,
            "name": "Camp",
            "mobs": [{id: 3, amount: 1}],
            "lat": -353, "lng": 762.5897707979626,
            "mobIcon": 3
        },
        {
            "id": 435,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -347.961669921875, "lng": 758.1695531356112,
            "mobIcon": 13
        },
        {
            "id": 436,
            "name": "Camp",
            "mobs": [{id: 1, amount: 1}],
            "lat": -372.24810791015625, "lng": 766.8536333430603,
            "mobIcon": 1
        },
        {
            "id": 437,
            "name": "Camp",
            "mobs": [{id: 5, amount: 1}],
            "lat": -355.6974105834961, "lng": 794.9163097543506,
            "mobIcon": 5
        },
        {
            "id": 438,
            "name": "Camp",
            "mobs": [{id: 5, amount: 1}],
            "lat": -388.75, "lng": 808.966595925297,
            "mobIcon": 5
        },
        {
            "id": 439,
            "name": "Camp",
            "mobs": [{id: 5, amount: 1}],
            "lat": -405.86297607421875, "lng": 821.0028471190577,
            "mobIcon": 5
        },
        {
            "id": 440,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -398.25, "lng": 820.5907045840407,
            "mobIcon": 9
        },
        {
            "id": 441,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -382.5, "lng": 689.6078947368421,
            "mobIcon": 13
        },
        {
            "id": 442,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -399.75, "lng": 709.4760611205432,
            "mobIcon": 13
        },
        {
            "id": 443,
            "name": "Camp",
            "mobs": [{id: 13, amount: 5}],
            "lat": -427.2872009277344, "lng": 693.8110646686652,
            "mobIcon": 13
        },
        {
            "id": 444,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -422.4368591308594, "lng": 711.4367174235994,
            "mobIcon": 13
        },
        {
            "id": 445,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -409.0550880432129, "lng": 736.345908385505,
            "mobIcon": 13
        },
        {
            "id": 446,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -399.91030502319336, "lng": 792.5357912643251,
            "mobIcon": 13
        },
        {
            "id": 447,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -427.59251403808594, "lng": 791.50406243368,
            "mobIcon": 13
        },
        {
            "id": 448,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -442.42504119873047, "lng": 813.5932512733447,
            "mobIcon": 13
        },
        {
            "id": 449,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -445.75, "lng": 843.4617147707979,
            "mobIcon": 13
        },
        {
            "id": 450,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -467.2887420654297, "lng": 834.4062035759762,
            "mobIcon": 13
        },
        {
            "id": 451,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -452.1719741821289, "lng": 782.4085433467742,
            "mobIcon": 13
        },
        {
            "id": 452,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -470.25, "lng": 781.5975166463286,
            "mobIcon": 13
        },
        {
            "id": 453,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -385.7310791015625, "lng": 703.3665335844652,
            "mobIcon": 11
        },
        {
            "id": 454,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -369.8438606262207, "lng": 728.7421122267615,
            "mobIcon": 11
        },
        {
            "id": 455,
            "name": "Camp",
            "mobs": [{id: 8, amount: 4}],
            "lat": -386.9991683959961, "lng": 752.6619386009125,
            "mobIcon": 8
        },
        {
            "id": 456,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -400.7240447998047, "lng": 755.7605190205858,
            "mobIcon": 11
        },
        {
            "id": 457,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -429.35025787353516, "lng": 827.1860837356749,
            "mobIcon": 12
        },
        {
            "id": 458,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -390.1347885131836, "lng": 790.8904907019312,
            "mobIcon": 10
        },
        {
            "id": 459,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -397.65287017822266, "lng": 782.6861954849321,
            "mobIcon": 10
        },
        {
            "id": 460,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -440.59178161621094, "lng": 738.8215158770162,
            "mobIcon": 10
        },
        {
            "id": 461,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -453.10113525390625, "lng": 827.5270681902589,
            "mobIcon": 10
        },
        {
            "id": 462,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -492.375, "lng": 837.5914685908319,
            "mobIcon": 10
        },
        {
            "id": 463,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -437.94774627685547, "lng": 724.2680022416172,
            "mobIcon": 9
        },
        {
            "id": 464,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -440.09437561035156, "lng": 733.0043429674236,
            "mobIcon": 9
        },
        {
            "id": 465,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 9, amount: 1}],
            "lat": -436, "lng": 757.9716893039049,
            "mobIcon": 12
        },
        {
            "id": 466,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}, {id: 13, amount: 1}],
            "lat": -461, "lng": 778.5962224108658,
            "mobIcon": 15
        },
        {
            "id": 467,
            "name": "Camp",
            "mobs": [{id: 6, amount: 1}],
            "lat": -455.51602935791016, "lng": 834.0254572766341,
            "mobIcon": 6
        },
        {
            "id": 468,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -460.3272476196289, "lng": 862.332314436545,
            "mobIcon": 9
        },
        {
            "id": 467,
            "name": "Camp",
            "mobs": [{id: 1, amount: 1}],
            "lat": -467.1552505493164, "lng": 860.772629058786,
            "mobIcon": 1
        },
        {
            "id": 468,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -478.2028503417969, "lng": 878.3932950445671,
            "mobIcon": 11
        },
        {
            "id": 469,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 10, amount: 2}, {id: 9, amount: 1}],
            "lat": -468.125, "lng": 810.9749575551782,
            "mobIcon": 12
        },
        {
            "id": 470,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -484.5968322753906, "lng": 774.8667458085738,
            "mobIcon": 15
        },
        {
            "id": 471,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -476.25, "lng": 744.1818336162988,
            "mobIcon": 13
        },
        {
            "id": 472,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -480.1092529296875, "lng": 713.3541330645162,
            "mobIcon": 13
        },
        {
            "id": 473,
            "name": "Camp",
            "mobs": [{id: 13, amount: 5}],
            "lat": -523.1472320556641, "lng": 754.3769693734083,
            "mobIcon": 13
        },
        {
            "id": 474,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}],
            "lat": -499.125, "lng": 745.9737266553481,
            "mobIcon": 7
        },
        {
            "id": 475,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}],
            "lat": -527, "lng": 720.9414261460101,
            "mobIcon": 7
        },
        {
            "id": 476,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -470.48069763183594, "lng": 725.1855309581919,
            "mobIcon": 9
        },
        {
            "id": 477,
            "name": "Camp",
            "mobs": [{id: 3, amount: 1}],
            "lat": -502.625, "lng": 787.3388794567063,
            "mobIcon": 3
        },
        {
            "id": 478,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -528.625, "lng": 784.8503820033956,
            "mobIcon": 15
        },
        {
            "id": 479,
            "name": "Camp",
            "mobs": [{id: 4, amount: 1}],
            "lat": -523, "lng": 818.7537583563243,
            "mobIcon": 4
        },
        {
            "id": 480,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -514.0562210083008, "lng": 821.2322799501273,
            "mobIcon": 10
        },
        {
            "id": 481,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -535.7781524658203, "lng": 718.3496604414262,
            "mobIcon": 9
        },
        {
            "id": 482,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -526.3695449829102, "lng": 712.2215191930178,
            "mobIcon": 10
        },
        {
            "id": 483,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 10, amount: 1}],
            "lat": -520.1091995239258, "lng": 713.5853704637098,
            "mobIcon": 11
        },
        {
            "id": 484,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 10, amount: 2}, {id: 9, amount: 1}],
            "lat": -514.75, "lng": 696.1946519524618,
            "mobIcon": 11
        },
        {
            "id": 485,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 9, amount: 1}],
            "lat": -500.55077362060547, "lng": 701.9423675588922,
            "mobIcon": 12
        },
        {
            "id": 486,
            "name": "Camp",
            "mobs": [{id: 2, amount: 1}],
            "lat": -541.5637130737305, "lng": 743.0886324145798,
            "mobIcon": 2
        },
        {
            "id": 487,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -683.4571990966797, "lng": 815.7554581387946,
            "mobIcon": 10
        },
        {
            "id": 488,
            "name": "Camp",
            "mobs": [{id: 3, amount: 1}],
            "lat": -693.875, "lng": 830.8433361629882,
            "mobIcon": 3
        },
        {
            "id": 489,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -691.375, "lng": 853.7217317487266,
            "mobIcon": 15
        },
        {
            "id": 490,
            "name": "Camp",
            "mobs": [{id: 5, amount: 1}],
            "lat": -786.25, "lng": 941.1901528013582,
            "mobIcon": 5
        },
        {
            "id": 491,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -705.125, "lng": 826.2244057724957,
            "mobIcon": 13
        },
        {
            "id": 492,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -658, "lng": 891.0939728353142,
            "mobIcon": 13
        },
        {
            "id": 493,
            "name": "Camp",
            "mobs": [{id: 13, amount: 4}],
            "lat": -729.4213943481445, "lng": 876.37283199809,
            "mobIcon": 13
        },
        {
            "id": 494,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -758.8968353271484, "lng": 887.0466879775042,
            "mobIcon": 13
        },
        {
            "id": 495,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -738.625, "lng": 870.0981748726656,
            "mobIcon": 13
        },
        {
            "id": 496,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -759.4520416259766, "lng": 867.5944012627334,
            "mobIcon": 9
        },
        {
            "id": 497,
            "name": "Camp",
            "mobs": [{id: 2, amount: 1}],
            "lat": -743.8439254760742, "lng": 880.3178215195246,
            "mobIcon": 2
        },
        {
            "id": 498,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -767, "lng": 910.6815789473684,
            "mobIcon": 15
        },
        {
            "id": 499,
            "name": "Camp",
            "mobs": [{id: 1, amount: 4}],
            "lat": -750.9302062988281, "lng": 906.7017820193124,
            "mobIcon": 1
        },
        {
            "id": 500,
            "name": "Camp",
            "mobs": [{id: 4, amount: 1}],
            "lat": -723.875, "lng": 957.7196519524618,
            "mobIcon": 4
        },
        {
            "id": 501,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -738, "lng": 987.4646859083192,
            "mobIcon": 15
        },
        {
            "id": 502,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -732.875, "lng": 993.717869269949,
            "mobIcon": 13
        },
        {
            "id": 503,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -717.5, "lng": 982.716595925297,
            "mobIcon": 13
        },
        {
            "id": 504,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -720.5, "lng": 995.4656196943972,
            "mobIcon": 13
        },
        {
            "id": 505,
            "name": "Camp",
            "mobs": [{id: 7, amount: 3}],
            "lat": -725.875, "lng": 990.211544991511,
            "mobIcon": 7
        },
        {
            "id": 506,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}, {id: 11, amount: 2}, {id: 10, amount: 1}],
            "lat": -702.75, "lng": 996.1774193548388,
            "mobIcon": 11
        },
        {
            "id": 507,
            "name": "Camp",
            "mobs": [{id: 11, amount: 2}, {id: 9, amount: 1}],
            "lat": -677.8845176696777, "lng": 991.5886841442064,
            "mobIcon": 12
        },
        {
            "id": 508,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -673.142822265625, "lng": 931.2715032762096,
            "mobIcon": 10
        },
        {
            "id": 509,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -684, "lng": 951.217572156197,
            "mobIcon": 10
        },
        {
            "id": 510,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 10, amount: 1}],
            "lat": -668.25, "lng": 965.3463921901528,
            "mobIcon": 11
        },
        {
            "id": 511,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 12, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -689, "lng": 964.3452886247878,
            "mobIcon": 11
        },
        {
            "id": 512,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -694.75, "lng": 975.0913412563667,
            "mobIcon": 12
        },
        {
            "id": 513,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -425, "lng": 618.7250848896435,
            "mobIcon": 12
        },
        {
            "id": 514,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -446.49292755126953, "lng": 541.60300794514,
            "mobIcon": 12
        },
        {
            "id": 515,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -464.91636657714844, "lng": 620.9963815789474,
            "mobIcon": 12
        },
        {
            "id": 516,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -496.875, "lng": 543.989558573854,
            "mobIcon": 12
        },
        {
            "id": 517,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 12, amount: 1}, {id: 10, amount: 2}],
            "lat": -503.93585205078125, "lng": 597.6920618235356,
            "mobIcon": 11
        },
        {
            "id": 518,
            "name": "Camp",
            "mobs": [{id: 10, amount: 2}, {id: 9, amount: 1}],
            "lat": -455.1770553588867, "lng": 552.6025718909168,
            "mobIcon": 10
        },
        {
            "id": 519,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 9, amount: 1}],
            "lat": -449.01756286621094, "lng": 579.870435523663,
            "mobIcon": 12
        },
        {
            "id": 520,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -446.98045349121094, "lng": 630.6423857969015,
            "mobIcon": 10
        },
        {
            "id": 521,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}, {id: 13, amount: 3}],
            "lat": -483.802490234375, "lng": 615.5082263370118,
            "mobIcon": 7
        },
        {
            "id": 522,
            "name": "Camp",
            "mobs": [{id: 13, amount: 4}],
            "lat": -427.75, "lng": 629.9462648556876,
            "mobIcon": 13
        },
        {
            "id": 523,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -417.61366271972656, "lng": 606.1377924713497,
            "mobIcon": 13
        },
        {
            "id": 524,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -438.3794479370117, "lng": 605.3614259470501,
            "mobIcon": 13
        },
        {
            "id": 525,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -421.875, "lng": 562.8532258064516,
            "mobIcon": 13
        },
        {
            "id": 526,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -472.75, "lng": 599.2232173174873,
            "mobIcon": 13
        },
        {
            "id": 527,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -456.2849426269531, "lng": 534.53005856059,
            "mobIcon": 13
        },
        {
            "id": 528,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -484.80360412597656, "lng": 557.1281150519949,
            "mobIcon": 13
        },
        {
            "id": 529,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -483.625, "lng": 638.0887521222411,
            "mobIcon": 13
        },
        {
            "id": 530,
            "name": "Camp",
            "mobs": [{id: 10, amount: 2}],
            "lat": -477.0690612792969, "lng": 670.4536051570458,
            "mobIcon": 10
        },
        {
            "id": 531,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -445.3332748413086, "lng": 665.4445982332343,
            "mobIcon": 9
        },
        {
            "id": 532,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -501.375, "lng": 626.8455857385399,
            "mobIcon": 10
        },
        {
            "id": 533,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -494.4400863647461, "lng": 596.2674415057301,
            "mobIcon": 9
        },
        {
            "id": 534,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -515.422004699707, "lng": 545.8564516129032,
            "mobIcon": 9
        },
        {
            "id": 535,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -499.57271575927734, "lng": 533.009630663731,
            "mobIcon": 9
        },
        {
            "id": 536,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -523.9707183837891, "lng": 605.5998998567487,
            "mobIcon": 10
        },
        {
            "id": 537,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -543.875, "lng": 670.7144736842106,
            "mobIcon": 10
        },
        {
            "id": 538,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -538.5, "lng": 675.0933361629882,
            "mobIcon": 15
        },
        {
            "id": 539,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -566.5, "lng": 688.9626910016977,
            "mobIcon": 15
        },
        {
            "id": 540,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -600.8691482543945, "lng": 644.2240076864919,
            "mobIcon": 15
        },
        {
            "id": 541,
            "name": "Camp",
            "mobs": [{id: 1, amount: 1}],
            "lat": -545.39990234375, "lng": 622.4278466216574,
            "mobIcon": 1
        },
        {
            "id": 542,
            "name": "Camp",
            "mobs": [{id: 1, amount: 1}],
            "lat": -567.9057846069336, "lng": 538.4525622745119,
            "mobIcon": 1
        },
        {
            "id": 543,
            "name": "Camp",
            "mobs": [{id: 3, amount: 1}],
            "lat": -585.4564056396484, "lng": 530.6036926994907,
            "mobIcon": 3
        },
        {
            "id": 544,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -552.803524017334, "lng": 549.3030931663837,
            "mobIcon": 13
        },
        {
            "id": 545,
            "name": "Camp",
            "mobs": [{id: 14, amount: 2}],
            "lat": -553.8334426879883, "lng": 611.2705910441426,
            "mobIcon": 14
        },
        {
            "id": 546,
            "name": "Camp",
            "mobs": [{id: 14, amount: 2}],
            "lat": -535.1798248291016, "lng": 631.5950764006791,
            "mobIcon": 14
        },
        {
            "id": 547,
            "name": "Camp",
            "mobs": [{id: 14, amount: 2}],
            "lat": -563.3627243041992, "lng": 622.7435016314728,
            "mobIcon": 14
        },
        {
            "id": 548,
            "name": "Camp",
            "mobs": [{id: 15, amount: 2}],
            "lat": -590.816535949707, "lng": 589.9704060112479,
            "mobIcon": 15
        },
        {
            "id": 549,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}, {id: 9, amount: 1}],
            "lat": -535.1847686767578, "lng": 567.7356297750424,
            "mobIcon": 13
        },
        {
            "id": 550,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -562.9945755004883, "lng": 600.0732057114814,
            "mobIcon": 10
        },
        {
            "id": 551,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -569.0673904418945, "lng": 588.7651372161503,
            "mobIcon": 10
        },
        {
            "id": 552,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -587.7322273254395, "lng": 656.2063458324491,
            "mobIcon": 10
        },
        {
            "id": 553,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -579.3172073364258, "lng": 677.9739266102504,
            "mobIcon": 12
        },
        {
            "id": 554,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}, {id: 13, amount: 2}],
            "lat": -604.541187286377, "lng": 704.4080757905348,
            "mobIcon": 15
        },
        {
            "id": 555,
            "name": "Camp",
            "mobs": [{id: 4, amount: 1}],
            "lat": -611.6793060302734, "lng": 692.3611606669142,
            "mobIcon": 4
        },
        {
            "id": 556,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -612.1032638549805, "lng": 562.6096996365662,
            "mobIcon": 10
        },
        {
            "id": 557,
            "name": "Camp",
            "mobs": [{id: 13, amount: 4}],
            "lat": -613.3857192993164, "lng": 630.83046875,
            "mobIcon": 13
        },
        {
            "id": 558,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -619.7774124145508, "lng": 656.0777741670204,
            "mobIcon": 13
        },
        {
            "id": 559,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -640.7991333007812, "lng": 621.2386241245756,
            "mobIcon": 13
        },
        {
            "id": 560,
            "name": "Camp",
            "mobs": [{id: 14, amount: 3}],
            "lat": -608.7671890258789, "lng": 675.0728167444822,
            "mobIcon": 14
        },
        {
            "id": 561,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -627.625, "lng": 681.0948641765705,
            "mobIcon": 10
        },
        {
            "id": 562,
            "name": "Camp",
            "mobs": [{id: 10, amount: 2}],
            "lat": -634.7185745239258, "lng": 634.0104669593591,
            "mobIcon": 10
        },
        {
            "id": 563,
            "name": "Camp",
            "mobs": [{id: 10, amount: 2}],
            "lat": -618.8711090087891, "lng": 641.7142064144737,
            "mobIcon": 10
        },
        {
            "id": 564,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -624.25, "lng": 662.0929966044142,
            "mobIcon": 10
        },
        {
            "id": 565,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -630.6193084716797, "lng": 659.5865413439092,
            "mobIcon": 10
        },
        {
            "id": 566,
            "name": "Camp",
            "mobs": [{id: 14, amount: 3}],
            "lat": -631.4092559814453, "lng": 708.0679329371817,
            "mobIcon": 14
        },
        {
            "id": 567,
            "name": "Camp",
            "mobs": [{id: 13, amount: 5}],
            "lat": -583.6471557617188, "lng": 727.8529578735145,
            "mobIcon": 13
        },
        {
            "id": 568,
            "name": "Camp",
            "mobs": [{id: 13, amount: 4}],
            "lat": -664.1895751953125, "lng": 715.456954981961,
            "mobIcon": 13
        },
        {
            "id": 569,
            "name": "Camp",
            "mobs": [{id: 13, amount: 4}],
            "lat": -670.1463623046875, "lng": 711.0614773450764,
            "mobIcon": 13
        },
        {
            "id": 570,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -695.7515106201172, "lng": 746.5411744614813,
            "mobIcon": 13
        },
        {
            "id": 571,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -696.75, "lng": 755.3497877758914,
            "mobIcon": 13
        },
        {
            "id": 572,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -693.125, "lng": 762.3503395585739,
            "mobIcon": 13
        },
        {
            "id": 573,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -676.3928070068359, "lng": 765.932767402377,
            "mobIcon": 13
        },
        {
            "id": 574,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -664.9534606933594, "lng": 750.7332220262097,
            "mobIcon": 13
        },
        {
            "id": 575,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -662.4221343994141, "lng": 744.2222099161714,
            "mobIcon": 13
        },
        {
            "id": 576,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -658.0504035949707, "lng": 753.6886572845925,
            "mobIcon": 13
        },
        {
            "id": 577,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -660.5, "lng": 760.3496604414262,
            "mobIcon": 13
        },
        {
            "id": 578,
            "name": "Camp",
            "mobs": [{id: 7, amount: 2}],
            "lat": -685.6555938720703, "lng": 754.968039049236,
            "mobIcon": 7
        },
        {
            "id": 579,
            "name": "Camp",
            "mobs": [{id: 14, amount: 2}],
            "lat": -702.625, "lng": 725.8442275042445,
            "mobIcon": 14
        },
        {
            "id": 580,
            "name": "Camp",
            "mobs": [{id: 14, amount: 3}],
            "lat": -679.2035827636719, "lng": 741.1562039075764,
            "mobIcon": 14
        },
        {
            "id": 581,
            "name": "Camp",
            "mobs": [{id: 4, amount: 1}],
            "lat": -679.1461944580078, "lng": 708.7952942619906,
            "mobIcon": 4
        },
        {
            "id": 582,
            "name": "Camp",
            "mobs": [{id: 1, amount: 1}],
            "lat": -665.3963623046875, "lng": 659.9747453310696,
            "mobIcon": 1
        },
        {
            "id": 583,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -683.6229400634766, "lng": 640.2785172830008,
            "mobIcon": 9
        },
        {
            "id": 584,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -715.5102844238281, "lng": 693.4760355873302,
            "mobIcon": 9
        },
        {
            "id": 585,
            "name": "Camp",
            "mobs": [{id: 8, amount: 2}],
            "lat": -888.7134399414062, "lng": 501.19725169779286,
            "mobIcon": 8
        },
        {
            "id": 586,
            "name": "Camp",
            "mobs": [{id: 14, amount: 3}],
            "lat": -918.797981262207, "lng": 467.18961295628185,
            "mobIcon": 14
        },
        {
            "id": 587,
            "name": "Camp",
            "mobs": [{id: 14, amount: 3}],
            "lat": -924.5, "lng": 481.0991935483871,
            "mobIcon": 14
        },
        {
            "id": 588,
            "name": "Camp",
            "mobs": [{id: 14, amount: 4}],
            "lat": -919.75, "lng": 476.9766977928693,
            "mobIcon": 14
        },
        {
            "id": 589,
            "name": "Camp",
            "mobs": [{id: 14, amount: 6}],
            "lat": -892.3209533691406, "lng": 443.21289675960315,
            "mobIcon": 14
        },
        {
            "id": 590,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -890.375, "lng": 423.1057724957555,
            "mobIcon": 14
        },
        {
            "id": 591,
            "name": "Camp",
            "mobs": [{id: 3, amount: 1}],
            "lat": -911.5853118896484, "lng": 379.3334203231112,
            "mobIcon": 3
        },
        {
            "id": 592,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}],
            "lat": -886.2745246887207, "lng": 450.5652816280242,
            "mobIcon": 7
        },
        {
            "id": 593,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}, {id: 10, amount: 2}],
            "lat": -915.5, "lng": 417.95016977928697,
            "mobIcon": 7
        },
        {
            "id": 594,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -915.875, "lng": 443.97678268251275,
            "mobIcon": 13
        },
        {
            "id": 595,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -953.0997467041016, "lng": 403.0610462648557,
            "mobIcon": 13
        },
        {
            "id": 596,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -938.375, "lng": 411.8527164685908,
            "mobIcon": 13
        },
        {
            "id": 597,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -900.375, "lng": 484.9706281833616,
            "mobIcon": 13
        },
        {
            "id": 598,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -923.447265625, "lng": 357.79333019418505,
            "mobIcon": 13
        },
        {
            "id": 599,
            "name": "Camp",
            "mobs": [{id: 8, amount: 2}],
            "lat": -954.9937362670898, "lng": 374.6174234335208,
            "mobIcon": 8
        },
        {
            "id": 600,
            "name": "Camp",
            "mobs": [{id: 14, amount: 4}],
            "lat": -897.6005401611328, "lng": 269.82059684714557,
            "mobIcon": 14
        },
        {
            "id": 601,
            "name": "Camp",
            "mobs": [{id: 14, amount: 2}],
            "lat": -906.375, "lng": 316.84630730050935,
            "mobIcon": 14
        },
        {
            "id": 602,
            "name": "Camp",
            "mobs": [{id: 14, amount: 2}],
            "lat": -901.5, "lng": 324.0915959252971,
            "mobIcon": 14
        },
        {
            "id": 603,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -879, "lng": 276.1049235993209,
            "mobIcon": 13
        },
        {
            "id": 604,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -883.25, "lng": 328.8442699490662,
            "mobIcon": 13
        },
        {
            "id": 605,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}],
            "lat": -883.5, "lng": 339.7241935483871,
            "mobIcon": 12
        },
        {
            "id": 606,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -891.5, "lng": 292.3889368235357,
            "mobIcon": 10
        },
        {
            "id": 607,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}],
            "lat": -918.875, "lng": 301.60424448217316,
            "mobIcon": 11
        },
        {
            "id": 608,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}],
            "lat": -858.125, "lng": 306.7265280135823,
            "mobIcon": 11
        },
        {
            "id": 609,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}],
            "lat": -849.375, "lng": 320.2250424448217,
            "mobIcon": 11
        },
        {
            "id": 610,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -837.0955429077148, "lng": 281.4969656926464,
            "mobIcon": 14
        },
        {
            "id": 611,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}, {id: 10, amount: 1}],
            "lat": -919.75, "lng": 285.9778862478778,
            "mobIcon": 7
        },
        {
            "id": 612,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}],
            "lat": -917.375, "lng": 279.1057300509338,
            "mobIcon": 7
        },
        {
            "id": 613,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 10, amount: 2}],
            "lat": -910.25, "lng": 292.229117147708,
            "mobIcon": 11
        },
        {
            "id": 614,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -894.5, "lng": 359.3462224108659,
            "mobIcon": 11
        },
        {
            "id": 615,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}, {id: 11, amount: 1}, {id: 12, amount: 1}, {id: 10, amount: 1}],
            "lat": -843.375, "lng": 293.60420203735146,
            "mobIcon": 7
        },
        {
            "id": 616,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 12, amount: 1}],
            "lat": -856.5, "lng": 287.48259762309,
            "mobIcon": 11
        },
        {
            "id": 617,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -829.0737457275391, "lng": 320.31169089558574,
            "mobIcon": 13
        },
        {
            "id": 618,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -797.5215759277344, "lng": 281.9085668903862,
            "mobIcon": 13
        },
        {
            "id": 619,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -777, "lng": 389.33900679117147,
            "mobIcon": 13
        },
        {
            "id": 620,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -809.7712364196777, "lng": 301.6486091030879,
            "mobIcon": 13
        },
        {
            "id": 621,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -843.6389541625977, "lng": 353.26115320591043,
            "mobIcon": 13
        },
        {
            "id": 622,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -763.5592727661133, "lng": 307.7196091760399,
            "mobIcon": 13
        },
        {
            "id": 623,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -813, "lng": 289.8593803056027,
            "mobIcon": 15
        },
        {
            "id": 624,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}],
            "lat": -781.75, "lng": 307.1070882852292,
            "mobIcon": 7
        },
        {
            "id": 625,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -824.125, "lng": 363.4842529711375,
            "mobIcon": 15
        },
        {
            "id": 626,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}],
            "lat": -769.3944549560547, "lng": 313.7236304912988,
            "mobIcon": 11
        },
        {
            "id": 627,
            "name": "Camp",
            "mobs": [{id: 3, amount: 1}],
            "lat": -786.875, "lng": 368.46570458404074,
            "mobIcon": 3
        },
        {
            "id": 628,
            "name": "Camp",
            "mobs": [{id: 1, amount: 1}],
            "lat": -750.6912612915039, "lng": 334.10332860250423,
            "mobIcon": 1
        },
        {
            "id": 629,
            "name": "Camp",
            "mobs": [{id: 1, amount: 1}],
            "lat": -741, "lng": 351.0963921901528,
            "mobIcon": 1
        },
        {
            "id": 630,
            "name": "Camp",
            "mobs": [{id: 1, amount: 1}],
            "lat": -726.6635208129883, "lng": 323.5555347384338,
            "mobIcon": 1
        },
        {
            "id": 631,
            "name": "Camp",
            "mobs": [{id: 2, amount: 1}],
            "lat": -736.7687644958496, "lng": 325.6247134974533,
            "mobIcon": 2
        },
        {
            "id": 632,
            "name": "Camp",
            "mobs": [{id: 4, amount: 1}],
            "lat": -707.75, "lng": 305.8596349745331,
            "mobIcon": 4
        },
        {
            "id": 633,
            "name": "Camp",
            "mobs": [{id: 3, amount: 1}],
            "lat": -693.5, "lng": 307.98200339558576,
            "mobIcon": 3
        },
        {
            "id": 634,
            "name": "Camp",
            "mobs": [{id: 8, amount: 1}],
            "lat": -720.9666213989258, "lng": 344.90354795601655,
            "mobIcon": 8
        },
        {
            "id": 635,
            "name": "Camp",
            "mobs": [{id: 8, amount: 2}],
            "lat": -719.75, "lng": 358.72275042444824,
            "mobIcon": 8
        },
        {
            "id": 636,
            "name": "Camp",
            "mobs": [{id: 8, amount: 3}],
            "lat": -810.625, "lng": 338.4801358234295,
            "mobIcon": 8
        },
        {
            "id": 637,
            "name": "Camp",
            "mobs": [{id: 14, amount: 3}],
            "lat": -750.5956192016602, "lng": 323.99170767455433,
            "mobIcon": 14
        },
        {
            "id": 638,
            "name": "Camp",
            "mobs": [{id: 10, amount: 3}, {id: 9, amount: 1}],
            "lat": -745, "lng": 363.59957555178266,
            "mobIcon": 10
        },
        {
            "id": 639,
            "name": "Camp",
            "mobs": [{id: 7, amount: 3}, {id: 10, amount: 2}],
            "lat": -788.3411102294922, "lng": 359.8476655348048,
            "mobIcon": 7
        },
        {
            "id": 640,
            "name": "Camp",
            "mobs": [{id: 2, amount: 1}, {id: 9, amount: 1}],
            "lat": -696.75, "lng": 251.96018675721564,
            "mobIcon": 2
        },
        {
            "id": 641,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}, {id: 9, amount: 1}],
            "lat": -726.5, "lng": 285.71990662139217,
            "mobIcon": 14
        },
        {
            "id": 642,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}, {id: 13, amount: 2}],
            "lat": -711.7120971679688, "lng": 274.7349750305072,
            "mobIcon": 13
        },
        {
            "id": 643,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -708.9119415283203, "lng": 287.5378733817912,
            "mobIcon": 13
        },
        {
            "id": 644,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -698.125, "lng": 212.4886247877759,
            "mobIcon": 13
        },
        {
            "id": 645,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -672.1487464904785, "lng": 264.88992963444394,
            "mobIcon": 14
        },
        {
            "id": 646,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -701.2230072021484, "lng": 229.8150752069185,
            "mobIcon": 14
        },
        {
            "id": 647,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -706.5376586914062, "lng": 194.98738974294355,
            "mobIcon": 14
        },
        {
            "id": 648,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -723.686279296875, "lng": 250.33630051928589,
            "mobIcon": 14
        },
        {
            "id": 649,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -728.9752731323242, "lng": 232.649085944132,
            "mobIcon": 14
        },
        {
            "id": 650,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -738.7929916381836, "lng": 203.07540504960738,
            "mobIcon": 14
        },
        {
            "id": 651,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -750.625, "lng": 196.60759762309,
            "mobIcon": 14
        },
        {
            "id": 652,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -756.875, "lng": 224.2361205432937,
            "mobIcon": 14
        },
        {
            "id": 653,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -745.5064239501953, "lng": 224.54967428573323,
            "mobIcon": 14
        },
        {
            "id": 654,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -752.25, "lng": 253.72865025466893,
            "mobIcon": 14
        },
        {
            "id": 655,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -722.875, "lng": 268.5974108658744,
            "mobIcon": 9
        },
        {
            "id": 656,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -735.8837814331055, "lng": 166.9579595646753,
            "mobIcon": 9
        },
        {
            "id": 657,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -761.8701248168945, "lng": 190.5226859282152,
            "mobIcon": 13
        },
        {
            "id": 658,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 9, amount: 1}],
            "lat": -774.0646591186523, "lng": 268.72862273185484,
            "mobIcon": 11
        },
        {
            "id": 659,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}, {id: 13, amount: 1}],
            "lat": -793.0766754150391, "lng": 193.28069083921372,
            "mobIcon": 10
        },
        {
            "id": 660,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 10, amount: 1}],
            "lat": -808.25, "lng": 114.73985568760611,
            "mobIcon": 12
        },
        {
            "id": 661,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -805.75, "lng": 223.71943972835314,
            "mobIcon": 13
        },
        {
            "id": 662,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -845.75, "lng": 242.22211375212225,
            "mobIcon": 13
        },
        {
            "id": 663,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -819.1664352416992, "lng": 235.73849281090833,
            "mobIcon": 13
        },
        {
            "id": 664,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -813.4779739379883, "lng": 225.13382603591893,
            "mobIcon": 9
        },
        {
            "id": 665,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -829.5599212646484, "lng": 195.32435536926994,
            "mobIcon": 9
        },
        {
            "id": 666,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -828.7061996459961, "lng": 152.09837234056664,
            "mobIcon": 9
        },
        {
            "id": 667,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -793.125, "lng": 164.1096349745331,
            "mobIcon": 14
        },
        {
            "id": 668,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -810.875, "lng": 151.48391341256365,
            "mobIcon": 14
        },
        {
            "id": 669,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -818.6040649414062, "lng": 137.24924710181452,
            "mobIcon": 14
        },
        {
            "id": 670,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -832.125, "lng": 175.2266977928693,
            "mobIcon": 14
        },
        {
            "id": 671,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -822.4295997619629, "lng": 183.71481863128713,
            "mobIcon": 14
        },
        {
            "id": 672,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -822.6931228637695, "lng": 195.44644309077887,
            "mobIcon": 14
        },
        {
            "id": 673,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -843.375, "lng": 108.48578098471987,
            "mobIcon": 14
        },
        {
            "id": 674,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -845.9057464599609, "lng": 134.2005054415588,
            "mobIcon": 14
        },
        {
            "id": 675,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -896.25, "lng": 179.98293718166383,
            "mobIcon": 14
        },
        {
            "id": 676,
            "name": "Camp",
            "mobs": [{id: 14, amount: 2}],
            "lat": -870.077018737793, "lng": 192.06146491007004,
            "mobIcon": 14
        },
    ]
};
