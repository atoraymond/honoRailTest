import { Hono } from "@hono/hono";
import type { Context } from "@hono/hono";

const app = new Hono();

app.get("/", function(ctx: Context){
    console.log("Got / requested");
    return ctx.text("Welcome to my text");
});

app.get("/hello", function(ctx: Context){
    console.log("Got /hello requested");
    return new Response("<h1>Hello world</h1>",{
        headers: {
            "content-type": "text/html"
        },
    });
});

const { serve } = Deno;

const hostPort = {
    hostname: "127.0.0.1",
    port: 8000
}
serve(hostPort, app.fetch);