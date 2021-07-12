import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RestaurantService} from "../restaurant.service";

@Component({
  selector: 'app-get-restaurantby-nom',
  templateUrl: './get-restaurantby-nom.component.html',
  styleUrls: ['./get-restaurantby-nom.component.css']
})
export class GetRestaurantbyNomComponent implements OnInit {
  Restaurantlist : any;
  restaurantnom : any;
  constructor(private activatedRoute: ActivatedRoute,
              private restaurantsService: RestaurantService,
              private router: Router) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.restaurantnom = data.nom;

      console.log(data)
    });
    this.restaurantsService.getRestaurantbyNom(this.restaurantnom).subscribe((result)=>{

      this.Restaurantlist= result
      console.log("====> ", result);
    });
  }

}
