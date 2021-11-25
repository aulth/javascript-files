let array = [
    [
        [
            [6225, 13141, 16987, 16396, 22075],
            [22981, 25615, 28919, 31408, 33171],
            [30070, 35392, 37522, 40047, 40998],
            [30070, 41666, 43529, 44247, 46301],
            [31706, 46665, 49060, 51321, 52592],
            [31706, 47797, 54069, 55623, 57390],
            [31706, 48336, 58450, 59580, 60835],
        ],
        [
            [12766, 20159, 24898, 28554, 31198],
            [28884, 36923, 39104, 41269, 42766],
            [30430, 41524, 47182, 47203, 49222],
            [31255, 43414, 49300, 51159, 52861],
            [31255, 43414, 50573, 53254, 54790],
            [31255, 48003, 55162, 58004, 58417],
            [31739, 48561, 59964, 61105, 62583],
        ],
        [
            [19405, 25658, 27385, 30512, 34982],
            [35827, 38450, 41090, 43381, 43527],
            [36923, 4445, 52361, 51104, 53296],
            [36923, 46237, 54789, 55853, 57991],
            [36923, 46237, 58910, 58964, 61132],
            [36923, 46237, 58910, 58964, 62133],
            [36923, 49305, 58910, 62214, 64040],
        ],
        [
            [39274, 61377, 74419, 81053, 86509],
            [58397, 86836, 90691, 94381, 103770],
            [58397, 86836, 101870, 104199, 108376],
            [60834, 86836, 101870, 104199, 114353],
            [60834, 86836, 101870, 104199, 115566],
            [60834, 86836, 101870, 104199, 115870],
            [60834, 86836, 101870, 104199, 117557],
        ],
        [
            [31294, 47670, 56205, 60583, 67809],
            [48554, 60583, 68344, 68960, 78299],
            [48554, 60583, 68344, 68960, 81190],
            [48554, 60583, 68344, 71382, 83046],
            [53451, 60865, 83904, 71382, 84588],
            [53451, 60865, 83904, 71382, 86331],
            [53451, 60865, 83904, 71382, 86787],
        ],
    ],
    [
        [
            [7026, 14829, 19432, 22755, 25148],
            [25998, 28700, 34374, 36094, 38591],
        ],
        [
            [12299, 20184, 26485, 29561, 32546],
            [31906, 35272, 38867, 41618, 44085],
        ],
        [
            [16170, 24998, 29295, 31745, 33827],
            [33827, 38249, 41152, 45612, 46438],
        ],
        [
            [27630, 38817, 42244, 60963, 60367],
            [38543, 60367, 66430, 71633, 72881],
        ],
        [
            [33289, 40285, 49082, 57804, 65543],
            [33991, 57804, 49082, 67466, 72213],
        ],
    ]
    
]; 

function getCutoff(){
    var cat = +document.getElementById("cutoff-cat").value;
    var round = +document.getElementById("cutoff-round").value;
    var year = +document.getElementById("cutoff-year").value;
    if(year===1){
        if(round>=2){
            let listNumber = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th']
            alert(`${listNumber[round]} list is not released yet!!`);
            document.getElementById('show-cutoff').style.display = 'none';
        }
    }
    var coumputer = array[year][cat][round][0];
    var electronics = array[year][cat][round][1];
    var electrical = array[year][cat][round][2];
    var mechanical = array[year][cat][round][3];
    var civil = array[year][cat][round][4];
    document.getElementById("show-cutoff").style.display = 'block';
    document.getElementById("computer-cutoff").textContent = coumputer;
    document.getElementById("electronic-cutoff").textContent = electronics;
    document.getElementById("electrical-cutoff").textContent = electrical;
    document.getElementById("mechanical-cutoff").textContent = mechanical;
    document.getElementById("civil-cutoff").textContent = civil;
    
}