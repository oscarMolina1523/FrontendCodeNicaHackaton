import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  imports: [MatButtonModule,
    MatIconModule, MatToolbarModule,
    MatCardModule, MatFormFieldModule,
    MatSidenavModule, MatInputModule, MatListModule,
    MatMenuModule, MatExpansionModule,MatTabsModule,
    MatCheckboxModule,MatRadioModule,
    MatDialogModule
    ],
  exports: [MatButtonModule,
    MatIconModule, MatToolbarModule,
    MatCardModule, MatFormFieldModule,
    MatSidenavModule, MatInputModule, MatListModule,
    MatMenuModule, MatExpansionModule,MatTabsModule,
    MatCheckboxModule,MatRadioModule,
    MatDialogModule
  ]
})


export class MaterialModule { }
