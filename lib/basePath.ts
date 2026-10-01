/**
 * The site is served from the domain root (skylinewebx.com), so this is empty.
 * Set NEXT_PUBLIC_BASE_PATH only if it is ever hosted under a sub-path again.
 * next/image and next/link auto-prefix with this automatically; anything else
 * that points at a file under /public (raw <video src>, etc.) must prefix
 * manually using this constant. Empty string in local dev.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
