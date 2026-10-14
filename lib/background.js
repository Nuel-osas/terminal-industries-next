// Canvas grid treatment recreated from the public site's background effect.
// Offscreen canvases are paused and every observer/frame is released on navigation.
export function mountBackgrounds(root) {
  const disposers = [];
  for (const canvas of root.querySelectorAll(".bg-canvas__wrapper canvas")) {
    const wrapper = canvas.parentElement;
    const context = canvas.getContext("2d");
    const grid = document.createElement("canvas");
    const gridContext = grid.getContext("2d");
    const layer = document.createElement("canvas");
    const layerContext = layer.getContext("2d");
    const mask = document.createElement("canvas");
    mask.width = mask.height = 15;
    const maskContext = mask.getContext("2d");
    const pixels = maskContext.createImageData(15, 15);
    let visible = false,
      frame = 0,
      last = 0,
      disposed = false;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const white = wrapper.classList.contains("white");
    const color = white
      ? "rgb(222,222,222)"
      : wrapper.classList.contains("dark")
        ? "rgb(75,75,75)"
        : "rgb(38,80,29)";
    function resize() {
      const { width, height } = wrapper.getBoundingClientRect();
      for (const c of [canvas, grid, layer]) {
        c.width = Math.round(width);
        c.height = Math.round(height);
      }
      gridContext.fillStyle = color;
      const size = 77,
        offsetX = (width % size) / 2,
        offsetY = (height % size) / 2;
      for (let y = offsetY + 1.5; y < height; y += size)
        for (let x = offsetX + 1.5; x < width; x += size) {
          gridContext.fillRect(x + 14.5, y, 48, 1);
          gridContext.fillRect(x, y + 14.5, 1, 48);
          gridContext.fillRect(x - 1, y - 1, 3, 3);
        }
      render(0);
    }
    function render(time) {
      if (disposed || !canvas.width || !canvas.height) return;
      const t = time / 1000,
        aspect = canvas.width / canvas.height;
      for (let y = 0; y < 15; y++)
        for (let x = 0; x < 15; x++) {
          let alpha = 0;
          for (let n = 0; n < 3; n++) {
            const cx = Math.cos(t * 0.25 + n * 0.6) * 15 * 0.2 + 7.5;
            const cy = Math.sin(t * 0.25 + n * 0.6) * 15 * 0.35 + 7.5;
            const radius = 15 * 0.55 * (1 - n * 0.25);
            alpha += Math.max(
              0,
              1 - Math.hypot((x - cx) * aspect, y - cy) / radius,
            );
          }
          const i = (y * 15 + x) * 4;
          pixels.data[i] = pixels.data[i + 1] = pixels.data[i + 2] = 255;
          pixels.data[i + 3] = Math.min(1, alpha) * 255;
        }
      maskContext.putImageData(pixels, 0, 0);
      layerContext.clearRect(0, 0, layer.width, layer.height);
      layerContext.globalCompositeOperation = "source-over";
      layerContext.drawImage(grid, 0, 0);
      layerContext.globalCompositeOperation = "destination-in";
      layerContext.drawImage(mask, 0, 0, layer.width, layer.height);
      layerContext.globalCompositeOperation = "source-over";
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(layer, 0, 0);
      if (white) {
        const x =
          Math.floor((canvas.width * 0.6) / 77) * 77 +
          (canvas.width % 77) / 2 +
          1.5;
        const y = ((t * 90) % (canvas.height + 100)) - 50;
        const glow = context.createRadialGradient(x, y, 0, x, y, 35);
        glow.addColorStop(0, "rgba(171,255,2,.2)");
        glow.addColorStop(1, "rgba(171,255,2,0)");
        context.fillStyle = glow;
        context.fillRect(x - 35, y - 35, 70, 70);
        context.fillStyle = "rgba(5,36,36,.65)";
        context.fillRect(x, y - 8, 1, 18);
      }
    }
    function tick(time) {
      frame = 0;
      if (disposed || !visible) return;
      if (time - last > 50) {
        last = time;
        render(time);
      }
      if (!reduced) frame = requestAnimationFrame(tick);
    }
    const intersection = new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
      if (visible && !frame) frame = requestAnimationFrame(tick);
      else if (!visible) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
    });
    const resizeObserver = new ResizeObserver(resize);
    intersection.observe(wrapper);
    resizeObserver.observe(wrapper);
    resize();
    disposers.push(() => {
      disposed = true;
      cancelAnimationFrame(frame);
      intersection.disconnect();
      resizeObserver.disconnect();
    });
  }
  return () => disposers.forEach((dispose) => dispose());
}
