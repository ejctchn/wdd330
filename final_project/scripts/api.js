const url = 'https://free-epic-games.p.rapidapi.com/free';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ca1eb23afdmshe6a7568b241b667p173350jsnef63f5e6377e',
		'X-RapidAPI-Host': 'free-epic-games.p.rapidapi.com'
	}
};

async function getData()
{
    try 
    {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } 
    catch (error) 
    {
        console.error(error);
    }
}