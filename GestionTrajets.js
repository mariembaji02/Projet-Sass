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
                           let idCount=0;
                        if(trips[trajet].availableSeats>0)
                        {
                             //pour diminuer le nombre de places disponibles 
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
                                 idCount=tickets.length+1;
                                 //creer un ticket 
                                  let ticket=new NewTicket(nom,id,idCount,numberSeat);
                                  //afficher le ticket ajouter 
                                  tickets.push(ticket);
                                console.log(`
                                            Ticket acheté avec succès. 
                                           ------------------------------
                                               Ticket   # ${idCount}
                                               Passager : ${nom} 
                                               Trajet   : ${trips[trajet].departure} → ${trips[trajet].destination}
                                               Place    : ${numberSeat}
                                               Prix     : ${trips[trajet].price}DH 
                                          -------------------------------  
                                    `);
                            
                     
                        }
                        else
                        {
                            console.log("Train complet. ");

                        } 
                     }
                      break;





             case 3: 
                    //Afficher les tickets
                    let 
                     break;
             case 4:  //aaffichage b
                     break;
             case 5:  //aaffichage b
                     break;
             case 6:  //aaffichage b
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
function NewTicket(nomPassage,id,idCount,placesClass)
{
  
    this.id=idCount;
    this.nomPassage=nomPassage;
    this.tripId=id
    this.seatNumber=placesClass;
    this.price=trips[id].price;
} 
    
