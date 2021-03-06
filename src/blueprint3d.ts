/// <reference path="model/model.ts" />
/// <reference path="floorplanner/floorplanner.ts" />
/// <reference path="three/main.ts" />

module BP3D {
  /** Startup options. */
  export interface Options {
    /** */
    widget?: boolean;

    /** */
    threeElement?: string;

    /** */
    threeCanvasElement? : string;

    /** */
    floorplannerElement?: string;
    
    floorplannerCanvasElement?: string;

    /** The texture directory. */
    textureDir?: string;
    
    defaultRoomTexture?: Items.TextureData;
    
    defaultWallTexture?: Items.TextureData;
    
    defaultRoofTexture?: Items.TextureData;
    
  }

  /** Blueprint3D core application. */
  export class Blueprint3d {
    
    private model: Model.Model;

    private three: any; // Three.Main;

    private floorplanner: Floorplanner.Floorplanner;

    /** Creates an instance.
     * @param options The initialization options.
     */
    constructor(options: Options) {
      this.model = new Model.Model(options.textureDir,options.defaultRoomTexture,options.defaultWallTexture,options.defaultRoofTexture);
      this.three = new Three.Main(this.model, options.threeElement, options.threeCanvasElement, {});

      if (!options.widget) {
        this.floorplanner = new Floorplanner.Floorplanner(options.floorplannerElement,options.floorplannerCanvasElement, this.model.floorplan);
      }
      else {
        this.three.getController().enabled = false;
      }
    }
  }
}
