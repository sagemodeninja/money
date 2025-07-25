/**
 * Prepends one or more Uint8Arrays to another, using length-prefixed packing.
 * Can be unpacked with {@link unpack}.
 * @param array The array to prepend bytes to.
 * @param bytes The bytes to prepend.
 * @returns A new Uint8Array with the bytes prepended in length-prefixed format.
 * @see pack
 */
export function prepend(array: Uint8Array, ...bytes: Uint8Array[]): Uint8Array {
    const packed = pack(...bytes);
    const result = new Uint8Array(packed.length + array.length);

    result.set(packed, 0);
    result.set(array, packed.length);

    return result;
}

/**
 * Packs a variable number of length-prefixed Uint8Arrays into a single Uint8Array.
 * @param bytes A variable number of Uint8Arrays to pack.
 * @return A Uint8Array containing the packed data.
 */
export function pack(...bytes: Uint8Array[]): Uint8Array {
    const length = bytes.reduce((sum, byte) => sum + 1 + byte.length, 0);
    const result = new Uint8Array(length);

    let offset = 0;
    for (const byte of bytes) {
        result[offset] = byte.length;
        result.set(byte, offset + 1);
        offset += 1 + byte.length;
    }

    return result;
}

/**
 * Unpacks a variable number of Uint8Arrays from a length-prefixed packed Uint8Array.
 * @param packed The packed Uint8Array.
 * @return An array of Uint8Arrays unpacked from the input.
 */
export function unpack(packed: Uint8Array): Uint8Array[] {
    const bytes: Uint8Array[] = [];

    let offset = 0;
    while (offset < packed.length) {
        const length = packed[offset];
        bytes.push(packed.slice(offset + 1, offset + 1 + length));
        offset += 1 + length;
    }

    return bytes;
}

/**
 * Generates a random Uint8Array of the specified size.
 * @param size The size of the Uint8Array to generate.
 * @return A Uint8Array filled with random values.
 */
export function random(size: number): Uint8Array {
    const array = new Uint8Array(size);
    crypto.getRandomValues(array);
    return array;
}
