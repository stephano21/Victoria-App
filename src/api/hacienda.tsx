import { API_HOST } from "../static/Url";

export async function getProyectosApi(endpointUrl:string| null) {
    try {
      const url = `${API_HOST}/proyectos`;
      const response = await fetch(endpointUrl || url);
      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  }
  
  export async function getPokemonDetailsByUrlApi(url:string) {
    try {
      const response = await fetch(url);
      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  }
  
  export async function getPokemonDetailsApi(id:string) {
    try {
      const url = `${API_HOST}/pokemon/${id}`;
      const response = await fetch(url);
      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  }