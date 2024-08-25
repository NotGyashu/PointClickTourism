export const MockActivityDetails = [
  {
    activityId: 101,
    name: "Atlantis Water Park",
    location: "Dubai",
    tag: "Best seller",
    noOfReviews: 27,
    noOfHours: 3,
    basePrice: {
      adult: 150,
      child: 70,
      infant: 0,
    },
    images: ["image1", "image2", "image3"],
    packagetype: [
      {
        id: 11,
        name: "half day",
        charges: 100,
        transferOptions: [
          { option: "option1", charge: 20 },
          { option: "option2", charge: 30 },
          { option: "option3", charge: 40 },
        ],
      },
      {
        id: 12,
        name: "full day",
        charges: 200,
        transferOptions: [
          { option: "option1", charge: 20 },
          { option: "option2", charge: 30 },
          { option: "option3", charge: 40 },
        ],
      },
    ],
    rating: 4.8,
  },
  {
    activityId: 102,
    name: "Eiffel Tower Tour",
    location: "Paris",
    tag: "Iconic",
    noOfReviews: 38,
    noOfHours: 2,
    basePrice: {
      adult: 120,
      child: 60,
      infant: 0,
    },
    images: ["image4", "image5", "image6"],
    packagetype: [
      {
        id: 21,
        name: "standard",
        charges: 80,
        transferOptions: [
          { option: "optionA", charge: 15 },
          { option: "optionB", charge: 25 },
        ],
      },
      {
        id: 22,
        name: "premium",
        charges: 160,
        transferOptions: [
          { option: "optionA", charge: 15 },
          { option: "optionB", charge: 25 },
        ],
      },
    ],
    rating: 4.6,
  },
  {
    activityId: 103,
    name: "Great Wall of China",
    location: "Beijing",
    tag: "Historical",
    noOfReviews: 50,
    noOfHours: 4,
    basePrice: {
      adult: 180,
      child: 90,
      infant: 0,
    },
    images: ["image7", "image8", "image9"],
    packagetype: [
      {
        id: 31,
        name: "guided",
        charges: 120,
        transferOptions: [
          { option: "optionX", charge: 25 },
          { option: "optionY", charge: 35 },
        ],
      },
      {
        id: 32,
        name: "self-guided",
        charges: 80,
        transferOptions: [
          { option: "optionX", charge: 25 },
          { option: "optionY", charge: 35 },
        ],
      },
    ],
    rating: 4.9,
  },
  {
    activityId: 104,
    name: "Tokyo City Tour",
    location: "Tokyo",
    tag: "Cultural",
    noOfReviews: 45,
    noOfHours: 5,
    basePrice: {
      adult: 200,
      child: 100,
      infant: 0,
    },
    images: ["image10", "image11", "image12"],
    packagetype: [
      {
        id: 41,
        name: "full day",
        charges: 180,
        transferOptions: [
          { option: "optionM", charge: 20 },
          { option: "optionN", charge: 30 },
        ],
      },
      {
        id: 42,
        name: "half day",
        charges: 120,
        transferOptions: [
          { option: "optionM", charge: 20 },
          { option: "optionN", charge: 30 },
        ],
      },
    ],
    rating: 4.7,
  },
  {
    activityId: 105,
    name: "Sydney Opera House Tour",
    location: "Sydney",
    tag: "Architectural",
    noOfReviews: 33,
    noOfHours: 3,
    basePrice: {
      adult: 140,
      child: 70,
      infant: 0,
    },
    images: ["image13", "image14", "image15"],
    packagetype: [
      {
        id: 51,
        name: "standard",
        charges: 100,
        transferOptions: [
          { option: "optionL", charge: 20 },
          { option: "optionM", charge: 30 },
        ],
      },
      {
        id: 52,
        name: "VIP",
        charges: 200,
        transferOptions: [
          { option: "optionL", charge: 20 },
          { option: "optionM", charge: 30 },
        ],
      },
    ],
    rating: 4.8,
  },
  {
    activityId: 106,
    name: "Grand Canyon Helicopter Tour",
    location: "Las Vegas",
    tag: "Adventure",
    noOfReviews: 42,
    noOfHours: 1.5,
    basePrice: {
      adult: 250,
      child: 120,
      infant: 0,
    },
    images: ["image16", "image17", "image18"],
    packagetype: [
      {
        id: 61,
        name: "standard",
        charges: 200,
        transferOptions: [
          { option: "optionP", charge: 30 },
          { option: "optionQ", charge: 40 },
        ],
      },
      {
        id: 62,
        name: "luxury",
        charges: 300,
        transferOptions: [
          { option: "optionP", charge: 30 },
          { option: "optionQ", charge: 40 },
        ],
      },
    ],
    rating: 4.9,
  },
  {
    activityId: 107,
    name: "Machu Picchu Trek",
    location: "Peru",
    tag: "Historical",
    noOfReviews: 29,
    noOfHours: 8,
    basePrice: {
      adult: 350,
      child: 175,
      infant: 0,
    },
    images: ["image19", "image20", "image21"],
    packagetype: [
      {
        id: 71,
        name: "standard",
        charges: 300,
        transferOptions: [
          { option: "optionR", charge: 40 },
          { option: "optionS", charge: 50 },
        ],
      },
      {
        id: 72,
        name: "luxury",
        charges: 500,
        transferOptions: [
          { option: "optionR", charge: 40 },
          { option: "optionS", charge: 50 },
        ],
      },
    ],
    rating: 4.7,
  },
  {
    activityId: 108,
    name: "Santorini Sunset Cruise",
    location: "Greece",
    tag: "Romantic",
    noOfReviews: 30,
    noOfHours: 4,
    basePrice: {
      adult: 200,
      child: 100,
      infant: 0,
    },
    images: ["image22", "image23", "image24"],
    packagetype: [
      {
        id: 81,
        name: "standard",
        charges: 180,
        transferOptions: [
          { option: "optionT", charge: 20 },
          { option: "optionU", charge: 25 },
        ],
      },
      {
        id: 82,
        name: "private",
        charges: 300,
        transferOptions: [
          { option: "optionT", charge: 20 },
          { option: "optionU", charge: 25 },
        ],
      },
    ],
    rating: 4.8,
  },
  {
    activityId: 109,
    name: "Venice Gondola Ride",
    location: "Italy",
    tag: "Classic",
    noOfReviews: 40,
    noOfHours: 1,
    basePrice: {
      adult: 80,
      child: 40,
      infant: 0,
    },
    images: ["image25", "image26", "image27"],
    packagetype: [
      {
        id: 91,
        name: "standard",
        charges: 70,
        transferOptions: [
          { option: "optionV", charge: 15 },
          { option: "optionW", charge: 25 },
        ],
      },
      {
        id: 92,
        name: "romantic",
        charges: 120,
        transferOptions: [
          { option: "optionV", charge: 15 },
          { option: "optionW", charge: 25 },
        ],
      },
    ],
    rating: 4.5,
  },
  {
    activityId: 110,
    name: "Safari in Kenya",
    location: "Kenya",
    tag: "Adventure",
    noOfReviews: 35,
    noOfHours: 6,
    basePrice: {
      adult: 300,
      child: 150,
      infant: 0,
    },
    images: ["image28", "image29", "image30"],
    packagetype: [
      {
        id: 101,
        name: "group",
        charges: 250,
        transferOptions: [
          { option: "optionX", charge: 30 },
          { option: "optionY", charge: 40 },
        ],
      },
      {
        id: 102,
        name: "private",
        charges: 450,
        transferOptions: [
          { option: "optionX", charge: 30 },
          { option: "optionY", charge: 40 },
        ],
      },
    ],
    rating: 4.9,
  },
  {
    activityId: 111,
    name: "Iceland Northern Lights Tour",
    location: "Iceland",
    tag: "Nature",
    noOfReviews: 22,
    noOfHours: 5,
    basePrice: {
      adult: 280,
      child: 140,
      infant: 0,
    },
    images: ["image31", "image32", "image33"],
    packagetype: [
      {
        id: 111,
        name: "standard",
        charges: 250,
        transferOptions: [
          { option: "optionZ", charge: 30 },
          { option: "optionAA", charge: 40 },
        ],
      },
      {
        id: 112,
        name: "luxury",
        charges: 400,
        transferOptions: [
          { option: "optionZ", charge: 30 },
          { option: "optionAA", charge: 40 },
        ],
      },
    ],
    rating: 4.8,
  },
  {
    activityId: 112,
    name: "Dubai Desert Safari",
    location: "Dubai",
    tag: "Adventure",
    noOfReviews: 55,
    noOfHours: 7,
    basePrice: {
      adult: 220,
      child: 110,
      infant: 0,
    },
    images: ["image34", "image35", "image36"],
    packagetype: [
      {
        id: 121,
        name: "standard",
        charges: 200,
        transferOptions: [
          { option: "optionBB", charge: 20 },
          { option: "optionCC", charge: 30 },
        ],
      },
      {
        id: 122,
        name: "VIP",
        charges: 350,
        transferOptions: [
          { option: "optionBB", charge: 20 },
          { option: "optionCC", charge: 30 },
        ],
      },
    ],
    rating: 4.9,
  },
];
