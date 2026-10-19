// Studio photos by key: e* eyelash, n* nails, b* brows, s* studio.
const photos = import.meta.glob("../assets/photos/*.jpg", { eager: true, import: "default" });
export const photo = key => photos[`../assets/photos/${key}.jpg`];
