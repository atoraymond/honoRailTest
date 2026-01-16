import { Hono } from "@hono/hono";
import { Context } from "@hono/hono";
import { layouts, render } from "./handlebars.ts";

const quotes = ["You are capable of more than you imagine—take the step anyway",
    "Every small effort today builds the strength you will need tomorrow",
    "Do not wait for confidence to start; confidence is built by starting",
    "What feels impossible now will one day be your proof of strength",
    "Your pace does not matter—forward is still forward",
    "Great things grow from ordinary days lived with purpose",
    "Even the longest journey changes with one brave decision"
];


const app = new Hono();

app.get("/", async function(ctx: Context){
    
    const main = await Deno.readFile("./views/home.hbs");
    
    const home = await render( await layouts(main), {
        name: quotes[Math.floor(Math.random() * quotes.length) + 1]
    })
   
    return new Response(home, {
    headers: {
        "content-type": "text/html"
    }
   }); 
});

Deno.serve(app.fetch);