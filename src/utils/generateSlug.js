const generateSlug = (text) => {
  return text
    .toLowerCase()
    .normalize("NFD") // supprime les accents
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9 ]/g, "") // enlève les caractères spéciaux
    .trim()
    .replace(/\s+/g, "-"); // remplace les espaces par des tirets
};

export default generateSlug;
