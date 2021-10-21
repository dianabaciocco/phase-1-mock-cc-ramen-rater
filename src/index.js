

// ## Setup

// - [x]Run `json-server --watch db.json` to get the backend started
// - [x]Open the `index.html` file on your browser

// ## Endpoints
// [x]Your base URL for your API will be: `http://localhost:3000`
// The endpoints you may need are:
// - GET `/ramens`
// - GET `/ramens/:id`

// Feel free to add any additional classes or ids to any elements in the HTML file

// ## Core Deliverables
// []See all ramen images in the `div` with  id of `ramen-menu`. When the page loads, request the data from the server to get all the ramen objects.
// []display the image for each ramen using an `img` tag inside the `#ramen-menu` div.
// - []Click on an image from the `#ramen-menu` div and see all the info about that
//   ramen displayed inside the `#ramen-detail` div and where it says
//   `insert comment here` and `insert rating here`.
// - []Create a new ramen after submitting the `new-ramen` form. 
//    The new ramen should be added to the`#ramen-menu` div. if you refresh the page, it's okay that the new ramen is no longer on the page.

const url = 'http://localhost:3000/ramens'


const div = document.querySelector('#new-ramen')
const imgList = document.querySelector('#ramen-menu')


//fetch imgs
function getAllRamen(){
  return fetch(url)
  .then(res => res.json())
  .then(renderAllRamen)
}

//rendering

//render imgs from server for each img 
function renderAllRamen(ramenMenu){
  console.log('ramenArr: ', ramenMenu);
  ramenMenu.forEach(renderOneRamen)
}

function renderOneRamen(ramenObj){
  const div = document.createElement('img')
  div.innerHTML = `
    <img src="${ramenObj}">
  `
  div.classList.add('edit-ramen')

  img.appendChild(div)
  
}
//event handlers
//e.preventDefault()
//function handleNewRamen()



// init
getAllRamen()



