import { Injectable } from '@angular/core';
import { Tag } from 'src/app/shared/models/Tag';
import { Food } from '../../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodServicesService {

  constructor() { }

  getAllFoodsById(id:number): Food{
    return  this.getAllFoods().find( food =>
     food.id == id)!;
  }

  getAllFoodsByQuery(query:string) : Food[]{
    return this.getAllFoods().filter(food => food.name.toLowerCase().includes(query.toLowerCase()));
  }

  getAllTags() : Tag[]{
    return[
      {name:'All'},
      {name:'breakfast'},
      {name:'lunch'},
      {name:'dinner'},
      {name:'fast-food'},
      {name:'snack'},
      {name:'beverage'},
    ]
  }

  getAllFoodsByTag(tagTerm: string) : Food[] {
    return tagTerm=="All"?
    this.getAllFoods() :
    this.getAllFoods().filter(food => food.tags ?.includes(tagTerm));
  }

  getAllFoods() : Food[] {
  return [
    {
      id: 1,
      name: 'Chapati Wraps',
      price: 90,
      tags: ['breakfast', 'lunch', 'All', 'dinner', 'fast-food'],
      waitTime: "10min",
      imgUrl: '/assets/images/food-images/chapati-wraps.jpg',
      description: 'Experience a flavor adventure with our fresh chapati wraps.',
    },
    {
      id: 2,
      name: 'Fries',
      price: 150,
      tags: ['lunch', 'dinner', 'All', 'fast-food'],
      waitTime: '25min',
      imgUrl: '/assets/images/food-images/chips.jpg',
      description: 'Our fries are salted to perfection, a savory indulgence.',
    },
    {
      id: 3,
      name: 'Coconut and Cinnamon Mandazi',
      price: 50,
      tags: ['breakfast', 'snack','All', ],
      waitTime: '5min',
      imgUrl: '/assets/images/food-images/mandazi1.jpg',
      description: 'Coconut-cinnamon twist on traditional mandazi.',
    },
    {
      id: 4,
      name: 'Tea with Biscuits',
      price: 100,
      tags: ['breakfast', 'beverage','All'],
      waitTime: '5min',
      imgUrl: '/assets/images/food-images/tea-with-biscuits.jpg',
      description: 'Locally sourced tea leaves, finely brewed with milk, served with biscuits',
    },
    {
      id: 5,
      name: 'Vanilla Cake',
      price: 150,
      tags: ['breakfast', 'snack', 'All'],
      waitTime: '10min',
      imgUrl: '/assets/images/food-images/vanilla-cake1.jpg',
      description: 'Experience sweetness and delight with our heavenly Vanilla Cakes',
    },
    {
      id: 6,
      name: 'Coffee',
      price: 150,
      tags: ['breakfast', 'beverage', 'All'],
      waitTime: '5min',
      imgUrl: '/assets/images/food-images/coffee1.jpg',
      description: 'Our coffee is a rich and bold delight.',
    },
    {
      id: 7,
      name: 'Glazed Donuts',
      price: 150,
      tags: ['breakfast', 'snack', 'All'],
      waitTime: '5min',
      imgUrl: '/assets/images/food-images/glazed-donuts.jpg',
      description: 'Tantalizing donuts with a glaze and topping of your choosing.',
    },
    {
      id: 8,
      name: 'Yogurt',
      price: 250,
      tags: ['breakfast', 'beverage', 'snack','All'],
      waitTime: '10min',
      imgUrl: '/assets/images/food-images/yorgut.jpg',
      description: 'Rich, creamy yorgut expertly made in house from locally sourced milk.',
    },
    {
      id: 9,
      name: 'Icecream',
      price: 180,
      tags: ['snack', 'fast-food', 'All'],
      waitTime: '15min',
      imgUrl: '/assets/images/food-images/icecream.jpg',
      description: 'Our cool and refreshing sweet icecream is the perfect indulgence for those with a sweet tooth.',
    },
    {
      id: 10,
      name: 'Ham Sandwich',
      price: 80,
      tags: ['breakfast', 'snack', 'All', 'fast-food'],
      waitTime: '20min',
      imgUrl: '/assets/images/food-images/sandwich.jpg',
      description: 'Ham sandwich with lettuce, tomatoes, cucumbers and a sauce of your choosing.',
    },
    {
      id: 11,
      name: 'Kebab',
      price: 150,
      tags: ['lunch', 'snack','fast-food', 'All'],
      waitTime: '15min',
      imgUrl: '/assets/images/food-images/kebab.jpg',
      description: 'Beef, mutton and chicken with vegetables on a stick.',
    },
    {
      id: 12,
      name: 'Samosa',
      price: 70,
      tags: ['breakfast', 'snack', 'All'],
      waitTime: '10min',
      imgUrl: '/assets/images/food-images/samosa.jpg',
      description: 'Swahili inspired samosas filled with beef, chalets and spring onions.',
    },
    {
      id: 13,
      name: 'Hotdog',
      price: 250,
      tags: ['lunch', 'snack', 'fast-food','All'],
      waitTime: '25min',
      imgUrl: '/assets/images/food-images/hotdog.jpg',
      description: 'German style weiners on a soft bun. Accompanied by mustard and tomato sauce',
    },
    {
      id: 14,
      name: 'Lemon Cake',
      price: 150,
      tags: ['breakfast', 'snack', 'All'],
      waitTime: '10min',
      imgUrl: '/assets/images/food-images/vanilla-cake2.jpg',
      description: 'Experience sweetness and delight with our heavenly Lemon Cakes',
    },
  ]; }

}
