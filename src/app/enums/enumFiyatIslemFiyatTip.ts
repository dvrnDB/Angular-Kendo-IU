export enum fiyatTip {
  Yuzde =1 ,
  Tutar = 2,
}


export const fiyatTipLabel = new Map<number, string>([
  [fiyatTip.Yuzde, 'Yüzde'],
  [fiyatTip.Tutar, 'Tutar'],
]);

// export const getEnumDescription(tur:DurumTur){
// return IslemTurLabel.get(tur)
// }
