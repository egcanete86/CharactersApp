import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from "rxjs";
import { Personaje } from '../interfaces/personajes';

@Injectable({
  providedIn: 'root'
})
export class PersonajeApiService {

  protected characters: Personaje[];

  constructor() {
    this.characters = this.buildCharacters();
  }

  private getCharacters(): number[] {
    const charactersArr = Array.from(Array(this.characters.length - 1));
    return charactersArr.map((_, index) => index + 1);
  }

  public getCharacterOptions(): Observable<Personaje[]> {
    let mixedCharacters = this.getCharacters().sort(() => Math.random() - 0.5);
    mixedCharacters = mixedCharacters.splice(0, 4)
    if (mixedCharacters.length !== 4) throw 'Characters must be 4';
    const [a, b, c, d] = mixedCharacters;
    return of([this.characters[a], this.characters[b], this.characters[c], this.characters[d]])
  }


  private buildCharacters(): Personaje[] {
    return [
      {
        id: 1,
        name: "Abu",
        fileName: "abu"
      },
      {
        id: 2,
        name: "Aladdin",
        fileName: "aladdin"
      },
      {
        id: 3,
        name: "Amber",
        fileName: "amber"
      },
      {
        id: 4,
        name: "Anna",
        fileName: "ana"
      },
      {
        id: 5,
        name: "Antonio",
        fileName: "antonio"
      },
      {
        id: 6,
        name: "Ariel",
        fileName: "ariel"
      },
      {
        id: 7,
        name: "Aurora",
        fileName: "aurora"
      },
      {
        id: 8,
        name: "Bambie",
        fileName: "bambie"
      },
      {
        id: 9,
        name: "Baymax",
        fileName: "baymax"
      },
      {
        id: 10,
        name: "Bestia",
        fileName: "beast"
      },
      {
        id: 11,
        name: "Bella",
        fileName: "bella"
      },
      {
        id: 12,
        name: "Blancanieves",
        fileName: "blancanieves"
      },
      {
        id: 13,
        name: "Boris",
        fileName: "boris"
      },
      {
        id: 14,
        name: "Camilo",
        fileName: "camilo"
      },
      {
        id: 15,
        name: "Capitán América",
        fileName: "capitan_america"
      },
      {
        id: 16,
        name: "Capitán Garfio",
        fileName: "capitan_garfio"
      },
      {
        id: 17,
        name: "Cenicienta",
        fileName: "cenicienta"
      },
      {
        id: 18,
        name: "Chip",
        fileName: "chip"
      },
      {
        id: 19,
        name: "Daisy",
        fileName: "daisy"
      },
      {
        id: 20,
        name: "Dante",
        fileName: "dante"
      },
      {
        id: 21,
        name: "Dash",
        fileName: "dash"
      },
      {
        id: 22,
        name: "Demi",
        fileName: "demi"
      },
      {
        id: 23,
        name: "Din Don",
        fileName: "din_don"
      },
      {
        id: 24,
        name: "Donald",
        fileName: "donald"
      },
      {
        id: 25,
        name: "Elena",
        fileName: "elena"
      },
      {
        id: 26,
        name: "Elsa",
        fileName: "elsa"
      },
      {
        id: 27,
        name: "Ernesto",
        fileName: "ernesto"
      },
      {
        id: 28,
        name: "Flynn Rider",
        fileName: "eugine"
      },
      {
        id: 29,
        name: "Frozono",
        fileName: "frozono"
      },
      {
        id: 30,
        name: "Genio",
        fileName: "genio"
      },
      {
        id: 31,
        name: "Goofy",
        fileName: "goofy"
      },
      {
        id: 32,
        name: "Hector",
        fileName: "hector"
      },
      {
        id: 33,
        name: "Honey Lemon",
        fileName: "honey_lemon"
      },
      {
        id: 34,
        name: "Hulk",
        fileName: "hulk"
      },
      {
        id: 35,
        name: "Iron Man",
        fileName: "iron_man"
      },
      {
        id: 36,
        name: "Isabella",
        fileName: "isabella"
      },
      {
        id: 37,
        name: "Jack Jack",
        fileName: "jack_jack"
      },
      {
        id: 38,
        name: "Jazmín",
        fileName: "jazmine"
      },
      {
        id: 39,
        name: "Kim Possible",
        fileName: "kim_possible"
      },
      {
        id: 40,
        name: "Lobito",
        fileName: "lobito"
      },
      {
        id: 41,
        name: "Lumiere",
        fileName: "lumiere"
      },
      {
        id: 42,
        name: "Maui",
        fileName: "maui"
      },
      {
        id: 43,
        name: "Maximus",
        fileName: "maximus"
      },
      {
        id: 44,
        name: "Merida",
        fileName: "merida"
      },
      {
        id: 45,
        name: "Mickey Mouse",
        fileName: "mickey"
      },
      {
        id: 46,
        name: "Migs",
        fileName: "migs"
      },
      {
        id: 47,
        name: "Miguel",
        fileName: "miguel"
      },
      {
        id: 48,
        name: "Minnie Mouse",
        fileName: "minnie"
      },
      {
        id: 49,
        name: "Mirabel",
        fileName: "mirabel"
      },
      {
        id: 50,
        name: "Miranda",
        fileName: "miranda"
      },
      {
        id: 51,
        name: "Moana",
        fileName: "moana"
      },
      {
        id: 52,
        name: "Mufasa",
        fileName: "mufasa"
      },
      {
        id: 53,
        name: "Mulan",
        fileName: "mulan"
      },
      {
        id: 54,
        name: "Mushu",
        fileName: "mushu"
      },
      {
        id: 55,
        name: "Olaf",
        fileName: "olaf"
      },
      {
        id: 56,
        name: "Oxana",
        fileName: "oxana"
      },
      {
        id: 57,
        name: "Pascal",
        fileName: "pascal"
      },
      {
        id: 58,
        name: "Peter Pan",
        fileName: "peter_pan"
      },
      {
        id: 59,
        name: "Pocahontas",
        fileName: "pocahontas"
      },
      {
        id: 60,
        name: "Pua",
        fileName: "pua"
      },
      {
        id: 61,
        name: "Pumba",
        fileName: "pumba"
      },
      {
        id: 62,
        name: "Rafiki",
        fileName: "rafiki"
      },
      {
        id: 63,
        name: "Rajah",
        fileName: "rajah"
      },
      {
        id: 64,
        name: "Ralph",
        fileName: "ralph"
      },
      {
        id: 65,
        name: "Rapunzel",
        fileName: "rapunzel"
      },
      {
        id: 66,
        name: "Robert",
        fileName: "robert"
      },
      {
        id: 67,
        name: "Sebastian",
        fileName: "sebastian"
      },
      {
        id: 68,
        name: "Señora Potts",
        fileName: "senora_potts"
      },
      {
        id: 69,
        name: "Simba",
        fileName: "simba"
      },
      {
        id: 70,
        name: "Skylar",
        fileName: "skylar"
      },
      {
        id: 71,
        name: "Sofia",
        fileName: "sofia"
      },
      {
        id: 72,
        name: "Spiderman",
        fileName: "spiderman"
      },
      {
        id: 73,
        name: "Stitch",
        fileName: "stich"
      },
      {
        id: 74,
        name: "Thor",
        fileName: "thor"
      },
      {
        id: 75,
        name: "Tiana",
        fileName: "tiana"
      },
      {
        id: 76,
        name: "Timon",
        fileName: "timon"
      },
      {
        id: 77,
        name: "Tinkerbell",
        fileName: "tinkerbell"
      },
      {
        id: 78,
        name: "Ursula",
        fileName: "ursula"
      },
      {
        id: 79,
        name: "Vampirina",
        fileName: "vampirina"
      },
      {
        id: 80,
        name: "Vanellope",
        fileName: "vanellope"
      },
      {
        id: 81,
        name: "Violeta",
        fileName: "violeta"
      },
      {
        id: 82,
        name: "Wasabi",
        fileName: "wasabi"
      },
      {
        id: 83,
        name: "Gregoria",
        fileName: "gregoria"
      },
      {
        id: 84,
        name: "Jafar",
        fileName: "jafar"
      },
      {
        id: 85,
        name: "Li Shang",
        fileName: "li_shang"
      },
      {
        id: 86,
        name: "Wendy",
        fileName: "wendy"
      }
    ]
  }

}
