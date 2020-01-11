import { Component, Input } from '@angular/core';
import { categoryLs } from '../datas/categories';
import { unflatten } from '../tools/generaltools'
import { DurumTur, DurumTurLabel } from '../enums/enumDurumTur'
import { fiyatIslemTur, fiyatIslemTurLabel } from '../enums/enumFiyatIslemTur';
import { fiyatTip, fiyatTipLabel } from '../enums/enumFiyatIslemFiyatTip';

@Component({
  selector: 'update-oppurtunitymoney',
  template: `
 <form class="k-form">
   <div class="row example-wrapper">
   <div class="col-xs-6 col-sm-6">
   <label class="k-form-field">
        <span>
        İşlem <span class="k-required">*</span>
        </span>
        <kendo-dropdownlist
        [data]="fiyatIslemTurDropdownItems"
        textField="text"
        valueField="value" [ngModelOptions]="{standalone: true}"
        [(ngModel)]="islemturselectedItem"
    >
    </kendo-dropdownlist>
    </label>
    </div>

    <div class="col-xs-6 col-sm-6 offset-sm-3 example-col">
    <label class="k-form-field">
        <span>
        Tip <span class="k-required">*</span>
        </span>
        <kendo-dropdownlist
        [data]="fiyattipDropdownItems"
        textField="text"
        valueField="value" [ngModelOptions]="{standalone: true}"
        [(ngModel)]="fiyattipselectedItem"
    >
    </kendo-dropdownlist>
    </label>
    </div>
   </div>
    <label class="k-form-field">
        <span>
        Miktar <span class="k-required">*</span>
        </span>
        <input class="k-textbox"
        [(ngModel)]="guncellemetutari" [ngModelOptions]="{standalone: true}"
         type="number" placeholder="Mikatr" />
    </label>

</form>
  `
})

export class UpdateOppurtunityMoneyComponent {
  public fiyatIslemTurDropdownItems: Array<any> =
    [
      {
        text: fiyatIslemTurLabel.get(fiyatIslemTur.Arttir),
        fiyatIslemTur: fiyatIslemTur.Arttir,
      },
      {
        text: fiyatIslemTurLabel.get(fiyatIslemTur.Azalt),
        fiyatIslemTur: fiyatIslemTur.Azalt,
      },
    ];

  public fiyattipDropdownItems: Array<any> =
    [
      {
        text: fiyatTipLabel.get(fiyatTip.Tutar),
        fiyatTip: fiyatTip.Tutar,
      },
      {
        text: fiyatTipLabel.get(fiyatTip.Yuzde),
        fiyatTip: fiyatTip.Yuzde,
      },
    ];

  public islemturselectedItem: Item1 = this.fiyatIslemTurDropdownItems[1];
  public fiyattipselectedItem: Item2 = this.fiyattipDropdownItems[1];
  public guncellemetutari: string;
  public responseModel: ReturnModel;

  getPostedModel() {
    const mdl = Object.assign(new ReturnModel(), {
      fiyatIslemTur: this.islemturselectedItem.fiyatIslemTur,
      fiyatTip: this.fiyattipselectedItem.fiyatTip,
      tutar: this.guncellemetutari
    });

    return mdl;
  }
}

interface Item1 {
  text: string,
  fiyatIslemTur: fiyatIslemTur,
}
interface Item2 {
  text: string,
  fiyatTip: fiyatTip,
}

class ReturnModel {
  public tutar: number;
  public fiyatTip: fiyatTip;
  public fiyatIslemTur: fiyatIslemTur;

}
