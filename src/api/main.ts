import { parseArgs } from './utils/args.ts'

const args = parseArgs(Deno.args)

if (!args.success) {
    const  { code, message } = args.error
    console.error(`Error: ${code}: ${message}`)
    Deno.exit(1)
}

Deno.serve(() => new Response('Hello World!'))