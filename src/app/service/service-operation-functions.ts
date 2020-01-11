
export class Services {

  public sonuc = false;
  constructor() {
  }

  AddNewProduct(mdl: any) {
    console.log(mdl);
    return true;
  }

  MoveProductsToCategory(tablerows: number[], category: any[]) {

    console.log("Selected Table Rows" + tablerows);
    console.log("Selected Category" + category);

    return true;
  }

  DeleteProducts(tablerows: number[]) {

    console.log("Selected Table Rows" + tablerows);
    return true;

  }

  UpdateStatus(id: number, name: string, rows: number[]) {

    console.log(Number);
    console.log(name);
    console.log(rows);
    //Opertaions
    return true;

  }

  UpdateUnitPrice(islem: number, tip: number, deger: number, rows: number[]) {

    //Opertaions
    return true;

  }

  UpdateDiscountedUnitPrice(islem: number, tip: number, deger: number, rows: number[]) {

    //Opertaions
    return true;

  }

  UpdateopportunityMoney(islem: number, tip: number, deger: number, rows: number[]) {

    //Opertaions
    return true;
  }

  generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }


}

