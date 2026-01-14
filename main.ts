import { Hono } from "@hono/hono";
import { Context } from "@hono/hono";
import { layouts, render } from "./handlebars.ts";

const app = new Hono();

app.get("/", async function(ctx: Context){
    
    const main = await Deno.readFile("./views/home.hbs");
    
    const home = await render( await layouts(main), {
        name: "Raymond Ato Ghanney"
    })
   
    return new Response(home, {
    headers: {
        "content-type": "text/html"
    }
   }); 
});

Deno.serve(app.fetch);