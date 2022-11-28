import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/core/services/admin/api.service';

@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html',
  styleUrls: ['./add-departement.component.css']
})
export class AddDepartementComponent implements OnInit {
  
  nomDepart!: FormControl;
  DepartForm!: FormGroup

  constructor(
    private apiService: ApiService,
    public dialogRef: MatDialogRef<AddDepartementComponent>) { }

  ngOnInit(): void {
  }


  initForm() {
    
    this.nomDepart = new FormControl('', [Validators.required]);
  }

  createForm() {
    this.DepartForm = new FormGroup({
      nomDepart: this.nomDepart,
    });
  }

  onSubmit() {
    const departToAdd = {
      nomDepart: this.DepartForm.value.nomDepart,
    };
    this.addDepart(departToAdd);
    this.resetControls();
    this.closeDialog();
    location.reload();
  }

  addDepart(departBody: Object) {
    this.apiService.add('addDepartement', departBody).subscribe((departement) => null);
  }

  resetControls() {
    this.DepartForm.reset();
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
