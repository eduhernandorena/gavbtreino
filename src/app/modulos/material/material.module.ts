import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatInputModule, 
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatTableModule,
  MatButtonModule, 
  } from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatTableModule,
    MatButtonModule,
  ],
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatTableModule,
    MatButtonModule,
  ]
})
export class MaterialModule { }
