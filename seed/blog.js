const db = require('../db')
const Comment = require('../models/comment')
const Content = require('../models/content')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  Comment.collection.drop()
  Content.collection.drop()
  const madrid = await new Content({
    name: 'MADRID',
    description1: 'TOP 10 THINGS TO DO IN MADRID',
    description2:
      '🇪🇸 Go to a Real Madrid Fútbol game at Santiago Bernabeu Stadium',
    description3: '🇪🇸 Visit the Museo Nacional del Prado',
    description4: '🇪🇸 Eat at the Mercado de San Miguel',
    description5: '🇪🇸 Rent a row boat at Parque del Retiro',
    description6: '🇪🇸 Take a tour of the Royal Palace',
    description7: '🇪🇸 Shop around in Sol',
    description8: '🇪🇸 Enjoy a picnic in Parque del Retiro',
    description9: '🇪🇸 Go to the Temple of Debod for sunset',
    description10:
      '🇪🇸 Take a tour of Palacio Real de Madrid and Santa María la Real de La Almudena',
    description11: '🇪🇸 Thrift shop through Malasaña',
    image:
      'https://theculturetrip.com/wp-content/uploads/2017/02/cibeles-palace-one-of-the-symbols-of-the-city-of-madrid.jpg'
  })
  await madrid.save()
  const lisbon = await new Content({
    name: 'LISBON',
    description1: 'TOP 10 THINGS TO DO IN LISBON',
    description2: '🇵🇹 Take a day trip to Sintra to explore Peña Palace',
    description3: '🇵🇹 Ride a tram through the city',
    description4: '🇵🇹 Book a wine tour of the Douro Valley',
    description5: '🇵🇹 Visit the National Azulejo Museum ',
    description6:
      '🇵🇹 Wait on line at Pasteis de Belem for the best pasties de nata',
    description7: '🇵🇹 Stop by the Belem Tower',
    description8: '🇵🇹 Sit in Rosso Square',
    description9: '🇵🇹 Shop around the Praca de Comercio',
    description10:
      '🇵🇹 Take the Santa Justa elevator to the top for amazing views',
    description11: '🇵🇹 Walk up to the Alfama District',
    image:
      'https://afar-production.imgix.net/uploads/images/post_images/images/lBwKh4NcNJ/original_open-uri20130227-3596-nnqtp9?1383805514?ixlib=rails-0.3.0&auto=format%2Ccompress&crop=entropy&fit=crop&h=719&q=80&w=954'
  })
  await lisbon.save()
  const london = await new Content({
    name: 'LONDON',
    description1: 'TOP 10 THINGS TO DO IN LONDON',
    description2: '🇬🇧 Walk by Big Ben and the Houses of Parliament ',
    description3: '🇬🇧 Visit Westminster Abbey',
    description4: '🇬🇧 Eat at Borough Market',
    description5: '🇬🇧 Enjoy high tea at Harrods',
    description6: '🇬🇧 See a Broadway show ',
    description7: '🇬🇧 Watch the changing of the guards at Buckingham Palace',
    description8: '🇬🇧 Take photos of the colorful homes in Notting Hill',
    description9: '🇬🇧 Stroll through Hyde Park',
    description10:
      '🇬🇧 Get tickets to the Tower of London and see the Crown Jewels',
    description11: '🇬🇧 Shop for vintage clothes in the Camden Market',
    image:
      'https://img.freepik.com/premium-photo/big-ben-clock-tower-london-bus_79295-6753.jpg?w=2000'
  })
  await london.save()
  const barcelona = await new Content({
    name: 'BARCELONA',
    description1: 'TOP 10 THINGS TO DO IN BARCELONA',
    description2: '🇪🇸 Walk through the Gothic Quarter',
    description3: '🇪🇸 Visit Gaudi Park Guell or Casa Milá',
    description4: '🇪🇸 Take a tour of La Sagrada Familia ',
    description5: '🇪🇸 Shop around Las Ramblas ',
    description6: '🇪🇸 Eat at La Boqueria',
    description7: '🇪🇸 Drink sangria by the beach',
    description8: '🇪🇸 Stroll through the Plaza de Catalunya',
    description9: '🇪🇸 Stop by the Picasso Museum',
    description10: '🇪🇸 Visit the Barcelona City History Museum',
    description11: '🇪🇸 Go to a FC Barcelona game at Camp Nou',
    image:
      'https://lp-cms-production.imgix.net/2019-06/8ae1c56041e64517e29372a889f1beb7-la-sagrada-familia.jpg'
  })
  await barcelona.save()
  const paris = await new Content({
    name: 'PARIS',
    description1: 'TOP 10 THINGS TO DO IN PARIS',
    description2: '🇫🇷 Picnic nearby the Eiffel Tower',
    description3: '🇫🇷 Take a river boat on the Seine',
    description4: '🇫🇷 Visit the Arc de Triomphe',
    description5: '🇫🇷 Indulge in croissants everyday at a Parisian Cafe',
    description6: '🇫🇷 Take a tour of Versailles',
    description7: '🇫🇷 Stroll through the Louvre and check out the Mona Lisa',
    description8:
      '🇫🇷 Walk across Pont Notre-Dame and enjoy the breathtaking views',
    description9:
      '🇫🇷 Make sure to check out Marché aux Puces de Clignancour flea market',
    description10: '🇫🇷 Visit the Luxemburg Gardens',
    description11: "🇫🇷 Take a tour of Musée d'Orsay",
    image:
      'https://cdn.britannica.com/54/75854-050-E27E66C0/Eiffel-Tower-Paris.jpg'
  })
  await paris.save()
  const amsterdam = await new Content({
    name: 'AMSTERDAM',
    description1: 'TOP 10 THINGS TO DO IN AMSTERDAM',
    description2: '🇳🇱 Ride a bike through the city',
    description3: '🇳🇱 Book a Canal Cruise',
    description4: '🇳🇱 Visit the Anne Frank House',
    description5: '🇳🇱 Take a tour of the Van Gogh Museum',
    description6: '🇳🇱 Drink beer at the Heineken Experience',
    description7: '🇳🇱 Eat stroopwaffels from a local Farmers Market',
    description8: '🇳🇱 Pop into the Cheese Museum',
    description9: '🇳🇱 Walk around Rijksmuseum',
    description10: '🇳🇱 Go on a food tour',
    description11: '🇳🇱 Enjoy the Heineken Experience',
    image:
      'https://www.travelandleisure.com/thmb/qI_QQdbY_6YNhxXNXGgeT3EhjkU=/1200x1200/smart/filters:no_upscale()/amsterdam-nl-AMSTERDAMTG0521-6d2bfaac29704667a950bcf219680640.jpg'
  })
  await amsterdam.save()
  console.log('Created some cities!')
  const comments = [
    {
      name: 'James',
      city: madrid._id,
      comment: 'A must is also a rooftop bar like Azotea del Círculo'
    },
    {
      name: 'Allie',
      city: london._id,
      comment: 'Thanks for the list! I will definitely have to check it out.'
    },
    {
      name: 'Melissa',
      city: paris._id,
      comment: "Can't forget Sacré Coeur!"
    },
    {
      name: 'Chris',
      city: barcelona._id,
      comment: 'Thanks so much! So excited to visit in April.'
    },
    {
      name: 'Will',
      city: lisbon._id,
      comment: 'Lison is the best city. Love the people, food, and culture.'
    },
    {
      name: 'Katie',
      city: amsterdam._id,
      comment: 'The cruise on the canal is the best!!!'
    }
  ]
  await Comment.insertMany(comments)
}
const run = async () => {
  await main()
  db.close()
}

run()
