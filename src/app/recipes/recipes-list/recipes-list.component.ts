import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Some text in the description for the recipe.', 'https://stocksnap.io/photo/G8QICMKLUV/editor'),
    new Recipe('Test Recipe 2', 'Some text in the description for the recipe 2.', 'https://img.delo-vcusa.ru/2011/03/DSC_0850.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
