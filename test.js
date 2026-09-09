function TicketName()
{
    let nom=prompt("enter le nom de passage :");
    let result=false;
    console.log(`
                    ============ TICKETS ============== `)
                for(let i=0;i<tickets.length;i++)
                { 
                    if(tickets[i].nomPassage===nom)
                    {
                        result=true;
                        let indexTrip=search(tickets[i].tripId);
                        depart=trips[indexTrip].departure;
                        final=trips[indexTrip].destination;
                    console.log(`
                        
                        Ticket #${tickets[i].id} 
                        Passager : ${nom} 
                        Trajet   : ${depart} → ${final}
                        Place    : ${tickets[i].seatNumber}
                        Prix     : ${tickets[i].price} DH
                        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                               `);
                    }
                   
                }
                if(!result)
                {
                    console.log("       Aucun Ticket....");
                }
}

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
  TicketName();
