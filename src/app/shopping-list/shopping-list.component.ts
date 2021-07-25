import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', 2),
    new Ingredient('Onion', 1),
    new Ingredient('Cucumber', 1),
    new Ingredient('Greens', 3),
    new Ingredient('Oil', 3),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
