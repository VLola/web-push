"use strict";
(() => {
var exports = {};
exports.id = 313;
exports.ids = [313];
exports.modules = {

/***/ 927:
/***/ ((module) => {

module.exports = require("web-push");

/***/ }),

/***/ 72:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const webPush = __webpack_require__(927);
webPush.setVapidDetails(`mailto:${process.env.WEB_PUSH_EMAIL}`, "BAwMFwBVpWNxSWLK636J4MUAtWTmXzXfoerCJoDbn8JpjxU8vBuzXxjtCi2lxblAAdkKBbNwLkyE_glzr_H554U", process.env.WEB_PUSH_PRIVATE_KEY);
const Notification = (req, res)=>{
    if (req.method == "POST") {
        const { subscription  } = req.body;
        webPush.sendNotification(subscription, JSON.stringify({
            title: "Hello Web Push",
            message: "Your web push notification is here!"
        })).then((response)=>{
            res.writeHead(response.statusCode, response.headers).end(response.body);
        }).catch((err)=>{
            if ("statusCode" in err) {
                res.writeHead(err.statusCode, err.headers).end(err.body);
            } else {
                console.error(err);
                res.statusCode = 500;
                res.end();
            }
        });
    } else {
        res.statusCode = 405;
        res.end();
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Notification);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(72));
module.exports = __webpack_exports__;

})();