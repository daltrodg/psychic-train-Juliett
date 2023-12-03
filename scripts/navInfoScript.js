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
      link: "",
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
