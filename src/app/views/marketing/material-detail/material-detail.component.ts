import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'material-detail',
  templateUrl: './material-detail.component.html',
  styleUrls: ['./material-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MaterialDetailComponent implements OnInit {
  pictures=[
    "http://images.all-free-download.com/images/graphiclarge/abstract_vector_background_3_148511.jpg",
    "https://image.freepik.com/free-vector/abstract-background-with-a-watercolor-texture_1048-2144.jpg",
    "http://images.all-free-download.com/images/graphiclarge/abstract_background_311486.jpg",
    "http://images.all-free-download.com/images/graphiclarge/abstract_lines_and_wave_background_310502.jpg",
    "https://assets.shopfront.envato-static.com/page-content/images/related-posts/post-images/how-to-create-a-fantasy-game-background-in-adobe-photoshop.jpg",
    "http://images.all-free-download.com/images/graphiclarge/abstract_vector_background_3_148511.jpg",
    "https://image.freepik.com/free-vector/abstract-background-with-a-watercolor-texture_1048-2144.jpg",
    "http://images.all-free-download.com/images/graphiclarge/abstract_background_311486.jpg",
    // "http://images.all-free-download.com/images/graphiclarge/abstract_lines_and_wave_background_310502.jpg"

  ];
  constructor() { }

  ngOnInit() {
  }

}
