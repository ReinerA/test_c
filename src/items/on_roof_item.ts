/// <reference path="../../lib/three.d.ts" />
/// <reference path="../model/model.ts" />
/// <reference path="roof_item.ts" />
/// <reference path="metadata.ts" />


module BP3D.Items {
/** */
 export abstract class OnRoofItem extends RoofItem {
   constructor(model: Model.Model, metadata: Metadata, geometry: THREE.Geometry, material: THREE.MeshFaceMaterial, position: THREE.Vector3, rotation: number, scale: THREE.Vector3) {
     super(model, metadata, geometry, material, position, rotation, scale);
   };
}
}