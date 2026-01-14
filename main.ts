import { Hono } from "@hono/hono";
import { Context } from "@hono/hono";

const app = new Hono();

app.get("/", async function(ctx: Context){
    const file = await Deno.readFile("./index.html");
   return new Response(new TextDecoder().decode(file),{
    headers:{
        "content-type": "text/html"
    }
   }); 
});

Deno.serve(app.fetch);