const file = './test.json';

fetch(file)
    .then((response) => response.json())
    .then((json) => 
    {
        console.log(json);
        for(let i = 0; i < json['freeGames']['current'].length; i++)
        {   
            const current = document.querySelector('#current');
            let div = document.createElement('div');
            let thumbnail = document.createElement('img');
            let title = json['freeGames']['current'][i].title;
            let thumbnail_url = json['freeGames']['current'][i]['keyImages'][3].url;

            thumbnail.src = thumbnail_url;
            thumbnail.alt = "Image of " + json['freeGames']['current'][i].title;
            div.append("Current")
            div.appendChild(document.createElement('br'));
            div.append(title);
            current.appendChild(div);
            current.appendChild(thumbnail);


        }
        for(let i = 0; i < json['freeGames']['upcoming'].length; i++)
        {
            const upcoming = document.querySelector('#upcoming');
            let div = document.createElement('div');
            let thumbnail = document.createElement('img');
            let title = json['freeGames']['upcoming'][i].title;
            let thumbnail_url = json['freeGames']['upcoming'][i]['keyImages'][0].url;

            thumbnail.src = thumbnail_url;
            thumbnail.alt = "Image of " + json['freeGames']['upcoming'][i].title;
            div.append("Upcomming");
            div.appendChild(document.createElement('br'));
            div.append(title);
            upcoming.appendChild(div);
            upcoming.appendChild(thumbnail);
        }
    });
