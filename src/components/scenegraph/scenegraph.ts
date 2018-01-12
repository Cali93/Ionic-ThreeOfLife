import { Component, Input, ElementRef, AfterViewInit,  } from '@angular/core';
import * as THREE from 'three-of-life';


@Component({
  selector: 'scenegraph',
  templateUrl: '../../../node_modules/three-of-life/editor/index.html',
  styleUrls: [
  	'/node_modules/three-of-life/editor/js/libs/codemirror/codemirror.css',
  	'/node_modules/three-of-life/editor/js/libs/codemirror/addon/dialog.css',
  	'/node_modules/three-of-life/editor/js/libs/codemirror/show-hint.css',
  	'/node_modules/three-of-life/editor/js/libs/codemirror/tern.css',
  	'/node_modules/three-of-life/editor/js/libs/codemirror/theme/monokai.css',
  	'/node_modules/three-of-life/editor/css/main.css',
  	'/node_modules/three-of-life/editor/css/light.css'
  ]
})

export class SceneGraph  implements  AfterViewInit  {

	async ngAfterViewInit() {

		await this.loadScript('../build/three.js');
		await this.loadScript('../examples/js/libs/system.min.js');

		await this.loadScript('../examples/js/controls/EditorControls.js');
		await this.loadScript('../examples/js/controls/TransformControls.js');

		await this.loadScript('../examples/js/libs/jszip.min.js');
		await this.loadScript('../examples/js/libs/inflate.min.js"></script> <');

		await this.loadScript('../examples/js/loaders/AMFLoader.js');
		await this.loadScript('../examples/js/loaders/AWDLoader.js');
		await this.loadScript('../examples/js/loaders/BabylonLoader.js');
		await this.loadScript('../examples/js/loaders/ColladaLoader.js');
		await this.loadScript('../examples/js/loaders/FBXLoader.js');
		await this.loadScript('../examples/js/loaders/GLTFLoader.js');
		await this.loadScript('../examples/js/loaders/KMZLoader.js');
		await this.loadScript('../examples/js/loaders/MD2Loader.js');
		await this.loadScript('../examples/js/loaders/OBJLoader.js');
		await this.loadScript('../examples/js/loaders/MTLLoader.js');
		await this.loadScript('../examples/js/loaders/PlayCanvasLoader.js');
		await this.loadScript('../examples/js/loaders/PLYLoader.js');
		await this.loadScript('../examples/js/loaders/STLLoader.js');
		await this.loadScript('../examples/js/loaders/TGALoader.js');
		await this.loadScript('../examples/js/loaders/TDSLoader.js');
		await this.loadScript('../examples/js/loaders/UTF8Loader.js');
		await this.loadScript('../examples/js/loaders/VRMLLoader.js');
		await this.loadScript('../examples/js/loaders/VTKLoader.js');
		await this.loadScript('../examples/js/loaders/ctm/lzma.js');
		await this.loadScript('../examples/js/loaders/ctm/ctm.js');
		await this.loadScript('../examples/js/loaders/ctm/CTMLoader.js');
		await this.loadScript('../examples/js/exporters/OBJExporter.js');
		await this.loadScript('../examples/js/exporters/GLTFExporter.js');
		await this.loadScript('../examples/js/exporters/STLExporter.js');

		await this.loadScript('../examples/js/renderers/Projector.js');
		await this.loadScript('../examples/js/renderers/CanvasRenderer.js');
		await this.loadScript('../examples/js/renderers/RaytracingRenderer.js');
		await this.loadScript('../examples/js/renderers/SoftwareRenderer.js');
		await this.loadScript('../examples/js/renderers/SVGRenderer.js');

		await this.loadScript('js/libs/codemirror/codemirror.js');
		await this.loadScript('js/libs/codemirror/mode/javascript.js');
		await this.loadScript('js/libs/codemirror/mode/glsl.js');

		await this.loadScript('js/libs/esprima.js');
		await this.loadScript('js/libs/jsonlint.js');
		await this.loadScript('js/libs/glslprep.min.js');

		await this.loadScript('js/libs/codemirror/addon/dialog.js');
		await this.loadScript('js/libs/codemirror/addon/show-hint.js');
		await this.loadScript('js/libs/codemirror/addon/tern.js');
		await this.loadScript('js/libs/acorn/acorn.js');
		await this.loadScript('js/libs/acorn/acorn_loose.js');
		await this.loadScript('js/libs/acorn/walk.js');
		await this.loadScript('js/libs/ternjs/polyfill.js');
		await this.loadScript('js/libs/ternjs/signal.js');
		await this.loadScript('js/libs/ternjs/tern.js');
		await this.loadScript('js/libs/ternjs/def.js');
		await this.loadScript('js/libs/ternjs/comment.js');
		await this.loadScript('js/libs/ternjs/infer.js');
		await this.loadScript('js/libs/ternjs/doc_comment.js');
		await this.loadScript('js/libs/tern-threejs/threejs.js');

		await this.loadScript('js/libs/signals.min.js');
		await this.loadScript('js/libs/ui.js');
		await this.loadScript('js/libs/ui.three.js');

		await this.loadScript('js/libs/app.js');
		await this.loadScript('js/Player.js');
		await this.loadScript('js/Script.js');

		await this.loadScript('../examples/js/vr/WebVR.js');

		await this.loadScript('js/Storage.js');

		await this.loadScript('js/Editor.js');
		await this.loadScript('js/Config.js');
		await this.loadScript('js/History.js');
		await this.loadScript('js/Loader.js');
		await this.loadScript('js/Menubar.js');
		await this.loadScript('js/Menubar.File.js');
		await this.loadScript('js/Menubar.Edit.js');
		await this.loadScript('js/Menubar.Add.js');
		await this.loadScript('js/Menubar.Play.js');
		await this.loadScript('js/Menubar.View.js"></');
		await this.loadScript('js/Menubar.Examples.js');
		await this.loadScript('js/Menubar.Help.js');
		await this.loadScript('js/Menubar.Status.js');
		await this.loadScript('js/Sidebar.js');
		await this.loadScript('js/Sidebar.Scene.js');
		await this.loadScript('js/Sidebar.Project.js');
		await this.loadScript('js/Sidebar.Settings.js');
		await this.loadScript('js/Sidebar.Settings.Shortcuts.js');
		await this.loadScript('js/Sidebar.Properties.js');
		await this.loadScript('js/Sidebar.Object.js');
		await this.loadScript('js/Sidebar.Geometry.js');
		await this.loadScript('js/Sidebar.Geometry.Geometry.js');
		await this.loadScript('js/Sidebar.Geometry.BufferGeometry.js');
		await this.loadScript('js/Sidebar.Geometry.Modifiers.js');
		await this.loadScript('js/Sidebar.Geometry.BoxGeometry.js');
		await this.loadScript('js/Sidebar.Geometry.CircleGeometry.js');
		await this.loadScript('js/Sidebar.Geometry.CylinderGeometry.js');
		await this.loadScript('js/Sidebar.Geometry.IcosahedronGeometry.js');
		await this.loadScript('js/Sidebar.Geometry.PlaneGeometry.js');
		await this.loadScript('js/Sidebar.Geometry.SphereGeometry.js');
		await this.loadScript('js/Sidebar.Geometry.TorusGeometry.js');
		await this.loadScript('js/Sidebar.Geometry.TorusKnotGeometry.js');
		await this.loadScript('../examples/js/geometries/TeapotBufferGeometry.js');
		await this.loadScript('js/Sidebar.Geometry.TeapotBufferGeometry.js');
		await this.loadScript('js/Sidebar.Geometry.LatheGeometry.js');
		await this.loadScript('js/Sidebar.Material.js');
		await this.loadScript('js/Sidebar.Animation.js');
		await this.loadScript('js/Sidebar.Script.js');
		await this.loadScript('js/Sidebar.History.js');
		await this.loadScript('js/Toolbar.js');
		await this.loadScript('js/Viewport.js');
		await this.loadScript('js/Viewport.Info.js');

		await this.loadScript('js/Command.js');
		await this.loadScript('js/commands/AddObjectCommand.js');
		await this.loadScript('js/commands/RemoveObjectCommand.js');
		await this.loadScript('js/commands/MoveObjectCommand.js');
		await this.loadScript('js/commands/SetPositionCommand.js');
		await this.loadScript('js/commands/SetRotationCommand.js');
		await this.loadScript('js/commands/SetScaleCommand.js');
		await this.loadScript('js/commands/SetValueCommand.js');
		await this.loadScript('js/commands/SetUuidCommand.js');
		await this.loadScript('js/commands/SetColorCommand.js');
		await this.loadScript('js/commands/SetGeometryCommand.js');
		await this.loadScript('js/commands/SetGeometryValueCommand.js');
		await this.loadScript('js/commands/MultiCmdsCommand.js');
		await this.loadScript('js/commands/AddScriptCommand.js');
		await this.loadScript('js/commands/RemoveScriptCommand.js');
		await this.loadScript('js/commands/SetScriptValueCommand.js');
		await this.loadScript('js/commands/SetMaterialCommand.js');
		await this.loadScript('js/commands/SetMaterialValueCommand.js');
		await this.loadScript('js/commands/SetMaterialColorCommand.js');
		await this.loadScript('js/commands/SetMaterialMapCommand.js');
		await this.loadScript('js/commands/SetSceneCommand.js');

		await this.loadScript('js/libs/html2canvas.js');
		await this.loadScript('js/libs/three.html.js');

		window.URL = window.URL || window.webkitURL;
		window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder;

		Number.prototype.format = function (){
			return this.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
		};


		var editor = new Editor();

		var viewport = new Viewport( editor );
		document.body.appendChild( viewport.dom );

		var script = new Script( editor );
		document.body.appendChild( script.dom );

		var player = new Player( editor );
		document.body.appendChild( player.dom );

		var toolbar = new Toolbar( editor );
		document.body.appendChild( toolbar.dom );

		var menubar = new Menubar( editor );
		document.body.appendChild( menubar.dom );

		var sidebar = new Sidebar( editor );
		document.body.appendChild( sidebar.dom );

		var modal = new UI.Modal();
		document.body.appendChild( modal.dom );

		//

		editor.setTheme( editor.config.getKey( 'theme' ) );

		editor.storage.init( function () {

			editor.storage.get( function ( state ) {

				if ( isLoadingFromHash ) return;

				if ( state !== undefined ) {

					editor.fromJSON( state );

				}

				var selected = editor.config.getKey( 'selected' );

				if ( selected !== undefined ) {

					editor.selectByUuid( selected );

				}

			} );

			//

			var timeout;

			function saveState( scene ) {

				if ( editor.config.getKey( 'autosave' ) === false ) {

					return;

				}

				clearTimeout( timeout );

				timeout = setTimeout( function () {

					editor.signals.savingStarted.dispatch();

					timeout = setTimeout( function () {

						editor.storage.set( editor.toJSON() );

						editor.signals.savingFinished.dispatch();

					}, 100 );

				}, 1000 );

			};

			var signals = editor.signals;

			signals.geometryChanged.add( saveState );
			signals.objectAdded.add( saveState );
			signals.objectChanged.add( saveState );
			signals.objectRemoved.add( saveState );
			signals.materialChanged.add( saveState );
			signals.sceneBackgroundChanged.add( saveState );
			signals.sceneFogChanged.add( saveState );
			signals.sceneGraphChanged.add( saveState );
			signals.scriptChanged.add( saveState );
			signals.historyChanged.add( saveState );

			signals.showModal.add( function ( content ) {

				modal.show( content );

			} );

		} );

		//

		document.addEventListener( 'dragover', function ( event ) {

			event.preventDefault();
			event.dataTransfer.dropEffect = 'copy';

		}, false );

		document.addEventListener( 'drop', function ( event ) {

			event.preventDefault();

			if ( event.dataTransfer.files.length > 0 ) {

				editor.loader.loadFile( event.dataTransfer.files[ 0 ] );

			}

		}, false );

		function onWindowResize( event ) {

			editor.signals.windowResize.dispatch();

		}

		window.addEventListener( 'resize', onWindowResize, false );

		onWindowResize();

		//

		var isLoadingFromHash = false;
		var hash = window.location.hash;

		if ( hash.substr( 1, 5 ) === 'file=' ) {

			var file = hash.substr( 6 );

			if ( confirm( 'Any unsaved data will be lost. Are you sure?' ) ) {

				var loader = new THREE.FileLoader();
				loader.crossOrigin = '';
				loader.load( file, function ( text ) {

					editor.clear();
					editor.fromJSON( JSON.parse( text ) );

				} );

				isLoadingFromHash = true;

			}

		}
	}

	private loadScript(scriptUrl: string) {
	   return new Promise((resolve, reject) => {
		 const scriptElement = document.createElement('script');
		 scriptElement.src = scriptUrl;
		 scriptElement.onload = resolve;
		 document.body.appendChild(scriptElement);
		})
	 }



	startAnimation() {


	}

	stopAnimation() {

	}

}
