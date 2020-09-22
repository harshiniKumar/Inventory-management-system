import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { FormControl, Validators } from '@angular/forms';

interface Category {
  value: string;
  viewValue: string;
}

export interface UserData {
  id: string;
  name: string;
  category:string;
  quantity:string;
  status:string;
}
const CATEGORY:string[] =[
  'Personal Care','Household','Sweets and Chocolates','Flours','Oil and Ghee','Rice and Dhals','Staple Foods'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];
const STATUS:string[]=
['Active','Not Available'];
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  hide=true;
  categories : Category[] = [
    {value: 'personalcare-0', viewValue: 'Personal Care'},
    {value: 'household-1', viewValue: 'Household'},
    {value: 'flours-2', viewValue: 'Flours'},
    {value: 'staple-3',viewValue:'Staple Foods'},
    {value:'sweets-4',viewValue:'Sweets and Chocolates'},
    {value:'rice-5',viewValue:'Rice and Dhals'},
    {value:'oil-6',viewValue:'Oil and Ghee'}
  ];

  displayedColumns: string[] = ['id', 'name', 'category', 'quantity','status'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getErrorMessage()
   {
      if (this.email.hasError('required')) 
      {
        return 'You must enter a value';
      }

      return this.email.hasError('email') ? 'Not a valid email' : '';
   }
}

function createNewUser(id: number): UserData {

  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    quantity: Math.round(Math.random() * 100).toString(),
    category: CATEGORY[Math.round(Math.random() * (CATEGORY.length - 1))],
    status:STATUS[Math.random()],
  };
}

