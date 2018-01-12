webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\wamp64\www\ModsCraft\Ionic-ThreeOfLife\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\wamp64\www\ModsCraft\Ionic-ThreeOfLife\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_scenegraph_scenegraph__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('scenegraph'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__components_scenegraph_scenegraph__["a" /* SceneGraph */])
    ], AboutPage.prototype, "sceneGraph", void 0);
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\wamp64\www\ModsCraft\Ionic-ThreeOfLife\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      About\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <scenegraph></scenegraph>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\ModsCraft\Ionic-ThreeOfLife\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SceneGraph; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var SceneGraph = (function () {
    function SceneGraph() {
    }
    SceneGraph.prototype.loadScript = function (scriptUrl) {
        return new Promise(function (resolve, reject) {
            var scriptElement = document.createElement('script');
            scriptElement.src = scriptUrl;
            scriptElement.onload = resolve;
            document.body.appendChild(scriptElement);
        });
    };
    SceneGraph.prototype.ngAfterViewInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadScript('../../assets/build/three.js')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/examples/js/libs/system.min.js')];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/examples/js/controls/EditorControls.js')];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/examples/js/controls/TransformControls.js')];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/examples/js/libs/jszip.min.js')];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/examples/js/libs/inflate.min.js')];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/examples/js/loaders/AMFLoader.js')];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/examples/js/loaders/AWDLoader.js')];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/examples/js/loaders/BabylonLoader.js')];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/examples/js/loaders/ColladaLoader.js')];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/examples/js/loaders/FBXLoader.js')];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/examples/js/loaders/GLTFLoader.js')];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/examples/js/loaders/KMZLoader.js')];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/examples/js/loaders/MD2Loader.js')];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/examples/js/loaders/OBJLoader.js')];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/examples/js/loaders/MTLLoader.js')];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/examples/js/loaders/PlayCanvasLoader.js')];
                    case 17:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/examples/js/loaders/PLYLoader.js')];
                    case 18:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/examples/js/loaders/STLLoader.js')];
                    case 19:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/examples/js/loaders/TGALoader.js')];
                    case 20:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/examples/js/loaders/TDSLoader.js')];
                    case 21:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/examples/js/loaders/UTF8Loader.js')];
                    case 22:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/examples/js/loaders/VRMLLoader.js')];
                    case 23:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/examples/js/loaders/VTKLoader.js')];
                    case 24:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/examples/js/loaders/ctm/lzma.js')];
                    case 25:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/examples/js/loaders/ctm/ctm.js')];
                    case 26:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/examples/js/loaders/ctm/CTMLoader.js')];
                    case 27:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/examples/js/exporters/OBJExporter.js')];
                    case 28:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/examples/js/exporters/GLTFExporter.js')];
                    case 29:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/examples/js/exporters/STLExporter.js')];
                    case 30:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/examples/js/renderers/Projector.js')];
                    case 31:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/examples/js/renderers/CanvasRenderer.js')];
                    case 32:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/examples/js/renderers/RaytracingRenderer.js')];
                    case 33:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/examples/js/renderers/SoftwareRenderer.js')];
                    case 34:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/examples/js/renderers/SVGRenderer.js')];
                    case 35:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/libs/codemirror/codemirror.js')];
                    case 36:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/libs/codemirror/mode/javascript.js')];
                    case 37:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/libs/codemirror/mode/glsl.js')];
                    case 38:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/libs/esprima.js')];
                    case 39:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/libs/jsonlint.js')];
                    case 40:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/libs/glslprep.min.js')];
                    case 41:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/libs/codemirror/addon/dialog.js')];
                    case 42:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/libs/codemirror/addon/show-hint.js')];
                    case 43:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/libs/codemirror/addon/tern.js')];
                    case 44:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/libs/acorn/acorn.js')];
                    case 45:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/libs/acorn/acorn_loose.js')];
                    case 46:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/libs/acorn/walk.js')];
                    case 47:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/libs/ternjs/polyfill.js')];
                    case 48:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/libs/ternjs/signal.js')];
                    case 49:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/libs/ternjs/tern.js')];
                    case 50:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/libs/ternjs/def.js')];
                    case 51:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/libs/ternjs/comment.js')];
                    case 52:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/libs/ternjs/infer.js')];
                    case 53:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/libs/ternjs/doc_comment.js')];
                    case 54:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/libs/tern-threejs/threejs.js')];
                    case 55:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/libs/signals.min.js')];
                    case 56:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/libs/ui.js')];
                    case 57:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/libs/ui.three.js')];
                    case 58:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/libs/app.js')];
                    case 59:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/Player.js')];
                    case 60:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/Script.js')];
                    case 61:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/examples/js/vr/WebVR.js')];
                    case 62:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/Storage.js')];
                    case 63:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/Editor.js')];
                    case 64:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/Config.js')];
                    case 65:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/History.js')];
                    case 66:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/Loader.js')];
                    case 67:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/Menubar.js')];
                    case 68:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/Menubar.File.js')];
                    case 69:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/Menubar.Edit.js')];
                    case 70:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/Menubar.Add.js')];
                    case 71:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/Menubar.Play.js')];
                    case 72:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/Menubar.View.js')];
                    case 73:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/Menubar.Examples.js')];
                    case 74:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/Menubar.Help.js')];
                    case 75:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/Menubar.Status.js')];
                    case 76:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/Sidebar.js')];
                    case 77:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/Sidebar.Scene.js')];
                    case 78:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/Sidebar.Project.js')];
                    case 79:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/Sidebar.Settings.js')];
                    case 80:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/Sidebar.Settings.Shortcuts.js')];
                    case 81:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/Sidebar.Properties.js')];
                    case 82:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/Sidebar.Object.js')];
                    case 83:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/Sidebar.Geometry.js')];
                    case 84:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/Sidebar.Geometry.Geometry.js')];
                    case 85:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/Sidebar.Geometry.BufferGeometry.js')];
                    case 86:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/Sidebar.Geometry.Modifiers.js')];
                    case 87:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/Sidebar.Geometry.BoxGeometry.js')];
                    case 88:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/Sidebar.Geometry.CircleGeometry.js')];
                    case 89:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/Sidebar.Geometry.CylinderGeometry.js')];
                    case 90:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/Sidebar.Geometry.IcosahedronGeometry.js')];
                    case 91:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/Sidebar.Geometry.PlaneGeometry.js')];
                    case 92:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/Sidebar.Geometry.SphereGeometry.js')];
                    case 93:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/Sidebar.Geometry.TorusGeometry.js')];
                    case 94:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/Sidebar.Geometry.TorusKnotGeometry.js')];
                    case 95:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/examples/js/geometries/TeapotBufferGeometry.js')];
                    case 96:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/Sidebar.Geometry.TeapotBufferGeometry.js')];
                    case 97:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/Sidebar.Geometry.LatheGeometry.js')];
                    case 98:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/Sidebar.Material.js')];
                    case 99:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/Sidebar.Animation.js')];
                    case 100:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/Sidebar.Script.js')];
                    case 101:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/Sidebar.History.js')];
                    case 102:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/Toolbar.js')];
                    case 103:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/Viewport.js')];
                    case 104:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/Viewport.Info.js')];
                    case 105:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/Command.js')];
                    case 106:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/commands/AddObjectCommand.js')];
                    case 107:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/commands/RemoveObjectCommand.js')];
                    case 108:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/commands/MoveObjectCommand.js')];
                    case 109:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/commands/SetPositionCommand.js')];
                    case 110:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/commands/SetRotationCommand.js')];
                    case 111:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/commands/SetScaleCommand.js')];
                    case 112:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/commands/SetValueCommand.js')];
                    case 113:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/commands/SetUuidCommand.js')];
                    case 114:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/commands/SetColorCommand.js')];
                    case 115:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/commands/SetGeometryCommand.js')];
                    case 116:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/commands/SetGeometryValueCommand.js')];
                    case 117:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/commands/MultiCmdsCommand.js')];
                    case 118:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/commands/AddScriptCommand.js')];
                    case 119:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/commands/RemoveScriptCommand.js')];
                    case 120:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/commands/SetScriptValueCommand.js')];
                    case 121:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/commands/SetMaterialCommand.js')];
                    case 122:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/commands/SetMaterialValueCommand.js')];
                    case 123:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/commands/SetMaterialColorCommand.js')];
                    case 124:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/commands/SetMaterialMapCommand.js')];
                    case 125:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/commands/SetSceneCommand.js')];
                    case 126:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/libs/html2canvas.js')];
                    case 127:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/libs/three.html.js')];
                    case 128:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('../../assets/js/myEditor.js')];
                    case 129:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SceneGraph = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'scenegraph',
            template: '<div id="myFrame"></div>',
            styleUrls: [
                '../../assets/editor/js/libs/codemirror/codemirror.css',
                '../../assets/editor/js/libs/codemirror/addon/dialog.css',
                '../../assets/editor/js/libs/codemirror/show-hint.css',
                '../../assets/editor/js/libs/codemirror/tern.css',
                '../../assets/editor/js/libs/codemirror/theme/monokai.css',
                '../../assets/editor/css/main.css',
                '../../assets/editor/css/light.css'
            ]
        })
    ], SceneGraph);
    return SceneGraph;
}());

//# sourceMappingURL=scenegraph.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\wamp64\www\ModsCraft\Ionic-ThreeOfLife\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Contact\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-start></ion-icon>\n\n      @ionicframework\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\ModsCraft\Ionic-ThreeOfLife\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\wamp64\www\ModsCraft\Ionic-ThreeOfLife\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h3>MODs 3D furnitures</h3>\n\n  <img src="https://cdnb.artstation.com/p/assets/images/images/004/305/847/large/dane-vranes-firstin-0000-layer-8.jpg?1482246585" alt="">\n\n  <p>\n\n    Welcome to our 3D product configurator. Here you will be able to design your own furnitures with our help.\n\n    <!-- If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way. -->\n\n  </p>\n\n\n\n  <img class="modswall" src="https://sc02.alicdn.com/kf/HTB1Z8RgLpXXXXcAXVXXq6xXFXXXU/Building-material-natural-plant-fiber-3d-wall.jpg_350x350.jpg" alt="">\n\n  The mods can be recovered by almost any surfaces. You can make the structure you want thanks to vertical and perpendicular alignements.\n\n\n\n  <button ion-button secondary menuToggle>GO TO PRODUCT CONFIGURATOR</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\ModsCraft\Ionic-ThreeOfLife\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_scenegraph_scenegraph__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_4__components_scenegraph_scenegraph__["a" /* SceneGraph */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\wamp64\www\ModsCraft\Ionic-ThreeOfLife\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\wamp64\www\ModsCraft\Ionic-ThreeOfLife\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map