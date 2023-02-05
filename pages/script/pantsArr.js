const pantsArr = [
    {
        id: 0,
        src: "./images/pants/pant01.jpg",
        title: "Pant 01",
        size: [32, 33, 24, 35, 36],
        colors: ['cadetblue', 'tomato', 'black', 'pink', 'white', 'turquoise', 'crimson'],
        price: "35.99", 
        rating: 5
    },
    {
        id: 1,
        src: "./images/pants/pant02.jpg",
        title: "Pant 02",
        size: [32, 33, 24, 35, 36],
        colors: ['darkolivegreen', 'fuchsia', 'teal', 'thistle', 'tan', 'greenyellow', 'violet', 'gray', 'forestgreen', 'crimson', 'black'],
        price: "32.99",
        rating: 5
    }, 
    {
        id: 2,
        src: "./images/pants/pant03.jpg",
        title: "Pant 03",
        size: [32, 33, 24, 35, 36],
        colors: ['coral', 'skyblue', 'slateblue', 'brown', 'greenyellow', 'lightcoral', 'violet', 'seagreen', 'black', 'tan'], 
        price: "29.99", 
        rating: 4
    }, 
    {
        id: 3,
        src: "./images/pants/pant04.jpg",
        title: "Pant 04",
        size: [32, 33, 24, 35, 36],
        colors: ['black', 'slategrey', 'thistle', 'turquoise', 'chartreuse', 'crimson', 'forestgreen', 'gray', 'greenyellow', 'lightcoral'], 
        price: "23.99", 
        rating: 5
    }, 
    {
        id: 4,
        src: "./images/pants/pant05.jpg",
        title: "Pant 05",
        size: [32, 33, 24, 35, 36],
        colors: ['coral', 'sienna', 'lightcoral', 'gold', 'cadetblue', 'teal', 'seagreen'], 
        price: "28.99", 
        rating: 5
    }, 
    {
        id: 5,
        src: "./images/pants/pant06.jpg",
        title: "Pant 06",
        size: [32, 33, 24, 35, 36],
        colors: ['gray', 'black', 'red', 'purple', 'cadetblue'], 
        price: "43.99", 
        rating: 5
    }, 
    {
        id: 6,
        src: "./images/pants/pant07.jpg",
        title: "Pant 07",
        size: [32, 33, 24, 35, 36],
        colors: ['brown', 'seagreen', 'skyblue', 'slategrey', 'coral', 'crimson', 'gold', 'fuchsia', 'teal', 'tan'], 
        price: "49.99", 
        rating: 4
    }, 
    {
        id: 7,
        src: "./images/pants/pant08.jpg",
        title: "Pant 08",
        size: [32, 33, 24, 35, 36],
        colors: ['fuchsia', 'greenyellow', 'lightcoral', 'tan', 'yellowgreen', 'violet', 'thistle', 'teal', 'seagreen', 'cadetblue'], 
        price: "36.99", 
        rating:5
    } ,
    {
        id: 8,
        src: "./images/pants/pant09.jpg",
        title: "Pant 09",
        size: [32, 33, 24, 35, 36],
        colors: ['tan', 'seagreen', 'brown', 'chartreuse', 'darkolivegreen', 'greenyellow', 'lightcoral'], 
        price: "35.00", 
        rating: 5
    }, 
    {
        id: 9,
        src: "./images/pants/pant10.jpg",
        title: "Pant 10",
        size: [32, 33, 24, 35, 36],
        colors: ['gold', 'greenyellow', 'fuchsia', 'lightcoral', 'seagreen', 'sienna', 'slateblue', 'thistle', 'turquoise', 'yellowgreen'], 
        price: "23.99", 
        rating: 5
    },
    {
        id: 10,
        src: "./images/pants/pant11.jpg",
        title: "Pant 11",
        size: [32, 33, 24, 35, 36],
        colors: ['turquoise', 'brown', 'darkolivegreen', 'darkgoldenrod', 'cadetblue', 'fuchsia', 'lightcoral', 'gray', 'skyblue', 'thistle'], 
        price: "33.30", 
        rating: 4
    }, 
    {
        id: 11,
        src: "./images/pants/pant12.jpg",
        title: "Pant 12",
        size: [32, 33, 24, 35, 36],
        colors: ['slateblue', 'coral', 'crimson', 'forestgreen', 'gray', 'gold', 'slategrey', 'yellowgreen'], 
        price: "29.99", 
        rating: 4
    }, 
    {
        id: 12,
        src: "./images/pants/pant13.jpg",
        title: "Pant 13",
        size: [32, 33, 24, 35, 36],
        colors: ['slategrey', 'black', 'coral', 'skyblue', 'violet', 'darkolivegreen'], 
        price: "28.99", 
        rating: 5
    },
    {
        id: 13,
        src: "./images/pants/pant14.jpg",
        title: "Pant 14",
        size: [32, 33, 24, 35, 36],
        colors: ['seagreen', 'gold', 'lightcoral', 'gray', 'brown', 'teal'], 
        price: "27.99", 
        rating: 5
    },
    {
        id: 14,
        src: "./images/pants/pant15.jpg",
        title: "Pant 15",
        size: [32, 33, 24, 35, 36],
        colors: ['gray', 'teal', 'turquoise', 'tan', 'sienna'], 
        price: "28.99", 
        rating: 5 
    },
    {
        id: 15,
        src: "./images/pants/pant16.jpg",
        title: "Pant 16",
        size: [32, 33, 24, 35, 36],
        colors: ['darkolivegreen', 'darkgoldenrod', 'gray', 'slateblue', 'slategrey', 'thistle', 'cadetblue'], 
        price: "29.99", 
        rating: 5
    },
    {
        id: 16,
        src: "./images/pants/pant17.jpg",
        title: "Pant 17",
        size: [32, 33, 24, 35, 36],
        colors: ['darkolivegreen', 'thistle', 'slateblue', 'coral', 'tan', 'turquoise'], 
        price: "23.99", 
        rating: 3
    },
    {
        id: 17,
        src: "./images/pants/pant18.jpg",
        title: "Pant 18",
        size: [32, 33, 24, 35, 36],
        colors: ['chartreuse', 'fuchsia', 'yellowgreen', 'violet', 'seagreen'], 
        price: "22.99", 
        rating: 2
    },
    {
        id: 18,
        src: "./images/pants/pant19.jpg",
        title: "Pant 19",
        size: [32, 33, 24, 35, 36],
        colors: ['tan', 'darkgoldenrod', 'forestgreen', 'gray', 'greenyellow', 'lightcoral', 'slateblue', 'slategrey', 'violet', 'yellowgreen'], 
        price: "21.99", 
        rating: 5
    }, 
    {
        id: 19,
        src: "./images/pants/pant20.jpg",
        title: "Pant 20",
        size: [32, 33, 24, 35, 36],
        colors: ['coral', 'crimson', 'fuchsia', 'violet', 'lightcoral', 'sienna'], 
        price: "18.99", 
        rating: 5
    },
    {
        id: 20,
        src: "./images/pants/pant21.jpg",
        title: "Pant 21",
        size: [32, 33, 24, 35, 36],
        colors: ['yellowgreen', 'seagreen', 'chartreuse', 'forestgreen', 'greenyellow', 'darkolivegreen'], 
        price: "15.99", 
        rating: 5
    },
    {
        id: 21,
        src: "./images/pants/pant22.jpg",
        title: "Pant 22",
        size: [32, 33, 24, 35, 36],
        colors: ['lightcoral', 'greenyellow', 'cadetblue', 'skyblue', 'violet', 'yellowgreen'], 
        price: "33.99", 
        rating: 4
    },
    {
        id: 22,
        src: "./images/pants/pant23.jpg",
        title: "Pant 23",
        size: [32, 33, 24, 35, 36],
        colors: ['black', 'red', 'yellow', 'brown', 'coral', 'gray', 'white', 'azure'], 
        price: "35.99", 
        rating: 3
    },
    {
        id: 23,
        src: "./images/pants/pant24.jpg",
        title: "Pant 24",
        size: [32, 33, 24, 35, 36],
        colors: ['thistle', 'coral', 'cadetblue', 'seagreen', 'tan'], 
        price: "49.99", 
        rating: 5
    },
    {
        id: 24,
        src: "./images/pants/pant25.jpg",
        title: "Pant 25",
        size: [32, 33, 24, 35, 36],
        colors: ['seagreen', 'crimson'], 
        price: "30.99", 
        rating: 4
    },
    {
        id: 25,
        src: "./images/pants/pant26.jpg",
        title: "Pant 26",
        size: [32, 33, 24, 35, 36],
    color: lightcoral;
        colors: ['brown', 'crimson', 'fuchsia', 'red', 'violet', 'gold', 'forestgreen', 'turquoise', 'lightcoral', 'coral'], 
        price: "21.99", 
        rating: 4
    },
    {
        id: 27,
        src: "./images/pants/pant28.jpg",
        title: "Pant 28",
        size: [32, 33, 24, 35, 36],
        colors: ['darkolivegreen', 'lightcoral'], 
        price: "53.99", 
        rating: 2
    }, 
    {
        id: 28,
        src: "./images/pants/pant29.jpg",
        title: "Pant 29",
        size: [32, 33, 24, 35, 36],
        colors: ['fuchsia', 'skyblue', 'slategrey', 'greenyellow'], 
        price: "33.99", 
        rating: 5
    }
]
console.log(pantsArr)
//  obj tenplate
// {
//     id: ,
//     src: "./images/pants/pant08.jpg",
//     title: "Pant 08",
//     size: [32, 33, 24, 35, 36],
//     colors: ['', '', '', '', '', '', '', '', '', ''], 
//     price: "", 
//     rating: 
// }
//