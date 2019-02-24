import { Logger } from "@azure/functions"
import * as randomPuppy from "random-puppy"
import * as randomFact from "panda-facts"

const getPandaImage = async function(log: Logger): Promise<string> {
    log("Getting panda image");
    try {
        const url = await randomPuppy('panda');
        log(`Returning url "${url}"`);
        return url;
    } catch(err) {
        log.error("Error while getting panda image url.", err);
    }
}

const getPandaFact = function(log: Logger): string {
    log("Getting panda fact");
    try {
        const fact = randomFact.random();
        log(`Returning fact "${fact}`);
        return fact;
    } catch(err) {
        log.error("Error while getting panda fact.", err);
    }
}

export { getPandaFact, getPandaImage }
