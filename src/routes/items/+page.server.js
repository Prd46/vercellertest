import { PUBLIC_SUPABASE_TABLE } from "$env/static/public"; 
import { supabase } from "$lib/server/supabase_client"; 

/**
 * Loads products from the 'product_info' table in Supabase.
 * @async
 * @returns {Promise<{ items: item[] }>} The product info.
 */

export async function load() {
  const { data } = await supabase.from(PUBLIC_SUPABASE_TABLE).select("*"); //THIS IS THE EQUIVALENT OF SELECT * FROM DATABASE
  // console.log(data); // LOG THE DATA TO CHECK IF IT'S COMING IN
  return {
    items: data ?? [] //OUTPUT YOUR DATA, WHICH WILL BE AN ARRAY. IF THERE'S NOT, SEND AN EMPTY ARRAY. 
  };
}





