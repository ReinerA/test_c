/// <reference path="../../lib/three.d.ts" />
/// <reference path="../model/model.ts" />
/// <reference path="item.ts" />
/// <reference path="metadata.ts" />


module BP3D.Items {
	
	const WallHeight = Core.Configuration.getNumericValue(Core.configWallHeight);
  
	export abstract class RoofItem extends Item {
  	
		private plane;
  	
		constructor(model: Model.Model, metadata: Metadata, geometry: THREE.Geometry, material: THREE.MeshFaceMaterial, position: THREE.Vector3, rotation: number, scale: THREE.Vector3) {
			super(model, metadata, geometry, material, position, rotation, scale);
			//this.allowRotate = false;
			this.castShadow = false;
			this.plane =  this.buildPlane();
			this.model.scene.add(this.plane);
        
		};
		
		
		public removed() {
			this.model.scene.remove(this.plane);
		}
    
		private buildPlane() {
   	
			var size = 10000;
			var	plane = new THREE.Mesh(
				new THREE.PlaneGeometry(size, size),
				new THREE.MeshBasicMaterial({side: THREE.DoubleSide}));
			plane.rotation.x = -Math.PI / 2;
			plane.position.y = WallHeight;
			plane.visible = false;
			return plane;
		}
    
    
		public customIntersectionPlanes() {
			return [this.plane];
		}
    

		/** */
		public placeInRoom() {
			if (!this.position_set) {
      	
				var center = this.model.floorplan.getCenter();
				this.position.x = center.x;
				this.position.z = center.z;
				this.position.y = WallHeight  - this.halfSize.y;
			}
		};

		/** Take action after a resize */
		public resized() {
			this.position.y = WallHeight  - this.halfSize.y;
		}

		/** */
		public moveToPosition(vec3, intersection) {
			if (!this.isValidPosition(vec3)) {
				this.showError(vec3);
				return;
			} else {
				this.hideError();
				vec3.y = this.position.y; 
				this.position.copy(vec3);
			}
		}

		/** */
		public isValidPosition(vec3): boolean {
			var corners = this.getCorners('x', 'z', vec3);

			// check if we are in a room
			var rooms = this.model.floorplan.getRooms();
			var isInARoom = false;
			for (var i = 0; i < rooms.length; i++) {
				if (Core.Utils.pointInPolygon(vec3.x, vec3.z, rooms[i].interiorCorners) &&
					!Core.Utils.polygonPolygonIntersect(corners, rooms[i].interiorCorners)) {
					isInARoom = true;
				}
			}
			if (!isInARoom) {
				//console.log('object not in a room');
				return false;
			}


			return true;
		}
  	
  	
  	
  	
  	
	}
}
	
