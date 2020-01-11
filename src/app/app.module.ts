import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolBarModule } from '@progress/kendo-angular-toolbar';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { MoveComponent } from './pages/move-product';
import { CategoryTreeComponent } from './pages/category-tree';
import { UpdateStatusComponent } from './pages/update-status';
import { UpdateUnitPriceComponent } from './pages/update-unitprice';
import { UpdateDiscountedUnitPriceComponent } from './pages/update-discountedunitprice';
import { UpdateOppurtunityMoneyComponent } from './pages/update-oppurtunityMoney';
import { AddNewProductComponent } from './pages/new-product-form';

import { Services } from './service/service-operation-functions';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { TooltipModule } from '@progress/kendo-angular-tooltip';



@NgModule({
  declarations: [
    AppComponent,MoveComponent,
    CategoryTreeComponent,
    UpdateStatusComponent,
    UpdateUnitPriceComponent,
    UpdateDiscountedUnitPriceComponent,
    UpdateOppurtunityMoneyComponent,AddNewProductComponent
  ],
  imports: [
    BrowserModule,
    GridModule,
    BrowserAnimationsModule,
    ToolBarModule,
    DialogsModule,
    FormsModule,ReactiveFormsModule,
    TreeViewModule,
    NotificationModule,
    DropDownsModule,
    TooltipModule
  ],
  providers: [
    Services,
    CategoryTreeComponent,
    UpdateStatusComponent,

    UpdateUnitPriceComponent,
    UpdateDiscountedUnitPriceComponent,
    UpdateOppurtunityMoneyComponent,AddNewProductComponent
  ],
  bootstrap: [AppComponent],


  // Dinamik yüklenen içerikler
  entryComponents: [
    MoveComponent,
    CategoryTreeComponent,
    UpdateStatusComponent,

    UpdateUnitPriceComponent,
    UpdateDiscountedUnitPriceComponent,
    UpdateOppurtunityMoneyComponent,
    AddNewProductComponent
  ],
})
export class AppModule { }
