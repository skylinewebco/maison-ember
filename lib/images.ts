import { basePath } from "./basePath";

/**
 * Centralized image config. Swap any `id` here to change the photo everywhere
 * it's used — nothing else in the app needs to change.
 */
function unsplash(id: string, w = 1600, q = 80) {
  return `https://images.unsplash.com/photo-${id}?w=${w}&q=${q}&auto=format&fit=crop`;
}

export const img = {
  heroHome: unsplash("1550966871-3ed3cdb5ed0c", 2400),
  /** Looping cinematic background video for the homepage hero; heroHome above is its poster/fallback. */
  heroVideo: `${basePath}/videos/hero-restaurant.mp4`,
  heroAbout: unsplash("1533777857889-4be7c70b33f7", 2400),
  heroKitchen: unsplash("1424847651672-bf20a4b0982b", 2400),
  heroMenu: unsplash("1414235077428-338989a2e8c0", 2400),
  heroGallery: unsplash("1546069901-ba9599a7e63c", 2400),
  heroContact: unsplash("1467003909585-2f8a72700288", 2400),

  featuredDish: unsplash("1544025162-d76694265947", 1600),
  parallaxWide: unsplash("1481931098730-318b6f776db0", 2400),
  testimonialBg: unsplash("1526318472351-c75fcf070305", 2000),

  visitExterior: unsplash("1517248135467-4c7edcad34c4", 1600),

  menuStarters: [
    unsplash("1552566626-52f8b828add9", 1200),
    unsplash("1559339352-11d035aa65de", 1200),
  ],
  menuMains: [
    unsplash("1544025162-d76694265947", 1200),
    unsplash("1600891964599-f61ba0e24092", 1200),
  ],
  menuPasta: [
    unsplash("1592861956120-e524fc739696", 1200),
    unsplash("1466978913421-dad2ebd01d17", 1200),
  ],
  menuDesserts: [
    unsplash("1579027989536-b7b1f875659b", 1200),
    unsplash("1600335895229-6e75511892c8", 1200),
  ],

  kitchenCarousel: [
    { name: "Prime Steak", src: unsplash("1544025162-d76694265947", 1200) },
    { name: "Sea Bass", src: unsplash("1565299624946-b28f40a0ae38", 1200) },
    { name: "Truffle Tagliolini", src: unsplash("1592861956120-e524fc739696", 1200) },
  ],

  philosophy: [
    unsplash("1554679665-f5537f187268", 1200),
    unsplash("1476224203421-9ac39bcb3327", 1200),
    unsplash("1540189549336-e6e99c3679fe", 1200),
    unsplash("1478144592103-25e218a04891", 1200),
  ],

  gallery: [
    { src: unsplash("1414235077428-338989a2e8c0", 1200), tall: true },
    { src: unsplash("1424847651672-bf20a4b0982b", 1200), tall: false },
    { src: unsplash("1592861956120-e524fc739696", 1200), tall: false },
    { src: unsplash("1517248135467-4c7edcad34c4", 1200), tall: true },
    { src: unsplash("1550966871-3ed3cdb5ed0c", 1200), tall: false },
    { src: unsplash("1552566626-52f8b828add9", 1200), tall: true },
    { src: unsplash("1533777857889-4be7c70b33f7", 1200), tall: false },
    { src: unsplash("1546069901-ba9599a7e63c", 1200), tall: false },
    { src: unsplash("1467003909585-2f8a72700288", 1200), tall: true },
    { src: unsplash("1466978913421-dad2ebd01d17", 1200), tall: false },
    { src: unsplash("1432139555190-58524dae6a55", 1200), tall: false },
    { src: unsplash("1541544741938-0af808871cc0", 1200), tall: true },
    { src: unsplash("1600891964599-f61ba0e24092", 1200), tall: false },
    { src: unsplash("1579027989536-b7b1f875659b", 1200), tall: false },
    { src: unsplash("1600335895229-6e75511892c8", 1200), tall: true },
    { src: unsplash("1551024506-0bccd828d307", 1200), tall: false },
    { src: unsplash("1560717845-968823efbee1", 1200), tall: false },
    { src: unsplash("1481931098730-318b6f776db0", 1200), tall: true },
  ],
};
