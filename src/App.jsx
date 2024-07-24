import { useEffect, useState, useRef } from "react";
import supabase from "./lib/createClient";

function App() {
  console.log("refreshed");
  const [recipes, setRecipes] = useState([]);
  console.log(recipes);

  useEffect(() => {
    getRecipes();
  }, []);

  // get recipes
  async function getRecipes() {
    const { data } = await supabase.from("recipes").select();
    setRecipes(data);
  }

  // create recipe
  async function createRecipe(insertData) {
    const { data } = await supabase.from("recipes").insert(insertData).select(); // insert data and also select the record for id
    setRecipes([...recipes, ...data]);
  }

  // delete recipe
  async function deleteRecipe(id) {
    await supabase.from("recipes").delete().match({ id });
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }

  // update recipe
  async function updateRecipe(id, newName) {
    const { data } = await supabase
      .from("recipes")
      .update({ name: newName })
      .match({ id })
      .select();
    console.log(data);
    setRecipes(
      recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...data[0] } : recipe
      )
    );
  }

  // add sample recipe
  const handleAdd = () => {
    createRecipe([{ name: "Pizza", instructions: "Bake it" }]);
  };

  // delete first recipe
  const handleDelete = () => {
    deleteRecipe(recipes[0].id);
  };

  const handleUpdate = () => {
    updateRecipe(recipes[0].id, "New Recipe Name");
  };

  return (
    <>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
      <button
        type="button"
        onClick={handleAdd}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Recipe
      </button>
      <button
        type="button"
        onClick={handleDelete}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Delete Recipe
      </button>
      <button
        type="button"
        onClick={handleUpdate}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Update Recipe
      </button>
    </>
  );
}

export default App;
