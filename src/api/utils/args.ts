import { Result } from './result.ts'

export interface ParsedArgs {
    db: string
}

export interface ParseArgsError {
    code: string;
    message: string;
}

function validateArgs(arg: string, value: string): Result<string, ParseArgsError> {
    if (arg === '-d' && (value == null || value.trim() === ''))
        return {
            success: false,
            error: {
                code: 'INVALID_ARGUMENT',
                message: 'Database path is required. Use -d <path> to specify it.'
            }
        };

    return {
        success: true,
        data: value
    };
}

export function parseArgs(args: string[]): Result<ParsedArgs, ParseArgsError> {
    const parsed: ParsedArgs = {
        db: ''
    };

    for (let i = 0; i < args.length; i++) {
        const arg = args[i]
        switch (arg) {
            case '-d': {
                const result = validateArgs(arg, args[++i])
                if (!result.success) return result;
                parsed.db = result.data!
                break;
            }
            default:
                return {
                    success: false,
                    error: {
                        code: 'UNKNOWN_ARGUMENT',
                        message: `Unknown argument: ${arg}`
                    }
                };
        }
    }

    return {
        success: true,
        data: parsed
    };
}