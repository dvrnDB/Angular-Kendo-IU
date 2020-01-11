import { Component, Input } from '@angular/core';
import { categoryLs } from '../datas/categories';
import { unflatten } from '../tools/generaltools'
import { DurumTur, DurumTurLabel } from '../enums/enumDurumTur'
import { fiyatIslemTur, fiyatIslemTurLabel } from '../enums/enumFiyatIslemTur';
import { fiyatTip, fiyatTipLabel } from '../enums/enumFiyatIslemFiyatTip';
import { FormBuilder, FormGroup ,ReactiveFormsModule, FormControl } from "@angular/forms";

@Component({
  selector: 'new_product',
  template: `
<div class="row example-wrapper">
    <div class="col-xs-12 col-sm-6 offset-sm-3 example-col">
        <div class="card">
            <div class="card-block">
                <form class="k-form" [formGroup]="myformGroup" (ngSubmit)="yeniUrunKaydet(myformGroup.value)">
                    <fieldset>
                        <legend>Ürün</legend>
                        <label class="k-form-field">
                            <span>Kod</span>
                            <input formControlName="kod" class="k-textbox" placeholder="Kod" />
                        </label>
                        <label class="k-form-field">
                            <span>Ad</span>
                            <input formControlName="ad" class="k-textbox" value="" placeholder="Ad" />
                        </label>
                        <label class="k-form-field">
                            <span>Kategori</span>
                            <input formControlName="kategori" class="k-textbox" value="" placeholder="Kategori" />
                        </label>
                        <label class="k-form-field">
                            <span>Şirket</span>
                            <input formControlName="sirket" class="k-textbox" value="" placeholder="Şirket" />
                        </label>
                        <label class="k-form-field">
                            <span>Birim</span>
                            <input formControlName="birim" class="k-textbox" value="" placeholder="Birim" />
                        </label>
                    </fieldset>

                    <fieldset>
                        <legend>Fiyat</legend>
                        <label class="k-form-field">
                            <span>Birim Fiyat</span>
                            <input formControlName="birimfiyat" class="k-textbox" value="bbatista" placeholder="Birim Fİyat" />
                        </label>
                        <label class="k-form-field">
                            <span>İndirimli Birim Fiyat</span>
                            <input formControlName="indirimlibirimfiyat" class="k-textbox" value="bbatista" placeholder="İndirimli Birim Fiyat" />
                        </label>
                        <label class="k-form-field">
                            <span>Firsat Para</span>
                            <input formControlName="firsatpara" class="k-textbox" value="bbatista" placeholder="Fırsat Para" />
                        </label>
                    </fieldset>

                    <button type="submit" style="cursor:pointer;" class="btn btn-success btn-block">
                        <strong>Kaydet</strong>
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>
  `
})
export class AddNewProductComponent {
  form: FormGroup;
  myformGroup: FormGroup;

  constructor(public fb: FormBuilder) {
    this.form = this.fb.group({
    })
    this.myformGroup = new FormGroup({
      kod: new FormControl(),
      ad: new FormControl(),
      kategori:new FormControl(),
      sirket:new FormControl(),
      birim:new FormControl(),
      birimfiyat:new FormControl(),
      indirimlibirimfiyat:new FormControl(),
      firsatpara:new FormControl(),
   });
  }

  yeniUrunKaydet(formdatas){
    console.log(formdatas);
  }

  submitForm() {
    console.log(this.form.value)
  }
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
