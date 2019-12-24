// You live in the city of Cartesia where all roads are laid out in a perfect grid.
// You arrived ten minutes too early to an appointment, so you decided to
// take the opportunity to go for a short walk. The city provides its citizens
//  with a Walk Generating App on their phones -- everytime you press the button
//  it sends you an array of one-letter strings representing directions to
//  walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block
//  in a direction and you know it takes you one minute to traverse one city block,
//  so create a function that will return true if the walk the app gives you will take
//  you exactly ten minutes (you don't want to be early or late!) and will, of course,
//   return you to your starting point. Return false otherwise.

// ['n','s','n','s','n','s','n','s','n','s']

function isValidWalk(walk) {
  if (walk.length !== 10) return false;

  walk = walk.join('');

  const n = walk.match(/n/g) || [];
  const s = walk.match(/s/g) || [];
  const e = walk.match(/e/g) || [];
  const w = walk.match(/w/g) || [];

  return n.length === s.length && e.length === w.length;
}

module.exports = isValidWalk;
