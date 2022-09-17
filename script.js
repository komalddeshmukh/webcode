//Get the Nationalize API

//let url = `https://api.nationalize.io/?name=${apiUser}`;

async function getName(){
    try {
        let apiUser= document.getElementById("name").value;
        const response = await fetch(`https://api.nationalize.io/?name=${apiUser}`);
        const data = await response.json();
        
        const userList = document.getElementById("user-list");
        console.log(data)
        userList.innerText=`
        Name:${data.name}
        Country1: ${data.country[0].country_id},Prbability: ${data.country[0].probability}
        Country2:${data.country[1].country_id}, Prbability: ${data.country[1].probability}
        `
        
    } catch (err) {
        console.log(err)
}
}

