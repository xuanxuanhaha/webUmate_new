import {Component, OnInit, ViewChild} from '@angular/core';
declare const google: any;
@Component({
  selector: 'app-google-map-component',
  templateUrl: './google-map-component.component.html',
  styleUrls: ['./google-map-component.component.css']
})
export class GoogleMapComponentComponent implements OnInit {
  constructor() { }



   Canberra = {lat: -35.277730, lng: 149.133412};

  ngOnInit() {

    let map;
    let marker;
    let circle;
    let infowindow;



    const contentString = '<div id="content" >' +
      '<div id="siteNotice">' +
      '</div>' +
      '<h4 id="firstHeading" class="firstHeading">CBD Dumpling House</h4>' +
      '<div id="bodyContent">' +
      '<p>Shop FG13C, 148 Bunda St, Canberra ACT 2601</p>' +
      '<a href="https://www.google.com/maps/place/CBD+Dumpling+House/@-35.2776582,149.1313248,17z/data=!3m2!4b1!5s0x6b164d65fafc6899:0x2d7b761504aaecb5!4m5!3m4!1s0x6b164d6f52c5649b:0x1f1947da04efabce!8m2!3d-35.2776582!4d149.1335135?hl=zh-CN">在 Google 地图上查看 </a>' +
      '</div>' +
      '</div>';





    infowindow = new google.maps.InfoWindow({
      content: contentString
    });


    map = new google.maps.Map(document.getElementById('map'), {
      center: this.Canberra,
      zoom: 16
    });

    // cityCircle = new google.maps.Circle({
    //   strokeColor: '#FF0000',
    //   strokeOpacity: 0.8,
    //   strokeWeight: 2,
    //   fillColor: '#FF0000',
    //   fillOpacity: 0.35,
    //   map,
    //   center: map.center,
    //   radius: 500,
    // });

    marker = new google.maps.Marker({
      position: this.Canberra,
      map,
      title: 'Hello World!'
    });



    circle = new google.maps.Circle({
      map,
      radius: 5000,
      fillColor: '#ffd800',
      strokeColor: '#ffd800',
      strokeWeight: 2
    });

    circle.bindTo('center', marker, 'position');
    infowindow.open(map, marker);
  }

  // initMap() {
  //   // Create the map.
  //    const map = new google.maps.Map(document.getElementById('map'), {
  //     zoom: 4,
  //     center: {lat: 37.090, lng: -95.712},
  //     mapTypeId: 'terrain'
  //   });
  //
  //   // Construct the circle for each value in citymap.
  //   // Note: We scale the area of the circle based on the population.
  //   for (let index = 0; index < 4; index ++ ) {
  //     // Add the circle for this city to the map.
  //     const cityCircle = new google.maps.Circle({
  //       strokeColor: '#FF0000',
  //       strokeOpacity: 0.8,
  //       strokeWeight: 2,
  //       fillColor: '#FF0000',
  //       fillOpacity: 0.35,
  //       map,
  //       center: this.citymap[index].center,
  //       radius: Math.sqrt(this.citymap[index].population) * 100
  //     });
  //   }
  // }
}
