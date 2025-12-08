const video = document.createElement("video");
if (video instanceof HTMLVideoElement) {
  console.log(video.volume);
}

const img = document.createElement("img");
if (img instanceof HTMLImageElement) {
  img.src = "imagem.png";
  console.log(img.src);
}
