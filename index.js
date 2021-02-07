function generatekgs() {
    var stone = parseFloat(document.getElementById("stone").value);
    var lbs = parseFloat(document.getElementById("lbs1").value);

    if (isNaN(stone)) {
        var kgs = (0.453592*lbs); 
    } else if (isNaN(lbs)) {
        var kgs = (6.35029*stone);
    } else {
        var kgs = (6.35029*stone) + (0.453592*lbs);
    }

    console.log("stone:",stone);
    console.log("lbs:",lbs);
    console.log("kg:",kgs);
    
    document.getElementById("kgOut").innerHTML = kgs.toFixed(3);
}

function generate_stone_lbs(){
    var kg = parseInt(document.getElementById("kgIn1").value);
    var stone = Math.floor(kg / 6.35029);
    var overall_lbs = kg / 0.453592;
    var remainder_lbs = ( overall_lbs - (stone*14) ).toFixed(2);
    if (isNaN(kg)) {
        var outp = "__________";
    } else {
        var outp = `${stone} stone and ${remainder_lbs}lbs`
    }

    document.getElementById("stoneOut").innerHTML = outp;
}

function generatelbs(){
    var kg = parseInt(document.getElementById("kgIn2").value);
    var lbs = kg / 0.453592;
    if (isNaN(kg)) {
        var outp = "__________";
    } else {
        var outp = `${lbs.toFixed(2)}lbs`;
    }
    document.getElementById("lbsOut").innerHTML = outp;
}

// __________
