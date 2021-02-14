import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../../shared/services/api.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { styles } from "../../../shared/constants/map/styles.consants";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  private destroyObservable$: Subject<boolean> = new Subject();

  public lat: number = 48.1459094;
  public lng: number = 17.147115;
  public zoom: number = 4;
  public minZoom: number = 3;
  public maxZoom: number = 17;
  public iconUrl: string = '/assets/images/svg/marker.svg'

  public markers: Array<object> = [];
  public styles = styles;

  constructor(private apiService: ApiService) {
    this.apiService.getShipwrecks().pipe(
      takeUntil(this.destroyObservable$)
    ).subscribe(next => {
      this.markers = next;
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    // unsubscribe on component destroy hook
    this.destroyObservable$.next(true);
    this.destroyObservable$.complete();
  }

}
