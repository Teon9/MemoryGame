const box = document.getElementsByClassName("box");
const imgBoxList = box[0].getElementsByClassName("imgBox");
let imgOpen = 0;
let numberList = [];
let fbPlace = [];
    let instaPlace = [];
    let ytPlace = [];
let numberIsSame = 0;
    let imgIsOpen =[];
    let correct ;
    let points = 0;
window.onload = () =>{
    randomizeList();
    randomizeImg();
}

function createFb(){
    const fb = document.createElement("img");
    fb.setAttribute("src","img/fb.png");
    fb.setAttribute("height","90%");
    fb.setAttribute("width","80%");
    fb. style. visibility = ('hidden');
    return fb;
}

function createInsta(){
    const insta = document.createElement("img");
    insta.setAttribute("src","img/insta.png");
    insta.setAttribute("height","90%");
    insta.setAttribute("width","80%");
    insta. style. visibility = ('hidden');
    return insta;
}

function createYt(){
    const yt = document.createElement("img");
    yt.setAttribute("src","img/yt.png");
    yt.setAttribute("height","90%");
    yt.setAttribute("width","80%");
    yt.style.visibility = ('hidden');
    return yt;
}
    
function hideImg(index){
    imgBoxList[index].children[0].style.visibility = 'hidden';
}

    
function openImg(number)
{
    let imgFromDiv = imgBoxList[number].children[0];
    
     if(imgIsOpen.length >2)
    {
        for(let i = 0; i < 3; i++ )
        {
            if(imgIsOpen.findIndex(item => item == fbPlace[i]) != -1)
            {
                    numberIsSame++;
                    console.log(numberIsSame)
                    numberIsSame == 3 ? correct = 1 : null;
             }
            }
            numberIsSame =0; 
            
            for(let i = 0; i < 3; i++ )
            {
                if(imgIsOpen.findIndex(item => item == instaPlace[i]) != -1)
                {
        
                    numberIsSame++;
                    console.log(numberIsSame)
                    numberIsSame == 3 ? correct = 1 : null;
             }
             }
            numberIsSame =0; 
            for(let i = 0; i < 3; i++ )
        {
            if(imgIsOpen.findIndex(item => item == ytPlace[i]) != -1)
            {
                    numberIsSame++;
                    console.log(numberIsSame)
                    numberIsSame == 3 ? correct = 1 : null;
            }
        }   
        numberIsSame =0;
        if(correct == 1)
        {
            correct = 0;
            imgIsOpen.shift()
            imgIsOpen.shift()
            imgIsOpen.shift()
            imgIsOpen.shift()
            console.log("correct" +correct)
            points++;
            let h2 =document.getElementsByTagName("h2")
            let h2Text = h2[0].innerText;
            let length = h2Text.length;
            let h2NewText;
            let lastIndex ;
            if(h2Text.lastIndexOf("1") != -1){
                 h2[0].innerText = h2Text.substring(0, length - 1);
            }
            else if (h2Text.lastIndexOf("2") != -1){
                h2[0].innerText = h2Text.substring(0, length - 1);
            }
           h2[0].innerText += points
        }   
        else
        {
            for(let i=0; i< imgIsOpen.length;i++)
            hideImg(imgIsOpen[i])
            imgIsOpen.shift()
            imgIsOpen.shift()
            imgIsOpen.shift()
            imgIsOpen.shift()
        }
    }
    else 
    {
        if(points == 3){
            location.reload();
        }
        if(imgIsOpen.findIndex(item => item == number) == -1)
        {
             
            imgFromDiv.style. visibility = 'visible';
            imgIsOpen.push(number)
        }
        else
        {
             console.log("else")
            
        }
    }
}  
    function randomizeList(){
    
    let secondNumber = -1;
    let index =0;
    let randomNumber;
    let sameNumber;
    var nums = [0,1,2,3,4,5,6,7,8],
    ranNums = [],
    i = nums.length,
    j = 0;

    while (i--) {
    j = Math.floor(Math.random() * (i+1));
    numberList.push(nums[j]);
    nums.splice(j,1);   
}
}   
    
function randomizeImg(){
    
    let index;
    for(let i = 0 ; i < 9; i++){
        index = numberList[i];
        
        if(i < 3){
            fbPlace.push(index);
            const fb = createFb();
            imgBoxList[index].appendChild(fb);
        }
                else if(i < 6){
                    instaPlace.push(index);
                    const insta = createInsta();
                    imgBoxList[index].appendChild(insta);
                }
                    else {
                        ytPlace.push(index);
                        const yt = createYt();
                        imgBoxList[index].appendChild(yt);
                    }
     }
}
             
    
    
    
    




        
            
        



