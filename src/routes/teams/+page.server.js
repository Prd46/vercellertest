import { slugify } from '$lib/utils';
import { items } from '$lib/data2'; 
// Take in the data from the javascript file, then the slugify to fix names
/**
 * The load function iterates over the `teams` array and returns an object.
 * Each object in the array 'mascots' has 'name' and 'mascot' properties.
 * The value for the 'name' and 'mascot' keys are derived from the corresponding properties of each 'team' object.
 *
 * @module {Function} load
 * @returns {{teams: {image: string, name: string, price: string, slug: string}[]}} - An object with teams array
 */
export function load() { //Load function, specific to svelte, pulls the data
  return {
    teams: items.map((team) => ({
      image: team.image,
      name: team.name,
      price: team.price,
      category: team.category,
      slug: slugify(team.image)
    }))
  };
}