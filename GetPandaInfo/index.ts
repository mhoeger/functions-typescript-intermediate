import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { getPandaImage, getPandaFact } from "../common/pandaHelpers"

// Backend API style function
// Returns a url of a panda image and a random panda fact
const run: AzureFunction = async function (context: Context, req: HttpRequest): Promise<any> {  
    context.log(`Starting HTTP triggered function ${context.executionContext.functionName}`);

    // Use common helper functions.
    const url = await getPandaImage(context.log);
    const fact = getPandaFact(context.log);

    // Default response status is 200
    const response = {
        body: {
            url,
            fact
        }
    };

    return response;
};

export default run;
