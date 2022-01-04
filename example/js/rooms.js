$(document).ready(function() {
var rooms = [
  {
    "name" : "Кухня",
    "type" : "1",
    "image" : "models/thumbnails/kitchen.png",
    "project_url" : "templates/room_2.blueprint3d"
  },
  {
    "name" : "Гостиная",
    "type" : "2",
    "image" : "models/thumbnails/living-room.png",
    "project_url" : ""
  },
  {
    "name" : "Санузел",
    "type" : "3",
    "image" : "models/thumbnails/bathroom.png",
    "project_url" : ""
  },
  {
    "name" : "Прихожая",
    "type" : "4",
    "image" : "models/thumbnails/hallway.png",
    "project_url" : ""
  },
  {
    "name" : "Спальня",
    "type" : "5",
    "image" : "models/thumbnails/bedroom.png",
    "project_url" : ""
  },
  {
    "name" : "Детская",
    "type" : "6",
    "image" : "models/thumbnails/nursery.png",
    "project_url" : ""
  },
  {
    "name" : "Коридор",
    "type" : "7",
    "image" : "models/thumbnails/corridor.png",
    "project_url" : ""
  },
  {
    "name" : "Кабинет",
    "type" : "8",
    "image" : "models/thumbnails/office.png",
    "project_url" : ""
  },
  {
    "name" : "Балкон",
    "type" : "9",
    "image" : "models/thumbnails/balcony.png",
    "project_url" : ""
  },
  {
    "name" : "Гардеробная",
    "type" : "10",
    "image" : "models/thumbnails/wardrobe.png",
    "project_url" : ""
  }
];	


var roomsDiv = $("#rooms-wrapper");	

  for (var i = 0; i < rooms.length; i++) {
    var item = rooms[i];
    
    let html = `<div class="col-xs-6 col-sm-4"> <a class="thumbnail" room-data-url="${item.project_url}" room-name="${item.name}" room-type="${item.type}"><img src="${item.image}">${item.name}</img> </a></div>`;
      roomsDiv.append(html);
   
		}
	});