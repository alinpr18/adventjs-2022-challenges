function fitsInOneBox(boxes: { l: number, w: number, h: number }[]) {
  return boxes
    .sort((a, b) => (a.l + a.w + a.h) - (b.l + b.w + b.h))
    .slice(1)
    .every((a, i) => boxes[i].l < a.l && boxes[i].w < a.w && boxes[i].h < a.h)
}

console.log(fitsInOneBox([
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 }
]
))