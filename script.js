var gif = new GIF({
  workers: 2,
  quality: 10
});

// Add frames (image elements, canvas elements, or canvas contexts)
gif.addFrame(imageElement);
gif.addFrame(canvasElement, {delay: 200});
gif.addFrame(ctx, {copy: true});

// When the GIF is finished
gif.on('finished', function(blob) {
  window.open(URL.createObjectURL(blob));
});

gif.render();
