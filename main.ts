function handler(req: Request): Response{
    return new Response("Hello world");
}

Deno.serve(handler);