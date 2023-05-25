const itemsDiv = document.getElementById('items');
const itemsInLocal = JSON.parse(localStorage.getItem('items'));
const items = itemsInLocal ?? [];
items.forEach((item, index) => {
  if (index === 1) return;
  const itemDiv = document.createElement('div');
  itemDiv.classList.add('col', 'item');
  const carousel = item.image.carouselImg.reduce((res, itemImg) => {
    return res + `<img src='${itemImg}'/>`;
  }, ``);
  itemDiv.innerHTML = `
            <div class="item-img">
    <img src=${item.image.mainImg} alt="" />
            </div>
            <div class="item-detail text-center">
              <div class="owl-carousel owl-theme owl-height items-carousel">
    ${carousel}
              </div>
              <div class="item-content mt-4">
    <p class="item-name">${item.name}</p>
    <p class="item-price">$ ${item.price}</p>
    <a id="${item.id}" href="item-detail-1.html" onclick=onShopThisBtn(event) class="item-detail-link"
                  >shop this &nbsp;
                  <i class="fa-solid fa-angle-right fa-2xs"></i
                ></a>
              </div>
            </div>


  `;

  itemsDiv.insertBefore(itemDiv, itemsDiv.firstChild);
});

function onShopThisBtn(event) {
  event.preventDefault();
  console.log(event.target.id);
  localStorage.setItem('item-shop-id', event.target.id);
  console.log('after set ');
  window.location.assign('http://localhost:8080/item-detail-1.html');
}

//   < div class="col item" >
//             < !--listItems: [
//   { id, name, link, price, size: [], image: { mainImg, carouselImg: [], detailImg: [], smallImg(imgDetail in item detail) , bagImage } }
// ]-- >
//             <div class="item-img">
//               <img src="./images/men-shirts/black-shirt.jpg" alt="" />
//             </div>
//             <div class="item-detail text-center">
//               <div class="owl-carousel owl-theme owl-height items-carousel">
//                 <img src="./images/men-shirts/black-shirt-1.jpg" alt="" />
//                 <img src="./images/men-shirts/men-black-shirt.jpg" alt="" />
//                 <img src="./images/men-shirts/men-black-shirt-1.jpg" alt="" />
//                 <img src="./images/men-shirts/men-black-shirt-2.jpg" alt="" />
//               </div>
//               <div class="item-content mt-4">
//                 <p class="item-name">Double G cotton poplin shirt</p>
//                 <p class="item-price">$ 780</p>
//                 <a href="#" class="item-detail-link"
//                   >shop this &nbsp;
//                   <i class="fa-solid fa-angle-right fa-2xs"></i
//                 ></a>
//               </div>
//             </div>
//           </div >
