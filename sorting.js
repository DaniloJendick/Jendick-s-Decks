let sentences = [
    "Hi, my name is  danilo",
    "i will try to sort these sentences",
    "by the least used words",
    "to the most used words",
    "i will use these to put the sentences on anki",
    "to memorize and learn languages",
    "these is intended to be impoted to anki",
    "i also use morphman to find sentences with only one word that i don't know"
];

function sorting(sentences){
    let map = new Map();
    let sen = [];
    //these fors is for population the {map} 
    for(let i = 0; i < sentences.length; i++){
        sen = sentences[i].replace(/[^a-zA-Z0-9 ||']/, "").replace("  "," ").toLowerCase().split(" ");
        for(let j = 0; j < sen.length; j++){
            map.get(sen[j]) ?  map.set(sen[j], map.get(sen[j]) + 1) : map.set(sen[j], 1);
        }
    }
    map = [...map.entries()].sort((a, b) => b[1] - a[1]);
    //Ranking
    for(let i = 0; i < map.length; i++){ map[i][1] = i+1;}
    map = new Map(map)
    //console.log(map);

    let result = [];
    let senTemp = "";
    let indexes = [];
    let done = false;
    let done2 = false;
    let doing;
    let points = 0;
    while(!done){
        if(sentences.length == 0){done = true; break;}
        doing = sentences[sentences.length-1].replace(/[^a-zA-Z0-9 ||']/, "").replace("  "," ").toLowerCase().split(" ")
        senTemp = sentences[sentences.length-1];
        indexes = [];
        done2 = false;
        while(!done2){
            if(doing.length == 1){done2 = true;}
            indexes.push(   parseInt(map.get(doing[doing.length-1]))  );
            //console.log("doing: ")
            //console.log(doing);
            doing.pop();
            
        }
        //console.log(indexes);
        points = indexes.reduce((total, value) => total + value);
        result.push([senTemp, indexes.reverse(), points]);
        sentences.pop();
    }
    result = result.sort((a, b) => b[2] - a[2]);

    //anki Friendly input TSV tab-delimited
    for(let i = 0; i < result.length; i++){
        //console.log(result[i][0]+ "\t" +result[i][1] + "\t" + result[i][2])
    }
    return result;
    
}

sorting(sentences)
