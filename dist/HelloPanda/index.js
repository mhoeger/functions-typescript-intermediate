"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pandaHelpers_1 = require("../common/pandaHelpers");
// This function could easily be repurposed into two separate functions for a backend
// API to fetch a panda image url and a panda fact.
const run = function (context, req) {
    return __awaiter(this, void 0, void 0, function* () {
        // Use common helper functions.
        // (Note: any function in the function app can import these methods) 
        const url = yield pandaHelpers_1.getPandaImage(context.log);
        const fact = pandaHelpers_1.getPandaFact(context.log);
        // Extremely simple content
        return {
            status: 200,
            headers: {
                "content-type": "text/html"
            },
            body: formatContent(url, fact)
        };
    });
};
function formatContent(url, fact) {
    return `<center>
                <img height="80%" src="${url}"/>
                <h3>${fact}</h3>
            </center>`;
}
exports.default = run;
//# sourceMappingURL=index.js.map