"use strict";
(() => {
var exports = {};
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 730:
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2Fcontact_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fcontact_js_middlewareConfigBase64_e30_3D_),
  routeModule: () => (/* binding */ routeModule)
});

// NAMESPACE OBJECT: ./pages/api/contact.js
var contact_namespaceObject = {};
__webpack_require__.r(contact_namespaceObject);
__webpack_require__.d(contact_namespaceObject, {
  "default": () => (handler)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages-api/module.js
var pages_api_module = __webpack_require__(6429);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(7153);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7305);
;// CONCATENATED MODULE: external "nodemailer"
const external_nodemailer_namespaceObject = require("nodemailer");
var external_nodemailer_default = /*#__PURE__*/__webpack_require__.n(external_nodemailer_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/contact.js

async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            message: "Method not allowed"
        });
    }
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({
            message: "Missing required fields"
        });
    }
    const transporter = external_nodemailer_default().createTransport({
        host: "smtp-relay.brevo.com",
        port: 587,
        auth: {
            user: process.env.BREVO_SMTP_USER,
            pass: process.env.BREVO_SMTP_PASS
        }
    });
    const mailOptions = {
        from: `"Navpreet Singh" <navpreetsingh@iammanpreetsingh.com>`,
        to: "navpreets425@gmail.com",
        replyTo: email,
        subject: "Important - Portfolio Submission Form Received",
        text: `You received a submission form from your website:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    };
    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({
            message: "Message sent successfully"
        });
    } catch (error) {
        console.error("Email send error:", error);
        return res.status(500).json({
            message: "Failed to send email",
            error
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fcontact&preferredRegion=&absolutePagePath=private-next-pages%2Fapi%2Fcontact.js&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = pages_api_module.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_API_page_2Fapi_2Fcontact_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fcontact_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(contact_namespaceObject, "default"));
// Re-export config.
const config = (0,helpers/* hoist */.l)(contact_namespaceObject, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES_API,
        page: "/api/contact",
        pathname: "/api/contact",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: contact_namespaceObject
});

//# sourceMappingURL=pages-api.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [172], () => (__webpack_exec__(4574)));
module.exports = __webpack_exports__;

})();