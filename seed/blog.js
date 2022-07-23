const db = require('../db')
const { Content, Comment } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const madrid = await new Content({
    name: 'Madrid',
    description:
      'MADRID 🇪🇸 Go to a Real Madrid Fútbol game at Santiago Bernabeu Stadium 🇪🇸 Visit the Museo Nacional del Prado 🇪🇸 Eat at the Mercado de San Miguel 🇪🇸 Rent a row boat at Parque del Retiro 🇪🇸 Take a tour of the Royal Palace 🇪🇸 Shop around in Sol',
    image:
      'https://theculturetrip.com/wp-content/uploads/2017/02/cibeles-palace-one-of-the-symbols-of-the-city-of-madrid.jpg'
  })
  await madrid.save()
  const lisbon = await new Content({
    name: 'Lisbon',
    description:
      'LISBON 🇵🇹 Take a day trip to Sintra to explore Peña Palace 🇵🇹 Ride a tram through the city 🇵🇹 Book a wine tour of the Douro Valley 🇵🇹 Visit the National Azulejo Museum 🇵🇹 Wait on line at Pasteis de Belem for the best pasties de nata 🇵🇹 Stop by the Belem Tower',
    image:
      'https://afar-production.imgix.net/uploads/images/post_images/images/lBwKh4NcNJ/original_open-uri20130227-3596-nnqtp9?1383805514?ixlib=rails-0.3.0&auto=format%2Ccompress&crop=entropy&fit=crop&h=719&q=80&w=954'
  })
  await lisbon.save()
  const london = await new Content({
    name: 'London',
    description:
      'LONDON 🇬🇧 Walk by Big Ben and the Houses of Parliament 🇬🇧 Visit the Tate Museum 🇬🇧 Eat at Borough Market 🇬🇧 Enjoy high tea at Harrods 🇬🇧 See a Broadway show 🇬🇧 Watch the changing of the guards at Buckingham Palace',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/93/Clock_Tower_-_Palace_of_Westminster%2C_London_-_May_2007.jpg'
  })
  await london.save()
  const barcelona = await new Content({
    name: 'Barcelona',
    description:
      'BARCELONA 🇪🇸 Walk through the Gothic Quarter 🇪🇸 Visit Gaudi Park Guell or Casa Milá 🇪🇸 Take a tour of La Sagrada Familia 🇪🇸 Shop around Las Ramblas 🇪🇸 Eat at La Boqueria 🇪🇸 Drink sangria by the beach',
    image:
      'https://lp-cms-production.imgix.net/2019-06/8ae1c56041e64517e29372a889f1beb7-la-sagrada-familia.jpg'
  })
  await barcelona.save()
  const paris = await new Content({
    name: 'Paris',
    description:
      'PARIS 🇫🇷 Picnic nearby the Eiffel Tower 🇫🇷 Take a river boat on the Seine 🇫🇷 Visit the Arc de Triomphe 🇫🇷 Indulge in croissants everyday 🇫🇷 Take a tour of Versailles 🇫🇷 Stroll through the Louvre and check out the Mona Lisa',
    image:
      'https://cdn.britannica.com/54/75854-050-E27E66C0/Eiffel-Tower-Paris.jpg'
  })
  await paris.save()
  const amsterdam = await new Content({
    name: 'Amsterdam',
    description:
      'AMSTERDAM 🇳🇱 Ride a bike through the city 🇳🇱 Visit the Anne Frank House 🇳🇱 Take a tour of the Van Gogh Museum 🇳🇱 Book a Canal Cruise 🇳🇱 Drink beer at the Heineken Experience 🇳🇱 Eat stroopwaffels from a local Farmers Market',
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
      comment: "Can't forget Notre-Dame!"
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
}
const run = async () => {
  await main()
  db.dropDatabase()
  db.close()
}

run()
