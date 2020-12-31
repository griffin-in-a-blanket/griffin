import cap from '../../images/bottle-cap.png'
import ice from '../../images/ice.png'
import paw from '../../images/paw.png'

export const answer = ['No! You will not like Griffin. This is impossible, Griffin is great.', 'You will find Griffin tolerable.', 'Yes, you will probably get along with Griffin.', "Yes, you'll love Griffin and he is your ideal cat. You should steal him."];

export const traits = ['clingy', 'independent', 'quiet', 'loud', 'floofy', 'shorthair', 'smol boi', 'big boi', 'aggressive', 'mellow', 'social', 'shy', 'affectionate', 'anxious', 'hypoallergenic', "i don't like cats"];

export const griffinTraits = ['clingy', 'independent', 'quiet', 'floofy', 'smol boi', 'mellow', 'social', 'affectionate', 'hypoallergenic'];

export const questions= [
  {
    id : 0,
    'question': "What is Griffin's favorite toy?",
    'A': "Expensive cat tree.",
    'B': "Toy mouse.",
    'C': "Animatronic flippity fish toy.",
    'D': "Bottle cap.",
    'answer': 'D',
    'excerpt': 'Yup. You can get him all the toys in a world but at 4AM, all you hear is the sound of a bottle cap sliding around on the floor.',
    'img': cap,
    'alt': '2 bottle caps'
  },
  {
    id: 1,
    'question': "Griffin does not usually knock items off a table unless it's a(n)...",
    'A': "iPhone,",
    'B': "ice cube.",
    'C': "picture frame.",
    'D': "bottles",
    'answer': 'B',
    'excerpt': "We don't know what Griffin has against ice cubes. He should /chill/ out.",
    'img': ice,
    'alt': 'Illustration of a chill ice cube... chilling.'
  },
  {
    id: 2,
    'question': "Which one of these tricks can Griffin perform?",
    'A': 'Stand on his hind legs.',
    'B': 'Give you his paw.',
    'C': 'Speak.',
    'D': 'Use the toilet.',
    'answer': 'B',
    'excerpt': "It would be awesome if Griffin can use the toilet but giving his paw is pretty cool too.",
    'img': paw,
    'alt': "Illustration of a cat paw (BEANS!) in all it's glory."
  }
]