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
// Backend API style function
// Returns a url of a panda image and a random panda fact
const run = function (context, req) {
    return __awaiter(this, void 0, void 0, function* () {
        context.log(`Starting HTTP triggered function ${context.executionContext.functionName}`);
        // Use common helper functions.
        const url = yield pandaHelpers_1.getPandaImage(context.log);
        const fact = pandaHelpers_1.getPandaFact(context.log);
        // Default response status is 200
        const response = {
            body: {
                url,
                fact
            }
        };
        return response;
    });
};
exports.default = run;
//# sourceMappingURL=index.js.map