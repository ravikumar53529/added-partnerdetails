import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Partners } from '../interfaces/partners';
import { PartnersServiceService } from '../services/partners-service.service';

@Component({
  selector: 'app-partners-details',
  templateUrl: './partners-details.component.html',
  styleUrls: ['./partners-details.component.scss'],
})
export class PartnersDetailsComponent implements OnInit {
  partnersDetails: Partners[] = [];
  revenueStatus:boolean=false;
  employeeStatus:boolean=false;
  industryStatus:boolean=false;
  routerId:number=0;
  revenueDetails:{year: string;profit: number;turnover: number;crossmargin: number;}[]=[]
  employeeDetails:{employeename: string;experience: number; role: string;domain:string;}[]=[]
  industryDetails:{branches:number,headquarters:string,type:string,founder:string}[]=[]
  constructor(private partnersServiceRef: PartnersServiceService,private route:ActivatedRoute) {}
  ngOnInit(): void {
    this.routerId=this.route.snapshot.params['id'];
    console.log(this.routerId)
    this.partnersServiceRef.getPartnersData().subscribe((data:Partners[]) => {
      this.partnersDetails = data;
      for (let x of this.partnersDetails) {

        if(x.id==this.routerId){
          this.revenueDetails=x.revenuedetails;
          this.employeeDetails=x.employeedetails;
          this.industryDetails=x.industrydetails;  
        }

      }
    });
  }
  

  //revenue
  revenue():void{
    this.revenueStatus=true; 
    this.employeeStatus=false;
    this.industryStatus=false;

  }
  //employees
  employees():void{
    this.employeeStatus=true;
    this.revenueStatus=false; 
    this.industryStatus=false;
   
  }
  //industry
  industry():void{
    this.industryStatus=true;
    this.employeeStatus=false;
   this.revenueStatus=false;
   
  }

}
