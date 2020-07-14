import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  show_Ray = true;
  show_Sarvesh = true;
  show_Tina = true;
  show_Leon = true;
  show_Annie = true;
  constructor() { }

  ngOnInit() {
    this.show_Ray_more();
    this.show_Sarvesh_more();
    this.show_Tina_more();
    this.show_Leon_more();
    this.show_Annie_more();
  }
  show_Ray_more(){
    this.show_Ray = ! this.show_Ray;
    if(this.show_Ray){
      document.getElementById('show_Ray_id').innerHTML = 'show less';
    }else{
      document.getElementById('show_Ray_id').innerHTML = 'show more';
    }
  }
  show_Sarvesh_more(){
    this.show_Sarvesh = ! this.show_Sarvesh;
    if(this.show_Sarvesh){
      document.getElementById('show_Sarvesh_id').innerHTML = 'show less';
    }else{
      document.getElementById('show_Sarvesh_id').innerHTML = 'show more';
    }
  }
  show_Tina_more(){
    this.show_Tina = ! this.show_Tina;
    if(this.show_Tina){
      document.getElementById('show_Tina_id').innerHTML = 'show less';
    }else{
      document.getElementById('show_Tina_id').innerHTML = 'show more';
    }
  }
  show_Leon_more(){
    this.show_Leon = ! this.show_Leon;
    if(this.show_Leon){
      document.getElementById('show_Leon_id').innerHTML = 'show less';
    }else{
      document.getElementById('show_Leon_id').innerHTML = 'show more';
    }
  }
  show_Annie_more(){
    this.show_Annie = ! this.show_Annie;
    if(this.show_Annie){
      document.getElementById('show_Annie_id').innerHTML = 'show less';
    }else{
      document.getElementById('show_Annie_id').innerHTML = 'show more';
    }
  }
}
