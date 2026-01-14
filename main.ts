import { Hono } from "@hono/hono";
import type { Context } from "@hono/hono"
import { getAvailablePort } from "@std/net"
import { getNetworkAddress} from "@std/net/unstable-get-network-address";

const app = new Hono();

function getRoot(ctx: Context){
    return ctx.json({
        "message": "Ok"
    });
}

app.get("/", getRoot);

const { serve } = Deno;

const hostPort = {
    hostname: getNetworkAddress()!,
    port: getAvailablePort()
}

serve(hostPort,app.fetch);