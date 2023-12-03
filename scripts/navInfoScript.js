$(function() {
  

  const links = [
    {
      title: "My GitHub Account",
      link: "https://github.com/daltrodg", 
    },
    {
      title: "See The Code",
      link: "https://github.com/daltrodg/psychic-train-Juliett", 
    },
    {
      title: "Page Validity",
      link: "https://validator.w3.org/nu/?showsource=yes&doc=https%3A%2F%2Fdaltrodg.github.io%2Fpsychic-train-Juliett%2F",
      },
      {
    title: "Class GitHub Page",
    link: "https://gist.github.com/barrycumbie/de4aa0fcb0cad79a870305240d726cd0",
    }
  ];

// iterate over the JSON array
$.each(links, function (index, item) {

$('.nav-dropdown').append($(`<li><a href=" ${item.link} " target ="_blank"> ${item.title} </a></li>`));

});


});
