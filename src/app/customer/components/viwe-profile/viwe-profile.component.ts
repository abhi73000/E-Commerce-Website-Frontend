import { Component } from '@angular/core';
import { UserStorageService } from '../../../services/storage/user-storage.service';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-viwe-profile',
  templateUrl: './viwe-profile.component.html',
  styleUrl: './viwe-profile.component.scss'
})

export class ViweProfileComponent {
  newUser = {
    id:'',
    name: '',
    email: ''
  };
  user: any;
  constructor(private userstorageService: CustomerService){
    
  }

  ngOnInit(): void {
    // this.user = this.userstorageService.getById(2).subscribe(
    //   (data: any) => {
    //     this.user = data;
    //     console.log("this is userId:  "+data.id);
    //     this.newUser = { ...this.user };
    //     console.log(this.user);
    //   },
    //   (error) => {
    //     alert('Error fetching user data');
    //   }
    // );
  }
}

