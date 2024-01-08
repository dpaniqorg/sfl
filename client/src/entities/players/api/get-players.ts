import { TPlayer } from '../types/index.js';

import { TCaptain } from '../../captains/types/index.js';

// export async function getPlayersList(page?: number): Promise<TPlayer[]> {
//   const data = await api
//     .post<{ captains: TCaptain[]; page: number }>('captains', {})
//     .json();

//   return data.ca
// }

export async function getPlayersListMock(): Promise<TPlayer[]> {
  /**
    JG.repeat(5, 10, {
      id: JG.objectId(),
      nickname: JG.loremIpsum({units: 'words', count: 1}),
      name: JG.loremIpsum({units: 'words', count: 1}),
      surname: JG.loremIpsum({units: 'words', count: 1}),
      avatar: JG.integer(100, 1000),
      totalGames: JG.integer(50, 100),
      wonGames: JG.integer(0, 50),
      draws: JG.integer(0, 30),
      lostGames: JG.integer(0, 50),
      maxWinStreak: JG.integer(0, 10),
      maxLostStreak: JG.integer(50, 100),
    });
  */
  return [
    {
      id: '650b2a03d479ec978a0220df',
      name: 'anim',
      draws: 18,
      avatar: 147,
      number: 196,
      isCaptain: false,
      surname: 'cupidatat',
      nickname: 'ea',
      wonGames: 18,
      lostGames: 10,
      totalGames: 79,
      maxWinStreak: 6,
      maxLostStreak: 54,
    },
    {
      id: '650b2a03c6263cebc8f699df',
      name: 'ex',
      draws: 9,
      avatar: 225,
      number: 43,
      isCaptain: false,
      surname: 'do',
      nickname: 'culpa',
      wonGames: 33,
      lostGames: 1,
      totalGames: 83,
      maxWinStreak: 1,
      maxLostStreak: 79,
    },
    {
      id: '650b2a03b0e11a9c25f39d66',
      name: 'ullamco',
      draws: 1,
      avatar: 163,
      number: 108,
      isCaptain: false,
      surname: 'elit',
      nickname: 'eiusmod',
      wonGames: 8,
      lostGames: 21,
      totalGames: 67,
      maxWinStreak: 10,
      maxLostStreak: 55,
    },
    {
      id: '650b2a0377f34cf9110c21e3',
      name: 'eiusmod',
      draws: 5,
      avatar: 189,
      number: 157,
      isCaptain: false,
      surname: 'esse',
      nickname: 'commodo',
      wonGames: 33,
      lostGames: 33,
      totalGames: 69,
      maxWinStreak: 1,
      maxLostStreak: 80,
    },
    {
      id: '650b2a032776daf9260cdab5',
      name: 'non',
      draws: 27,
      avatar: 130,
      number: 322,
      isCaptain: false,
      surname: 'laboris',
      nickname: 'ut',
      wonGames: 34,
      lostGames: 16,
      totalGames: 89,
      maxWinStreak: 4,
      maxLostStreak: 77,
    },
    {
      id: '650b2a037506346bf6090fb3',
      name: 'commodo',
      draws: 11,
      avatar: 455,
      number: 176,
      isCaptain: false,
      surname: 'cillum',
      nickname: 'occaecat',
      wonGames: 50,
      lostGames: 11,
      totalGames: 88,
      maxWinStreak: 3,
      maxLostStreak: 82,
    },
    {
      id: '650b2a037c9bf68c295fef9d',
      name: 'qui',
      draws: 14,
      avatar: 130,
      number: 209,
      isCaptain: false,
      surname: 'ipsum',
      nickname: 'minim',
      wonGames: 24,
      lostGames: 3,
      totalGames: 100,
      maxWinStreak: 2,
      maxLostStreak: 50,
    },
    {
      id: '650b2a03df49062420a98df8',
      name: 'in',
      draws: 14,
      avatar: 444,
      number: 245,
      isCaptain: false,
      surname: 'do',
      nickname: 'dolore',
      wonGames: 47,
      lostGames: 36,
      totalGames: 73,
      maxWinStreak: 7,
      maxLostStreak: 95,
    },
    {
      id: '650b2a03d62ad15bb9dacd46',
      name: 'consequat',
      draws: 10,
      avatar: 225,
      number: 37,
      isCaptain: false,
      surname: 'ipsum',
      nickname: 'ullamco',
      wonGames: 18,
      lostGames: 4,
      totalGames: 62,
      maxWinStreak: 2,
      maxLostStreak: 76,
    },
    {
      id: '650b2a036f105779ee1f0476',
      name: 'anim',
      draws: 18,
      avatar: 271,
      number: 314,
      isCaptain: false,
      surname: 'amet',
      nickname: 'ea',
      wonGames: 39,
      lostGames: 46,
      totalGames: 84,
      maxWinStreak: 7,
      maxLostStreak: 75,
    },
    {
      id: '650b2a037dc181559ddd5cca',
      name: 'aliqua',
      draws: 22,
      avatar: 240,
      number: 302,
      isCaptain: false,
      surname: 'ut',
      nickname: 'deserunt',
      wonGames: 16,
      lostGames: 3,
      totalGames: 54,
      maxWinStreak: 2,
      maxLostStreak: 61,
    },
    {
      id: '650b2a033d3f9c805622a4af',
      name: 'duis',
      draws: 8,
      avatar: 337,
      number: 291,
      isCaptain: false,
      surname: 'veniam',
      nickname: 'minim',
      wonGames: 12,
      lostGames: 36,
      totalGames: 88,
      maxWinStreak: 9,
      maxLostStreak: 99,
    },
    {
      id: '650b2a034cc1b5d1077c97c9',
      name: 'Lorem',
      draws: 5,
      avatar: 234,
      number: 147,
      isCaptain: false,
      surname: 'culpa',
      nickname: 'aliqua',
      wonGames: 26,
      lostGames: 10,
      totalGames: 96,
      maxWinStreak: 0,
      maxLostStreak: 88,
    },
    {
      id: '650b2a034cc1b5d1077c97c9ddd',
      name: 'Bo',
      draws: 5,
      avatar: 17,
      number: 27,
      isCaptain: false,
      surname: 'Bogdan',
      nickname: 'Gromov',
      wonGames: 26,
      lostGames: 10,
      totalGames: 96,
      maxWinStreak: 6,
      maxLostStreak: 88,
    },
  ];
}
