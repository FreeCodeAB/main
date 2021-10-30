import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['../layout.scss', './salary.component.scss']
})
export class SalaryComponent implements OnInit {
  public initialRate = 900;
  public minRate = 600;
  public maxRate = 1200;
  public hourlyRate: number = this.initialRate;
  public ratePercent: number = this.getRatePercent(this.initialRate);
  public yourSalary: number = this.getSalary(this.initialRate);

  constructor() { }

  getRatePercent(value: number): number {
    return ((value - this.minRate) / (this.maxRate - this.minRate)) * 100;
  }

  getSalary(value: number): number {
    return Math.trunc((160 * value * 0.7) / 1.3142);
  }

  ngOnInit(): void {

  }

  onChangeEvent(event: any) {
    this.hourlyRate = event.target.value;
    this.ratePercent = this.getRatePercent(this.hourlyRate);
    this.yourSalary = this.getSalary(event.target.value);
  }
}
