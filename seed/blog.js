const db = require('../db')
const { Content } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const madrid = await new Content({
    name: 'Madrid',
    description: 'BEST',
    image:
      'https://theculturetrip.com/wp-content/uploads/2017/02/cibeles-palace-one-of-the-symbols-of-the-city-of-madrid.jpg'
  })
  await madrid.save()
  const lisbon = await new Content({
    name: 'Lisbon',
    description: 'BEST',
    image:
      'https://afar-production.imgix.net/uploads/images/post_images/images/lBwKh4NcNJ/original_open-uri20130227-3596-nnqtp9?1383805514?ixlib=rails-0.3.0&auto=format%2Ccompress&crop=entropy&fit=crop&h=719&q=80&w=954'
  })
  await lisbon.save()
  const london = await new Content({
    name: 'London',
    description: 'BEST',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/93/Clock_Tower_-_Palace_of_Westminster%2C_London_-_May_2007.jpg'
  })
  await london.save()
  const barcelona = await new Content({
    name: 'Barcelona',
    description: 'BEST',
    image:
      'https://lp-cms-production.imgix.net/2019-06/8ae1c56041e64517e29372a889f1beb7-la-sagrada-familia.jpg'
  })
  await barcelona.save()
  const paris = await new Content({
    name: 'Paris',
    description: 'BEST',
    image:
      'https://cdn.britannica.com/54/75854-050-E27E66C0/Eiffel-Tower-Paris.jpg'
  })
  await paris.save()
  const amsterdam = await new Content({
    name: 'Amsterdam',
    description: 'BEST',
    image:
      'https://www.travelandleisure.com/thmb/qI_QQdbY_6YNhxXNXGgeT3EhjkU=/1200x1200/smart/filters:no_upscale()/amsterdam-nl-AMSTERDAMTG0521-6d2bfaac29704667a950bcf219680640.jpg'
  })
  await amsterdam.save()

  // await Blog.insertMany(cities)
  console.log('Created some cities!')
}
const run = async () => {
  await main()
  db.close()
}

run()
