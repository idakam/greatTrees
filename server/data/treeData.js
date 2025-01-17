const treeData = [
  {
    id: 1,
    name: "American Elm at Wave Hill",
    location: "At the top of the lawn just southeast of the Wave Hill House.",
    latinName: "Ulmus americana",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d93b3acee56.jpg",
    treeCode: "Bx12",
    height: "114.8",
    trunkDiameter: "53.6",
    canopySpread: "70.5",
    AFAPoints: "301",
    description:
      "The American elm at Wave Hill is located just down the path from the sugar maple and Japanese red pine. It completes the little group of unusual trees that together form one of the most pleasant picnic spots in the city.",
  },
  {
    id: 2,
    name: "American Sycamore at Corlear Avenue & West 231st Street",
    location: "East side of Corlear Avenue just south of West 231st Street",
    latinName: "Platanus occidentalis",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d93c4b3e04b.jpg",
    treeCode: "Bx01",
    height: "98.4",
    trunkDiameter: "53",
    canopySpread: "58",
    AFAPoints: "279",
    description:
      "The American sycamore on the east side of Corlear Avenue, just south of West 231st Street, stands near the site of the old King's Bridge that was built by Frederick Philipse in 1693 to convey mail carriers across Spuyten Duyvil Creek at the start of their 250-mile journey to Boston on the first Post Road. George Washington and his troops retreated across this bridge after their defeat at Fort Washington on November 16, 1776.",
  },
  {
    id: 3,
    name: "Three Common Horsechestnuts at the Van Cortlandt Mansion",
    location: "On the east lawn of Van Cortlandt Mansion.",
    latinName: "Aesculus hippocastanum",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d93dcf36fe9.jpg",
    treeCode: "Bx16",
    height: "87.74",
    trunkDiameter: "41.5",
    canopySpread: "45",
    AFAPoints: "229",
    description:
      "The common horsechestnuts on the east lawn of the Van Cortlandt mansion are said to stand like sentries at the gate of history. Built in 1748, the Van Cortlandt Mansion is the oldest building in the Bronx, and it provided a roof for George Washington: twice in defeat and once in triumph.",
  },
  {
    id: 4,
    name: "European Cutleaf Beech at Woodlawn Cemetery",
    location:
      "Northeast of the Jerome Ave entrance to Woodlawn Cemetery in the Woodbine Plot",
    latinName: "Fagus sylvatica 'Laciniata'",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d93f12627c2.jpg",
    treeCode: "Bx19",
    height: "91.02",
    trunkDiameter: "61.4",
    canopySpread: "50.5",
    AFAPoints: "297",
    description:
      "A European cutleaf beech can be found at Woodlawn Cemetery northeast of the Jerome Avenue entrance in the Woodbine Plot. It has a similar bark to the weeping beech at Woodlawn, but without the drooping form.",
  },
  {
    id: 5,
    name: "Japanese Red Pine",
    location: "By Glyndor Terrace",
    latinName: "Pinus densiflora 'Umbraculifera'",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d94011a52be.jpg",
    treeCode: "Bx10",
    height: "11.48",
    trunkDiameter: "N/A",
    canopySpread: "8.5",
    AFAPoints: "N/A",
    description:
      "The Japanese red pine, found near the sugar maple at Wave Hill, is a replacement of the previous Japanese red pine. It is an unusual species not native to North America.",
  },
  {
    id: 6,
    name: "Lacebark Pine at Wave Hill",
    location: "At the top of the lawn just southeast of the Wave Hill House.",
    latinName: "Pinus bungeana",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d940ff10c97.jpg",
    treeCode: "Bx13",
    height: "52.48",
    trunkDiameter: "17",
    canopySpread: "36.5",
    AFAPoints: "115",
    description:
      "The lacebark pine at Wave Hill forms part of the group of unusual trees that include the American elm, sugar maple, and Japanese red pine. The lacebark pine is native to China and is noted for its mottled greenish bark.",
  },
  {
    id: 7,
    name: "Littleleaf Linden at the Pelham Bay Park War Memorial",
    location: "At the War Memorial",
    latinName: "Tilia cordata",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d94224884a5.jpg",
    treeCode: "Bx29",
    height: "58.22",
    trunkDiameter: "30.3",
    canopySpread: "42",
    AFAPoints: "164",
    description:
      "There were once 588 maple and linden trees in the Norway Maple and Littleleaf Linden Grove at the Pelham Bay Park War Memorial. While only a couple of littleleaf lindens remain, the grove still serves as a memorial to all those who have fought in a war.",
  },
  {
    id: 8,
    name: "Slippery Elm",
    location: "710 West 246th Street",
    latinName: "Ulmus rubra",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d9459b71ad6.jpg",
    treeCode: "Bx07",
    height: "98.4",
    trunkDiameter: "69",
    canopySpread: "42",
    AFAPoints: "326",
    description:
      "The slippery elm at 710 West 246th Street is one of the best-tended trees in the city and has grown to the unusual height of 100 feet. The species is generally smaller than American elms and known for their sticky resinous inner bark which was chewed like gum by children and made into patent medicines by their profit-minded elders.",
  },
  {
    id: 9,
    name: "Sugar Maple at Wave Hill",
    location: "At the top of the lawn just southeast of the Wave Hill House.",
    latinName: "Acer saccharum",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d9460ff0a1a.jpg",
    treeCode: "Bx11",
    height: "88.56",
    trunkDiameter: "45.8",
    canopySpread: "56",
    AFAPoints: "246",
    description:
      "The sugar maple at Wave Hill is located at the top of the lawn just southeast of the main house. This tree is the only sugar maple in New York City to be designated a Great Tree.",
  },
  {
    id: 10,
    name: "Sweetgum at 2151 Newbold Avenue",
    location: "2151 Newbold Avenue, Post of the Veterans of Foreign Wars",
    latinName: "Liquidambar styraciflua",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d946cc13310.jpg",
    treeCode: "Bx28",
    height: "158.26",
    trunkDiameter: "53",
    canopySpread: "72.5",
    AFAPoints: "343",
    description:
      "The sweetgum at 2151 Newbold Avenue is nearly a century old and is found in the yard of the Veterans of Foreign Wars. Sweetgums are a southern species that have made a place for themselves as far north as Connecticut. By 1996, there were nearly 10,000 sweetgums on the streets of New York City. They are easy to distinguish by their glossy star-shaped leaves and globular seed balls, which stubbornly cling to the tree well into the winter.",
  },
  {
    id: 11,
    name: "Umbrella Pine at Woodlawn Cemetery",
    location:
      "Woodlawn Cemetery - corner of Parkview and Chestnut Avenues, northeast of the Joseph Paterno mausoleum",
    latinName: "Sciadopitys verticillata",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d947c28c0c2.jpg",
    treeCode: "Bx22",
    height: "47.56",
    trunkDiameter: "38",
    canopySpread: "22.5",
    AFAPoints: "173",
    description:
      "The umbrella pine, found at the corner of Parkview and Chestnut Avenues, northeast of the Joseph Paterno mausoleum at Woodlawn Cemetery, is a unique conifer that is native to Japan.",
  },
  {
    id: 12,
    name: "Weeping Beech at Woodlawn Cemetery",
    location:
      "Woodlawn Cemetery - Jay Gould plot, north of the intersection of Observatory and Central Avenues",
    latinName: "Facus sylvatica 'Pendula'",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d948d982eb4.jpg",
    treeCode: "Bx18",
    height: "53.3",
    trunkDiameter: "66",
    canopySpread: "63.5",
    AFAPoints: "277",
    description:
      "The weeping beech, found on the Jay Gould plot at Woodlawn Cemetery is a hallmark of New York City cemeteries. It is known for its twisting branches and smooth, leathery trunk.",
  },
  {
    id: 13,
    name: "White Ash at Van Cortlandt Park",
    location: "East side of the entrance to the cross country trail",
    latinName: "Fraxinus americana",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d94a32e3be1.jpg",
    treeCode: "Bx17",
    height: "82.82",
    trunkDiameter: "56.6",
    canopySpread: "60.5",
    AFAPoints: "276",
    description:
      "The white ash on the east side of the entrance to the cross country trail, not far from Van Cortlandt Mansion, stands tall and strong as it towers over the thousands of runners that pass below it each year.",
  },
  {
    id: 14,
    name: "White Oak in Raoul Wallenberg Forest",
    location: "Along the Palisades Avenue hiking trail",
    latinName: "Quercus Alba",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d94b411748c.jpg",
    treeCode: "Bx04",
    height: "87.74",
    trunkDiameter: "54.5",
    canopySpread: "63.5",
    AFAPoints: "275",
    description:
      "To find the white oak in Raoul Wallenberg Forest, take the trail that leaves Palisades Avenue 1/10 mile north of West 232nd Street. Hike 500 feet up to the dead trunk of the copper beech, then turn and walk 200 feet southeast. This white oak is associated with General U Thant, the Burmese diplomat who lived in Riverdale during his tenure as Secretary General of the United Nations from 1961 to 1971.",
  },
  {
    id: 15,
    name: "White Oak at Woodlawn Cemetery",
    location: "Woodlawn Cemetery",
    latinName: "Quercus Alba",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d94c1b4a5a1.jpg",
    treeCode: "Bx30",
    height: "90.2",
    trunkDiameter: "64.2",
    canopySpread: "82",
    AFAPoints: "312",
    description:
      "This massive white oak is the oldest tree at Woodlawn Cemetery and is located at North Border Ave and Rutgers Ave overlooking East 233rd Street.",
  },
  {
    id: 16,
    name: "White Pine at Woodlawn Cemetery",
    location: "Near the Jerome Avenue entrance of Woodlawn Cemetery",
    latinName: "Pinus strobus",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d94c89dfb0d.jpg",
    treeCode: "Bx21",
    height: "83.64",
    trunkDiameter: "43.5",
    canopySpread: "48",
    AFAPoints: "232",
    description:
      "The white pine near the Jerome Avenue entrance to Woodlawn Cemetery is the only white pine designated a Great Tree of New York City. It shows the scraggly twisted shape these American conifers develop as they age.",
  },
  {
    id: 17,
    name: "American Elm at 72nd Street and Ridge Boulevard",
    location: "72nd Street and Ridge Boulevard (near Owl's Head Park)",
    latinName: "Ulmus Americana",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54da84333bd98.jpg",
    treeCode: "Bk22",
    height: "77.9",
    trunkDiameter: "45",
    canopySpread: "46",
    AFAPoints: "231",
    description:
      "The American elm near Owls's Head Park at 72nd Street and Ridge Boulevard has escaped the scourge of Elm Disease, and was selected by the community for its size.",
  },
  {
    id: 18,
    name: "American Sycamore at Corlear Avenue & West 231st Street",
    location: "East side of Corlear Avenue just south of West 231st Street",
    latinName: "Platanus occidentalis",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d93c4b3e04b.jpg",
    treeCode: "Bx01",
    height: "98.4",
    trunkDiameter: "53",
    canopySpread: "58",
    AFAPoints: "279",
    description:
      "The American sycamore on the east side of Corlear Avenue, just south of West 231st Street, stands near the site of the old King's Bridge that was built by Frederick Philipse in 1693 to convey mail carriers across Spuyten Duyvil Creek at the start of their 250-mile journey to Boston on the first Post Road. George Washington and his troops retreated across this bridge after their defeat at Fort Washington on November 16, 1776.",
  },
  {
    id: 19,
    name: "Three Common Horsechestnuts at the Van Cortlandt Mansion",
    location: "On the east lawn of Van Cortlandt Mansion.",
    latinName: "Aesculus hippocastanum",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d93dcf36fe9.jpg",
    treeCode: "Bx16",
    height: "87.74",
    trunkDiameter: "41.5",
    canopySpread: "45",
    AFAPoints: "229",
    description:
      "The common horsechestnuts on the east lawn of the Van Cortlandt mansion are said to stand like sentries at the gate of history. Built in 1748, the Van Cortlandt Mansion is the oldest building in the Bronx, and it provided a roof for George Washington: twice in defeat and once in triumph.",
  },
  {
    id: 20,
    name: "European Cutleaf Beech at Woodlawn Cemetery",
    location:
      "Northeast of the Jerome Ave entrance to Woodlawn Cemetery in the Woodbine Plot",
    latinName: "Fagus sylvatica 'Laciniata'",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d93f12627c2.jpg",
    treeCode: "Bx19",
    height: "91.02",
    trunkDiameter: "61.4",
    canopySpread: "50.5",
    AFAPoints: "297",
    description:
      "A European cutleaf beech can be found at Woodlawn Cemetery northeast of the Jerome Avenue entrance in the Woodbine Plot. It has a similar bark to the weeping beech at Woodlawn, but without the drooping form.",
  },
  {
    id: 21,
    name: "Japanese Red Pine",
    location: "By Glyndor Terrace",
    latinName: "Pinus densiflora 'Umbraculifera'",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d94011a52be.jpg",
    treeCode: "Bx10",
    height: "11.48",
    trunkDiameter: "N/A",
    canopySpread: "8.5",
    AFAPoints: "N/A",
    description:
      "The Japanese red pine, found near the sugar maple at Wave Hill, is a replacement of the previous Japanese red pine. It is an unusual species not native to North America.",
  },
  {
    id: 22,
    name: "Lacebark Pine at Wave Hill",
    location: "At the top of the lawn just southeast of the Wave Hill House.",
    latinName: "Pinus bungeana",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d940ff10c97.jpg",
    treeCode: "Bx13",
    height: "52.48",
    trunkDiameter: "17",
    canopySpread: "36.5",
    AFAPoints: "115",
    description:
      "The lacebark pine at Wave Hill forms part of the group of unusual trees that include the American elm, sugar maple, and Japanese red pine. The lacebark pine is native to China and is noted for its mottled greenish bark.",
  },
  {
    id: 23,
    name: "Littleleaf Linden at the Pelham Bay Park War Memorial",
    location: "At the War Memorial",
    latinName: "Tilia cordata",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d94224884a5.jpg",
    treeCode: "Bx29",
    height: "58.22",
    trunkDiameter: "30.3",
    canopySpread: "42",
    AFAPoints: "164",
    description:
      "There were once 588 maple and linden trees in the Norway Maple and Littleleaf Linden Grove at the Pelham Bay Park War Memorial. While only a couple of littleleaf lindens remain, the grove still serves as a memorial to all those who have fought in a war.",
  },
  {
    id: 24,
    name: "Slippery Elm",
    location: "710 West 246th Street",
    latinName: "Ulmus rubra",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d9459b71ad6.jpg",
    treeCode: "Bx07",
    height: "98.4",
    trunkDiameter: "69",
    canopySpread: "42",
    AFAPoints: "326",
    description:
      "The slippery elm at 710 West 246th Street is one of the best-tended trees in the city and has grown to the unusual height of 100 feet. The species is generally smaller than American elms and known for their sticky resinous inner bark which was chewed like gum by children and made into patent medicines by their profit-minded elders.",
  },
  {
    id: 25,
    name: "Sugar Maple at Wave Hill",
    location: "At the top of the lawn just southeast of the Wave Hill House.",
    latinName: "Acer saccharum",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d9460ff0a1a.jpg",
    treeCode: "Bx11",
    height: "88.56",
    trunkDiameter: "45.8",
    canopySpread: "56",
    AFAPoints: "246",
    description:
      "The sugar maple at Wave Hill is located at the top of the lawn just southeast of the main house. This tree is the only sugar maple in New York City to be designated a Great Tree.",
  },
  {
    id: 26,
    name: "Sweetgum at 2151 Newbold Avenue",
    location: "2151 Newbold Avenue, Post of the Veterans of Foreign Wars",
    latinName: "Liquidambar styraciflua",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d946cc13310.jpg",
    treeCode: "Bx28",
    height: "158.26",
    trunkDiameter: "53",
    canopySpread: "72.5",
    AFAPoints: "343",
    description:
      "The sweetgum at 2151 Newbold Avenue is nearly a century old and is found in the yard of the Veterans of Foreign Wars. Sweetgums are a southern species that have made a place for themselves as far north as Connecticut. By 1996, there were nearly 10,000 sweetgums on the streets of New York City. They are easy to distinguish by their glossy star-shaped leaves and globular seed balls, which stubbornly cling to the tree well into the winter.",
  },
  {
    id: 27,
    name: "Umbrella Pine at Woodlawn Cemetery",
    location:
      "Woodlawn Cemetery - corner of Parkview and Chestnut Avenues, northeast of the Joseph Paterno mausoleum",
    latinName: "Sciadopitys verticillata",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d947c28c0c2.jpg",
    treeCode: "Bx22",
    height: "47.56",
    trunkDiameter: "38",
    canopySpread: "22.5",
    AFAPoints: "173",
    description:
      "The umbrella pine, found at the corner of Parkview and Chestnut Avenues, northeast of the Joseph Paterno mausoleum at Woodlawn Cemetery, is a unique conifer that is native to Japan.",
  },
  {
    id: 28,
    name: "Weeping Beech at Woodlawn Cemetery",
    location:
      "Woodlawn Cemetery - Jay Gould plot, north of the intersection of Observatory and Central Avenues",
    latinName: "Facus sylvatica 'Pendula'",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d948d982eb4.jpg",
    treeCode: "Bx18",
    height: "53.3",
    trunkDiameter: "66",
    canopySpread: "63.5",
    AFAPoints: "277",
    description:
      "The weeping beech, found on the Jay Gould plot at Woodlawn Cemetery is a hallmark of New York City cemeteries. It is known for its twisting branches and smooth, leathery trunk.",
  },
  {
    id: 29,
    name: "White Ash at Van Cortlandt Park",
    location: "East side of the entrance to the cross country trail",
    latinName: "Fraxinus americana",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d94a32e3be1.jpg",
    treeCode: "Bx17",
    height: "82.82",
    trunkDiameter: "56.6",
    canopySpread: "60.5",
    AFAPoints: "276",
    description:
      "The white ash on the east side of the entrance to the cross country trail, not far from Van Cortlandt Mansion, stands tall and strong as it towers over the thousands of runners that pass below it each year.",
  },
  {
    id: 30,
    name: "American Elm at Central Park Mall Rock Outcrops (1)",
    location: "Growing at rock outcrops just east of the mall",
    latinName: "Ulmus americana",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54da8d5bdc29a.jpg",
    treeCode: "Mn06",
    height: "55.76",
    trunkDiameter: "31",
    canopySpread: "30",
    AFAPoints: "161",
    description:
      "The two individual American Elms growing at the rock outcrops just east of the mall have gnarled trunks that like something out of a fairy tale illustration, with the roots of one scuttling across the rock like hands.",
  },
  {
    id: 31,
    name: "American Sycamore at Corlear Avenue & West 231st Street",
    location: "East side of Corlear Avenue just south of West 231st Street",
    latinName: "Platanus occidentalis",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d93c4b3e04b.jpg",
    treeCode: "Bx01",
    height: "98.4",
    trunkDiameter: "53",
    canopySpread: "58",
    AFAPoints: "279",
    description:
      "The American sycamore on the east side of Corlear Avenue, just south of West 231st Street, stands near the site of the old King's Bridge that was built by Frederick Philipse in 1693 to convey mail carriers across Spuyten Duyvil Creek at the start of their 250-mile journey to Boston on the first Post Road. George Washington and his troops retreated across this bridge after their defeat at Fort Washington on November 16, 1776.",
  },
  {
    id: 32,
    name: "Three Common Horsechestnuts at the Van Cortlandt Mansion",
    location: "On the east lawn of Van Cortlandt Mansion.",
    latinName: "Aesculus hippocastanum",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d93dcf36fe9.jpg",
    treeCode: "Bx16",
    height: "87.74",
    trunkDiameter: "41.5",
    canopySpread: "45",
    AFAPoints: "229",
    description:
      "The common horsechestnuts on the east lawn of the Van Cortlandt mansion are said to stand like sentries at the gate of history. Built in 1748, the Van Cortlandt Mansion is the oldest building in the Bronx, and it provided a roof for George Washington: twice in defeat and once in triumph.",
  },
  {
    id: 33,
    name: "European Cutleaf Beech at Woodlawn Cemetery",
    location:
      "Northeast of the Jerome Ave entrance to Woodlawn Cemetery in the Woodbine Plot",
    latinName: "Fagus sylvatica 'Laciniata'",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d93f12627c2.jpg",
    treeCode: "Bx19",
    height: "91.02",
    trunkDiameter: "61.4",
    canopySpread: "50.5",
    AFAPoints: "297",
    description:
      "A European cutleaf beech can be found at Woodlawn Cemetery northeast of the Jerome Avenue entrance in the Woodbine Plot. It has a similar bark to the weeping beech at Woodlawn, but without the drooping form.",
  },
  {
    id: 34,
    name: "Japanese Red Pine",
    location: "By Glyndor Terrace",
    latinName: "Pinus densiflora 'Umbraculifera'",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d94011a52be.jpg",
    treeCode: "Bx10",
    height: "11.48",
    trunkDiameter: "N/A",
    canopySpread: "8.5",
    AFAPoints: "N/A",
    description:
      "The Japanese red pine, found near the sugar maple at Wave Hill, is a replacement of the previous Japanese red pine. It is an unusual species not native to North America.",
  },
  {
    id: 35,
    name: "Lacebark Pine at Wave Hill",
    location: "At the top of the lawn just southeast of the Wave Hill House.",
    latinName: "Pinus bungeana",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d940ff10c97.jpg",
    treeCode: "Bx13",
    height: "52.48",
    trunkDiameter: "17",
    canopySpread: "36.5",
    AFAPoints: "115",
    description:
      "The lacebark pine at Wave Hill forms part of the group of unusual trees that include the American elm, sugar maple, and Japanese red pine. The lacebark pine is native to China and is noted for its mottled greenish bark.",
  },
  {
    id: 36,
    name: "Littleleaf Linden at the Pelham Bay Park War Memorial",
    location: "At the War Memorial",
    latinName: "Tilia cordata",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d94224884a5.jpg",
    treeCode: "Bx29",
    height: "58.22",
    trunkDiameter: "30.3",
    canopySpread: "42",
    AFAPoints: "164",
    description:
      "There were once 588 maple and linden trees in the Norway Maple and Littleleaf Linden Grove at the Pelham Bay Park War Memorial. While only a couple of littleleaf lindens remain, the grove still serves as a memorial to all those who have fought in a war.",
  },
  {
    id: 37,
    name: "Slippery Elm",
    location: "710 West 246th Street",
    latinName: "Ulmus rubra",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d9459b71ad6.jpg",
    treeCode: "Bx07",
    height: "98.4",
    trunkDiameter: "69",
    canopySpread: "42",
    AFAPoints: "326",
    description:
      "The slippery elm at 710 West 246th Street is one of the best-tended trees in the city and has grown to the unusual height of 100 feet. The species is generally smaller than American elms and known for their sticky resinous inner bark which was chewed like gum by children and made into patent medicines by their profit-minded elders.",
  },
  {
    id: 38,
    name: "Sugar Maple at Wave Hill",
    location: "At the top of the lawn just southeast of the Wave Hill House.",
    latinName: "Acer saccharum",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d9460ff0a1a.jpg",
    treeCode: "Bx11",
    height: "88.56",
    trunkDiameter: "45.8",
    canopySpread: "56",
    AFAPoints: "246",
    description:
      "The sugar maple at Wave Hill is located at the top of the lawn just southeast of the main house. This tree is the only sugar maple in New York City to be designated a Great Tree.",
  },
  {
    id: 39,
    name: "Sweetgum at 2151 Newbold Avenue",
    location: "2151 Newbold Avenue, Post of the Veterans of Foreign Wars",
    latinName: "Liquidambar styraciflua",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d946cc13310.jpg",
    treeCode: "Bx28",
    height: "158.26",
    trunkDiameter: "53",
    canopySpread: "72.5",
    AFAPoints: "343",
    description:
      "The sweetgum at 2151 Newbold Avenue is nearly a century old and is found in the yard of the Veterans of Foreign Wars. Sweetgums are a southern species that have made a place for themselves as far north as Connecticut. By 1996, there were nearly 10,000 sweetgums on the streets of New York City. They are easy to distinguish by their glossy star-shaped leaves and globular seed balls, which stubbornly cling to the tree well into the winter.",
  },
  {
    id: 40,
    name: "Umbrella Pine at Woodlawn Cemetery",
    location:
      "Woodlawn Cemetery - corner of Parkview and Chestnut Avenues, northeast of the Joseph Paterno mausoleum",
    latinName: "Sciadopitys verticillata",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d947c28c0c2.jpg",
    treeCode: "Bx22",
    height: "47.56",
    trunkDiameter: "38",
    canopySpread: "22.5",
    AFAPoints: "173",
    description:
      "The umbrella pine, found at the corner of Parkview and Chestnut Avenues, northeast of the Joseph Paterno mausoleum at Woodlawn Cemetery, is a unique conifer that is native to Japan.",
  },
  {
    id: 41,
    name: "Weeping Beech at Woodlawn Cemetery",
    location:
      "Woodlawn Cemetery - Jay Gould plot, north of the intersection of Observatory and Central Avenues",
    latinName: "Facus sylvatica 'Pendula'",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d948d982eb4.jpg",
    treeCode: "Bx18",
    height: "53.3",
    trunkDiameter: "66",
    canopySpread: "63.5",
    AFAPoints: "277",
    description:
      "The weeping beech, found on the Jay Gould plot at Woodlawn Cemetery is a hallmark of New York City cemeteries. It is known for its twisting branches and smooth, leathery trunk.",
  },
  {
    id: 42,
    name: "White Ash at Van Cortlandt Park",
    location: "East side of the entrance to the cross country trail",
    latinName: "Fraxinus americana",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d94a32e3be1.jpg",
    treeCode: "Bx17",
    height: "82.82",
    trunkDiameter: "56.6",
    canopySpread: "60.5",
    AFAPoints: "276",
    description:
      "The white ash on the east side of the entrance to the cross country trail, not far from Van Cortlandt Mansion, stands tall and strong as it towers over the thousands of runners that pass below it each year.",
  },
  {
    id: 43,
    name: "White Oak in Raoul Wallenberg Forest",
    location: "Along the Palisades Avenue hiking trail",
    latinName: "Quercus Alba",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d94b411748c.jpg",
    treeCode: "Bx04",
    height: "87.74",
    trunkDiameter: "54.5",
    canopySpread: "63.5",
    AFAPoints: "275",
    description:
      "To find the white oak in Raoul Wallenberg Forest, take the trail that leaves Palisades Avenue 1/10 mile north of West 232nd Street. Hike 500 feet up to the dead trunk of the copper beech, then turn and walk 200 feet southeast. This white oak is associated with General U Thant, the Burmese diplomat who lived in Riverdale during his tenure as Secretary General of the United Nations from 1961 to 1971.",
  },
  {
    id: 44,
    name: "American Beech at Maple Grove Cemetery",
    location: "Maple Grove Cemetery, by the grave of Elizabeth Riis",
    latinName: "Fagus grandifolia",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54de598166ae7.jpg",
    treeCode: "Qu19",
    height: "61.5",
    trunkDiameter: "19.02",
    canopySpread: "25.5",
    AFAPoints: "128",
    description:
      "The twin beeches at Maple Grove Cemetery by the grave of Elizabeth Riis were planted by her husband, Jacob Riis, the renowned social reformer and journalist-photographer, in 1905.",
  },
  {
    id: 45,
    name: "American Sycamore at Corlear Avenue & West 231st Street",
    location: "East side of Corlear Avenue just south of West 231st Street",
    latinName: "Platanus occidentalis",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d93c4b3e04b.jpg",
    treeCode: "Bx01",
    height: "98.4",
    trunkDiameter: "53",
    canopySpread: "58",
    AFAPoints: "279",
    description:
      "The American sycamore on the east side of Corlear Avenue, just south of West 231st Street, stands near the site of the old King's Bridge that was built by Frederick Philipse in 1693 to convey mail carriers across Spuyten Duyvil Creek at the start of their 250-mile journey to Boston on the first Post Road. George Washington and his troops retreated across this bridge after their defeat at Fort Washington on November 16, 1776.",
  },
  {
    id: 46,
    name: "Three Common Horsechestnuts at the Van Cortlandt Mansion",
    location: "On the east lawn of Van Cortlandt Mansion.",
    latinName: "Aesculus hippocastanum",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d93dcf36fe9.jpg",
    treeCode: "Bx16",
    height: "87.74",
    trunkDiameter: "41.5",
    canopySpread: "45",
    AFAPoints: "229",
    description:
      "The common horsechestnuts on the east lawn of the Van Cortlandt mansion are said to stand like sentries at the gate of history. Built in 1748, the Van Cortlandt Mansion is the oldest building in the Bronx, and it provided a roof for George Washington: twice in defeat and once in triumph.",
  },
  {
    id: 47,
    name: "European Cutleaf Beech at Woodlawn Cemetery",
    location:
      "Northeast of the Jerome Ave entrance to Woodlawn Cemetery in the Woodbine Plot",
    latinName: "Fagus sylvatica 'Laciniata'",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d93f12627c2.jpg",
    treeCode: "Bx19",
    height: "91.02",
    trunkDiameter: "61.4",
    canopySpread: "50.5",
    AFAPoints: "297",
    description:
      "A European cutleaf beech can be found at Woodlawn Cemetery northeast of the Jerome Avenue entrance in the Woodbine Plot. It has a similar bark to the weeping beech at Woodlawn, but without the drooping form.",
  },
  {
    id: 48,
    name: "Japanese Red Pine",
    location: "By Glyndor Terrace",
    latinName: "Pinus densiflora 'Umbraculifera'",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d94011a52be.jpg",
    treeCode: "Bx10",
    height: "11.48",
    trunkDiameter: "N/A",
    canopySpread: "8.5",
    AFAPoints: "N/A",
    description:
      "The Japanese red pine, found near the sugar maple at Wave Hill, is a replacement of the previous Japanese red pine. It is an unusual species not native to North America.",
  },
  {
    id: 49,
    name: "Lacebark Pine at Wave Hill",
    location: "At the top of the lawn just southeast of the Wave Hill House.",
    latinName: "Pinus bungeana",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d940ff10c97.jpg",
    treeCode: "Bx13",
    height: "52.48",
    trunkDiameter: "17",
    canopySpread: "36.5",
    AFAPoints: "115",
    description:
      "The lacebark pine at Wave Hill forms part of the group of unusual trees that include the American elm, sugar maple, and Japanese red pine. The lacebark pine is native to China and is noted for its mottled greenish bark.",
  },
  {
    id: 50,
    name: "Littleleaf Linden at the Pelham Bay Park War Memorial",
    location: "At the War Memorial",
    latinName: "Tilia cordata",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d94224884a5.jpg",
    treeCode: "Bx29",
    height: "58.22",
    trunkDiameter: "30.3",
    canopySpread: "42",
    AFAPoints: "164",
    description:
      "There were once 588 maple and linden trees in the Norway Maple and Littleleaf Linden Grove at the Pelham Bay Park War Memorial. While only a couple of littleleaf lindens remain, the grove still serves as a memorial to all those who have fought in a war.",
  },
  {
    id: 51,
    name: "Slippery Elm",
    location: "710 West 246th Street",
    latinName: "Ulmus rubra",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d9459b71ad6.jpg",
    treeCode: "Bx07",
    height: "98.4",
    trunkDiameter: "69",
    canopySpread: "42",
    AFAPoints: "326",
    description:
      "The slippery elm at 710 West 246th Street is one of the best-tended trees in the city and has grown to the unusual height of 100 feet. The species is generally smaller than American elms and known for their sticky resinous inner bark which was chewed like gum by children and made into patent medicines by their profit-minded elders.",
  },
  {
    id: 52,
    name: "Sugar Maple at Wave Hill",
    location: "At the top of the lawn just southeast of the Wave Hill House.",
    latinName: "Acer saccharum",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d9460ff0a1a.jpg",
    treeCode: "Bx11",
    height: "88.56",
    trunkDiameter: "45.8",
    canopySpread: "56",
    AFAPoints: "246",
    description:
      "The sugar maple at Wave Hill is located at the top of the lawn just southeast of the main house. This tree is the only sugar maple in New York City to be designated a Great Tree.",
  },
  {
    id: 53,
    name: "American Sycamore at Conference House Park",
    location: "Behind the Conference House",
    latinName: "Platanus occidentalis",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54de466551321.jpg",
    treeCode: "St18",
    height: "89.38",
    trunkDiameter: "63",
    canopySpread: "55",
    AFAPoints: "301",
    description:
      "The American sycamore, located behind Conference House, is a grand shade tree that can grow to a larger trunk diameter greater than any other native species. The largest sycamore known had a girth of nearly 15 feet.",
  },
  {
    id: 54,
    name: "American Sycamore at Corlear Avenue & West 231st Street",
    location: "East side of Corlear Avenue just south of West 231st Street",
    latinName: "Platanus occidentalis",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d93c4b3e04b.jpg",
    treeCode: "Bx01",
    height: "98.4",
    trunkDiameter: "53",
    canopySpread: "58",
    AFAPoints: "279",
    description:
      "The American sycamore on the east side of Corlear Avenue, just south of West 231st Street, stands near the site of the old King's Bridge that was built by Frederick Philipse in 1693 to convey mail carriers across Spuyten Duyvil Creek at the start of their 250-mile journey to Boston on the first Post Road. George Washington and his troops retreated across this bridge after their defeat at Fort Washington on November 16, 1776.",
  },
  {
    id: 55,
    name: "Three Common Horsechestnuts at the Van Cortlandt Mansion",
    location: "On the east lawn of Van Cortlandt Mansion.",
    latinName: "Aesculus hippocastanum",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d93dcf36fe9.jpg",
    treeCode: "Bx16",
    height: "87.74",
    trunkDiameter: "41.5",
    canopySpread: "45",
    AFAPoints: "229",
    description:
      "The common horsechestnuts on the east lawn of the Van Cortlandt mansion are said to stand like sentries at the gate of history. Built in 1748, the Van Cortlandt Mansion is the oldest building in the Bronx, and it provided a roof for George Washington: twice in defeat and once in triumph.",
  },
  {
    id: 56,
    name: "European Cutleaf Beech at Woodlawn Cemetery",
    location:
      "Northeast of the Jerome Ave entrance to Woodlawn Cemetery in the Woodbine Plot",
    latinName: "Fagus sylvatica 'Laciniata'",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d93f12627c2.jpg",
    treeCode: "Bx19",
    height: "91.02",
    trunkDiameter: "61.4",
    canopySpread: "50.5",
    AFAPoints: "297",
    description:
      "A European cutleaf beech can be found at Woodlawn Cemetery northeast of the Jerome Avenue entrance in the Woodbine Plot. It has a similar bark to the weeping beech at Woodlawn, but without the drooping form.",
  },
  {
    id: 57,
    name: "Japanese Red Pine",
    location: "By Glyndor Terrace",
    latinName: "Pinus densiflora 'Umbraculifera'",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d94011a52be.jpg",
    treeCode: "Bx10",
    height: "11.48",
    trunkDiameter: "N/A",
    canopySpread: "8.5",
    AFAPoints: "N/A",
    description:
      "The Japanese red pine, found near the sugar maple at Wave Hill, is a replacement of the previous Japanese red pine. It is an unusual species not native to North America.",
  },
  {
    id: 58,
    name: "Lacebark Pine at Wave Hill",
    location: "At the top of the lawn just southeast of the Wave Hill House.",
    latinName: "Pinus bungeana",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d940ff10c97.jpg",
    treeCode: "Bx13",
    height: "52.48",
    trunkDiameter: "17",
    canopySpread: "36.5",
    AFAPoints: "115",
    description:
      "The lacebark pine at Wave Hill forms part of the group of unusual trees that include the American elm, sugar maple, and Japanese red pine. The lacebark pine is native to China and is noted for its mottled greenish bark.",
  },
  {
    id: 59,
    name: "Littleleaf Linden at the Pelham Bay Park War Memorial",
    location: "At the War Memorial",
    latinName: "Tilia cordata",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d94224884a5.jpg",
    treeCode: "Bx29",
    height: "58.22",
    trunkDiameter: "30.3",
    canopySpread: "42",
    AFAPoints: "164",
    description:
      "There were once 588 maple and linden trees in the Norway Maple and Littleleaf Linden Grove at the Pelham Bay Park War Memorial. While only a couple of littleleaf lindens remain, the grove still serves as a memorial to all those who have fought in a war.",
  },
  {
    id: 60,
    name: "Slippery Elm",
    location: "710 West 246th Street",
    latinName: "Ulmus rubra",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d9459b71ad6.jpg",
    treeCode: "Bx07",
    height: "98.4",
    trunkDiameter: "69",
    canopySpread: "42",
    AFAPoints: "326",
    description:
      "The slippery elm at 710 West 246th Street is one of the best-tended trees in the city and has grown to the unusual height of 100 feet. The species is generally smaller than American elms and known for their sticky resinous inner bark which was chewed like gum by children and made into patent medicines by their profit-minded elders.",
  },
  {
    id: 61,
    name: "Sugar Maple at Wave Hill",
    location: "At the top of the lawn just southeast of the Wave Hill House.",
    latinName: "Acer saccharum",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d9460ff0a1a.jpg",
    treeCode: "Bx11",
    height: "88.56",
    trunkDiameter: "45.8",
    canopySpread: "56",
    AFAPoints: "246",
    description:
      "The sugar maple at Wave Hill is located at the top of the lawn just southeast of the main house. This tree is the only sugar maple in New York City to be designated a Great Tree.",
  },
  {
    id: 62,
    name: "Sweetgum at 2151 Newbold Avenue",
    location: "2151 Newbold Avenue, Post of the Veterans of Foreign Wars",
    latinName: "Liquidambar styraciflua",
    image:
      "https://www.nycgovparks.org/images/facilities/uploads//full/54d946cc13310.jpg",
    treeCode: "Bx28",
    height: "158.26",
    trunkDiameter: "53",
    canopySpread: "72.5",
    AFAPoints: "343",
    description:
      "The sweetgum at 2151 Newbold Avenue is nearly a century old and is found in the yard of the Veterans of Foreign Wars. Sweetgums are a southern species that have made a place for themselves as far north as Connecticut. By 1996, there were nearly 10,000 sweetgums on the streets of New York City. They are easy to distinguish by their glossy star-shaped leaves and globular seed balls, which stubbornly cling to the tree well into the winter.",
  },
];

export default treeData;
