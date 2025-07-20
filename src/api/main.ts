import { parseArgs } from './utils/args.ts'
import { Router } from './router.ts'

const args = parseArgs(Deno.args)

if (!args.success) {
    const  { code, message } = args.error
    console.error(`${code}: ${message}`)
    Deno.exit(1)
}

const router = new Router()

router.get('/login', async () => {
    return new Response(JSON.stringify({ data: 'Hello World!' }), {
        headers: { 'Content-Type': 'application/json' }
    });
});

Deno.serve(router.handler)