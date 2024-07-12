import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const RecipeForm = () => {
  const { id } = useParams();
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  useEffect(() => {
    if (id) {
      axios.get(`/api/recipes/${id}`)
        .then(response => {
          const recipe = response.data;
          setTitle(recipe.title);
          setIngredients(recipe.ingredients.join('\n'));
          setInstructions(recipe.instructions);
        })
        .catch(error => console.error(error));
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const recipe = { title, ingredients: ingredients.split('\n'), instructions };
    if (id) {
      await axios.put(`/api/recipes/${id}`, recipe);
    } else {
      await axios.post('/api/recipes', recipe);
    }
    history.push('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <textarea 
        placeholder="Ingredients" 
        value={ingredients} 
        onChange={(e) => setIngredients(e.target.value)} 
      />
      <textarea 
        placeholder="Instructions" 
        value={instructions} 
        onChange={(e) => setInstructions(e.target.value)} 
      />
      <button type="submit">Save Recipe</button>
    </form>
  );
};

export default RecipeForm;

