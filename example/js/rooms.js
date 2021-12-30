$(document).ready(function() {
var rooms = [
{
"name" : "room 1",
"type" : "room 1",
"image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png",
"project_url" : "templates/room_2.blueprint3d"
},
{
"name" : "room 2",
"type" : "room 2",
"image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png",
"project_url" : ""
},
{
"name" : "room 3",
"type" : "room 3",
"image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png",
"project_url" : ""
},
{
"name" : "room 4",
"type" : "room 4",
"image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png",
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