import { serve } from "https://deno.land/x/sift/mod.ts";

serve({
  "/": () => new Response("Hello World"),
  "/:slug": (request, {slug}) => {
    const post = `You are in ${slug}`
    return new Response(post)
  }
})
