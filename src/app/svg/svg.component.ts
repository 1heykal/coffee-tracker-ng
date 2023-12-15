import { Component } from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.svg',
  styleUrls: ['./svg.component.css']
})
export class SvgComponent {
  fillColor = 'rgb(147, 102, 57)';
  browns = [
    "#E1C16E", "#CD7F32", "#A52A2A", "#DAA06D", "#E97451", "#6E260E", "#C19A6B",
    "#954535", "#7B3F00", "#D27D2D", "#6F4E37", "#834333", "#B87333", "#814141",
    "#5C4033", "#8B0000", "#988558", "#C2B280", "#C19A6B", "#E5AA70", "#9A2A2A",
    "#966919", "#F0E68C", "#C4A484", "#C04000", "#800000", "#967969",
    "#CC7722", "#808000", "#4A0404", "#A95C68", "#A52A2A", "#913831", "#80461B",
    "#8B4513", "#C2B280", "#A0522D", "#D2B48C", "#483C32", "#7C3030", "#F5DEB3",
    "#722F37"
  ];

  changeColor(){
    this.fillColor = this.browns[Math.floor(Math.random() * this.browns.length)];
  }
}
