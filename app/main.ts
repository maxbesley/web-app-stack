const body = `
<html>
<pre>
  Once a guy stood all day shaking bugs from his hair.
  The doctor told him there were no bugs in his hair.
  After he had taken a shower for eight hours, standing
  under hot water hour after hour suffering the pain of
  the bugs, he got out and dried himself, and he still
  had bugs in his hair; in fact, he had bugs all over him.
  A month later he had bugs in his lungs.
</pre>
</html>
`;

const headers = {
  "X-Powered-By": "deno",
  "content-type": "text/html",
};

function handler(_req: Request): Response {
  return new Response(body, { headers: headers });
}

Deno.serve({ port: 9000 }, handler);
