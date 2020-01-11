import { Component, Input } from '@angular/core';
import { categoryLs } from '../datas/categories';
import {unflatten} from '../tools/generaltools'

@Component({
  selector: 'category-tree',
  template: `
      <!-- <div class="example-config">
            Selected keys: {{selectedKeys.join(",")}}
        </div> -->

       <kendo-treeview
        [nodes]="data"
        textField="name"
        kendoTreeViewExpandable
        kendoTreeViewSelectable
        kendoTreeViewHierarchyBinding
        childrenField="children"
        kendoTreeViewSelectable
        [(selectedKeys)]="selectedKeys"
    >
    </kendo-treeview>
  `
})
export class CategoryTreeComponent {
  public selectedKeys: any[] = ['0_1'];

  tree = unflatten(categoryLs);
  public data: any[]=this.tree;

  getSelectedCategory(){
    return this.selectedKeys;
  }

}
