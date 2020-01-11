import { DurumTur } from './enumDurumTur';

export enum IslemTur {
  Tasi =1 ,
  Sil = 2,
  DurumGuncelle = 3,
  SatisFiyatiGuncelle = 4,
  IndirimliSatisFiyatiGuncelle = 5,
  FirsatParaGuncelle = 6,
  YeniUrunEkleme = 7,
}


export const IslemTurLabel = new Map<number, string>([
  [IslemTur.Tasi, 'Taşı'],
  [IslemTur.Sil, 'Sil'],
  [IslemTur.DurumGuncelle, 'Durum Güncelle'],
  [IslemTur.SatisFiyatiGuncelle, 'Satış Fİyatı Güncelle'],
  [IslemTur.IndirimliSatisFiyatiGuncelle, 'İndirimli Satış Fiyatı Güncelle'],
  [IslemTur.FirsatParaGuncelle, 'Fırsat Para Güncelle'],
  [IslemTur.YeniUrunEkleme, 'Yeni Ürün Ekle']
]);

// export const getEnumDescription(tur:DurumTur){
// return IslemTurLabel.get(tur)
// }
