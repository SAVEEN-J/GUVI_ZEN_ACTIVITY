//get all reference

 let form=document.getElementById("makeupform");
 let searchButton=document.querySelector(".searchButton");
var loader = document.querySelector(".loading");
 let product_view = document.getElementById("displayProduct");




// get the data from Makeup API
 function getMakeUp_data(data){
   
//  console.log("getMakeUp_data");
    //  console.log(data);

     data.map((alldata)=>{
     console.log(alldata);
    let brand = alldata.brand;
    let product = alldata.name;
    let price = alldata.price;
    let imgUrl = alldata.image_link;
    let productLink = alldata.product_link;
    let description = alldata.description;
    let sign = alldata.price_sign;
    let category = alldata.category;
    let productType = alldata.product_type;
    let mainDiv = document.createElement("div");
    
    mainDiv.className = "col-12 mt-3 container";
    mainDiv.innerHTML = `
    <div class="card">
        <h3
        class="p-3 mb-2 bg-secondary text-white text-center"
          id="product"
        >
        ${brand}
        </h3>
        <div class="row">
        <div class="col-6" >
        <img
          class="card-img img-fluid img-thumbnail text-left"
          src="${imgUrl}"
          alt="MakeUp Image"
          id="productImg"
          style="height: 300px; width:80%; object-fit: contain;"
        />
        </div>
        
        <div class="col-6" >
        <div class="text-left fs-6 p-1" >
       <h2> ${product}</h2>
        </div>
        <div class="text-left fs-6 p-1" >
         <b> Category:</b> "${category}"
        </div>
        <div class="text-left fs-6 p-1" >
         <b> price:</b> ${price} ${sign}
        </div>
        <a
        class="text-left text-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
        href="${productLink} target="_blank""
        >Visit our Official Website</a
      >
        <div class="text-left" id="Description">
          <p><em>Description</em></p>
          <p>
          
          ${description}
          </p>
        </div>
        </div>
        </div>
      </div>
    `;
    product_view.appendChild(mainDiv);

       })
 }

async function getMakeup_kit(searchKit) {
    loader.classList.add("active");
    // make a api request
    try {

        let response = await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json`);
        let data = await response.json();
// console.log(data);

product_view.innerHTML = "";
getMakeUp_data(data);

if (product_view.innerHTML != "") {
    loader.classList.remove("active");
}
        
        // parse the json to js object
    } catch (error) {
        console.error('error fetching the makeup details');
    }
}


//search kitname
// get the data from Makeup API
function getMakeUp_data_search(data){
   
    //  console.log("getMakeUp_data");
        // console.log("data");
    
         data.map((alldata)=>{
        //  console.log(alldata);
        let brand = alldata.brand;
        let product = alldata.name;
        let price = alldata.price;
        let imgUrl = alldata.image_link;
        let productLink = alldata.product_link;
        let description = alldata.description;
        let sign = alldata.price_sign;
        let category = alldata.category;
        let productType = alldata.product_type;
        let mainDiv = document.createElement("div");
        
        mainDiv.className = "col-12 mt-3 container";
        mainDiv.innerHTML = `
        <div class="card">
            <h3
            class="p-3 mb-2 bg-secondary text-white text-center"
              id="product"
            >
            ${brand}
            </h3>
            <div class="row">
            <div class="col-6" >
            <img
              class="card-img img-fluid img-thumbnail text-left"
              src="${imgUrl}"
              alt="MakeUp Image"
              id="productImg"
              style="height: 300px; width:80%; object-fit: contain;"
            />
            </div>
            
            <div class="col-6" >
            <div class="text-left fs-6 p-1" >
           <h2> ${product}</h2>
            </div>
            <div class="text-left fs-6 p-1" >
             <b> Category:</b> "${category}"
            </div>
            <div class="text-left fs-6 p-1" >
             <b> price:</b> ${price} ${sign}
            </div>
            <a
            class="text-left text-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
            href="${productLink} target="_blank""
            >Visit our Official Website</a
          >
            <div class="text-left" id="Description">
              <p><em>Description</em></p>
              <p>
              
              ${description}
              </p>
            </div>
            </div>
            </div>
          </div>
        `;
        product_view.appendChild(mainDiv);
    
           })
     }
async function getMakeup_kit_search(searchKit) {
    loader.classList.add("active");
    // make a api request
    try {

        let response = await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json`);
        let data = await response.json();


        product_view.innerHTML = "";
let filter_data = data.filter((item) => {
  let productName = item.name.toLowerCase();
  if (productName.includes(searchKit)) {
    return item;
  }else{
    return false;
  }
});
product_view.innerHTML = "";
getMakeUp_data_search(filter_data);

if (product_view.innerHTML != "") {
    loader.classList.remove("active");
}
        
        // parse the json to js object
    } catch (error) {
        console.error('error fetching the makeup details');
    }
}
function handleSubmit(event) {
    event.preventDefault();

    let kitName = searchinput.value;
    getMakeup_kit_search(kitName);
   
}
 document.addEventListener("DOMContentLoaded", getMakeup_kit);
form.addEventListener('submit', handleSubmit);
searchButton.addEventListener('click', handleSubmit);