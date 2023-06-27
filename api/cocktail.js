import axios from "axios";

export class CocktailApi {
    static async getPopularCocktails() {
        return(
            await axios.get("https://www.thecocktaildb.com/api/json/v2/1/popular.php", {
                params: {
                    apikey: "9973533"
                }
            })
        ).data;
    }

    static async getLatestCocktails() {
        return(
            (await axios.get("https://www.thecocktaildb.com/api/json/v2/1/latest.php", {
                    params: {
                        apikey: "9973533"
                    }
                })
            ).data
        );
    }

    static async getCocktailsByIngredients(ingredients) {
        const query = ingredients.map((ingredient) => {
            return ingredient.charAt(0).toUpperCase() + ingredient.slice(1).toLowerCase().replace(' ', '_');
        }).join(',');

        return(
            (await axios.get("https://www.thecocktaildb.com/api/json/v2/1/filter.php?i=" + query, {
                    params: {
                        apikey: "9973533",
                    }
                })
            ).data
        );
    }

    static async getCocktailById(id) {
        return(
            (await axios.get("https://www.thecocktaildb.com/api/json/v2/1/lookup.php?i=" + id, {
                    params: {
                        apikey: "9973533"
                    }
                })
            ).data
        );
    }
}
