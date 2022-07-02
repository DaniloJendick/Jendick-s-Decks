let sentences = [
    "Hi, my name is  danilo",
    "i will try to sort these sentences",
    "by the least used words",
    "to the most used words",
    "i will use these to put the sentences on anki",
    "to memorize and learn languages",
    "these is intended to be impoted to anki",
    "I also use morphman to find sentences with only one word that i don't know",
    "For Fuck's sake's",
    "aoisdhoiashd's"
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
    for(let i = 0; i < map.length; i++){ map[i][1] = 1/map[i][1];}
    //console.log(map)
    map = new Map(map)
    
    let sentence = [];
    let word = ""; 
    let max = "";
    for(let i = 0; i < sentences.length; i++){
        sen = sentences[i].replace(/[^a-zA-Z0-9 ||']/, "").replace("  "," ").split(" ");
        for(let j = 0; j < sen.length; j++){
            if(max < map.get(sen[j].toLowerCase())){
                 max = map.get(sen[j].toLowerCase());
                 word = sen[j]; 
            }
        }
        max = 0;
        sentence.push(sentences[i].replace( word , "{{c1::"+word+"::"+word.replace(/[a-zA-Z0-9 ||']/gi, "*")+"}}"))
        
    
    }
    sentence.map(e => console.log(e))
    return sentence;
    
}

sorting(sentences)