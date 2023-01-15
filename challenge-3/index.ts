function distributeGifts(packOfGifts: string[], reindeers: string[]) {
  return Math.floor(reindeers.join('').length * 2 / packOfGifts.join('').length)
}

console.log(distributeGifts(["book", "doll", "ball"], ["dasher", "dancer"]))