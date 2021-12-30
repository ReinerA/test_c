/// <reference path="../../lib/three.d.ts" />
/// <reference path="../core/utils.ts" />

module BP3D.Three {
	
	export var Roof = function (scene, room, controls) {
  	
		const WallHeight = Core.Configuration.getNumericValue(Core.configWallHeight);

		var scope = this;

		this.room = room;
		
		var old_visible = true;
		var visibleUpdate = true;
		
		var scene = scene;
    
		var items = {};

  
		var roofPlane = null;

		init();

		function init() {
			scope.room.fireOnRoofChange(redrawRoof);
			roofPlane = buildRoof();
		}
    
    
		function updateVisibility(){
			var normal = new THREE.Vector3(-0, -1, 0);
			normal.normalize();
			var position = controls.object.position.clone();
			var focus = new THREE.Vector3(
				0,
				WallHeight,
				0);
        
			var direction = position.sub(focus).normalize();
			var dot = normal.dot(direction);
			var visible = (dot > 0);
			
			if (old_visible != visible || visibleUpdate)
			{
				old_visible = visible; 	
				visibleUpdate = false;
			
			
				var items = scene.getItems();
      
				for (var key in items)
				{
				
					var item = items[key];
					if (item instanceof  BP3D.Items.RoofItem)
					{
				
						item.visible = visible;
					}
				}
			}
		}
	
		function itemLoaded(item)
		{   
			visibleUpdate = true;
			updateVisibility();
		}
    
	
		function redrawRoof() {
			scope.removeFromScene();
			roofPlane = buildRoof();
			scope.addToScene();
			scene.needsUpdate = true;
		}

		function buildRoof() {
			var textureSettings = scope.room.roof.getTexture();
			// setup texture
			var roofTexture = THREE.ImageUtils.loadTexture(textureSettings.url);
			roofTexture.wrapS = THREE.RepeatWrapping;
			roofTexture.wrapT = THREE.RepeatWrapping;
			roofTexture.repeat.set(1, 1);
			var roofMaterial = new  THREE.MeshBasicMaterial({
					map: roofTexture,
					side: THREE.FrontSide,
					color: "#ffffff"
				});

			var textureScale = textureSettings.scale;
    

			var points = [];
			scope.room.interiorCorners.forEach((corner) => {
					points.push(new THREE.Vector2(
							corner.x / textureScale,
							corner.y / textureScale));
				});
				
				
			var shape = new THREE.Shape(points);

			var geometry = new THREE.ShapeGeometry(shape);

			var roof = new THREE.Mesh(geometry, roofMaterial);

			roof.rotation.set(Math.PI / 2, 0, 0);
			roof.scale.set(textureScale, textureScale, textureScale);
			roof.position.y = WallHeight;
			roof.receiveShadow = true;
			roof.castShadow = false;
			return roof;
		}

		this.addToScene = function () {
			scene.itemLoadedCallbacks.add(itemLoaded);
			controls.cameraMovedCallbacks.add(updateVisibility);
      
			scene.add(roofPlane);
			scene.add(room.roofPlane);
		}

		this.removeFromScene = function () {
			scene.itemLoadedCallbacks.remove(itemLoaded);
			controls.cameraMovedCallbacks.remove(updateVisibility);
      
			scene.remove(roofPlane);
			scene.remove(room.roofPlane);
		}
	}
}
