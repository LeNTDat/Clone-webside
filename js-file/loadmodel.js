
// data
let dataShoe = [
    shoe = {
        id: 1,
        name: 'AIR JORDAN 1 LOW TRIPLE WHITE FOG GREY',
        src: 'dou-af1.jpg',
        qty: 4,
        prize: 'đ 5,500,000',
        model: 'footwear',
    },
    shoe = {
        id: 2,
        name: 'NIKE REACT PRESTO UNDERCOVER BLACK',
        src: 'air-jd1.jpg',
        qty: 7,
        prize: 'đ 13,800,000',
        model: 'footwear'
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
        model: 'footwear'
    },
    shoe = {
        id: 6,
        name: 'PALM ANGELS WHITE LOGO VULCANIZED SNEAKERS LOW-TOP CANVAS',
        src: 'dou-af1.jpg',
        qty: 77,
        prize: 'đ 3,500,000',
        model: 'footwear'
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
        model: 'footwear'
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
        model: 'footwear'
    },
    shoe = {
        id: 13,
        name: 'NIKE AIR FORCE 1 SHADOW SUMMIT WHITE TEAM ORANGE (W)',
        src: 'low-bred.jpg',
        qty: 8,
        prize: 'đ 4,500,000',
        model: 'footwear'
    },
    shoe = {
        id: 14,
        name: 'AIR JORDAN 1 MID WHITE RED ROYAL (W)',
        src: 'chicago-black-toe.jpg',
        qty: 0,
        prize: 'đ 1,500,000',
        model: 'footwear'
    },
    shoe = {
        id: 15,
        name: 'NIKE AIR FORCE 1 SHADOW SUMMIT WHITE BARELY VOLT CRIMSON TINT (W)',
        src: 'sacai-nylon.jpg',
        qty: 5,
        prize: 'đ 9,500,000',
        model: 'footwear'
    },
    shoe = {
        id: 16,
        name: 'NIKE LEBRON 17 AS MONSTAR',
        src: 'gold-ultra.jpg',
        qty: 47,
        prize: 'đ 8,500,000',
        model: 'footwear'
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

    },

]

// ----------------footwear.html---------------------------//
//show-product-model


function showModel(products) {
    if (products > dataShoe.length) {
        products = dataShoe.length;
    }
    let row = document.getElementsByClassName('row-content');
    for (let i = 0; i < products.length; i++) {
        //tạo thẻ con trong Row
        let colContent = document.createElement('div');
        let img = document.createElement('img');
        let a = document.createElement('a');
        let h5 = document.createElement('h5');
        //thêm nội dung và nguồn ảnh 
        let dataImg = 'image/' + products[i].src;
        let aData = document.createTextNode(products[i].name);
        let dataH5 = document.createTextNode(products[i].prize);
        colContent.className = 'col-content';
        //thêm thẻ con vào trong row-content
        img.src = dataImg;
        a.appendChild(aData);
        h5.appendChild(dataH5);
        colContent.appendChild(img);
        colContent.appendChild(a);
        colContent.appendChild(h5);
        row[0].appendChild(colContent);
    }

}

function filterModel() {
    let keyword = document.getElementsByClassName('keyword');
    let filModel = [];
    for (let i = 0; i < dataShoe.length; i++) {
        let model = dataShoe[i].model;
        if (model == 'footwear') {
            filModel.push(dataShoe[i]);
        }
    }
    return filModel;
}


// filter product

function openFilter() {
    let diplayFil = document.getElementById('filter-side');
    diplayFil.style.display = 'block';
    diplayFil.style.animation = 'sidefilter-right 0.5s'
}

function closeFilter() {
    let diplayFil = document.getElementById('filter-side');
    diplayFil.style.animation = 'sidefilter-left 0.5s';
    //biến mất sau 0.49s
    setTimeout(() => {
        diplayFil.style.display = 'none';
    }, 490);

}




// load filter
let filterItem = ['adidas', 'Converse',
    'Puma', 'Reebok', 'Nike', 'CASIO',
    'Asics', 'Bape', 'OTHERS', 'Air Jordan', 'Reshoevn8r']

function showItemfilter() {
    let fillter = document.getElementsByClassName('fil-brands');
    if (fillter[0].style.display == 'block') {
        fillter[0].style.display = 'none';
    } else {
        fillter[0].style.display = 'block';
    }
}

function loadItemfilter() {
    let div = document.createElement('div');
    div.className = 'fil-row';
    let showBrand = document.getElementsByClassName('fil-brands');
    for (let i = 0; i < filterItem.length; i++) {
        let divChild = document.createElement('div');
        let p = document.createElement('p');
        p.className = 'keyItem';
        divChild.className = 'fil-col';
        let pItem = document.createTextNode(filterItem[i]);
        p.appendChild(pItem);
        divChild.appendChild(p);
        div.appendChild(divChild);
        showBrand[0].appendChild(div);
    }
}

function findBrand() {
    //load ra item filter 
    loadItemfilter();
    let get = document.getElementsByClassName('keyItem');
    let key;
    for (let i = 0; i < get.length; i++) {
        // click lấy tên của sản phẩm muốn lọc
        let brand = get[i].addEventListener('click', function click() {
            key = get[i].innerText.toUpperCase();
            filterShoes(key);
        });
    }
}

// filter name 

function filterShoes(itembrand) {
    let filterShoes = [];
    for (let i = 0; i < dataShoe.length; i++) {
        let shoes = dataShoe[i].name.toUpperCase();
        if (shoes.indexOf(itembrand) != -1 && dataShoe[i].model == 'footwear') {
            filterShoes.push(dataShoe[i]);
        }
    }
    removefil();
    showModel(filterShoes);
}

function removefil() {
    let clear = document.getElementsByClassName('col-content');
    while (clear.length != 0) {
        clear[0].remove();
    }
}
//run

findBrand();
showModel(filterModel());

