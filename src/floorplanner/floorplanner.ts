/// <reference path="../../lib/jQuery.d.ts" />
/// <reference path="../model/floorplan.ts" />
/// <reference path="floorplanner_view.ts" />

module BP3D.Floorplanner {
	/** how much will we move a corner to make a wall axis aligned (cm) */
	const snapTolerance = 25;

	/** 
	* The Floorplanner implements an interactive tool for creation of floorplans.
	*/
	export class Floorplanner {

		/** */
		public mode = 0;

		/** */
		public activeWall = null;

		/** */
		public activeCorner = null;

		/** */
		public originX = 0;

		/** */
		public originY = 0;

		/** drawing state */
		public targetX = 0;

		/** drawing state */
		public targetY = 0;

		/** drawing state */
		public lastNode = null;
		/** */
    
		public SelectedCallbacks = $.Callbacks(); 
    
		/** */
		public UnselectedCallbacks = $.Callbacks();
		
		/** */
		public MovedCallbacks = $.Callbacks();

		/** */
		private wallWidth: number;

		/** */
		private modeResetCallbacks = $.Callbacks();
		
		/** */
		private element;

		/** */
		private view: FloorplannerView;

		/** */
		private mouseDown = false;

		/** */
		private mouseMoved = false;

		/** in ThreeJS coords */
		private mouseX = 0;

		/** in ThreeJS coords */
		private mouseY = 0;
		/** in ThreeJS coords */
		
		private rawMouseX = 0;

		/** in ThreeJS coords */
		private rawMouseY = 0;

		/** mouse position at last click */
		private lastX = 0;

		/** mouse position at last click */
		private lastY = 0;

		/** */
		
		private last_touches_poss;
		
		/** */
		private radius: number = 0;
    
		/** */
    
		public cmPerPixel: number;

		/** */
		public pixelsPerCm: number;

		/** */
		
		
		private zoom: number = 1;
		
		constructor(element: string, canvas: string, private floorplan: Model.Floorplan) {
			this.element = $(element);
			this.view = new FloorplannerView(this.floorplan, this, canvas);
			
			this.RatioUpdata();
			
			// Initialization:

			this.setMode(floorplannerModes.MOVE);

			var scope = this;

			this.element.on("mousedown",function(event){
					scope.mousedown(event);	
				});
      
			this.element.on("mousemove",function(event){
					scope.mousemove(event);	
				});
      
      
			this.element.on("mouseup",function(event){
					scope.mouseup(event);
				});
				
				
			this.element.on("touchstart",function(event){
					scope.touchstart(event);	
				});
      
			this.element.on("touchmove",function(event){
					scope.touchmove(event);	
				});
      
      
			this.element.on("touchend",function(event){
					scope.touchend(event);
				});	
				
			this.element.on("mousewheel DOMMouseScroll",function(event){
					scope.MouseWheel(event);
				});	
				
					
			
				
				
      
      
			this.element.mouseleave(() => {
					scope.mouseleave();
				});

			$(document).keyup((e) => {
					if (e.keyCode == 27) {
						scope.escapeKey();
					}
				});

			floorplan.roomLoadedCallbacks.add(() => {
					scope.reset()
				});
				
				
			
		}
		
		
		private RatioUpdata()
		{
			var cmPerFoot = 30.48; 
			var pixelsPerFoot = 15.0;
			pixelsPerFoot *= this.zoom;
			this.cmPerPixel = cmPerFoot * (1.0 / pixelsPerFoot);
			this.pixelsPerCm = 1.0 / this.cmPerPixel;
			this.wallWidth = 10.0 * this.pixelsPerCm;	
		}
		
		
		private ZoomAdd(value,cx,cy)
		{
			const max_zoom = 5.0;
			const min_zoom = 0.5;
			
			var old_zoom = this.zoom;
			
			this.zoom *= value;
			
			this.zoom = Math.max(this.zoom,min_zoom);
			
			this.zoom = Math.min(this.zoom,max_zoom);
			
			var real = (1  / old_zoom)*this.zoom;
			
			this.originX -= (cx + this.originX) - ((cx + this.originX) * real);
			this.originY -= (cy + this.originY) - ((cy + this.originY) * real);
			
			this.RatioUpdata();
			this.view.draw();
			this.MovedCallbacks.fire();
		}
		
		
		public ZoomIn(zoom = 1.2) {
			this.ZoomAdd(1 / zoom,this.rawMouseX,this.rawMouseY);
		};
    
    
		public ZoomOut(zoom = 1.2) {
			this.ZoomAdd(1 * zoom,this.rawMouseX,this.rawMouseY);
		};

    

		/** */
		private escapeKey() {
			this.setMode(floorplannerModes.MOVE);
		}

		/** */
		private updateTarget() {
			if ((this.mode == floorplannerModes.DRAW || this.mode ==  floorplannerModes.DRAWTOUCH) && this.lastNode) {
				if (Math.abs(this.mouseX - this.lastNode.x) < snapTolerance) {
					this.targetX = this.lastNode.x;
				} else {
					this.targetX = this.mouseX;
				}
				if (Math.abs(this.mouseY - this.lastNode.y) < snapTolerance) {
					this.targetY = this.lastNode.y;
				} else {
					this.targetY = this.mouseY;
				}
			} else {
				this.targetX = this.mouseX;
				this.targetY = this.mouseY;
			}

			this.view.draw();
		}
		
		//mobile
		public removeActiveWall()
		{
			if (this.activeWall)
			{   
				this.UnselectedCallbacks.fire(this.activeWall);
				this.activeWall.remove();
				this.activeWall = null;
				this.view.draw();
			}	
			
		}
		
		
		public onMoved = function(event)
		{
			event.preventDefault();	
			event.stopImmediatePropagation();
			this.mouseDown = true;	
	    
			var touch = event.originalEvent.touches[0];
			var X = touch.clientX - this.element.offset().left;
			var Y = touch.clientY - this.element.offset().top;
		
			this.rawMouseX = X; 
			this.rawMouseY = Y;

			this.mouseX = X * this.cmPerPixel + this.originX * this.cmPerPixel;
			this.mouseY = Y * this.cmPerPixel + this.originY * this.cmPerPixel;
			
			this.lastX = this.rawMouseX;
			this.lastY = this.rawMouseY;
		}
		
		private MouseWheel(event) {
			
			var delta = 0;

			if (event.originalEvent.wheelDelta) { // WebKit / Opera / Explorer 9
				delta = event.originalEvent.wheelDelta;
			} else if (event.originalEvent.detail) { // Firefox
				delta = - event.originalEvent.detail;
			}

			if (delta > 0) {
				this.ZoomOut();

			} else {

				this.ZoomIn();
			}
     
		}
		
		
		private PossTouches(touches)
		{
			let poss = [];
		 
			for (var i = 0; i < touches.length; i++)
			{
				let touche = touches[i];
				let pos = {x:0,y:0};
				pos.x = touche.clientX - this.element.offset().left;
				pos.y = touche.clientY - this.element.offset().top;
				poss.push(pos); 
			}
		 
			return poss;
		}
		
		private distPoss(poss)
		{
			let dx = poss[0].x - poss[1].x;
			let dy = poss[0].y - poss[1].y;	
			return Math.sqrt((dx*dx)+(dy*dy));	
		}
		
		
		
		private touchstart(event)
		{
			event.preventDefault();
			
			this.mouseDown = true;
			this.mouseMoved = false;
			
			switch (event.originalEvent.touches.length) {
				
				case 1:
			
				var touch = event.originalEvent.touches[0];
			
				var X = touch.clientX - this.element.offset().left;
				var Y = touch.clientY - this.element.offset().top;
			
				this.rawMouseX = X; 
				this.rawMouseY = Y;
			
				this.mouseX = X * this.cmPerPixel + this.originX * this.cmPerPixel;
				this.mouseY = Y * this.cmPerPixel + this.originY * this.cmPerPixel;
			
				var radius = Math.min(touch.radiusX,touch.radiusY);
			
				this.lastX = this.rawMouseX;
				this.lastY = this.rawMouseY;
			
				var selected = null;
			
				if (this.activeCorner != null)
				{
					var old_selected = 	this.activeCorner;
				}else
				{
					old_selected = 	this.activeWall;
				}
			
			


				// update target (snapped position of actual mouse)
				if (this.mode == floorplannerModes.DRAWTOUCH || (this.mode == floorplannerModes.MOVE && this.mouseDown)) {
					this.updateTarget();
				}
				
				const RadiusCm = 12;
				const wallWidthCm = 5;
				// update object target
				if (this.mode != floorplannerModes.DRAWTOUCH) {
					
					
					var target = this.floorplan.overlappedCornerOrWall(this.mouseX, this.mouseY,RadiusCm + (radius * this.cmPerPixel),wallWidthCm + (radius * this.cmPerPixel));
					
					var hoverCorner = null;
					var hoverWall = null; 
					
					if (target instanceof BP3D.Model.Corner)
					{
						hoverCorner = target;	
					}else
					if (target instanceof BP3D.Model.Wall)
					{
						hoverWall = target;	
					}
					
					
					
					
					
					var draw = false;
				
					if (hoverCorner != this.activeCorner) {
						this.activeCorner = hoverCorner;
						draw = true;
					}
				
					if (this.activeCorner)selected = this.activeCorner;	
				
					// corner takes precendence
					if (this.activeCorner == null) {
						if (hoverWall != this.activeWall) {
							this.activeWall = hoverWall;
							draw = true;	
						}
					
						if (this.activeWall)selected = this.activeWall;
					} else {
						this.activeWall = null;
						this.activeCorner.clickPressed();
					}
				
					if (draw) {
						this.view.draw();
					}
				}else
				{
				
					var corner1 = this.floorplan.overlappedCorner(this.mouseX, this.mouseY,RadiusCm + (radius * this.cmPerPixel));	
			
					if (!corner1) corner1 = this.floorplan.newCorner(this.targetX, this.targetY);
				
					var corner2 = this.floorplan.newCorner(this.mouseX, this.mouseY);
				
					corner2.clickPressed();
			
					this.activeWall = this.floorplan.newWall(corner1, corner2);	
				
					this.activeCorner = corner2;
				
					selected = this.activeCorner;	
				
				}
			
			
			
				if (old_selected !== selected)
				{  	
					if (old_selected !== null)this.UnselectedCallbacks.fire(old_selected);	
					if (selected !== null)this.SelectedCallbacks.fire(selected);		
				}
			
			
			
				if (this.mode == floorplannerModes.DELETE) {
					if (this.activeCorner) {
						this.activeCorner.removeAll();
					} else if (this.activeWall) {
						this.activeWall.remove();
					} else {
						this.setMode(floorplannerModes.MOVE);
					}
				}
			
				break;
			
				case 2:
				//zoom
				this.last_touches_poss = this.PossTouches(event.originalEvent.touches);
				break;
			}
		
		
		}
		
		
		private touchmove(event) {
			
			event.preventDefault();
			
			this.mouseMoved = true;
			
			switch (event.originalEvent.touches.length) {
				
				case 1:
			
				var touch = event.originalEvent.touches[0];
				var X = touch.clientX - this.element.offset().left;
				var Y = touch.clientY - this.element.offset().top;	
			
				this.rawMouseX = X;
				this.rawMouseY = Y;

				this.mouseX = X * this.cmPerPixel + this.originX * this.cmPerPixel;
				this.mouseY = Y * this.cmPerPixel + this.originY * this.cmPerPixel;
			
			
			
			
				if (this.mouseDown && !this.activeCorner && !this.activeWall) {
					this.originX += (this.lastX - this.rawMouseX);
					this.originY += (this.lastY - this.rawMouseY);
					this.lastX = this.rawMouseX;
					this.lastY = this.rawMouseY;
					this.view.draw();
					this.MovedCallbacks.fire();
				}

				// dragging
				if (this.mode !== floorplannerModes.DELETE && this.mouseDown) {
					if (this.activeCorner) {
						this.activeCorner.relativeMove((this.rawMouseX - this.lastX) * this.cmPerPixel, 
							(this.rawMouseY - this.lastY) * this.cmPerPixel,this.mode !== floorplannerModes.DRAWTOUCH);
						this.activeCorner.snapToAxis(snapTolerance);
						this.lastX = this.rawMouseX;
						this.lastY = this.rawMouseY;
					
					} else if (this.activeWall) {
						this.activeWall.relativeMove(
							(this.rawMouseX - this.lastX) * this.cmPerPixel,
							(this.rawMouseY - this.lastY) * this.cmPerPixel
						);
						this.activeWall.snapToAxis(snapTolerance);
						this.lastX = this.rawMouseX;
						this.lastY = this.rawMouseY;
					}
					this.view.draw();
					this.MovedCallbacks.fire();
				}	
			
				break;
			
				case 2:
				
				let touches_poss = this.PossTouches(event.originalEvent.touches);
				
				let dist = this.distPoss(touches_poss);
				
				let last_dist = this.distPoss(this.last_touches_poss);
				let sx = (touches_poss[0].x - touches_poss[1].x)-(this.last_touches_poss[0].x - this.last_touches_poss[1].x);
				let sy = (touches_poss[0].y - touches_poss[1].y)-(this.last_touches_poss[0].y - this.last_touches_poss[1].y);
				
				let zx = (1 / this.element.innerWidth()) * Math.abs(sx);
				let zy = (1 / this.element.innerHeight()) * Math.abs(sy); 
				
				let mx = Math.max(zx,zy);
				
				let cx = touches_poss[0].x + (touches_poss[1].x-touches_poss[0].x)*0.5;
				let cy = touches_poss[0].y + (touches_poss[1].y-touches_poss[0].y)*0.5;
				
				this.ZoomAdd((last_dist > dist) ? 1 - mx : 1 + mx,cx,cy);		
				
				this.last_touches_poss  = touches_poss;
			
				break;
			}
			
			
		}
		private touchend(event){
			
			event.preventDefault();
			
			this.mouseDown = false;	
			
			if (this.mode == floorplannerModes.DRAWTOUCH && this.activeCorner && this.activeWall) {
				this.activeCorner.mergeWithIntersected();
				
				let dist = this.activeWall.frontEdge.interiorDistance();
				
				if (isNaN(dist) || dist < 1)
				{
					this.activeWall.remove();
					this.UnselectedCallbacks.fire(this.activeCorner);	
					this.activeCorner = null;
					this.setMode(floorplannerModes.MOVE);
				}
				
			}
			
		
		}
		//end mobile

		/** */
		private mousedown(event) {
			
			this.mouseDown = true;
			this.mouseMoved = false;
			
			
			this.lastX = this.rawMouseX;
			this.lastY = this.rawMouseY;

			// delete
			if (this.mode == floorplannerModes.DELETE) {
				if (this.activeCorner) {
					this.activeCorner.removeAll();
				} else if (this.activeWall) {
					this.activeWall.remove();
				} else {
					this.setMode(floorplannerModes.MOVE);
				}
			}
		}

		/** */
		private mousemove(event) {
			this.mouseMoved = true;

			
			var X = event.clientX - this.element.offset().left;
			var Y = event.clientY - this.element.offset().top;
			
			this.rawMouseX = X;
			this.rawMouseY = Y;

			this.mouseX = X * this.cmPerPixel + this.originX * this.cmPerPixel;
			this.mouseY = Y * this.cmPerPixel + this.originY * this.cmPerPixel;


			// update target (snapped position of actual mouse)
			if (this.mode == floorplannerModes.DRAW || (this.mode == floorplannerModes.MOVE && this.mouseDown)) {
				this.updateTarget();
			}

			// update object target
			if (this.mode != floorplannerModes.DRAW && !this.mouseDown) {
				const RadiusCm = 12;
				const wallWidthCm = 5;
				const distPixel = 3;
				var hoverCorner = this.floorplan.overlappedCorner(this.mouseX, this.mouseY,RadiusCm + (distPixel *  this.cmPerPixel));
				var hoverWall = this.floorplan.overlappedWall(this.mouseX, this.mouseY,wallWidthCm + (distPixel *   this.cmPerPixel));
				var draw = false;
				if (hoverCorner != this.activeCorner) {
					this.activeCorner = hoverCorner;
					draw = true;
				}
				// corner takes precendence
				if (this.activeCorner == null) {
					if (hoverWall != this.activeWall) {
						this.activeWall = hoverWall;
						draw = true;
					}
				} else {
					this.activeWall = null;
				}
				if (draw) {
					this.view.draw();
				}
			}
			
			
			// panning
			if (this.mouseDown && !this.activeCorner && !this.activeWall) {
				this.originX += (this.lastX - this.rawMouseX);
				this.originY += (this.lastY - this.rawMouseY);
				this.lastX = this.rawMouseX;
				this.lastY = this.rawMouseY;
				this.view.draw();
			}

			// dragging
			if (this.mode == floorplannerModes.MOVE && this.mouseDown) {
				if (this.activeCorner) {
					this.activeCorner.move(this.mouseX, this.mouseY);
					this.activeCorner.snapToAxis(snapTolerance);
				} else if (this.activeWall) {
					this.activeWall.relativeMove(
						(this.rawMouseX - this.lastX) * this.cmPerPixel,
						(this.rawMouseY - this.lastY) * this.cmPerPixel
					);
					this.activeWall.snapToAxis(snapTolerance);
					this.lastX = this.rawMouseX;
					this.lastY = this.rawMouseY;
				}
				this.view.draw();
			}	
			
			
			
		}

		/** */
		private mouseup(event) {
			this.mouseDown = false;

			// drawing
			if (this.mode == floorplannerModes.DRAW && !this.mouseMoved) {
				var corner = this.floorplan.newCorner(this.targetX, this.targetY);
				if (this.lastNode != null) {
					this.floorplan.newWall(this.lastNode, corner);
				}
				if (corner.mergeWithIntersected() && this.lastNode != null) {
					this.setMode(floorplannerModes.MOVE);
				}
				this.lastNode = corner;
			}
		}

		/** */
		private mouseleave() {
			this.mouseDown = false;
			//scope.setMode(scope.modes.MOVE);
		}
		
		
		

		/** */
		private reset() 
		{
			if (this.activeCorner)
			{
				this.UnselectedCallbacks.fire(this.activeCorner);		
				this.activeCorner = null;	
			}else 
			if (this.activeWall)
			{
				this.UnselectedCallbacks.fire(this.activeWall);
				this.activeWall = null;
			}
			
			this.resizeView();
			this.setMode(floorplannerModes.MOVE);
			this.resetOrigin();
			this.view.draw();
		}

		/** */
		private resizeView() {
			this.view.handleWindowResize();
		}

		/** */
		private setMode(mode: number) {
			this.lastNode = null;
			this.mode = mode;
			this.modeResetCallbacks.fire(mode);
			this.updateTarget();
		}

		/** Sets the origin so that floorplan is centered */
		private resetOrigin() {
			var centerX = this.element.innerWidth() / 2.0;
			var centerY = this.element.innerHeight() / 2.0;
			var centerFloorplan = this.floorplan.getCenter();
			this.originX = centerFloorplan.x * this.pixelsPerCm - centerX;
			this.originY = centerFloorplan.z * this.pixelsPerCm - centerY;
		}

		/** Convert from THREEjs coords to canvas coords. */
		public convertX(x: number): number {
			return (x - this.originX * this.cmPerPixel) * this.pixelsPerCm;
		}

		/** Convert from THREEjs coords to canvas coords. */
		public convertY(y: number): number {
			return (y - this.originY * this.cmPerPixel) * this.pixelsPerCm;
		}
		
		public LoadTemplate(floorplan)
		{
		this.floorplan.loadFloorplan(floorplan);	
		}
		
		public SaveTemplate(callback)
		{
			var data = this.floorplan.saveFloorplan();
			var lines = [];
		
			var rect = {x1:Number.MAX_VALUE,y1:Number.MAX_VALUE,x2:Number.MIN_VALUE,y2:Number.MIN_VALUE,width:0,height:0};
		
			data.walls.forEach(function(wall){
				
					var corner1 = data.corners[wall.corner1];
					var corner2 = data.corners[wall.corner2];
				
				    var line = {a:{x:corner1.x,y:corner1.y},b:{x:corner2.x,y:corner2.y}};
					
					lines.push(line);
			    
					rect.x1 = Math.min(line.a.x,line.b.x,rect.x1);
					rect.y1 = Math.min(line.a.y,line.b.y,rect.y1);
			    
					rect.x2 = Math.max(line.a.x,line.b.x,rect.x2);
					rect.y2 = Math.max(line.a.y,line.b.y,rect.y2);
				});
		
		
			rect.width = rect.x2 - rect.x1;
			rect.height = rect.y2 - rect.y1;
			
			
			var canvas : any = document.createElement("canvas");
			canvas.width = 150;
			canvas.height = 150;
			
			var offset = 10;
			
			var ratio = Math.min((canvas.width - (offset*2))  / rect.width,(canvas.height- (offset*2)) / rect.height);
			
			var ctx = canvas.getContext('2d');
			
			ctx.fillStyle = "#ffffff";
			ctx.fillRect(0,0,canvas.width,canvas.height);
			ctx.translate(((canvas.width - (offset*2)) - (rect.width * ratio))/2,((canvas.height - (offset*2)) - (rect.height * ratio))/2); 
			ctx.translate(offset,offset); 
		
		    
			ctx.strokeStyle = "#000000";
		    
			ctx.lineWidth = 3;
		
			lines.forEach(function(line){
				
					var p1 = {x:(line.a.x - rect.x1) * ratio, y:(line.a.y - rect.y1) * ratio};
					var p2 = {x:(line.b.x - rect.x1) * ratio, y:(line.b.y - rect.y1) * ratio}
				
					ctx.beginPath();
					ctx.moveTo(p1.x,p1.y);   
					ctx.lineTo(p2.x,p2.y);
					ctx.stroke();	
				    
				    
					ctx.beginPath ();
					ctx.arc (p1.x, p1.y, 5, 0, Math.PI * 2, false);
					ctx.stroke();
					ctx.fill();
                    
					ctx.beginPath ();
					ctx.arc (p2.x, p2.y, 4, 0, Math.PI * 2, false);
					ctx.stroke();
					ctx.fill();
                    
			
				});
		
			
			if (callback){
			canvas.toBlob(function(blob) {
				callback({icon:blob,floorplan:data})
				});
			}
			
			return data;	
		}
	}
}