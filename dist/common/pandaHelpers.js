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
const randomPuppy = require("random-puppy");
const randomFact = require("panda-facts");
const getPandaImage = function (log) {
    return __awaiter(this, void 0, void 0, function* () {
        log("Getting panda image");
        try {
            const url = yield randomPuppy('panda');
            log(`Returning url "${url}"`);
            return url;
        }
        catch (err) {
            log.error("Error while getting panda image url.", err);
        }
    });
};
exports.getPandaImage = getPandaImage;
const getPandaFact = function (log) {
    log("Getting panda fact");
    try {
        const fact = randomFact.random();
        log(`Returning fact "${fact}`);
        return fact;
    }
    catch (err) {
        log.error("Error while getting panda fact.", err);
    }
};
exports.getPandaFact = getPandaFact;
//# sourceMappingURL=pandaHelpers.js.map