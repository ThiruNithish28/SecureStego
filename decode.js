var imgUrl;
function readUrl(input){
    var reader = new FileReader();
    reader.onload = function(event){
        imgUrl = event.target.result;
        console.log(imgUrl);
    } 
    var inpurtImg = input.files[0];
    reader.readAsDataURL(inpurtImg);
}

const decodeBtn = document.getElementById('btn');
var hiddenMsg
decodeBtn.addEventListener("click",()=>{
    decodeImg(imgUrl);
});

function decodeImg(image){
    hiddenMsg = steg.decode(image);
    const messageArea = document.querySelector(".result");
    messageArea.innerText=hiddenMsg;
}

