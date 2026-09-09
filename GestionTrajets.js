const prompt=require('prompt-sync')();

//remplir le tableau de tajets 
const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 0
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 0
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];
const tickets = [];
let  CancelTicket=[];
let idticket=0;
let choix ;
// Affichage de menu
do
{
   
    console.log(` 
                ================================= 
                         RAILWAY MANAGER 
                ================================= 
                  1. Afficher les trajets 
                  2. Acheter un ticket 
                  3. Afficher les tickets 
                  4. Annuler un ticket 
                  5. Rechercher un ticket 
                  6. Filtrer les trajets 
                  7. Trier les trajets
                  0. Quitter  `);
         choix=Number(prompt("Votre choix :"));

         switch(choix)
         {
             case 1: 

                     //afficher les trajets
                     afficherTrip();
                     break;

             case 2:  
                      // acheter un tickets 
                      let nom=prompt("saisir le nom du passage :");
                      let id=parseInt(prompt("saisir identifiant du trajet :"));
                      let trajet=search(id);
                      
                      if(trajet ===false)
                      {
                            
                         console.log("Trajet introuvable.");
                      }
                      else
                      {
                        
                         let result=false;
                        //  let idticket=tickets[index].id;
                        for(let x=0;x<CancelTicket.length;x++)
                        {
                          
                            if(CancelTicket.length!=0 && CancelTicket[x].tripId===id)
                             {
                                       
                               result=true;
                               break;
                             }
                        }
                         if(result)
                         {
                             let ticket;
                             let place;
                             let price;
                            //ajoutiw lih gha smiya ms ghadi ib9a lina nfse traji onfse 
                              for(let i=0;i<CancelTicket.length;i++)
                              {
                                   if(CancelTicket[i].tripId==id)
                                   {
                                        ticket=i;
                                        place=CancelTicket[i].seatNumber;
                                        price=CancelTicket[i].price;
                                        break;
  
                                   }
                              }
                                
                             idticket++;
                             ticket=new NewTicket(nom,id,idticket,place,price);
                                            //afficher le ticket ajouter 
                                            tickets.push(ticket);
                                            console.log(`
                                                            Ticket acheté avec succès. 
                                                        ------------------------------
                                                            Ticket   # ${idticket}
                                                            Passager : ${nom} 
                                                            Trajet   : ${trips[trajet].departure} → ${trips[trajet].destination}
                                                            Place    : ${place}
                                                            Prix     : ${price}DH 
                                                        -------------------------------  
                                                    `);
                                  
                                  CancelTicket.splice(ticket,1);
                                 
                                  console.log(CancelTicket);
                         }
                         else
                         {
                             if(trips[trajet].availableSeats>0)
                             {
                                        //pour diminuer le nombre de places disponibles 
                                        //et prener le prix de trajet
                                        let tripPlaces=trips[trajet].availableSeats-1;
                                       
                                
                                        //changer le nombre de place de le trajets saisie
                                        for(let i=0;i<trips.length;i++)
                                        {
                                            if(trips[i].id==id)
                                            {
                                                trips[i].availableSeats=tripPlaces;
                                                
                                            }
                                        }
                                        // attribuer automatiquement un numéro de place 

                                        let TotalSeats=0;
                                        for(let i=0;i<tickets.length;i++)
                                            {
                                           if(tickets[i].tripId==id) 
                                            {
                                               TotalSeats+=1;   
                                            }
                                        }
                                         
                                            // attribuer automatiquement un numéro de place 
                                            numberSeat=TotalSeats+1;
                                            
                                            idticket++;
                                            //creer un ticket 
                                             let prix=trips[trajet].price;
                                            let ticket=new NewTicket(nom,id,idticket,numberSeat,prix);
                                            //afficher le ticket ajouter 
                                            tickets.push(ticket);
                                            console.log(`
                                                            Ticket acheté avec succès. 
                                                        ------------------------------
                                                            Ticket   # ${idticket}
                                                            Passager : ${nom} 
                                                            Trajet   : ${trips[trajet].departure} → ${trips[trajet].destination}
                                                            Place    : ${numberSeat}
                                                            Prix     : ${prix}DH 
                                                        -------------------------------  
                                                    `);
                                            
                                    
                                        }
                                        else
                                        {
                                            console.log("Train complet. ");

                                        } }
                      
                        }
                      break;

             case 3: 
                    //Afficher les tickets

                     AfficherTicket();
                     break;
             case 4:  
                    //anuller un ticket 
                    deleteTicket();
                     break;
             case 5:  //aafficher ticket par nom passage 
                       TicketName();
                     break;
             case 6:  
                    // Filtrer les trajets 
                      filterCity();
                     break;
             case 7:  //aaffichage b
                     break;
             case 0:  console.log("A bientot..");
                     break;
            default:
                console.log("Tu dois Enter nombre enter 1 et 7");

                        }
    

}while(choix!==0);

//function pour afficher tous les trajets
function afficherTrip()
{
console.log("============ TRAJETS DISPONIBLES ============");

    for(let i=0;i<trips.length;i++)
    {
        let id=trips[i].id;
        let depart=trips[i].departure;
        let departureTime=trips[i].departureTime;
        let dest=trips[i].destination;
        let arrive=trips[i].arrivalTime;
        let prix=trips[i].price;
        let availSet=trips[i].availableSeats;

 console.log(`
#${id} ${depart} → ${dest}
Deput           : ${departureTime}
arrivé          : ${arrive}
Prix            : ${prix} DH
placesDisponible: ${availSet}
--------------------------------- `);
         
        
    }
}

//rechercher sur un trajets
function search(id)
{
    let result;
    
   for(let i=0;i<trips.length;i++)
    {
        if(trips[i].id==id)
        {
           
            return i
        }
 }
      return false;
}

//ajouter ticket
function NewTicket(nomPassage,id,idCount,placesClass,prix)
{
  
    this.id=idCount;
    this.nomPassage=nomPassage;
    this.tripId=id
    this.seatNumber=placesClass;
    this.price=prix;
} 
    
//fonction pour Afficher tous les tickets 

function AfficherTicket()
{
     let taille=tickets.length;
     if(taille != 0 )
     {
        
        let depart;
        let final;
        console.log(`
            ============ TICKETS ============== `)
        for(let i=0;i<tickets.length;i++)
        {
            let indexTrip=search(tickets[i].tripId);
            depart=trips[indexTrip].departure;
            final=trips[indexTrip].destination;
           
           
            console.log(`
               
             Ticket #${tickets[i].id} 
             Passager : ${tickets[i].nomPassage} 
             Trajet   : ${depart} → ${final}
             Place    : ${tickets[i].seatNumber}
             Prix     : ${tickets[i].price} DH
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      `);
            
        }
     }
     else
     {
        console.log("**********Aucun ticket enregistré.************");
     }
}
//annulation d'un ticket 

function deleteTicket()
{
    let idTicket=Number(prompt("saisir l'identifiant du ticket :"))
    console.log("id given "+idTicket)
     let result =false;
     let index;
    for(let i=0;i<tickets.length;i++)
    {
       
        if(tickets[i].id===idTicket)
            {
            // console.log("ID TICKET AT TABLE "+tickets[i].id)
                    result=true;
                    index=i;
                    break;
        }
        
    }
    if(result)
    {
          
             //ajouter cette ticket dans un tab/objects Canceled 
             CancelTicket.push(tickets[index]);
             
             //pour trouver availaible places
             for(let i=0;i<trips.length;i++)
             {
                if(tickets[index].tripId===trips[i].id)
                {
                       trips[i].availableSeats++;
                       break;
                }
             }
              //supprimer ticket
              tickets.splice(index,1);
    }
    else
      {
            
            console.log("Ticket introuvable. ");
           
      }
}
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
                    console.log(`       
                                Aucun Ticket....`);
                }
}

function filterCity()
{
    let city=prompt("enter la ville de depart :");
    console.log("=======ville de dipart :"+city+"=========");
    let result=false;
    for(let i=0;i<trips.length;i++)
    {
        
        if(trips[i].departure===city)
        {
            result=true;  
        // let depart=trips[i].departure;
        
           let dest=trips[i].destination;
          
           let prix=trips[i].price;
           console.log(`
            ${city}  → ${dest} : ${prix} DH `);
        
        }
       
            
        }

        if(!result)
        {
             console.log("Desolée pas Disponible maintenant");
        }
console.log(` ---------------------------------`);
   
    

}