/// <reference path="../../lib/three.d.ts" />
/// <reference path="../core/utils.ts" />

module BP3D.Three {
	/**
	* Drawings on "top" of the scene. e.g. rotate arrows
	*/
	export var HUD = function (three) {
		var scope = this;
		var three = three;
		var scene = new THREE.Scene();

		var selectedItem = null;

		var rotating = false;
		var mouseover = false;
		
		
		var WallHeight = Core.Configuration.getNumericValue(Core.configWallHeight);
    
		var thick = false;
    
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
			thick = true;
		} 

		var tolerance = 15;
		var height = 5;
		var distance = thick ? 30 : 20;
		var color = "#ffffff";
		var hoverColor = "#f1c40f";

		var activeObject = null;

		this.getScene = function () {
			return scene;
		}

		this.getObject = function () {
			return activeObject;
		}

		function init() {
			three.itemSelectedCallbacks.add(itemSelected);
			three.itemUnselectedCallbacks.add(itemUnselected);
		}

		function resetSelectedItem() {
			selectedItem = null;
			if (activeObject) {
				scene.remove(activeObject);
				activeObject = null;
			}
		}

		function itemSelected(item) {
			if (selectedItem != item) {
				resetSelectedItem();
				if (item.allowRotate && !item.fixed) {
					selectedItem = item;
					activeObject = makeObject(selectedItem);
					scene.add(activeObject);
				}
			}
		}

		function itemUnselected() {
			resetSelectedItem();
		}

		this.setRotating = function (isRotating) {
			rotating = isRotating;
			setColor();
		}

		this.setMouseover = function (isMousedOver) {
			mouseover = isMousedOver;
			setColor();
		}

		function setColor() {
			if (activeObject) {
				activeObject.children.forEach((obj) => {
						obj.material.color.set(getColor());
					});
			}
			three.needsUpdate();
		}

		function getColor() {
			return (mouseover || rotating) ? hoverColor : color;
		}

		this.update = function () {
			if (activeObject) {
				activeObject.rotation.y = selectedItem.rotation.y;
				activeObject.position.x = selectedItem.position.x;
				activeObject.position.z = selectedItem.position.z;
			}
		}

    

		function rotateVector(item) {
			var vec = new THREE.Vector3(0, 0,
				Math.max(item.halfSize.x, item.halfSize.z) + 5.4 + distance);
			return vec;
		}
		
		
		function makeLineBody(item) {
			var len = Math.max(item.halfSize.x, item.halfSize.z) + 5.4 + distance;
    	
			var d = thick ? 20 : 2;
    	
			var LineGeo = new THREE.CylinderGeometry(d, d, len);
    	
    	
			var LineMat = new THREE.MeshBasicMaterial({
					visible:false
				});
			var Line = new THREE.Mesh(LineGeo, LineMat);
			Line.position.z = len / 2;
			Line.rotation.x = -Math.PI / 2.0;

			return Line;
    	}
    	
    	

		function makeLine(item) {
			var len = Math.max(item.halfSize.x, item.halfSize.z) + 5.4 + distance;
    	
			var d = thick ? 5 : 2;
    	
			var LineGeo = new THREE.CylinderGeometry(d, d, len);
    	
    	
			var LineMat = new THREE.MeshBasicMaterial({
					color: getColor()
				});
			var Line = new THREE.Mesh(LineGeo, LineMat);
			Line.position.z = len / 2;
			Line.rotation.x = -Math.PI / 2.0;

			return Line;
    	}
    
    

		function makeCone(item) {
			var coneGeo = new THREE.CylinderGeometry(thick ? 10 : 5, 0, thick ? 20 : 10);
			var coneMat = new THREE.MeshBasicMaterial({
					color: getColor()
				});
			var cone = new THREE.Mesh(coneGeo, coneMat);
			cone.position.copy(rotateVector(item));

			cone.rotation.x = -Math.PI / 2.0;

			return cone;
		}

		function makeSphere(item) {
			var geometry = new THREE.SphereGeometry(thick ? 7 : 4, 16, 16);
			var material = new THREE.MeshBasicMaterial({
					color: getColor()
				});
			var sphere = new THREE.Mesh(geometry, material);
			return sphere;
		}

		function makeObject(item) {
			var object = new THREE.Object3D();
			var line = makeLine(item);  
            var cone = makeCone(item);
			var sphere = makeSphere(item);
			var lineBody = makeLineBody(item);

			object.add(line);
			object.add(cone);
			object.add(sphere);
            object.add(lineBody);
            
            
			object.rotation.y = item.rotation.y;
			object.position.x = item.position.x;
			object.position.z = item.position.z;
			
			if (item instanceof  BP3D.Items.RoofItem)
			{
			object.position.y = WallHeight - height;		
			}else
			{
			object.position.y = height;	
			}
			

			return object;
		}

		init();
	}
}
