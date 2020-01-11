import { Component, Input } from '@angular/core';
import { categoryLs } from '../datas/categories';
import { unflatten } from '../tools/generaltools'
import { DurumTur, DurumTurLabel } from '../enums/enumDurumTur'

@Component({
  selector: 'update-status',
  template: `
      <label class="k-form-field">
        <span>
          Durum Seç :
          <br>
        </span>
        <kendo-dropdownlist
        [data]="durumTurDropdownItems"
        textField="text"
        valueField="value"
        [(ngModel)]="selectedValue"
    >
    </kendo-dropdownlist>
    </label>


  `
})
export class UpdateStatusComponent {
  public durumTurDropdownItems: Array<any> =
    [
      {
        text: DurumTurLabel.get(DurumTur.Magaza),
        DurumTur: DurumTur.SatisDisi,
      },
      {
        text: DurumTurLabel.get(DurumTur.SadeceMagaza),
        DurumTur: DurumTur.SadeceMagaza,
      },
      {
        text: DurumTurLabel.get(DurumTur.Magaza),
        DurumTur: DurumTur.Magaza,
      },
      {
        text: DurumTurLabel.get(DurumTur.MagazaVeSanalMagaza),
        DurumTur: DurumTur.MagazaVeSanalMagaza,
      },

    ];

  public selectedItem: Item = this.durumTurDropdownItems[1];

  tree = unflatten(categoryLs);
  public data: any[] = this.tree;

  getSelectedStatusKeys() {
    return this.selectedItem;
  }

  islemYap(tur: DurumTur) {
    alert();
  }


}

interface Item {
  text: string,
  DurumTur: DurumTur,
}
