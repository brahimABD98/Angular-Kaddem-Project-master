import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/core/services/admin/api.service';
import { EditContratComponent } from '../contrat/edit-contrat/edit-contrat.component';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { EditDepartementComponent } from './edit-departement/edit-departement.component';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {

  constructor(private apiService: ApiService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getDepartement();
  }
  departements!: any;


  getDepartement() {
    this.apiService.get('getDepartements').subscribe((departements) => (this.departements = departements))
  }

  deleteDepartement(elementId: number) {
    this.apiService
      .delete('deleteDepartement', elementId)
      .subscribe(() => location.reload());
  }

  openAddDepartementDialog() {
    this.dialog.open(AddDepartementComponent, { width: '40%' });
  }

  openEditDepartementDialog(departement: Object) {
    this.dialog.open(EditDepartementComponent, {
      width: '40%',
      data: { departement },
    });
  }
}
