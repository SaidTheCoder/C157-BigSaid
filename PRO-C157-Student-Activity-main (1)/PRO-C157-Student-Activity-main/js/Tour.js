AFRAME . registerComponent("tour",{
  init:function(){
    this.placesContainer=this.el;
    this.createcards()
  },
  createcards: function () {
    const thumbnailref = [
      {
        id: "taj-mahal",
        title: "Taj Mahal",
        url: "./assets/thumbnails/taj_mahal.png",
      },
      {
        id: "budapest",
        title: "Budapest",
        url: "./assets/thumbnails/budapest.jpg",
      },

      {
        id: "eiffel-tower",
        title: "Eiffel Tower",
        url: "./assets/thumbnails/eiffel_tower.jpg",
      },
      {
        id: "new-york-city",
        title: "New York City",
        url: "./assets/thumbnails/new_york_city.png",
      },
    ];
    let previousXPosition = -60
    for(var item in thumbnailref){
      const posX = previousXPosition + 25
      const posY = 10
      const posZ = -40
      const position = {x:posX, y:posY, z: posZ}
      previousXPosition = posX

      const borderel = this.createBorder(position,item.id)
      const thumbnail = this.createThumbnail(item)
      borderel.appendChild(thumbnail)

      const titleel = this.createTitleel(position,item)
      borderel.appendChild(titleel)
      this.placesContainer.appendChild(borderel)
    }
  },

  createBorder:function(position, id){
    const entityel = document.createElement("a-entity")
    entityel.setAttribute("visible",true)
    entityel.setAttribute("geometry",{primitive:"ring",radiusInner:9, radiusOuter:10})
    entityel.setAttribute("material",{color:"purple",opacity:1})
    entityel.setAttribute("id",id)
    entityel.setAttribute("position",position)
    return entityel
  },
  createThumbnail:function(item){
    const entityel = document.createElement("a-entity")
    entityel.setAttribute("visible",true)
    entityel.setAttribute("geometry",{primitive:"circle",radius:9})
    entityel.setAttribute("material",{src:item.url})
    return entityel
  },
  createTitleel:function(position,item){
    const entityel = document.createElement("a-entity")
    entityel.setAttribute("text",{font: "exo2bold", align: "center", width: 70, color: "", value: item.title})
    const elposition = position
    elposition.y = -20

    entityel.setAttribute("position",elposition)
    entityel.setAttribute("visible",true)
    return entityel
  },
})
// AFRAME.registerComponent("tour", {
//   init: function () {
//     this.placesContainer = this.el;   
//     this.createCards();
//   },

//   createCards: function () {
//     const thumbNailsRef = [
//       {
//         id: "taj-mahal",
//         title: "Taj Mahal",
//         url: "./assets/thumbnails/taj_mahal.png",
//       },
//       {
//         id: "budapest",
//         title: "Budapest",
//         url: "./assets/thumbnails/budapest.jpg",
//       },

//       {
//         id: "eiffel-tower",
//         title: "Eiffel Tower",
//         url: "./assets/thumbnails/eiffel_tower.jpg",
//       },
//       {
//         id: "new-york-city",
//         title: "New York City",
//         url: "./assets/thumbnails/new_york_city.png",
//       },
//     ];
    
//     let prevoiusXPosition = -60;

//     for (var item of thumbNailsRef) {
//       const posX = prevoiusXPosition + 25;
//       const posY = 10;
//       const posZ = -40;
//       const position = { x: posX, y: posY, z: posZ };
//       prevoiusXPosition = posX;

//       // Border Element
//       const borderEl = this.createBorder(position, item.id);

//       // Thumbnail Element
//       const thumbNail = this.createThumbNail(item);
//       borderEl.appendChild(thumbNail);

//       // Title Text Element
//       const titleEl = this.createTitleEl(position, item);
//       borderEl.appendChild(titleEl);

//       this.placesContainer.appendChild(borderEl);
//     }
//   },
//   createBorder: function (position, id) {
//     const entityEl = document.createElement("a-entity");
//     entityEl.setAttribute("id", id);
//     entityEl.setAttribute("visible", true);
//     entityEl.setAttribute("geometry", {
//       primitive: "ring",
//       radiusInner: 9,
//       radiusOuter: 10,
//     });
//     entityEl.setAttribute("position", position);
//     entityEl.setAttribute("material", {
//       color: "#0077CC",
//       opacity: 1,
//     });

//     return entityEl;
//   },
//   createThumbNail: function (item) {
//     const entityEl = document.createElement("a-entity");
//     entityEl.setAttribute("visible", true);
//     entityEl.setAttribute("geometry", {
//       primitive: "circle",
//       radius: 9,
//     });
//     entityEl.setAttribute("material", { src: item.url });

//     return entityEl;
//   },
//   createTitleEl: function (position, item) {
//     const entityEl = document.createElement("a-entity");
//     entityEl.setAttribute("text", {
//       font: "exo2bold",
//       align: "center",
//       width: 70,
//       color: "#e65100",
//       value: item.title,
//     });
//     const elPosition = position;
//     elPosition.y = -20;
//     entityEl.setAttribute("position", elPosition);
//     entityEl.setAttribute("visible", true);
//     return entityEl;
//   },
// });