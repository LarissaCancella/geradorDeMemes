import memeMaker from '@erickwendel/meme-maker'

const options = {
  image: './img/meme.jpg',         // Required
  outfile: './img/incriveis-meme.png',  // Required
  topText: 'TODAY IM',            // Required
  bottomText: 'AN ASS',           // Optional
}

memeMaker(options).then(_ => {
  console.log('Image saved: ' + options.outfile)
}).catch(error => console.log(error));