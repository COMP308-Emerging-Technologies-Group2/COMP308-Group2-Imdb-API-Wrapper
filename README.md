# COMP308 Group2 Imdb API Wrapper


# Install

To install run `npm install`

# Routes

## `/`

response: 

```
{"success":true}
```


## `/id/:id`

eg. `/id/tt0090190`

response: 

```
{"title":"The Toxic Avenger","_year_data":"1984","year":1984,"rated":"R","released":"1986-04-11T05:00:00.000Z","runtime":"82 min","genres":"Action, Comedy, Horror","director":"Michael Herz, Lloyd Kaufman","writer":"Lloyd Kaufman (story), Joe Ritter (screenplay), Lloyd Kaufman (additional material), Gay Partington Terry (additional material), Stuart Strutin (additional material)","actors":"Andree Maranda, Mitch Cohen, Jennifer Babtist, Cindy Manion","plot":"This is the story of Melvin, the Tromaville Health Club mop boy, who inadvertently and naively trusts the hedonistic, contemptuous and vain health club members, to the point of accidentally ending up in a vat of toxic waste. The devastating results then have a transmogrification effect, his alter ego is released, and the Toxic Avenger is born, to deadly and comical results. The local mop boy is now the local Superhero, the saviour of corruption, thuggish bullies and indifference. Troma classic with good make-up effects and stunts, a pleasant surprise indeed.","languages":"English","country":"USA","awards":"1 nomination.","poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNzViNmQ5MTYtMmI4Yy00N2Y2LTg4NWUtYWU3MThkMTVjNjk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","ratings":[{"Source":"Internet Movie Database","Value":"6.2/10"},{"Source":"Rotten Tomatoes","Value":"68%"}],"metascore":"N/A","rating":"6.2","votes":"19,969","imdbid":"tt0090190","type":"movie","dvd":"10 Nov 1997","boxoffice":"N/A","production":"Troma","website":"N/A","response":"True","series":false,"imdburl":"https://www.imdb.com/title/tt0090190"}
```

## `/name/:name`

eg. `/name/avengers`

response: 

```
{"title":"The Avengers","_year_data":"2012","year":2012,"rated":"PG-13","released":"2012-05-04T04:00:00.000Z","runtime":"143 min","genres":"Action, Sci-Fi","director":"Joss Whedon","writer":"Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)","actors":"Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth","plot":"Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.","languages":"English, Russian","country":"USA","awards":"Nominated for 1 Oscar. Another 35 wins & 77 nominations.","poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_SX300.jpg","ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"69/100"}],"metascore":"69","rating":"8.1","votes":"1,037,900","imdbid":"tt0848228","type":"movie","dvd":"25 Sep 2012","boxoffice":"$623,279,547.00","production":"Walt Disney Pictures","website":"http://marvel.com/avengers_movie","response":"True","series":false,"imdburl":"https://www.imdb.com/title/tt0848228"}
```

# Cloud 

Application is deployed on Heroku: [imdb-api-wrapper.herokuapp.com](https://imdb-api-wrapper.herokuapp.com)