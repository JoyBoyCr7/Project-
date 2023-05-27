
console.log("ronard")

$.ajax("https://www.balldontlie.io/api/v1/players/?search=lebron")
.then((response)=>{
    console.log(response)
    console.log(response.data)
    let firstName = response.data[0].first_name
    let lastName = response.data[0].last_name
    console.log(`The Goat, ${firstName} ${lastName} has been summoned`)
    
    // let players = response.data.map((player)=>{
    //     console.log(player)
    // })
   
    }
    )

    // let response = $.ajax("https://www.balldontlie.io/api/v1/players/?search=lebron")
    // .then((response)=>{
    //     console.log(response)
    //     console.log(response.data)
    //     let firstName = response.data[0].first_name
    //     let lastName = response.data[0].last_name
    //     console.log(`The Goat, ${firstName} ${lastName} has been summined`)