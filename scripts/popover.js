const bagIcons = $('.bag-popover');
const bagPopover = $('#bag-detail-popover');
const signInIcons = $('.signin-popover');
const signInPopover = $('#signin-popover');

const allPopovers = $('.my-popover');
// when hover to user's bag icon
let saveTimeout;

bagIcons.on('mouseenter', function() {
  console.log(this);
  console.log('bagIcon mouseenter');
  allPopovers.removeClass('active');
  bagPopover.addClass('active');

  saveTimeout = setTimeout(() => {
    bagPopover.removeClass('active');
  }, 3000);
});

bagPopover.mouseenter(() => {
  console.log('bagPopover mouseenter');
  allPopovers.removeClass('active');
  clearTimeout(saveTimeout);
  bagPopover.addClass('active');
});

bagPopover.mouseleave(() => {
  console.log('bagPopover mouseleave');

  bagPopover.removeClass('active');
});

// when hoverr to sign in

let signInSaveTimeOut;
signInIcons.mouseenter(() => {
  console.log('signIn icon mousenter');
  allPopovers.removeClass('active');
  signInPopover.addClass('active');

  signInSaveTimeOut = setTimeout(() => {
    signInPopover.removeClass('active');
  }, 3000);
});

signInPopover.mouseenter(() => {
  console.log('signin popover mouseenter');
  allPopovers.removeClass('active');
  clearTimeout(signInSaveTimeOut);
  signInPopover.addClass('active');
});

signInPopover.mouseleave(() => {
  console.log('signIn popover mouse leave');

  signInPopover.removeClass('active');
});

// const items = [
//   {
//     id: Math.random(),
//     name: 'Double G cotton poplin black shirt',
//     color: '#000',
//     colorName: 'black',
//     link: 'black-shirt',
//     price: 780,
//     size: ['XXXS', 'XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
//     image: {
//       mainImg: './images/men-shirts/black-shirt.jpg',
//       carouselImg: [
//         './images/men-shirts/black-shirt-1.jpg',
//         './images/men-shirts/men-black-shirt.jpg',
//         './images/men-shirts/men-black-shirt-1.jpg',
//         './images/men-shirts/men-black-shirt-2.jpg',
//       ],
//       detailImg: [
//         './images/men-shirts/men-shirts-detail/black-shirt/black-shirt.jpg',
//         './images/men-shirts/men-shirts-detail/black-shirt/black-shirt-1.jpg',
//         './images/men-shirts/men-shirts-detail/black-shirt/black-shirt-2.jpg',
//         './images/men-shirts/men-shirts-detail/black-shirt/black-shirt-3.jpg',
//         './images/men-shirts/men-shirts-detail/black-shirt/black-shirt-4.jpg',
//       ],
//       smallImg:
//         './images/men-shirts/men-shirts-detail/black-shirt/black-shirt-item-detail.jpg',
//       popoverImg: './images/black-shirt-popover.jpg',
//       bagImg: './images/bag-detail-img/black-shirt.jpg',
//     },
//   },
//   {
//     id: Math.random(),
//     name: 'Double G cotton poplin blue shirt',
//     link: 'blue-shirt',
//     color: '#0e4276',
//     colorName: 'dark blue',
//     price: '1005',
//     size: ['XXXS', 'XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
//     image: {
//       mainImg: './images/men-shirts/blue-shirt.jpg',
//       carouselImg: [
//         './images/men-shirts/men-shirts-detail/blue-shirt/blue-shirt-men-1-800px.jpg',
//         './images/men-shirts/men-shirts-detail/blue-shirt/blue-shirt-1.jpg',
//         './images/men-shirts/men-shirts-detail/blue-shirt/blue-shirt-men-2.jpg',
//         '',
//       ],
//       detailImg: [
//         './images/men-shirts/men-shirts-detail/blue-shirt/blue-shirt-men-1-800px.jpg',
//         './images/men-shirts/men-shirts-detail/blue-shirt/blue-shirt-1.jpg',
//         './images/men-shirts/men-shirts-detail/blue-shirt/blue-shirt-men-2.jpg',
//         './images/men-shirts/men-shirts-detail/blue-shirt/blue-shirt-2.jpg',
//         './images/men-shirts/men-shirts-detail/blue-shirt/blue-shirt-men-3.jpg',
//         './images/men-shirts/men-shirts-detail/blue-shirt/blue-shirt-men-4.jpg',
//       ],
//       smallImg:
//         './images/men-shirts/men-shirts-detail/blue-shirt/blue-shirt-item-detail.jpg',
//       popoverImg: './images/men-shirts/men-shirt-bag/blue-shirt/blue-shirt.jpg',
//       bagImg: './images/blue-shirt-bag.jpg',
//     },
//   },
//   {
//     id: Math.random(),
//     name: 'Cotton shirt with symbols',
//     link: 'white-shirt',
//     color: '#faf5ef',
//     colorName: 'white',
//     price: 1150,
//     size: ['XXXS', 'XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
//     image: {
//       mainImg: './images/men-shirts/white-shirt.jpg',
//       carouselImg: [
//         './images/men-shirts/men-white-shirt.jpg',
//         './images/men-shirts/white-shirt-neck.jpg',
//         './images/men-shirts/men-white-shirt-1.jpg',
//         './images/men-shirts/men-white-shirt-2.jpg',
//       ],
//       detailImg: [
//         './images/white-shirt/white-shirt-detail/white-shirt-detail-1.jpg',
//         './images/white-shirt/white-shirt-detail/white-shirt-detail-2.jpg',
//         './images/white-shirt/white-shirt-detail/white-shirt-detail-3.jpg',
//         './images/white-shirt/white-shirt-detail/white-shirt-detail-4.jpg',
//         './images/white-shirt/white-shirt-detail/white-shirt-detail-5.jpg',
//       ],
//       smallImg: './images/white-shirt/white-shirt-small.jpg',
//       popoverImg: './images/white-shirt/white-shirt-popover.jpg',
//       bagImg: './images/white-shirt/white-shirt-bag.jpg',
//     },
//   },
// ];
// localStorage.setItem('items', JSON.stringify(items));
