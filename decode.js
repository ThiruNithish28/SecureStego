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
    // const imgContainer = document.querySelector('.img_container');
    // const heading = document.createElement('p');
    // heading.innerText='Selected Image';
    // imgContainer.appendChild(heading);

    const decode_imgContainer = document.querySelector('.decode_selectImg');
    const imgdiv = document.createElement('img'); 
    imgdiv.style.width='100%';
    decode_imgContainer.innerHTML='';// Clear previous images
    decode_imgContainer.appendChild(imgdiv); 
    imgdiv.src=imgUrl;
}

const decodeBtn = document.getElementById('decodebtn');
var hiddenMsg
decodeBtn.addEventListener("click",()=>{
    decodeImg(imgUrl);
});

function decodeImg(image){
    hiddenMsg = steg.decode(image);
    const messageArea = document.querySelector(".result");
    messageArea.innerText=hiddenMsg;
}

