export enum DurumTur {
  SatisDisi =1 ,
  SadeceMagaza = 2,
  Magaza = 3,
  MagazaVeSanalMagaza = 4,
}

export const DurumTurLabel = new Map<number, string>([
  [DurumTur.SatisDisi, 'Satış Dışı'],
  [DurumTur.SadeceMagaza, 'Sadece Mağaza'],
  [DurumTur.Magaza, 'Mağaza'],
  [DurumTur.MagazaVeSanalMagaza, 'Mağaza ve Sanal Mağaza']
]);

// export const getEnumDescription(tur:DurumTur)=>{
// return DurumTurLabel.get(tur)
// }
