function ElementResize(element,callback)
{
	if (typeof ResizeObserver !== 'undefined')
	{
		new ResizeObserver(function(){
				callback();
			}).observe(element);	
	}else
	{
		var old_height, old_width;	
		 
			
		setInterval(function(){
				if ((element.clientHeight !== old_height) || (element.clientWidth !== old_width)){
					callback();		
					old_width = element.clientWidth;	
					old_height = element.clientHeight;	
				}	
			},50);
			
			
		$(window).resize(function(){
				callback();
			});
	}
}

function isMobile()
{
	return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent));	
}

/*
* Camera Buttons
*/

var CameraButtons = function(blueprint3d) {

	var orbitControls = blueprint3d.three.controls;
	var three = blueprint3d.three;

	var panSpeed = 30;
	var directions = {
		UP: 1,
		DOWN: 2,
		LEFT: 3,
		RIGHT: 4
	}

	function init() {
		// Camera controls
		$("#zoom-in").click(zoomIn);
		$("#zoom-out").click(zoomOut);  
		$("#zoom-in").dblclick(preventDefault);
		$("#zoom-out").dblclick(preventDefault);

		$("#reset-view").click(three.centerCamera)

		$("#move-left").click(function(){
				pan(directions.LEFT)
			})
		$("#move-right").click(function(){
				pan(directions.RIGHT)
			})
		$("#move-up").click(function(){
				pan(directions.UP)
			})
		$("#move-down").click(function(){
				pan(directions.DOWN)
			})

		$("#move-left").dblclick(preventDefault);
		$("#move-right").dblclick(preventDefault);
		$("#move-up").dblclick(preventDefault);
		$("#move-down").dblclick(preventDefault);
	}

	function preventDefault(e) {
		e.preventDefault();
		e.stopPropagation();
	}

	function pan(direction) {
		switch (direction) {
			case directions.UP:
			orbitControls.panXY(0, panSpeed);
			break;
			case directions.DOWN:
			orbitControls.panXY(0, -panSpeed);
			break;
			case directions.LEFT:
			orbitControls.panXY(panSpeed, 0);
			break;
			case directions.RIGHT:
			orbitControls.panXY(-panSpeed, 0);
			break;
		}
	}

	function zoomIn(e) {
		e.preventDefault();
		orbitControls.dollyIn(1.1);
		orbitControls.update();
	}

	function zoomOut(e) {
		e.preventDefault;
		orbitControls.dollyOut(1.1);
		orbitControls.update();
	}

	init();
}

/*
* Fast Items
*/

var FastItems = function(blueprint3d,sideMenu) {
	var scope = this;
	var selectedItem;
	var three = blueprint3d.three;	
	
	function show()
	{
		$("#main").addClass("active-FastItems-menu");
		$(".fast-items").show();
		$(".change-Textures").hide();
		$("change-items").hide();
	}
	
	function hide()
	{
		$("#main").removeClass("active-FastItems-menu");
		$(".fast-items").hide();	
		$(".change-Textures").hide();
		$(".change-items").hide();
	}
	
	function addItems(){
		
		var fastitems = $(".fast-items");
		var changeitems = $(".change-items");
		
		for (var id in items_object){
			var item = items_object[id];
			var html = '<div class="col-sm-6 item item-object">' +
			'<a class="thumbnail add-item" model-id="' +  
			item.id + 
			'" model-name="' +
			item.object.name +
			'" model-url="' +
			item.object.model +
			'" category="' +
			item.object.category +
			'" model-type="' +
			item.object.type + 
			'"><img src="' +
			item.object.image + 
			'" alt="Add Item"> '+
			item.object.name +
			'</a></div>';
			fastitems.append(html);
			changeitems.append(html);
			
		}
	}
	this.prev = function()
	{
		show();
		
	}
	
	this.itemChange  = function()
	{  
	  $("#main").addClass("active-FastItems-menu");
	  $(".fast-items").hide();	
	  $(".change-Textures").hide();
	  $(".context-menu").hide();
	  $(".change-items").show();
	   
	   var data = items[selectedItem.metadata.modelId];
		$(".change-items .item").hide();
		
		$(".change-items .item a[category='"+data.object.category+"']").parent().show();
	}
	
	function init() {
		
		//show();	
		
		three.itemSelectedCallbacks.add(function(item){
			
			selectedItem = item;
			
			hide(); 
			 
			 });
			 
			 
			 
		three.itemUnselectedCallbacks.add(show);
		
		three.wallClicked.add(function(){
				//if ($(".wallTextures").css("display") == "none")
				//{
					show();
					$(".fast-items .change-wall").show().siblings(".item-change").hide();	
					$(".change-Textures").hide();	
				//}
			});
		
		three.floorClicked.add(function(){
				//if ($(".floorTexturesDiv").css("display") == "none")
				//{	
					show();
					$(".fast-items .change-floor").show().siblings(".item-change").hide();	
					$(".change-Textures").hide();
				//}
			});
		
		three.roofClicked.add(function(){
			//	if ($(".roofTextures").css("display") == "none")
				//{	
					show();
					$(".fast-items .change-roof").show().siblings(".item-change").hide();	
					$(".change-Textures").hide();
			//	}
			});
		
		
		three.nothingClicked.add(function(){
				show();
				$(".fast-items .item-change").hide();	
				$(".change-Textures").hide();
		
			});
		
		
		
		
	
		
		blueprint3d.model.scene.itemLoadedCallbacks.add(function(item){
				var data = items[item.metadata.modelId];
			
				$(".fast-items .item a[category='"+data.object.category+"']").parent().hide();
				
				
			});
		
		blueprint3d.model.scene.itemRemovedCallbacks.add(function(item){
				var data = items[item.metadata.modelId];
			
			
				$(".fast-items .item a[category='"+data.object.category+"']").parent().show();
			});	
			
			
		sideMenu.stateChangeCallbacks.add(function(state){
			
				if(state.divs.is("#viewer")){
					show();	
				}else
				{
					hide();	
				}
			
			
			
			
			});	
		
		addItems();
		
		$(".fast-items .change-floor").click(function(){
				$(".floorTexturesDiv").show();  
				$(".fast-items").hide();	
			});
		
		
		$(".fast-items .change-wall").click(function(){
				$(".wallTextures").show();  
				$(".fast-items").hide();	
			});
		
		$(".fast-items .change-roof").click(function(){
				$(".roofTextures").show();  
				$(".fast-items").hide();	
			});
		
		
		$(".fast-items").find(".add-item").mousedown(function(e) {
			    var modelId =  $(this).attr("model-id");
				var modelUrl = $(this).attr("model-url");
				var category = $(this).attr("category");
				
				var itemType = parseInt($(this).attr("model-type"));
				var metadata = {
					modelId : modelId,
					itemName: $(this).attr("model-name"),
					resizable: true,
					modelUrl: modelUrl,
					itemType: itemType,
					category : category
				}
				
				blueprint3d.model.scene.addItem(itemType, modelUrl, metadata);	
				});
				
				$(".change-items").find(".add-item").mousedown(function(e) {
			    var modelId =  $(this).attr("model-id");
				var modelUrl = $(this).attr("model-url");
				var category = $(this).attr("category");
				
				var itemType = parseInt($(this).attr("model-type"));
				var metadata = {
					modelId : modelId,
					itemName: $(this).attr("model-name"),
					resizable: true,
					modelUrl: modelUrl,
					itemType: itemType,
					category : category
				}
				
				
				blueprint3d.model.scene.changeItem(itemSelected,itemType, modelUrl, metadata);
				
					
				});
				
				
				
	
	}
	init();	
}

/*
* Context menu for selected item
*/ 

var ContextMenu = function(blueprint3d,fastItems,maincontrols) {

	var scope = this;
	var selectedItem;
	var three = blueprint3d.three;

	function init() {
		
		$(".context-menu").hide();
		
		$("#main").removeClass("active-context-menu");
		
		blueprint3d.three.controls.panXY(0, -30);
  	
  	
		$("#butItemDelete").click(function(event) {
			
				bootbox.confirm({
						message: "are you sure you want to delete the item?",
						buttons: {
							confirm: {
								label: 'Yes',
								className: 'btn btn-primary'
							},
							cancel: {
								label: 'No',
								className: 'btn btn-secondary'
							}
						},
						callback: function (result) {
							if (result)selectedItem.remove();	
						}
					});
			});
			
			
		$(".context-menu-change").click(function(event) {
			if (selectedItem)fastItems.itemChange();
			});
    
    
    	three.itemSelectedCallbacks.add(itemSelected);
		three.itemUnselectedCallbacks.add(itemUnselected);
		
		$(".context-menu .showroom").click(function(){
		var data = items[selectedItem.metadata.modelId];
		
		window.open(data.RealObject.Standard.Link, '_blank');	
			
		});

	

	
	}

	

	function itemSelected(item) 
	{
		selectedItem = item;
		
		var data = items[item.metadata.modelId];
		
		$(".context-menu .standard-image").html("<img src = '"+data.RealObject.Standard.image+"' />");
		$(".context-menu .standard-name").text(data.RealObject.Standard.Name);
		$(".context-menu .standard-description").text(data.RealObject.Standard.Description);
		
	    $(".context-menu .premium-image").html("<img src = '"+data.RealObject.Premium.image+"' />");
		$(".context-menu .premium-name").text(data.RealObject.Premium.Name);
		$(".context-menu .premium-description").text(data.RealObject.Premium.Description);
		
	
		$(".context-menu").show();
		$("#main").addClass("active-context-menu");
		
	}

	

	

	function itemUnselected() {
		selectedItem = null;
		$(".context-menu").hide();
		$("#main").removeClass("active-context-menu");
	}

	init();
}

/*
* Loading modal for items
*/


var ModalEffects = function(blueprint3d) {

	var scope = this;
	var blueprint3d = blueprint3d;
	var itemsLoading = 0;

	this.setActiveItem = function(active) {
		itemSelected = active;
		update();
	}

	function update() {
		if (itemsLoading > 0) {
			$("#loading-modal").show();
		} else {
			$("#loading-modal").hide();
		}
	}

	function init() {
		blueprint3d.model.scene.itemLoadingCallbacks.add(function() {
				itemsLoading += 1;
				update();
			});

		blueprint3d.model.scene.itemLoadedCallbacks.add(function() {
				itemsLoading -= 1;
				update();
			});   

		update();
	}

	init();
}




/*
* Side menu
*/

var SideMenu = function(blueprint3d, floorplanControls, modalEffects, rooms, materials) {
	var blueprint3d = blueprint3d;
	var floorplanControls = floorplanControls;
	var modalEffects = modalEffects;

	var ACTIVE_CLASS = "active";

	var tabs = {
		"FLOORPLAN" : $(".floorplan_tab"),
		"SHOP" : $(".items_tab"),
		"DESIGN" : $(".design_tab"),
		"MATERIALS" : $(".materials_tab")
	}

	var scope = this;
	this.stateChangeCallbacks = $.Callbacks();

	this.states = {
		"DESIGN" : {
			"divs" : $("#viewer"),
			"tab" : tabs.DESIGN
		},
		"FLOORPLAN" : {
			"divs" : $("#floorplanner , .floorplanTemplates"),
			"tab" : tabs.FLOORPLAN,
			"main_class" : "active-child-menu"
		},
		
		"ADDROOM" : {
			"divs" : $("#add-rooms"),
			"tab" : tabs.FLOORPLAN
		},
		"SHOP" : {
			"divs" : $("#add-items"),
			"tab" : tabs.SHOP
		}
		,
		"CHANGE" : {
			"divs" : $("#add-items"),
			"tab" : tabs.DESIGN
		},
		"MATERIALS" :{
			"divs" : $("#materials"), 
			"tab" : tabs.MATERIALS
		
		}
    
    
	}

	// sidebar state
	var currentState = scope.states.DESIGN;
	var selectedItem;
    
	blueprint3d.three.itemSelectedCallbacks.add(function(obj)
		{
			itemSelected = obj;
		});	
	
	this.showCHANGE = function()
	{
		blueprint3d.three.stopSpin();
		
		setCurrentState(scope.states.CHANGE);
		$("#add-items .items").show(); 
		$("#items-wrapper .item").hide();
		$("#items-wrapper .item[category='"+itemSelected.metadata.category+"']").show();
		$("#categorys").hide();
		$("#but-items-back").hide();
	}
	
	
	function init() {   
		for (var tab in tabs) {
			var elem = tabs[tab];
			elem.click(tabClicked(elem));
		}
    
    
		$("#categorys-wrapper a").click(function()
			{   $("#add-items .items").show(); 
				$("#items-wrapper .item").hide();
				$("#items-wrapper .item[category='"+ $(this).attr("category")+"']").show();
				$("#categorys").hide();
				$("#but-items-back").show();
			});
    
    
    
		$("#update-floorplan").click(floorplanUpdate);
		
		
		$(".btn-room-add").click(function()
			{
				setCurrentState(scope.states.ADDROOM);	
			
			});
			
		initLeftMenu();

		handleWindowResize();
		
		initRooms();

		initItems();

		setCurrentState(scope.states.FLOORPLAN);
	}

	function floorplanUpdate() {
		setCurrentState(scope.states.DESIGN);
	}

	function tabClicked(tab) {
		return function() {
			// Stop three from spinning
			blueprint3d.three.stopSpin();

			// Selected a new tab
			for (var key in scope.states) {
				var state = scope.states[key];
				if (state.tab == tab) {
					setCurrentState(state);
					break;
				}
			}
		}
	}
  
	function setCurrentState(newState) {
		
		
		if (newState == scope.states.SHOP) {
			$("#categorys").show();
			$("#but-items-back").hide();
			$("#add-items .items").hide();
			$("#items-wrapper .item").hide();
			
		}
		

		if (currentState == newState) {
			return;
		}

		// show the right tab as active
		if (currentState.tab !== newState.tab) {
    	
			if (currentState.tab != null) {
				currentState.tab.removeClass(ACTIVE_CLASS);          
			}
      
      
			if (newState.tab != null) {
				newState.tab.addClass(ACTIVE_CLASS);
			}
      
      
		}

		// set item unselected
		blueprint3d.three.getController().setSelectedObject(null);

		// show and hide the right divs
		currentState.divs.hide();
		
		if (currentState.main_class)$("#main").removeClass(currentState.main_class);
		
		newState.divs.show();
		if (newState.main_class)$("#main").addClass(newState.main_class);
		

		// custom actions
		if (newState == scope.states.FLOORPLAN) {
			floorplanControls.updateFloorplanView();
			floorplanControls.handleWindowResize();
		} 

		if (currentState == scope.states.FLOORPLAN) {
			blueprint3d.model.floorplan.update();
		}

		
		if (newState == scope.states.ADDROOM)
		{
			$("#add-rooms a").removeClass("checked");
		}
		
		
		if (newState == scope.states.MATERIALS)
		{
			materials.updata();
		}
		
 
		// set new state
		handleWindowResize();    
		currentState = newState;

		scope.stateChangeCallbacks.fire(newState);
	}

	function initLeftMenu() {
		$( window ).resize( handleWindowResize );
		handleWindowResize();
	}

	function handleWindowResize() {
	};
	
	
	function initRooms() {
		
		$("#but-rooms-cancel").click(function(){
				setCurrentState(scope.states.FLOORPLAN);
			});
		
		$("#add-rooms a").mousedown(function(e) {
				$(this).toggleClass("checked");
				
			});
			
			
		$("#but-rooms-add").on("click",function(){
				
				
				if ($("#add-rooms .checked").length + rooms.count() > 10)
				{
					alert("you cannot add more than 10 rooms!")
				}else
				{
					var checkeds = $("#add-rooms .checked");
					checkeds.each(function (i){
				
							var room = {
								name: $(this).attr("room-name"),
								type: $(this).attr("room-type"),
								project_url: $(this).attr("room-data-url")
							}
				
							rooms.add(room,checkeds.length === i+1);
                  
						});	
                   
					setCurrentState(scope.states.FLOORPLAN);
				}	
			});
	}
	

	// TODO: this doesn't really belong here
	function initItems() {
		
		$("#but-items-cancel").click(function(){
				setCurrentState(scope.states.DESIGN);
			});
			
			
		$("#but-items-back").click(function(){
				setCurrentState(scope.states.SHOP);
			});
		
		
		$("#add-items").find(".add-item").mousedown(function(e) {
				var modelId =  $(this).attr("model-id");
				var modelUrl = $(this).attr("model-url");
				var category = $(this).attr("category");
				
				var itemType = parseInt($(this).attr("model-type"));
				var metadata = {
					modelId : modelId,
					itemName: $(this).attr("model-name"),
					resizable: true,
					modelUrl: modelUrl,
					itemType: itemType,
					category : category
				}
				
				if (currentState == scope.states.CHANGE)
				{
					
					blueprint3d.model.scene.changeItem(itemSelected,itemType, modelUrl, metadata);
				
			
					
				}else
				{
					blueprint3d.model.scene.addItem(itemType, modelUrl, metadata);
				}
				
				
				setCurrentState(scope.states.DESIGN);	
			});
	}

	init();

}

/*
* Change floor and wall textures
*/

var TextureSelector = function (blueprint3d, sideMenu,fastItems) {

	var scope = this;
	var three = blueprint3d.three;
	var isAdmin = isAdmin;

	var currentTarget = null;
	

	function initTextureSelectors() {
		$(".texture-select").click(function(e) {
				var textureUrl = $(this).attr("texture-url");
				var textureStretch = ($(this).attr("texture-stretch") == "true");
				var textureScale = parseInt($(this).attr("texture-scale"));
				var itemId = $(this).attr("item-id");
				
				currentTarget.setTexture(textureUrl, textureStretch, textureScale,itemId);
				
				fastItems.prev();

				e.preventDefault();
			});
	}

	function init() {
		three.wallClicked.add(wallClicked);
		three.floorClicked.add(floorClicked);
		three.roofClicked.add(roofClicked);
		initTextureSelectors();
	}

	function wallClicked(halfEdge) {
		currentTarget = halfEdge;
	}
	
	function floorClicked(room) {
		currentTarget = room;
	}
	
	
	function roofClicked(roof) {
		currentTarget = roof;
			
	}
	
	

	

	init();
}

/*
* Floorplanner controls
*/

var ViewerFloorplanner = function(blueprint3d) {
	
	var isAdmin = false;
	
	
	
	var canvasWrapper = '#floorplanner';

	// buttons
	var move = '#move';
	var remove = '#delete';
	var draw = '#draw';

	var activeStlye = 'btn-primary disabled';

	this.floorplanner = blueprint3d.floorplanner;

	var scope = this;

	function init() {
		ElementResize($("#floorplanner .back")[0],scope.handleWindowResize);
		

		$( window ).resize( scope.handleWindowResize );
		scope.handleWindowResize();

		// mode buttons
		scope.floorplanner.modeResetCallbacks.add(function(mode) {
				$(draw).removeClass(activeStlye);
				$(remove).removeClass(activeStlye);
				$(move).removeClass(activeStlye);
				if (mode == BP3D.Floorplanner.floorplannerModes.MOVE) {
					$(move).addClass(activeStlye);
				} else if (mode == BP3D.Floorplanner.floorplannerModes.DRAW || mode == BP3D.Floorplanner.floorplannerModes.DRAWTOUCH) {
					$(draw).addClass(activeStlye);
				} else if (mode == BP3D.Floorplanner.floorplannerModes.DELETE) {
					$(remove).addClass(activeStlye);
				}

				if (mode == BP3D.Floorplanner.floorplannerModes.DRAW) {
					$("#draw-walls-hint").show();
					scope.handleWindowResize();
				} else {
					$("#draw-walls-hint").hide();
				}
			});

		$(move).click(function(){
				scope.floorplanner.setMode(BP3D.Floorplanner.floorplannerModes.MOVE);
			});

		$(draw).click(function(){
				if (isMobile())
				{
					scope.floorplanner.setMode(BP3D.Floorplanner.floorplannerModes.DRAWTOUCH);	
				}else
				{
					scope.floorplanner.setMode(BP3D.Floorplanner.floorplannerModes.DRAW);	
				}
			
				
			});

		$(remove).click(function(){
				scope.floorplanner.setMode(BP3D.Floorplanner.floorplannerModes.DELETE);
			});
			
			
		$(".floorplanTemplates .item a").click(function(){
			
			
				bootbox.confirm({
						message: "Are you sure? Current progress will be lost",
						buttons: {
							confirm: {
								label: 'ok',
								className: 'btn btn-primary'
							},
							cancel: {
								label: 'cancel',
								className: 'btn btn-secondary'
							}
						},
						callback: function (result) {
							
							if (result){
								
								let id = $(this).attr("item-id");
		
								if (floorplans[id])
								{
									scope.floorplanner.LoadTemplate(floorplans[id].floorplan);	
								}	
								
							}	
							
							
						}.bind(this)
					});
					
			});	
			
			
			
		if (isAdmin)
		{
			function download(filename,blob)
			{
				var a = window.document.createElement('a');
				a.href = window.URL.createObjectURL(blob);
				a.download = filename;
				document.body.appendChild(a);
				a.click();
				document.body.removeChild(a);
			}
			
			
			function downloadObject(filename,object)
			{
				var data = 	JSON.stringify(object);
				var blob = new Blob([data], {type : 'text'});	
				download(filename,blob);	
			}
	
	
				
			var butSaveTemplate = $("#butSaveTemplate");
			butSaveTemplate.show();	
			    
			butSaveTemplate.click(function(){
			    	
					scope.floorplanner.SaveTemplate(function(data){
							download("icon.jpg",data.icon);
							downloadObject("Template.txt",data.floorplan);
						});
				});
				
		}
		
		
		
		
			
			
			
	}

	this.updateFloorplanView = function() {
		scope.floorplanner.reset();
	}

	this.handleWindowResize = function() {
		var h = $("#floorplanner .back").innerHeight(); 
		$(canvasWrapper).height(h);
		scope.floorplanner.resizeView();
	};

	init();
}; 

var mainControls = function(blueprint3d,rooms) {
	
	var blueprint3d = blueprint3d;
	
	
	
	

	function newRooms() {
		rooms.new();
	}

	
	
	
	function saveRooms()
	{
		var data = rooms.exportRooms();
		var a = window.document.createElement('a');
		var blob = new Blob([data], {type : 'text'});
		a.href = window.URL.createObjectURL(blob);
		a.download = 'rooms.blueprint3d';
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	}
	
	
	function loadRooms() {
		files = $("#loadFile").get(0).files;
		var reader  = new FileReader();
		reader.onload = function(event) {
			var data = event.target.result;
			
			rooms.importRooms(data);
			
		}
		reader.readAsText(files[0]);
	}
	
	


	function init() {
		$("#new").click(newRooms);
		$("#loadFile").change(loadRooms);
		$("#saveFile").click(saveRooms);
		
		var viewer = $("#viewer .back");
		
		//-----------------
		//
		//   main-row
		//
		//-----------------
		//
		//
		//-----------------
		
		
		
		function resize(){
			blueprint3d.three.updateWindowSize($(".main-row").height());		
		}
		
		
		ElementResize(viewer[0],resize);
		
		
		resize();
		
		
	}

	init();
}



function Rooms(blueprint3d,materials)
{
	this.blueprint3d = blueprint3d;
	this.materials = materials;
	this.rooms = {};	
	this.counter = 0;
	
	$(".rooms .rooms-list").on('click', '.btn-room', function (e) {
			var room_id = $(e.target).attr("room-id");
			this.setCurrentRoom(this.rooms[room_id]);
		}.bind(this));
		
		
		
	$(".rooms select").on("change",function(e){
			var room_id = $(e.target).find("option:selected").attr("room-id");
			this.setCurrentRoom(this.rooms[room_id]);
		}.bind(this));
		
		
		
	$("#butRoomDelete").on('click',function(){
			if (this.count() > 1){
				bootbox.confirm({
						message: "are you sure you want to delete the room?",
						buttons: {
							confirm: {
								label: 'Yes',
								className: 'btn btn-primary'
							},
							cancel: {
								label: 'No',
								className: 'btn btn-secondary'
							}
						},
						callback: function (result) {
							if (result)this.deleteCurrentRoom();	
						}.bind(this)
					});
				
			}else
			{
				bootbox.alert("you cannot delete all rooms!");
			}
		}.bind(this));
		
		
	$("#butRoomRename").on('click',function(){
			bootbox.prompt({
					title: "Renaming a room",
					inputType: 'text',
					value:this.current.name,
					callback: function (result) {
						if (result)
						{
							this.CurrentRename(result);	
						}
					}.bind(this)
				});
		}.bind(this));
		
	this.new();
}


Rooms.prototype.CurrentRename = function(name)
{
	this.current.name = name;
	$(".btn-room[room-id='"+this.current.id+"']").html(name);	
	$(".rooms select option[room-id='"+this.current.id+"']").html(name);
}

Rooms.prototype.setCurrentRoom = function(room)
{
	if (!this.current || room !== this.current)
	{
		if (this.current) this.current.data = this.blueprint3d.model.exportSerialized();
		this.current = room;
		
		this.blueprint3d.model.loadSerialized(this.current.data);
		
		
		$(".btn-room:not([room-id='"+room.id+"'])").removeClass("active");	
		$(".btn-room[room-id='"+room.id+"']").addClass("active");
		$(".rooms select option[room-id='"+room.id+"']").prop('selected', true);
		
		
		
		this.materials.updata();
	}
}


Rooms.prototype.deleteCurrentRoom = function()
{
	delete this.rooms[this.current.id];
	$(".rooms-list .btn-room[room-id='"+this.current.id+"']").remove();
	$(".rooms select option[room-id='"+this.current.id+"']").remove();
	this.current = undefined;
	this.setCurrentRoom(Object.values(this.rooms)[0]); 
}
	
Rooms.prototype.count = function(){
	return Object.keys(this.rooms).length;
}	
	
Rooms.prototype.add = function(room,isCurrent)
{
	if (!room.id) room.id = ++this.counter;	
	this.rooms[room.id] = room;	
	
	$(".rooms .rooms-list").append(`<button class="btn-room" room-id="${room.id}">${room.name}</button>`); 
	$(".rooms select").append(`<option room-id="${room.id}">${room.name}</option>`); 
	
		
	
	if (!room.data)
	{
		if(room.project_url)
		{
			$.ajax({
					url: room.project_url,
					success: function(data){
						var data = JSON.parse(data);
						room.data = Object.values(data.rooms)[0].data;//загружаем первую комнату с сохранения проекта
						
						if (isCurrent)this.setCurrentRoom(room);
					}.bind(this)
				});
		}else
		{
			room.data = "{\"floorplan\":{\"corners\":{\"4e3d65cb-54c0-0681-28bf-bddcc7bdb571\":{\"x\":672.2109999999999,\"y\":-178.308},\"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2\":{\"x\":204.85099999999989,\"y\":-178.308},\"2b2bf89f-d8dd-c9fb-32a8-b706168c10e0\":{\"x\":204.85099999999989,\"y\":289.052},\"ab223182-0d00-c77b-b6a4-92a366d60929\":{\"x\":672.2109999999999,\"y\":289.052}},\"walls\":[{\"corner1\":\"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2\",\"corner2\":\"2b2bf89f-d8dd-c9fb-32a8-b706168c10e0\",\"frontTexture\":{\"url\":\"rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null,\"item_Id\":\"27\"},\"backTexture\":{\"url\":\"rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null,\"item_Id\":\"27\"}},{\"corner1\":\"2b2bf89f-d8dd-c9fb-32a8-b706168c10e0\",\"corner2\":\"ab223182-0d00-c77b-b6a4-92a366d60929\",\"frontTexture\":{\"url\":\"rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null,\"item_Id\":\"27\"},\"backTexture\":{\"url\":\"rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null,\"item_Id\":\"27\"}},{\"corner1\":\"ab223182-0d00-c77b-b6a4-92a366d60929\",\"corner2\":\"4e3d65cb-54c0-0681-28bf-bddcc7bdb571\",\"frontTexture\":{\"url\":\"rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null,\"item_Id\":\"27\"},\"backTexture\":{\"url\":\"rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null,\"item_Id\":\"27\"}},{\"corner1\":\"4e3d65cb-54c0-0681-28bf-bddcc7bdb571\",\"corner2\":\"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2\",\"frontTexture\":{\"url\":\"rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null,\"item_Id\":\"27\"},\"backTexture\":{\"url\":\"rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null,\"item_Id\":\"27\"}}],\"wallTextures\":[],\"floorTextures\":{},\"newFloorTextures\":{},\"newRoofTextures\":{}},\"items\":[]}";
			if (isCurrent)this.setCurrentRoom(room);
		} 
	}else if (isCurrent)this.setCurrentRoom(room);
		
}	




	
	
Rooms.prototype.clear = function()
{
	this.current = undefined;
	this.counter = 1;	
	this.rooms = {};
	$(".rooms-list").empty();
	
}	

Rooms.prototype.new = function()
{
	this.clear();

	var room = {
		name:"default",
		type:"default"
			
	};
		
	this.add(room,true);	
}

	
Rooms.prototype.exportRooms  = function() 
{
	this.current.data = this.blueprint3d.model.exportSerialized();
	return JSON.stringify({rooms:this.rooms, counter : this.counter,current:this.current.id});
}
	
Rooms.prototype.importRooms = function(str) 
{	
	this.clear();

	var data = JSON.parse(str);

	this.counter = data.counter;


	for (var key in data.rooms)
	{
		this.add(data.rooms[key]);
	}

	if (data.current) this.setCurrentRoom(data.rooms[data.current]);
 
}



function Materials(blueprint3d)
{
	this.blueprint3d = blueprint3d;

	this.blueprint3d.model.scene.itemLoadedCallbacks.add(function(item){
			var data = items[item.metadata.modelId];
			this.add(data,item.uuid);
		}.bind(this));
		
		
	this.blueprint3d.model.scene.itemRemovedCallbacks.add(function(item){
			$(`#materials-items [item-uuid="${item.uuid}"]`).remove();	
		});	
}

Materials.prototype.updata = function()
{
	$("#materials-items [item-type='wallTexture']").remove();
	$("#materials-items [item-type='floorTexture']").remove();	
	$("#materials-items [item-type='roofTexture']").remove();
	
	
	let rooms = this.blueprint3d.model.floorplan.getRooms();
	
	let items_tex = {};
	
	for (var key in rooms)
	{
		var room = rooms[key];
			
		var tex = room.getTexture();
		if (tex.item_Id)
		{
			var data = items[tex.item_Id];
			if (!items_tex[tex.item_Id])items_tex[tex.item_Id] = data;
			
		}
		
		
		var tex2 = room.roof.getTexture();
		if (tex2.item_Id)
		{
			
			var data = items[tex2.item_Id];
			if (!items_tex[tex2.item_Id])items_tex[tex2.item_Id] = data;
			
		}
	}
	
	
	let walls = this.blueprint3d.model.floorplan.getWalls();	
	
			
	for (var key in walls)
	{
		var wall = walls[key];
		
		if (wall.backEdge)
		{
			var tex1 = wall.backEdge.getTexture();
			if (tex1.item_Id)
			{
				var data = items[tex1.item_Id];
				
				if (!items_tex[tex1.item_Id])	items_tex[tex1.item_Id] = data;
			}
		}
		if (wall.frontEdge)
		{
			var tex2 = wall.frontEdge.getTexture();
			if (tex2.item_Id)
			{
				var data = items[tex2.item_Id];
				
				if (!items_tex[tex2.item_Id])	items_tex[tex2.item_Id] = data;
			
			}
			
		}
			
	}	
	
	
	
	for (var key in items_tex)	this.add(items_tex[key]);
}

Materials.prototype.add = function(data,uuid = "")
{
	$("#materials-items").append(`<tr item-uuid ="${uuid}" item-type="${data.type}">
		<th scope="row"><img src="${data.RealObject.image}"/></th>
		<td>  
		<div class="row">
		<div class="col-xs-7">${data.RealObject.Standard.Name}</div>
		<div class="col-xs-3">${data.RealObject.Standard.Price}</div>
		</div>
		<div class="row">
		<div class="col-xs-7">${data.RealObject.Standard.Description}</div>
		<div class="col-xs-3"><a href="${data.RealObject.Standard.Link}" target="_blank">more...</a></div>
		</div>
		</td>
		<td>
		<div class="row">
		<div class="col-xs-7">${data.RealObject.Premium.Name}</div>
		<div class="col-xs-3">${data.RealObject.Premium.Price}</div>
		</div>
		<div class="row">
		<div class="col-xs-7">${data.RealObject.Premium.Description}</div>
		<div class="col-xs-3"><a href="${data.RealObject.Premium.Link}" target="_blank">more...</a></div>
		</div>
		</td>
		</tr>`);
}


function Controller(blueprint3d,fastItems){
	
	var three = blueprint3d.three;
    
	var itemSelected;
	
	var itemActions = $("#itemActions");
	
	var Controller = three.getController();

    
	three.itemSelectedCallbacks.add(function(item)
		{
			itemSelected = item;
			itemActions.show();
			if (itemSelected.allowRotate && !itemSelected.fixed) {
				$("#itemRotate").show();	
			}else
			{
				$("#itemRotate").hide();	
			}
			update();
		});
		
	three.itemUnselectedCallbacks.add(function()
		{
			itemSelected = undefined;	
			itemActions.hide()
		});	
		
	function convert3dto2d(x, y, z, camera, width, height) 
	{
    
		var p = new THREE.Vector3(x, y, z);
		var vector = p.project(camera);

		vector.x = (vector.x + 1) / 2 * width;
		vector.y = -(vector.y - 1) / 2 * height;

		return vector;
	}	
		
	function update()
	{
		if (itemSelected)
		{
			var pos2d = convert3dto2d(itemSelected.position.x,itemSelected.position.y,itemSelected.position.z,blueprint3d.three.getCamera(),blueprint3d.three.elementWidth,blueprint3d.three.elementHeight);
			itemActions.css('top',pos2d.y + "px").css('left',pos2d.x + "px");	
		
		}	
	}	
		
	three.itemMovedCallbacks.add(function(item)
		{
			update();
		});
	
	
	three.controls.cameraMovedCallbacks.add(function(item)
		{
			update();
		});
	
	
	$("#itemRotate").on("mousedown touchstart",function(e){
			Controller.onItemRotate(e);
		});
	
	
	$("#itemMove").on("mousedown touchstart",function(e){
			Controller.onItemMoved(e);
		});
	
	$("#itemChange").on("mousedown touchstart mouseup touchend",function(e){
			e.stopImmediatePropagation();
		});
	
	$("#itemChange").on("click",function(e){
			if (itemSelected)fastItems.itemChange();
		});
	
	$("#itemDelete").on("mousedown touchstart mouseup touchend",function(e){
			e.stopImmediatePropagation();
		});
		
	$("#itemDelete").on("click",function(e){
			if (itemSelected){
				bootbox.confirm({
						message: "are you sure you want to delete the item?",
						buttons: {
							confirm: {
								label: 'Yes',
								className: 'btn btn-primary'
							},
							cancel: {
								label: 'No',
								className: 'btn btn-secondary'
							}
						},
						callback: function (result) {
							if (result)itemSelected.remove();
						}
					});
				
			}
		});
	
	var main = $(".main-row");
		
	function resize(){
		update();	
	}
	
	ElementResize(main[0],resize);
	
	
	resize();
		
}




function floorplannerController(blueprint3d,sideMenu){
	
	var Selected;
	
	var floorplannerActions = $("#floorplannerActions");
	
	var butMove = floorplannerActions.find(".butMove");
	
	var butDelete = floorplannerActions.find(".butDelete");
	
	
	function update()
	{
		if (Selected)
		{
		
			if (Selected instanceof BP3D.Model.Corner){
				let x  = blueprint3d.floorplanner.convertX(Selected.x);
				let y  = blueprint3d.floorplanner.convertY(Selected.y);	
				
				let angle = 225;
				floorplannerActions[0].style.setProperty('--offset',angle.toString());	
		
				floorplannerActions.css('top',y + "px").css('left',x + "px");	
			}else
			if (Selected instanceof  BP3D.Model.Wall)
			{
				let x  = blueprint3d.floorplanner.convertX(Selected.start.x + (Selected.end.x - Selected.start.x) * 0.5);
				let y  = blueprint3d.floorplanner.convertY(Selected.start.y + (Selected.end.y - Selected.start.y) * 0.5);
				let angle = (180 / Math.PI) * Math.atan2(Selected.start.y - Selected.end.y,Selected.start.x - Selected.end.x);
				angle += -225;
				floorplannerActions[0].style.setProperty('--offset',angle.toString());	
				floorplannerActions.css('top',y + "px").css('left',x + "px");		
			
			}
		
		}	
	}
	
	
	$( window ).resize(update);
	
	
	blueprint3d.floorplanner.MovedCallbacks.add(function()
		{
			update();	
		});
	
	
	blueprint3d.floorplanner.SelectedCallbacks.add(function(item)
		{
			Selected = item;
			floorplannerActions.show();
			
			if (item instanceof  BP3D.Model.Wall)
			{
				butDelete.show();
			}else 
			{
				butDelete.hide();
			}
			
			update();
		});
		
	blueprint3d.floorplanner.UnselectedCallbacks.add(function()
		{
			Selected = undefined;	
			floorplannerActions.hide()
		});	
		
		
		
	butMove.on("mousedown touchstart",function(e){
			blueprint3d.floorplanner.onMoved(e);
		});
		
	butDelete.on("mousedown touchstart mousemove mouseup touchend",function(e){
			e.stopImmediatePropagation();
		});
		
	butDelete.on("click",function(){
			bootbox.confirm({
					message: "are you sure you want to delete the wall?",
					buttons: {
						confirm: {
							label: 'Yes',
							className: 'btn btn-primary'
						},
						cancel: {
							label: 'No',
							className: 'btn btn-secondary'
						}
					},
					callback: function (result) {
						if (result)blueprint3d.floorplanner.removeActiveWall();
					}
				});
		
		
			
			
			
		});
}	


/*
* Initialize!
*/

$(document).ready(function() {

		// main setup
		var opts = {
			floorplannerElement: '#floorplanner .back',
			floorplannerCanvasElement: '#floorplanner-canvas',
			threeElement: '#viewer .back',
			threeCanvasElement: 'three-canvas',
			textureDir: "models/textures/",
			defaultRoomTexture:{
				url: "rooms/textures/light_fine_wood.jpg",
				stretch:false,
				scale:300,
				item_Id:"29"
			},
			defaultWallTexture:{
				url: "rooms/textures/wallmap_yellow.png",
				stretch: true,
				scale: 0,
				item_Id:"27"
			},
			
			defaultRoofTexture:{
				url: "rooms/textures/light_brick.jpg",
				stretch: false,
				scale: 100,
				item_Id:"30"
			},
			
			
			
			widget: false
		}
		
		
		
		var blueprint3d = new BP3D.Blueprint3d(opts);

		var modalEffects = new ModalEffects(blueprint3d);
		
		var viewerFloorplanner = new ViewerFloorplanner(blueprint3d);
		
		var materials = new Materials(blueprint3d);
  
		var rooms = new Rooms(blueprint3d,materials);
		
		var maincontrols = new mainControls(blueprint3d,rooms);
		
		var sideMenu = new SideMenu(blueprint3d, viewerFloorplanner, modalEffects,rooms,materials);
		
		var fastItems = new FastItems(blueprint3d,sideMenu);
		
		var contextMenu = new ContextMenu(blueprint3d,fastItems,maincontrols);
  
		var textureSelector = new TextureSelector(blueprint3d, sideMenu,fastItems);    
		
		
		
		if (isMobile()) {
			$("#delete").hide();
			new Controller(blueprint3d,fastItems);
			new floorplannerController(blueprint3d,sideMenu);
		}else
		{
			$("#camera-controls").show();	
			var cameraButtons = new CameraButtons(blueprint3d);	
		}
		// This serialization format needs work
		// Load a simple rectangle room
		blueprint3d.model.loadSerialized("{\"floorplan\":{\"corners\":{\"4e3d65cb-54c0-0681-28bf-bddcc7bdb571\":{\"x\":672.2109999999999,\"y\":-178.308},\"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2\":{\"x\":204.85099999999989,\"y\":-178.308},\"2b2bf89f-d8dd-c9fb-32a8-b706168c10e0\":{\"x\":204.85099999999989,\"y\":289.052},\"ab223182-0d00-c77b-b6a4-92a366d60929\":{\"x\":672.2109999999999,\"y\":289.052}},\"walls\":[{\"corner1\":\"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2\",\"corner2\":\"2b2bf89f-d8dd-c9fb-32a8-b706168c10e0\",\"frontTexture\":{\"url\":\"rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null,\"item_Id\":\"27\"},\"backTexture\":{\"url\":\"rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null,\"item_Id\":\"27\"}},{\"corner1\":\"2b2bf89f-d8dd-c9fb-32a8-b706168c10e0\",\"corner2\":\"ab223182-0d00-c77b-b6a4-92a366d60929\",\"frontTexture\":{\"url\":\"rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null,\"item_Id\":\"27\"},\"backTexture\":{\"url\":\"rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null,\"item_Id\":\"27\"}},{\"corner1\":\"ab223182-0d00-c77b-b6a4-92a366d60929\",\"corner2\":\"4e3d65cb-54c0-0681-28bf-bddcc7bdb571\",\"frontTexture\":{\"url\":\"rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null,\"item_Id\":\"27\"},\"backTexture\":{\"url\":\"rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null,\"item_Id\":\"27\"}},{\"corner1\":\"4e3d65cb-54c0-0681-28bf-bddcc7bdb571\",\"corner2\":\"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2\",\"frontTexture\":{\"url\":\"rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null,\"item_Id\":\"27\"},\"backTexture\":{\"url\":\"rooms/textures/wallmap_yellow.png\",\"stretch\":true,\"scale\":null,\"item_Id\":\"27\"}}],\"wallTextures\":[],\"floorTextures\":{},\"newFloorTextures\":{},\"newRoofTextures\":{}},\"items\":[]}");
	});
