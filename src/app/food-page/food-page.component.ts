import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodServicesService } from '../services/food/food-services.service';
import { Food } from '../shared/models/Food';
import { CartServicesService } from '../services/cart/cart-services.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit{

  food!:Food;

  constructor(private activatedRoute : ActivatedRoute,
    private foodService : FoodServicesService, private cartService : CartServicesService,
    private router: Router){
    const x = activatedRoute.params.subscribe((params) => {
      if(params['id'])
      this.food=foodService.getAllFoodsById(params['id']);
    })

    console.log(x);
  }

  ngOnInit(): void {

  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

}
