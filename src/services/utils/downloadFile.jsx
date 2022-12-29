export const downloadFile = (data, fileName, fileType) => {
  const file = new Blob([data], { fileType });
  const a = document.createElement('a');
  a.download = fileName;
  a.href = window.URL.createObjectURL(file);
  a.click();
  a.remove();
};
