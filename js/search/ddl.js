import DropDownList from "../utils/DropDownList.js";



export default class ddl {

    recipes;
    recipesSection;
    
   

    constructor(recipes, recipesSection) {
        this.recipes = recipes;
        this.recipesSection = recipesSection;       
        DropDownList(recipes)
    }
}
