var data = [
    ["movie1","ep1","AD"]
    ["movie1","ep1","lang1"]
    ["show1","ep1","AD"]
    ["show1","ep1","lang1"]
    ["show1","ep1","lang2"]    
    ["show1","ep2","AD"]
    ["show1","ep2","lang1"]
    ["show1","ep2","lang2"]    
    ["show1","ep3","AD"]
    ["show1","ep3","lang1"]
    ["show1","ep3","lang2"]
    
];

const filteredArray = data.filter(r => r[0] === "movie1");

const uniqueOption = new Set();
filteredArray.forEach(r => uniqueOption.add(r[1]));

const uniqueList = [...uniqueOptions];

const selectionLevel1 = document.getElementById("level2");

uniqueList.forEach(item => {
    const optiond =  document.createElement("optiond")
    optiond.textContent = item
    selectionLevel1.appendChild(optiond);
});



console.log(filteredArray);
console.log(uniqueOption);