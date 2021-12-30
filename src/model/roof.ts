module BP3D.Model {
	
	export class Roof {
		
		
		public roofPlane: THREE.Mesh = null;
		
		constructor(private room:Model.Room)
		{
			
		}
		
		
		private getTexture() {
			return this.room.getRoofTexture();
		}

		
		private setTexture(textureUrl: string, textureStretch, textureScale: number,item_Id : string) {
			this.room.setRoofTexture(textureUrl,textureStretch, textureScale, item_Id);
		}
    
	
	}
}

