import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Some text in the description for the recipe.', 'https://stocksnap.io/photo/G8QICMKLUV/editor'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
