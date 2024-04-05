var imgUrl ;
var inputImg;
function readUrl(input){
    var reader = new FileReader();
    reader.onload = function(event) {
        // console.log(event.target.result); 
        imgUrl = event.target.result;
        document.querySelector("#selectedImg").src = imgUrl;
    }; 
    inputImg=input.files[0];
    reader.readAsDataURL(inputImg);
}

var hiddenImg;
function encode(){
    const encodeImgDiv =document.querySelector("#encodeImg");
     hiddenImg = steg.encode(document.querySelector("#HiddenMsg").value,imgUrl);
    encodeImgDiv.src =hiddenImg;

}

const downloadButton = document.querySelector(".download_btn");
downloadButton.addEventListener("click" , () =>{
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.href=hiddenImg;
    a.download='enocde.png';
    a.click();
});

