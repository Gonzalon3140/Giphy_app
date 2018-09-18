$(document).ready(function () {

    let movies = ['finding nemo', 'toy story ', 'alien', 'predator'];

    let apiKey = "X4PhEVbTgYb63FySEkmIIqnIG4C6m1z9";



    function getGifs(movie) {
        let queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + movie + "&api_key=" + apiKey + "&limit=5";
        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            for (let i = 0; i < response.data.length; i++) {
                let giphy = $('<div>').append(gifWrapper)
                let rating = $('<p>').append()
                let title = $('<h3>').append()
                let image = $("<img>").attr("src", image);
                giphy.addClass("giphy").text(response.data[i].title);
                $('#gifWrapper').append(giphy);
            }

        })
    }

    function renderedButton() {

        for (let i = 0; i < movies.length; i++) {
            let button = $('<button>')
            button.addClass("movieButton").text(movies[i]);
            $('#buttonWrapper').append(button);
        }


    }
    $(document).on('click', '.movieButton', function () {
        let movieName = $(this).text();
        getGifs(movieName)
        console.log(movieName)
    })
    renderedButton();
})


















//this is a collection of gifs
//when the user clicks on a button it will pull 10 gifs from an api and display them on the window.
// when they click on the gif will start moving.  the gif will display the rating of the gif as well.  It will also
// create a new button so someone else can click or add to the list. 
//========================================================================================================
// things i need
// need a couple of array's they will need to be strings of topics that I like.  
// going to need some for loops to run through the array 
// will need buttons in html so that the user can click on what they like.
// Need to add a form to the page that takes the value from a user input box and adds it to the topics array. 
// The entire app needs to be mobile responsive.
// if possible add additional apis.