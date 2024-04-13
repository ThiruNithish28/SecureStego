var imgUrl;
function readUrl(input){
    var reader = new FileReader();
    reader.onload = function(event){
        imgUrl = event.target.result;
        addImgElement();
    } 
    var inpurtImg = input.files[0];
    reader.readAsDataURL(inpurtImg);
}

function addImgElement(){
    const decode_imgContainer = document.querySelector('.decode_selectImg');
    const imgdiv = document.createElement('img'); 
    imgdiv.style.width='100%';
    decode_imgContainer.innerHTML='';// Clear previous images
    imgdiv.src=imgUrl;
    const headingPtag = document.createElement("p");
    headingPtag.innerHTML='Selected Image :';
    headingPtag.style='font-weight:bold';
    decode_imgContainer.appendChild(headingPtag);
    decode_imgContainer.appendChild(imgdiv); 
    
}

const decodeBtn = document.getElementById('decodebtn');
var hiddenMsg
decodeBtn.addEventListener("click",()=>{
    decodeImg(imgUrl);
});

function decodeImg(image){

    const headingTag = document.querySelector('.heading');
    headingTag.innerHTML="Hidden Message";
    // decode 
    hiddenMsg = steg.decode(image);
    // show the msg
    const messageArea = document.querySelector(".result");
    messageArea.innerText=hiddenMsg;

   
}

