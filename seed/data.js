const mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId;

const films = [
  {
    title: 'A New Hope',
    episode_id: 4,
    opening_crawl:
      "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
    director: 'George Lucas',
    producer: 'Gary Kurtz, Rick McCallum',
    release_date: '1977-05-25',
  },
  {
    title: 'The Empire Strikes Back',
    episode_id: 5,
    opening_crawl:
      'It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....',
    director: 'Irvin Kershner',
    producer: 'Gary Kurtz, Rick McCallum',
    release_date: '1980-05-17',
  },
  {
    title: 'Return of the Jedi',
    episode_id: 6,
    opening_crawl:
      'Luke Skywalker has returned to\r\nhis home planet of Tatooine in\r\nan attempt to rescue his\r\nfriend Han Solo from the\r\nclutches of the vile gangster\r\nJabba the Hutt.\r\n\r\nLittle does Luke know that the\r\nGALACTIC EMPIRE has secretly\r\nbegun construction on a new\r\narmored space station even\r\nmore powerful than the first\r\ndreaded Death Star.\r\n\r\nWhen completed, this ultimate\r\nweapon will spell certain doom\r\nfor the small band of rebels\r\nstruggling to restore freedom\r\nto the galaxy...',
    director: 'Richard Marquand',
    producer: 'Howard G. Kazanjian, George Lucas, Rick McCallum',
    release_date: '1983-05-25',
  },
  {
    title: 'The Phantom Menace',
    episode_id: 1,
    opening_crawl:
      'Turmoil has engulfed the\r\nGalactic Republic. The taxation\r\nof trade routes to outlying star\r\nsystems is in dispute.\r\n\r\nHoping to resolve the matter\r\nwith a blockade of deadly\r\nbattleships, the greedy Trade\r\nFederation has stopped all\r\nshipping to the small planet\r\nof Naboo.\r\n\r\nWhile the Congress of the\r\nRepublic endlessly debates\r\nthis alarming chain of events,\r\nthe Supreme Chancellor has\r\nsecretly dispatched two Jedi\r\nKnights, the guardians of\r\npeace and justice in the\r\ngalaxy, to settle the conflict....',
    director: 'George Lucas',
    producer: 'Rick McCallum',
    release_date: '1999-05-19',
  },
  {
    title: 'Attack of the Clones',
    episode_id: 2,
    opening_crawl:
      'There is unrest in the Galactic\r\nSenate. Several thousand solar\r\nsystems have declared their\r\nintentions to leave the Republic.\r\n\r\nThis separatist movement,\r\nunder the leadership of the\r\nmysterious Count Dooku, has\r\nmade it difficult for the limited\r\nnumber of Jedi Knights to maintain \r\npeace and order in the galaxy.\r\n\r\nSenator Amidala, the former\r\nQueen of Naboo, is returning\r\nto the Galactic Senate to vote\r\non the critical issue of creating\r\nan ARMY OF THE REPUBLIC\r\nto assist the overwhelmed\r\nJedi....',
    director: 'George Lucas',
    producer: 'Rick McCallum',
    release_date: '2002-05-16',
  },
  {
    title: 'Revenge of the Sith',
    episode_id: 3,
    opening_crawl:
      'War! The Republic is crumbling\r\nunder attacks by the ruthless\r\nSith Lord, Count Dooku.\r\nThere are heroes on both sides.\r\nEvil is everywhere.\r\n\r\nIn a stunning move, the\r\nfiendish droid leader, General\r\nGrievous, has swept into the\r\nRepublic capital and kidnapped\r\nChancellor Palpatine, leader of\r\nthe Galactic Senate.\r\n\r\nAs the Separatist Droid Army\r\nattempts to flee the besieged\r\ncapital with their valuable\r\nhostage, two Jedi Knights lead a\r\ndesperate mission to rescue the\r\ncaptive Chancellor....',
    director: 'George Lucas',
    producer: 'Rick McCallum',
    release_date: '2005-05-19',
  },
];

const planets = [
  {
    name: 'Tatooine',
    rotation_period: '23',
    orbital_period: '304',
    diameter: '10465',
    climate: 'arid',
    gravity: '1 standard',
    terrain: 'desert',
    surface_water: '1',
    population: '200000',
  },
  {
    name: 'Alderaan',
    rotation_period: '24',
    orbital_period: '364',
    diameter: '12500',
    climate: 'temperate',
    gravity: '1 standard',
    terrain: 'grasslands, mountains',
    surface_water: '40',
    population: '2000000000',
  },
  {
    name: 'Yavin IV',
    rotation_period: '24',
    orbital_period: '4818',
    diameter: '10200',
    climate: 'temperate, tropical',
    gravity: '1 standard',
    terrain: 'jungle, rainforests',
    surface_water: '8',
    population: '1000',
  },
  {
    name: 'Hoth',
    rotation_period: '23',
    orbital_period: '549',
    diameter: '7200',
    climate: 'frozen',
    gravity: '1.1 standard',
    terrain: 'tundra, ice caves, mountain ranges',
    surface_water: '100',
    population: 'unknown',
  },
  {
    name: 'Dagobah',
    rotation_period: '23',
    orbital_period: '341',
    diameter: '8900',
    climate: 'murky',
    gravity: 'N/A',
    terrain: 'swamp, jungles',
    surface_water: '8',
    population: 'unknown',
  },
  {
    name: 'Bespin',
    rotation_period: '12',
    orbital_period: '5110',
    diameter: '118000',
    climate: 'temperate',
    gravity: '1.5 (surface), 1 standard (Cloud City)',
    terrain: 'gas giant',
    surface_water: '0',
    population: '6000000',
  },
  {
    name: 'Endor',
    rotation_period: '18',
    orbital_period: '402',
    diameter: '4900',
    climate: 'temperate',
    gravity: '0.85 standard',
    terrain: 'forests, mountains, lakes',
    surface_water: '8',
    population: '30000000',
  },
  {
    name: 'Naboo',
    rotation_period: '26',
    orbital_period: '312',
    diameter: '12120',
    climate: 'temperate',
    gravity: '1 standard',
    terrain: 'grassy hills, swamps, forests, mountains',
    surface_water: '12',
    population: '4500000000',
  },
];

const vehicles = [
  {
    name: 'Sand Crawler',
    model: 'Digger Crawler',
    manufacturer: 'Corellia Mining Corporation',
    cost_in_credits: '150000',
    length: '36.8 ',
    max_atmosphering_speed: '30',
    crew: '46',
    passengers: '30',
    cargo_capacity: '50000',
    consumables: '2 months',
    vehicle_class: 'wheeled',
  },
  {
    name: 'T-16 skyhopper',
    model: 'T-16 skyhopper',
    manufacturer: 'Incom Corporation',
    cost_in_credits: '14500',
    length: '10.4 ',
    max_atmosphering_speed: '1200',
    crew: '1',
    passengers: '1',
    cargo_capacity: '50',
    consumables: '0',
    vehicle_class: 'repulsorcraft',
  },
  {
    name: 'X-34 landspeeder',
    model: 'X-34 landspeeder',
    manufacturer: 'SoroSuub Corporation',
    cost_in_credits: '10550',
    length: '3.4 ',
    max_atmosphering_speed: '250',
    crew: '1',
    passengers: '1',
    cargo_capacity: '5',
    consumables: 'unknown',
    vehicle_class: 'repulsorcraft',
  },
  {
    name: 'TIE/LN starfighter',
    model: 'Twin Ion Engine/Ln Starfighter',
    manufacturer: 'Sienar Fleet Systems',
    cost_in_credits: 'unknown',
    length: '6.4',
    max_atmosphering_speed: '1200',
    crew: '1',
    passengers: '0',
    cargo_capacity: '65',
    consumables: '2 days',
    vehicle_class: 'starfighter',
  },
  {
    name: 'Snowspeeder',
    model: 't-47 airspeeder',
    manufacturer: 'Incom corporation',
    cost_in_credits: 'unknown',
    length: '4.5',
    max_atmosphering_speed: '650',
    crew: '2',
    passengers: '0',
    cargo_capacity: '10',
    consumables: 'none',
    vehicle_class: 'airspeeder',
  },
  {
    name: 'TIE bomber',
    model: 'TIE/sa bomber',
    manufacturer: 'Sienar Fleet Systems',
    cost_in_credits: 'unknown',
    length: '7.8',
    max_atmosphering_speed: '850',
    crew: '1',
    passengers: '0',
    cargo_capacity: 'none',
    consumables: '2 days',
    vehicle_class: 'space/planetary bomber',
  },
  {
    name: 'AT-AT',
    model: 'All Terrain Armored Transport',
    manufacturer: 'Kuat Drive Yards, Imperial Department of Military Research',
    cost_in_credits: 'unknown',
    length: '20',
    max_atmosphering_speed: '60',
    crew: '5',
    passengers: '40',
    cargo_capacity: '1000',
    consumables: 'unknown',
    vehicle_class: 'assault walker',
  },
  {
    name: 'AT-ST',
    model: 'All Terrain Scout Transport',
    manufacturer: 'Kuat Drive Yards, Imperial Department of Military Research',
    cost_in_credits: 'unknown',
    length: '2',
    max_atmosphering_speed: '90',
    crew: '2',
    passengers: '0',
    cargo_capacity: '200',
    consumables: 'none',
    vehicle_class: 'walker',
  },
  {
    name: 'Storm IV Twin-Pod cloud car',
    model: 'Storm IV Twin-Pod',
    manufacturer: 'Bespin Motors',
    cost_in_credits: '75000',
    length: '7',
    max_atmosphering_speed: '1500',
    crew: '2',
    passengers: '0',
    cargo_capacity: '10',
    consumables: '1 day',
    vehicle_class: 'repulsorcraft',
  },
  {
    name: 'Sail barge',
    model: 'Modified Luxury Sail Barge',
    manufacturer: 'Ubrikkian Industries Custom Vehicle Division',
    cost_in_credits: '285000',
    length: '30',
    max_atmosphering_speed: '100',
    crew: '26',
    passengers: '500',
    cargo_capacity: '2000000',
    consumables: 'Live food tanks',
    vehicle_class: 'sail barge',
  },
];

const people = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    planet_id: ObjectId('6009959e9e67be8a792cf2de'),
    films: [
      ObjectId('6009959e9e67be8a792cf2dd'),
      ObjectId('6009959e9e67be8a792cf2dc'),
      ObjectId('6009959e9e67be8a792cf2d9'),
    ],
    vehicles: [
      ObjectId('6009959e9e67be8a792cf2e6'),
      ObjectId('6009959e9e67be8a792cf2e8'),
      ObjectId('6009959e9e67be8a792cf2ee'),
    ],
  },
  {
    name: 'C-3PO',
    height: '167',
    mass: '75',
    hair_color: 'n/a',
    skin_color: 'gold',
    eye_color: 'yellow',
    birth_year: '112BBY',
    gender: 'n/a',
    planet_id: ObjectId('6009959e9e67be8a792cf2e1'),
    films: [
      ObjectId('6009959e9e67be8a792cf2dd'),
      ObjectId('6009959e9e67be8a792cf2dc'),
      ObjectId('6009959e9e67be8a792cf2d9'),
      ObjectId('6009959e9e67be8a792cf2da'),
      ObjectId('6009959e9e67be8a792cf2d8'),
      ObjectId('6009959e9e67be8a792cf2db'),
    ],
    vehicles: [ObjectId('6009959e9e67be8a792cf2eb')],
  },
  {
    name: 'R2-D2',
    height: '96',
    mass: '32',
    hair_color: 'n/a',
    skin_color: 'white, blue',
    eye_color: 'red',
    birth_year: '33BBY',
    gender: 'n/a',
    planet_id: ObjectId('6009959e9e67be8a792cf2e4'),
    films: [
      ObjectId('6009959e9e67be8a792cf2dd'),
      ObjectId('6009959e9e67be8a792cf2dc'),
      ObjectId('6009959e9e67be8a792cf2d9'),
      ObjectId('6009959e9e67be8a792cf2da'),
      ObjectId('6009959e9e67be8a792cf2d8'),
      ObjectId('6009959e9e67be8a792cf2db'),
    ],
    vehicles: [],
  },
  {
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    hair_color: 'none',
    skin_color: 'white',
    eye_color: 'yellow',
    birth_year: '41.9BBY',
    gender: 'male',
    planet_id: ObjectId('6009959e9e67be8a792cf2e2'),
    films: [
      ObjectId('6009959e9e67be8a792cf2dd'),
      ObjectId('6009959e9e67be8a792cf2dc'),
      ObjectId('6009959e9e67be8a792cf2d9'),
      ObjectId('6009959e9e67be8a792cf2da'),
    ],
    vehicles: [
      ObjectId('6009959e9e67be8a792cf2e9'),
      ObjectId('6009959e9e67be8a792cf2ed'),
      ObjectId('6009959e9e67be8a792cf2e8'),
    ],
  },
  {
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '19BBY',
    gender: 'female',
    planet_id: ObjectId('6009959e9e67be8a792cf2e0'),
    films: [
      ObjectId('6009959e9e67be8a792cf2dd'),
      ObjectId('6009959e9e67be8a792cf2dc'),
      ObjectId('6009959e9e67be8a792cf2d9'),
      ObjectId('6009959e9e67be8a792cf2da'),
      ObjectId('6009959e9e67be8a792cf2d8'),
    ],
    vehicles: [ObjectId('6009959e9e67be8a792cf2e6'), ObjectId('6009959e9e67be8a792cf2ed')],
  },
  {
    name: 'Owen Lars',
    height: '178',
    mass: '120',
    hair_color: 'brown, grey',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '52BBY',
    gender: 'male',
    planet_id: ObjectId('6009959e9e67be8a792cf2e3'),
    films: [
      ObjectId('6009959e9e67be8a792cf2dd'),
      ObjectId('6009959e9e67be8a792cf2d9'),
      ObjectId('6009959e9e67be8a792cf2db'),
    ],
    vehicles: [ObjectId('6009959e9e67be8a792cf2ea'), ObjectId('6009959e9e67be8a792cf2ec')],
  },
  {
    name: 'Beru Whitesun lars',
    height: '165',
    mass: '75',
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '47BBY',
    gender: 'female',
    planet_id: ObjectId('6009959e9e67be8a792cf2e1'),
    films: [
      ObjectId('6009959e9e67be8a792cf2dc'),
      ObjectId('6009959e9e67be8a792cf2da'),
      ObjectId('6009959e9e67be8a792cf2db'),
    ],
    vehicles: [ObjectId('6009959e9e67be8a792cf2ea')],
  },
  {
    name: 'R5-D4',
    height: '97',
    mass: '32',
    hair_color: 'n/a',
    skin_color: 'white, red',
    eye_color: 'red',
    birth_year: 'unknown',
    gender: 'n/a',
    planet_id: ObjectId('6009959e9e67be8a792cf2e4'),
    films: [ObjectId('6009959e9e67be8a792cf2dc')],
    vehicles: [
      ObjectId('6009959e9e67be8a792cf2e7'),
      ObjectId('6009959e9e67be8a792cf2e8'),
      ObjectId('6009959e9e67be8a792cf2eb'),
      ObjectId('6009959e9e67be8a792cf2ed'),
    ],
  },
  {
    name: 'Biggs Darklighter',
    height: '183',
    mass: '84',
    hair_color: 'black',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '24BBY',
    gender: 'male',
    planet_id: ObjectId('6009959e9e67be8a792cf2e0'),
    films: [
      ObjectId('6009959e9e67be8a792cf2dd'),
      ObjectId('6009959e9e67be8a792cf2dc'),
      ObjectId('6009959e9e67be8a792cf2d9'),
    ],
    vehicles: [
      ObjectId('6009959e9e67be8a792cf2ef'),
      ObjectId('6009959e9e67be8a792cf2ea'),
      ObjectId('6009959e9e67be8a792cf2ec'),
      ObjectId('6009959e9e67be8a792cf2ee'),
    ],
  },
  {
    name: 'Obi-Wan Kenobi',
    height: '182',
    mass: '77',
    hair_color: 'auburn, white',
    skin_color: 'fair',
    eye_color: 'blue-gray',
    birth_year: '57BBY',
    gender: 'male',
    planet_id: ObjectId('6009959e9e67be8a792cf2df'),
    films: [
      ObjectId('6009959e9e67be8a792cf2dd'),
      ObjectId('6009959e9e67be8a792cf2dc'),
      ObjectId('6009959e9e67be8a792cf2d9'),
      ObjectId('6009959e9e67be8a792cf2da'),
      ObjectId('6009959e9e67be8a792cf2d8'),
      ObjectId('6009959e9e67be8a792cf2db'),
    ],
    vehicles: [ObjectId('6009959e9e67be8a792cf2e6'), ObjectId('6009959e9e67be8a792cf2e8')],
  },
];

module.exports = { films, planets, vehicles, people };