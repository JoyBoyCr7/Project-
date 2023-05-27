# Project 1
Ronard Nyongkah

### Project Description

This project gets you facts about your favorite player. Like their height, weight, team ect. All that needs to be done is for you to enter the players name.

## API Description

- The API I'm using is https://www.balldontlie.io/home.html#getting-started

- This is an example of me testing the API
``` js
$.ajax("https://www.balldontlie.io/api/v1/players/?search=lebron")
.then((response)=>{
    console.log(response)
    console.log(response.data)
    let firstName = response.data[0].first_name
    let lastName = response.data[0].last_name
    console.log(`The Goat, ${firstName} ${lastName} has been summoned`)
})
 ```
### Mockup

![](https://i.imgur.com/e6NS7L1.png)

### Daily Schedule

| day | TODO|
|-----|-----|
| 1 | Set everything up along with the APi|
| 2 | Get input from users|
| 3 | Create responses and return them using the API|
| 4 | Organize all components of the page with CSS|
| 5 | Go through and add finishing touches making sure everything is working as it should|
