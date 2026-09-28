/**
 * GitHub Pages serves this project from /maison-ember/, not the domain root.
 * next/image and next/link auto-prefix with this automatically; anything else
 * that points at a file under /public (raw <video src>, etc.) must prefix
 * manually using this constant. Empty string in local dev.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
