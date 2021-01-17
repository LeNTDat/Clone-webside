
// data
let dataShoe = [
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

let product = 9;
function countproduct() {
    check = dataShoe.length - product;
    let col = document.getElementsByClassName('col-content');
    while (col.length != 0) {
        col[0].remove();
    }
    showData(product += check);
}
//hiển thị data

function showData(products) {
    if (products > dataShoe.length) {
        products = dataShoe.length;
    }
    let row = document.getElementsByClassName('row-content');
    if (typeof (row[0]) != 'undefined') {
        for (let i = 0; i < products; i++) {
            //tạo thẻ con trong Row
            let colContent = document.createElement('div');
            let img = document.createElement('img');
            let a = document.createElement('a');
            let h5 = document.createElement('h5');
            //thêm nội dung và nguồn ảnh 
            let dataImg = 'image/' + dataShoe[i].src;
            let aData = document.createTextNode(dataShoe[i].name);
            let dataH5 = document.createTextNode(dataShoe[i].prize);
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
}



//search products

function filterSearch() {

    let getInput = document.getElementById('search-input').value.toUpperCase();
    let filterName = [];
    let filterQty = [];
    for (let i = 0; i < dataShoe.length; i++) {
        if (dataShoe[i].name.toUpperCase().indexOf(getInput) != -1 || getInput == '') {
            filterName.push(dataShoe[i].name);
            filterQty.push(dataShoe[i].qty);
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
showData(product);