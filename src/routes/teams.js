const { createClient } = require('@supabase/supabase-js');
	const express = require('express');
	const router = express.Router();
	const {supabaseKey, supabaseUrl} = require('../config/supabase');

const supabase = createClient(supabaseUrl, supabaseKey);


router.get('/', async (req, res) =>{
	try{
		let {data: items, error} = await supabase.from('items').select('*');
		if (error) throw new Error(error.message);
		res.json(items);
	} catch (error){
		res.status(500).json({
			error: "Error fetching items from database."
		})
	}
});

router.get('/:id', async (req, res) =>{
    const item_id = Number(req,params.id);
    try{
		 const {data: item, error} = await supabase.from('items').select('*').eq('id', item_id).single();
		if (error) throw new Error(error.message);
        if (!item) res.status(404).json({error: 'Album not found'});
        else{
            res.json(items);
        }
	} catch (error){
		res.status(500).json({
			error: "Error fetching items from database."
		})
	}
});

module.exports = router;