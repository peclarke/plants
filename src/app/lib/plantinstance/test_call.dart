String rawJson = '''[
  { 
    "id": 0,
    "nickname": "Teddy",
    "plant_name": "Common Monstera",
    "scientific_name": "Monstera Deliciosa",
    "owner": "Dr Kaczynski",
    "water_frequency": 7,
    "tags": [
        "Test tag"
    ],
    "watered": [
        "2022-07-14T21:52",
        "2022-08-28T23:28"
    ],
    "soil_type": "largePot",
    "location": "fullShade",
    "images": {
      "2022-08-20T15:30": "https://www.thespruce.com/thmb/Yn-yjMFQGSvoH4_r3y-mLljqrjY=/4461x3346/smart/filters:no_upscale()/grow-monstera-adansonii-swiss-cheese-plant-1902774-hero-01-dc903dae459a4dd5b919d5e1d1bee9d3.jpg",
      "2022-08-18T14:15": "https://cdn.shopify.com/s/files/1/0416/6438/1085/products/monstera_900x.jpg?v=1659019393"
    },
    "activities": [
        {
            "activityTypeId": 0,
            "id": 3,
            "plantId": 2,
            "time": "2022-08-29T15:30"
        },
        {
            "activityTypeId": 2,
            "id": 5,
            "plantId": 2,
            "time": "2022-08-29T15:30"
        },
        {
            "activityTypeId": 0,
            "id": 5,
            "plantId": 2,
            "time": "2022-08-25T15:30"
        },
        {
            "activityTypeId": 1,
            "id": 5,
            "plantId": 2,
            "time": "2022-08-20T15:30"
        },
        {
            "activityTypeId": 0,
            "id": 5,
            "plantId": 2,
            "time": "2022-08-20T15:30"
        }
    ]
  },
  { 
    "id": 1,
    "nickname": "Spicy",
    "plant_name": "Bird's Eye Chili",
    "scientific_name": "Capsicum Annuum",
    "owner": "Dr Kaczynski",
    "water_frequency": 3,
    "tags": [
        "Test tag"
    ],
    "watered": [
        "2022-05-14T21:52",
        "2022-08-25T23:28"
    ],
    "soil_type": "mediumPot",
    "location": "partShade",
    "images": {
      "2022-08-20T15:30": "https://www.bolster.eu/media/images/1635_dbweb.jpg?1549350221"
    },
    "activities": [
        {
            "activityTypeId": 0,
            "id": 3,
            "plantId": 2,
            "time": "2022-08-29T15:30"
        },
        {
            "activityTypeId": 2,
            "id": 5,
            "plantId": 2,
            "time": "2022-08-29T15:30"
        },
        {
            "activityTypeId": 0,
            "id": 5,
            "plantId": 2,
            "time": "2022-08-25T15:30"
        },
        {
            "activityTypeId": 1,
            "id": 5,
            "plantId": 2,
            "time": "2022-08-20T15:30"
        },
        {
            "activityTypeId": 0,
            "id": 5,
            "plantId": 2,
            "time": "2022-08-20T15:30"
        }
    ]
  },
  { 
    "id": 2,
    "nickname": "Greenie",
    "plant_name": "House Pothos",
    "scientific_name": "Epipremnum Aureum",
    "owner": "Dr Kaczynski",
    "water_frequency": 10,
    "tags": [
        "Test tag"
    ],
    "watered": [
        "2022-07-14T21:52",
        "2022-08-28T23:28"
    ],
    "soil_type": "fishTank",
    "location": "indoor",
    "images": {
      "2022-08-20T15:30": "https://cdn.shopify.com/s/files/1/0046/2467/9000/products/original_4ef6c2c8-df24-40a5-a410-92ade77f3504_2400x.jpg?v=1653960466"
    },
    "activities": [
        {
            "activityTypeId": 0,
            "id": 3,
            "plantId": 2,
            "time": "2022-08-29T15:30"
        },
        {
            "activityTypeId": 2,
            "id": 5,
            "plantId": 2,
            "time": "2022-08-29T15:30"
        },
        {
            "activityTypeId": 0,
            "id": 5,
            "plantId": 2,
            "time": "2022-08-25T15:30"
        },
        {
            "activityTypeId": 1,
            "id": 5,
            "plantId": 2,
            "time": "2022-08-20T15:30"
        },
        {
            "activityTypeId": 0,
            "id": 5,
            "plantId": 2,
            "time": "2022-08-20T15:30"
        }
    ]
  },
  { 
    "id": 3,
    "nickname": "Sweetie",
    "plant_name": "Sweet Corn",
    "scientific_name": "Zea mays convar. saccharata",
    "owner": "Dr Kaczynski",
    "water_frequency": 12,
    "tags": [
        "Test tag"
    ],
    "watered": [
        "2022-07-14T21:52",
        "2022-08-28T23:28"
    ],
    "soil_type": "gardenBed",
    "location": "fullSun",
    "images": {
      "2022-08-20T15:30": "https://biologyscavengerhunt2014.weebly.com/uploads/3/7/5/5/37555433/2293988.jpg?504"
    },
    "activities": [
        {
            "activityTypeId": 0,
            "id": 3,
            "plantId": 2,
            "time": "2022-08-29T15:30"
        },
        {
            "activityTypeId": 2,
            "id": 5,
            "plantId": 2,
            "time": "2022-08-29T15:30"
        },
        {
            "activityTypeId": 0,
            "id": 5,
            "plantId": 2,
            "time": "2022-08-25T15:30"
        },
        {
            "activityTypeId": 1,
            "id": 5,
            "plantId": 2,
            "time": "2022-08-20T15:30"
        },
        {
            "activityTypeId": 0,
            "id": 5,
            "plantId": 2,
            "time": "2022-08-20T15:30"
        }
    ]
  },
  { 
    "id": 4,
    "nickname": "Jelly",
    "plant_name": "Aloe",
    "scientific_name": "Aloe Vera",
    "owner": "Dr Kaczynski",
    "water_frequency": 37,
    "tags": [
        "Test tag"
    ],
    "watered": [
        "2022-07-14T21:52",
        "2022-08-28T23:28"
    ],
    "soil_type": "largePot",
    "location": "partShade",
    "images": {
      "2022-08-20T15:30": "https://www.almanac.com/sites/default/files/styles/large/public/image_nodes/aloe-vera-white-pot_sunwand24-ss_edit.jpg?itok=6dE5RWDP"
    },
    "activities": [
        {
            "activityTypeId": 0,
            "id": 3,
            "plantId": 2,
            "time": "2022-08-29T15:30"
        },
        {
            "activityTypeId": 2,
            "id": 5,
            "plantId": 2,
            "time": "2022-08-29T15:30"
        },
        {
            "activityTypeId": 0,
            "id": 5,
            "plantId": 2,
            "time": "2022-08-25T15:30"
        },
        {
            "activityTypeId": 1,
            "id": 5,
            "plantId": 2,
            "time": "2022-08-20T15:30"
        },
        {
            "activityTypeId": 0,
            "id": 5,
            "plantId": 2,
            "time": "2022-08-20T15:30"
        }
    ]
  },
  { 
    "id": 5,
    "nickname": "Freeze",
    "plant_name": "Spearmint",
    "scientific_name": "Mentha Spicata",
    "owner": "Dr Kaczynski",
    "water_frequency": 3,
    "tags": [
        "Test tag"
    ],
    "watered": [
        "2022-07-14T21:52",
        "2022-08-28T23:28"
    ],
    "soil_type": "smallPot",
    "location": "indoor",
    "images": {
      "2022-08-20T15:30": "https://i.etsystatic.com/15235325/r/il/9ad9a3/1769707810/il_fullxfull.1769707810_5ux0.jpg"
    },
    "activities": [
        {
            "activityTypeId": 0,
            "id": 3,
            "plantId": 2,
            "time": "2022-08-29T15:30"
        },
        {
            "activityTypeId": 2,
            "id": 5,
            "plantId": 2,
            "time": "2022-08-29T15:30"
        },
        {
            "activityTypeId": 0,
            "id": 5,
            "plantId": 2,
            "time": "2022-08-25T15:30"
        },
        {
            "activityTypeId": 1,
            "id": 5,
            "plantId": 2,
            "time": "2022-08-20T15:30"
        },
        {
            "activityTypeId": 0,
            "id": 5,
            "plantId": 2,
            "time": "2022-08-20T15:30"
        }
    ]
  }
]''';
