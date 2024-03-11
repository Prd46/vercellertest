import { PUBLIC_SUPABASE_TABLE } from "$env/static/public";
import { supabase } from "$lib/server/supabase_client";

/**
 * Loads products from the 'product_info' table in Supabase.
 * @async
 * @returns {Promise<{ items: item[] }>} The product info.
 */

export async function load() {
  const { data } = await supabase.from(PUBLIC_SUPABASE_TABLE).select("*");
  return {
    items: data ?? [],
  };
}
