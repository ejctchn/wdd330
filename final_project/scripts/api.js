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
        const result = await response.json();
        //var json = JSON.stringify(result);

        for(let i = 0; i < result['freeGames']['current'].length; i++)
        {   
            const current = document.querySelector('#current');
            let div = document.createElement('div');
            let div_desc = document.createElement('div');
            
            let thumbnail = document.createElement('img');
            let title = result['freeGames']['current'][i].title;
            let thumbnail_url = result['freeGames']['current'][i]['keyImages'][1].url;
            let desc = result['freeGames']['current'][i].description;
            

            thumbnail.src = thumbnail_url;
            thumbnail.alt = "Image of " + result['freeGames']['current'][i].title;
            div.append("Current")
            div.appendChild(document.createElement('br'));
            div.append(title);
            div_desc.setAttribute('id', 'desc')
            current.appendChild(div);
            current.appendChild(thumbnail);
            div_desc.append("Description: ");
            div_desc.append(desc);
            current.appendChild(div_desc);

        }
        for(let i = 0; i < result['freeGames']['upcoming'].length; i++)
        {
            const upcoming = document.querySelector('#upcoming');
            let div = document.createElement('div');
            let div_desc = document.createElement('div');

            let thumbnail = document.createElement('img');
            let title = result['freeGames']['upcoming'][i].title;
            let thumbnail_url = result['freeGames']['upcoming'][i]['keyImages'][0].url;
            let desc = result['freeGames']['upcoming'][i].description;

            thumbnail.src = thumbnail_url;
            thumbnail.alt = "Image of " + result['freeGames']['upcoming'][i].title;
            div.append("Upcoming");
            div.appendChild(document.createElement('br'));
            div.append(title);
            upcoming.appendChild(div);
            upcoming.appendChild(thumbnail);
            div_desc.append("Description: ");
            div_desc.append(desc);
            upcoming.appendChild(div_desc);
        }
    } 
    catch (error) 
    {
        console.error(error);
    }
}