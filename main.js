var synaptic = require('synaptic');
var Neuron = synaptic.Neuron,
    Layer = synaptic.Layer,
    Network = synaptic.Network,
    Trainer = synaptic.Trainer,
    Architect = synaptic.Architect;



function Perceptron(input, hidden, output) {
    // create the layers
    var inputLayer = new Layer(input);
    var hiddenLayer = new Layer(hidden);
    var outputLayer = new Layer(output);

    // connect the layers
    inputLayer.project(hiddenLayer);
    hiddenLayer.project(outputLayer);

    // set the layers
    this.set({
        input: inputLayer,
        hidden: [hiddenLayer],
        output: outputLayer
    });
}

// extend the prototype chain
Perceptron.prototype = new Network();
Perceptron.prototype.constructor = Perceptron;

var myPerceptron = new Perceptron(8, 10, 1);
var myTrainer = new Trainer(myPerceptron);
var Min = { id: -2, name: "min", m: 4, f: -2, s: -2, a: 8, w: -2, h: 2, bene: 0, det: 0, cost: 1 };
var Max = { id: -1, name: "max", m: 10, f: 6, s: 6, a: 16, w: 4, h: 40, bene: 6, det: 4, cost: 300 };

var DataSet = [
    Warhound = { id: 0, name: "War Hound", m: 8, f: 1, s: 0, a: 10, w: 2, h: 8, bene: 0, det: 2, cost: 10 },
    Thug = { id: 1, name: "Thug", m: 6, f: 2, s: 0, a: 10, w: -1, h: 10, bene: 0, det: 0, cost: 20 },
    Thief = { id: 2, name: "Thief", m: 7, f: 1, s: 0, a: 10, w: 0, h: 10, bene: 0, det: 1, cost: 20 },
    Archer = { id: 3, name: "Archer", m: 6, f: 2, s: 2, a: 11, w: 0, h: 10, bene: 1, det: 1, cost: 50 },
    Crossbowman = { id: 4, name: "Crossbowman", m: 6, f: 2, s: 2, a: 11, w: 0, h: 10, bene: 1, det: 1, cost: 50 },
    Infantryman = { id: 5, name: "Infantryman", m: 6, f: 3, s: 0, a: 11, w: 0, h: 10, bene: 1, det: 0, cost: 50 },
    Tracker = { id: 6, name: "Tracker", m: 7, f: 2, s: 2, a: 11, w: 1, h: 12, bene: 2, det: 0, cost: 80 },
    Manatarms = { id: 7, name: "Man-At-Arms", m: 6, f: 3, s: 0, a: 12, w: 1, h: 12, bene: 0, det: 0, cost: 80 },
    Treasurehunter = { id: 8, name: "Treasure Hunter", m: 7, f: 4, s: 0, a: 11, w: 2, h: 12, bene: 0, det: 1, cost: 80 },
    Knight = { id: 9, name: "Knight", m: 5, f: 4, s: 0, a: 13, w: 1, h: 12, bene: 0, det: 0, cost: 100 },
    Templar = { id: 10, name: "Templar", m: 5, f: 4, s: 0, a: 12, w: 1, h: 12, bene: 1, det: 0, cost: 100 },
    Ranger = { id: 11, name: "Ranger", m: 7, f: 2, s: 2, a: 11, w: 2, h: 12, bene: 1, det: 0, cost: 100 },
    Barbarian = { id: 12, name: "Barbarian", m: 6, f: 4, s: 0, a: 10, w: 3, h: 14, bene: 1, det: 0, cost: 100 },
    Apothecary = { id: 13, name: "Apothecary", m: 6, f: 0, s: 0, a: 10, w: 0, h: 12, bene: 2, det: 0, cost: 100 },
    Marksman = { id: 14, name: "Marksman", m: 5, f: 2, s: 3, a: 12, w: 1, h: 12, bene: 1, det: 0, cost: 100 },
    Bard = { id: 15, name: "Bard", m: 6, f: 2, s: 0, a: 11, w: 4, h: 12, bene: 1, det: 0, cost: 100 },
    Crowmaster = { id: 16, name: "Crow Master", m: 6, f: 0, s: 0, a: 11, w: 2, h: 10, bene: 2, det: 1, cost: 100 },
    Javelineer = { id: 17, name: "Javelineer", m: 6, f: 0, s: 0, a: 10, w: 0, h: 10, bene: 1, det: 0, cost: 25 },
    Packmule = { id: 18, name: "Pack Mule", m: 6, f: 0, s: 0, a: 10, w: 0, h: 10, bene: 1, det: 1, cost: 20 },
    Assassin = { id: 19, name: "Assassin", m: 6, f: 2, s: 0, a: 10, w: 3, h: 12, bene: 2, det: 1, cost: 80 },
    Demonhunter = { id: 20, name: "Demon Hunter", m: 6, f: 2, s: 2, a: 11, w: 2, h: 12, bene: 3, det: 0, cost: 100 },
    Monk = { id: 21, name: "Monk", m: 6, f: 4, s: 0, a: 10, w: 4, h: 12, bene: 2, det: 0, cost: 100 },
    Mysticwarrior = { id: 22, name: "Mystic Warrior", m: 6, f: 4, s: 0, a: 10, w: 4, h: 12, bene: 2, det: 1, cost: 100 },
    Trapexpert = { id: 23, name: "Trap Expert", m: 6, f: 2, s: 0, a: 11, w: 1, h: 12, bene: 2, det: 1, cost: 50 },
    Tunnelfighter = { id: 24, name: "Tunnel Fighter", m: 6, f: 3, s: 0, a: 11, w: 1, h: 12, bene: 2, det: 0, cost: 80 }];

var testSet = [
    Basilisk = { id: 26, name: "Basilisk", m: 4, f: 3, s: 0, a: 13, w: 2, h: 14, bene: 1, det: 1, cost: 0 },
    Minotaur = { id: 27, name: "Minotaur", m: 6, f: 3, s: 0, a: 12, w: 4, h: 15, bene: 2, det: 1, cost: 0 },
    Zombie = { id: 28, name: "Zombie", m: 4, f: 0, s: 0, a: 12, w: 0, h: 6, bene: 0, det: 1, cost: 0 },
    Bear = { id: 29, name: "Bear", m: 6, f: 4, s: 0, a: 10, w: 0, h: 14, bene: 0, det: 2, cost: 0 },
    Frostgiants = { id: 30, name: "Frost Giants", m: 6, f: 5, s: 0, a: 15, w: 4, h: 25, bene: 1, det: 1, cost: 0 },
    Ambronnax = { id: 31, name: "Ambronnax", m: 4, f: 6, s: 0, a: 15, w: 12, h: 28, bene: 6, det: 1, cost: 0 },
    Bloodcrow = { id: 32, name: "Blood Crow", m: 9, f: 0, s: 0, a: 14, w: 3, h: 1, bene: 1, det: 1, cost: 0 },
    Banshee = { id: 33, name: "Banshee", m: 9, f: 0, s: 0, a: 10, w: 5, h: 10, bene: 3, det: 1, cost: 0 },
    Goulking = { id: 34, name: "Goul King", m: 8, f: 4, s: 0, a: 12, w: 6, h: 14, bene: 2, det: 1, cost: 0 },
    Wraithknight = { id: 35, name: "Wraith Knight", m: 6, f: 3, s: 0, a: 10, w: 5, h: 10, bene: 5, det: 1, cost: 0 }];



myTrainer.train(encodeData(DataSet, Min, Max), {
    rate: .1,
    iterations: 2000000,
    error: .00005,
    shuffle: true
});



main();

function main() {
    console.log("Net Starting");

    for (var i = 0; i < DataSet.length; i++) {

        var encode = encodeData([DataSet[i]], Min, Max);
        var output = myPerceptron.activate(encode[0].input);
        var convertedOutput = denormalize(output, Min.cost, Max.cost);
        console.log(DataSet[i].name + " C: " + DataSet[i].cost + " P: " + convertedOutput.toFixed(2));

    }
    for (var i = 0; i < testSet.length; i++) {

        var encode = encodeData([testSet[i]], Min, Max);
        var output = myPerceptron.activate(encode[0].input);
        var convertedOutput = denormalize(output, Min.cost, Max.cost);
        console.log(testSet[i].name + " C: " + testSet[i].cost + " P: " + convertedOutput.toFixed(2));

    }
    console.log("bot closing...");
}

function encodeData(DataSet, Min, Max) {
    var encodedData = [];

    var tempData = { m: 0, f: 0, s: 0, a: 0, w: 0, h: 0, bene: 0, det: 0, cost: 0 };

    for (var i = 0; i < DataSet.length; i++) {
        //console.log("encoding: " + DataSet[i].toString()+"\n");
        tempData.m = normalize(DataSet[i].m, Min.m, Max.m);
        tempData.f = normalize(DataSet[i].f, Min.f, Max.f);
        tempData.s = normalize(DataSet[i].s, Min.s, Max.s);
        tempData.a = normalize(DataSet[i].a, Min.a, Max.a);
        tempData.w = normalize(DataSet[i].w, Min.w, Max.w);
        tempData.h = normalize(DataSet[i].h, Min.h, Max.h);
        tempData.bene = normalize(DataSet[i].bene, Min.bene, Max.bene);
        tempData.det = normalize(DataSet[i].det, Min.det, Max.det);
        tempData.cost = normalize(DataSet[i].cost, Min.cost, Max.cost);

        //console.log("encoded: " + DataSet[i]+"\n");
        encodedData.push({
            input: [tempData.m, tempData.f, tempData.s, tempData.a, tempData.w, tempData.h, tempData.bene, tempData.det],
            output: [tempData.cost]
        });

    }
    //console.log(encodedData);
    return encodedData;
}
function normalize(num, min, max) {
    return (num - min) / (max - min);
}
function denormalize(num, min, max) {
    return (num * (max - min)) + min;
}

