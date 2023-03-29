import { Component, OnInit } from '@angular/core';
import { FoodServicesService } from '../services/food/food-services.service';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  foods: Food[] = [];
  noResultsFound: boolean = false;
  constructor(private foodServicesService: FoodServicesService, private route:ActivatedRoute) { }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['query'])
        this.foods = this.foodServicesService.getAllFoodsByQuery(params['query'])
      else if(params['tagTerm'])
        this.foods = this.foodServicesService.getAllFoodsByTag(params['tagTerm']);

      else
        this.foods = this.foodServicesService.getAllFoods();

    }
    )
  }}
// import { Component, OnInit } from '@angular/core';
// import { FoodServicesService } from '../services/food/food-services.service';
// import { Food } from '../shared/models/Food';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit{

//   foods: Food[] = [];
//   noResultsFound: boolean = false;
//   constructor(private foodServicesService: FoodServicesService, private route:ActivatedRoute) { }


  // ngOnInit(): void {
  //   this.route.params.subscribe(params => {
  //     if(params['query']){
  //       let filteredFoods = this.foodServicesService.getAllFoods().filter(food => food.name.toLowerCase().includes(params['query'].toLowerCase()));
  //       if(filteredFoods.length > 0) {
  //         this.foods = filteredFoods;
  //       } else {
  //         this.noResultsFound = true;
  //       }
  //     } else {
  //       this.foods = this.foodServicesService.getAllFoods();
  //     }
  //   });
  // }

// }
