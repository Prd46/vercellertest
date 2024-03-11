<script>
    import {onMount} from 'svelte';
    let date = new Date();

    function format_date(today){
        return(
            ('0' + today.getHours()).slice(-2)+
            ':' +
            ('0' + today.getMinute()).slice(-2)+
            ':' +
            ('0' + today.getHours()).slice(-2)+
        )
    }

    onMount(()=> {
        const update_timer = setInterval(() =>{
            date = format_date(new Date());
            console.log('New time: ${date}'));
        });
</script>
<div>
    <h1>Display clock</h1>
    <p>
        {date}
    </p>
</div>

