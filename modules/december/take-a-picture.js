// You are standing on top of an amazing Himalayan mountain.
// The view is absolutely breathtaking! you want to take a picture on your phone,
// but... your memory is full again! ok, time to sort through
// your shuffled photos and make some space...

// Given a gallery of photos, write a function to sort through your pictures.
// You get a random hard disk drive full of pics, you must return an array with
// the 5 most recent ones PLUS the next one (same year and number following the one of the last).
// You will always get at least a photo and all pics will be in the format YYYY.imgN

// Examples:
// sortPhotos["2016.img1","2016.img2","2015.img3","2016.img4","2013.img5"]) ==["2013.img5","2015.img3","2016.img1","2016.img2","2016.img4","2016.img5"]
// sortPhotos["2016.img1"]) ==["2016.img1","2016.img2"]

// sortPhotos(
//   ["2016.img1","2013.img3","2016.img2","2015.img3","2012.img7","2016.img4","2013.img5"]
//   ),["2013.img5","2015.img3","2016.img1","2016.img2","2016.img4","2016.img5"]);

function sortPhotos(pics) {
  var collator = new Intl.Collator(undefined, {
    numeric: true,
    sensitivity: 'base'
  });

  pics.sort(collator.compare);
  pics.splice(0, pics.length - 5);

  const lastWord = pics[pics.length - 1];
  let lastInt = lastWord.substr(lastWord.lastIndexOf('g') + 1);

  pics.push(
    lastWord.substr(0, lastWord.lastIndexOf('g') + 1) + (Number(lastInt) + 1)
  );

  return pics;
}

module.exports = sortPhotos;
