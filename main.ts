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

serve(app.fetch);