// var data = [
//     ["movie1","ep1","AD"],
//     ["movie1","ep1","lang1"],
//     ["show1","ep1","AD"],
//     ["show1","ep1","lang1"],
//     ["show1","ep1","lang2"],    
//     ["show1","ep2","AD"],
//     ["show1","ep2","lang1"],
//     ["show1","ep2","lang2"],    
//     ["show1","ep3","AD"],
//     ["show1","ep3","lang1"],
//     ["show1","ep3","lang2"]
// ];

var movieTitles = [
    "White Tiger",
    "Umbrella Academy"
];

var VideoData = {
    "White Tiger": [
        {
            "title": "episode 1",
            "languages": [
                "language 1",
                "language 2",
                "AD"
            ]
        }, {
            "title": "episode 2",
            "languages": [
                "language 1",
                "language 2",
                "AD"
            ]
        }
    ],
    "Umbrella Academy": [
        {
            "title": "EPISODE 1",
            "languages": [
                "language 1",
                "language 2",
                "AD"
            ]
        }, {
            "title": "EPISODE 2",
            "languages": [
                "language 1",
                "language 2",
                "AD"
            ]
        }
    ]
}

function loadEpisodes(event) {
    var name = $(event.target).attr('name');
    console.log(name);
    $("#titleList").empty()
    $("#selectTitle").text("Select Episode")
    VideoData[name].map(episode => {
        console.log(episode['title']);
        $("#selectTitle").append(
            $("<div>")
                .attr("id", episode['title'])
            .text(episode['title'])
            .append("<div>"+episode['languages']+"</div")
        );
    })
}

function loadMovies() {
    $("#titleList").empty()
    $("#selectTitle").empty()
    Object.keys(VideoData).map(movie => {
        $("#titleList").append(
            $("<div>")
                .attr("id", movie)
                .attr("class", "center")
                .attr("name", movie)
                .attr("href", "./"+movie.replace(" ", "")+".html")
                .text(movie)
                .click(event => this.loadEpisodes(event))
                // .on('click', loadEpisodes(movie))
                .append("<br/>")
            );
    })
}

$( document ).ready(function() {
    loadMovies();
});

// const filteredArray = data.filter(r => r[0] === "movie1");

// const uniqueOption = new Set();
// filteredArray.forEach(r => uniqueOption.add(r[1]));

// const uniqueList = [...uniqueOptions];

// const selectionLevel1 = document.getElementById("level2");

// uniqueList.forEach(item => {
//     const optiond =  document.createElement("optiond")
//     optiond.textContent = item
//     selectionLevel1.appendChild(optiond);
// });



// console.log(filteredArray);
// console.log(uniqueOption);