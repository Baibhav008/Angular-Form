import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'forms-app';
  isStudent : string = 'n';

  currentUser: any = null;


  roll:number=NaN;
  uid:number=0;
  phone:number=0;
  name:string='';
  age:number=0;
  email:string='';
  addr:string='';
  gender:string='';
  subjects: string[]=[];
  instType:string='';
  department:string='';

  isFormValid(): boolean 
  {
    if (this.isStudent === 'y') 
    {
      return (this.roll.toString.length>0 && this.name.length>0 && this.age > 0 && this.gender.length>0 && this.addr.length>0 && this.subjects.length > 0 && this.instType.length>0);
    } 
    else 
    {
      return this.uid.toString.length>0 && this.name.length>0 && this.age > 0 && this.email.length>0 && this.phone.toString().length >= 10 && this.gender.length>0 && this.addr.length>0 && this.department.length>0;
    }
  }


  userGroup: any[] = [
    { name: "Test User", age: 44, uT: "Student" }
  ];

  submitForm=()=>{
    if(this.isStudent=='y')
    {
      const newSUser = {
        uT: 'Student',
        roll:this.roll,
        name: this.name,
        age: this.age,
        gender: this.gender,
        addr: this.addr,
        subs: this.subjects,
        inst: this.instType,
      };
      this.userGroup.push(newSUser);
    }
    else{
      const newAdmin = {
        
        uT: 'Admin',
        uid:this.uid,
        name: this.name,
        age: this.age,
        email:this.email,
        phone:this.phone,
        gender: this.gender,
        addr: this.addr,
        dept: this.department,
      };
      this.userGroup.push(newAdmin);
      
    }
    this.clearForm();
    console.log(this.userGroup);

  }

  deleteUser(user: any) {
    const confirmation = confirm(`Are you sure you want to delete ${user.name}?`);
    if (confirmation) {
      const index = this.userGroup.indexOf(user);
      if (index > -1) {
        this.userGroup.splice(index, 1);
      }
    }
  }


  updateSubjects(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.checked) {
      this.subjects.push(inputElement.value);
    } else {
      const index = this.subjects.indexOf(inputElement.value);
      if (index > -1) {
        this.subjects.splice(index, 1);
      }
    }
  }

  editUser(user: any) {
    this.currentUser = user;
    
    if (user.uT === 'Student') 
      {
      this.isStudent = 'y';
      this.roll = user.roll;
      this.name = user.name;
      this.age = user.age;
      this.gender = user.gender;
      this.addr = user.addr;
      this.subjects = user.subs;
      this.instType = user.inst;
    } else {
      this.isStudent = 'n';
      this.uid = user.uid;
      this.name = user.name;
      this.age = user.age;
      this.email = user.email;
      this.phone = user.phone;
      this.gender = user.gender;
      this.addr = user.addr;
      this.department = user.dept;
    }
  }
  saveChanges() {
    if (this.isStudent === 'y') {
      this.currentUser.roll = this.roll;
      this.currentUser.name = this.name;
      this.currentUser.age = this.age;
      this.currentUser.gender = this.gender;
      this.currentUser.addr = this.addr;
      this.currentUser.subs = this.subjects;
      this.currentUser.inst = this.instType;
    } else {
      this.currentUser.uid = this.uid;
      this.currentUser.name = this.name;
      this.currentUser.age = this.age;
      this.currentUser.email = this.email;
      this.currentUser.phone = this.phone;
      this.currentUser.gender = this.gender;
      this.currentUser.addr = this.addr;
      this.currentUser.dept = this.department;
    }
  
    this.currentUser = null;
    console.log(this.userGroup);
  }

  clearForm() {
    this.roll = NaN;
    this.uid = NaN;
    this.phone = NaN;
    this.name = '';
    this.age = NaN;
    this.email = '';
    this.addr = '';
    this.gender = '';
    this.subjects = [];
    this.instType = '';
    this.department = '';
  }
  
  


}
