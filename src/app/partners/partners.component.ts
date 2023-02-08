import { Component, OnInit } from '@angular/core';
import { Partners } from '../interfaces/partners';
import { PartnersServiceService } from '../services/partners-service.service';
@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss'],
})
export class PartnersComponent implements OnInit {
  partnersData: Partners[] = [];

  constructor(private partnersServiceRef: PartnersServiceService) {}

  ngOnInit(): void {
    this.partnersServiceRef.getPartnersData().subscribe((data) => {
      this.partnersData = data;
      for (let x of this.partnersData) {
        console.log(x.companyname);
      }
    });
  }
}
