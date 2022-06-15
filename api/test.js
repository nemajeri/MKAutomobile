class Filter { }
class Values { }

let filter = new Filter();

function selectField(property, value)
{
  let input = filter; // Snima stari filter, jer mora kreirati novi
  let ids = input[property][value]; //Kupi sve zanimljive IDjeve na osnovu odaberenog polja

  filter = new Filter(); //Vraca filter na prazno

  for (const field in input) //Za sva poslja u Jsonu, kao sto su makes, models, drivetrain, year...
  {
    for(const subfield in input[field]) // Za sva subpolja, kao sto su KIA, AUDI...
    {
      for(const id in input[field][subfield]) // Za sve IDjeve u subpoljima kao sto su 530461417 i ostali...
      {
        if(ids.includes(input[field][subfield][id])) //Ako se ID koji se nalazi u jednom od subpolja nalazi u listi zanimljivih IDjeva
        {
          console.log(`${field}: ${subfield}: ${input[field][subfield][id]}`);
          pushCar(field, subfield, input[field][subfield][id]); //Uzimas ime tog polja, subpolja i id te ga snimas u novu listu...
        }
      }
    }
  }

  console.log(filter);
}

function pushCar(field, subfield, id) //Kreira novi array, dodaje sve informacije
{
  if(!filter.hasOwnProperty(field))
    filter[field] = new Values();

  if(!filter[field].hasOwnProperty(subfield))
      filter[field][subfield] = new Array();

  filter[field][subfield].push(id);
}

async function fetchAsync (url) {
  let response = await fetch(url);
  let data = await response.json();

  for (var car of data)
  {
    pushCar("makes", car.make, car.id); //Polja, fale neka treba popuniti!
    pushCar("models", car.model, car.id);
    pushCar("years", car.year, car.id);
    pushCar("drivetrains", car.drivetrain, car.id);
  }

  selectField("makes", "VW"); //Igras se samo sa ove dvije linije!
  selectField("models", "Passat");

  document.getElementById("json").innerHTML = JSON.stringify(filter, undefined, 2);
}
