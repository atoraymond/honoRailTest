import { Hono } from "@hono/hono";
import type { Context } from "@hono/hono"

const app = new Hono();

function getRoot(ctx: Context){
    return ctx.json({
        "message": "Ok"
    });
}

app.get("/", getRoot);

const { serve } = Deno;

const hostPort = {
    hostname: "127.0.0.1",
    port: 5000
}

serve(hostPort,app.fetch);