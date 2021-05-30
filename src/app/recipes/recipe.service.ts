import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {


  private recipes: Recipe[] = [
    new Recipe('Test Recipe',
    'This is a test',
     'https://c.pxhere.com/photos/c8/ea/appetizer_bowl_delicious_dish_epicure_food_fries_guacamole-1557385.jpg!d',
     [
       new Ingredient('Meat', 1),
       new Ingredient('tomatoes', 20)
     ]),
    new Recipe('Another Test Recipe',
    'This is simply a test',
    'https://c.pxhere.com/photos/c8/ea/appetizer_bowl_delicious_dish_epicure_food_fries_guacamole-1557385.jpg!d',
    [
      new Ingredient('Meat', 1),
      new Ingredient('Parsnips', 45)
    ])
  ];
  constructor(private slService: ShoppingListService){

  }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
