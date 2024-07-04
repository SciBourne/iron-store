interface Product {
  id: string
  vendor: string
  model: string
  price: number
  category: string
  shortDescription: string
  description: string
  balance: number
}




const video: Product[] = []

for (var i: number = 1; i < 23; i++) {
  video.push(
    {
      id: "A-" + i,
      category: "videocards",
      vendor: "Sapphire",
      model: "AMD Radeon RX " + i,
      price: 15_499,
      shortDescription: "Видеокарта PCI-E Sapphire AMD Radeon RX 580 NITRO+ OC 8192MB 256bit GDDR5 [11265-01-20G] HDMI DVI DP",
      description: `Видеокарта Sapphire AMD Radeon RX 580 NITRO+ OC создана специально для игровых систем. 8 ГБ GDDR5-памяти в сочетании с мощным графическим процессором делают возможным запуск самых требовательных к ресурсам игр на максимальных настройках. Даже в на мониторе с разрешением 4K будет отображаться все доступное богатство текстур.
Sapphire AMD Radeon RX 580 NITRO+ OC оснащена эффективной системой охлаждения, которая представлена двумя вентиляторами, алюминиевыми радиаторами и теплоотводными трубками. Система крепления лопастей Quick Connect позволяет быстро и легко снять их для очистки или замены, не разбирая другие элементы устройства.`,
      balance: 17
    }
  )
}




export type { Product }
export { video }
