(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _layout_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/main/main.component */ "./src/app/layout/main/main.component.ts");





var routes = [
    { path: '', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["Login"] },
    { path: 'chat', component: _layout_main_main_component__WEBPACK_IMPORTED_MODULE_4__["Main"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared-services/api.service */ "./src/app/shared-services/api.service.ts");
/* harmony import */ var _components_people_list_people_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/people-list/people-list.component */ "./src/app/components/people-list/people-list.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _materialUI_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./materialUI.module */ "./src/app/materialUI.module.ts");
/* harmony import */ var _shared_services_chat_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared-services/chat.service */ "./src/app/shared-services/chat.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/chat-list/chat-list.component */ "./src/app/components/chat-list/chat-list.component.ts");
/* harmony import */ var _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layout/sidebar/sidebar.component */ "./src/app/layout/sidebar/sidebar.component.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared-services/user.service */ "./src/app/shared-services/user.service.ts");
/* harmony import */ var _components_chat_area_chat_area_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/chat-area/chat-area.component */ "./src/app/components/chat-area/chat-area.component.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _components_message_area_message_area_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/message-area/message-area.component */ "./src/app/components/message-area/message-area.component.ts");
/* harmony import */ var _shared_services_socket_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared-services/socket.service */ "./src/app/shared-services/socket.service.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _layout_main_main_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./layout/main/main.component */ "./src/app/layout/main/main.component.ts");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./layout/header/header.component */ "./src/app/layout/header/header.component.ts");






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _components_people_list_people_list_component__WEBPACK_IMPORTED_MODULE_7__["PeopleList"],
                _components_chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_12__["ChatList"],
                _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["Sidebar"],
                _components_chat_area_chat_area_component__WEBPACK_IMPORTED_MODULE_15__["ChatArea"],
                _components_message_area_message_area_component__WEBPACK_IMPORTED_MODULE_17__["MessageArea"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_19__["Login"],
                _layout_header_header_component__WEBPACK_IMPORTED_MODULE_21__["Header"],
                _layout_main_main_component__WEBPACK_IMPORTED_MODULE_20__["Main"],
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _materialUI_module__WEBPACK_IMPORTED_MODULE_9__["MaterialUIModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]
            ],
            providers: [_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__["APIService"], _shared_services_chat_service__WEBPACK_IMPORTED_MODULE_10__["ChatService"], _shared_services_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"], _shared_services_socket_service__WEBPACK_IMPORTED_MODULE_18__["SocketService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/chat-area/chat-area.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/chat-area/chat-area.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\" *ngIf=\"!loading\" style=\"height:90%;overflow-y:scroll;\">\n    <mat-toolbar color=\"primary\" style=\"position: absolute;z-index: 1000;\">\n        <mat-toolbar-row>\n            <img style=\" border-radius: 50%;height:50px;width:50px;\"\n                src=\"{{ partner.picture ?  partner.picture : '/assets/img/common/useravatar.png'}}\">\n            <div style=\"display: flex;flex-direction: column;margin-left:10px;\">\n                <span class=\"capitalize\" style=\"height:20px;\">{{partner.name}}</span>\n                <small style=\"height:20px;\">online</small>\n            </div>\n        </mat-toolbar-row>\n    </mat-toolbar>\n    <div style=\"margin-top:80px;\">\n        <div *ngFor=\"let message of messages\">\n            <div style=\"display: flex;\" [style.flex-direction]=\"!isMessageMine(message) ? 'row' : 'row-reverse' \">\n                <div class=\"talk-bubble tri-right\" [ngClass]=\"{ \n                'talk-bubble-partner left-top': !isMessageMine(message),\n                'talk-bubble-me btm-right': isMessageMine(message)}\">\n                    <div class=\"talktext\">\n                        <p> {{message.message}}</p>\n                        <div style=\"text-align: right;\">\n                            <small> {{formatDate(message.createdAt)}}</small>&nbsp;\n                            <small *ngIf=\"message.readBy.length == 0\">&#x2714;</small>\n                            <small *ngIf=\"message.readBy.length > 0\">&#x2714;&#x2714;</small>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/chat-area/chat-area.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/chat-area/chat-area.component.ts ***!
  \*************************************************************/
/*! exports provided: ChatArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatArea", function() { return ChatArea; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared-services/api.service */ "./src/app/shared-services/api.service.ts");
/* harmony import */ var src_app_shared_services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared-services/chat.service */ "./src/app/shared-services/chat.service.ts");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared-services/user.service */ "./src/app/shared-services/user.service.ts");





var ChatArea = /** @class */ (function () {
    function ChatArea(api, chatService, userService) {
        this.api = api;
        this.chatService = chatService;
        this.userService = userService;
        this.loading = true;
        this.messages = [];
    }
    ChatArea.prototype.ngOnInit = function () {
        var _this = this;
        this.me = this.userService.me;
        this.chatService.currentChat.subscribe(function (chat) {
            _this.loading = true;
            if (chat) {
                _this.partner = chat.members.find(function (member) { return member._id != _this.me._id; });
                _this.chatService.messagesOfCurrentChat.subscribe(function (messages) {
                    _this.messages = messages;
                    console.log("chat area called", messages);
                    _this.loading = false;
                });
            }
        });
    };
    ChatArea.prototype.ngAfterViewChecked = function () {
        try {
            this.container.nativeElement.scrollIntoView();
        }
        catch (err) { }
    };
    ChatArea.prototype.isMessageMine = function (message) {
        return message.sender == this.me._id;
    };
    ChatArea.prototype.formatDate = function (date) {
        return new Date(date).toLocaleTimeString();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('container'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ChatArea.prototype, "container", void 0);
    ChatArea = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-area',
            template: __webpack_require__(/*! ./chat-area.component.html */ "./src/app/components/chat-area/chat-area.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"], src_app_shared_services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"], src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], ChatArea);
    return ChatArea;
}());



/***/ }),

/***/ "./src/app/components/chat-list/chat-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/chat-list/chat-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list *ngIf=\"chats && chats.length>0\">\n    <mat-list-item *ngFor=\"let chat of chats\" (click)=\"onChatListItemClick(chat)\">\n        <img matListAvatar\n            src=\"{{ chat.partner.picture ?  chat.partner.picture : '/assets/img/common/useravatar.png'}}\">\n        <h3 matLine> {{ chat.partner.name}} </h3>\n        <p matLine>\n            <span>Online</span>\n        </p>\n    </mat-list-item>\n</mat-nav-list>\n\n\n<div *ngIf=\"chats && chats.length==0\">\n    No chats yet. You can start new chat with users from 'People' tab.\n</div>"

/***/ }),

/***/ "./src/app/components/chat-list/chat-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/chat-list/chat-list.component.ts ***!
  \*************************************************************/
/*! exports provided: ChatList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatList", function() { return ChatList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared-services/api.service */ "./src/app/shared-services/api.service.ts");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared-services/user.service */ "./src/app/shared-services/user.service.ts");
/* harmony import */ var src_app_shared_services_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared-services/chat.service */ "./src/app/shared-services/chat.service.ts");





var ChatList = /** @class */ (function () {
    function ChatList(api, userService, chatService) {
        this.api = api;
        this.userService = userService;
        this.chatService = chatService;
    }
    ChatList.prototype.ngOnInit = function () {
        var _this = this;
        var me = this.userService.me;
        this.chatService.chats.subscribe(function (chats) {
            _this.chats = chats.map(function (chat) {
                var partner = chat.members.find(function (member) { return member._id !== me._id; });
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, chat, { partner: partner });
            });
            console.log(_this.chats);
        });
    };
    ChatList.prototype.onChatListItemClick = function (chat) {
        console.log(chat);
        this.chatService.setChat(chat);
    };
    ChatList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-list',
            template: __webpack_require__(/*! ./chat-list.component.html */ "./src/app/components/chat-list/chat-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"], src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], src_app_shared_services_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]])
    ], ChatList);
    return ChatList;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n    .loginContainer {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-direction: column;\n        margin-top:20%;\n    }\n    h1{\n        text-align: center;\n        font-size: 40px;\n    }\n</style>\n<div class=\"loginContainer\">\n    <mat-card>\n        <h1>G Chat</h1>\n        <a mat-raised-button color=\"primary\" href=\"http://localhost:3010/auth/google\">Sign up / Sign in using Google</a>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared-services/api.service */ "./src/app/shared-services/api.service.ts");



var Login = /** @class */ (function () {
    function Login(api) {
        this.api = api;
        this.loading = true;
    }
    Login.prototype.ngOnInit = function () {
    };
    Login.prototype.sendMessage = function () {
    };
    Login = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]])
    ], Login);
    return Login;
}());



/***/ }),

/***/ "./src/app/components/message-area/message-area.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/message-area/message-area.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width:100%;height:100%;display: flex;align-items: center;\" *ngIf=\"chat\">\n    <textarea matInput [(ngModel)]=\"message\" style=\"width:90%;height:90%;\"></textarea>\n    <div style=\"padding-left:15px\">\n        <button mat-fab color=\"primary\" (click)=\"sendMessage()\">Send</button>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/message-area/message-area.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/message-area/message-area.component.ts ***!
  \*******************************************************************/
/*! exports provided: MessageArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageArea", function() { return MessageArea; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared-services/api.service */ "./src/app/shared-services/api.service.ts");
/* harmony import */ var src_app_shared_services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared-services/chat.service */ "./src/app/shared-services/chat.service.ts");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared-services/user.service */ "./src/app/shared-services/user.service.ts");





var MessageArea = /** @class */ (function () {
    function MessageArea(api, chatService, userService) {
        this.api = api;
        this.chatService = chatService;
        this.userService = userService;
        this.loading = true;
        this.message = "";
    }
    MessageArea.prototype.ngOnInit = function () {
        var _this = this;
        this.chatService.currentChat.subscribe(function (chat) {
            _this.chat = chat;
        });
    };
    MessageArea.prototype.sendMessage = function () {
        var _this = this;
        this.chatService.currentChat.subscribe(function (chat) {
            _this.api.sendMessage(_this.message, chat._id).subscribe(function (response) {
                _this.message = "";
            });
        });
    };
    MessageArea = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message-area',
            template: __webpack_require__(/*! ./message-area.component.html */ "./src/app/components/message-area/message-area.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"], src_app_shared_services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"], src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], MessageArea);
    return MessageArea;
}());



/***/ }),

/***/ "./src/app/components/people-list/people-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/people-list/people-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-nav-list *ngIf=\"people && people.length>0\">\n    <mat-list-item *ngFor=\"let user of people\" (click)=\"onPeopleListItemClick(user)\">\n        <img matListAvatar src=\"{{ user.picture ? user.picture : '/assets/img/common/useravatar.png'}}\">\n        <h3 matLine> {{user.name}} </h3>\n        <p matLine>\n            <span>Online</span>\n        </p>\n    </mat-list-item>\n</mat-nav-list>\n\n<div *ngIf=\"people && people.length==0\">\n    No people yet.\n</div>"

/***/ }),

/***/ "./src/app/components/people-list/people-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/people-list/people-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: PeopleList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleList", function() { return PeopleList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared-services/api.service */ "./src/app/shared-services/api.service.ts");
/* harmony import */ var src_app_shared_services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared-services/chat.service */ "./src/app/shared-services/chat.service.ts");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared-services/user.service */ "./src/app/shared-services/user.service.ts");





var PeopleList = /** @class */ (function () {
    function PeopleList(api, chatService, userService) {
        this.api = api;
        this.chatService = chatService;
        this.userService = userService;
    }
    PeopleList.prototype.ngOnInit = function () {
        var _this = this;
        var me = this.userService.me;
        this.chatService.people.subscribe(function (people) {
            _this.people = people;
        });
    };
    PeopleList.prototype.onPeopleListItemClick = function (user) {
        var _this = this;
        this.api.getChat(user._id).subscribe(function (response) {
            var chat = response.data;
            _this.chatService.setChat(chat);
        });
    };
    PeopleList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-people-list',
            template: __webpack_require__(/*! ./people-list.component.html */ "./src/app/components/people-list/people-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"], src_app_shared_services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"], src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], PeopleList);
    return PeopleList;
}());



/***/ }),

/***/ "./src/app/layout/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n.spacer {\n    flex: 1 1 auto;\n  }\n</style>\n<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <span>G Chat</span>\n    <span class=\"spacer\"></span>\n    <button mat-button  (click)=\"logout()\">Logout</button>\n  </mat-toolbar-row>\n</mat-toolbar><br>"

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared-services/api.service */ "./src/app/shared-services/api.service.ts");




var Header = /** @class */ (function () {
    function Header(api, router) {
        this.api = api;
        this.router = router;
    }
    Header.prototype.ngOnInit = function () {
    };
    Header.prototype.logout = function () {
        var _this = this;
        this.api.logout().subscribe(function (data) {
            _this.router.navigateByUrl('/');
        }, function (e) {
            _this.router.navigateByUrl('/');
        });
    };
    Header = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/header/header.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Header);
    return Header;
}());



/***/ }),

/***/ "./src/app/layout/main/main.component.html":
/*!*************************************************!*\
  !*** ./src/app/layout/main/main.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n        .container {\n          width: 1200px;\n          height: 800px;\n          border: 1px solid #a3a3a3;\n          margin: auto;\n        \n        }\n      </style>\n<div *ngIf=\"!loading\">\n    <app-header></app-header>\n    <mat-drawer-container class=\"container\">\n        <mat-drawer mode=\"side\" opened>\n            <app-sidebar> </app-sidebar>\n        </mat-drawer>\n        <mat-drawer-content>\n            <div style=\"height:100%;\">\n                <app-chat-area></app-chat-area>\n            </div>\n            <div style=\"height:10%;position: absolute;bottom: 0;right:0;left:0;\">\n                <app-message-area></app-message-area>\n            </div>\n        </mat-drawer-content>\n    </mat-drawer-container>\n</div>"

/***/ }),

/***/ "./src/app/layout/main/main.component.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/main/main.component.ts ***!
  \***********************************************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared-services/chat.service */ "./src/app/shared-services/chat.service.ts");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared-services/user.service */ "./src/app/shared-services/user.service.ts");
/* harmony import */ var src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared-services/socket.service */ "./src/app/shared-services/socket.service.ts");





var Main = /** @class */ (function () {
    function Main(chatService, userService, socketService) {
        this.chatService = chatService;
        this.userService = userService;
        this.socketService = socketService;
        this.loading = true;
    }
    Main.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.getMe()];
                    case 1:
                        _a.sent();
                        this.socketService.initSocket();
                        return [4 /*yield*/, this.chatService.init()];
                    case 2:
                        _a.sent();
                        this.loading = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    Main = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/layout/main/main.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"], src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]])
    ], Main);
    return Main;
}());



/***/ }),

/***/ "./src/app/layout/sidebar/sidebar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div >\n    <mat-tab-group>\n        <mat-tab label=\"Chats\">\n            <app-chat-list></app-chat-list>\n        </mat-tab>\n        <mat-tab label=\"People\">\n            <app-people-list></app-people-list>\n        </mat-tab>\n    </mat-tab-group>\n</div>"

/***/ }),

/***/ "./src/app/layout/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: Sidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return Sidebar; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Sidebar = /** @class */ (function () {
    function Sidebar() {
    }
    Sidebar.prototype.ngOnInit = function () {
    };
    Sidebar.prototype.onChatListItemClick = function (user) {
    };
    Sidebar = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/layout/sidebar/sidebar.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Sidebar);
    return Sidebar;
}());



/***/ }),

/***/ "./src/app/materialUI.module.ts":
/*!**************************************!*\
  !*** ./src/app/materialUI.module.ts ***!
  \**************************************/
/*! exports provided: MaterialUIModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialUIModule", function() { return MaterialUIModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");









var MaterialUIModule = /** @class */ (function () {
    function MaterialUIModule() {
    }
    MaterialUIModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"]]
        })
    ], MaterialUIModule);
    return MaterialUIModule;
}());



/***/ }),

/***/ "./src/app/shared-services/api.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared-services/api.service.ts ***!
  \************************************************/
/*! exports provided: APIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIService", function() { return APIService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var APIService = /** @class */ (function () {
    function APIService(http) {
        var _this = this;
        this.http = http;
        this.getMe = function () {
            return _this.get("/user/me");
        };
        this.getAllUsers = function () {
            return _this.get("/users");
        };
        this.getChat = function (partnerId) {
            return _this.post("/chat", { partnerId: partnerId });
        };
        this.getMyChats = function () {
            return _this.get("/chats");
        };
        this.getMessagesOfChat = function (chatId) {
            return _this.post("/message", { chatId: chatId });
        };
        this.sendMessage = function (message, chatId) {
            return _this.post("/message/send", { message: message, chatId: chatId });
        };
        this.seenMessage = function (messageId) {
            return _this.put("/message/seen", { messageId: messageId });
        };
        this.logout = function () {
            return _this.get("/logout");
        };
        /* Common Error Handling for all Api Calls*/
        this.handleError = function (error) {
            console.log(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
        };
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.headers.append('Content-Type', 'application/json');
        this.httpArgs = {
            headers: this.headers,
            withCredentials: true
        };
    }
    APIService.prototype.get = function (path) {
        return this.http.get(this.baseUrl + path, this.httpArgs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    APIService.prototype.post = function (path, body) {
        return this.http.post(this.baseUrl + path, body, this.httpArgs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    APIService.prototype.put = function (path, body) {
        return this.http.put(this.baseUrl + path, body, this.httpArgs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    APIService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], APIService);
    return APIService;
}());



/***/ }),

/***/ "./src/app/shared-services/chat.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared-services/chat.service.ts ***!
  \*************************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/shared-services/api.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/shared-services/user.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./socket.service */ "./src/app/shared-services/socket.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







var ChatService = /** @class */ (function () {
    function ChatService(api, userService, socketService, snackBar) {
        this.api = api;
        this.userService = userService;
        this.socketService = socketService;
        this.snackBar = snackBar;
        this.currentChat = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.messagesOfCurrentChat = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.people = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.chats = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.me = userService.me;
        this.initListenForMessage();
        this.initListenForChat();
        this.initListenForPeople();
        this.initListenForMessageUpdate();
    }
    ChatService.prototype.setChat = function (chat) {
        var _this = this;
        this.currentChat.next(chat);
        this.api.getMessagesOfChat(chat._id).subscribe(function (response) {
            console.log(response);
            _this.messagesOfCurrentChat.next(response.data);
        });
    };
    ChatService.prototype.initListenForMessage = function () {
        var _this = this;
        this.socketService.incomingMessage.subscribe(function (message) {
            var currentChat = _this.currentChat.getValue();
            if (!currentChat) {
                if (message)
                    _this.showAlert("You got a new message" + message);
                return;
            }
            if (currentChat._id == message.chat) {
                _this.messagesOfCurrentChat.next(_this.messagesOfCurrentChat.getValue().concat([message]));
                if (message.sender != _this.userService.me._id) {
                    _this.api.seenMessage(message._id).subscribe(function (response) {
                    });
                }
            }
        });
    };
    ChatService.prototype.initListenForMessageUpdate = function () {
        var _this = this;
        this.socketService.updateMessage.subscribe(function (message) {
            var currentChat = _this.currentChat.getValue();
            if (!currentChat)
                return;
            if (currentChat._id == message.chat) {
                var msgs = _this.messagesOfCurrentChat.getValue().slice();
                var msgIdx = msgs.findIndex(function (m) { return m._id == message._id; });
                msgs[msgIdx] = JSON.parse(JSON.stringify(message));
                _this.messagesOfCurrentChat.next(msgs.slice());
            }
        });
    };
    ChatService.prototype.initListenForChat = function () {
        var _this = this;
        this.socketService.incomingChat.subscribe(function (chat) {
            _this.showAlert("You got a new chat request. Check chats tab");
            _this.chats.next(_this.chats.getValue().concat([chat]));
        });
    };
    ChatService.prototype.initListenForPeople = function () {
        var _this = this;
        this.socketService.incomingPeople.subscribe(function (user) {
            var peopleStored = _this.people.getValue();
            var userExists = peopleStored.find(function (p) { return p._id == user._id; });
            if (!userExists) {
                _this.people.next(_this.people.getValue().concat([user]));
                _this.showAlert("New User Joined G Chat. ");
            }
        });
    };
    ChatService.prototype.init = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var peopleResponse, chatResponse;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.getAllUsers().toPromise()];
                    case 1:
                        peopleResponse = _a.sent();
                        this.people.next(this.filterMeFromPeople(peopleResponse.data));
                        return [4 /*yield*/, this.api.getMyChats().toPromise()];
                    case 2:
                        chatResponse = _a.sent();
                        this.chats.next(chatResponse.data.chats);
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatService.prototype.filterMeFromPeople = function (people) {
        var _this = this;
        return people.filter(function (user) { return user._id != _this.userService.me._id; });
    };
    ChatService.prototype.showAlert = function (message) {
        this.snackBar.open(message, "OK", {
            duration: 2000,
        });
    };
    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"], _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/shared-services/socket.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared-services/socket.service.ts ***!
  \***************************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/shared-services/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






var SocketService = /** @class */ (function () {
    function SocketService(userService) {
        this.userService = userService;
        this.incomingMessage = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.incomingChat = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.incomingPeople = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.updateMessage = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.baseSockerUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].socketUrl;
    }
    SocketService.prototype.initSocket = function () {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__["connect"](this.baseSockerUrl, { query: "userId=" + this.userService.me._id });
        this.initOnMessage();
        this.initOnChat();
        this.initOnPeople();
    };
    SocketService.prototype.send = function (message) {
        this.socket.emit('message', message);
    };
    SocketService.prototype.initOnMessage = function () {
        var _this = this;
        this.socket.on('message', function (data) {
            _this.incomingMessage.next(data);
        });
        this.socket.on('messageupdate', function (data) {
            _this.updateMessage.next(data);
        });
    };
    SocketService.prototype.initOnChat = function () {
        var _this = this;
        this.socket.on('chat', function (data) {
            _this.incomingChat.next(data);
        });
    };
    SocketService.prototype.initOnPeople = function () {
        var _this = this;
        this.socket.on('people', function (data) {
            _this.incomingPeople.next(data);
        });
    };
    SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/shared-services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared-services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/shared-services/api.service.ts");



var UserService = /** @class */ (function () {
    function UserService(api) {
        this.api = api;
    }
    UserService.prototype.getMe = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.api.getMe().toPromise()];
                    case 1:
                        response = _a.sent();
                        this.me = response.data;
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log("Unable to fetch your details.");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: "http://localhost:3010",
    socketUrl: "http://localhost:3020"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/george/gma/projects/chatapp-frontend/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map