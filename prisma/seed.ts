import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const planteData = [
  {
    name: 'Rose',
    description: 'A beautiful red flower',
    quantity: 10,
    imageUrl: 'https://example.com/rose.jpg',
  },
  {
    name: 'Tulip',
    description: 'A colorful spring flower',
    quantity: 15,
    imageUrl: 'https://example.com/tulip.jpg',
  },
  {
    name: 'Cactus',
    description: 'A hardy plant that thrives in dry conditions',
    quantity: 5,
    imageUrl: 'https://example.com/cactus.jpg',
  },
  {
    name: 'Lily',
    description: 'A fragrant white flower',
    quantity: 12,
    imageUrl: 'https://example.com/lily.jpg',
  },
  {
    name: 'Sunflower',
    description: 'A tall plant with a bright yellow flower',
    quantity: 20,
    imageUrl: 'https://example.com/sunflower.jpg',
  },
  {
    name: 'Daisy',
    description: 'A simple white flower with a yellow center',
    quantity: 8,
    imageUrl: 'https://example.com/daisy.jpg',
  },
  {
    name: 'Orchid',
    description: 'An exotic and beautiful flowering plant',
    quantity: 6,
    imageUrl: 'https://example.com/orchid.jpg',
  },
  {
    name: 'Tulip',
    description: 'Colorful flowers that bloom in spring',
    quantity: 14,
    imageUrl: 'https://example.com/tulip-2.jpg',
  },
  {
    name: 'Lavender',
    description: 'A fragrant purple flower often used in aromatherapy',
    quantity: 18,
    imageUrl: 'https://example.com/lavender.jpg',
  },
  {
    name: 'Violet',
    description: 'A small purple flower',
    quantity: 25,
    imageUrl: 'https://example.com/violet.jpg',
  },
  {
    name: 'Iris',
    description: 'A flower with striking purple and yellow colors',
    quantity: 10,
    imageUrl: 'https://example.com/iris.jpg',
  },
  {
    name: 'Tulip',
    description: 'Beautiful flowers in many colors',
    quantity: 9,
    imageUrl: 'https://example.com/tulip-3.jpg',
  },
  {
    name: 'Jasmine',
    description: 'A fragrant white flower often used in tea',
    quantity: 7,
    imageUrl: 'https://example.com/jasmine.jpg',
  },
  {
    name: 'Chrysanthemum',
    description: 'A vibrant flower with many colors',
    quantity: 11,
    imageUrl: 'https://example.com/chrysanthemum.jpg',
  },
  {
    name: 'Geranium',
    description: 'A flowering plant with a variety of colors',
    quantity: 13,
    imageUrl: 'https://example.com/geranium.jpg',
  },
  {
    name: 'Magnolia',
    description: 'A tree with large, fragrant white flowers',
    quantity: 5,
    imageUrl: 'https://example.com/magnolia.jpg',
  },
  {
    name: 'Azalea',
    description: 'A plant with bright pink or red flowers',
    quantity: 9,
    imageUrl: 'https://example.com/azalea.jpg',
  },
  {
    name: 'Poppy',
    description: 'A flower with bright red petals',
    quantity: 17,
    imageUrl: 'https://example.com/poppy.jpg',
  },
  {
    name: 'Freesia',
    description: 'A fragrant flower available in various colors',
    quantity: 20,
    imageUrl: 'https://example.com/freesia.jpg',
  },
  {
    name: 'Cineraria',
    description: 'A flowering plant often seen in gardens',
    quantity: 8,
    imageUrl: 'https://example.com/cineraria.jpg',
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const p of planteData) {
    const plant = await prisma.plante.create({
      data: p,
    });
    console.log(`Created plant with id: ${plant.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
