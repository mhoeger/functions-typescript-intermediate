import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { getPandaImage, getPandaFact } from "../common/pandaHelpers"

// This function could easily be repurposed into two separate functions for a backend
// API to fetch a panda image url and a panda fact.
const run: AzureFunction = async function (context: Context, req: HttpRequest): Promise<any> {  
    // Use common helper functions.
    // (Note: any function in the function app can import these methods) 
    const url = await getPandaImage(context.log);
    const fact = getPandaFact(context.log);

    // Extremely simple content
    return {
        status: 200,
        headers: {
            "content-type": "text/html"
        },
        body: renderBody(url, fact)
    }
};

function renderBody(url: string, fact: string) {
    return `<center>
                <img height="80%" src="${url}"/>
                <h3>${fact}</h3>
            </center>`;
}

export default run;
