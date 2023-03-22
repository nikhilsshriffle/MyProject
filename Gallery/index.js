
function setFilterData(showData) {
  const IterateData = showData.map((element)=>`<h1>${element.title}</h1>
  <img width=${100} src=${element.url} alt=${'Image Not Found'} />`)
  // console.log('IterateData',IterateData)
  document.querySelector('.gallery-content').innerHTML = IterateData

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
