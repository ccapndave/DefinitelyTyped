// <reference path="../leaflet/leaflet.d.ts" />

declare module 'mapbox.js' { export = 1; }
declare module 'leaflet-draw' { export = 1; }

declare module L {
	interface DrawOptions {
		// TODO
	}
	
	interface EditOptions {
		// TODO
	}
	
	export interface ControlStatic {
		Draw: Control.Draw;
	}
	
	module Control {
		export interface Draw extends L.Control {
			new(options?: {
				position?: string;
				draw?: DrawOptions;
				edit?: EditOptions;
			}): Draw;
		}
	}
}
