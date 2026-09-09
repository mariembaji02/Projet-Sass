
function filterCity()
{
    let city=prompt("enter la ville de depart :");
    console.log("=======ville de dipart :"+city+"=========");

    for(let i=0;i<trips.length;i++)
    {
        if(trips[i].departure===city)
        {
              
        // let depart=trips[i].departure;
        
           let dest=trips[i].destination;
          
           let prix=trips[i].price;
           console.log(`
            ${city}  → ${dest} : ${prix} DH `);
        
        }
            
        }
console.log(` ---------------------------------`);
   
    

}
 filterCity();

