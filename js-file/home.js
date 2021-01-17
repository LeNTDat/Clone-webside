// data
let dataShoes = [
    shoe = {
        id: 1,
        name: 'AIR JORDAN 1 LOW TRIPLE WHITE FOG GREY',
        src: 'dou-af1.jpg',
        qty: 4,
        prize: 'đ 5,500,000',
        model: 'foot-wear',
    },
    shoe = {
        id: 2,
        name: 'NIKE REACT PRESTO UNDERCOVER BLACK',
        src: 'air-jd1.jpg',
        qty: 7,
        prize: 'đ 13,800,000',
        model: 'foot-wear'
    },
    shoe = {
        id: 3,
        name: 'ADIDAS YEEZY BOOST 350 V2 BELUGA 1.0',
        src: 'air-jd4-re.jpg',
        qty: 9,
        prize: 'đ 9,500,000',
    },
    shoe = {
        id: 4,
        name: 'ADIDAS YEEZY BOOST 350 V2 SESAME - F99710',
        src: 'but-net.jpg',
        qty: 12,
        prize: 'đ 98,500,000',
    },
    shoe = {
        id: 5,
        name: 'BAPE LOGO SLIP ON LADIES PINK',
        src: 'bape-pink.jpg',
        qty: 3,
        prize: 'đ 8,500,000',
        model: 'foot-wear'
    },
    shoe = {
        id: 6,
        name: 'PALM ANGELS WHITE LOGO VULCANIZED SNEAKERS LOW-TOP CANVAS',
        src: 'dou-af1.jpg',
        qty: 77,
        prize: 'đ 3,500,000',
        model: 'foot-wear'
    },
    shoe = {
        id: 7,
        name: 'FEAR OF GOD X CONVERSE CHUCK 70 HIGH "NATURAL IVORY"',
        src: 'fear-of-god.jpg',
        qty: 12,
        prize: 'đ 8,500,000',
    },
    shoe = {
        id: 8,
        name: 'ADIDAS YEEZY BOOST 350 V2 SESAME - F99710',
        src: 'pink-af1.jpg',
        qty: 41,
        prize: 'đ 4,500,000',
        model: 'foot-wear'
    },
    shoe = {
        id: 9,
        name: 'NIKE AIR FORCE 1 LOW WHITE 2018 (W)',
        src: 'white-af1.jpg',
        qty: 100,
        prize: 'đ 23,500,000',
    },
    shoe = {
        id: 10,
        name: 'ADIDAS ALPHABOOST PARLEY BLACK',
        src: 'wmns-air-max-98.jpg',
        qty: 73,
        prize: 'đ 4,500,000',
    },
    shoe = {
        id: 11,
        name: 'AIR JORDAN 1 LOW SHATTERED BACKBOARD',
        src: 'back-board.jpg',
        qty: 24,
        prize: 'đ 10,500,000',
    },
    shoe = {
        id: 12,
        name: 'AIR JORDAN 1 LOW LASER BLUE',
        src: 'laser-blue.jpg',
        qty: 9,
        prize: 'đ 28,500,000',
        model: 'foot-wear'
    },
    shoe = {
        id: 13,
        name: 'NIKE AIR FORCE 1 SHADOW SUMMIT WHITE TEAM ORANGE (W)',
        src: 'low-bred.jpg',
        qty: 8,
        prize: 'đ 4,500,000',
        model: 'foot-wear'
    },
    shoe = {
        id: 14,
        name: 'AIR JORDAN 1 MID WHITE RED ROYAL (W)',
        src: 'chicago-black-toe.jpg',
        qty: 0,
        prize: 'đ 1,500,000',
        model: 'foot-wear'
    },
    shoe = {
        id: 15,
        name: 'NIKE AIR FORCE 1 SHADOW SUMMIT WHITE BARELY VOLT CRIMSON TINT (W)',
        src: 'sacai-nylon.jpg',
        qty: 5,
        prize: 'đ 9,500,000',
        model: 'foot-wear'
    },
    shoe = {
        id: 16,
        name: 'NIKE LEBRON 17 AS MONSTAR',
        src: 'gold-ultra.jpg',
        qty: 47,
        prize: 'đ 8,500,000',
        model: 'foot-wear'
    },
    shoe = {
        id: 17,
        name: 'NIKE AIR MAX 95 OG FRESH MINT',
        src: 'max-95-fresh.jpg',
        qty: 9,
        prize: 'đ 73,500,000',
    },
    shoe = {
        id: 18,
        name: 'ADIDAS YEEZY BOOST 380 BLUE OAT',
        src: 'boost-380.jpg',
        qty: 17,
        prize: 'đ 5,500,000',
        model: 'foot-wear'
    },


]

// Auto Slide Show 
let slidecount = 0;
let imgCount = document.getElementsByClassName('slide-run');

function slideshow() {
    for (let i = 0; i < imgCount.length; i++) {
        imgCount[i].style.display = 'none';
    }
    slidecount++;
    if (slidecount > imgCount.length) {
        slidecount = 1;
    }
    imgCount[slidecount - 1].style.display = 'block';
    setTimeout(slideshow, 5000)
}



// slide click

let slideclick = 1;

function plus(iconclick) {
    showclick(slideclick += iconclick);
}

function showclick(click) {
    if (click > imgCount.length) {
        slideclick = 1;
    }
    if (click < 1) {
        slideclick = imgCount.length;
    }
    for (let i = 0; i < imgCount.length; i++) {
        imgCount[i].style.display = 'none';
    }


    imgCount[slideclick - 1].style.display = 'block';
}


//-------------------------------------
let slide = 0;
let botSlide = document.getElementsByClassName('slide-bottom');
function slidebottom() {
    for (let j = 0; j < botSlide.length; j++) {
        botSlide[j].style.display = 'none';
    }
    slide++;
    if (slide > botSlide.length) {
        slide = 1;
    }

    botSlide[slide - 1].style.display = "block";
    setTimeout(slidebottom, 3000);
}



// search Show hide

function sidesearch() {
    let show = document.getElementsByClassName('side-search-right');
    if (show[0].style.display == 'block') {
        show[0].style.display = 'none';
    } else {
        show[0].style.display = 'block';
    }
}


// close search 

function closeBtn() {
    let close = document.getElementsByClassName('side-search-right');
    close[0].style.display = 'none';
}

function filterSearch() {

    let getInput = document.getElementById('search-input').value.toUpperCase();
    let filterName = [];
    let filterQty = [];
    for (let i = 0; i < dataShoes.length; i++) {
        if (dataShoes[i].name.toUpperCase().indexOf(getInput) != -1 || getInput == '') {
            filterName.push(dataShoes[i].name);
            filterQty.push(dataShoes[i].qty);
        }
    }
    creatSearch(filterName, filterQty);
}

function creatSearch(name, qty) {

    let ulSearch = document.getElementById('show-products-search');
    let list = ulSearch.children;
    while (list.length != 0) {
        list[0].remove();
    }
    for (let i = 0; i < name.length; i++) {
        let lis = document.createElement('li');
        let a = document.createElement('a');
        let p = document.createElement('p');
        lis.className = "list-product-find"
        let aData = document.createTextNode(name[i]);
        let pData = document.createTextNode(qty[i] += " item");
        a.appendChild(aData);
        p.appendChild(pData);
        lis.appendChild(a);
        lis.appendChild(p);
        ulSearch.appendChild(lis);
    }

}




// run funtion
if (typeof (imgCount[0]) != 'undefined') {
    slideshow();
}

if (typeof (imgCount[0]) != 'undefined') {
    showclick(slideclick);
}

if (typeof (botSlide[0]) != 'undefined') {
    slidebottom();
}