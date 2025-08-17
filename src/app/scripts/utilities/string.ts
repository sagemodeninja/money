export function toPaddedHex(value: number, length: number = 2) {
    return value.toString(16).padStart(length, '0')
}

export function toSafeSymbol(name: string) {
    return name.replace(/[^a-z0-9]/gi, '-').toLowerCase()
}

export function isNullOrEmpty(value: string) {
    return value == null || value === "";
}
