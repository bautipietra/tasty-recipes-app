import axios from 'axios'

export const getRecipes = () => {
  return async (dispatch) => {
    const json = await axios('http://localhost:3001/recipes')
    return dispatch({
      type: 'GET_RECIPES',
      payload: json.data
    })
  }
}
