webpackJsonp([8],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_qs__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_qs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rest_api_rest_api__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(14);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = /** @class */ (function () {
    function AuthProvider(http, restApi, platform) {
        this.http = http;
        this.restApi = restApi;
        this.platform = platform;
        this.auth = {
            username: 'vrm-client',
            password: 'P@ssw0rds',
            params: {
                grant_type: 'password',
                client_id: 'vrm-client',
            }
        };
        console.log('Hello AuthProvider Provider');
    }
    AuthProvider.prototype.login = function (username, password) {
        var _this = this;
        var path = 'https://ptg-vrm-api.azurewebsites.net/oauth/token?' +
            __WEBPACK_IMPORTED_MODULE_2_qs___default.a.stringify(__assign({}, this.auth.params, { username: username, password: password }));
        if (this.platform.is('cordova')) {
            this.http.setDataSerializer('json');
            this.http.useBasicAuth(this.auth.username, this.auth.password);
            console.log('path', path);
            return this.http.post(path, {}, {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }).then(function (response) {
                _this.currentUser = {
                    name: 'User',
                    role: 0,
                };
                var data = JSON.parse(response.data);
                console.log('success', data);
                if (data && data.access_token) {
                    Object(__WEBPACK_IMPORTED_MODULE_4__rest_api_rest_api__["d" /* setCredential */])(data.access_token);
                    return true;
                }
                else {
                    return false;
                }
            }).catch(function (error) {
                console.log('error');
                console.log(JSON.stringify(error));
                return false;
            });
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_3_axios___default.a.request({
                method: 'post',
                url: path,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                auth: {
                    username: this.auth.username,
                    password: this.auth.password
                }
            }).then(function (response) {
                _this.currentUser = {
                    name: 'User',
                    role: 0,
                };
                var data = response.data;
                console.log('success', data);
                if (data && data.access_token) {
                    Object(__WEBPACK_IMPORTED_MODULE_4__rest_api_rest_api__["d" /* setCredential */])(data.access_token);
                    return true;
                }
                else {
                    return false;
                }
            }).catch(function () {
                return false;
            });
        }
    };
    AuthProvider.prototype.isLoggedIn = function () {
        return this.currentUser != null;
    };
    AuthProvider.prototype.isAdmin = function () {
        return this.currentUser.role === 0;
    };
    AuthProvider.prototype.logout = function () {
        this.currentUser = null;
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_4__rest_api_rest_api__["a" /* RestApiProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* Platform */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoodReceiveDetailSavePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(30);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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




/**
 * Generated class for the GoodReceiveDetailSavePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GoodReceiveDetailSavePage = /** @class */ (function () {
    function GoodReceiveDetailSavePage(navCtrl, navParams, viewCtrl, alertCtrl, translate, restApi, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.restApi = restApi;
        this.app = app;
        this.isenabled = true;
        this.form = {
            documentDate: '',
            documentNote: '',
            note: '',
        };
        this.saveGRItems = function (params) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.restApi.post('api/goodsReceives/save', params).then(function (data) {
                        console.log('save', data);
                        if (data.success && data.data && data.data.matDoc) {
                            return data.data;
                        }
                        else {
                            return {
                                error: true,
                                message: data.msg[_this.translate.currentLang]
                            };
                        }
                    }).catch(function (error) {
                        console.log(error);
                        return {
                            error: true,
                            message: _this.translate.instant('Unknown Error')
                        };
                    })];
            });
        }); };
    }
    GoodReceiveDetailSavePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GoodReceiveDetailSavePage');
    };
    GoodReceiveDetailSavePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss({
            cancel: true
        });
    };
    GoodReceiveDetailSavePage.prototype.saveData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var goodReceive, data, result, alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isenabled = false;
                        goodReceive = this.navParams.get('goodReceive') || {};
                        data = __assign({ createDate: '', deliveryNote: '', documentDate: '', note: '', postingDate: '', vendorId: '' }, goodReceive, this.form);
                        return [4 /*yield*/, this.saveGRItems(data)];
                    case 1:
                        result = (_a.sent()) || {};
                        console.log('save result', result);
                        if (result.matDoc) {
                            alert = this.alertCtrl.create({
                                title: this.translate.instant('Success'),
                                message: this.translate.instant("Material Document") + ": " + result.matDoc
                            });
                            alert.onDidDismiss(function () {
                                _this.viewCtrl.dismiss({ success: true });
                            });
                            alert.present();
                        }
                        else if (result.error === true) {
                            this.alertCtrl.create({
                                title: this.translate.instant('Error'),
                                message: result.message
                            }).present();
                        }
                        else {
                            this.alertCtrl.create({
                                title: this.translate.instant('Error'),
                                message: this.translate.instant('Unknown error')
                            }).present();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    GoodReceiveDetailSavePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-good-receive-detail-save',template:/*ion-inline-start:"C:\MobileApp\pt-mobile-master\src\pages\good-receive-detail-save\good-receive-detail-save.html"*/'<!--\n  Generated template for the GoodReceiveDetailSavePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-grid>\n	  <ion-row>\n		<ion-col col-8 style="padding-left:15px;">	\n			<button ion-button menuToggle>\n			  <ion-icon name="menu"></ion-icon>\n			</button>\n		</ion-col>\n		<ion-col col-4 style="padding-right:5px;">\n			<app-header></app-header>\n		</ion-col>\n	  </ion-row>\n	</ion-grid>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div class="d-flex justify-content-between">\n    <ion-grid>\n	  <ion-row>\n		<ion-col text-left style="font-size:20px;padding-left:15px;">\n		  <ion-icon ios="ios-arrow-back" md="md-arrow-back" (click)="dismiss()"></ion-icon>\n		</ion-col>\n		<ion-col text-center style="font-size:20px">\n		  <ion-title>\n			{{ \'Save Good Receive\' | translate }}\n		  </ion-title>\n		</ion-col>\n		<ion-col text-right style="font-size:20px;padding-right:15px;">\n		  <ion-icon name="refresh" (click)="loadData()"></ion-icon>\n		</ion-col>\n	  </ion-row>\n	</ion-grid>\n	<!-- <button color="light" ion-button (click)="dismiss()">{{ \'Back\' | translate}}</button> -->\n    <!-- <button color="light" ion-button (click)="loadData()">{{ \'Refresh\' | translate}}</button> -->\n  </div>\n\n\n  <ion-item>\n    <ion-label floating>{{ \'Document Date\' | translate}} <span class="text-danger">*</span></ion-label>\n    <!--<ion-input [(ngModel)]="form.documentDate"></ion-input>-->\n	<ion-datetime displayFormat="DD-MM-YYYY" [(ngModel)]="form.documentDate"></ion-datetime>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>{{ \'DN/Tax Invoice\' | translate }} <span class="text-danger">*</span></ion-label>\n    <ion-input [(ngModel)]="form.documentNote"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>{{ \'Note\' | translate}}</ion-label>\n    <ion-input [(ngModel)]="form.note"></ion-input>\n  </ion-item>\n\n  <div class="row no-gutters p-4">\n    <div class="col pr-2">\n      <button ion-button color="primary" [block]="true"\n              [disabled]="!form.documentNote || !form.documentDate || !isenabled"\n              (click)="saveData()">{{ \'Ok\' | translate}}</button>\n    </div>\n    <div class="col pl-2">\n      <button ion-button color="danger" [block]="true" (click)="dismiss()">{{ \'Cancel\' | translate}}</button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\MobileApp\pt-mobile-master\src\pages\good-receive-detail-save\good-receive-detail-save.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__["a" /* RestApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__["a" /* RestApiProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" && _g || Object])
    ], GoodReceiveDetailSavePage);
    return GoodReceiveDetailSavePage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=good-receive-detail-save.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoodReceiveDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__good_receive_detail_save_good_receive_detail_save__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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






var GoodReceiveDetailPage = /** @class */ (function () {
    function GoodReceiveDetailPage(navCtrl, alertCtrl, modalCtrl, translate, restApi, viewCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.translate = translate;
        this.restApi = restApi;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.loading = false;
        this.filterDate = '';
        this.dateOptions = [];
        this.filterItem = function (item) {
            return _this.filterDate === '' || item.deliveryDate === _this.filterDate;
        };
        this.data = navParams.get('data') || {};
        this.goodReceive = navParams.get('goodReceive') || {};
        console.log('get data', this.data);
    }
    GoodReceiveDetailPage.prototype.ionViewWillEnter = function () {
        this.loadData();
    };
    GoodReceiveDetailPage.prototype.loadData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var params, data, alert_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // this.viewCtrl.showBackButton(false);
                        this.loading = true;
                        params = __WEBPACK_IMPORTED_MODULE_5_lodash__["pick"](this.data, [
                            'sapPoHeaderId',
                            'plant',
                            'shipingDate',
                            'customer'
                        ]);
                        return [4 /*yield*/, this.getPoItems(params)];
                    case 1:
                        data = _a.sent();
                        if (__WEBPACK_IMPORTED_MODULE_5_lodash__["isEmpty"](data)) {
                            alert_1 = this.alertCtrl.create({
                                title: this.translate.instant('Error'),
                                message: this.translate.instant('GoodReceive not found'),
                            });
                            alert_1.onWillDismiss(function () {
                                _this.navCtrl.pop();
                            });
                            return [2 /*return*/, alert_1.present()];
                        }
                        else {
                            __WEBPACK_IMPORTED_MODULE_5_lodash__["merge"](this.goodReceive, data);
                            this.dateOptions = __WEBPACK_IMPORTED_MODULE_5_lodash__["uniq"](__WEBPACK_IMPORTED_MODULE_5_lodash__["map"](data.items, function (item) {
                                return item.deliveryDate;
                            })) || [];
                            console.log(this.dateOptions);
                        }
                        this.loading = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    GoodReceiveDetailPage.prototype.getPoItems = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.restApi.post('api/goodsReceives/getPoItem', data).then(function (response) {
                            return response && response.data;
                        }).catch(function (error) {
                            return {};
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    GoodReceiveDetailPage.prototype.checkLimit = function (limit) {
        console.log('limit', limit, 'this', this);
    };
    // async loadGoodReceiveData() {
    //     request({
    //         method: 'GET',
    //         url: 'api/goodsReceives/' + this.goodReceive,
    //         data: {}
    //     }).then(response => {
    //         const data = response.data;
    //         this.items = data.data.items;
    //         console.log(this.items)
    //
    //     }).catch(error => {
    //         console.log(error);
    //     })
    // }
    GoodReceiveDetailPage.prototype.dismiss = function () {
        this.navCtrl.pop();
    };
    GoodReceiveDetailPage.prototype.validateForm = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            /**
             * Check at least 1 item qty
             */
            var least_one_item = __WEBPACK_IMPORTED_MODULE_5_lodash__["some"](_this.goodReceive.items, function (item) {
                return item.receiveQty > 0;
            });
            if (!least_one_item) {
                return resolve({
                    error: true,
                    message: _this.translate.instant('Must input receive qty atleast 1 item')
                });
            }
            /**
             * Qty should less than order qty
             */
            var valid_receive_qty = __WEBPACK_IMPORTED_MODULE_5_lodash__["every"](_this.goodReceive.items, function (item) {
                return item.receiveQty <= item.poQty;
            });
            if (!valid_receive_qty) {
                return resolve({
                    error: true,
                    message: _this.translate.instant('ReceiveQty should less than or equal OrderQty ')
                });
            }
            resolve({});
        });
    };
    GoodReceiveDetailPage.prototype.resetData = function () {
        this.goodReceive.items = __WEBPACK_IMPORTED_MODULE_5_lodash__["map"](this.goodReceive.items, function (item) {
            return __assign({}, item, { receiveQty: '' });
        });
    };
    GoodReceiveDetailPage.prototype.saveData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var form_valid, alert_2, receiveNote;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.validateForm()];
                    case 1:
                        form_valid = _a.sent();
                        if (form_valid.error === true) {
                            alert_2 = this.alertCtrl.create({
                                title: this.translate.instant('Error'),
                                message: form_valid.message
                            }).present();
                            return [2 /*return*/, false];
                        }
                        receiveNote = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__good_receive_detail_save_good_receive_detail_save__["a" /* GoodReceiveDetailSavePage */], {
                            goodReceive: this.goodReceive
                        });
                        receiveNote.onDidDismiss(function (data) {
                            if (data && data.success === true) {
                                _this.navCtrl.pop();
                            }
                        });
                        receiveNote.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    GoodReceiveDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-good-receive-detail',template:/*ion-inline-start:"C:\MobileApp\pt-mobile-master\src\pages\good-receive-detail\good-receive-detail.html"*/'<!--\n  Generated template for the goodReceiveDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-grid>\n	  <ion-row>\n		<ion-col col-8 style="padding-left:15px;">	\n			<button ion-button menuToggle>\n			  <ion-icon name="menu"></ion-icon>\n			</button>\n		</ion-col>\n		<ion-col col-4 style="padding-right:5px;">\n			<app-header></app-header>\n		</ion-col>\n	  </ion-row>\n	</ion-grid>\n  </ion-navbar>\n  \n</ion-header>\n\n<ion-content padding>\n  <!--<div *ngIf="goodReceive.poHeaderId">\n    <ion-item>PO ID: {{goodReceive.poHeaderId}}</ion-item>\n    <ion-item>SAP PO ID: {{goodReceive.sapPoHeaderId}}</ion-item>\n    <ion-item>Vendor (ID): {{goodReceive.vendorName}} ({{goodReceive.vendorId}})</ion-item>\n  </div>-->\n\n  <div class="d-flex justify-content-between">\n    <ion-grid>\n	  <ion-row>\n		<ion-col text-left style="font-size:20px;padding-left:15px;">\n		  <ion-icon ios="ios-arrow-back" md="md-arrow-back" (click)="dismiss()"></ion-icon>\n		</ion-col>\n		<ion-col text-center style="font-size:20px">\n		  <ion-title *ngIf="goodReceive.poHeaderId">\n			GR PO : {{ goodReceive.poHeaderId }}\n		  </ion-title>\n		</ion-col>\n		<ion-col text-right style="font-size:20px;padding-right:15px;">\n		  <ion-icon name="refresh" (click)="loadData()"></ion-icon>\n		</ion-col>\n	  </ion-row>\n	</ion-grid>\n	<!-- <button color="light" ion-button (click)="dismiss()">{{ \'Back\' | translate}}</button> -->\n    <!-- <button color="light" ion-button (click)="loadData()">{{ \'Refresh\' | translate}}</button> -->\n  </div>\n\n  <div class="text-center p-4 " *ngIf="loading">\n    <ion-spinner item-start name="dots"></ion-spinner>\n    <div>\n      {{ \'Loading Items...\' | translate }}\n    </div>\n  </div>\n\n  <div class="text-center p-4 " *ngIf="!loading && goodReceive.items?.length === 0">\n    {{ \'No GoodReceive item\' }}\n  </div>\n\n  <select\n          [(ngModel)]="filterDate" *ngIf="!loading && goodReceive.items?.length > 0"\n          class="form-control mt-3" style="font-size: 2rem; height: 3.5rem;">\n    <option *ngFor="let option of dateOptions"\n            value="{{ option}}">\n      {{ option }}\n    </option>\n  </select>\n\n  <div *ngIf="!loading && goodReceive.items?.length > 0">\n    <div class="pb-3 pt-3 border-bottom" *ngFor="let item of goodReceive.items | callback: filterItem">\n      <div>\n        <strong>\n          [{{item.deliveryDate}}]\n          {{item.materialId}},\n          {{item.materialDesc}}\n        </strong>\n      </div>\n      <div class="row no-gutters d-flex align-items-center gr-item">\n        <div class="col-3  text-center">\n          <strong>{{ \'Order Qty\' | translate }}</strong>\n          <input type="number" class="form-control text-center" [(ngModel)]="item.poQty" [disabled]="true" />\n        </div>\n        <div class="col-3  text-center">\n          <strong>{{ \'Remain Qty\' | translate}}</strong>\n          <input type="number" class="form-control text-center" [(ngModel)]="item.reQty" [disabled]="true" />\n        </div>\n        <div class="col-3  text-center">\n          <strong>{{ \'Received Qty\' | translate}}</strong>\n          <input type="number" class="form-control text-center\n          {{item.receiveQty > item.poQty? \'is-invalid\': item.receiveQty > 0? \'is-valid\': \'\'}}"\n                 [(ngModel)]="item.receiveQty" />\n        </div>\n        <div class="col-3 text-center">\n          <strong>{{ item.unit }}</strong>\n        </div>\n      </div>\n    </div>\n\n    <div>\n      <button class="mt-3" ion-button color="primary" [block]="true" (click)="saveData()">{{ \'Submit\' | translate}}\n      </button>\n    </div>\n    <div>\n      <button class="mt-3" ion-button color="danger" [block]="true" (click)="resetData()">{{ \'Reset\' | translate}}\n      </button>\n    </div>\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\MobileApp\pt-mobile-master\src\pages\good-receive-detail\good-receive-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__["a" /* RestApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], GoodReceiveDetailPage);
    return GoodReceiveDetailPage;
}());

//# sourceMappingURL=good-receive-detail.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurchaseOrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PurchaseOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PurchaseOrderPage = /** @class */ (function () {
    function PurchaseOrderPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.purchasingOrders = [];
    }
    PurchaseOrderPage.prototype.loadData = function () {
        var _this = this;
        Object(__WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__["c" /* request */])({
            method: 'POST',
            url: 'api/purchasingOrders',
            data: {
                start: 0,
                length: 0,
            }
        }).then(function (response) {
            var data = response.data;
            _this.purchasingOrders = data.data.purchasingOrders;
            console.log(data);
            console.log(_this.purchasingOrders);
        }).catch(function (error) {
            console.log(error);
        });
    };
    PurchaseOrderPage.prototype.ionViewWillEnter = function () {
        this.loadData();
    };
    PurchaseOrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-purchase-order',template:/*ion-inline-start:"C:\MobileApp\pt-mobile-master\src\pages\purchase-order\purchase-order.html"*/'<!--\n  Generated template for the PurchaseOrderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>PurchaseOrder</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item *ngFor="let item of purchasingOrders">\n    <div>ID: {{item.poHeaderId}}</div>\n    <div>Vendor: {{item.vendorName}}</div>\n    <div>Value: {{item.totalValue}}</div>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"C:\MobileApp\pt-mobile-master\src\pages\purchase-order\purchase-order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], PurchaseOrderPage);
    return PurchaseOrderPage;
}());

//# sourceMappingURL=purchase-order.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurchaseRequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PurchaseRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PurchaseRequestPage = /** @class */ (function () {
    function PurchaseRequestPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.purchasingRequests = [];
    }
    PurchaseRequestPage.prototype.ionViewWillEnter = function () {
        this.loadData();
    };
    PurchaseRequestPage.prototype.loadData = function () {
        var _this = this;
        Object(__WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__["c" /* request */])({
            method: 'POST',
            url: 'api/purchasingRequests',
            data: {
                start: 0,
                length: 0,
            }
        }).then(function (response) {
            var data = response.data;
            _this.purchasingRequests = data.data.purchasingRequests;
            console.log(data);
            console.log(_this.purchasingRequests);
        }).catch(function (error) {
            console.log(error);
        });
    };
    PurchaseRequestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PurchaseRequestPage');
    };
    PurchaseRequestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-purchase-request',template:/*ion-inline-start:"C:\MobileApp\pt-mobile-master\src\pages\purchase-request\purchase-request.html"*/'<!--\n  Generated template for the PurchaseRequestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>PurchaseRequest</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item *ngFor="let item of purchasingRequests">\n    <div>ID: {{item.prHeaderId}}</div>\n    <div>Created By: {{item.createdBy}}</div>\n    <div>Value: {{item.totalValue}}</div>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"C:\MobileApp\pt-mobile-master\src\pages\purchase-request\purchase-request.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], PurchaseRequestPage);
    return PurchaseRequestPage;
}());

//# sourceMappingURL=purchase-request.js.map

/***/ }),

/***/ 158:
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
webpackEmptyAsyncContext.id = 158;

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/auth/auth.module": [
		647,
		7
	],
	"../pages/good-receive-detail-save/good-receive-detail-save.module": [
		646,
		6
	],
	"../pages/good-receive-detail/good-receive-detail.module": [
		648,
		5
	],
	"../pages/good-receive/good-receive.module": [
		650,
		4
	],
	"../pages/login/login.module": [
		649,
		3
	],
	"../pages/menu/menu.module": [
		651,
		2
	],
	"../pages/purchase-order/purchase-order.module": [
		652,
		1
	],
	"../pages/purchase-request/purchase-request.module": [
		653,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 201;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Api */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return setUser; });
/* unused harmony export getUser */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setCredential; });
/* unused harmony export getCredential */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return logout; });
/* unused harmony export checkAuth */
/* unused harmony export login */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(14);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the RestApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var Api = __WEBPACK_IMPORTED_MODULE_1_axios___default.a.create({
    baseURL: 'https://ptg-vrm-api.azurewebsites.net/',
    // timeout: 1000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
});
var setUser = function (user) {
    localStorage.setItem('user', JSON.stringify(user));
};
var getUser = function () {
    return JSON.parse(localStorage.getItem('user'));
};
var setCredential = function (token) {
    localStorage.setItem('token', token);
};
var getCredential = function () {
    var token = 'a4d2345a-b7f9-4a5b-bd97-d1edf5046300';
    if (!token) {
        return {};
    }
    return {
        'Authorization': 'Bearer ' + token
    };
};
var logout = function () {
    localStorage.removeItem('token');
};
var checkAuth = function () {
    return Api.post('/api/authorizations', {}, {}).then(function (response) {
        console.log(response.data);
        if (response && response.data && response.data.data) {
            setUser(response.data.data);
            return true;
        }
        else {
            return false;
        }
    }).catch(function (response) {
        return false;
    });
};
var login = function (username, password) {
    var basic_username = 'vrm-client';
    var basic_password = 'P@ssw0rds';
    var params = __assign({ method: 'POST', url: 'https://ptg-vrm-api.azurewebsites.net/oauth/token', auth: {
            username: basic_username,
            password: basic_password,
        }, params: {
            username: username,
            password: password,
            grant_type: 'password',
            client_id: 'vrm-client',
        } }, getCredential());
    console.log('Login with', JSON.stringify(params));
    return request(params).then(function (response) {
        if (response && response.data && response.data.access_token) {
            return response.data.access_token;
        }
        else {
            return false;
        }
    }).catch(function (response) {
        console.log('login error ' + response);
        return false;
    });
};
var request = function (config) {
    return Api.request(__assign({}, config, getCredential()));
};
/* unused harmony default export */ var _unused_webpack_default_export = (Api);
var RestApiProvider = /** @class */ (function () {
    function RestApiProvider(http, platform) {
        this.http = http;
        this.platform = platform;
        console.log('Hello RestApiProvider Provider');
        this.http.setDataSerializer('json');
    }
    RestApiProvider_1 = RestApiProvider;
    RestApiProvider.getPath = function (path) {
        if (path === void 0) { path = ''; }
        return 'https://ptg-vrm-api.azurewebsites.net/' + path;
    };
    RestApiProvider.getHeader = function (headers_options) {
        if (headers_options === void 0) { headers_options = {}; }
        var headers = __assign({ 'Accept': 'application/json', 'Content-Type': 'application/json' }, getCredential(), headers_options);
        return headers;
    };
    RestApiProvider.prototype.get = function (path, params, headers) {
        if (params === void 0) { params = {}; }
        if (headers === void 0) { headers = {}; }
        var request_path = RestApiProvider_1.getPath(path);
        var request_headers = RestApiProvider_1.getHeader(headers);
        console.log('POST | ' + request_path);
        console.log('HEADER | ' + JSON.stringify(request_headers));
        console.log('DATA | ' + JSON.stringify(params));
        if (this.platform.is('cordova')) {
            return this.http.get(request_path, params, request_headers)
                .then(RestApiProvider_1.parseJSON);
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.request({
                method: 'GET',
                url: request_path,
                params: params,
                headers: request_headers
            }).then(function (response) { return response.data; });
        }
        // .catch(error => {
        //     console.log('GET ERROR' + JSON.stringify(error))
        // })
    };
    RestApiProvider.prototype.post = function (path, params, headers) {
        if (params === void 0) { params = {}; }
        if (headers === void 0) { headers = {}; }
        var request_path = RestApiProvider_1.getPath(path);
        var request_headers = RestApiProvider_1.getHeader(headers);
        console.log('POST | ' + request_path);
        console.log('HEADER | ' + JSON.stringify(request_headers));
        console.log('DATA | ' + JSON.stringify(params));
        if (this.platform.is('cordova')) {
            return this.http.post(request_path, params, request_headers)
                .then(RestApiProvider_1.parseJSON);
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.request({
                method: 'POST',
                url: request_path,
                data: params,
                headers: request_headers
            }).then(function (response) { return response.data; });
        }
        // .catch(error => {
        //     console.log('POST ERROR' + JSON.stringify(error))
        // })
    };
    RestApiProvider.parseJSON = function (response) {
        try {
            console.log('DATA | ' + response.data);
            return JSON.parse(response.data);
        }
        catch (ex) {
            console.log('Parse json error', ex);
            return {};
        }
    };
    RestApiProvider = RestApiProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* Platform */]])
    ], RestApiProvider);
    return RestApiProvider;
    var RestApiProvider_1;
}());

//# sourceMappingURL=rest-api.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, barcodeScanner) {
        this.navCtrl = navCtrl;
        this.barcodeScanner = barcodeScanner;
        this.qrcode = 'http://www.google.co.th';
        this.data = '';
    }
    AboutPage.prototype.scanRequest = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.data = barcodeData.text;
        }).catch(function (err) {
            _this.data = err;
        });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"C:\MobileApp\pt-mobile-master\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div text-center="">\n    <ngx-qrcode\n            [qrc-element-type]="elementType"\n            [qrc-value]="qrcode"\n            qrc-class="aclass"\n            qrc-errorCorrectionLevel="L">\n    </ngx-qrcode>\n  </div>\n  <div text-center="">\n    <ion-textarea [(ngModel)]="qrcode"></ion-textarea>\n  </div>\n\n  <div text-center="">\n    <button ion-button [block]="true" (click)="scanRequest()">Scan</button>\n  </div>\n\n  <div text-center="">\n    <h3>Result</h3>\n    <pre>{{data}}</pre>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\MobileApp\pt-mobile-master\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_api_rest_api__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage.prototype.onLogoutClick = function () {
        Object(__WEBPACK_IMPORTED_MODULE_3__providers_rest_api_rest_api__["b" /* logout */])();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__auth_auth__["a" /* AuthPage */]);
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\MobileApp\pt-mobile-master\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n\n    <button ion-button color="danger" [block]="true" (click)="onLogoutClick()">Logout</button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\MobileApp\pt-mobile-master\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__purchase_order_purchase_order__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__good_receive_good_receive__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__purchase_request_purchase_request__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, translate) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.purchasingOrders = [];
    }
    HomePage.prototype.changeLocale = function (locale) {
        this.translate.use(locale);
    };
    HomePage.prototype.showPage = function (page) {
        switch (page) {
            case 'po':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__purchase_order_purchase_order__["a" /* PurchaseOrderPage */]);
                break;
            case 'pr':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__purchase_request_purchase_request__["a" /* PurchaseRequestPage */]);
                break;
            case 'gr':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__good_receive_good_receive__["a" /* GoodReceivePage */]);
                break;
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\MobileApp\pt-mobile-master\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ \'Home\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="row mr-0 ml-0">\n    <div class="col-6 p-2" *ngFor="let i of [1,2,3,4,5,6]">\n      <div class="p-3 rounded menu-icon border border-dark bg-light" (click)="showPage(\'gr\')">\n        {{ \'GoodReceive\' | translate}}\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"C:\MobileApp\pt-mobile-master\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(448);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_qrcode2__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_barcode_scanner__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_rest_api_rest_api__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_auth_auth__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_purchase_order_purchase_order__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_good_receive_good_receive__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_purchase_request_purchase_request__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_callback__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_good_receive_detail_good_receive_detail__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_login_login__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_validation__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_common_http__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ngx_translate_http_loader__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_menu_menu__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_auth_auth__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_good_receive_detail_save_good_receive_detail_save__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_components_module__ = __webpack_require__(644);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_25__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_26__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_auth_auth__["a" /* AuthPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_purchase_order_purchase_order__["a" /* PurchaseOrderPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_purchase_request_purchase_request__["a" /* PurchaseRequestPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_good_receive_good_receive__["a" /* GoodReceivePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_good_receive_detail_good_receive_detail__["a" /* GoodReceiveDetailPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_good_receive_detail_save_good_receive_detail_save__["a" /* GoodReceiveDetailSavePage */],
                __WEBPACK_IMPORTED_MODULE_17__pipes_callback__["a" /* CallbackPipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/good-receive-detail-save/good-receive-detail-save.module#GoodReceiveDetailSavePageModule', name: 'GoodReceiveDetailSavePage', segment: 'good-receive-detail-save', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/auth/auth.module#AuthPageModule', name: 'AuthPage', segment: 'auth', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/good-receive-detail/good-receive-detail.module#GoodReceiveDetailPageModule', name: 'GoodReceiveDetailPage', segment: 'good-receive-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/good-receive/good-receive.module#GoodReceivePageModule', name: 'GoodReceivePage', segment: 'good-receive', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/purchase-order/purchase-order.module#PurchaseOrderPageModule', name: 'PurchaseOrderPage', segment: 'purchase-order', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/purchase-request/purchase-request.module#PurchaseRequestPageModule', name: 'PurchaseRequestPage', segment: 'purchase-request', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_24__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10_ngx_qrcode2__["a" /* NgxQRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_21_ng2_validation__["CustomFormsModule"],
                __WEBPACK_IMPORTED_MODULE_29__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_23__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_23__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_24__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_26__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_auth_auth__["a" /* AuthPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_purchase_order_purchase_order__["a" /* PurchaseOrderPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_purchase_request_purchase_request__["a" /* PurchaseRequestPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_good_receive_good_receive__["a" /* GoodReceivePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_good_receive_detail_good_receive_detail__["a" /* GoodReceiveDetailPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_good_receive_detail_save_good_receive_detail_save__["a" /* GoodReceiveDetailSavePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_12__providers_rest_api_rest_api__["a" /* RestApiProvider */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_12__providers_rest_api_rest_api__["a" /* RestApiProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_auth_auth__["a" /* AuthProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 216,
	"./af.js": 216,
	"./ar": 217,
	"./ar-dz": 218,
	"./ar-dz.js": 218,
	"./ar-kw": 219,
	"./ar-kw.js": 219,
	"./ar-ly": 220,
	"./ar-ly.js": 220,
	"./ar-ma": 221,
	"./ar-ma.js": 221,
	"./ar-sa": 222,
	"./ar-sa.js": 222,
	"./ar-tn": 223,
	"./ar-tn.js": 223,
	"./ar.js": 217,
	"./az": 224,
	"./az.js": 224,
	"./be": 225,
	"./be.js": 225,
	"./bg": 226,
	"./bg.js": 226,
	"./bm": 227,
	"./bm.js": 227,
	"./bn": 228,
	"./bn.js": 228,
	"./bo": 229,
	"./bo.js": 229,
	"./br": 230,
	"./br.js": 230,
	"./bs": 231,
	"./bs.js": 231,
	"./ca": 232,
	"./ca.js": 232,
	"./cs": 233,
	"./cs.js": 233,
	"./cv": 234,
	"./cv.js": 234,
	"./cy": 235,
	"./cy.js": 235,
	"./da": 236,
	"./da.js": 236,
	"./de": 237,
	"./de-at": 238,
	"./de-at.js": 238,
	"./de-ch": 239,
	"./de-ch.js": 239,
	"./de.js": 237,
	"./dv": 240,
	"./dv.js": 240,
	"./el": 241,
	"./el.js": 241,
	"./en-au": 242,
	"./en-au.js": 242,
	"./en-ca": 243,
	"./en-ca.js": 243,
	"./en-gb": 244,
	"./en-gb.js": 244,
	"./en-ie": 245,
	"./en-ie.js": 245,
	"./en-il": 246,
	"./en-il.js": 246,
	"./en-nz": 247,
	"./en-nz.js": 247,
	"./eo": 248,
	"./eo.js": 248,
	"./es": 249,
	"./es-do": 250,
	"./es-do.js": 250,
	"./es-us": 251,
	"./es-us.js": 251,
	"./es.js": 249,
	"./et": 252,
	"./et.js": 252,
	"./eu": 253,
	"./eu.js": 253,
	"./fa": 254,
	"./fa.js": 254,
	"./fi": 255,
	"./fi.js": 255,
	"./fo": 256,
	"./fo.js": 256,
	"./fr": 257,
	"./fr-ca": 258,
	"./fr-ca.js": 258,
	"./fr-ch": 259,
	"./fr-ch.js": 259,
	"./fr.js": 257,
	"./fy": 260,
	"./fy.js": 260,
	"./gd": 261,
	"./gd.js": 261,
	"./gl": 262,
	"./gl.js": 262,
	"./gom-latn": 263,
	"./gom-latn.js": 263,
	"./gu": 264,
	"./gu.js": 264,
	"./he": 265,
	"./he.js": 265,
	"./hi": 266,
	"./hi.js": 266,
	"./hr": 267,
	"./hr.js": 267,
	"./hu": 268,
	"./hu.js": 268,
	"./hy-am": 269,
	"./hy-am.js": 269,
	"./id": 270,
	"./id.js": 270,
	"./is": 271,
	"./is.js": 271,
	"./it": 272,
	"./it.js": 272,
	"./ja": 273,
	"./ja.js": 273,
	"./jv": 274,
	"./jv.js": 274,
	"./ka": 275,
	"./ka.js": 275,
	"./kk": 276,
	"./kk.js": 276,
	"./km": 277,
	"./km.js": 277,
	"./kn": 278,
	"./kn.js": 278,
	"./ko": 279,
	"./ko.js": 279,
	"./ky": 280,
	"./ky.js": 280,
	"./lb": 281,
	"./lb.js": 281,
	"./lo": 282,
	"./lo.js": 282,
	"./lt": 283,
	"./lt.js": 283,
	"./lv": 284,
	"./lv.js": 284,
	"./me": 285,
	"./me.js": 285,
	"./mi": 286,
	"./mi.js": 286,
	"./mk": 287,
	"./mk.js": 287,
	"./ml": 288,
	"./ml.js": 288,
	"./mn": 289,
	"./mn.js": 289,
	"./mr": 290,
	"./mr.js": 290,
	"./ms": 291,
	"./ms-my": 292,
	"./ms-my.js": 292,
	"./ms.js": 291,
	"./mt": 293,
	"./mt.js": 293,
	"./my": 294,
	"./my.js": 294,
	"./nb": 295,
	"./nb.js": 295,
	"./ne": 296,
	"./ne.js": 296,
	"./nl": 297,
	"./nl-be": 298,
	"./nl-be.js": 298,
	"./nl.js": 297,
	"./nn": 299,
	"./nn.js": 299,
	"./pa-in": 300,
	"./pa-in.js": 300,
	"./pl": 301,
	"./pl.js": 301,
	"./pt": 302,
	"./pt-br": 303,
	"./pt-br.js": 303,
	"./pt.js": 302,
	"./ro": 304,
	"./ro.js": 304,
	"./ru": 305,
	"./ru.js": 305,
	"./sd": 306,
	"./sd.js": 306,
	"./se": 307,
	"./se.js": 307,
	"./si": 308,
	"./si.js": 308,
	"./sk": 309,
	"./sk.js": 309,
	"./sl": 310,
	"./sl.js": 310,
	"./sq": 311,
	"./sq.js": 311,
	"./sr": 312,
	"./sr-cyrl": 313,
	"./sr-cyrl.js": 313,
	"./sr.js": 312,
	"./ss": 314,
	"./ss.js": 314,
	"./sv": 315,
	"./sv.js": 315,
	"./sw": 316,
	"./sw.js": 316,
	"./ta": 317,
	"./ta.js": 317,
	"./te": 318,
	"./te.js": 318,
	"./tet": 319,
	"./tet.js": 319,
	"./tg": 320,
	"./tg.js": 320,
	"./th": 321,
	"./th.js": 321,
	"./tl-ph": 322,
	"./tl-ph.js": 322,
	"./tlh": 323,
	"./tlh.js": 323,
	"./tr": 324,
	"./tr.js": 324,
	"./tzl": 325,
	"./tzl.js": 325,
	"./tzm": 326,
	"./tzm-latn": 327,
	"./tzm-latn.js": 327,
	"./tzm.js": 326,
	"./ug-cn": 328,
	"./ug-cn.js": 328,
	"./uk": 329,
	"./uk.js": 329,
	"./ur": 330,
	"./ur.js": 330,
	"./uz": 331,
	"./uz-latn": 332,
	"./uz-latn.js": 332,
	"./uz.js": 331,
	"./vi": 333,
	"./vi.js": 333,
	"./x-pseudo": 334,
	"./x-pseudo.js": 334,
	"./yo": 335,
	"./yo.js": 335,
	"./zh-cn": 336,
	"./zh-cn.js": 336,
	"./zh-hk": 337,
	"./zh-hk.js": 337,
	"./zh-tw": 338,
	"./zh-tw.js": 338
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 508;

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import {GoodReceiveDetailSavePage} from "../pages/good-receive-detail-save/good-receive-detail-save";
//import {GoodReceiveDetailPage} from "../pages/good-receive-detail/good-receive-detail";
//import {MenuPage} from "../pages/menu/menu";
//import {GoodReceivePage} from "../pages/good-receive/good-receive";


var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, translate) {
        //rootPage: any = GoodReceiveDetailSavePage;
        //rootPage: any = AuthPage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.defaultLang = 'en';
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang(this.defaultLang);
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use(this.defaultLang);
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\MobileApp\pt-mobile-master\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\MobileApp\pt-mobile-master\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]) === "function" && _d || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(382);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\MobileApp\pt-mobile-master\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\MobileApp\pt-mobile-master\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallbackPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CallbackPipe = /** @class */ (function () {
    function CallbackPipe() {
    }
    CallbackPipe.prototype.transform = function (items, callback) {
        if (!items || !callback) {
            return items;
        }
        return items.filter(function (item) { return callback(item); });
    };
    CallbackPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'callback',
            pure: false
        })
    ], CallbackPipe);
    return CallbackPipe;
}());

//# sourceMappingURL=callback.js.map

/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_header_app_header__ = __webpack_require__(645);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__app_header_app_header__["a" /* AppHeaderComponent */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__app_header_app_header__["a" /* AppHeaderComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the AppHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AppHeaderComponent = /** @class */ (function () {
    function AppHeaderComponent() {
        console.log('Hello AppHeaderComponent Component');
        this.text = 'Hello World';
    }
    AppHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',template:/*ion-inline-start:"C:\MobileApp\pt-mobile-master\src\components\app-header\app-header.html"*/'<!-- Generated template for the AppHeaderComponent component -->\n<div>\n  <img style="width: 100px" src="/assets/imgs/pt_logo.png" />\n</div>\n'/*ion-inline-end:"C:\MobileApp\pt-mobile-master\src\components\app-header\app-header.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], AppHeaderComponent);
    return AppHeaderComponent;
}());

//# sourceMappingURL=app-header.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_menu__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the AuthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AuthPage = /** @class */ (function () {
    function AuthPage(navCtrl, navParams, HTTP, restApi, loading) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.HTTP = HTTP;
        this.restApi = restApi;
        this.loading = loading;
    }
    AuthPage.prototype.ionViewWillEnter = function () {
        this.checkLogin();
    };
    AuthPage.prototype.checkLogin = function () {
        var _this = this;
        this.restApi.post('api/authorizations').then(function (response) {
            if (response.data && response.data.data) {
                console.log('response success');
                console.log(JSON.stringify(response.data.data));
                Object(__WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__["e" /* setUser */])(response.data);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__menu_menu__["a" /* MenuPage */]);
            }
            else {
                console.log('response error');
                console.log(JSON.stringify(response));
                Object(__WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__["b" /* logout */])();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            }
        }).catch(function (response) {
            console.log('response error');
            console.log(JSON.stringify(response));
            Object(__WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__["b" /* logout */])();
        });
    };
    AuthPage.prototype.ionViewDidLoad = function () {
    };
    AuthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-auth',template:/*ion-inline-start:"C:\MobileApp\pt-mobile-master\src\pages\auth\auth.html"*/'<!--\n  Generated template for the AuthPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding>\n  Checking Auth...\n</ion-content>\n'/*ion-inline-end:"C:\MobileApp\pt-mobile-master\src\pages\auth\auth.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__["a" /* RestApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], AuthPage);
    return AuthPage;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_http__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, authProvider, translate, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.translate = translate;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.user = {
            username: 'create',
            password: 'password'
        };
        this.language = 'en';
    }
    LoginPage.prototype.changeLocale = function (locale) {
        this.translate.use(locale);
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
        // this.http.setDataSerializer('json');
        // this.http.useBasicAuth('vrm-client', 'P@ssw0rds')
        // this.http.post('https://ptg-vrm-api.azurewebsites.net/oauth/token?grant_type=password&client_id=vrm-client&username=create&password=password',
        //     {}, {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     }).then(response => {
        //     console.log('success');
        //     console.log(JSON.stringify(response));
        // }).catch((error) => {
        //     console.log('error');
        //     console.log(JSON.stringify(error));
        // })
        // this.http.setDataSerializer('json');
        // // this.http.useBasicAuth('vrm-client', 'P@ssw0rds')
        // this.http.post('https://ptg-vrm-api.azurewebsites.net/api/goodsReceives',
        //     {
        //         start: 0,
        //         length: 0
        //     }, {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //         'Authorization': 'Bearer a4d2345a-b7f9-4a5b-bd97-d1edf5046300',
        //     }).then(response => {
        //     console.log('success');
        //     console.log(JSON.stringify(response));
        // }).catch((error) => {
        //     console.log('error');
        //     console.log(JSON.stringify(error));
        // })
    };
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        this.authProvider.login(this.user.username, this.user.password).then(function (success) {
            if (success) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__menu_menu__["a" /* MenuPage */]);
            }
            else {
                //this.navCtrl.setRoot(MenuPage);
                var alert_1 = _this.alertCtrl.create({
                    title: 'Login failed',
                    message: 'Please check your credentials',
                    buttons: ['OK']
                });
                alert_1.present();
            }
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\MobileApp\pt-mobile-master\src\pages\login\login.html"*/'<ion-content>\n\n  <div>\n    <div class="text-center mb-4">\n      <img style="width: 70%" src="/assets/imgs/pt_logo.png" />\n    </div>\n    \n	<br>\n	\n    <ion-item>\n      <ion-label floating>{{ \'Username\' | translate}}</ion-label>\n      <ion-input [(ngModel)]="user.username" type="test"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>{{ \'Password\' | translate}}</ion-label>\n      <ion-input [(ngModel)]="user.password" type="password"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>{{ \'Language\' | translate}}</ion-label>\n      <ion-select #lang [(ngModel)]="language" (ionChange)="changeLocale(lang.value)">\n        <ion-option value="en">{{ \'English\' | translate }}</ion-option>\n        <ion-option value="th">{{ \'Thai\' | translate }}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <div class="p-4">\n      <button ion-button [block]="true" (click)="loginUser()">{{ \'Login\' | translate }}</button>\n    </div>\n\n\n    <div class="p-4">\n      ติดต่อ : บริษัท พีทีจี เอ็นเนอยี จำกัด (มหาชน)<br />\n      90 อาคารซีดับเบิ้ลยู ทาวเวอร์ เอ ชั้นที่ 33 ถนนรัชดาภิเษก แขวงห้วยขวาง เขตห้วยขวาง กรุงเทพฯ 10310<br />\n      โทรศัพท์ : 0 2168 3377, 0 2168 3388<br />\n      โทรสาร : 0 2168 3379, 0 2168 3389\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\MobileApp\pt-mobile-master\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__good_receive_good_receive__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, authProvider, translate, appCtrl) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.translate = translate;
        this.appCtrl = appCtrl;
        this.pages = [];
        this.username = '';
    }
    MenuPage.prototype.ionViewWillEnter = function () {
        this.pages = [
            // {title: 'Home', page: HomePage, icon: 'home'},
            { title: 'GR', page: __WEBPACK_IMPORTED_MODULE_4__good_receive_good_receive__["a" /* GoodReceivePage */], icon: 'planet' }
        ];
        // if (this.authProvider.isAdmin()) {
        //     this.pages = [
        //         {title: 'Admin Dashboard', page: 'AdminPage', icon: 'home'},
        //         {title: 'Admin Second Page', page: 'AdminSecondPage', icon: 'planet'}
        //     ];
        //     this.openPage('AdminPage');
        // } else {
        //     this.pages = [
        //         {title: 'User Dashboard', page: 'UserPage', icon: 'home'},
        //         {title: 'User Second Page', page: 'UserSecondPage', icon: 'planet'}
        //     ];
        //     this.openPage('UserPage');
        // }
        this.username = this.authProvider.currentUser.name;
        this.openPage(__WEBPACK_IMPORTED_MODULE_4__good_receive_good_receive__["a" /* GoodReceivePage */]);
    };
    MenuPage.prototype.changeLocale = function (locale) {
        this.translate.use(locale);
    };
    MenuPage.prototype.logout = function () {
        this.authProvider.logout();
        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    MenuPage.prototype.openPage = function (page) {
        this.nav.setRoot(page);
    };
    MenuPage.prototype.ionViewCanEnter = function () {
        return this.authProvider.isLoggedIn();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MenuPage.prototype, "nav", void 0);
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-menu',template:/*ion-inline-start:"C:\MobileApp\pt-mobile-master\src\pages\menu\menu.html"*/'<ion-menu [content]="content" [persistent]="true">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>{{ \'Menu\' | translate }}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item detail-none block menuClose *ngFor="let p of pages" (click)="openPage(p.page)">\n        <ion-icon item-start [name]="p.icon"></ion-icon>\n        {{ p.title | translate }}\n      </button>\n    </ion-list>\n\n  </ion-content>\n\n  <ion-footer>\n    <ion-toolbar>\n      <div class="d-flex justify-content-between align-items-center">\n        <div class="p-3">\n          <a href="#" (click)="changeLocale(\'en\')">EN</a>\n          |\n          <a href="#" (click)="changeLocale(\'th\')">TH</a>\n        </div>\n\n        <div>\n          <button ion-button [outline]="true" (click)="logout()">\n            {{ \'Logout\' | translate}}\n          </button>\n        </div>\n      </div>\n    </ion-toolbar>\n  </ion-footer>\n\n</ion-menu>\n\n<ion-nav #content main [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\MobileApp\pt-mobile-master\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoodReceivePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__good_receive_detail_good_receive_detail__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_http__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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









var GoodReceivePage = /** @class */ (function () {
    function GoodReceivePage(navCtrl, barcodeScanner, translate, restApi, http, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.barcodeScanner = barcodeScanner;
        this.translate = translate;
        this.restApi = restApi;
        this.http = http;
        this.navParams = navParams;
        this.filterKeyword = '';
        this.goodReceives = [];
        this.filterItem = function (item) {
            return item.sapPoHeaderId.indexOf(_this.filterKeyword) !== -1;
        };
    }
    GoodReceivePage.prototype.ionViewWillEnter = function () {
        this.loadData();
    };
    GoodReceivePage.prototype.showGoodReceiveItem = function (goodReceive) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__good_receive_detail_good_receive_detail__["a" /* GoodReceiveDetailPage */], {
            data: __WEBPACK_IMPORTED_MODULE_6_lodash__["pick"](goodReceive, ['sapPoHeaderId', 'poHeaderId']),
            goodReceive: goodReceive
        });
    };
    GoodReceivePage.prototype.loadData = function () {
        var _this = this;
        this.restApi.post('api/goodsReceives', {
            start: 0,
            length: 0
        }).then(function (response) {
            // console.log(JSON.stringify(response));
            var data = response.data;
            _this.goodReceives = data.goodReceives;
            // console.log(data)
            // console.log(this.goodReceives)
        }).catch(function (error) {
            console.log('error');
            console.log(JSON.stringify(error));
        });
    };
    GoodReceivePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad goodReceivesPage');
    };
    GoodReceivePage.prototype.parseCode = function (code) {
        if (code === void 0) { code = ''; }
        code = String(code);
        if (code.length === 10) {
            return {
                sapPoHeaderId: code
            };
        }
        else if (code.length === 32) {
            return {
                sapPoHeaderId: code.substring(0, 10),
                plant: code.substr(10, 4),
                shipingDate: __WEBPACK_IMPORTED_MODULE_5_moment___default()(code.substr(14, 8), 'YYYYDDMM').format('YYYY-MM-DD'),
                customer: code.substr(22, 10),
            };
        }
        else {
            return false;
        }
    };
    GoodReceivePage.prototype.scanRequest = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.barcodeScanner.scan({
                                orientation: 'landscape',
                                showTorchButton: true,
                                showFlipCameraButton: true,
                                prompt: this.translate.instant('Scan PO ID or Shipping NO')
                            }).then(function (barcodeData) {
                                return barcodeData.text;
                            }).catch(function (err) {
                                alert('can not scan');
                                return '';
                            })];
                    case 1:
                        _a.filterKeyword = _b.sent();
                        data = this.parseCode(this.filterKeyword);
                        // if (data === false) {
                        //     return alert('invalid code');
                        // }
                        // data = {
                        //     poHeaderId: '311800000160',
                        //     sapPoHeaderId: '4800000379'
                        // }
                        // const item = await request({
                        //     method: 'POST',
                        //     url: 'api/goodsReceives/getPoItem',
                        //     data
                        // }).then((response) => {
                        //     return response.data && response.data.data;
                        // }).catch(error => {
                        //     return {}
                        // });
                        //
                        // if (_.isEmpty(item)) {
                        //     return alert('GR Item not fount');
                        // }
                        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__good_receive_detail_good_receive_detail__["a" /* GoodReceiveDetailPage */], {
                            data: data
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    GoodReceivePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-good-receive',template:/*ion-inline-start:"C:\MobileApp\pt-mobile-master\src\pages\good-receive\good-receive.html"*/'<!--\n  Generated template for the GoodReceivePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-grid>\n	  <ion-row>\n		<ion-col col-8 style="padding-left:15px;">	\n			<button ion-button menuToggle>\n			  <ion-icon name="menu"></ion-icon>\n			</button>\n		</ion-col>\n		<ion-col col-4 style="padding-right:5px;">\n			<app-header></app-header>\n		</ion-col>\n	  </ion-row>\n	</ion-grid>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div class="p-2 d-flex justify-content-between" style="height:50px;background-color:#f2f2f2">\n	<ion-grid>\n	  <ion-row>\n		<ion-col text-left style="font-size:20px;padding-left:15px;">\n		  <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n		</ion-col>\n		<ion-col text-center style="font-size:20px">\n		  {{ \'GoodReceive\' | translate}}\n		</ion-col>\n		<ion-col text-right style="font-size:20px;padding-right:15px;">\n		  <ion-icon name="refresh" (click)="loadData()"></ion-icon>\n		</ion-col>\n	  </ion-row>\n	</ion-grid>\n    <!-- <button color="light" ion-button>{{ \'Back\' | translate}}</button> -->\n    <!-- <button color="light" ion-button (click)="loadData()">{{ \'Refresh\' | translate}}</button> -->\n  </div>\n	\n  <!--	\n  <button [block]="true" icon-start ion-button color="danger" [large]="true" (click)="scanRequest()">\n    <ion-icon name="barcode"></ion-icon>\n    {{ \'Scan\' | translate }}\n  </button>\n  -->\n  \n	<div style="background-color:#f2f2f2">\n		<ion-grid>\n			<ion-row color="light">\n				<ion-col col-10 style="padding-left:15px;">\n					<ion-searchbar placeholder="{{ \'placeholder.search\' | translate }}"\n					 [(ngModel)]="filterKeyword"></ion-searchbar>\n				</ion-col>\n				<ion-col col-2 style="padding-right:15px;top:4px;">\n				<button style="height:40px;width:50px" ion-button color="danger" (click)="scanRequest()">\n					<ion-icon name="barcode"></ion-icon>\n				</button>\n				</ion-col>\n			</ion-row>\n		</ion-grid>\n	</div>\n\n	<ion-item [color]="(i%2==0)?\'\':\'light\'" *ngFor="let item of goodReceives | callback: filterItem let i= index" (click)="showGoodReceiveItem(item)">\n	\n    <div class="d-flex justify-content-between">\n      <h2>{{i}} SapPo: {{item.sapPoHeaderId}}</h2>\n      <div>{{item.statusDesc}} ({{item.statusId}})</div>\n    </div>\n    <div>\n      <small>PO ID: {{item.poHeaderId}}</small>\n    </div>\n    <h3 class="pt-3">\n      Vendor Name (ID): {{item.vendorName}} ({{item.vendorId}})\n    </h3>\n	\n	</ion-item>\n  \n</ion-content>\n'/*ion-inline-end:"C:\MobileApp\pt-mobile-master\src\pages\good-receive\good-receive.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__["a" /* RestApiProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], GoodReceivePage);
    return GoodReceivePage;
}());

//# sourceMappingURL=good-receive.js.map

/***/ })

},[430]);
//# sourceMappingURL=main.js.map