import { Component } from '@angular/core';
import { productLs } from './datas/products';
import { PageChangeEvent, GridDataResult, SelectableSettings } from '@progress/kendo-angular-grid';
import {
  DialogService, DialogCloseResult
} from "@progress/kendo-angular-dialog";
import {
  MoveComponent
} from "./pages/move-product";
import {
  CategoryTreeComponent
} from "./pages/category-tree";

import { Services } from '../app/service/service-operation-functions'
import { from } from 'rxjs';
import { NotificationService } from '@progress/kendo-angular-notification';
import { IslemTur } from './enums/enumIslemTur'
import { UpdateStatusComponent } from './pages/update-status';
import { UpdateUnitPriceComponent } from './pages/update-unitprice';
import { UpdateDiscountedUnitPriceComponent } from './pages/update-discountedunitprice';
import { UpdateOppurtunityMoneyComponent } from './pages/update-oppurtunityMoney';
import { AddNewProductComponent } from './pages/new-product-form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  public gridData: any[] = productLs;
  public gridView: GridDataResult;
  iconClass: string = 'fa fa-caret-down fa-fw';
  iconClassEkleme: string = 'fa fa-plus fa-fw';

  public buttonCount = 5;
  public info = true;
  public type: 'numeric' | 'input' = 'numeric';
  public pageSizes = true;
  public previousNext = true;

  public pageSize = 10;
  public skip = 0;
  private products = productLs;
  public clickedRowItem;
  public checkboxOnly = true;//sadece chkbx lara tıklayınca seçim
  public tablerowselectableSettings: SelectableSettings;
  public myTableRowSelection: number[] = [];
  dialogRef: any;

  constructor(
    public dialogService: DialogService,
    public service: Services,
    public tree: CategoryTreeComponent,
    public notify: NotificationService,
    public updatestatus: UpdateStatusComponent,
    public unitprice: UpdateUnitPriceComponent,
    public unitdisacounedprice: UpdateDiscountedUnitPriceComponent,
    public opprtunity: UpdateOppurtunityMoneyComponent,
    public addproduct: AddNewProductComponent

  ) {

    this.setSelectableSettings();
    this.loadProducts();
  }

  protected pageChange({ skip, take }: PageChangeEvent): void {
    this.skip = skip;
    this.pageSize = take;
    this.loadProducts();
  }

  private loadProducts(): void {
    this.gridView = {
      data: this.products.slice(this.skip, this.skip + this.pageSize),
      total: this.products.length
    };
  }

  public setSelectableSettings(): void {
    this.tablerowselectableSettings = {
      checkboxOnly: this.checkboxOnly,
      //mode: this.xmode
    };
  }

  onCellClick(e) {
    this.clickedRowItem = e.dataItem;
  }

  onDblClick(e) {
    alert("double click işlemi. Düzenleme açılacak");
    console.log('Double click, data item: ', this.clickedRowItem);
  }

  //#region Toplu İşlemler
  public topluIslemlerDropdown: Array<any> = [
    {
      text: 'Taşı',
      IslemTur: IslemTur.Tasi,
      click: (dataItem) => {
        this.TopluislemYap(dataItem.IslemTur);
      }
    },
    {
      text: 'Sil',
      IslemTur: IslemTur.Sil,
      click: (dataItem) => {
        this.TopluislemYap(dataItem.IslemTur);
      }
    },
    {
      text: 'Durum Güncelle',
      IslemTur: IslemTur.DurumGuncelle,
      click: (dataItem) => {
        this.TopluislemYap(dataItem.IslemTur);
      }
    },
    {
      text: 'Satış Fiyatı Güncelle',
      IslemTur: IslemTur.SatisFiyatiGuncelle,
      click: (dataItem) => {
        this.TopluislemYap(dataItem.IslemTur);
      }
    },
    {
      text: 'İndirimli Satış Fiyatı Güncelle',
      IslemTur: IslemTur.IndirimliSatisFiyatiGuncelle,
      click: (dataItem) => {
        this.TopluislemYap(dataItem.IslemTur);
      }
    },
    {
      text: 'Fırsat Para Güncelle',
      IslemTur: IslemTur.FirsatParaGuncelle,
      click: (dataItem) => {
        this.TopluislemYap(dataItem.IslemTur);
      }
    },
  ];

  public TopluislemYap(tur: IslemTur) {

    if (tur == IslemTur.Tasi) {
      this.openDialog("Ürünleri Taşı", CategoryTreeComponent, IslemTur.Tasi);
    }
    else if (tur == IslemTur.Sil) {
      const icerik = this.myTableRowSelection.join(',') + `Silmek istediğinize emin misiniz ?`;
      this.openDialog("Sil Onayla", icerik, IslemTur.Sil);
    }
    else if (tur == IslemTur.DurumGuncelle) {
      this.openDialog("Durum Güncelle", UpdateStatusComponent, IslemTur.DurumGuncelle);
    }
    else if (tur == IslemTur.SatisFiyatiGuncelle) {
      this.openDialog("Satış Fiyatı Güncelle", UpdateUnitPriceComponent, IslemTur.SatisFiyatiGuncelle);
    }
    else if (tur == IslemTur.IndirimliSatisFiyatiGuncelle) {
      this.openDialog("İndirimli Satış Fiyatı Güncelle", UpdateDiscountedUnitPriceComponent, IslemTur.IndirimliSatisFiyatiGuncelle);
    }
    else if (tur == IslemTur.FirsatParaGuncelle) {
      this.openDialog("Fırsat Para Güncelle", UpdateOppurtunityMoneyComponent, IslemTur.FirsatParaGuncelle);
    }

    this.dialogRef.result.subscribe((result) => {
      if (result instanceof DialogCloseResult) {
        console.log("vazgeçildi");
      } else {
        if (result.IslemTur == IslemTur.Tasi) {
          this.UrunleriTasi();
        }
        else if (result.IslemTur == IslemTur.Sil) {
          this.UrunleriSil();
        }
        else if (result.IslemTur == IslemTur.DurumGuncelle) {
          this.DurumGuncelle();
        }
        else if (result.IslemTur == IslemTur.SatisFiyatiGuncelle) {
          this.SatisFiyatiGuncelle();
        }
        else if (result.IslemTur == IslemTur.IndirimliSatisFiyatiGuncelle) {
          this.IndirimliSatisFiyatiGuncelle();
        }
        else if (result.IslemTur == IslemTur.FirsatParaGuncelle) {
          this.FirsatParaGuncelle();
        }
        else if (result.IslemTur == IslemTur.YeniUrunEkleme) {
          alert("AAA");
          this.YeniUrunEkle();
        }
      }
    });

  };

  openDialog(title: string, content: any, tur: IslemTur,height?:number) {
    const ekleme= tur==IslemTur.YeniUrunEkleme ?true:false;
    this.dialogRef = this.dialogService.open({
      title: title,
      content: content,
      actions: [
        { text: "Vazgeç" },
         {
          text: title,
          IslemTur: tur,
          primary: true,
        }
      ],
      width: 500,
      height: height !=undefined ? height : 300
    });
  }
  //#region   End Point Process

  public UrunleriTasi() {
    console.log("adad")
    const selectedcategory = this.tree.getSelectedCategory();
    const sonuc = this.service.MoveProductsToCategory(this.myTableRowSelection, selectedcategory);

    if (sonuc) {
      this.reload();
      this.showNotify("Başarılı");
    }
  }

  public UrunleriSil() {
    const sonuc = this.service.DeleteProducts(this.myTableRowSelection);
    if (sonuc)
      this.showNotify("Başarılı");
  }

  public DurumGuncelle() {
    const durum = this.updatestatus.getSelectedStatusKeys();
    //alert(durum.DurumTur);
    const sonuc = this.service.UpdateStatus(durum.DurumTur, durum.text, this.myTableRowSelection);
    if (sonuc)
      this.showNotify("Başarılı");
  }

  public SatisFiyatiGuncelle() {
    const durum = this.unitprice.getPostedModel();
    const sonuc = this.service.UpdateUnitPrice(durum.fiyatIslemTur, durum.fiyatTip, durum.tutar, this.myTableRowSelection);
    if (sonuc)
      this.showNotify("Başarılı");
  }

  public IndirimliSatisFiyatiGuncelle() {
    const durum = this.unitdisacounedprice.getPostedModel();
    const sonuc = this.service.UpdateDiscountedUnitPrice(durum.fiyatIslemTur, durum.fiyatTip, durum.tutar, this.myTableRowSelection);
    if (sonuc)
      this.showNotify("Başarılı");
  }

  public FirsatParaGuncelle() {
    const durum = this.opprtunity.getPostedModel();
    const sonuc = this.service.UpdateopportunityMoney(durum.fiyatIslemTur, durum.fiyatTip, durum.tutar, this.myTableRowSelection);
    if (sonuc)
      this.showNotify("Başarılı");
  }

  public YeniUrunEkle() {
    const durum = this.opprtunity.getPostedModel();
    const sonuc = this.service.AddNewProduct(durum);
    if (sonuc)
      this.showNotify("Başarılı");
  }

  //#endregion

  //#endregion

  //#region   Yeni Ürün Ekleme


  public YeniEKlemeFormAc() {
    this.openDialog("Yeni Ürün Ekle", AddNewProductComponent, IslemTur.YeniUrunEkleme,600);

    this.dialogRef.result.subscribe((result) => {
      if (result instanceof DialogCloseResult) {
        console.log("vazgeçildi");
      } else {
        if (result.IslemTur == IslemTur.Tasi) {
          this.UrunleriTasi();
        }
        else if (result.IslemTur == IslemTur.YeniUrunEkleme) {
          alert("AAA");
          this.YeniUrunEkle();
        }
      }
    });
  }

  public onItemClick() {
    alert();
  }
  //#endregion

  //#region  Notify

  public showNotify(message: string): void {
    this.notify.show({
      content: message,
      cssClass: 'button-notification',
      animation: { type: 'slide', duration: 400 },
      position: { horizontal: 'right', vertical: 'top' },
      type: { style: 'success', icon: true },
      closable: true,
      hideAfter: 100,
      width: 400,
      height: 40
    });
  }

  reload() {
    this.gridData = this.gridData.slice(0, 10);
  }
  //#endregion


}

