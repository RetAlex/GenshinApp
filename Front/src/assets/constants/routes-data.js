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

export const camps = [
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
    }
];
