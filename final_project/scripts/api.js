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
        console.log(result);

        for(let i = 0; i < result['freeGames']['current'].length; i++)
        {   
            const current = document.querySelector('#current');
            let div = document.createElement('div');
            let div_desc = document.createElement('div');
            let a = document.createElement('a');
            let thumbnail = document.createElement('img');

            let title = result['freeGames']['current'][i].title;
            let thumbnail_url = result['freeGames']['current'][i]['keyImages'][1].url;
            let desc = result['freeGames']['current'][i].description;
            let slugurl = result['freeGames']['current'][i].productSlug;
            let store_page = `https://store.epicgames.com/en-US/p/${slugurl}`;

            thumbnail.src = thumbnail_url;
            thumbnail.alt = "Image of " + result['freeGames']['current'][i].title;
            div.append("Current")
            div.appendChild(document.createElement('br'));
            div.append(title);
            div_desc.setAttribute('id', 'desc')
            current.appendChild(div);
            a.appendChild(thumbnail);
            div_desc.append("Description: ");
            div_desc.append(desc);
            current.appendChild(div_desc);
            a.setAttribute('href', store_page);
            current.appendChild(a);

        }
        for(let i = 0; i < result['freeGames']['upcoming'].length; i++)
        {
            const upcoming = document.querySelector('#upcoming');
            let div = document.createElement('div');
            let div_desc = document.createElement('div');
            let a = document.createElement('a');
            let thumbnail = document.createElement('img');
            
            let title = result['freeGames']['upcoming'][i].title;
            let thumbnail_url = result['freeGames']['upcoming'][i]['keyImages'][0].url;
            let desc = result['freeGames']['upcoming'][i].description;
            let slugurl = result['freeGames']['current'][i].productSlug;
            let store_page = `https://store.epicgames.com/en-US/p/${slugurl}`;

            thumbnail.src = thumbnail_url;
            thumbnail.alt = "Image of " + result['freeGames']['upcoming'][i].title;
            div.append("Upcoming");
            div.appendChild(document.createElement('br'));
            div.append(title);
            upcoming.appendChild(div);
            a.appendChild(thumbnail);
            div_desc.append("Description: ");
            div_desc.append(desc);
            upcoming.appendChild(div_desc);
            a.setAttribute('href', store_page);
            upcoming.appendChild(a);
        }
    } 
    catch (error) 
    {
        console.error(error);
    }



    // get the current date at top of page
    let curr = new Date();
    let month_num = curr.getMonth();
    let day = curr.getDate();
    let year = curr.getFullYear();

    let month_name = getMonth(month_num)
    let today = `${day} ${month_name} ${year}`


    let date = document.querySelector('#date');
    date.append(today);

    function getMonth(month_num)
    {
        let month_name = "";
        switch(month_num)
        {
            case 0:
                month_name = "Jan";
                break;
            case 1:
                month_name = "Feb";
                break;
            case 2:
                month_name = "Mar";
                break;
            case 3:
                month_name = "Apr";
                break;
            case 4:
                month_name = "May";
                break;
            case 5:
                month_name = "Jun";
                break;
            case 6:
                month_name = "Jul";
                break;
            case 7:
                month_name = "Aug";
                break;
            case 8:
                month_name = "Sep";
                break;
            case 9:
                month_name = "Oct";
                break;
            case 10:
                month_name = "Nov";
                break;
            case 11:
                month_name = "Dec";
                break;
        }
        return month_name;
    }
}
