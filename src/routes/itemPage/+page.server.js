// src/routes/[slug]/+page.server.js
import { error } from "@sveltejs/kit";
import { PUBLIC_SUPABASE_TABLE } from "$env/static/public";
import { supabase } from "$lib/server/supabase_client";

/**
 * Loads products from the 'product_info' table in Supabase.
 * @async
 * @returns {Promise<{ items: item[] }>} The product info.
 */

export async function load() {
  const pageId = window.location;
  const searchParams = new URLSearchParams(pageId);
  console.log(searchParams);
  const { data, error } = await supabase
  .from(PUBLIC_SUPABASE_TABLE)
  .select("*")
  .eq('id', searchParams)
  .single(); // Select more specific data
  // console.log(data);
  
  if (!data) throw error(404);

  return {
    data
  };
}