export const gamesData = [
  {
    id: 1,
    name: 'NUMBERS',
    bgColor: '#7886AA',
    rules: [
      {
        text: 'Connect pairs of the same numbers with a continuous line.',
      },
      {
        text: 'Lines go through the center of the cells, horizontally, vertically, or changing direction, and never twice through the same cell.',
      },
      {
        text: 'Lines cannot cross, branch off, or go through the cells with numbers.',
      },
    ],
    about: {
      text: "Numbers (Numberlink) is a type of logic puzzle involving finding paths to connect numbers in a grid. \nIn 1897, a slightly different form of the puzzle was printed in the Brooklyn Daily Eagle. Another early, printed version of Number Link can be found in Henry Ernest Dudeney's book Amusements in mathematics (1917) as a puzzle for motorists (puzzle no. 252). This puzzle type was popularized in Japan by Nikoli as Arukone and Nanbarinku. The only difference between Arukone and Nanbarinku is that in Arukone the clues are letter pairs (as in Dudeney's puzzle), while in Nanbarinku the clues are number pairs.",
    },
    icon: (
      <svg
        width='47'
        height='46'
        viewBox='0 0 47 46'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <rect
          x='1'
          y='0.5'
          width='45'
          height='45'
          stroke='black'
        />
        <path
          d='M16 0.5V45.5'
          stroke='black'
        />
        <path
          d='M31 0.5V45.5'
          stroke='black'
        />
        <path
          d='M46 15.5L1 15.5'
          stroke='black'
        />
        <path
          d='M46 30.5L1 30.5'
          stroke='black'
        />
        <path
          d='M46 9H38.5V39H46'
          stroke='black'
        />
        <path
          d='M1 38.5H23.5V23.5H8V8H23.5V0.5'
          stroke='black'
        />
      </svg>
    ),
  },
  {
    id: 2,
    name: 'HASHI',
    bgColor: '#AA7878',
    rules: [
      {
        text: 'Connect islands (the circles with numbers) with as many bridges as the number in the island.',
      },
      {
        text: 'There can be no more than two bridges between two islands.',
      },
      {
        text: 'Bridges cannot go across islands or other bridges.',
      },
      {
        text: 'The bridges will form a continuous link between all the islands.',
      },
    ],
    about: {
      text: 'Hashi (Hashiwokakero) is a type of logic puzzle published by Nikoli involving connecting islands. \nIt has also been published in English under the name Bridges or Chopsticks based on a translation: the hashi of the title, means bridge. It has also appeared in The Times under the name Hashi. In France, Denmark, the Netherlands, and Belgium it is published under the name Ai-Ki-Ai. Hashiwokakero first appeared in Puzzle Communication Nikoli in issue #31 at September 1990.',
    },
    icon: (
      <svg
        width='45'
        height='46'
        viewBox='0 0 45 46'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <g clip-path='url(#clip0_557_1897)'>
          <circle
            cx='7.5'
            cy='8'
            r='7'
            stroke='black'
          />
          <circle
            cx='7.5'
            cy='38'
            r='7'
            stroke='black'
          />
          <circle
            cx='22.5'
            cy='23'
            r='7'
            stroke='black'
          />
          <circle
            cx='37.5'
            cy='8'
            r='7'
            stroke='black'
          />
          <circle
            cx='37.5'
            cy='38'
            r='7'
            stroke='black'
          />
          <path
            d='M7.5 15.5V30.5'
            stroke='black'
          />
          <path
            d='M37.5 15.5V30.5'
            stroke='black'
          />
          <path
            d='M21 0.5V16.5'
            stroke='black'
          />
          <path
            d='M24 0.5V16.5'
            stroke='black'
          />
          <path
            d='M31 36.5L14 36.5'
            stroke='black'
          />
          <path
            d='M31 39.5L14 39.5'
            stroke='black'
          />
        </g>
        <defs>
          <clipPath id='clip0_557_1897'>
            <rect
              width='45'
              height='45'
              fill='white'
              transform='translate(0 0.5)'
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    id: 3,
    name: 'SLITHER',
    bgColor: '#78AA92',
    rules: [
      {
        text: 'Connect adjacent dots with vertical or horizontal lines to make a single loop.',
      },
      {
        text: 'The numbers indicate how many lines surround it, while empty cells may be surrounded by any number of lines.',
      },
      {
        text: 'The loop never crosses itself and never branches off.',
      },
    ],
    about: {
      text: 'Slitherlink puzzles, also known as Sli-Lin, Fences, Loop the Loop and Dotty Dilemma, were invented in Japan by Nikoli Puzzles around 1989.\nYet it seems that similar to the evolution of Battleship puzzles, Slitherlink was also based on an earlier 2-player game. Named Slither, this game involves two players competing against each other on a paper grid by linking gridline segments one after the other without crossing, branching or closing the loop. The player who is forced to cross, branch or close the loop is the looser.\nSlitherlink puzzles puzzles have become very popular in Japan, appearing in many magazines, books, newspapers, CD games and mobile phone portals. Slitherlink puzzles are also available for Nintendo DS gamers in Japan by Success Corporation and are estimated to be the third most popular number-logic puzzle in Japan after Sudoku and Kakuro.',
    },
    icon: (
      <svg
        width='49'
        height='50'
        viewBox='0 0 49 50'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <circle
          cx='47'
          cy='2.5'
          r='2'
          fill='black'
        />
        <circle
          cx='47'
          cy='32.5'
          r='2'
          fill='black'
        />
        <circle
          cx='47'
          cy='17.5'
          r='2'
          fill='black'
        />
        <circle
          cx='47'
          cy='47.5'
          r='2'
          fill='black'
        />
        <circle
          cx='2'
          cy='2.5'
          r='2'
          fill='black'
        />
        <circle
          cx='2'
          cy='32.5'
          r='2'
          fill='black'
        />
        <circle
          cx='2'
          cy='17.5'
          r='2'
          fill='black'
        />
        <circle
          cx='2'
          cy='47.5'
          r='2'
          fill='black'
        />
        <circle
          cx='17'
          cy='2.5'
          r='2'
          fill='black'
        />
        <circle
          cx='17'
          cy='32.5'
          r='2'
          fill='black'
        />
        <circle
          cx='17'
          cy='17.5'
          r='2'
          fill='black'
        />
        <circle
          cx='17'
          cy='47.5'
          r='2'
          fill='black'
        />
        <circle
          cx='32'
          cy='2.5'
          r='2'
          fill='black'
        />
        <circle
          cx='32'
          cy='32.5'
          r='2'
          fill='black'
        />
        <circle
          cx='32'
          cy='17.5'
          r='2'
          fill='black'
        />
        <circle
          cx='32'
          cy='47.5'
          r='2'
          fill='black'
        />
        <path
          d='M2 32.5V17.5H17V32.5H32V47.5H47V32.5V17.5V2.5H32'
          stroke='black'
        />
      </svg>
    ),
  },
  {
    id: 4,
    name: 'YAJLIN',
    bgColor: '#9D78AA',
    rules: [
      {
        text: 'Draw a line to make a single loop.',
      },
      {
        text: 'Lines pass through the centers of cells, horizontally, vertically, or turning. The loop never crosses itself, branches off, or goes through the same cell twice.',
      },
      {
        text: 'The numbers show how many black cells there are in the direction of the arrow.',
      },
      {
        text: 'The loop does not pass through the black cells or the cells with numbers, and black cells cannot touch horizontally or vertically.',
      },
    ],
    about: {
      text: 'Yajilin was first published in 1999 by Nikoli in quarterly Communication 86; the original author was Nekoyama Tenpo.\nThe puzzle’s name comes from a combination of the Japanese word ‘yajirushi’, meaning arrow, and the English word ‘link’. As a loop puzzle, Yajilin arose from other “visit all cells” loop styles; the addition of unknown unvisited squares that must be determined gives it its unique character. At Grandmaster Puzzles, the rules for Yajilin have been slightly altered by allowing unused cells without arrow clues to allow greater diversity in puzzle design and themes.',
    },
    icon: (
      <svg
        width='47'
        height='46'
        viewBox='0 0 47 46'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <rect
          x='1'
          y='0.5'
          width='45'
          height='45'
          stroke='black'
        />
        <path
          d='M16 0.5V45.5'
          stroke='black'
        />
        <path
          d='M31 0.5V45.5'
          stroke='black'
        />
        <path
          d='M46 15.5L1 15.5'
          stroke='black'
        />
        <path
          d='M46 30.5L1 30.5'
          stroke='black'
        />
        <rect
          x='31'
          y='0.5'
          width='15'
          height='15'
          fill='black'
        />
        <path
          d='M23.5 1V8H8.5V1M46 38H38.5H8.5V45'
          stroke='black'
        />
        <rect
          x='16'
          y='15.5'
          width='15'
          height='15'
          fill='black'
        />
        <path
          d='M38.5 17.5L35.6132 22.5H41.3868L38.5 17.5ZM39 28.5V22H38V28.5H39Z'
          fill='black'
        />
        <path
          d='M14.5 23L9.5 20.1132V25.8868L14.5 23ZM3.5 23.5H10V22.5H3.5V23.5Z'
          fill='black'
        />
      </svg>
    ),
  },
  {
    id: 5,
    name: 'NURIKABE',
    bgColor: '#AAA578',
    rules: [
      {
        text: 'A number tells the number of continuous white cells. ',
      },
      {
        text: 'Each area of white cells contains only one number in it and they are separated by black cells.',
      },
      {
        text: 'You cannot fill in cells containing numbers.',
      },
      {
        text: 'The black cells are linked to be a continuous wall.',
      },
      {
        text: 'Black cells cannot be linked to be 2×2 square or larger.',
      },
    ],
    about: {
      text: 'Nurikabe is a binary determination puzzle named for an invisible wall in Japanese folklore that blocks roads and delays foot travel. Nurikabe was apparently invented and named by Nikoli; other names (and attempts at localization) for the puzzle include Cell Structure and Islands in the Stream.\nNurikabe was first developed in the 33rd issue of (Puzzle Communication) Nikoli at March 1991. It soon created a sensation, and has appeared in all issues of that publication from the 38th to the present.',
    },
    icon: (
      <svg
        width='47'
        height='46'
        viewBox='0 0 47 46'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <rect
          x='1'
          y='0.5'
          width='45'
          height='45'
          stroke='black'
        />
        <path
          d='M16 0.5V45.5'
          stroke='black'
        />
        <path
          d='M31 0.5V45.5'
          stroke='black'
        />
        <path
          d='M46 30.5L1 30.5'
          stroke='black'
        />
        <path
          d='M46 15.5L1 15.5'
          stroke='black'
        />
        <rect
          x='16'
          y='30.5'
          width='15'
          height='15'
          fill='black'
        />
        <rect
          x='31'
          y='0.5'
          width='15'
          height='15'
          fill='black'
        />
        <rect
          x='1'
          y='15.5'
          width='15'
          height='15'
          fill='black'
        />
      </svg>
    ),
  },
  {
    id: 6,
    name: 'MASYU',
    bgColor: '#9E9E9E',
    rules: [
      {
        text: 'Make a single loop with lines passing through the centers of cells, horizontally or vertically. The loop never crosses itself, branches off, or goes through the same cell twice.',
      },
      {
        text: 'Lines must pass through all cells with black and white circles.',
      },
      {
        text: 'Lines passing through white circles must pass straight through its cell, and make a right-angled turn in at least one of the cells next to the white circle.',
      },
      {
        text: 'Lines passing through black circles must make a right-angled turn in its cell, then it must go straight through the next cell (till the middle of the second cell) on both sides.',
      },
    ],
    about: {
      text: 'Masyu is a type of logic puzzle designed and published by Nikoli. The purpose of its creation was to present a puzzle that uses no numbers or letters and yet retains depth and aesthetics.\nMasyu was first published in 2000 by Nikoli in quarterly Communication 90. Masyu followed an earlier loop puzzle that used only the white circle rule. The original name was Shiro Shinju Kuro Shinju (“White Pearl Black Pearl”), but a misreading of the kanji for shinju by the president of Nikoli gave it the name Masyu meaning “Evil Influence”.',
    },
    icon: (
      <svg
        width='45'
        height='46'
        viewBox='0 0 45 46'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <circle
          cx='7.5'
          cy='38'
          r='7.5'
          fill='black'
        />
        <circle
          cx='37.5'
          cy='23'
          r='7'
          stroke='black'
        />
        <circle
          cx='7.5'
          cy='8'
          r='7'
          stroke='black'
        />
        <path
          d='M0.5 8H22.5V38H37.5V8H45M7.5 45.5V23H0'
          stroke='black'
        />
      </svg>
    ),
  },
];
