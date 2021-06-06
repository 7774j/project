import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

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
   addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
   }
   updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
   }
   deleteRecipe(index: number){
     this.recipes.splice(index, 1);
     this.recipesChanged.next(this.recipes.slice());
   }
}
