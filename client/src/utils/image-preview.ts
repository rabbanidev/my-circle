export const imagePreview = (files: File[]) => {
  return files.map((file) => URL.createObjectURL(file));
};
