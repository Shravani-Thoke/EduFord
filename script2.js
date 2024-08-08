document.body.style.fontFamily="Poppins,san-serif"

function create(element){
    return document.createElement(element)
}

function appendToBody(ele){
    document.body.appendChild(ele)
}

function _style(ele)
{
    return ele.style;
}

document.body.style.height="550px"
document.body.style.margin="0%"
document.body.style.background="url('img/banner.png')"
document.body.style.backgroundSize="100% 100%"
document.body.style.backgroundRepeat="no-repeat"

var overlay=create("div");
var header=create("header")
var h_backbutton=create("button")
var h_i=create("i")
var h_span=create("span")

header.className="myHeader"
h_backbutton.className="back_button1"
h_i.className="fa-solid fa-chevron-left"
overlay.className="overlay"

appendToBody(overlay)
overlay.append(header)
header.append(h_backbutton)
h_backbutton.append(h_i)
h_backbutton.append(h_span)

_style(overlay).height="100%"
_style(overlay).margin="0px"
_style(overlay).width="100%"
_style(overlay).background="rgba(7, 25, 51, 0.7)"
_style(header).height="20%"
_style(header).width="100%"
_style(header).display="flex"
_style(header).justifyContent="flex-end"
_style(header).alignItems="end"
_style(h_backbutton).padding="9px 20px"
_style(h_backbutton).margin="9px 80px"
_style(h_span).paddingLeft="5px"
_style(h_span).color="#fff"
_style(h_i).color="#fff"
_style(h_backbutton).backgroundColor="transparent"
_style(h_backbutton).border="2px solid #fff"
_style(h_backbutton).borderRadius="20px"
_style(h_span).fontSize="15px"
_style(h_span).fontWeight="600"

document.querySelector(".back_button1").addEventListener("mouseover",function(){
    _style(h_span).color="#fff"
    _style(h_i).color="#fff"
    _style(h_backbutton).backgroundColor="#ff5334"
    _style(h_backbutton).border="2px solid #ff5334"
})
document.querySelector(".back_button1").addEventListener("mouseout",function(){
    _style(h_span).color="#fff"
    _style(h_i).color="#fff"
    _style(h_backbutton).backgroundColor="transparent"
    _style(h_backbutton).border="2px solid #fff"
})
h_backbutton.setAttribute('onclick','location.href="index.html"')

h_span.innerText="Back To Home"


var main=create("main");
var card=create("div")
var formdiv=create("div")
var form=create("form")
var logodiv=create("div")
var logo=create("img")
var logoTitle=create("p")
var input1=create("input")
var input2=create("input")
var input3=create("input")
var input4=create("input")
var input5=create("input")
var formP=create("p")
var formA=create("a")

main.className="myMain"
card.className="card"
form.id="myForm"
logodiv.className="logodiv "
formdiv.className="formdiv "
input1.className="input "
input2.className="input "
input3.className="input "
input4.className="input "
input5.className="submit "
formA.className="A"

overlay.append(main)
main.append(card)
card.append(formdiv)
formdiv.append(form)
form.append(logodiv)
logodiv.append(logo)
logodiv.append(logoTitle)
form.append(input1)
form.append(input2)
form.append(input3)
form.append(input4)
form.append(input5)
formdiv.append(formP)
formdiv.append(formA)

_style(main).height="80%"
_style(main).width="100%"
_style(main).margin="0%"
_style(main).display="flex"
_style(main).justifyContent="center"
_style(main).alignItems="start"

_style(card).height="90%"
_style(card).width="25%"
_style(card).margin="0%"
_style(card).backdropFilter= "blur(6px) saturate(180%)"
_style(card).backgroundColor= "rgba(155,155,155, 0.30)"
_style(card).borderRadius="12px"
_style(card).border=" 1px solid rgba(255, 255, 255, 0.125)"
_style(card).boxShadow=" 0px 0px 20px rgba(255, 255, 255,0.65)"

_style(formdiv).height="90%"
_style(form).display="flex"
_style(form).flexDirection="column"
_style(form).alignItems="center"
_style(form).justifyContent="center"

_style(logodiv).display="flex"
_style(logodiv).flexDirection="column"
_style(logodiv).alignItems="center"
_style(logodiv).justifyContent="center"
_style(logoTitle).margin="0"
_style(logo).paddingTop="20px"
_style(logoTitle).fontSize="20px"
_style(logoTitle).fontWeight="600"
_style(logoTitle).color="#fff"

logo.setAttribute('src','img/logo.png')
logo.setAttribute('height','60')
logo.setAttribute('width','170')

logoTitle.innerText="Sign Up"

document.querySelectorAll(".input").forEach(item=>{
    item.style.padding="5px"
    item.style.width="80%"
    item.style.margin="8px 0px"
    item.style.border="1px solid #A9A9A9"
    item.style.fontFamily="Poppins , san-serif"
})
document.querySelectorAll(".submit").forEach(item=>{
    item.style.width="80%"
    item.style.padding="6px"
    item.style.margin="8px 0px"
    item.style.fontFamily="Poppins , san-serif"
    item.style.fontWeight="500"
    item.style.backgroundColor="#ff5334"
    item.style.border="2px solid #ff5334"
    item.style.color="#fff"

})

document.querySelector('.submit').addEventListener("mouseover",()=>{

    _style(input5).padding="6px"
    _style(input5).backgroundColor="transparent"
    _style(input5).border="2px solid #ff5334"
    _style(input5).color="#ff5334"
    _style(input5).cursor="pointer"
    
})
document.querySelector('.submit').addEventListener("mouseout",()=>{
    _style(input5).padding="6px"
    _style(input5).backgroundColor="#ff5334"
    _style(input5).border="2px solid #ff5334"
    _style(input5).color="#fff"
    _style(input5).cursor="pointer"
})

input1.setAttribute('placeholder','Name')
input1.setAttribute('type','text')
input2.setAttribute('placeholder','Last name')
input2.setAttribute('type','text')
input3.setAttribute('placeholder','Email')
input3.setAttribute('type','email')
input4.setAttribute('placeholder','Password')
input4.setAttribute('type','password')
input5.setAttribute('type','submit')
input5.setAttribute('value','Sign In')
input5.setAttribute('onsubmit','document.getElementById("myForm").reset()')
input1.setAttribute('name','name')
input2.setAttribute('name','lname')
input3.setAttribute('name','email')
input4.setAttribute('name','password')
input1.setAttribute('required','')
input2.setAttribute('required','')
input3.setAttribute('required','')
input4.setAttribute('required','')

_style(formP).display="inline-block"
_style(formP).padding="0px 20px 20px 20px"
_style(formP).margin="0px "
_style(formP).fontSize="15px"
_style(formP).color="#fff"
_style(formA).fontSize="15px"
_style(formA).color="#fff"

document.querySelector("A").addEventListener("mouseover",function(){
    _style(formA).color="#ff5334"
    _style(formA).textDecoration="underline"
})
document.querySelector("A").addEventListener("mouseout",function(){
    _style(formA).color="#fff"
})

formA.setAttribute("href","#")

formP.innerText="Already Have an Account? "
formA.innerText="SignIn"

document.querySelectorAll(".bdr").forEach(item=>{
    item.style.border="1px solid black"
})