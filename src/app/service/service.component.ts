import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  show_web_development_part = false;
  show_designs_part = false;
  show_data_security_part = false;
  constructor() { }

  ngOnInit() {
  }

  show_web_development_part_detail() {
    this.show_web_development_part = ! this.show_web_development_part;
  }

  show_design_part_detail() {
    this.show_designs_part = ! this.show_designs_part;
  }
  show_data_security_part_detail(){
    this.show_data_security_part = ! this.show_data_security_part;
  }
}
