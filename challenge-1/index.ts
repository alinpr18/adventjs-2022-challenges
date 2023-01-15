function wrapping(gifts: string[]) {
  return gifts.map(gift => {
    const giftWrapped = `*${gift}*`
    const paper = '*'.repeat(giftWrapped.length)
    return [paper, giftWrapped, paper].join('\n')
  })
}

console.log(wrapping(['cat', 'game', 'socks']))