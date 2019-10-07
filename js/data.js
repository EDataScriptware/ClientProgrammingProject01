// checking if data.js can be called
console.log("data.js triggered")
var firstData = '';

// the first move
var data = [firstData];


// data['insertsomething'] = ['q1', '---', 'a1', 'a2'];
    // data['a1'] = ['q2', '---', 'a3', 'a4'];

data[firstData] = ["Do you prefer quiet city or noisy city?", "---","quiet", "noisy"];
    data["noisy"] = ["Do you prefer big city or little city?","---","big city", "little city"];
        data["big city"] = ["Do you prefer downtown or suburbs?","---", "downtown", "suburbs"];
            data["downtown"] = ["New York City, New York"];
            data["suburbs"] = ["San Franscisco, California"];
            
        data["little city"] = ["Do you prefer modern city or traditional city?","---","modern", "traditional"];
            data["modern"] = ["St. Louis, Missouri"];
            data["traditional"] = ["Charleston, South Carolina"];


    data["quiet"] = ["Do you prefer a quiet town or a quiet city?","---", "quiet town", "quiet city"];
        data["quiet town"] = ["Do you prefer an isolated town or a beautiful town?", "---","isolated town", "beautiful town"];
            data["isolated town"] = ["Barrow, Alaska"];
            data["beautiful town"] = ["San Marcos, Texas"];

        data["quiet city"] = ["Do you prefer a city near the mountains or near the farms?","---","near mountains", "near farms"];
            data["near mountains"] = ["Salt Lake City, Utah"];
            data["near farms"] = ["St. Peter, Minnesota"]