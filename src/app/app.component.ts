import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public loadedFeature: string = 'Recipes';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
