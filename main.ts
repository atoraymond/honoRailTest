import { getAvailablePort } from "@std/net"
import { getNetworkAddress } from "@std/net/unstable-get-network-address";

function App(req: Request){
    return new Response("Welcome to my pages",{
        headers: {
            "content-type": "text/html"
        }
    });
}

const { serve } = Deno;

const hostPort = {
    hostname: getNetworkAddress()!,
    port: getAvailablePort()
}

serve(hostPort, App);