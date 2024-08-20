const accesskey="6RRyszpO6jftEB76UPuR-r9jeLIaE1SM-Nd-eaY6Pgs";

const searchform= document.getElementById("searchform");
const searchbox= document.getElementById("searchbox");
const searchresult= document.getElementById("searchresult");
const more= document.getElementById("more");

let keyword="";
let page=1;

async function searchimages() {
    keyword=searchbox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}`;
    //we not give backtick beacause we were use the $sign for var
//here $page take value from let page & query take  value  keywors
//here $page take value from let page & query take  value from keywors

    const response=await fetch(url);// it fetch data from above url
    const data=await response.json();
    const results=data.results;
    if(page===1){
        searchresult.innerHTML=""; //clear the search result
    }
    results.map((result)=>{
        const image=document.createElement("img");
        image.src=result.urls.small;
        const imageLink=document.createElement("a");
        imageLink.href=result.links.html;
        imageLink.target="_blank";
      
        imageLink.appendChild(image);
        searchresult.appendChild(imageLink);  
        
        
    }   
    )
    more.style.display='block';
}



//array method is important because if you fetch something from the there data will come in array form

//searchbtn.addEventListener("click",searchimages); we will check it
searchform.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchimages();
})
more.addEventListener("click",()=>{
    page++;
    searchimages();

})