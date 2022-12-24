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
        {
            "id": 677,
            "name": "Camp",
            "mobs": [{id: 24, amount: 1}],
            "lat": -813.75, "lng": 144.5994482173175,
            "mobIcon": 24
        },
        {
            "id": 678,
            "name": "Camp",
            "mobs": [{id: 24, amount: 1}],
            "lat": -864.6386184692383, "lng": 167.56173135080647,
            "mobIcon": 24
        },
        {
            "id": 679,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 9, amount: 1}],
            "lat": -838.25, "lng": 103.1078947368421,
            "mobIcon": 12
        },
        {
            "id": 680,
            "name": "Camp",
            "mobs": [{id: 8, amount: 3}, {id: 14, amount: 1}],
            "lat": -827, "lng": 80.4853140916808,
            "mobIcon": 8
        },
        {
            "id": 681,
            "name": "Camp",
            "mobs": [{id: 16, amount: 1}, {id: 8, amount: 3}, {id: 14, amount: 1}],
            "lat": -853.5565643310547, "lng": 160.93525324304966,
            "mobIcon": 16
        },
        {
            "id": 682,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 9, amount: 1}, {id: 13, amount: 1}],
            "lat": -877.4111175537109, "lng": 77.43166358831175,
            "mobIcon": 11
        },
        {
            "id": 683,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 9, amount: 1}, {id: 13, amount: 1}],
            "lat": -897.2272644042969, "lng": 70.5897586116564,
            "mobIcon": 11
        },
        {
            "id": 684,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 12, amount: 1}, {id: 10, amount: 2}],
            "lat": -924.375, "lng": 119.59668930390492,
            "mobIcon": 11
        },
        {
            "id": 685,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 9, amount: 1}],
            "lat": -938.125, "lng": 91.36341256366723,
            "mobIcon": 11
        },
        {
            "id": 686,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 9, amount: 1}],
            "lat": -942.75, "lng": 110.2356960950764,
            "mobIcon": 11
        },
        {
            "id": 687,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -862.8903732299805, "lng": 83.9869710977292,
            "mobIcon": 10
        },
        {
            "id": 688,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -902.4299545288086, "lng": 93.98416824729415,
            "mobIcon": 10
        },
        {
            "id": 689,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -891, "lng": 91.73387096774194,
            "mobIcon": 9
        },
        {
            "id": 690,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -887.875, "lng": 85.73425297113752,
            "mobIcon": 13
        },
        {
            "id": 691,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -886.5402603149414, "lng": 97.62598816850594,
            "mobIcon": 13
        },
        {
            "id": 692,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -910.3096542358398, "lng": 121.83287566983235,
            "mobIcon": 13
        },
        {
            "id": 693,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -958.125, "lng": 146.34855687606114,
            "mobIcon": 13
        },
        {
            "id": 694,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -922.5, "lng": 190.9669779286927,
            "mobIcon": 13
        },
        {
            "id": 695,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -897.5237579345703, "lng": 187.68210096893569,
            "mobIcon": 15
        },
        {
            "id": 696,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -912.1393127441406, "lng": 161.70025251352928,
            "mobIcon": 15
        },
        {
            "id": 697,
            "name": "Camp",
            "mobs": [{id: 15, amount: 3}],
            "lat": -901.75, "lng": 211.3440152801358,
            "mobIcon": 15
        },
        {
            "id": 698,
            "name": "Camp",
            "mobs": [{id: 1, amount: 2}],
            "lat": -915.75, "lng": 118.98348896434635,
            "mobIcon": 1
        },
        {
            "id": 699,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -928.5, "lng": 175.98089983022072,
            "mobIcon": 14
        },
        {
            "id": 700,
            "name": "Camp",
            "mobs": [{id: 6, amount: 1}],
            "lat": -952.2350692749023, "lng": 187.80651544593593,
            "mobIcon": 6
        },
        {
            "id": 701,
            "name": "Camp",
            "mobs": [{id: 13, amount: 4}],
            "lat": -851.7378845214844, "lng": 502.20391155560276,
            "mobIcon": 13
        },
        {
            "id": 702,
            "name": "Camp",
            "mobs": [{id: 13, amount: 5}],
            "lat": -788.50341796875, "lng": 417.6497486470713,
            "mobIcon": 13
        },
        {
            "id": 703,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -848, "lng": 381.1105687606112,
            "mobIcon": 13
        },
        {
            "id": 704,
            "name": "Camp",
            "mobs": [{id: 14, amount: 3}],
            "lat": -838.1294784545898, "lng": 406.8932705061545,
            "mobIcon": 14
        },
        {
            "id": 705,
            "name": "Camp",
            "mobs": [{id: 14, amount: 5}],
            "lat": -836.625, "lng": 483.4764855687606,
            "mobIcon": 14
        },
        {
            "id": 706,
            "name": "Camp",
            "mobs": [{id: 14, amount: 5}],
            "lat": -793.2790145874023, "lng": 440.78051666622457,
            "mobIcon": 14
        },
        {
            "id": 707,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 10, amount: 2}, {id: 9, amount: 3}],
            "lat": -804.9581680297852, "lng": 420.66199911794354,
            "mobIcon": 11
        },
        {
            "id": 708,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 10, amount: 3}],
            "lat": -815.5, "lng": 500.9355687606112,
            "mobIcon": 10
        },
        {
            "id": 709,
            "name": "Camp",
            "mobs": [{id: 6, amount: 1}, {id: 10, amount: 2}],
            "lat": -794.1442832946777, "lng": 404.55030308255516,
            "mobIcon": 6
        },
        {
            "id": 710,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -803.127571105957, "lng": 390.5735187420416,
            "mobIcon": 10
        },
        {
            "id": 711,
            "name": "Camp",
            "mobs": [{id: 2, amount: 1}],
            "lat": -838.0742530822754, "lng": 391.39093720155984,
            "mobIcon": 2
        },
        {
            "id": 712,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -824.5921249389648, "lng": 413.5838454345289,
            "mobIcon": 15
        },
        {
            "id": 713,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}],
            "lat": -797.4487609863281, "lng": 418.4754668930391,
            "mobIcon": 7
        },
        {
            "id": 714,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}],
            "lat": -843.5428619384766, "lng": 416.8930302618315,
            "mobIcon": 7
        },
        {
            "id": 715,
            "name": "Camp",
            "mobs": [{id: 1, amount: 1}],
            "lat": -836.0368881225586, "lng": 522.9050943734084,
            "mobIcon": 1
        },
        {
            "id": 716,
            "name": "Camp",
            "mobs": [{id: 2, amount: 1}],
            "lat": -793.875, "lng": 503.1004244482173,
            "mobIcon": 2
        },
        {
            "id": 717,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}],
            "lat": -775.875, "lng": 514.976740237691,
            "mobIcon": 11
        },
        {
            "id": 718,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}],
            "lat": -811.2716598510742, "lng": 518.4396517535017,
            "mobIcon": 11
        },
        {
            "id": 719,
            "name": "Camp",
            "mobs": [{id: 5, amount: 1}],
            "lat": -737.75, "lng": 459.3580220713073,
            "mobIcon": 5
        },
        {
            "id": 720,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}],
            "lat": -743.5, "lng": 505.8443548387097,
            "mobIcon": 12
        },
        {
            "id": 721,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}],
            "lat": -687.875, "lng": 542.4648981324278,
            "mobIcon": 11
        },
        {
            "id": 722,
            "name": "Camp",
            "mobs": [{id: 24, amount: 1}],
            "lat": -679, "lng": 513.7259337860781,
            "mobIcon": 24
        },
        {
            "id": 723,
            "name": "Camp",
            "mobs": [{id: 5, amount: 1}],
            "lat": -682.7446136474609, "lng": 490.0892913041172,
            "mobIcon": 5
        },
        {
            "id": 724,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -695.5, "lng": 495.8537775891341,
            "mobIcon": 10
        },
        {
            "id": 725,
            "name": "Camp",
            "mobs": [{id: 3, amount: 1}],
            "lat": -681.5, "lng": 402.2098471986418,
            "mobIcon": 3
        },
        {
            "id": 726,
            "name": "Camp",
            "mobs": [{id: 1, amount: 1}],
            "lat": -699.5, "lng": 412.4677843803056,
            "mobIcon": 1
        },
        {
            "id": 727,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -702.0271301269531, "lng": 490.44550383329795,
            "mobIcon": 13
        },
        {
            "id": 728,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -748.8426818847656, "lng": 465.23078940736417,
            "mobIcon": 13
        },
        {
            "id": 729,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -728.9243621826172, "lng": 424.7427273450764,
            "mobIcon": 13
        },
        {
            "id": 730,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -765.898551940918, "lng": 467.1495316147602,
            "mobIcon": 13
        },
        {
            "id": 731,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -731.25, "lng": 452.8533106960951,
            "mobIcon": 13
        },
        {
            "id": 732,
            "name": "Camp",
            "mobs": [{id: 13, amount: 5}],
            "lat": -733.0734214782715, "lng": 475.0200041118421,
            "mobIcon": 13
        },
        {
            "id": 733,
            "name": "Camp",
            "mobs": [{id: 13, amount: 4}],
            "lat": -710.5394744873047, "lng": 425.56637839558573,
            "mobIcon": 13
        },
        {
            "id": 734,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -672.324951171875, "lng": 461.6151411953523,
            "mobIcon": 13
        },
        {
            "id": 735,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -669.9512214660645, "lng": 469.8521222410866,
            "mobIcon": 13
        },
        {
            "id": 736,
            "name": "Camp",
            "mobs": [{id: 14, amount: 3}],
            "lat": -770.9220962524414, "lng": 457.8398228591893,
            "mobIcon": 14
        },
        {
            "id": 737,
            "name": "Camp",
            "mobs": [{id: 14, amount: 3}],
            "lat": -754.0252838134766, "lng": 426.38000285176145,
            "mobIcon": 14
        },
        {
            "id": 738,
            "name": "Camp",
            "mobs": [{id: 8, amount: 2}],
            "lat": -714.875, "lng": 406.60774651156623,
            "mobIcon": 8
        },
        {
            "id": 739,
            "name": "Camp",
            "mobs": [{id: 8, amount: 3}],
            "lat": -707.7458877563477, "lng": 383.559037099427,
            "mobIcon": 8
        },
        {
            "id": 740,
            "name": "Camp",
            "mobs": [{id: 8, amount: 2}, {id: 10, amount: 2}],
            "lat": -696.25, "lng": 421.4787775891341,
            "mobIcon": 8
        },
        {
            "id": 741,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 15, amount: 2}, {id: 10, amount: 2}],
            "lat": -753.5676193237305, "lng": 510.46579378448644,
            "mobIcon": 15
        },
        {
            "id": 742,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}, {id: 13, amount: 1}],
            "lat": -644.4377822875977, "lng": 454.9185324702886,
            "mobIcon": 15
        },
        {
            "id": 743,
            "name": "Camp",
            "mobs": [{id: 14, amount: 3}],
            "lat": -635.5, "lng": 452.2279286926995,
            "mobIcon": 14
        },
        {
            "id": 744,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -647.1242523193359, "lng": 483.30575790534806,
            "mobIcon": 10
        },
        {
            "id": 745,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -615.8171539306641, "lng": 499.4519889378183,
            "mobIcon": 13
        },
        {
            "id": 746,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -572.125, "lng": 467.9771222410866,
            "mobIcon": 13
        },
        {
            "id": 747,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -677.5691299438477, "lng": 354.646714837118,
            "mobIcon": 13
        },
        {
            "id": 748,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -625.5777206420898, "lng": 263.79930397124366,
            "mobIcon": 13
        },
        {
            "id": 749,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -610, "lng": 309.10526315789474,
            "mobIcon": 13
        },
        {
            "id": 750,
            "name": "Camp",
            "mobs": [{id: 24, amount: 1}],
            "lat": -627.625, "lng": 289.35747028862477,
            "mobIcon": 24
        },
        {
            "id": 751,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -633.7241821289062, "lng": 293.9463407921265,
            "mobIcon": 10
        },
        {
            "id": 752,
            "name": "Camp",
            "mobs": [{id: 5, amount: 1}],
            "lat": -650.375, "lng": 291.7376910016978,
            "mobIcon": 5
        },
        {
            "id": 753,
            "name": "Camp",
            "mobs": [{id: 5, amount: 3}],
            "lat": -656.6020584106445, "lng": 351.67293976814517,
            "mobIcon": 5
        },
        {
            "id": 754,
            "name": "Camp",
            "mobs": [{id: 8, amount: 3}],
            "lat": -690.6163711547852, "lng": 336.4345885505093,
            "mobIcon": 8
        },
        {
            "id": 755,
            "name": "Camp",
            "mobs": [{id: 8, amount: 3}],
            "lat": -598.5, "lng": 303.6123938879457,
            "mobIcon": 8
        },
        {
            "id": 756,
            "name": "Camp",
            "mobs": [{id: 15, amount: 3}],
            "lat": -632.625, "lng": 349.0983022071307,
            "mobIcon": 15
        },
        {
            "id": 757,
            "name": "Camp",
            "mobs": [{id: 14, amount: 4}],
            "lat": -587.75, "lng": 254.81993721150786,
            "mobIcon": 14
        },
        {
            "id": 758,
            "name": "Camp",
            "mobs": [{id: 5, amount: 2}],
            "lat": -605.7501220703125, "lng": 342.48710108499574,
            "mobIcon": 5
        },
        {
            "id": 759,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}, {id: 9, amount: 2}],
            "lat": -580.125, "lng": 289.1044142614601,
            "mobIcon": 15
        },
        {
            "id": 760,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}, {id: 9, amount: 2}],
            "lat": -577, "lng": 304.4801358234295,
            "mobIcon": 7
        },
        {
            "id": 761,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -598.7381744384766, "lng": 330.7229926583722,
            "mobIcon": 13
        },
        {
            "id": 762,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -588.5, "lng": 343.7108658743633,
            "mobIcon": 13
        },
        {
            "id": 763,
            "name": "Camp",
            "mobs": [{id: 4, amount: 1}],
            "lat": -605.5533447265625, "lng": 356.9964515465832,
            "mobIcon": 4
        },
        {
            "id": 764,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -573.6202163696289, "lng": 295.0726492863964,
            "mobIcon": 10
        },
        {
            "id": 765,
            "name": "Camp",
            "mobs": [{id: 12, amount: 2}, {id: 10, amount: 1}, {id: 9, amount: 2}],
            "lat": -626.9269790649414, "lng": 304.0521199198854,
            "mobIcon": 12
        },
        {
            "id": 766,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 10, amount: 1}],
            "lat": -602.0447959899902, "lng": 419.298011725382,
            "mobIcon": 12
        },
        {
            "id": 767,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -610.6642456054688, "lng": 415.0008492280348,
            "mobIcon": 10
        },
        {
            "id": 768,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 12, amount: 1}],
            "lat": -578.25, "lng": 390.85246179966043,
            "mobIcon": 11
        },
        {
            "id": 769,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -561, "lng": 401.85157045840407,
            "mobIcon": 12
        },
        {
            "id": 770,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -551.9592742919922, "lng": 417.03204832740875,
            "mobIcon": 12
        },
        {
            "id": 771,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 12, amount: 1}, {id: 10, amount: 1}],
            "lat": -554.875, "lng": 423.8481324278438,
            "mobIcon": 11
        },
        {
            "id": 772,
            "name": "Camp",
            "mobs": [{id: 14, amount: 3}],
            "lat": -555.237117767334, "lng": 444.7980622944079,
            "mobIcon": 14
        },
        {
            "id": 773,
            "name": "Camp",
            "mobs": [{id: 15, amount: 2}],
            "lat": -557.875, "lng": 410.1021646859083,
            "mobIcon": 15
        },
        {
            "id": 774,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -618.5154457092285, "lng": 396.84070988964345,
            "mobIcon": 13
        },
        {
            "id": 775,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -622.9944381713867, "lng": 429.4733022071307,
            "mobIcon": 15
        },
        {
            "id": 776,
            "name": "Camp",
            "mobs": [{id: 15, amount: 2}],
            "lat": -584.6015930175781, "lng": 420.8545427565259,
            "mobIcon": 15
        },
        {
            "id": 777,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -592, "lng": 394.730220713073,
            "mobIcon": 15
        },
        {
            "id": 778,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -574.776611328125, "lng": 369.4837423068761,
            "mobIcon": 10
        },
        {
            "id": 779,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}, {id: 12, amount: 1}],
            "lat": -535.7401847839355, "lng": 377.9520574132534,
            "mobIcon": 7
        },
        {
            "id": 780,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 10, amount: 1}],
            "lat": -526.8658332824707, "lng": 402.52180884576615,
            "mobIcon": 11
        },
        {
            "id": 781,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 10, amount: 1}],
            "lat": -525.25, "lng": 516.7155348047538,
            "mobIcon": 12
        },
        {
            "id": 782,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 12, amount: 1}, {id: 10, amount: 1}],
            "lat": -533.25, "lng": 499.4631154499151,
            "mobIcon": 11
        },
        {
            "id": 783,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}],
            "lat": -484.5719299316406, "lng": 444.43376137388583,
            "mobIcon": 7
        },
        {
            "id": 784,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}],
            "lat": -483.625, "lng": 504.0918650188349,
            "mobIcon": 11
        },
        {
            "id": 785,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -480.2107048034668, "lng": 432.0982035560802,
            "mobIcon": 9
        },
        {
            "id": 786,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -506.7177429199219, "lng": 402.43969519312395,
            "mobIcon": 10
        },
        {
            "id": 787,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -513, "lng": 414.3613752122241,
            "mobIcon": 10
        },
        {
            "id": 788,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -525.25, "lng": 493.0927843803056,
            "mobIcon": 10
        },
        {
            "id": 789,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -503, "lng": 457.223259762309,
            "mobIcon": 10
        },
        {
            "id": 790,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -493.57572174072266, "lng": 449.14585052127546,
            "mobIcon": 10
        },
        {
            "id": 791,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -497.875, "lng": 457.7249151103565,
            "mobIcon": 10
        },
        {
            "id": 792,
            "name": "Camp",
            "mobs": [{id: 10, amount: 2}],
            "lat": -526.2384033203125, "lng": 471.06062977504246,
            "mobIcon": 10
        },
        {
            "id": 793,
            "name": "Camp",
            "mobs": [{id: 15, amount: 2}],
            "lat": -512.2388000488281, "lng": 426.31688425164475,
            "mobIcon": 15
        },
        {
            "id": 794,
            "name": "Camp",
            "mobs": [{id: 8, amount: 2}],
            "lat": -500.3599548339844, "lng": 401.8151988937818,
            "mobIcon": 8
        },
        {
            "id": 795,
            "name": "Camp",
            "mobs": [{id: 8, amount: 3}],
            "lat": -517.9176177978516, "lng": 391.08593285759764,
            "mobIcon": 8
        },
        {
            "id": 796,
            "name": "Camp",
            "mobs": [{id: 8, amount: 3}],
            "lat": -494.64672088623047, "lng": 419.5893531475488,
            "mobIcon": 8
        },
        {
            "id": 797,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -526.875, "lng": 457.3525466893039,
            "mobIcon": 13
        },
        {
            "id": 798,
            "name": "Camp",
            "mobs": [{id: 14, amount: 3}],
            "lat": -523.8730621337891, "lng": 453.4389174249257,
            "mobIcon": 14
        },
        {
            "id": 799,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -561.75, "lng": 264.59087436332766,
            "mobIcon": 9
        },
        {
            "id": 800,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -556.625, "lng": 228.2312818336163,
            "mobIcon": 13
        },
        {
            "id": 801,
            "name": "Camp",
            "mobs": [{id: 14, amount: 2}],
            "lat": -541.4884872436523, "lng": 211.3198097941426,
            "mobIcon": 14
        },
        {
            "id": 802,
            "name": "Camp",
            "mobs": [{id: 14, amount: 3}],
            "lat": -520.1648178100586, "lng": 152.1418072375053,
            "mobIcon": 14
        },
        {
            "id": 803,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -523, "lng": 176.48280984719864,
            "mobIcon": 13
        },
        {
            "id": 804,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 2}],
            "lat": -541.75, "lng": 163.36481324278438,
            "mobIcon": 11
        },
        {
            "id": 805,
            "name": "Camp",
            "mobs": [{id: 24, amount: 1}],
            "lat": -562.9647445678711, "lng": 169.8105942938243,
            "mobIcon": 24
        },
        {
            "id": 806,
            "name": "Camp",
            "mobs": [{id: 24, amount: 1}],
            "lat": -528.6175003051758, "lng": 200.01953257640068,
            "mobIcon": 24
        },
        {
            "id": 807,
            "name": "Camp",
            "mobs": [{id: 5, amount: 1}],
            "lat": -525.625, "lng": 195.7350169779287,
            "mobIcon": 5
        },
        {
            "id": 808,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -563.5867385864258, "lng": 181.4748332051146,
            "mobIcon": 13
        },
        {
            "id": 809,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -557, "lng": 171.73892190152802,
            "mobIcon": 13
        },
        {
            "id": 810,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -527.75, "lng": 214.8991683467742,
            "mobIcon": 10
        },
        {
            "id": 811,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -545.0320510864258, "lng": 236.9266853578629,
            "mobIcon": 10
        },
        {
            "id": 812,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}, {id: 10, amount: 1}],
            "lat": -538.375, "lng": 240.09876910016976,
            "mobIcon": 7
        },
        {
            "id": 813,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}, {id: 10, amount: 1}],
            "lat": -497.73146057128906, "lng": 186.45034693667762,
            "mobIcon": 7
        },
        {
            "id": 814,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 10, amount: 1}],
            "lat": -453.37662506103516, "lng": 475.84599294354837,
            "mobIcon": 11
        },
        {
            "id": 815,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -467.375, "lng": 489.4742784380306,
            "mobIcon": 13
        },
        {
            "id": 816,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -448.75, "lng": 493.719142614601,
            "mobIcon": 15
        },
        {
            "id": 817,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -469.95105743408203, "lng": 450.4642495224957,
            "mobIcon": 10
        },
        {
            "id": 818,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -464.90636444091797, "lng": 455.8871611046265,
            "mobIcon": 15
        },
        {
            "id": 819,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -508.15528869628906, "lng": 367.1545344665217,
            "mobIcon": 9
        },
        {
            "id": 820,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}, {id: 10, amount: 1}],
            "lat": -511.625, "lng": 355.4780984719864,
            "mobIcon": 7
        },
        {
            "id": 821,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 10, amount: 1}],
            "lat": -507.1355972290039, "lng": 323.78966534910865,
            "mobIcon": 11
        },
        {
            "id": 822,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 10, amount: 1}],
            "lat": -534.875, "lng": 305.60742784380307,
            "mobIcon": 12
        },
        {
            "id": 823,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}, {id: 12, amount: 1}],
            "lat": -556.5796966552734, "lng": 331.32345598670946,
            "mobIcon": 7
        },
        {
            "id": 824,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 9, amount: 2}],
            "lat": -494.81908416748047, "lng": 324.0599052286715,
            "mobIcon": 11
        },
        {
            "id": 825,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}, {id: 9, amount: 2}],
            "lat": -551.8083267211914, "lng": 366.3043341800191,
            "mobIcon": 10
        },
        {
            "id": 826,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -552.6637420654297, "lng": 360.25270950498725,
            "mobIcon": 9
        },
        {
            "id": 827,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -536.8400726318359, "lng": 361.7893425363434,
            "mobIcon": 9
        },
        {
            "id": 828,
            "name": "Camp",
            "mobs": [{id: 1, amount: 1}],
            "lat": -540.5857849121094, "lng": 351.3336297286184,
            "mobIcon": 1
        },
        {
            "id": 829,
            "name": "Camp",
            "mobs": [{id: 1, amount: 1}],
            "lat": -496.9593734741211, "lng": 335.6073429541596,
            "mobIcon": 1
        },
        {
            "id": 830,
            "name": "Camp",
            "mobs": [{id: 24, amount: 1}],
            "lat": -491, "lng": 316.8575127334465,
            "mobIcon": 24
        },
        {
            "id": 831,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -486.25, "lng": 318.8539049235993,
            "mobIcon": 10
        },
        {
            "id": 832,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -472.5, "lng": 310.6061544991511,
            "mobIcon": 10
        },
        {
            "id": 833,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -481.125, "lng": 333.3492784380306,
            "mobIcon": 15
        },
        {
            "id": 834,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -455.875, "lng": 291.3485144312394,
            "mobIcon": 10
        },
        {
            "id": 835,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 9, amount: 3}],
            "lat": -509.625, "lng": 244.11027164685908,
            "mobIcon": 11
        },
        {
            "id": 836,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 9, amount: 1}],
            "lat": -487.95117950439453, "lng": 228.71466435430816,
            "mobIcon": 11
        },
        {
            "id": 837,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 10, amount: 1}],
            "lat": -465.23362731933594, "lng": 213.67574759258278,
            "mobIcon": 11
        },
        {
            "id": 838,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -467.625, "lng": 222.60865874363327,
            "mobIcon": 11
        },
        {
            "id": 839,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -456.5, "lng": 203.73353140916808,
            "mobIcon": 11
        },
        {
            "id": 840,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -477.65433502197266, "lng": 221.1909431703629,
            "mobIcon": 15
        },
        {
            "id": 841,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -456.125, "lng": 254.34567062818337,
            "mobIcon": 15
        },
        {
            "id": 842,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -442.75, "lng": 204.3521222410866,
            "mobIcon": 15
        },
        {
            "id": 843,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}],
            "lat": -475.625, "lng": 201.23026315789474,
            "mobIcon": 12
        },
        {
            "id": 844,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -485.97425079345703, "lng": 168.815167889166,
            "mobIcon": 13
        },
        {
            "id": 845,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -456.19517517089844, "lng": 235.34785147959997,
            "mobIcon": 13
        },
        {
            "id": 846,
            "name": "Camp",
            "mobs": [{id: 13, amount: 7}],
            "lat": -462.16749572753906, "lng": 267.2533425297114,
            "mobIcon": 13
        },
        {
            "id": 847,
            "name": "Camp",
            "mobs": [{id: 13, amount: 7}],
            "lat": -438.625, "lng": 166.4835738539898,
            "mobIcon": 13
        },
        {
            "id": 848,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -426.375, "lng": 187.10836162988116,
            "mobIcon": 13
        },
        {
            "id": 849,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -446.6343002319336, "lng": 99.65001591680814,
            "mobIcon": 13
        },
        {
            "id": 850,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -412.375, "lng": 145.22758913412565,
            "mobIcon": 13
        },
        {
            "id": 851,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -451.3253707885742, "lng": 246.63663817115872,
            "mobIcon": 13
        },
        {
            "id": 852,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -445.875, "lng": 258.09630730050935,
            "mobIcon": 13
        },
        {
            "id": 853,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -441.125, "lng": 254.85195246179967,
            "mobIcon": 13
        },
        {
            "id": 854,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -449.75, "lng": 253.60420203735146,
            "mobIcon": 13
        },
        {
            "id": 855,
            "name": "Camp",
            "mobs": [{id: 14, amount: 2}],
            "lat": -428.78878021240234, "lng": 226.7739247864495,
            "mobIcon": 14
        },
        {
            "id": 856,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}, {id: 9, amount: 2}],
            "lat": -437.59680938720703, "lng": 144.89553069291173,
            "mobIcon": 7
        },
        {
            "id": 857,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}],
            "lat": -467.0089416503906, "lng": 121.66605442221987,
            "mobIcon": 7
        },
        {
            "id": 858,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -426.8661193847656, "lng": 135.9579035242466,
            "mobIcon": 15
        },
        {
            "id": 859,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}],
            "lat": -415.6561508178711, "lng": 124.33177077806664,
            "mobIcon": 12
        },
        {
            "id": 860,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -412.556396484375, "lng": 131.51242348326082,
            "mobIcon": 10
        },
        {
            "id": 861,
            "name": "Camp",
            "mobs": [{id: 2, amount: 1}],
            "lat": -398.3468704223633, "lng": 143.7690720666649,
            "mobIcon": 2
        },
        {
            "id": 862,
            "name": "Camp",
            "mobs": [{id: 5, amount: 1}],
            "lat": -379.125, "lng": 131.86693548387098,
            "mobIcon": 5
        },
        {
            "id": 863,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -381.5577697753906, "lng": 196.7660382567116,
            "mobIcon": 15
        },
        {
            "id": 864,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -354.25, "lng": 169.7331494057725,
            "mobIcon": 15
        },
        {
            "id": 865,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -345.48211669921875, "lng": 230.02042872585952,
            "mobIcon": 15
        },
        {
            "id": 866,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -367.625, "lng": 210.10127334465196,
            "mobIcon": 13
        },
        {
            "id": 867,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -355.125, "lng": 198.98429541595925,
            "mobIcon": 13
        },
        {
            "id": 868,
            "name": "Camp",
            "mobs": [{id: 23, amount: 1}],
            "lat": -352.375, "lng": 244.0997453310696,
            "mobIcon": 23
        },
        {
            "id": 869,
            "name": "Camp",
            "mobs": [{id: 23, amount: 1}],
            "lat": -362.58144760131836, "lng": 257.8105574862054,
            "mobIcon": 23
        },
        {
            "id": 870,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -401.125, "lng": 248.10717317487266,
            "mobIcon": 10
        },
        {
            "id": 871,
            "name": "Camp",
            "mobs": [{id: 24, amount: 1}, {id: 5, amount: 1}],
            "lat": -317.7215347290039, "lng": 187.45063799872665,
            "mobIcon": 24
        },
        {
            "id": 872,
            "name": "Camp",
            "mobs": [{id: 24, amount: 1}],
            "lat": -294.30989837646484, "lng": 245.19679011035655,
            "mobIcon": 24
        },
        {
            "id": 873,
            "name": "Camp",
            "mobs": [{id: 5, amount: 1}],
            "lat": -261.875, "lng": 214.226740237691,
            "mobIcon": 5
        },
        {
            "id": 874,
            "name": "Camp",
            "mobs": [{id: 5, amount: 1}],
            "lat": -259.90504455566406, "lng": 202.76371299342105,
            "mobIcon": 5
        },
        {
            "id": 875,
            "name": "Camp",
            "mobs": [{id: 24, amount: 1}],
            "lat": -254.96832275390625, "lng": 207.3985107836375,
            "mobIcon": 24
        },
        {
            "id": 876,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -226.375, "lng": 211.73098471986418,
            "mobIcon": 15
        },
        {
            "id": 877,
            "name": "Camp",
            "mobs": [{id: 23, amount: 2}],
            "lat": -281.84964752197266, "lng": 189.3223552399459,
            "mobIcon": 23
        },
        {
            "id": 878,
            "name": "Camp",
            "mobs": [{id: 6, amount: 1}],
            "lat": -160.3813934326172, "lng": 304.5707369482173,
            "mobIcon": 6
        },
        {
            "id": 879,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -171.27948760986328, "lng": 300.27773072739814,
            "mobIcon": 15
        },
        {
            "id": 880,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -209.2451515197754, "lng": 334.0692795654711,
            "mobIcon": 15
        },
        {
            "id": 881,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -233.625, "lng": 324.23259762309,
            "mobIcon": 15
        },
        {
            "id": 882,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -248.85743713378906, "lng": 370.5411104626486,
            "mobIcon": 15
        },
        {
            "id": 883,
            "name": "Camp",
            "mobs": [{id: 5, amount: 1}],
            "lat": -178.73988342285156, "lng": 360.045736285017,
            "mobIcon": 5
        },
        {
            "id": 884,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -181.375, "lng": 310.8614176570458,
            "mobIcon": 13
        },
        {
            "id": 885,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -216.8715362548828, "lng": 273.5406140571944,
            "mobIcon": 13
        },
        {
            "id": 886,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -225.5, "lng": 352.0915959252971,
            "mobIcon": 13
        },
        {
            "id": 887,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -212.75, "lng": 311.98387096774195,
            "mobIcon": 9
        },
        {
            "id": 888,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -245.25, "lng": 302.97839558573855,
            "mobIcon": 9
        },
        {
            "id": 889,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 10, amount: 1}],
            "lat": -164.375, "lng": 342.1065789473684,
            "mobIcon": 12
        },
        {
            "id": 890,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 10, amount: 1}],
            "lat": -260.125, "lng": 396.8439728353141,
            "mobIcon": 12
        },
        {
            "id": 891,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 9, amount: 1}],
            "lat": -278.2967758178711, "lng": 424.90542995278014,
            "mobIcon": 12
        },
        {
            "id": 892,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -285.561279296875, "lng": 360.8373351947156,
            "mobIcon": 12
        },
        {
            "id": 893,
            "name": "Camp",
            "mobs": [{id: 6, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -304.8507537841797, "lng": 367.4537583563243,
            "mobIcon": 6
        },
        {
            "id": 894,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -288.75, "lng": 381.97372665534806,
            "mobIcon": 15
        },
        {
            "id": 895,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -282.375, "lng": 310.2313667232598,
            "mobIcon": 15
        },
        {
            "id": 896,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}],
            "lat": -285.5662078857422, "lng": 283.29556468192914,
            "mobIcon": 11
        },
        {
            "id": 897,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -266.5, "lng": 260.49337860780986,
            "mobIcon": 9
        },
        {
            "id": 898,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -296.25, "lng": 374.85258913412565,
            "mobIcon": 9
        },
        {
            "id": 899,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -306.875, "lng": 403.7236417657046,
            "mobIcon": 9
        },
        {
            "id": 900,
            "name": "Camp",
            "mobs": [{id: 8, amount: 1}],
            "lat": -242.75, "lng": 402.09715619694396,
            "mobIcon": 8
        },
        {
            "id": 901,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -245.125, "lng": 292.481960950764,
            "mobIcon": 10
        },
        {
            "id": 902,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -290.9490203857422, "lng": 368.1410167856006,
            "mobIcon": 10
        },
        {
            "id": 903,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -283.37351989746094, "lng": 369.607486371233,
            "mobIcon": 10
        },
        {
            "id": 904,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -304.625, "lng": 396.9733870967742,
            "mobIcon": 13
        },
        {
            "id": 905,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -302.2108459472656, "lng": 412.8800817726019,
            "mobIcon": 13
        },
        {
            "id": 906,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -311.73338317871094, "lng": 340.5558083085739,
            "mobIcon": 13
        },
        {
            "id": 907,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -271.3285598754883, "lng": 400.9207392694185,
            "mobIcon": 13
        },
        {
            "id": 908,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -284.5, "lng": 295.23005093378606,
            "mobIcon": 13
        },
        {
            "id": 909,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -268.6226272583008, "lng": 410.33799541065366,
            "mobIcon": 15
        },
        {
            "id": 910,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -280.4146194458008, "lng": 326.12762328894314,
            "mobIcon": 14
        },
        {
            "id": 911,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -290.61065673828125, "lng": 297.9142563202993,
            "mobIcon": 14
        },
        {
            "id": 912,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -306.40496826171875, "lng": 287.29487744057724,
            "mobIcon": 14
        },
        {
            "id": 913,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -260.7197570800781, "lng": 269.962863267986,
            "mobIcon": 14
        },
        {
            "id": 914,
            "name": "Camp",
            "mobs": [{id: 14, amount: 2}],
            "lat": -267.0740661621094, "lng": 297.25525337568973,
            "mobIcon": 14
        },
        {
            "id": 915,
            "name": "Camp",
            "mobs": [{id: 14, amount: 2}],
            "lat": -276.9461135864258, "lng": 285.386427770851,
            "mobIcon": 14
        },
        {
            "id": 916,
            "name": "Camp",
            "mobs": [{id: 14, amount: 2}],
            "lat": -286.9289245605469, "lng": 272.5605939622241,
            "mobIcon": 14
        },
        {
            "id": 917,
            "name": "Camp",
            "mobs": [{id: 14, amount: 3}],
            "lat": -309.55997467041016, "lng": 264.0186810271647,
            "mobIcon": 14
        },
        {
            "id": 918,
            "name": "Camp",
            "mobs": [{id: 14, amount: 7}],
            "lat": -254.5, "lng": 343.9809422750424,
            "mobIcon": 14
        },
        {
            "id": 919,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -327.82254791259766, "lng": 257.2733095023345,
            "mobIcon": 15
        },
        {
            "id": 920,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}],
            "lat": -320.6252555847168, "lng": 313.79181925801146,
            "mobIcon": 12
        },
        {
            "id": 921,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -344.4103012084961, "lng": 357.2433578827993,
            "mobIcon": 15
        },
        {
            "id": 922,
            "name": "Camp",
            "mobs": [{id: 1, amount: 1}],
            "lat": -334.64673614501953, "lng": 348.80568545071094,
            "mobIcon": 1
        },
        {
            "id": 923,
            "name": "Camp",
            "mobs": [{id: 1, amount: 1}],
            "lat": -369.8719177246094, "lng": 345.2777035361842,
            "mobIcon": 1
        },
        {
            "id": 924,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -349.98136138916016, "lng": 310.2453464890174,
            "mobIcon": 10
        },
        {
            "id": 925,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -345.19580841064453, "lng": 319.58479563481535,
            "mobIcon": 13
        },
        {
            "id": 926,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -339.0789108276367, "lng": 291.116275433733,
            "mobIcon": 13
        },
        {
            "id": 927,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -354.625, "lng": 281.7344651952462,
            "mobIcon": 13
        },
        {
            "id": 928,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -379.9597473144531, "lng": 313.16868699596773,
            "mobIcon": 13
        },
        {
            "id": 929,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -337.57555389404297, "lng": 359.11993115980476,
            "mobIcon": 13
        },
        {
            "id": 930,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 9, amount: 1}],
            "lat": -364.4627685546875, "lng": 300.0621017481961,
            "mobIcon": 12
        },
        {
            "id": 931,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 9, amount: 1}],
            "lat": -393.86598205566406, "lng": 315.47444224851444,
            "mobIcon": 12
        },
        {
            "id": 932,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -374.98255157470703, "lng": 328.2767659367042,
            "mobIcon": 12
        },
        {
            "id": 933,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 9, amount: 1}, {id: 13, amount: 2}],
            "lat": -330.9552536010742, "lng": 285.23675141261674,
            "mobIcon": 12
        },
        {
            "id": 934,
            "name": "Camp",
            "mobs": [{id: 14, amount: 2}, {id: 13, amount: 2}],
            "lat": -397.3388214111328, "lng": 297.864285169514,
            "mobIcon": 14
        },
        {
            "id": 935,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -311.5, "lng": 439.3474108658744,
            "mobIcon": 13
        },
        {
            "id": 936,
            "name": "Camp",
            "mobs": [{id: 5, amount: 1}],
            "lat": -317.31253814697266, "lng": 452.726466833351,
            "mobIcon": 5
        },
        {
            "id": 937,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -323.2643737792969, "lng": 457.87864925986844,
            "mobIcon": 15
        },
        {
            "id": 938,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -345.68323516845703, "lng": 469.365406309688,
            "mobIcon": 15
        },
        {
            "id": 939,
            "name": "Camp",
            "mobs": [{id: 8, amount: 1}],
            "lat": -359.1516647338867, "lng": 485.5729735913625,
            "mobIcon": 8
        },
        {
            "id": 940,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}],
            "lat": -375.7985038757324, "lng": 426.9368145824491,
            "mobIcon": 7
        },
        {
            "id": 941,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}, {id: 13, amount: 1}],
            "lat": -320.115966796875, "lng": 469.8594695060484,
            "mobIcon": 15
        },
        {
            "id": 942,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -345.61278533935547, "lng": 494.84711375212225,
            "mobIcon": 13
        },
        {
            "id": 943,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -348.2574920654297, "lng": 411.00492724692276,
            "mobIcon": 9
        },
        {
            "id": 944,
            "name": "Camp",
            "mobs": [{id: 6, amount: 1}],
            "lat": -346.94544219970703, "lng": 402.56923662324914,
            "mobIcon": 6
        },
        {
            "id": 945,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -352.6318359375, "lng": 401.64908445193123,
            "mobIcon": 10
        },
        {
            "id": 946,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}, {id: 13, amount: 1}],
            "lat": -404.39764404296875, "lng": 362.37038644683787,
            "mobIcon": 10
        },
        {
            "id": 947,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 12, amount: 1}, {id: 9, amount: 2}],
            "lat": -390.625, "lng": 460.8451612903226,
            "mobIcon": 11
        },
        {
            "id": 948,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}, {id: 9, amount: 3}],
            "lat": -385.73365783691406, "lng": 475.0089681265917,
            "mobIcon": 10
        },
        {
            "id": 949,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}, {id: 11, amount: 1}, {id: 9, amount: 2}],
            "lat": -436.60609436035156, "lng": 443.9352268808361,
            "mobIcon": 7
        },
        {
            "id": 950,
            "name": "Camp",
            "mobs": [{id: 1, amount: 1}],
            "lat": -416.68553161621094, "lng": 390.85357680523134,
            "mobIcon": 1
        },
        {
            "id": 951,
            "name": "Camp",
            "mobs": [{id: 1, amount: 1}],
            "lat": -408.57269287109375, "lng": 395.0338136009126,
            "mobIcon": 1
        },
        {
            "id": 952,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -411.8130874633789, "lng": 437.845882852292,
            "mobIcon": 9
        },
        {
            "id": 953,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -434.3277130126953, "lng": 421.20621435298176,
            "mobIcon": 9
        },
        {
            "id": 954,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -436.75, "lng": 416.35178268251275,
            "mobIcon": 10
        },
        {
            "id": 955,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -395.7781753540039, "lng": 469.9832152284062,
            "mobIcon": 10
        },
        {
            "id": 956,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -435.42236328125, "lng": 452.69777877626274,
            "mobIcon": 10
        },
        {
            "id": 957,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -444.55602264404297, "lng": 443.2164138768039,
            "mobIcon": 10
        },
        {
            "id": 958,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -444.5, "lng": 467.97741935483873,
            "mobIcon": 9
        },
        {
            "id": 959,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -432.00634002685547, "lng": 486.2399654472623,
            "mobIcon": 9
        },
        {
            "id": 960,
            "name": "Camp",
            "mobs": [{id: 9, amount: 3}],
            "lat": -415.25, "lng": 510.34567062818337,
            "mobIcon": 9
        },
        {
            "id": 961,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -424.22923278808594, "lng": 472.8647064675297,
            "mobIcon": 13
        },
        {
            "id": 962,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -407.7144317626953, "lng": 471.0633177260187,
            "mobIcon": 13
        },
        {
            "id": 963,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -428.375, "lng": 512.9707555178268,
            "mobIcon": 13
        },
        {
            "id": 964,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -412.43531036376953, "lng": 526.1219368434316,
            "mobIcon": 13
        },
        {
            "id": 965,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -413.625, "lng": 503.2232173174873,
            "mobIcon": 13
        },
        {
            "id": 966,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -421.47679138183594, "lng": 498.6560865211163,
            "mobIcon": 13
        },
        {
            "id": 967,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -427.20494842529297, "lng": 498.4063541224533,
            "mobIcon": 13
        },
        {
            "id": 968,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -439.875, "lng": 399.09028013582343,
            "mobIcon": 13
        },
        {
            "id": 967,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -476.87596893310547, "lng": 394.2073781037776,
            "mobIcon": 13
        },
        {
            "id": 968,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -417.6127700805664, "lng": 356.9952171649512,
            "mobIcon": 13
        },
        {
            "id": 969,
            "name": "Camp",
            "mobs": [{id: 13, amount: 7}],
            "lat": -453.7616081237793, "lng": 333.6582593312288,
            "mobIcon": 13
        },
        {
            "id": 970,
            "name": "Camp",
            "mobs": [{id: 14, amount: 3}],
            "lat": -428.17811584472656, "lng": 355.22292434873725,
            "mobIcon": 14
        },
        {
            "id": 971,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -471.6138801574707, "lng": 366.42330436253184,
            "mobIcon": 9
        },
        {
            "id": 972,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -483.08619689941406, "lng": 366.4443785481218,
            "mobIcon": 9
        },
        {
            "id": 973,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -479.9076156616211, "lng": 375.3289112240026,
            "mobIcon": 15
        },

    ],
    inazuma: [
        {
            "id": 974,
            "name": "Camp",
            "mobs": [{id: 18, amount: 13}],
            "lat": -39.96573257446289, "lng": 840.2204584040747,
            "mobIcon": 18
        },
        {
            "id": 975,
            "name": "Camp",
            "mobs": [{id: 18, amount: 4}],
            "lat": -54.5, "lng": 840.2205432937182,
            "mobIcon": 18
        },
        {
            "id": 976,
            "name": "Camp",
            "mobs": [{id: 18, amount: 6}],
            "lat": -122.625, "lng": 720.1028862478778,
            "mobIcon": 18
        },
        {
            "id": 977,
            "name": "Camp",
            "mobs": [{id: 17, amount: 4}],
            "lat": -105.9457778930664, "lng": 855.2216166834678,
            "mobIcon": 17
        },
        {
            "id": 978,
            "name": "Camp",
            "mobs": [{id: 17, amount: 4}],
            "lat": -129.23248291015625, "lng": 857.3532082316426,
            "mobIcon": 17
        },
        {
            "id": 979,
            "name": "Camp",
            "mobs": [{id: 1, amount: 1}],
            "lat": -121.73576354980469, "lng": 840.8555954212649,
            "mobIcon": 1
        },
        {
            "id": 980,
            "name": "Camp",
            "mobs": [{id: 2, amount: 1}],
            "lat": -128.28309631347656, "lng": 831.1156104095926,
            "mobIcon": 2
        },
        {
            "id": 981,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 9, amount: 1}],
            "lat": -118.75, "lng": 834.6027589134126,
            "mobIcon": 11
        },
        {
            "id": 982,
            "name": "Camp",
            "mobs": [{id: 14, amount: 4}],
            "lat": -141.48736572265625, "lng": 826.5450657894737,
            "mobIcon": 14
        },
        {
            "id": 983,
            "name": "Camp",
            "mobs": [{id: 8, amount: 3}],
            "lat": -149.94925689697266, "lng": 833.525298771753,
            "mobIcon": 8
        },
        {
            "id": 984,
            "name": "Camp",
            "mobs": [{id: 8, amount: 1}],
            "lat": -154.2925796508789, "lng": 843.0255295654712,
            "mobIcon": 8
        },
        {
            "id": 985,
            "name": "Camp",
            "mobs": [{id: 8, amount: 2}],
            "lat": -150.85824584960938, "lng": 846.2529638423175,
            "mobIcon": 8
        },
        {
            "id": 986,
            "name": "Camp",
            "mobs": [{id: 1, amount: 1}],
            "lat": -148.12360382080078, "lng": 851.1750033160017,
            "mobIcon": 1
        },
        {
            "id": 987,
            "name": "Camp",
            "mobs": [{id: 18, amount: 2}],
            "lat": -130.38183975219727, "lng": 871.7821254244482,
            "mobIcon": 18
        },
        {
            "id": 988,
            "name": "Camp",
            "mobs": [{id: 18, amount: 2}],
            "lat": -148.19198989868164, "lng": 876.4766129032258,
            "mobIcon": 18
        },
        {
            "id": 989,
            "name": "Camp",
            "mobs": [{id: 16, amount: 1}, {id: 3, amount: 1}],
            "lat": -134.17047119140625, "lng": 884.3683073137734,
            "mobIcon": 16
        },
        {
            "id": 990,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -134.51788330078125, "lng": 887.3260694105476,
            "mobIcon": 13
        },
        {
            "id": 991,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -128.49224090576172, "lng": 891.8219426464346,
            "mobIcon": 13
        },
        {
            "id": 992,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -132.01833724975586, "lng": 895.5401919301783,
            "mobIcon": 13
        },
        {
            "id": 993,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -141.1732177734375, "lng": 899.0516971296689,
            "mobIcon": 13
        },
        {
            "id": 994,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -150.89682006835938, "lng": 906.203325949703,
            "mobIcon": 13
        },
        {
            "id": 995,
            "name": "Camp",
            "mobs": [{id: 18, amount: 4}],
            "lat": -154.875, "lng": 925.4673174872665,
            "mobIcon": 18
        },
        {
            "id": 996,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -160.08372497558594, "lng": 904.8374227371604,
            "mobIcon": 15
        },
        {
            "id": 997,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -182.53846740722656, "lng": 883.1520439834466,
            "mobIcon": 15
        },
        {
            "id": 998,
            "name": "Camp",
            "mobs": [{id: 4, amount: 1}, {id: 10, amount: 1}],
            "lat": -196.21260833740234, "lng": 887.8038084279499,
            "mobIcon": 4
        },
        {
            "id": 999,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -203.76290130615234, "lng": 907.5045989627547,
            "mobIcon": 10
        },
        {
            "id": 1000,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}, {id: 9, amount: 2}],
            "lat": -197.375, "lng": 914.5899405772495,
            "mobIcon": 10
        },
        {
            "id": 1001,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -223.125, "lng": 907.219949066214,
            "mobIcon": 15
        },
        {
            "id": 1002,
            "name": "Camp",
            "mobs": [{id: 18, amount: 4}],
            "lat": -219.72747802734375, "lng": 907.7638797883064,
            "mobIcon": 18
        },
        {
            "id": 1003,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -224.78497314453125, "lng": 884.8695700472199,
            "mobIcon": 13
        },
        {
            "id": 1004,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 12, amount: 2}, {id: 9, amount: 1}],
            "lat": -220.8381576538086, "lng": 869.5742114547962,
            "mobIcon": 12
        },
        {
            "id": 1005,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 9, amount: 1}],
            "lat": -198.5, "lng": 849.225,
            "mobIcon": 11
        },
        {
            "id": 1006,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 9, amount: 1}],
            "lat": -184.35692596435547, "lng": 822.3505836162988,
            "mobIcon": 11
        },
        {
            "id": 1007,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}, {id: 13, amount: 3}],
            "lat": -207.61024475097656, "lng": 859.8850120039261,
            "mobIcon": 7
        },
        {
            "id": 1008,
            "name": "Camp",
            "mobs": [{id: 4, amount: 1}],
            "lat": -202.63884735107422, "lng": 870.6029907019313,
            "mobIcon": 4
        },
        {
            "id": 1009,
            "name": "Camp",
            "mobs": [{id: 4, amount: 1}],
            "lat": -196.79754638671875, "lng": 858.5955008488964,
            "mobIcon": 4
        },
        {
            "id": 1010,
            "name": "Camp",
            "mobs": [{id: 4, amount: 1}],
            "lat": -179, "lng": 864.3404923599321,
            "mobIcon": 4
        },
        {
            "id": 1011,
            "name": "Camp",
            "mobs": [{id: 16, amount: 1}],
            "lat": -187.375, "lng": 869.469142614601,
            "mobIcon": 16
        },
        {
            "id": 1012,
            "name": "Camp",
            "mobs": [{id: 16, amount: 1}],
            "lat": -167.6786346435547, "lng": 850.205919726231,
            "mobIcon": 16
        },
        {
            "id": 1013,
            "name": "Camp",
            "mobs": [{id: 16, amount: 1}],
            "lat": -161.375, "lng": 848.3446943972835,
            "mobIcon": 16
        },
        {
            "id": 1014,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}],
            "lat": -182.375, "lng": 872.0921052631579,
            "mobIcon": 18
        },
        {
            "id": 1015,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}],
            "lat": -173.79682159423828, "lng": 860.9232697103141,
            "mobIcon": 18
        },
        {
            "id": 1016,
            "name": "Camp",
            "mobs": [{id: 18, amount: 3}],
            "lat": -211.31483459472656, "lng": 840.3335901023981,
            "mobIcon": 18
        },
        {
            "id": 1017,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}],
            "lat": -191.75253295898438, "lng": 838.8357279286927,
            "mobIcon": 18
        },
        {
            "id": 1018,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}],
            "lat": -191.5, "lng": 833.9672750424448,
            "mobIcon": 18
        },
        {
            "id": 1019,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}],
            "lat": -195.5, "lng": 828.7225806451613,
            "mobIcon": 18
        },
        {
            "id": 1020,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}],
            "lat": -194.933837890625, "lng": 825.2114859666808,
            "mobIcon": 18
        },
        {
            "id": 1021,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}],
            "lat": -188.27941131591797, "lng": 818.1800704981961,
            "mobIcon": 18
        },
        {
            "id": 1022,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -192.06016540527344, "lng": 827.404900387309,
            "mobIcon": 15
        },
        {
            "id": 1023,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -182.875, "lng": 813.2238539898133,
            "mobIcon": 13
        },
        {
            "id": 1024,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -169.5616455078125, "lng": 825.9003355793718,
            "mobIcon": 15
        },
        {
            "id": 1025,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -155.9338836669922, "lng": 818.0124860727929,
            "mobIcon": 10
        },
        {
            "id": 1026,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -155.875, "lng": 814.35220713073,
            "mobIcon": 13
        },
        {
            "id": 1027,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -155.8500213623047, "lng": 823.2140303347835,
            "mobIcon": 13
        },
        {
            "id": 1028,
            "name": "Camp",
            "mobs": [{id: 18, amount: 2}, {id: 14, amount: 2}],
            "lat": -164.143310546875, "lng": 818.2788621471774,
            "mobIcon": 18
        },
        {
            "id": 1029,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -179.10755920410156, "lng": 796.2148852000212,
            "mobIcon": 9
        },
        {
            "id": 1030,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -198.22103118896484, "lng": 798.3554319423812,
            "mobIcon": 9
        },
        {
            "id": 1031,
            "name": "Camp",
            "mobs": [{id: 18, amount: 3}],
            "lat": -199.15213775634766, "lng": 804.0871720474321,
            "mobIcon": 18
        },
        {
            "id": 1032,
            "name": "Camp",
            "mobs": [{id: 18, amount: 2}],
            "lat": -221.375, "lng": 818.4697368421052,
            "mobIcon": 18
        },
        {
            "id": 1033,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -223.80551147460938, "lng": 802.3109593856112,
            "mobIcon": 14
        },
        {
            "id": 1034,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 12, amount: 1}, {id: 9, amount: 1}],
            "lat": -201.2465362548828, "lng": 789.3742107915959,
            "mobIcon": 11
        },
        {
            "id": 1035,
            "name": "Camp",
            "mobs": [{id: 6, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -231.10753631591797, "lng": 849.9639318495331,
            "mobIcon": 6
        },
        {
            "id": 1036,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 9, amount: 1}],
            "lat": -232.82357025146484, "lng": 834.1644872798175,
            "mobIcon": 11
        },
        {
            "id": 1037,
            "name": "Camp",
            "mobs": [{id: 15, amount: 3}],
            "lat": -243.43478393554688, "lng": 836.6482498143039,
            "mobIcon": 15
        },
        {
            "id": 1038,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -243.75392150878906, "lng": 853.2580124549024,
            "mobIcon": 13
        },
        {
            "id": 1039,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -240.71149444580078, "lng": 791.48357418559,
            "mobIcon": 13
        },
        {
            "id": 1040,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -259.726318359375, "lng": 802.8082585022283,
            "mobIcon": 9
        },
        {
            "id": 1041,
            "name": "Camp",
            "mobs": [{id: 9, amount: 4}],
            "lat": -247.5, "lng": 783.2261460101868,
            "mobIcon": 9
        },
        {
            "id": 1042,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -246.16748809814453, "lng": 820.5904233870967,
            "mobIcon": 9
        },
        {
            "id": 1043,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}, {id: 14, amount: 3}],
            "lat": -250.25, "lng": 819.414205088073,
            "mobIcon": 18
        },
        {
            "id": 1044,
            "name": "Camp",
            "mobs": [{id: 16, amount: 1}],
            "lat": -298.75, "lng": 939.837181663837,
            "mobIcon": 16
        },
        {
            "id": 1045,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}],
            "lat": -301.25, "lng": 776.7247028862479,
            "mobIcon": 18
        },
        {
            "id": 1046,
            "name": "Camp",
            "mobs": [{id: 6, amount: 1}],
            "lat": -244, "lng": 668.4730475382004,
            "mobIcon": 6
        },
        {
            "id": 1047,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -295.3504409790039, "lng": 666.4772495755518,
            "mobIcon": 13
        },
        {
            "id": 1048,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}, {id: 10, amount: 1}],
            "lat": -248.72991943359375, "lng": 653.9113990874363,
            "mobIcon": 13
        },
        {
            "id": 1049,
            "name": "Camp",
            "mobs": [{id: 18, amount: 2}, {id: 14, amount: 1}],
            "lat": -279.16822052001953, "lng": 656.6838222225169,
            "mobIcon": 18
        },
        {
            "id": 1050,
            "name": "Camp",
            "mobs": [{id: 18, amount: 2}, {id: 14, amount: 1}],
            "lat": -290.8142318725586, "lng": 682.2053420787352,
            "mobIcon": 18
        },
        {
            "id": 1051,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 10, amount: 1}],
            "lat": -281.875, "lng": 681.9739388794567,
            "mobIcon": 11
        },
        {
            "id": 1052,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 9, amount: 1}],
            "lat": -320.13104248046875, "lng": 743.2159685377759,
            "mobIcon": 11
        },
        {
            "id": 1053,
            "name": "Camp",
            "mobs": [{id: 7, amount: 2}, {id: 9, amount: 1}],
            "lat": -284.375, "lng": 709.2199066213922,
            "mobIcon": 7
        },
        {
            "id": 1054,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 12, amount: 1}, {id: 9, amount: 1}],
            "lat": -304.7688674926758, "lng": 723.2872463258701,
            "mobIcon": 11
        },
        {
            "id": 1055,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}, {id: 13, amount: 1}],
            "lat": -298.4903869628906, "lng": 724.3991219227504,
            "mobIcon": 9
        },
        {
            "id": 1056,
            "name": "Camp",
            "mobs": [{id: 18, amount: 2}, {id: 14, amount: 1}],
            "lat": -329.0637435913086, "lng": 688.4754254430178,
            "mobIcon": 18
        },
        {
            "id": 1057,
            "name": "Camp",
            "mobs": [{id: 18, amount: 2}, {id: 14, amount: 1}],
            "lat": -313.625, "lng": 677.2291171477079,
            "mobIcon": 18
        },
        {
            "id": 1058,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -331.4773864746094, "lng": 690.7128687393888,
            "mobIcon": 14
        },
        {
            "id": 1059,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -323.9724807739258, "lng": 699.0949915110357,
            "mobIcon": 14
        },
        {
            "id": 1060,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -320.51224517822266, "lng": 701.1199682990238,
            "mobIcon": 14
        },
        {
            "id": 1061,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}],
            "lat": -312.61454010009766, "lng": 710.1037029790959,
            "mobIcon": 18
        },
        {
            "id": 1062,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}],
            "lat": -323.5660858154297, "lng": 732.6459332555178,
            "mobIcon": 18
        },
        {
            "id": 1063,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}],
            "lat": -316.625, "lng": 732.7227928692699,
            "mobIcon": 18
        },
        {
            "id": 1064,
            "name": "Camp",
            "mobs": [{id: 18, amount: 3}],
            "lat": -320, "lng": 717.8428268251273,
            "mobIcon": 18
        },
        {
            "id": 1065,
            "name": "Camp",
            "mobs": [{id: 18, amount: 3}],
            "lat": -314.125, "lng": 714.468039049236,
            "mobIcon": 18
        },
        {
            "id": 1066,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}],
            "lat": -297.577880859375, "lng": 675.4771222410866,
            "mobIcon": 18
        },
        {
            "id": 1067,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}],
            "lat": -312.5567169189453, "lng": 653.8864092012415,
            "mobIcon": 18
        },
        {
            "id": 1068,
            "name": "Camp",
            "mobs": [{id: 18, amount: 2}],
            "lat": -312.75, "lng": 657.4750424448217,
            "mobIcon": 18
        },
        {
            "id": 1067,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -342.09910583496094, "lng": 690.3643436969439,
            "mobIcon": 13
        },
        {
            "id": 1068,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -343.75, "lng": 674.7228777589135,
            "mobIcon": 15
        },
        {
            "id": 1069,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}],
            "lat": -359.89652252197266, "lng": 699.1598173546265,
            "mobIcon": 7
        },
        {
            "id": 1070,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}],
            "lat": -364.8529357910156, "lng": 727.9729626485569,
            "mobIcon": 7
        },
        {
            "id": 1071,
            "name": "Camp",
            "mobs": [{id: 14, amount: 2}],
            "lat": -361, "lng": 691.0973684210526,
            "mobIcon": 14
        },
        {
            "id": 1072,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -372.75, "lng": 674.8433361629882,
            "mobIcon": 14
        },
        {
            "id": 1073,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -379.0253677368164, "lng": 671.9333928002972,
            "mobIcon": 14
        },
        {
            "id": 1074,
            "name": "Camp",
            "mobs": [{id: 18, amount: 2}],
            "lat": -393.9072952270508, "lng": 687.5949371286079,
            "mobIcon": 18
        },
        {
            "id": 1075,
            "name": "Camp",
            "mobs": [{id: 18, amount: 2}],
            "lat": -364.875, "lng": 651.8480899830221,
            "mobIcon": 18
        },
        {
            "id": 1076,
            "name": "Camp",
            "mobs": [{id: 18, amount: 3}],
            "lat": -359.1827163696289, "lng": 657.3898414287988,
            "mobIcon": 18
        },
        {
            "id": 1077,
            "name": "Camp",
            "mobs": [{id: 18, amount: 2}],
            "lat": -373.3990173339844, "lng": 647.190418081494,
            "mobIcon": 18
        },
        {
            "id": 1078,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}],
            "lat": -360.4539489746094, "lng": 667.1284536157682,
            "mobIcon": 18
        },
        {
            "id": 1079,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}],
            "lat": -361.25, "lng": 663.3455008488964,
            "mobIcon": 18
        },
        {
            "id": 1080,
            "name": "Camp",
            "mobs": [{id: 15, amount: 3}],
            "lat": -372.1241455078125, "lng": 652.9925025201612,
            "mobIcon": 15
        },
        {
            "id": 1081,
            "name": "Camp",
            "mobs": [{id: 16, amount: 1}, {id: 8, amount: 1}],
            "lat": -380.55957794189453, "lng": 644.0165514908743,
            "mobIcon": 16
        },
        {
            "id": 1082,
            "name": "Camp",
            "mobs": [{id: 3, amount: 1}, {id: 8, amount: 1}],
            "lat": -386.39483642578125, "lng": 653.8263403278862,
            "mobIcon": 3
        },
        {
            "id": 1083,
            "name": "Camp",
            "mobs": [{id: 7, amount: 2}, {id: 12, amount: 1}, {id: 9, amount: 1}],
            "lat": -350.3013000488281, "lng": 644.2313779976655,
            "mobIcon": 7
        },
        {
            "id": 1084,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 12, amount: 1}, {id: 9, amount: 1}],
            "lat": -354.3192901611328, "lng": 614.7259337860781,
            "mobIcon": 11
        },
        {
            "id": 1085,
            "name": "Camp",
            "mobs": [{id: 7, amount: 2}],
            "lat": -343.75, "lng": 607.9744482173174,
            "mobIcon": 7
        },
        {
            "id": 1086,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 12, amount: 1}],
            "lat": -331.5, "lng": 610.4713921901528,
            "mobIcon": 11
        },
        {
            "id": 1087,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}],
            "lat": -324.11415100097656, "lng": 609.7955837489388,
            "mobIcon": 18
        },
        {
            "id": 1088,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}],
            "lat": -355.7576675415039, "lng": 607.1704527668718,
            "mobIcon": 18
        },
        {
            "id": 1089,
            "name": "Camp",
            "mobs": [{id: 18, amount: 3}],
            "lat": -354.393310546875, "lng": 593.8791416861205,
            "mobIcon": 18
        },
        {
            "id": 1090,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}],
            "lat": -357.28517150878906, "lng": 600.6377884921477,
            "mobIcon": 7
        },
        {
            "id": 1091,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -348.125, "lng": 602.2224108658744,
            "mobIcon": 13
        },
        {
            "id": 1092,
            "name": "Camp",
            "mobs": [{id: 15, amount: 2}],
            "lat": -346.9912109375, "lng": 598.924541065365,
            "mobIcon": 15
        },
        {
            "id": 1093,
            "name": "Camp",
            "mobs": [{id: 15, amount: 2}],
            "lat": -388.60120010375977, "lng": 628.9345480952886,
            "mobIcon": 15
        },
        {
            "id": 1094,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -363.7111587524414, "lng": 625.175619263317,
            "mobIcon": 15
        },
        {
            "id": 1095,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -365.375, "lng": 616.2257640067912,
            "mobIcon": 15
        },
        {
            "id": 1096,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}],
            "lat": -371.625, "lng": 604.9784380305603,
            "mobIcon": 11
        },
        {
            "id": 1097,
            "name": "Camp",
            "mobs": [{id: 16, amount: 1}],
            "lat": -372.875, "lng": 588.483234295416,
            "mobIcon": 16
        },
        {
            "id": 1098,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}],
            "lat": -373.1715087890625, "lng": 614.750933454478,
            "mobIcon": 18
        },
        {
            "id": 1099,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}],
            "lat": -391, "lng": 622.3462648556877,
            "mobIcon": 18
        },
        {
            "id": 1100,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 9, amount: 1}],
            "lat": -392.875, "lng": 585.1075127334466,
            "mobIcon": 11
        },
        {
            "id": 1101,
            "name": "Camp",
            "mobs": [{id: 10, amount: 2}, {id: 9, amount: 1}],
            "lat": -383.375, "lng": 591.2309422750425,
            "mobIcon": 10
        },
        {
            "id": 1102,
            "name": "Camp",
            "mobs": [{id: 8, amount: 3}],
            "lat": -390.44017028808594, "lng": 603.7256297087224,
            "mobIcon": 8
        },
        {
            "id": 1103,
            "name": "Camp",
            "mobs": [{id: 16, amount: 1}, {id: 18, amount: 1}, {id: 4, amount: 1}, {id: 8, amount: 1}],
            "lat": -379.390380859375, "lng": 623.6309857146647,
            "mobIcon": 16
        },
        {
            "id": 1104,
            "name": "Camp",
            "mobs": [{id: 18, amount: 2}, {id: 4, amount: 1}],
            "lat": -410.6519546508789, "lng": 661.755314555921,
            "mobIcon": 18
        },
        {
            "id": 1105,
            "name": "Camp",
            "mobs": [{id: 18, amount: 2}, {id: 4, amount: 1}],
            "lat": -430.2706756591797, "lng": 668.2194821731748,
            "mobIcon": 18
        },
        {
            "id": 1106,
            "name": "Camp",
            "mobs": [{id: 18, amount: 2}, {id: 4, amount: 1}],
            "lat": -447.20399475097656, "lng": 643.2276902721774,
            "mobIcon": 18
        },
        {
            "id": 1107,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}, {id: 4, amount: 1}],
            "lat": -434.41837310791016, "lng": 654.2018914473684,
            "mobIcon": 18
        },
        {
            "id": 1108,
            "name": "Camp",
            "mobs": [{id: 18, amount: 3}],
            "lat": -447.75, "lng": 634.3491511035654,
            "mobIcon": 18
        },
        {
            "id": 1109,
            "name": "Camp",
            "mobs": [{id: 16, amount: 1}, {id: 8, amount: 1}],
            "lat": -402.6599807739258, "lng": 642.6684538810484,
            "mobIcon": 16
        },
        {
            "id": 1110,
            "name": "Camp",
            "mobs": [{id: 8, amount: 2}],
            "lat": -404.12999725341797, "lng": 647.078179714028,
            "mobIcon": 8
        },
        {
            "id": 1111,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}],
            "lat": -429.2836227416992, "lng": 635.853548785017,
            "mobIcon": 12
        },
        {
            "id": 1112,
            "name": "Camp",
            "mobs": [{id: 4, amount: 1}],
            "lat": -427.35951232910156, "lng": 625.6820173227928,
            "mobIcon": 4
        },
        {
            "id": 1113,
            "name": "Camp",
            "mobs": [{id: 3, amount: 1}],
            "lat": -420.74491119384766, "lng": 628.558898490556,
            "mobIcon": 3
        },
        {
            "id": 1114,
            "name": "Camp",
            "mobs": [{id: 3, amount: 1}],
            "lat": -413.06710052490234, "lng": 633.3014318495331,
            "mobIcon": 3
        },
        {
            "id": 1115,
            "name": "Camp",
            "mobs": [{id: 4, amount: 1}],
            "lat": -410.92520904541016, "lng": 630.3004801570459,
            "mobIcon": 4
        },
        {
            "id": 1116,
            "name": "Camp",
            "mobs": [{id: 17, amount: 2}],
            "lat": -417.6048583984375, "lng": 612.957681517933,
            "mobIcon": 17
        },
        {
            "id": 1117,
            "name": "Camp",
            "mobs": [{id: 7, amount: 2}],
            "lat": -417.5, "lng": 588.9788624787776,
            "mobIcon": 7
        },
        {
            "id": 1118,
            "name": "Camp",
            "mobs": [{id: 11, amount: 3}],
            "lat": -440.9461975097656, "lng": 611.81675774618,
            "mobIcon": 11
        },
        {
            "id": 1119,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}, {id: 11, amount: 1}, {id: 9, amount: 1}],
            "lat": -431.9876403808594, "lng": 600.5564658717105,
            "mobIcon": 7
        },
        {
            "id": 1120,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}, {id: 11, amount: 1}, {id: 9, amount: 1}],
            "lat": -412.3091926574707, "lng": 598.2599304302844,
            "mobIcon": 7
        },
        {
            "id": 1121,
            "name": "Camp",
            "mobs": [{id: 6, amount: 1}, {id: 11, amount: 2}, {id: 12, amount: 1}],
            "lat": -416.47791290283203, "lng": 602.7200724214771,
            "mobIcon": 11
        },
        {
            "id": 1122,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -340.5968475341797, "lng": 565.1997562738752,
            "mobIcon": 11
        },
        {
            "id": 1123,
            "name": "Camp",
            "mobs": [{id: 18, amount: 3}, {id: 13, amount: 1}],
            "lat": -353.25, "lng": 556.8542869269949,
            "mobIcon": 18
        },
        {
            "id": 1124,
            "name": "Camp",
            "mobs": [{id: 18, amount: 3}],
            "lat": -362.9828643798828, "lng": 585.7332508754245,
            "mobIcon": 18
        },
        {
            "id": 1125,
            "name": "Camp",
            "mobs": [{id: 18, amount: 4}],
            "lat": -360.875, "lng": 574.224363327674,
            "mobIcon": 18
        },
        {
            "id": 1126,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}],
            "lat": -334.07847595214844, "lng": 548.5903451294568,
            "mobIcon": 18
        },
        {
            "id": 1127,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -361.7019271850586, "lng": 555.0050350169779,
            "mobIcon": 15
        },
        {
            "id": 1128,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -362.5060691833496, "lng": 517.9889283677313,
            "mobIcon": 13
        },
        {
            "id": 1129,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}],
            "lat": -358.2569351196289, "lng": 482.73404074702887,
            "mobIcon": 18
        },
        {
            "id": 1130,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}],
            "lat": -344.6431427001953, "lng": 495.8887005584147,
            "mobIcon": 18
        },
        {
            "id": 1131,
            "name": "Camp",
            "mobs": [{id: 18, amount: 3}],
            "lat": -349, "lng": 483.2343803056027,
            "mobIcon": 18
        },
        {
            "id": 1132,
            "name": "Camp",
            "mobs": [{id: 18, amount: 3}],
            "lat": -365.0670166015625, "lng": 500.54189254164896,
            "mobIcon": 18
        },
        {
            "id": 1133,
            "name": "Camp",
            "mobs": [{id: 18, amount: 3}],
            "lat": -359.5, "lng": 514.1002971137522,
            "mobIcon": 18
        },
        {
            "id": 1134,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}],
            "lat": -331.7976379394531, "lng": 452.5730082435802,
            "mobIcon": 18
        },
        {
            "id": 1135,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}],
            "lat": -368, "lng": 415.10742784380307,
            "mobIcon": 18
        },
        {
            "id": 1136,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}],
            "lat": -386.8143005371094, "lng": 438.5920797299448,
            "mobIcon": 18
        },
        {
            "id": 1137,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}],
            "lat": -389.875, "lng": 440.2216893039049,
            "mobIcon": 18
        },
        {
            "id": 1138,
            "name": "Camp",
            "mobs": [{id: 16, amount: 1}],
            "lat": -380.51551818847656, "lng": 423.1503959306027,
            "mobIcon": 16
        },
        {
            "id": 1139,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -377.64417266845703, "lng": 443.97119986205433,
            "mobIcon": 9
        },
        {
            "id": 1140,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -367, "lng": 474.5981324278438,
            "mobIcon": 9
        },
        {
            "id": 1141,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -351.125, "lng": 439.8510611205433,
            "mobIcon": 9
        },
        {
            "id": 1142,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -344.625, "lng": 438.1070882852292,
            "mobIcon": 9
        },
        {
            "id": 1143,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -369.3723602294922, "lng": 470.0679894750106,
            "mobIcon": 15
        },
        {
            "id": 1144,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -350.125, "lng": 461.35038200339557,
            "mobIcon": 15
        },
        {
            "id": 1145,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}, {id: 14, amount: 1}],
            "lat": -339.20902252197266, "lng": 449.04616089903436,
            "mobIcon": 18
        },
        {
            "id": 1146,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -356.09820556640625, "lng": 423.5442009762309,
            "mobIcon": 11
        },
        {
            "id": 1147,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -364.8675231933594, "lng": 383.1322123036927,
            "mobIcon": 11
        },
        {
            "id": 1148,
            "name": "Camp",
            "mobs": [{id: 17, amount: 4}],
            "lat": -397.125, "lng": 386.229117147708,
            "mobIcon": 17
        },
        {
            "id": 1149,
            "name": "Camp",
            "mobs": [{id: 18, amount: 3}],
            "lat": -414.15271759033203, "lng": 429.9476202713816,
            "mobIcon": 18
        },
        {
            "id": 1150,
            "name": "Camp",
            "mobs": [{id: 18, amount: 3}],
            "lat": -422.125, "lng": 434.7358234295416,
            "mobIcon": 18
        },
        {
            "id": 1151,
            "name": "Camp",
            "mobs": [{id: 18, amount: 3}],
            "lat": -397.66930389404297, "lng": 450.01630229334677,
            "mobIcon": 18
        },
        {
            "id": 1152,
            "name": "Camp",
            "mobs": [{id: 18, amount: 3}],
            "lat": -382.125, "lng": 466.6039049235993,
            "mobIcon": 18
        },
        {
            "id": 1153,
            "name": "Camp",
            "mobs": [{id: 18, amount: 3}],
            "lat": -391.9334259033203, "lng": 504.42319128687393,
            "mobIcon": 18
        },
        {
            "id": 1154,
            "name": "Camp",
            "mobs": [{id: 18, amount: 3}],
            "lat": -407.7786865234375, "lng": 512.3227122904287,
            "mobIcon": 18
        },
        {
            "id": 1155,
            "name": "Camp",
            "mobs": [{id: 18, amount: 2}],
            "lat": -407.4402160644531, "lng": 441.1110903676783,
            "mobIcon": 18
        },
        {
            "id": 1156,
            "name": "Camp",
            "mobs": [{id: 18, amount: 2}],
            "lat": -418.75, "lng": 522.3451188455008,
            "mobIcon": 18
        },
        {
            "id": 1157,
            "name": "Camp",
            "mobs": [{id: 18, amount: 5}],
            "lat": -404.5, "lng": 529.3470713073006,
            "mobIcon": 18
        },
        {
            "id": 1158,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -377, "lng": 474.6,
            "mobIcon": 13
        },
        {
            "id": 1159,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -391.0109634399414, "lng": 444.4856390598472,
            "mobIcon": 13
        },
        {
            "id": 1160,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -415.35803985595703, "lng": 438.40966846615026,
            "mobIcon": 13
        },
        {
            "id": 1161,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -409.54327392578125, "lng": 490.65448058149406,
            "mobIcon": 13
        },
        {
            "id": 1162,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -420.1260681152344, "lng": 490.8676616882428,
            "mobIcon": 13
        },
        {
            "id": 1163,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -405.5, "lng": 518.9723259762309,
            "mobIcon": 13
        },
        {
            "id": 1164,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -398.375, "lng": 514.348896434635,
            "mobIcon": 13
        },
        {
            "id": 1165,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -405.875, "lng": 476.4740662139219,
            "mobIcon": 10
        },
        {
            "id": 1166,
            "name": "Camp",
            "mobs": [{id: 16, amount: 1}],
            "lat": -410.09580993652344, "lng": 463.1439807937182,
            "mobIcon": 16
        },
        {
            "id": 1167,
            "name": "Camp",
            "mobs": [{id: 16, amount: 1}],
            "lat": -411.5, "lng": 540.5867147707979,
            "mobIcon": 16
        },
        {
            "id": 1168,
            "name": "Camp",
            "mobs": [{id: 4, amount: 1}],
            "lat": -429, "lng": 521.3455857385399,
            "mobIcon": 4
        },
        {
            "id": 1169,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -432.25, "lng": 449.10823429541597,
            "mobIcon": 15
        },
        {
            "id": 1170,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -430.75, "lng": 456.10382003395586,
            "mobIcon": 14
        },
        {
            "id": 1171,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -422.25, "lng": 512.2182937181664,
            "mobIcon": 14
        },
        {
            "id": 1172,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -385.3239059448242, "lng": 515.9320481616087,
            "mobIcon": 14
        },
        {
            "id": 1173,
            "name": "Camp",
            "mobs": [{id: 14, amount: 3}],
            "lat": -372.62625885009766, "lng": 479.8436654419567,
            "mobIcon": 14
        },
        {
            "id": 1174,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}, {id: 14, amount: 2}],
            "lat": -379.07120513916016, "lng": 469.3379254430178,
            "mobIcon": 14
        },
        {
            "id": 1175,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}, {id: 14, amount: 2}],
            "lat": -387.375, "lng": 487.4696519524618,
            "mobIcon": 14
        },
        {
            "id": 1176,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}, {id: 17, amount: 3}, {id: 13, amount: 1}],
            "lat": -409.88875579833984, "lng": 485.3486417657046,
            "mobIcon": 17
        },
        {
            "id": 1177,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}, {id: 17, amount: 1}],
            "lat": -420.875, "lng": 473.35912563667233,
            "mobIcon": 18
        },
        {
            "id": 1178,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}, {id: 13, amount: 1}],
            "lat": -405.8617248535156, "lng": 496.622670011407,
            "mobIcon": 15
        },
        {
            "id": 1179,
            "name": "Camp",
            "mobs": [{id: 15, amount: 2}],
            "lat": -433.375, "lng": 433.8705857385399,
            "mobIcon": 15
        },
        {
            "id": 1180,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -439, "lng": 445.8578947368421,
            "mobIcon": 13
        },
        {
            "id": 1181,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -439.375, "lng": 501.7206281833616,
            "mobIcon": 13
        },
        {
            "id": 1182,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -442.77530670166016, "lng": 498.66493427684634,
            "mobIcon": 13
        },
        {
            "id": 1183,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -454.24629974365234, "lng": 511.4425456281834,
            "mobIcon": 14
        },
        {
            "id": 1184,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -451.64957427978516, "lng": 515.9611649777165,
            "mobIcon": 14
        },
        {
            "id": 1185,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -437.75, "lng": 458.351273344652,
            "mobIcon": 14
        },
        {
            "id": 1186,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}],
            "lat": -438.125, "lng": 477.34656196943973,
            "mobIcon": 18
        },
        {
            "id": 1187,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}],
            "lat": -439.2874755859375, "lng": 488.59467980687606,
            "mobIcon": 18
        },
        {
            "id": 1188,
            "name": "Camp",
            "mobs": [{id: 18, amount: 3}],
            "lat": -447, "lng": 506.7246179966044,
            "mobIcon": 18
        },
        {
            "id": 1189,
            "name": "Camp",
            "mobs": [{id: 18, amount: 3}],
            "lat": -443.375, "lng": 528.4698217317488,
            "mobIcon": 18
        },
        {
            "id": 1190,
            "name": "Camp",
            "mobs": [{id: 18, amount: 4}],
            "lat": -466.9134292602539, "lng": 485.96624343431665,
            "mobIcon": 18
        },
        {
            "id": 1191,
            "name": "Camp",
            "mobs": [{id: 18, amount: 4}],
            "lat": -455.55889892578125, "lng": 449.319496100382,
            "mobIcon": 18
        },
        {
            "id": 1192,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -632.25, "lng": 544.716298811545,
            "mobIcon": 15
        },
        {
            "id": 1193,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -619.875, "lng": 522.4738115449915,
            "mobIcon": 9
        },
        {
            "id": 1194,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 10, amount: 3}],
            "lat": -638.5358276367188, "lng": 555.0765498991935,
            "mobIcon": 10
        },
        {
            "id": 1195,
            "name": "Camp",
            "mobs": [{id: 10, amount: 2}, {id: 9, amount: 2}],
            "lat": -629.5807266235352, "lng": 555.0564459757004,
            "mobIcon": 10
        },
        {
            "id": 1196,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}, {id: 12, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -587.875, "lng": 521.7267826825127,
            "mobIcon": 7
        },
        {
            "id": 1197,
            "name": "Camp",
            "mobs": [{id: 17, amount: 1}],
            "lat": -347.4199752807617, "lng": 253.81629615874363,
            "mobIcon": 17
        },
        {
            "id": 1198,
            "name": "Camp",
            "mobs": [{id: 17, amount: 1}],
            "lat": -372.60267639160156, "lng": 249.05127176955114,
            "mobIcon": 17
        },
        {
            "id": 1199,
            "name": "Camp",
            "mobs": [{id: 17, amount: 1}],
            "lat": -367.75, "lng": 266.7325127334465,
            "mobIcon": 17
        },
        {
            "id": 1200,
            "name": "Camp",
            "mobs": [{id: 17, amount: 1}],
            "lat": -359.65111541748047, "lng": 264.87059933414685,
            "mobIcon": 17
        },
        {
            "id": 1201,
            "name": "Camp",
            "mobs": [{id: 17, amount: 1}],
            "lat": -357.75, "lng": 258.47614601018677,
            "mobIcon": 17
        },
        {
            "id": 1202,
            "name": "Camp",
            "mobs": [{id: 17, amount: 1}],
            "lat": -344.72489166259766, "lng": 193.17994167153014,
            "mobIcon": 17
        },
        {
            "id": 1202,
            "name": "Camp",
            "mobs": [{id: 17, amount: 2}],
            "lat": -379.74078369140625, "lng": 230.9315849161715,
            "mobIcon": 17
        },
        {
            "id": 1203,
            "name": "Camp",
            "mobs": [{id: 17, amount: 1}],
            "lat": -358, "lng": 171.8663170495543,
            "mobIcon": 17
        },
        {
            "id": 1204,
            "name": "Camp",
            "mobs": [{id: 17, amount: 2}],
            "lat": -459.75, "lng": 250.47262308998302,
            "mobIcon": 17
        },
        {
            "id": 1205,
            "name": "Camp",
            "mobs": [{id: 19, amount: 3}],
            "lat": -459.375, "lng": 257.8577674023769,
            "mobIcon": 19
        },
        {
            "id": 1206,
            "name": "Camp",
            "mobs": [{id: 19, amount: 5}],
            "lat": -441.4132995605469, "lng": 260.0719655268463,
            "mobIcon": 19
        },
        {
            "id": 1207,
            "name": "Camp",
            "mobs": [{id: 18, amount: 3}],
            "lat": -424, "lng": 269.98068760611204,
            "mobIcon": 18
        },
        {
            "id": 1208,
            "name": "Camp",
            "mobs": [{id: 18, amount: 3}],
            "lat": -397.3002395629883, "lng": 303.4100368739389,
            "mobIcon": 18
        },
        {
            "id": 1209,
            "name": "Camp",
            "mobs": [{id: 18, amount: 3}],
            "lat": -340.75, "lng": 181.7453310696095,
            "mobIcon": 18
        },
        {
            "id": 1210,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -417.7749481201172, "lng": 267.2320882852292,
            "mobIcon": 9
        },
        {
            "id": 1211,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -450.51915740966797, "lng": 305.2468484719864,
            "mobIcon": 9
        },
        {
            "id": 1212,
            "name": "Camp",
            "mobs": [{id: 16, amount: 1}],
            "lat": -452.125, "lng": 274.10649405772494,
            "mobIcon": 16
        },
        {
            "id": 1213,
            "name": "Camp",
            "mobs": [{id: 16, amount: 1}],
            "lat": -400.75, "lng": 294.6084465195246,
            "mobIcon": 16
        },
        {
            "id": 1214,
            "name": "Camp",
            "mobs": [{id: 16, amount: 1}, {id: 8, amount: 2}],
            "lat": -442.76634979248047, "lng": 283.0510407271329,
            "mobIcon": 16
        },
        {
            "id": 1215,
            "name": "Camp",
            "mobs": [{id: 19, amount: 2}, {id: 13, amount: 1}],
            "lat": -393.22042083740234, "lng": 293.8828595872241,
            "mobIcon": 19
        },
        {
            "id": 1216,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}, {id: 9, amount: 1}],
            "lat": -410.5, "lng": 283.2263582342954,
            "mobIcon": 15
        },
        {
            "id": 1217,
            "name": "Camp",
            "mobs": [{id: 11, amount: 2}, {id: 12, amount: 1}, {id: 9, amount: 2}],
            "lat": -419.5, "lng": 126.47941426146011,
            "mobIcon": 11
        },
        {
            "id": 1218,
            "name": "Camp",
            "mobs": [{id: 19, amount: 3}],
            "lat": -436.75, "lng": 120.24066213921901,
            "mobIcon": 19
        },
        {
            "id": 1219,
            "name": "Camp",
            "mobs": [{id: 7, amount: 2}],
            "lat": -399.8949432373047, "lng": 137.14336783080432,
            "mobIcon": 7
        },
        {
            "id": 1220,
            "name": "Camp",
            "mobs": [{id: 17, amount: 2}],
            "lat": -389.2157516479492, "lng": 105.4943798745225,
            "mobIcon": 17
        },
        {
            "id": 1221,
            "name": "Camp",
            "mobs": [{id: 17, amount: 1}],
            "lat": -405.5, "lng": 130.3617572156197,
            "mobIcon": 17
        },
        {
            "id": 1222,
            "name": "Camp",
            "mobs": [{id: 6, amount: 1}],
            "lat": -440.125, "lng": 130.4886247877759,
            "mobIcon": 6
        },
        {
            "id": 1223,
            "name": "Camp",
            "mobs": [{id: 16, amount: 1}],
            "lat": -363.75, "lng": 137.2374363327674,
            "mobIcon": 16
        },
        {
            "id": 1224,
            "name": "Camp",
            "mobs": [{id: 16, amount: 1}],
            "lat": -356.28206634521484, "lng": 192.7917416635717,
            "mobIcon": 16
        },
        {
            "id": 1225,
            "name": "Camp",
            "mobs": [{id: 4, amount: 1}],
            "lat": -360.125, "lng": 193.6121392190153,
            "mobIcon": 4
        },
        {
            "id": 1226,
            "name": "Camp",
            "mobs": [{id: 17, amount: 1}],
            "lat": -366, "lng": 147.23841256366723,
            "mobIcon": 17
        },
        {
            "id": 1227,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -361.5, "lng": 180.48493208828523,
            "mobIcon": 15
        },
        {
            "id": 1228,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -359.75, "lng": 167.1077674023769,
            "mobIcon": 15
        },
        {
            "id": 1229,
            "name": "Camp",
            "mobs": [{id: 15, amount: 3}],
            "lat": -362.25, "lng": 157.48535653650254,
            "mobIcon": 15
        },
        {
            "id": 1230,
            "name": "Camp",
            "mobs": [{id: 8, amount: 3}],
            "lat": -354.625, "lng": 159.1117572156197,
            "mobIcon": 8
        },
        {
            "id": 1231,
            "name": "Camp",
            "mobs": [{id: 19, amount: 4}],
            "lat": -363.9034729003906, "lng": 189.94118084478458,
            "mobIcon": 19
        },
        {
            "id": 1232,
            "name": "Camp",
            "mobs": [{id: 18, amount: 2}],
            "lat": -366.625, "lng": 162.36383701188456,
            "mobIcon": 18
        },
        {
            "id": 1233,
            "name": "Camp",
            "mobs": [{id: 18, amount: 2}],
            "lat": -379.1049118041992, "lng": 153.10740910839345,
            "mobIcon": 18
        },
        {
            "id": 1234,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}],
            "lat": -369, "lng": 176.7346349745331,
            "mobIcon": 18
        },
        {
            "id": 1235,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}],
            "lat": -372.75, "lng": 174.23896434634975,
            "mobIcon": 18
        },
        {
            "id": 1236,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}],
            "lat": -376.5, "lng": 182.6046689303905,
            "mobIcon": 18
        },
        {
            "id": 1237,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}],
            "lat": -381.5, "lng": 185.73238539898134,
            "mobIcon": 18
        },
        {
            "id": 1238,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}],
            "lat": -390.5, "lng": 204.60284380305603,
            "mobIcon": 18
        },
        {
            "id": 1239,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}],
            "lat": -414.00360107421875, "lng": 173.5718927406091,
            "mobIcon": 18
        },
        {
            "id": 1240,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}],
            "lat": -416.125, "lng": 230.30576254775042,
            "mobIcon": 18
        },
        {
            "id": 1241,
            "name": "Camp",
            "mobs": [{id: 18, amount: 3}],
            "lat": -418.125, "lng": 220.60636672325975,
            "mobIcon": 18
        },
        {
            "id": 1242,
            "name": "Camp",
            "mobs": [{id: 18, amount: 2}],
            "lat": -391.625, "lng": 215.34634974533105,
            "mobIcon": 18
        },
        {
            "id": 1243,
            "name": "Camp",
            "mobs": [{id: 19, amount: 2}],
            "lat": -398.875, "lng": 199.85305602716468,
            "mobIcon": 19
        },
        {
            "id": 1244,
            "name": "Camp",
            "mobs": [{id: 19, amount: 2}],
            "lat": -401.75, "lng": 190.73578098471987,
            "mobIcon": 19
        },
        {
            "id": 1245,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -396.75074005126953, "lng": 163.6850895983659,
            "mobIcon": 13
        },
        {
            "id": 1246,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -394.7594528198242, "lng": 156.8674872665535,
            "mobIcon": 13
        },
        {
            "id": 1247,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -398.625, "lng": 169.72801358234295,
            "mobIcon": 15
        },
        {
            "id": 1248,
            "name": "Camp",
            "mobs": [{id: 19, amount: 3}, {id: 13, amount: 1}],
            "lat": -389.625, "lng": 157.23552631578946,
            "mobIcon": 19
        },
        {
            "id": 1249,
            "name": "Camp",
            "mobs": [{id: 19, amount: 1}, {id: 13, amount: 2}],
            "lat": -386.125, "lng": 209.9682088285229,
            "mobIcon": 19
        },
        {
            "id": 1250,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}, {id: 12, amount: 1}, {id: 10, amount: 1}],
            "lat": -391.75, "lng": 166.8611205432937,
            "mobIcon": 7
        },
        {
            "id": 1251,
            "name": "Camp",
            "mobs": [{id: 17, amount: 1}],
            "lat": -377.25, "lng": 218.84613752122243,
            "mobIcon": 17
        },
        {
            "id": 1252,
            "name": "Camp",
            "mobs": [{id: 19, amount: 4}],
            "lat": -383, "lng": 217.4820882852292,
            "mobIcon": 19
        },
        {
            "id": 1253,
            "name": "Camp",
            "mobs": [{id: 19, amount: 2}],
            "lat": -452.24583435058594, "lng": 223.66964250185697,
            "mobIcon": 19
        },
        {
            "id": 1254,
            "name": "Camp",
            "mobs": [{id: 19, amount: 2}],
            "lat": -458.625, "lng": 200.73204584040747,
            "mobIcon": 19
        },
        {
            "id": 1255,
            "name": "Camp",
            "mobs": [{id: 8, amount: 2}],
            "lat": -455.75, "lng": 208.475,
            "mobIcon": 8
        },
        {
            "id": 1256,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -462.8162155151367, "lng": 195.79182439781408,
            "mobIcon": 15
        },
        {
            "id": 1257,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}, {id: 19, amount: 1}],
            "lat": -438.41419219970703, "lng": 240.1807648689516,
            "mobIcon": 19
        },
        {
            "id": 1258,
            "name": "Camp",
            "mobs": [{id: 19, amount: 1}],
            "lat": -441.6211929321289, "lng": 236.9633386168294,
            "mobIcon": 19
        },
        {
            "id": 1259,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -442.78226470947266, "lng": 242.465304674236,
            "mobIcon": 13
        },
        {
            "id": 1260,
            "name": "Camp",
            "mobs": [{id: 10, amount: 3}],
            "lat": -429.75, "lng": 205.60445670628184,
            "mobIcon": 10
        },
        {
            "id": 1261,
            "name": "Camp",
            "mobs": [{id: 6, amount: 1}, {id: 12, amount: 1}],
            "lat": -421.8149719238281, "lng": 205.19400500053058,
            "mobIcon": 6
        },
        {
            "id": 1262,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 9, amount: 2}],
            "lat": -445.48473358154297, "lng": 229.3889825843591,
            "mobIcon": 12
        },
        {
            "id": 1263,
            "name": "Camp",
            "mobs": [{id: 19, amount: 2}],
            "lat": -455, "lng": 173.7300509337861,
            "mobIcon": 19
        },
        {
            "id": 1264,
            "name": "Camp",
            "mobs": [{id: 15, amount: 2}],
            "lat": -451.625, "lng": 167.98429541595925,
            "mobIcon": 15
        },
        {
            "id": 1265,
            "name": "Camp",
            "mobs": [{id: 18, amount: 2}],
            "lat": -445.5, "lng": 164.86269100169778,
            "mobIcon": 18
        },
        {
            "id": 1265,
            "name": "Camp",
            "mobs": [{id: 18, amount: 2}],
            "lat": -445.5, "lng": 164.86269100169778,
            "mobIcon": 18
        },
        {
            "id": 1266,
            "name": "Camp",
            "mobs": [{id: 18, amount: 2}],
            "lat": -442.625, "lng": 162.99070458404074,
            "mobIcon": 18
        },
        {
            "id": 1267,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}],
            "lat": -438.2128219604492, "lng": 162.53310165534805,
            "mobIcon": 18
        },
        {
            "id": 1268,
            "name": "Camp",
            "mobs": [{id: 19, amount: 4}],
            "lat": -423.7128219604492, "lng": 169.030894524618,
            "mobIcon": 19
        },
        {
            "id": 1269,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 12, amount: 2}, {id: 10, amount: 2}],
            "lat": -484.4589614868164, "lng": 773.4802134178692,
            "mobIcon": 11
        },
        {
            "id": 1270,
            "name": "Camp",
            "mobs": [{id: 6, amount: 1}, {id: 10, amount: 2}, {id: 9, amount: 3}],
            "lat": -516.5, "lng": 733.2277164685909,
            "mobIcon": 6
        },
        {
            "id": 1271,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 9, amount: 3}],
            "lat": -538.25, "lng": 782.8502971137522,
            "mobIcon": 11
        },
        {
            "id": 1272,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -536.2924270629883, "lng": 787.2490522867148,
            "mobIcon": 10
        },
        {
            "id": 1273,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -561.4450454711914, "lng": 744.7229981297751,
            "mobIcon": 15
        },
        {
            "id": 1274,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -543.875, "lng": 817.4694397283531,
            "mobIcon": 15
        },
        {
            "id": 1275,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -474.625, "lng": 761.231494057725,
            "mobIcon": 15
        },
        {
            "id": 1276,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -490, "lng": 776.6020797962649,
            "mobIcon": 15
        },
        {
            "id": 1277,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -503.0397186279297, "lng": 811.4701612903226,
            "mobIcon": 15
        },
        {
            "id": 1278,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -490.1042022705078, "lng": 814.9614630862691,
            "mobIcon": 15
        },
        {
            "id": 1279,
            "name": "Camp",
            "mobs": [{id: 15, amount: 3}],
            "lat": -543, "lng": 759.2236842105264,
            "mobIcon": 15
        },
        {
            "id": 1280,
            "name": "Camp",
            "mobs": [{id: 19, amount: 3}],
            "lat": -493.4181594848633, "lng": 764.0357869535229,
            "mobIcon": 19
        },
        {
            "id": 1281,
            "name": "Camp",
            "mobs": [{id: 8, amount: 3}],
            "lat": -512.7128677368164, "lng": 746.4245712409805,
            "mobIcon": 8
        },
        {
            "id": 1282,
            "name": "Camp",
            "mobs": [{id: 8, amount: 3}],
            "lat": -523.875, "lng": 765.600169779287,
            "mobIcon": 8
        },
        {
            "id": 1283,
            "name": "Camp",
            "mobs": [{id: 8, amount: 3}],
            "lat": -534.5343475341797, "lng": 768.3816197341893,
            "mobIcon": 8
        },
        {
            "id": 1284,
            "name": "Camp",
            "mobs": [{id: 18, amount: 3}],
            "lat": -519.4242630004883, "lng": 759.8500868792445,
            "mobIcon": 18
        },
        {
            "id": 1285,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}],
            "lat": -515.375, "lng": 756.6025042444821,
            "mobIcon": 18
        },
        {
            "id": 1286,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}],
            "lat": -515.6511764526367, "lng": 760.7265280135823,
            "mobIcon": 18
        },
        {
            "id": 1287,
            "name": "Camp",
            "mobs": [{id: 19, amount: 2}],
            "lat": -539.375, "lng": 744.4746604414262,
            "mobIcon": 19
        },
        {
            "id": 1288,
            "name": "Camp",
            "mobs": [{id: 19, amount: 1}],
            "lat": -542.5, "lng": 748.1066638370119,
            "mobIcon": 19
        },
        {
            "id": 1289,
            "name": "Camp",
            "mobs": [{id: 19, amount: 2}],
            "lat": -532.7106704711914, "lng": 786.325089863646,
            "mobIcon": 19
        },
        {
            "id": 1290,
            "name": "Camp",
            "mobs": [{id: 17, amount: 2}],
            "lat": -531.875, "lng": 800.599363327674,
            "mobIcon": 17
        },
        {
            "id": 1291,
            "name": "Camp",
            "mobs": [{id: 16, amount: 1}, {id: 8, amount: 1}],
            "lat": -532.5846176147461, "lng": 752.0749986735993,
            "mobIcon": 16
        },
        {
            "id": 1292,
            "name": "Camp",
            "mobs": [{id: 16, amount: 1}],
            "lat": -530.614818572998, "lng": 767.5786389802631,
            "mobIcon": 16
        },
        {
            "id": 1293,
            "name": "Camp",
            "mobs": [{id: 16, amount: 1}],
            "lat": -494.4862174987793, "lng": 784.1877359335208,
            "mobIcon": 16
        },
        {
            "id": 1294,
            "name": "Camp",
            "mobs": [{id: 16, amount: 1}],
            "lat": -504.75, "lng": 776.6014855687606,
            "mobIcon": 16
        },
        {
            "id": 1295,
            "name": "Camp",
            "mobs": [{id: 16, amount: 1}],
            "lat": -501.75, "lng": 807.4796264855688,
            "mobIcon": 16
        },
        {
            "id": 1296,
            "name": "Camp",
            "mobs": [{id: 4, amount: 1}],
            "lat": -509.2220993041992, "lng": 738.7673748540959,
            "mobIcon": 4
        },
        {
            "id": 1297,
            "name": "Camp",
            "mobs": [{id: 8, amount: 1}],
            "lat": -525.125, "lng": 760.5962224108658,
            "mobIcon": 8
        },
        {
            "id": 1298,
            "name": "Camp",
            "mobs": [{id: 8, amount: 1}],
            "lat": -525, "lng": 769.0950764006791,
            "mobIcon": 8
        },
        {
            "id": 1299,
            "name": "Camp",
            "mobs": [{id: 8, amount: 1}],
            "lat": -510.79412841796875, "lng": 789.6957349586163,
            "mobIcon": 8
        },
        {
            "id": 1300,
            "name": "Camp",
            "mobs": [{id: 8, amount: 1}],
            "lat": -506.875, "lng": 786.9714770797963,
            "mobIcon": 8
        },
        {
            "id": 1301,
            "name": "Camp",
            "mobs": [{id: 8, amount: 1}],
            "lat": -503.07910537719727, "lng": 789.1792099957555,
            "mobIcon": 8
        },
        {
            "id": 1302,
            "name": "Camp",
            "mobs": [{id: 17, amount: 1}],
            "lat": -492.86561584472656, "lng": 749.9523981324278,
            "mobIcon": 17
        },
        {
            "id": 1303,
            "name": "Camp",
            "mobs": [{id: 17, amount: 1}],
            "lat": -494.67333221435547, "lng": 756.9271762919143,
            "mobIcon": 17
        },
        {
            "id": 1304,
            "name": "Camp",
            "mobs": [{id: 17, amount: 1}],
            "lat": -502.9661407470703, "lng": 750.3784672113752,
            "mobIcon": 17
        },
        {
            "id": 1305,
            "name": "Camp",
            "mobs": [{id: 18, amount: 3}],
            "lat": -560.8094711303711, "lng": 794.7796828575977,
            "mobIcon": 18
        },
        {
            "id": 1306,
            "name": "Camp",
            "mobs": [{id: 18, amount: 2}, {id: 14, amount: 1}],
            "lat": -572.3638763427734, "lng": 789.5981420442488,
            "mobIcon": 18
        },
        {
            "id": 1307,
            "name": "Camp",
            "mobs": [{id: 14, amount: 5}],
            "lat": -606.5, "lng": 784.0206182353566,
            "mobIcon": 14
        },
        {
            "id": 1308,
            "name": "Camp",
            "mobs": [{id: 14, amount: 2}],
            "lat": -617.625, "lng": 808.2231748726656,
            "mobIcon": 14
        },
        {
            "id": 1309,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -609.9690704345703, "lng": 855.2649266500424,
            "mobIcon": 12
        },
        {
            "id": 1310,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -611.7220916748047, "lng": 841.1581689701825,
            "mobIcon": 11
        },
        {
            "id": 1311,
            "name": "Camp",
            "mobs": [{id: 16, amount: 1}],
            "lat": -584.6940765380859, "lng": 815.317086030348,
            "mobIcon": 16
        },
        {
            "id": 1312,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -588.5, "lng": 783.4806027164686,
            "mobIcon": 15
        },
        {
            "id": 1313,
            "name": "Camp",
            "mobs": [{id: 19, amount: 1}],
            "lat": -594.5006561279297, "lng": 778.8873046875,
            "mobIcon": 19
        },
        {
            "id": 1314,
            "name": "Camp",
            "mobs": [{id: 19, amount: 1}],
            "lat": -610.875, "lng": 792.8516977928692,
            "mobIcon": 19
        },
        {
            "id": 1315,
            "name": "Camp",
            "mobs": [{id: 19, amount: 1}],
            "lat": -615.7233963012695, "lng": 794.6112627997666,
            "mobIcon": 19
        },
        {
            "id": 1316,
            "name": "Camp",
            "mobs": [{id: 19, amount: 1}],
            "lat": -615.6651077270508, "lng": 801.1382941824066,
            "mobIcon": 19
        },
        {
            "id": 1317,
            "name": "Camp",
            "mobs": [{id: 19, amount: 1}],
            "lat": -617.375, "lng": 804.4792020373515,
            "mobIcon": 19
        },
        {
            "id": 1318,
            "name": "Camp",
            "mobs": [{id: 19, amount: 3}],
            "lat": -611.75, "lng": 801.347623089983,
            "mobIcon": 19
        },
        {
            "id": 1319,
            "name": "Camp",
            "mobs": [{id: 19, amount: 3}],
            "lat": -582.625, "lng": 808.3460101867572,
            "mobIcon": 19
        },
        {
            "id": 1320,
            "name": "Camp",
            "mobs": [{id: 19, amount: 3}],
            "lat": -600.875, "lng": 816.4693548387097,
            "mobIcon": 19
        },
        {
            "id": 1321,
            "name": "Camp",
            "mobs": [{id: 19, amount: 4}],
            "lat": -603.9491004943848, "lng": 832.5812005915747,
            "mobIcon": 19
        },
        {
            "id": 1322,
            "name": "Camp",
            "mobs": [{id: 19, amount: 1}],
            "lat": -608.375, "lng": 821.7259762308998,
            "mobIcon": 19
        },
        {
            "id": 1323,
            "name": "Camp",
            "mobs": [{id: 19, amount: 1}],
            "lat": -613.9171752929688, "lng": 825.940418081494,
            "mobIcon": 19
        },
        {
            "id": 1324,
            "name": "Camp",
            "mobs": [{id: 19, amount: 1}],
            "lat": -615.4024887084961, "lng": 831.9443739057194,
            "mobIcon": 19
        },
        {
            "id": 1325,
            "name": "Camp",
            "mobs": [{id: 19, amount: 1}],
            "lat": -643.0498428344727, "lng": 856.097759709253,
            "mobIcon": 19
        },
        {
            "id": 1326,
            "name": "Camp",
            "mobs": [{id: 19, amount: 1}],
            "lat": -647.875, "lng": 849.2175297113752,
            "mobIcon": 19
        },
        {
            "id": 1327,
            "name": "Camp",
            "mobs": [{id: 19, amount: 2}],
            "lat": -650.75, "lng": 840.7183361629882,
            "mobIcon": 19
        },
        {
            "id": 1328,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -627.875, "lng": 845.5956281833617,
            "mobIcon": 9
        },
        {
            "id": 1329,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -644.48828125, "lng": 849.2768373965407,
            "mobIcon": 15
        },
        {
            "id": 1330,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 10, amount: 3}, {id: 9, amount: 3}],
            "lat": -629.479133605957, "lng": 838.0099838179117,
            "mobIcon": 11
        },
        {
            "id": 1331,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 12, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -602.5, "lng": 947.139540999045,
            "mobIcon": 11
        },
        {
            "id": 1332,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 9, amount: 1}, {id: 19, amount: 4}],
            "lat": -603.125, "lng": 910.2248302207131,
            "mobIcon": 19
        },
        {
            "id": 1333,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 10, amount: 2}],
            "lat": -612.1828002929688, "lng": 915.347659897602,
            "mobIcon": 11
        },
        {
            "id": 1334,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 9, amount: 2}],
            "lat": -612.1148071289062, "lng": 930.5495185165535,
            "mobIcon": 11
        },
        {
            "id": 1335,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -631.5, "lng": 906.8547113752122,
            "mobIcon": 10
        },
        {
            "id": 1336,
            "name": "Camp",
            "mobs": [{id: 19, amount: 1}, {id: 9, amount: 1}],
            "lat": -625, "lng": 916.9009695988964,
            "mobIcon": 19
        },
        {
            "id": 1337,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 9, amount: 1}],
            "lat": -603.918830871582, "lng": 937.452771514219,
            "mobIcon": 12
        },
        {
            "id": 1338,
            "name": "Camp",
            "mobs": [{id: 19, amount: 3}],
            "lat": -623.2900390625, "lng": 929.875814410017,
            "mobIcon": 19
        },
        {
            "id": 1339,
            "name": "Camp",
            "mobs": [{id: 19, amount: 1}],
            "lat": -627.125, "lng": 922.2167623885823,
            "mobIcon": 19
        },
        {
            "id": 1340,
            "name": "Camp",
            "mobs": [{id: 19, amount: 1}],
            "lat": -631.375, "lng": 922.1268128581282,
            "mobIcon": 19
        },
        {
            "id": 1341,
            "name": "Camp",
            "mobs": [{id: 19, amount: 1}],
            "lat": -629.75, "lng": 918.7268675721562,
            "mobIcon": 19
        },
        {
            "id": 1342,
            "name": "Camp",
            "mobs": [{id: 9, amount: 4}],
            "lat": -577.125, "lng": 916.4755093378608,
            "mobIcon": 9
        },
        {
            "id": 1343,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -591.875, "lng": 931.848259762309,
            "mobIcon": 9
        },
        {
            "id": 1344,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -590.2781372070312, "lng": 909.5588291861205,
            "mobIcon": 9
        },
        {
            "id": 1345,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -604.4611053466797, "lng": 942.5900480157046,
            "mobIcon": 10
        },
        {
            "id": 1346,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -595.875, "lng": 940.8492359932088,
            "mobIcon": 10
        },
        {
            "id": 1347,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -598.875, "lng": 951.0909168081494,
            "mobIcon": 10
        },
        {
            "id": 1348,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}],
            "lat": -596.625, "lng": 946.9704584040747,
            "mobIcon": 11
        },
        {
            "id": 1349,
            "name": "Camp",
            "mobs": [{id: 11, amount: 3}],
            "lat": -596.375, "lng": 931.4692275042445,
            "mobIcon": 11
        },
        {
            "id": 1350,
            "name": "Camp",
            "mobs": [{id: 18, amount: 3}],
            "lat": -559.125, "lng": 913.4694397283531,
            "mobIcon": 18
        },
        {
            "id": 1351,
            "name": "Camp",
            "mobs": [{id: 18, amount: 3}],
            "lat": -546.375, "lng": 906.8471137521223,
            "mobIcon": 18
        },
        {
            "id": 1352,
            "name": "Camp",
            "mobs": [{id: 19, amount: 3}],
            "lat": -553.9225158691406, "lng": 874.9003873089983,
            "mobIcon": 19
        },
        {
            "id": 1353,
            "name": "Camp",
            "mobs": [{id: 19, amount: 3}],
            "lat": -557.982795715332, "lng": 889.1273228591893,
            "mobIcon": 19
        },
        {
            "id": 1354,
            "name": "Camp",
            "mobs": [{id: 13, amount: 4}],
            "lat": -525.25, "lng": 904.5991935483871,
            "mobIcon": 13
        },
        {
            "id": 1355,
            "name": "Camp",
            "mobs": [{id: 17, amount: 3}],
            "lat": -533.5023956298828, "lng": 831.6794792550934,
            "mobIcon": 17
        },
        {
            "id": 1356,
            "name": "Camp",
            "mobs": [{id: 18, amount: 2}],
            "lat": -544.9780654907227, "lng": 845.8980787086163,
            "mobIcon": 18
        },
        {
            "id": 1357,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}],
            "lat": -534, "lng": 855.344312393888,
            "mobIcon": 18
        },
        {
            "id": 1358,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}],
            "lat": -474.2673797607422, "lng": 860.3212588868846,
            "mobIcon": 18
        },
        {
            "id": 1359,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}],
            "lat": -495.6995315551758, "lng": 892.4158511513158,
            "mobIcon": 18
        },
        {
            "id": 1360,
            "name": "Camp",
            "mobs": [{id: 18, amount: 1}],
            "lat": -488.5, "lng": 887.7205008488964,
            "mobIcon": 18
        },
        {
            "id": 1361,
            "name": "Camp",
            "mobs": [{id: 18, amount: 3}],
            "lat": -494.75, "lng": 876.349363327674,
            "mobIcon": 18
        },
        {
            "id": 1362,
            "name": "Camp",
            "mobs": [{id: 18, amount: 2}, {id: 14, amount: 2}],
            "lat": -491.375, "lng": 890.0943972835314,
            "mobIcon": 18
        },
        {
            "id": 1363,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -482.9931411743164, "lng": 886.2846276793293,
            "mobIcon": 15
        },
        {
            "id": 1364,
            "name": "Camp",
            "mobs": [{id: 16, amount: 1}],
            "lat": -519.4151229858398, "lng": 822.9893556345501,
            "mobIcon": 16
        },
        {
            "id": 1365,
            "name": "Camp",
            "mobs": [{id: 19, amount: 1}],
            "lat": -469.40001678466797, "lng": 852.9620656037775,
            "mobIcon": 19
        },
        {
            "id": 1366,
            "name": "Camp",
            "mobs": [{id: 19, amount: 3}],
            "lat": -479.0679168701172, "lng": 836.8395151342318,
            "mobIcon": 19
        },
        {
            "id": 1367,
            "name": "Camp",
            "mobs": [{id: 19, amount: 3}],
            "lat": -508.75, "lng": 845.9659168081494,
            "mobIcon": 19
        },
        {
            "id": 1368,
            "name": "Camp",
            "mobs": [{id: 19, amount: 4}],
            "lat": -494.35125732421875, "lng": 828.2900708961163,
            "mobIcon": 19
        },
        {
            "id": 1369,
            "name": "Camp",
            "mobs": [{id: 19, amount: 2}, {id: 13, amount: 1}],
            "lat": -512.125, "lng": 829.0987691001698,
            "mobIcon": 19
        },
        {
            "id": 1370,
            "name": "Camp",
            "mobs": [{id: 11, amount: 2}, {id: 10, amount: 1}],
            "lat": -511.125, "lng": 835.7219439728353,
            "mobIcon": 11
        },
        {
            "id": 1371,
            "name": "Camp",
            "mobs": [{id: 18, amount: 2}],
            "lat": -513.5118179321289, "lng": 824.4577433613646,
            "mobIcon": 18
        },
        {
            "id": 1372,
            "name": "Camp",
            "mobs": [{id: 18, amount: 3}],
            "lat": -509.125, "lng": 862.0904499151104,
            "mobIcon": 18
        },
        {
            "id": 1373,
            "name": "Camp",
            "mobs": [{id: 14, amount: 4}],
            "lat": -518.6775665283203, "lng": 839.3023570140068,
            "mobIcon": 14
        },
        {
            "id": 1374,
            "name": "Camp",
            "mobs": [{id: 14, amount: 2}],
            "lat": -490.875, "lng": 863.8489388794567,
            "mobIcon": 14
        },
        {
            "id": 1375,
            "name": "Camp",
            "mobs": [{id: 14, amount: 2}],
            "lat": -488.75, "lng": 859.2477859056664,
            "mobIcon": 14
        },
        {
            "id": 1376,
            "name": "Camp",
            "mobs": [{id: 14, amount: 3}],
            "lat": -486.25, "lng": 854.7307724957556,
            "mobIcon": 14
        },
        {
            "id": 1377,
            "name": "Camp",
            "mobs": [{id: 17, amount: 3}],
            "lat": -486.75, "lng": 814.3557300509337,
            "mobIcon": 17
        },
        {
            "id": 1378,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -472.6704788208008, "lng": 854.9403527562606,
            "mobIcon": 13
        },
        {
            "id": 1379,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -484.7678680419922, "lng": 842.5834249655136,
            "mobIcon": 9
        },
        {
            "id": 1380,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}],
            "lat": -487.4078674316406, "lng": 840.6001256764644,
            "mobIcon": 12
        },
        {
            "id": 1381,
            "name": "Camp",
            "mobs": [{id: 17, amount: 1}],
            "lat": -583.1376266479492, "lng": 841.7730087409805,
            "mobIcon": 17
        },
        {
            "id": 1382,
            "name": "Camp",
            "mobs": [{id: 17, amount: 1}],
            "lat": -577.25, "lng": 855.5932937181664,
            "mobIcon": 17
        },
        {
            "id": 1383,
            "name": "Camp",
            "mobs": [{id: 17, amount: 2}],
            "lat": -569.5821151733398, "lng": 832.0591422166808,
            "mobIcon": 17
        },
        {
            "id": 1384,
            "name": "Camp",
            "mobs": [{id: 17, amount: 2}],
            "lat": -567.4632415771484, "lng": 855.9934127626274,
            "mobIcon": 17
        },
        {
            "id": 1385,
            "name": "Camp",
            "mobs": [{id: 17, amount: 2}],
            "lat": -568.375, "lng": 850.344312393888,
            "mobIcon": 17
        },
        {
            "id": 1386,
            "name": "Camp",
            "mobs": [{id: 17, amount: 2}],
            "lat": -563.7661895751953, "lng": 845.3250570352292,
            "mobIcon": 17
        },
        {
            "id": 1387,
            "name": "Camp",
            "mobs": [{id: 17, amount: 3}],
            "lat": -583.375, "lng": 848.5946943972835,
            "mobIcon": 17
        },
        {
            "id": 1388,
            "name": "Camp",
            "mobs": [{id: 17, amount: 3}],
            "lat": -563.5164031982422, "lng": 849.5279011698854,
            "mobIcon": 17
        },
        {
            "id": 1389,
            "name": "Camp",
            "mobs": [{id: 17, amount: 3}],
            "lat": -564.875, "lng": 840.468972835314,
            "mobIcon": 17
        },
        {
            "id": 1390,
            "name": "Camp",
            "mobs": [{id: 17, amount: 1}, {id: 13, amount: 1}],
            "lat": -572, "lng": 846.7299235993208,
            "mobIcon": 17
        },
        {
            "id": 1391,
            "name": "Camp",
            "mobs": [{id: 18, amount: 2}, {id: 14, amount: 2}],
            "lat": -569.1422729492188, "lng": 894.6916158213073,
            "mobIcon": 18
        },
        {
            "id": 1392,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -594.75, "lng": 880.8475382003396,
            "mobIcon": 11
        },
        {
            "id": 1393,
            "name": "Camp",
            "mobs": [{id: 13, amount: 3}],
            "lat": -599.75, "lng": 874.347156196944,
            "mobIcon": 13
        },
        {
            "id": 1394,
            "name": "Camp",
            "mobs": [{id: 19, amount: 3}],
            "lat": -585.2514190673828, "lng": 896.0326264723047,
            "mobIcon": 19
        },
        {
            "id": 1395,
            "name": "Camp",
            "mobs": [{id: 19, amount: 1}],
            "lat": -585.125, "lng": 890.469779286927,
            "mobIcon": 19
        },
        {
            "id": 1396,
            "name": "Camp",
            "mobs": [{id: 19, amount: 1}],
            "lat": -587.8134002685547, "lng": 885.0936342715407,
            "mobIcon": 19
        },
        {
            "id": 1397,
            "name": "Camp",
            "mobs": [{id: 19, amount: 1}],
            "lat": -590.7021789550781, "lng": 888.056947355157,
            "mobIcon": 19
        },
        {
            "id": 1398,
            "name": "Camp",
            "mobs": [{id: 19, amount: 1}],
            "lat": -592.25, "lng": 883.7207555178268,
            "mobIcon": 19
        },
        {
            "id": 1399,
            "name": "Camp",
            "mobs": [{id: 1, amount: 3}, {id: 6, amount: 1}, {id: 9, amount: 2}],
            "lat": -911.0054321289062, "lng": 546.8567583430603,
            "mobIcon": 1
        },
        {
            "id": 1400,
            "name": "Camp",
            "mobs": [{id: 20, amount: 4}, {id: 6, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 2}],
            "lat": -907.04736328125, "lng": 568.1509788837012,
            "mobIcon": 20
        },
        {
            "id": 1401,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 12, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}, {id: 13, amount: 1}],
            "lat": -960.5213928222656, "lng": 534.1212008568548,
            "mobIcon": 11
        },
        {
            "id": 1402,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 2}],
            "lat": -944, "lng": 527.8546689303905,
            "mobIcon": 11
        },
        {
            "id": 1403,
            "name": "Camp",
            "mobs": [{id: 19, amount: 3}],
            "lat": -954.25, "lng": 542.6039898132428,
            "mobIcon": 19
        },
        {
            "id": 1404,
            "name": "Camp",
            "mobs": [{id: 9, amount: 2}],
            "lat": -942.25, "lng": 532.8545415959253,
            "mobIcon": 9
        },
        {
            "id": 1405,
            "name": "Camp",
            "mobs": [{id: 20, amount: 2}],
            "lat": -934.5, "lng": 526.9818760611206,
            "mobIcon": 20
        },
        {
            "id": 1406,
            "name": "Camp",
            "mobs": [{id: 20, amount: 2}],
            "lat": -956.375, "lng": 561.9748726655348,
            "mobIcon": 20
        },
        {
            "id": 1407,
            "name": "Camp",
            "mobs": [{id: 20, amount: 2}],
            "lat": -958.5, "lng": 549.2283531409169,
            "mobIcon": 20
        },
        {
            "id": 1408,
            "name": "Camp",
            "mobs": [{id: 6, amount: 1}],
            "lat": -930.875, "lng": 550.9744057724957,
            "mobIcon": 6
        },
        {
            "id": 1409,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}],
            "lat": -911.875, "lng": 523.7267826825127,
            "mobIcon": 11
        },
        {
            "id": 1410,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -912.25, "lng": 530.4729202037352,
            "mobIcon": 15
        },
        {
            "id": 1411,
            "name": "Camp",
            "mobs": [{id: 15, amount: 2}],
            "lat": -909.5999984741211, "lng": 503.39404744535227,
            "mobIcon": 15
        },
        {
            "id": 1412,
            "name": "Camp",
            "mobs": [{id: 17, amount: 2}],
            "lat": -903.375, "lng": 524.603013582343,
            "mobIcon": 17
        },
        {
            "id": 1413,
            "name": "Camp",
            "mobs": [{id: 17, amount: 2}],
            "lat": -905.8120269775391, "lng": 507.3606960950764,
            "mobIcon": 17
        },
        {
            "id": 1414,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 9, amount: 3}],
            "lat": -898.3522834777832, "lng": 525.6095411316851,
            "mobIcon": 9
        },
        {
            "id": 1415,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 9, amount: 3}],
            "lat": -895.125, "lng": 571.5952886247878,
            "mobIcon": 9
        },
        {
            "id": 1416,
            "name": "Camp",
            "mobs": [{id: 12, amount: 3}, {id: 13, amount: 1}],
            "lat": -893.75, "lng": 576.0948641765705,
            "mobIcon": 12
        },
        {
            "id": 1417,
            "name": "Camp",
            "mobs": [{id: 12, amount: 3}, {id: 13, amount: 2}],
            "lat": -899.25, "lng": 578.6079796264855,
            "mobIcon": 12
        },
        {
            "id": 1418,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 12, amount: 1}, {id: 9, amount: 1}, {id: 13, amount: 1}],
            "lat": -891.125, "lng": 491.2357809847199,
            "mobIcon": 11
        },
        {
            "id": 1419,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 7, amount: 1}, {id: 9, amount: 3}],
            "lat": -824.75, "lng": 646.9705857385399,
            "mobIcon": 11
        },
        {
            "id": 1420,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 7, amount: 1}, {id: 9, amount: 3}],
            "lat": -883.1164169311523, "lng": 599.7974141818761,
            "mobIcon": 11
        },
        {
            "id": 1421,
            "name": "Camp",
            "mobs": [{id: 10, amount: 2}, {id: 9, amount: 2}],
            "lat": -883.1164169311523, "lng": 599.7974141818761,
            "mobIcon": 10
        },
        {
            "id": 1422,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 13, amount: 2}],
            "lat": -866.75, "lng": 634.4693548387097,
            "mobIcon": 13
        },
        {
            "id": 1423,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 13, amount: 1}],
            "lat": -870.5, "lng": 636.9753820033956,
            "mobIcon": 12
        },
        {
            "id": 1424,
            "name": "Camp",
            "mobs": [{id: 10, amount: 4}],
            "lat": -870, "lng": 600.4779711375212,
            "mobIcon": 10
        },
        {
            "id": 1425,
            "name": "Camp",
            "mobs": [{id: 13, amount: 4}],
            "lat": -889.2191162109375, "lng": 592.5798778384974,
            "mobIcon": 13
        },
        {
            "id": 1426,
            "name": "Camp",
            "mobs": [{id: 17, amount: 2}],
            "lat": -850.5860061645508, "lng": 594.5596333165323,
            "mobIcon": 17
        },
        {
            "id": 1427,
            "name": "Camp",
            "mobs": [{id: 17, amount: 2}],
            "lat": -815.625, "lng": 567.4731748726656,
            "mobIcon": 17
        },
        {
            "id": 1428,
            "name": "Camp",
            "mobs": [{id: 17, amount: 2}],
            "lat": -809.5, "lng": 554.5968166383701,
            "mobIcon": 17
        },
        {
            "id": 1429,
            "name": "Camp",
            "mobs": [{id: 17, amount: 2}],
            "lat": -801.5, "lng": 542.2546596455858,
            "mobIcon": 17
        },
        {
            "id": 1430,
            "name": "Camp",
            "mobs": [{id: 17, amount: 3}],
            "lat": -823.5, "lng": 586.3474957555178,
            "mobIcon": 17
        },
        {
            "id": 1431,
            "name": "Camp",
            "mobs": [{id: 17, amount: 3}],
            "lat": -832.5, "lng": 584.8457979626486,
            "mobIcon": 17
        },
        {
            "id": 1432,
            "name": "Camp",
            "mobs": [{id: 17, amount: 3}],
            "lat": -833.5, "lng": 588.8516977928692,
            "mobIcon": 17
        },
        {
            "id": 1433,
            "name": "Camp",
            "mobs": [{id: 17, amount: 3}],
            "lat": -836.125, "lng": 544.3479626485569,
            "mobIcon": 17
        },
        {
            "id": 1434,
            "name": "Camp",
            "mobs": [{id: 17, amount: 3}],
            "lat": -839.625, "lng": 539.1061120543294,
            "mobIcon": 17
        },
        {
            "id": 1435,
            "name": "Camp",
            "mobs": [{id: 1, amount: 1}, {id: 17, amount: 2}],
            "lat": -835.9698028564453, "lng": 561.2213981589558,
            "mobIcon": 17
        },
        {
            "id": 1436,
            "name": "Camp",
            "mobs": [{id: 17, amount: 1}],
            "lat": -819.0712852478027, "lng": 558.1107372134975,
            "mobIcon": 17
        },
        {
            "id": 1437,
            "name": "Camp",
            "mobs": [{id: 17, amount: 1}],
            "lat": -796.4098205566406, "lng": 517.599251910017,
            "mobIcon": 17
        },
        {
            "id": 1438,
            "name": "Camp",
            "mobs": [{id: 17, amount: 1}],
            "lat": -796.375, "lng": 512.8562818336163,
            "mobIcon": 17
        },
        {
            "id": 1439,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -775, "lng": 516.231494057725,
            "mobIcon": 9
        },
        {
            "id": 1440,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -793.875, "lng": 528.1064091680815,
            "mobIcon": 15
        },
        {
            "id": 1441,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -834.125, "lng": 554.8511035653651,
            "mobIcon": 15
        },
        {
            "id": 1442,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -841.875, "lng": 521.9787351443124,
            "mobIcon": 15
        },
        {
            "id": 1443,
            "name": "Camp",
            "mobs": [{id: 15, amount: 2}],
            "lat": -830, "lng": 596.8441850594228,
            "mobIcon": 15
        },
        {
            "id": 1444,
            "name": "Camp",
            "mobs": [{id: 13, amount: 2}],
            "lat": -830, "lng": 601.9715619694398,
            "mobIcon": 13
        },
        {
            "id": 1445,
            "name": "Camp",
            "mobs": [{id: 20, amount: 2}],
            "lat": -816.4891204833984, "lng": 509.7604202037351,
            "mobIcon": 20
        },
        {
            "id": 1446,
            "name": "Camp",
            "mobs": [{id: 20, amount: 2}],
            "lat": -802, "lng": 533.8565365025466,
            "mobIcon": 20
        },
        {
            "id": 1447,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 9, amount: 3}],
            "lat": -830.125, "lng": 528.3557724957556,
            "mobIcon": 11
        },
        {
            "id": 1448,
            "name": "Camp",
            "mobs": [{id: 17, amount: 1}, {id: 12, amount: 1}, {id: 9, amount: 3}],
            "lat": -827.5, "lng": 587.3498726655348,
            "mobIcon": 17
        },
        {
            "id": 1449,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 12, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -834.25, "lng": 598.5957555178268,
            "mobIcon": 11
        },
        {
            "id": 1450,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 2}],
            "lat": -785.3564758300781, "lng": 516.3828904260399,
            "mobIcon": 12
        },
        {
            "id": 1451,
            "name": "Camp",
            "mobs": [{id: 1, amount: 1}, {id: 17, amount: 2}],
            "lat": -822, "lng": 540.604584040747,
            "mobIcon": 17
        },
        {
            "id": 1452,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 9, amount: 3}],
            "lat": -848.2830123901367, "lng": 574.8568642893146,
            "mobIcon": 11
        },
        {
            "id": 1453,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 9, amount: 3}],
            "lat": -857.2360458374023, "lng": 574.5060145638795,
            "mobIcon": 11
        },
        {
            "id": 1454,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 7, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -858.14208984375, "lng": 552.4946705220713,
            "mobIcon": 11
        },
        {
            "id": 1455,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -854.5741271972656, "lng": 550.1328774936333,
            "mobIcon": 10
        },
        {
            "id": 1456,
            "name": "Camp",
            "mobs": [{id: 10, amount: 1}],
            "lat": -861.375, "lng": 556.606494057725,
            "mobIcon": 10
        },
        {
            "id": 1457,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -863.75, "lng": 560.4811544991511,
            "mobIcon": 15
        },
        {
            "id": 1458,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -863.8867263793945, "lng": 624.7254700432406,
            "mobIcon": 15
        },
        {
            "id": 1459,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}],
            "lat": -854.875, "lng": 580.3502122241086,
            "mobIcon": 11
        },
        {
            "id": 1460,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}],
            "lat": -871.851448059082, "lng": 586.3482173174873,
            "mobIcon": 7
        },
        {
            "id": 1461,
            "name": "Camp",
            "mobs": [{id: 7, amount: 2}],
            "lat": -870.875, "lng": 581.7294142614601,
            "mobIcon": 7
        },
        {
            "id": 1462,
            "name": "Camp",
            "mobs": [{id: 7, amount: 2}],
            "lat": -862, "lng": 568.2331918505943,
            "mobIcon": 7
        },
        {
            "id": 1463,
            "name": "Camp",
            "mobs": [{id: 7, amount: 2}],
            "lat": -866.5048065185547, "lng": 575.0558965142191,
            "mobIcon": 7
        },
        {
            "id": 1464,
            "name": "Camp",
            "mobs": [{id: 7, amount: 2}],
            "lat": -863, "lng": 579.9724533106961,
            "mobIcon": 7
        },
        {
            "id": 1465,
            "name": "Camp",
            "mobs": [{id: 7, amount: 3}],
            "lat": -878.25, "lng": 574.7283955857386,
            "mobIcon": 7
        },
        {
            "id": 1466,
            "name": "Camp",
            "mobs": [{id: 20, amount: 2}],
            "lat": -873.7682495117188, "lng": 567.3832026275998,
            "mobIcon": 20
        },
        {
            "id": 1467,
            "name": "Camp",
            "mobs": [{id: 13, amount: 4}],
            "lat": -844.5, "lng": 562.6077674023769,
            "mobIcon": 13
        },
        {
            "id": 1468,
            "name": "Camp",
            "mobs": [{id: 20, amount: 2}],
            "lat": -850.2660522460938, "lng": 499.2743338152589,
            "mobIcon": 20
        },
        {
            "id": 1469,
            "name": "Camp",
            "mobs": [{id: 20, amount: 1}],
            "lat": -865.5, "lng": 497.48204584040747,
            "mobIcon": 20
        },
        {
            "id": 1470,
            "name": "Camp",
            "mobs": [{id: 20, amount: 1}],
            "lat": -877.125, "lng": 496.85836162988113,
            "mobIcon": 20
        },
        {
            "id": 1471,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}],
            "lat": -846, "lng": 530.3509762308998,
            "mobIcon": 11
        },
        {
            "id": 1472,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}],
            "lat": -878, "lng": 523.8498726655348,
            "mobIcon": 12
        },
        {
            "id": 1473,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 9, amount: 1}],
            "lat": -887, "lng": 530.6084465195246,
            "mobIcon": 12
        },
        {
            "id": 1474,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 9, amount: 2}],
            "lat": -871.875, "lng": 519.1040747028862,
            "mobIcon": 12
        },
        {
            "id": 1475,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}, {id: 9, amount: 2}],
            "lat": -855.875, "lng": 528.2269524617997,
            "mobIcon": 7
        },
        {
            "id": 1476,
            "name": "Camp",
            "mobs": [{id: 10, amount: 3}, {id: 9, amount: 1}],
            "lat": -849.375, "lng": 508.6073853989813,
            "mobIcon": 10
        },
        {
            "id": 1477,
            "name": "Camp",
            "mobs": [{id: 12, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 2}],
            "lat": -865.375, "lng": 529.7255517826825,
            "mobIcon": 12
        },
        {
            "id": 1478,
            "name": "Camp",
            "mobs": [{id: 11, amount: 1}, {id: 10, amount: 1}, {id: 9, amount: 1}],
            "lat": -868.993408203125, "lng": 508.5463480873302,
            "mobIcon": 11
        },
        {
            "id": 1479,
            "name": "Camp",
            "mobs": [{id: 20, amount: 1}, {id: 10, amount: 2}, {id: 9, amount: 2}],
            "lat": -860.5, "lng": 516.6050084889644,
            "mobIcon": 20
        },
        {
            "id": 1480,
            "name": "Camp",
            "mobs": [{id: 10, amount: 2}, {id: 9, amount: 2}],
            "lat": -859.375, "lng": 510.10178268251275,
            "mobIcon": 10
        },
    ],
    chasm: [
        {
            "id": 1489,
            "name": "Camp",
            "mobs": [{id: 7, amount: 2}],
            "lat": -714.2633675699815, "lng": 102.5206014034271,
            "mobIcon": 7
        },
        {
            "id": 1490,
            "name": "Camp",
            "mobs": [{id: 29, amount: 1}],
            "lat": -713.3934380053006, "lng": 143.70226481112348,
            "mobIcon": 29
        },
        {
            "id": 1491,
            "name": "Camp",
            "mobs": [{id: 20, amount: 3}],
            "lat": -711.6389786588949, "lng": 191.14381386299956,
            "mobIcon": 20
        },
        {
            "id": 1492,
            "name": "Camp",
            "mobs": [{id: 22, amount: 1}],
            "lat": -642.764895292265, "lng": 313.55711191665904,
            "mobIcon": 22
        },
        {
            "id": 1493,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -646.5232213787106, "lng": 358.78548267748613,
            "mobIcon": 13
        },
        {
            "id": 1494,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -809.1914434560971, "lng": 519.0579163098514,
            "mobIcon": 13
        },
        {
            "id": 1495,
            "name": "Camp",
            "mobs": [{id: 22, amount: 1}],
            "lat": -665.2749782593368, "lng": 510.55031926303445,
            "mobIcon": 22
        },
        {
            "id": 1496,
            "name": "Camp",
            "mobs": [{id: 22, amount: 1}],
            "lat": -799.5407901849719, "lng": 583.8082738179369,
            "mobIcon": 22
        },
        {
            "id": 1497,
            "name": "Camp",
            "mobs": [{id: 22, amount: 1}],
            "lat": -630.5619299273084, "lng": 592.8173902741172,
            "mobIcon": 22
        },
        {
            "id": 1498,
            "name": "Camp",
            "mobs": [{id: 24, amount: 1}],
            "lat": -701.1459725157345, "lng": 460.00470508960564,
            "mobIcon": 24
        },
        {
            "id": 1499,
            "name": "Camp",
            "mobs": [{id: 26, amount: 4}],
            "lat": -760.0366653348062, "lng": 491.54629729707256,
            "mobIcon": 26
        },
        {
            "id": 1500,
            "name": "Camp",
            "mobs": [{id: 26, amount: 2}, {id: 13, amount: 1}],
            "lat": -810.3426414602895, "lng": 548.7028322837596,
            "mobIcon": 26
        },
        {
            "id": 1501,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}, {id: 26, amount: 5}, {id: 13, amount: 1}],
            "lat": -700.3046482166964, "lng": 493.20944738499463,
            "mobIcon": 26
        },
        {
            "id": 1502,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}, {id: 26, amount: 6}],
            "lat": -763.7809436062986, "lng": 709.9337494128138,
            "mobIcon": 26
        },
        {
            "id": 1503,
            "name": "Camp",
            "mobs": [{id: 12, amount: 3}],
            "lat": -792.6434854396315, "lng": 759.9021706144982,
            "mobIcon": 22
        },
        {
            "id": 1504,
            "name": "Camp",
            "mobs": [{id: 17, amount: 2}],
            "lat": -721.0870702030163, "lng": 709.2995148698421,
            "mobIcon": 17
        },
        {
            "id": 1505,
            "name": "Camp",
            "mobs": [{id: 17, amount: 1}],
            "lat": -764.521121021656, "lng": 766.507279680446,
            "mobIcon": 17
        },
        {
            "id": 1506,
            "name": "Camp",
            "mobs": [{id: 17, amount: 1}],
            "lat": -773.3963360670442, "lng": 758.936684174863,
            "mobIcon": 17
        },
        {
            "id": 1507,
            "name": "Camp",
            "mobs": [{id: 1, amount: 1}],
            "lat": -811.7135611151344, "lng": 712.6601787241638,
            "mobIcon": 1
        },
        {
            "id": 1508,
            "name": "Camp",
            "mobs": [{id: 1, amount: 1}],
            "lat": -828.0913289211095, "lng": 740.3243375188107,
            "mobIcon": 1
        },
        {
            "id": 1509,
            "name": "Camp",
            "mobs": [{id: 1, amount: 1}],
            "lat": -840.140677004759, "lng": 719.8197000790362,
            "mobIcon": 1
        },
        {
            "id": 1510,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -816.5334571180107, "lng": 740.3053243762315,
            "mobIcon": 9
        },
        {
            "id": 1511,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -835.3400704409426, "lng": 701.6046686437868,
            "mobIcon": 9
        },
        {
            "id": 1512,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -745.2650480644934, "lng": 687.5399515285549,
            "mobIcon": 9
        },
        {
            "id": 1513,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -672.7812059196117, "lng": 734.8688774142188,
            "mobIcon": 9
        },
        {
            "id": 1514,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}],
            "lat": -639.4602931528295, "lng": 740.5660572833958,
            "mobIcon": 7
        },
        {
            "id": 1515,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}],
            "lat": -659.7799433567584, "lng": 661.7881639881274,
            "mobIcon": 7
        },
        {
            "id": 1516,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}],
            "lat": -650.534450137495, "lng": 621.2987104766497,
            "mobIcon": 7
        },
        {
            "id": 1517,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}],
            "lat": -571.8229690118887, "lng": 533.8357860916883,
            "mobIcon": 7
        },
        {
            "id": 1518,
            "name": "Camp",
            "mobs": [{id: 7, amount: 2}],
            "lat": -595.2809932985874, "lng": 687.9684534839371,
            "mobIcon": 7
        },
        {
            "id": 1519,
            "name": "Camp",
            "mobs": [{id: 29, amount: 2}],
            "lat": -604.7713117258561, "lng": 634.5253830740706,
            "mobIcon": 29
        },
        {
            "id": 1520,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -578.9304516021436, "lng": 653.7443046831481,
            "mobIcon": 15
        },
        {
            "id": 1521,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -538.3255723656523, "lng": 615.841067650091,
            "mobIcon": 13
        },
        {
            "id": 1522,
            "name": "Camp",
            "mobs": [{id: 22, amount: 1}],
            "lat": -519.0692910652484, "lng": 497.8191148738953,
            "mobIcon": 22
        },
        {
            "id": 1523,
            "name": "Camp",
            "mobs": [{id: 24, amount: 1}],
            "lat": -489.27192281476954, "lng": 757.8206078468868,
            "mobIcon": 24
        },
        {
            "id": 1524,
            "name": "Camp",
            "mobs": [{id: 1, amount: 1}],
            "lat": -591.6935363564393, "lng": 607.0402196596191,
            "mobIcon": 1
        },
        {
            "id": 1525,
            "name": "Camp",
            "mobs": [{id: 1, amount: 1}],
            "lat": -480.49492832811177, "lng": 600.8789413577616,
            "mobIcon": 1
        },
        {
            "id": 1526,
            "name": "Camp",
            "mobs": [{id: 9, amount: 1}],
            "lat": -457.53360989023906, "lng": 511.06444083241183,
            "mobIcon": 9
        },
        {
            "id": 1527,
            "name": "Camp",
            "mobs": [{id: 22, amount: 1}],
            "lat": -446.70262007942927, "lng": 559.8080056868728,
            "mobIcon": 22
        },
        {
            "id": 1528,
            "name": "Camp",
            "mobs": [{id: 22, amount: 1}],
            "lat": -439.7836862763532, "lng": 398.2950460187733,
            "mobIcon": 22
        },
        {
            "id": 1529,
            "name": "Camp",
            "mobs": [{id: 22, amount: 2}],
            "lat": -394.77933226784495, "lng": 570.0447778877092,
            "mobIcon": 22
        },
        {
            "id": 1530,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}],
            "lat": -430.2823877124122, "lng": 540.3023749345261,
            "mobIcon": 7
        },
        {
            "id": 1531,
            "name": "Camp",
            "mobs": [{id: 17, amount: 2}],
            "lat": -463.6303174650974, "lng": 306.6348133338824,
            "mobIcon": 17
        },
        {
            "id": 1532,
            "name": "Camp",
            "mobs": [{id: 17, amount: 3}],
            "lat": -390.53147107904203, "lng": 341.5413815608969,
            "mobIcon": 17
        },
        {
            "id": 1533,
            "name": "Camp",
            "mobs": [{id: 17, amount: 3}],
            "lat": -377.77436717042326, "lng": 387.7929009702603,
            "mobIcon": 17
        },
        {
            "id": 1534,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -318.0099602397422, "lng": 374.1160660652078,
            "mobIcon": 13
        },
        {
            "id": 1535,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -270.5886981992892, "lng": 487.48508092257873,
            "mobIcon": 13
        },
        {
            "id": 1536,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -265.1372599713258, "lng": 505.26823291236065,
            "mobIcon": 13
        },
        {
            "id": 1537,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -254.67387697091323, "lng": 540.3800771799159,
            "mobIcon": 13
        },
        {
            "id": 1538,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}, {id: 14, amount: 1}],
            "lat": -268.51054128375677, "lng": 381.0094292757551,
            "mobIcon": 13
        },
        {
            "id": 1539,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -289.01581192563515, "lng": 393.89399261704233,
            "mobIcon": 14
        },
        {
            "id": 1540,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -276.50779138364635, "lng": 405.3888534383132,
            "mobIcon": 14
        },
        {
            "id": 1541,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -286.0603919308858, "lng": 431.35485519233725,
            "mobIcon": 14
        },
        {
            "id": 1542,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -328.0407901849719, "lng": 437.0531793277185,
            "mobIcon": 14
        },
        {
            "id": 1543,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -296.2840682069241, "lng": 544.306396900488,
            "mobIcon": 14
        },
        {
            "id": 1544,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -324.04659552964955, "lng": 563.7954035268589,
            "mobIcon": 14
        },
        {
            "id": 1545,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -277.01672855900534, "lng": 562.056396900488,
            "mobIcon": 14
        },
        {
            "id": 1546,
            "name": "Camp",
            "mobs": [{id: 22, amount: 1}],
            "lat": -248.2698603896867, "lng": 378.02332740257907,
            "mobIcon": 22
        },
        {
            "id": 1547,
            "name": "Camp",
            "mobs": [{id: 24, amount: 1}],
            "lat": -246.02261028979717, "lng": 448.30380496686814,
            "mobIcon": 24
        },
        {
            "id": 1548,
            "name": "Camp",
            "mobs": [{id: 24, amount: 1}],
            "lat": -207.46039926250677, "lng": 765.9809695795955,
            "mobIcon": 24
        },
        {
            "id": 1549,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -164.2697840035725, "lng": 746.3171221430531,
            "mobIcon": 15
        },
        {
            "id": 1550,
            "name": "Camp",
            "mobs": [{id: 15, amount: 1}],
            "lat": -270.0333043457823, "lng": 612.5610445055995,
            "mobIcon": 15
        },
        {
            "id": 1551,
            "name": "Camp",
            "mobs": [{id: 16, amount: 1}],
            "lat": -311.331343717591, "lng": 626.7127983737539,
            "mobIcon": 16
        },
        {
            "id": 1552,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -327.59105322932396, "lng": 614.8209136514047,
            "mobIcon": 14
        },
        {
            "id": 1553,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -305.4391909264497, "lng": 591.106953441327,
            "mobIcon": 14
        },
        {
            "id": 1554,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -259.6944310414255, "lng": 598.1900847886545,
            "mobIcon": 14
        },
        {
            "id": 1555,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -282.53200578184124, "lng": 638.0622957838989,
            "mobIcon": 14
        },
        {
            "id": 1556,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -261.5054230755565, "lng": 641.5865275442312,
            "mobIcon": 14
        },
        {
            "id": 1557,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -247.09773007116578, "lng": 616.0041989662404,
            "mobIcon": 14
        },
        {
            "id": 1558,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -217.2555950705525, "lng": 602.110382894797,
            "mobIcon": 14
        },
        {
            "id": 1559,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -204.94666818712062, "lng": 609.3819724469349,
            "mobIcon": 14
        },
        {
            "id": 1560,
            "name": "Camp",
            "mobs": [{id: 14, amount: 2}],
            "lat": -188.88561766987095, "lng": 616.7501328314016,
            "mobIcon": 14
        },
        {
            "id": 1561,
            "name": "Camp",
            "mobs": [{id: 14, amount: 2}],
            "lat": -178.7630620255247, "lng": 625.0577375558087,
            "mobIcon": 14
        },
        {
            "id": 1562,
            "name": "Camp",
            "mobs": [{id: 14, amount: 2}],
            "lat": -183.51336756998143, "lng": 637.5557712613384,
            "mobIcon": 14
        },
        {
            "id": 1563,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -200.26466613392247, "lng": 662.3095250962361,
            "mobIcon": 13
        },
        {
            "id": 1564,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -217.78176271424837, "lng": 707.4296302103686,
            "mobIcon": 13
        },
        {
            "id": 1565,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -300.231823754282, "lng": 812.5155187673557,
            "mobIcon": 13
        },
        {
            "id": 1566,
            "name": "Camp",
            "mobs": [{id: 7, amount: 2}],
            "lat": -170.01520083672176, "lng": 728.5640833243264,
            "mobIcon": 7
        },
        {
            "id": 1567,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -191.51627024232027, "lng": 705.051391787291,
            "mobIcon": 14
        },
        {
            "id": 1568,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -216.5054624564085, "lng": 689.1459705383198,
            "mobIcon": 14
        },
        {
            "id": 1569,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -274.5237560815099, "lng": 688.0387002502557,
            "mobIcon": 14
        },
        {
            "id": 1570,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -297.0201659341434, "lng": 692.8024643115475,
            "mobIcon": 14
        },
        {
            "id": 1571,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -279.4383905076206, "lng": 787.6523745707824,
            "mobIcon": 14
        },
        {
            "id": 1572,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -308.0248254871084, "lng": 778.07016096178,
            "mobIcon": 14
        },
        {
            "id": 1573,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -312.28024890121515, "lng": 724.6606609768493,
            "mobIcon": 13
        },
        {
            "id": 1574,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -382.02558934825015, "lng": 845.0661389958179,
            "mobIcon": 13
        },
        {
            "id": 1575,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -451.6418431381766, "lng": 879.1615552017427,
            "mobIcon": 13
        },
        {
            "id": 1576,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -473.28506122640846, "lng": 861.804966868146,
            "mobIcon": 13
        },
        {
            "id": 1577,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -423.7788739511599, "lng": 728.0503192630345,
            "mobIcon": 13
        },
        {
            "id": 1578,
            "name": "Camp",
            "mobs": [{id: 14, amount: 1}],
            "lat": -419.2665375937199, "lng": 815.0326226128021,
            "mobIcon": 14
        },
        {
            "id": 1579,
            "name": "Camp",
            "mobs": [{id: 7, amount: 1}],
            "lat": -392.26149611018405, "lng": 806.6526174996051,
            "mobIcon": 7
        },
        {
            "id": 1580,
            "name": "Camp",
            "mobs": [{id: 20, amount: 1}],
            "lat": -358.5232213787106, "lng": 735.5464760511154,
            "mobIcon": 20
        },
        {
            "id": 1581,
            "name": "Camp",
            "mobs": [{id: 20, amount: 1}],
            "lat": -371.125968465985, "lng": 736.3447558162616,
            "mobIcon": 20
        },
        {
            "id": 1582,
            "name": "Camp",
            "mobs": [{id: 8, amount: 1}],
            "lat": -430.9547540578287, "lng": 818.5356039470348,
            "mobIcon": 8
        },
        {
            "id": 1583,
            "name": "Camp",
            "mobs": [{id: 8, amount: 2}],
            "lat": -442.6175986606539, "lng": 835.2223942571106,
            "mobIcon": 8
        },
        {
            "id": 1584,
            "name": "Camp",
            "mobs": [{id: 8, amount: 3}],
            "lat": -350.0234505370531, "lng": 821.5719485022074,
            "mobIcon": 8
        },
        {
            "id": 1585,
            "name": "Camp",
            "mobs": [{id: 13, amount: 1}],
            "lat": -482.58446266614897, "lng": 723.7446463424012,
            "mobIcon": 13
        },
        {
            "id": 1586,
            "name": "Camp",
            "mobs": [{id: 26, amount: 1}],
            "lat": -402.2807072179002, "lng": 684.8043412289965,
            "mobIcon": 26
        },
        {
            "id": 1587,
            "name": "Camp",
            "mobs": [{id: 26, amount: 1}],
            "lat": -426.030630831786, "lng": 680.8153346026256,
            "mobIcon": 26
        },
        {
            "id": 1588,
            "name": "Camp",
            "mobs": [{id: 26, amount: 3}],
            "lat": -428.27047147860014, "lng": 668.40033838556,
            "mobIcon": 26
        },
        {
            "id": 1589,
            "name": "Camp",
            "mobs": [{id: 26, amount: 3}],
            "lat": -413.256292283203, "lng": 678.153913466415,
            "mobIcon": 26
        },
    ]
};
