import { API_HOST } from "../static/Url";

export async function getProyectosApi(endpointUrl:string| null) {
    try {
      const url = `${API_HOST}/proyectos`;
      const response = await fetch(endpointUrl || url);
      const result = await response.json();
      // Espera 2 segundos antes de retornar el resultado
      await new Promise((resolve) => setTimeout(resolve, 5000));
      return result;
    } catch (error) {
      throw error;
    }
  }
  
export async function getLotesApi(id:number | null) {
  try {
    var url: string =`${API_HOST}/lotes`;
    if (id != null) url += `/`+id; 
    //const url =`${API_HOST}/lotes`;
    
    
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
  
export async function getEstacionesApi(id:number | null) {
  try {
    const url = `${API_HOST}/estaciones`;///${id}
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
export async function getPlantasApi(id:number | null) {
  try {
    const url = `${API_HOST}/plantas`;///${id}
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}