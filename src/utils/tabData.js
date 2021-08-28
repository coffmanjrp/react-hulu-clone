import {
  liveSportsLogo1,
  liveSportsLogo2,
  liveSportsLogo3,
  liveSportsLogo4,
  breakingNewsLogo1,
  breakingNewsLogo2,
  breakingNewsLogo3,
  breakingNewsLogo4,
  biggestEventsLogo1,
  biggestEventsLogo2,
  biggestEventsLogo3,
  biggestEventsLogo4,
  welcomeTabBg1,
  welcomeTabBg2,
  welcomeTabBg3,
  welcomeTabBg1Small,
  welcomeTabBg2Small,
  welcomeTabBg3Small,
} from '../img';

const tabData = [
  {
    id: 1,
    title: 'Live Sports',
    header: 'Live Sports',
    text: `Catch your games at home or on the go. Stream live games from
    major college and pro leagues including the NCAA&reg;, NBA, NHL,
    NFL, and more.`,
    logos: [
      {
        id: 1,
        image: liveSportsLogo1,
        alt: 'CBS',
      },
      { id: 2, image: liveSportsLogo2, alt: 'ESPN' },
      { id: 3, image: liveSportsLogo3, alt: 'NBCSN' },
      { id: 4, image: liveSportsLogo4, alt: 'NBC Golf' },
    ],
    legalText: `Live TV plan required. Regional restrictions, blackouts and
    additional terms apply. See details`,
    background: welcomeTabBg1,
    backgroundSmall: welcomeTabBg1Small,
  },
  {
    id: 2,
    title: 'Breaking News',
    header: 'Breaking News',
    text: `Keep pace with what's going on locally and globally with trusted
    opinions from all the top news networks.`,
    logos: [
      {
        id: 1,
        image: breakingNewsLogo1,
        alt: 'CBS',
      },
      { id: 2, image: breakingNewsLogo2, alt: 'ABC News' },
      { id: 3, image: breakingNewsLogo3, alt: 'CNN' },
      { id: 4, image: breakingNewsLogo4, alt: 'FOX News' },
    ],
    legalText: `Live TV plan required. Regional restrictions, blackouts and
    additional terms apply. See details`,
    background: welcomeTabBg2,
    backgroundSmall: welcomeTabBg2Small,
  },
  {
    id: 3,
    title: 'Biggest Events',
    header: 'Biggest Events',
    text: `Spectacular, can't-miss moments like the Olympics, Grammys&reg;,
    Oscars&reg;, Emmys&reg;, and more.`,
    logos: [
      {
        id: 1,
        image: biggestEventsLogo1,
        alt: 'Emmys',
      },
      { id: 2, image: biggestEventsLogo2, alt: 'Golden Globes' },
      { id: 3, image: biggestEventsLogo3, alt: 'Grammy' },
      { id: 4, image: biggestEventsLogo4, alt: 'Oscars' },
    ],
    legalText: `Live TV plan required. Regional restrictions, blackouts and
    additional terms apply. See details`,
    background: welcomeTabBg3,
    backgroundSmall: welcomeTabBg3Small,
  },
];

export default tabData;
