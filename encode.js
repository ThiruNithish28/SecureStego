var imgUrl ;
var inputImg;
function readUrl(input){
    var reader = new FileReader();
    reader.onload = function(event) {
        imgUrl = event.target.result;  // get image url

        // add img div, p tag dynamically
        const imgContainer = document.querySelector('.selectimg_container');
        const selectedImgDiv = document.createElement('img');
        const headingPtag = document.createElement('p'); 
        // add details 
        headingPtag.textContent='selected img :';
        selectedImgDiv.src=imgUrl;
        // add to html page
        imgContainer.appendChild(headingPtag);
        imgContainer.appendChild(selectedImgDiv);
      
    }; 
    inputImg=input.files[0];
    reader.readAsDataURL(inputImg);
}

var hiddenImg;
function encode(){
    // encode the mesg using stego.encode() 
     hiddenImg = steg.encode(document.querySelector("#HiddenMsg").value,imgUrl);
     // add to encode img to hrml dynamically
     const resultContainer =document.querySelector(".result_container");
     const imgDiv = document.createElement('img');
     const heading_pTag= document.createElement('p');
     // add value to created element
     heading_pTag.textContent='Result :';
     imgDiv.src= hiddenImg;
    // add to the html page
    resultContainer.appendChild(heading_pTag);
    resultContainer.appendChild(imgDiv);
}

const downloadButton = document.querySelector(".download_btn");
downloadButton.addEventListener("click" , () =>{
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.href=hiddenImg;
    a.download='enocde.png';
    a.click();
});

