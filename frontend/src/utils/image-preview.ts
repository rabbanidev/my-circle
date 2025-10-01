export const imagesPreview = (files: File[]) => {
  return files.map((file) => URL.createObjectURL(file));
};

export const imagePreview = (file: File) => {
  return URL.createObjectURL(file);
};
