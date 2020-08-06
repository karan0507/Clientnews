import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-middle-big-banner',
  templateUrl: './middle-big-banner.component.html',
  styleUrls: ['./middle-big-banner.component.scss']
})
export class MiddleBigBannerComponent implements OnInit {
  images = [62, 83, 466, 965, 82, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  middlebanner: any;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  constructor(private newdb: NewsService) { }

  ngOnInit(): void {
    this.getMiddleBanner();
  }
  getMiddleBanner() {
    this.newdb.getMiddleBanner().subscribe(res => {
      console.log(res);
      this.middlebanner = res;
  
    });
  }


  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
}
