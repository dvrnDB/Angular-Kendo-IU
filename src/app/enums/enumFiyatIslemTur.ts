export enum fiyatIslemTur {
  Arttir =1 ,
  Azalt = 2,
}


export const fiyatIslemTurLabel = new Map<number, string>([
  [fiyatIslemTur.Arttir, 'Arttır'],
  [fiyatIslemTur.Azalt, 'Azalt'],
]);

// export const getEnumDescription(tur:DurumTur){
// return IslemTurLabel.get(tur)
// }
