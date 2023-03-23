


let current_page = 1;
let rows = 10;
// const list_element = document.getElementById('list');
// const pagination_element = document.getElementById('pagination');

function displayList (items, wrapper, rows_per_page, page) {
  console.log('items',items)
  console.log('rows_per_page',rows_per_page)
  console.log('page',page)
	wrapper.innerHTML = "";
	page--;

	let start = rows_per_page * page;
	let end = start + rows_per_page;
	let paginatedItems = items.slice(start, end);
  console.log('paginatedItems',paginatedItems)
  console.log('paginatedlength',paginatedItems.length)
  
	for (let i = 0; i < paginatedItems.length; i++) {
    console.log('i',i)
		let item = paginatedItems[i];
    console.log('item',item.id)
    let item_element = document.createElement('div')
		item_element.innerHTML = `<span>${item.id}</span><span>${item.title}</span><img width='50' src=${item.url} alt='image not found' />`
		
		wrapper.appendChild(item_element);
	}
}

function displayPagination(wrapper,count,items) {
  // console.log('g1',count)
  // console.log('g2',items)
  	for (let i = 1; i < count + 1; i++) {
		let btn = PaginationButton(i, items);
		wrapper.appendChild(btn);
	}
}

function SetupPagination (items, wrapper, rows_per_page) {
	// wrapper.showData = "";
  console.log('items.length',items.length)
	// let page_count = Math.ceil(items.length / rows_per_page);
  let page_Count = 10 
  let leftarrowBtn = document.createElement('button');
  leftarrowBtn.innerHTML ='<'
  // if (page_Count ===10) {
  // leftarrowBtn.style.display = 'none';
  // }
  // else {
  //   leftarrowBtn.style.display ='block'
  // }
  wrapper.appendChild(leftarrowBtn)

  displayPagination(wrapper,page_Count,items)


	// for (let i = 1; i < page_Count + 1; i++) {
	// 	let btn = PaginationButton(i, items);
	// 	wrapper.appendChild(btn);
	// }

  let rightarrowBtn = document.createElement('button');
  rightarrowBtn.innerHTML ='>'
  
  rightarrowBtn.addEventListener('click', function () {
    console.log('page_Count',page_Count)
    page_Count = page_Count + 1;
    // console.log('wrapper',wrapper)
    // console.log('page_Count',page_Count)
    // console.log('data',items)
   let scrollPaginationbtn = PaginationButton(page_Count,items)
   wrapper.appendChild(scrollPaginationbtn);
  })

  wrapper.appendChild(rightarrowBtn)
}

function PaginationButton (page, items) {
  // console.log('page',page)
  let current_page = 1;
  let rows = 10;
	let button = document.createElement('button');
	button.innerText = page;

	// if (current_page == page) button.classList.add('active');
  const list_element = document.getElementById('list');
	button.addEventListener('click', function () {
		current_page = page;
    console.log('current_page',current_page)
		displayList(items, list_element, rows, current_page);

		let current_btn = document.querySelector('.pagenumbers button.active');
		// current_btn.classList.remove('active');

		// button.classList.add('active');
	});

	return button;
}





function setFilterData(showData) {
  const list_element = document.getElementById('list');
  const pagination_element = document.getElementById('pagination');
  displayList(showData, list_element, rows, current_page);
  SetupPagination(showData, pagination_element, rows);

}

function setData(data) {
  let searchvalue = document.querySelector('#search');
  console.log('data',data)

  setFilterData(data)
    searchvalue.addEventListener('change',function(e) {
      const filterData = data.filter((searchresult)=> searchresult.title.includes(e.target.value))
      console.log('filterData',filterData)
      setFilterData(filterData)
     })
}

fetch('https://jsonplaceholder.typicode.com/photos/')
    .then(res =>res.json())
    .then(res =>setData(res))
