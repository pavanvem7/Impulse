(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/@ionic-native/firebase-authentication/ngx/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ionic-native/firebase-authentication/ngx/index.js ***!
  \*************************************************************************/
/*! exports provided: FirebaseAuthentication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseAuthentication", function() { return FirebaseAuthentication; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FirebaseAuthentication = /** @class */ (function (_super) {
    __extends(FirebaseAuthentication, _super);
    function FirebaseAuthentication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseAuthentication.prototype.getIdToken = function (forceRefresh) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getIdToken", { "sync": true }, arguments); };
    FirebaseAuthentication.prototype.createUserWithEmailAndPassword = function (email, password) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "createUserWithEmailAndPassword", { "sync": true }, arguments); };
    FirebaseAuthentication.prototype.sendEmailVerification = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "sendEmailVerification", { "sync": true }, arguments); };
    FirebaseAuthentication.prototype.sendPasswordResetEmail = function (email) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "sendPasswordResetEmail", { "sync": true }, arguments); };
    FirebaseAuthentication.prototype.signInWithEmailAndPassword = function (email, password) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "signInWithEmailAndPassword", { "sync": true }, arguments); };
    FirebaseAuthentication.prototype.verifyPhoneNumber = function (phoneNumber, timeout) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "verifyPhoneNumber", { "sync": true }, arguments); };
    FirebaseAuthentication.prototype.signInWithVerificationId = function (verificationId, smsCode) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "signInWithVerificationId", { "sync": true }, arguments); };
    FirebaseAuthentication.prototype.signInAnonymously = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "signInAnonymously", { "sync": true }, arguments); };
    FirebaseAuthentication.prototype.signInWithGoogle = function (idToken, accessToken) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "signInWithGoogle", { "sync": true }, arguments); };
    FirebaseAuthentication.prototype.signInWithFacebook = function (accessToken) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "signInWithFacebook", { "sync": true }, arguments); };
    FirebaseAuthentication.prototype.signInWithTwitter = function (token, secret) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "signInWithTwitter", { "sync": true }, arguments); };
    FirebaseAuthentication.prototype.onAuthStateChanged = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "onAuthStateChanged", { "observable": true, "callbackOrder": "reverse" }, arguments); };
    FirebaseAuthentication.prototype.setLanguageCode = function (languageCode) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "setLanguageCode", { "sync": true }, arguments); };
    FirebaseAuthentication.prototype.useAppLanguage = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "useAppLanguage", { "sync": true }, arguments); };
    FirebaseAuthentication.prototype.signOut = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "signOut", { "sync": true }, arguments); };
    FirebaseAuthentication.pluginName = "FirebaseAuthentication";
    FirebaseAuthentication.plugin = "cordova-plugin-firebase-authentication";
    FirebaseAuthentication.pluginRef = "cordova.plugins.firebase.auth";
    FirebaseAuthentication.repo = "https://github.com/chemerisuk/cordova-plugin-firebase-authentication";
    FirebaseAuthentication.install = "ionic cordova plugin add cordova-plugin-firebase-authentication --variable FIREBASE_AUTH_VERSION=version";
    FirebaseAuthentication.installVariables = ["FIREBASE_AUTH_VERSION"];
    FirebaseAuthentication.platforms = ["Android", "iOS"];
    FirebaseAuthentication = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], FirebaseAuthentication);
    return FirebaseAuthentication;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpcmViYXNlLWF1dGhlbnRpY2F0aW9uL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBbUNVLDBDQUFpQjs7OztJQU8zRCwyQ0FBVSxhQUFDLFlBQXFCO0lBVWhDLCtEQUE4QixhQUM1QixLQUFhLEVBQ2IsUUFBZ0I7SUFTbEIsc0RBQXFCO0lBVXJCLHVEQUFzQixhQUFDLEtBQWE7SUFVcEMsMkRBQTBCLGFBQUMsS0FBYSxFQUFFLFFBQWdCO0lBZ0IxRCxrREFBaUIsYUFBQyxXQUFtQixFQUFFLE9BQWU7SUFVdEQseURBQXdCLGFBQ3RCLGNBQXNCLEVBQ3RCLE9BQWU7SUFTakIsa0RBQWlCO0lBVWpCLGlEQUFnQixhQUFDLE9BQWUsRUFBRSxXQUFtQjtJQVNyRCxtREFBa0IsYUFBQyxXQUFtQjtJQVV0QyxrREFBaUIsYUFBQyxLQUFhLEVBQUUsTUFBYztJQVcvQyxtREFBa0I7SUFTbEIsZ0RBQWUsYUFBQyxZQUFvQjtJQVFwQywrQ0FBYztJQVFkLHdDQUFPOzs7Ozs7OztJQXRKSSxzQkFBc0I7UUFIbEMsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLHNCQUFzQjtpQ0FyQ25DO0VBcUM0QyxpQkFBaUI7U0FBaEQsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQG5hbWUgRmlyZWJhc2UgQXV0aGVudGljYXRpb25cbiAqIEBkZXNjcmlwdGlvblxuICogQ29yZG92YSBwbHVnaW4gZm9yIEZpcmViYXNlIEF1dGhlbnRpY2F0aW9uXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBGaXJlYmFzZUF1dGhlbnRpY2F0aW9uIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9maXJlYmFzZS1hdXRoZW50aWNhdGlvbi9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpcmViYXNlQXV0aGVudGljYXRpb246IEZpcmViYXNlQXV0aGVudGljYXRpb24pIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmZpcmViYXNlQXV0aGVudGljYXRpb24uY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKCd0ZXN0QGdtYWlsLmNvbScsICcxMjMnKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0ZpcmViYXNlQXV0aGVudGljYXRpb24nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1maXJlYmFzZS1hdXRoZW50aWNhdGlvbicsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5maXJlYmFzZS5hdXRoJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jaGVtZXJpc3VrL2NvcmRvdmEtcGx1Z2luLWZpcmViYXNlLWF1dGhlbnRpY2F0aW9uJyxcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1maXJlYmFzZS1hdXRoZW50aWNhdGlvbiAtLXZhcmlhYmxlIEZJUkVCQVNFX0FVVEhfVkVSU0lPTj12ZXJzaW9uJyxcbiAgaW5zdGFsbFZhcmlhYmxlczogWydGSVJFQkFTRV9BVVRIX1ZFUlNJT04nXSxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZUF1dGhlbnRpY2F0aW9uIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogUmV0dXJucyBhIEpXVCB0b2tlbiB1c2VkIHRvIGlkZW50aWZ5IHRoZSB1c2VyIHRvIGEgRmlyZWJhc2Ugc2VydmljZS5cbiAgICogQHBhcmFtIGZvcmNlUmVmcmVzaCB7Ym9vbGVhbn0gRm9yY2UgUmVmcmVzaFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgdGhlIGlkIHRva2VuXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0SWRUb2tlbihmb3JjZVJlZnJlc2g6IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmllcyB0byBjcmVhdGUgYSBuZXcgdXNlciBhY2NvdW50IHdpdGggdGhlIGdpdmVuIGVtYWlsIGFkZHJlc3MgYW5kIHBhc3N3b3JkLlxuICAgKiBAcGFyYW0gZW1haWwgRW1haWxcbiAgICogQHBhcmFtIHBhc3N3b3JkIFBhc3N3b3JkXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKFxuICAgIGVtYWlsOiBzdHJpbmcsXG4gICAgcGFzc3dvcmQ6IHN0cmluZ1xuICApOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWF0ZXMgZW1haWwgdmVyaWZpY2F0aW9uIGZvciB0aGUgY3VycmVudCB1c2VyLlxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNlbmRFbWFpbFZlcmlmaWNhdGlvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VycyB0aGUgRmlyZWJhc2UgQXV0aGVudGljYXRpb24gYmFja2VuZCB0byBzZW5kIGEgcGFzc3dvcmQtcmVzZXQgZW1haWwgdG8gdGhlIGdpdmVuIGVtYWlsIGFkZHJlc3MsXG4gICAqIHdoaWNoIG11c3QgY29ycmVzcG9uZCB0byBhbiBleGlzdGluZyB1c2VyIG9mIHlvdXIgYXBwLlxuICAgKiBAcGFyYW0gZW1haWwgRW1haWxcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzZW5kUGFzc3dvcmRSZXNldEVtYWlsKGVtYWlsOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBc3luY2hyb25vdXNseSBzaWducyBpbiB1c2luZyBhbiBlbWFpbCBhbmQgcGFzc3dvcmQuXG4gICAqIEBwYXJhbSBlbWFpbCBFbWFpbFxuICAgKiBAcGFyYW0gcGFzc3dvcmQgUGFzc3dvcmRcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIHRoZSBwaG9uZSBudW1iZXIgdmVyaWZpY2F0aW9uIHByb2Nlc3MgZm9yIHRoZSBnaXZlbiBwaG9uZSBudW1iZXIuXG4gICAqIE5PVEU6IEFuZHJvaWQgc3VwcG9ydHMgYXV0by12ZXJpZnkgYW5kIGluc3RhbnQgZGV2aWNlIHZlcmlmaWNhdGlvbi5cbiAgICogVGhlcmVmb3JlIGluIHRoYXQgY2FzZXMgaXQgZG9lc24ndCBtYWtlIHNlbnNlIHRvIGFzayBmb3Igc21zIGNvZGUuXG4gICAqIEl0J3MgcmVjb21tZW5kZWQgdG8gcmVnaXN0ZXIgb25BdXRoU3RhdGVDaGFuZ2VkIGNhbGxiYWNrIHRvIGJlIG5vdGlmaWVkIG9uIGF1dG8gc2lnbi1pbi5cbiAgICogdGltZW91dCBbbWlsbGlzZWNvbmRzXSBpcyB0aGUgbWF4aW11bSBhbW91bnQgb2YgdGltZSB5b3UgYXJlIHdpbGxpbmcgdG8gd2FpdCBmb3IgU01TIGF1dG8tcmV0cmlldmFsXG4gICAqIHRvIGJlIGNvbXBsZXRlZCBieSB0aGUgbGlicmFyeS4gTWF4aW11bSBhbGxvd2VkIHZhbHVlIGlzIDIgbWludXRlcy4gVXNlIDAgdG8gZGlzYWJsZSBTTVMtYXV0by1yZXRyaWV2YWwuXG4gICAqIElmIHlvdSBzcGVjaWZ5IGEgcG9zaXRpdmUgdmFsdWUgbGVzcyB0aGFuIDMwIHNlY29uZHMsIGxpYnJhcnkgd2lsbCBkZWZhdWx0IHRvIDMwIHNlY29uZHMuXG4gICAqIEBwYXJhbSBwaG9uZU51bWJlciBQaG9uZSBudW1iZXJcbiAgICogQHBhcmFtIHRpbWVvdXQge251bWJlcn0gVGltZW91dFxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHZlcmlmeVBob25lTnVtYmVyKHBob25lTnVtYmVyOiBzdHJpbmcsIHRpbWVvdXQ6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFzeW5jaHJvbm91c2x5IHNpZ25zIGluIHVzaW5nIHZlcmlmaWNhdGlvbklkIGFuZCA2LWRpZ2l0IFNNUyBjb2RlLlxuICAgKiBAcGFyYW0gdmVyaWZpY2F0aW9uSWQgVmVyaWZpY2F0aW9uIElEXG4gICAqIEBwYXJhbSBzbXNDb2RlIFNNUyBjb2RlXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2lnbkluV2l0aFZlcmlmaWNhdGlvbklkKFxuICAgIHZlcmlmaWNhdGlvbklkOiBzdHJpbmcsXG4gICAgc21zQ29kZTogbnVtYmVyXG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbmQgdXNlIHRlbXBvcmFyeSBhbm9ueW1vdXMgYWNjb3VudCB0byBhdXRoZW50aWNhdGUgd2l0aCBGaXJlYmFzZS5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzaWduSW5Bbm9ueW1vdXNseSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VzIEdvb2dsZSdzIGlkVG9rZW4gYW5kIGFjY2Vzc1Rva2VuIHRvIHNpZ24taW4gaW50byBmaXJlYmFzZSBhY2NvdW50LiBJbiBvcmRlciB0byByZXRyaWV2ZSB0aG9zZSB0b2tlbnMgZm9sbG93IGluc3RydWN0aW9ucyBmb3IgQW5kcm9pZCBhbmQgaU9TXG4gICAqIEBwYXJhbSBpZFRva2VuIElEIFRva2VuXG4gICAqIEBwYXJhbSBhY2Nlc3NUb2tlbiBBY2Nlc3MgVG9rZW5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzaWduSW5XaXRoR29vZ2xlKGlkVG9rZW46IHN0cmluZywgYWNjZXNzVG9rZW46IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZXMgRmFjZWJvb2sncyBhY2Nlc3NUb2tlbiB0byBzaWduLWluIGludG8gZmlyZWJhc2UgYWNjb3VudC4gSW4gb3JkZXIgdG8gcmV0cmlldmUgdGhvc2UgdG9rZW5zIGZvbGxvdyBpbnN0cnVjdGlvbnMgZm9yIEFuZHJvaWQgYW5kIGlPUy5cbiAgICogQHBhcmFtIGFjY2Vzc1Rva2VuIEFjY2VzcyBUb2tlblxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNpZ25JbldpdGhGYWNlYm9vayhhY2Nlc3NUb2tlbjogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVXNlcyBUd2l0dGVyJ3MgdG9rZW4gYW5kIHNlY3JldCB0byBzaWduLWluIGludG8gZmlyZWJhc2UgYWNjb3VudC4gSW4gb3JkZXIgdG8gcmV0cmlldmUgdGhvc2UgdG9rZW5zIGZvbGxvdyBpbnN0cnVjdGlvbnMgZm9yIEFuZHJvaWQgYW5kIGlPUy5cbiAgICogQHBhcmFtIHRva2VuIFRva2VuXG4gICAqIEBwYXJhbSBzZWNyZXQgU2VjcmV0XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2lnbkluV2l0aFR3aXR0ZXIodG9rZW46IHN0cmluZywgc2VjcmV0OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBibG9jayBhcyBhbiBhdXRoIHN0YXRlIGRpZCBjaGFuZ2UgbGlzdGVuZXIuIFRvIGJlIGludm9rZWQgd2hlbjpcbiAgICogICAgLSBUaGUgYmxvY2sgaXMgcmVnaXN0ZXJlZCBhcyBhIGxpc3RlbmVyLFxuICAgKiAgICAtIEEgdXNlciB3aXRoIGEgZGlmZmVyZW50IFVJRCBmcm9tIHRoZSBjdXJyZW50IHVzZXIgaGFzIHNpZ25lZCBpbiwgb3JcbiAgICogICAgLSBUaGUgY3VycmVudCB1c2VyIGhhcyBzaWduZWQgb3V0LlxuICAgKi9cbiAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlLCBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgb25BdXRoU3RhdGVDaGFuZ2VkKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCdzIHRoZSBjdXJyZW50IHVzZXIgbGFuZ3VhZ2UgY29kZS4gVGhlIHN0cmluZyB1c2VkIHRvIHNldCB0aGlzIHByb3BlcnR5IG11c3QgYmUgYSBsYW5ndWFnZSBjb2RlIHRoYXQgZm9sbG93cyBCQ1AgNDcuXG4gICAqIEBwYXJhbSBsYW5ndWFnZUNvZGUgTGFuZ3VhZ2UgQ29kZVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNldExhbmd1YWdlQ29kZShsYW5ndWFnZUNvZGU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgbGFuZ3VhZ2VDb2RlIHRvIHRoZSBhcHDigJlzIGN1cnJlbnQgbGFuZ3VhZ2UuXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgdXNlQXBwTGFuZ3VhZ2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2lnbnMgb3V0IHRoZSBjdXJyZW50IHVzZXIgYW5kIGNsZWFycyBpdCBmcm9tIHRoZSBkaXNrIGNhY2hlLlxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNpZ25PdXQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-content padding>\n\n  <ion-item class=\"logindetails\"> \n    <ion-label position=\"floating\">Email</ion-label>\n    <ion-input type=\"text\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Password</ion-label>\n    <ion-input type=\"password\"></ion-input>\n  </ion-item>\n  \n  <ion-row class=\"loginbtn\">\n    <ion-col></ion-col>\n    <ion-col>\n      <ion-button round id=\"logbtn\"> Login </ion-button>\n    </ion-col>\n    <ion-col></ion-col>\n  </ion-row>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logindetails {\n  margin-top: 20%; }\n\n.loginbtn {\n  margin-top: 10%; }\n\n.logbtn {\n  background-color: blue;\n  width: 20%; }\n\n.logo {\n  width: 50%;\n  margin-left: 25%;\n  margin-top: 10%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXZhbnZlbXVsYS9Qcm9qZWN0cy9IYWNrYXRob24vSW1wdWxzZS9zcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksc0JBQXNCO0VBQ3RCLFVBQVUsRUFBQTs7QUFHZDtFQUNJLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luZGV0YWlscyB7XG4gICAgbWFyZ2luLXRvcDogMjAlO1xufVxuXG4ubG9naW5idG4ge1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbn1cblxuLmxvZ2J0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgICB3aWR0aDogMjAlO1xufVxuXG4ubG9nbyB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/firebase-authentication/ngx */ "./node_modules/@ionic-native/firebase-authentication/ngx/index.js");



var LoginPage = /** @class */ (function () {
    function LoginPage(FBAuth) {
        this.FBAuth = FBAuth;
        this.FBAuth.signInWithEmailAndPassword('pavanvemula7@gmail.com', 'pavan1425')
            .then(function (res) { return console.log(res); })
            .catch(function (error) { return console.error(error); });
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_2__["FirebaseAuthentication"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map