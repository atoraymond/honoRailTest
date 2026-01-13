function App(req: Request){
    return new Response("Welcome to my pages",{
        headers: {
            "content-type": "text/html"
        }
    });
}

const { serve } = Deno;

const hostPort = {
    hostname: "127.0.0.1",
    port: 7000
}

serve(hostPort, App);