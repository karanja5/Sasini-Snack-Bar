import { Component, Input, OnInit} from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { FoodServicesService } from '../services/food/food-services.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  @Input()
  foodPageTags? : string[];

  @Input()
  justifyContent:string = 'center';

  tags?: Tag[];

  constructor(private foodService : FoodServicesService) {

  }

  ngOnInit() : void {
  if(!this.foodPageTags)
    this.tags= this.foodService.getAllTags();
    }

}
