const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);

    
    const bListPkmn = pokémon.filter( p => p.name[0] === "B" );
    const pkmnIds = pokémon.map( p => p.id )
    const evens =pokémon.filter( ids => ids.id % 3 == 0 ).map(id => id.name);
    console.log(evens)
    const evens1 =pokémon.filter( ids => ids.types.includes("fire")).map(id => id.name);
    console.log(evens1)
    const evens2 =pokémon.filter( ids => ids.types.length>1).map(id => id.name);
    console.log(evens2)
    const evens3 =pokémon.map(id => id.name);
    console.log(evens3)
    const evens4 =pokémon.filter( ids => ids.id>99).map(id => id.name);
    console.log(evens4)
    const evens5 =pokémon.filter( ids => ids.types.includes("poison")).map(id => id.name);
    console.log(evens5)
    const evens6 =pokémon.filter( ids => ids.types[1]=="flying").map(id => id.types[0]);
    console.log(evens6)
    const evens7 =pokémon.filter( ids => ids.types.includes("normal"));
    console.log(evens7.length)







