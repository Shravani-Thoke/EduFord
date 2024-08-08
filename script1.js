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

var header=create("header")
var headerdiv=create("div")
var h_title=create("p")
var h_buttondiv=create("div")
var h_backbutton=create("button")
var h_i=create("i")
var h_span=create("span")

header.className="myHeader"
h_backbutton.className="back_button"
h_i.className="fa-solid fa-chevron-left"

appendToBody(header)
header.append(headerdiv)
headerdiv.append(h_title)
header.append(h_buttondiv)
h_buttondiv.append(h_backbutton)
h_backbutton.append(h_i)
h_backbutton.append(h_span)

//Header style
_style(header).height="100px"
_style(header).width="100%"
_style(headerdiv).height="100%"
_style(headerdiv).width="80%"
_style(headerdiv).display="inline-block"
_style(h_title).fontSize="40px"
_style(h_title).fontWeight="700"
_style(h_title).paddingLeft="200px"
_style(h_title).display="flex"
_style(h_title).justifyContent="center"
_style(h_title).alignItems="center"
_style(h_buttondiv).display="inline-block"
_style(h_buttondiv).padding="20px 0px"
_style(h_backbutton).padding="9px 20px"
_style(h_span).paddingLeft="5px"
_style(h_span).color="#ff5334"
_style(h_i).color="#ff5334"
_style(h_backbutton).backgroundColor="transparent"
_style(h_backbutton).border="2px solid #ff5334"
_style(h_backbutton).borderRadius="20px"
_style(h_span).fontSize="15px"
_style(h_span).fontWeight="600"

document.querySelector(".back_button").addEventListener("mouseover",function(){
    _style(h_span).color="#fff"
    _style(h_i).color="#fff"
    _style(h_backbutton).backgroundColor="#ff5334"
    _style(h_backbutton).border="2px solid #ff5334"
})
document.querySelector(".back_button").addEventListener("mouseout",function(){
    _style(h_span).color="#ff5334"
    _style(h_i).color="#ff5334"
    _style(h_backbutton).backgroundColor="transparent"
    _style(h_backbutton).border="2px solid #ff5334"
})
h_backbutton.setAttribute('onclick','location.href="index.html"')

h_title.innerText="Contact Us"
h_span.innerText="Back to Home"


var main=create("main")
var textdiv=create("div")
var text1=create("div")
var text1_icon=create("i")
var text1_info=create("div")
var text1_info1=create("p")
var text1_info2=create("p")
var text2=create("div")
var text2_icon=create("i")
var text2_info=create("div")
var text2_info1=create("p")
var text2_info2=create("p")
var text3=create("div")
var text3_icon=create("i")
var text3_info=create("div")
var text3_info1=create("p")
var text3_info2=create("p")

var formdiv=create("div")
var form=create("form")
var input1=create("input")
var input2=create("input")
var input3=create("input")
var input4=create("textarea")
var input5=create("input")

main.className="myMain"
textdiv.className="textdiv"
text1.className="text1 text "
text2.className="text2 text "
text3.className="text3 text "
text1_icon.className="fa-solid fa-house icon "
text2_icon.className="fa-solid fa-phone icon "
text3_icon.className="fa-solid fa-envelope icon "
text1_info.className="info "
text2_info.className="info "
text3_info.className="info "
text1_info1.className="info1"
text2_info1.className="info1"
text3_info1.className="info1"
text1_info2.className="info2"
text2_info2.className="info2"
text3_info2.className="info2"

formdiv.className="formdiv"
form.id="myForm"
input1.className="input"
input2.className="input"
input3.className="input"
input4.className="textarea"
input5.className="submit"

appendToBody(main)
main.append(textdiv)
textdiv.append(text1)
text1.append(text1_icon)
text1.append(text1_info)
text1_info.append(text1_info1)
text1_info.append(text1_info2)
textdiv.append(text2)
text2.append(text2_icon)
text2.append(text2_info)
text2_info.append(text2_info1)
text2_info.append(text2_info2)
textdiv.append(text3)
text3.append(text3_icon)
text3.append(text3_info)
text3_info.append(text3_info1)
text3_info.append(text3_info2)

main.append(formdiv)
formdiv.append(form)
form.append(input1)
form.append(input2)
form.append(input3)
form.append(input4)
form.append(input5)

//main style
_style(main).height="430px"
_style(main).display="flex"
_style(main).justifyContent="space-evenly"
_style(main).alignItems="center"

_style(textdiv).height="60%"
_style(textdiv).width="30%"
_style(textdiv).display="flex"
_style(textdiv).flexDirection="column"
_style(textdiv).alignContent="space-between"
_style(textdiv).gap="12.5%"

document.querySelectorAll(".text").forEach(element=>{
    element.style.height="30%"
    element.style.display="flex"

})
document.querySelectorAll(".icon").forEach(element=>{
    element.style.height="100%"
    element.style.width="20%"
    element.style.color="#ff5334"    
    element.style.display="flex"    
    element.style.justifyContent="center"    
    element.style.alignItems="center"    
    element.style.fontSize="25px"    
    
})

document.querySelectorAll(".info").forEach(element=>{
    element.style.height="100%"
    element.style.width="80%"
    element.style.display="flex"
    element.style.flexDirection="column"
    element.style.justifyContent="left"
})
document.querySelectorAll(".info1").forEach(element=>{
    element.style.margin="10px 10px 0px 10px"
    element.style.fontSize="18px"    
    element.style.fontWeight="500"    
    element.style.color="#717170"    
    
})
document.querySelectorAll(".info2").forEach(element=>{
    element.style.margin="0px 10px 0px 10px"
    element.style.fontSize="14px"       
    element.style.color="#A9A9A9"    
})

text1_info1.innerText="XYZ Road , ABC Buliding"
text1_info2.innerText="Pune Maharashtra IN"
text2_info1.innerText="+91 1234567890"
text2_info2.innerText="Office no"
text3_info1.innerText="info@eduford.com"
text3_info2.innerText="Email us your query"


_style(formdiv).height="80%"
_style(formdiv).width="50%"
_style(form).display="flex"
_style(form).flexDirection="column"
_style(form).gap="10%"
_style(form).alignContent="space-between"

document.querySelectorAll(".input").forEach(item=>{
    item.style.padding="10px"
    item.style.margin="8px 0px"
    item.style.border="1px solid #A9A9A9"
    item.style.fontFamily="Poppins , san-serif"
})
document.querySelectorAll(".textarea").forEach(item=>{
    item.style.padding="10px"
    item.style.margin="8px 0px"
    item.style.border="1px solid #A9A9A9"
    item.style.fontFamily="Poppins , san-serif"
})
document.querySelectorAll(".submit").forEach(item=>{
    item.style.width="20%"
    item.style.padding="10px"
    item.style.margin="8px 0px"
    item.style.border="1px solid #A9A9A9"
    item.style.fontFamily="Poppins , san-serif"
    item.style.fontWeight="500"
    item.style.backgroundColor="transparent"
    item.style.border="2px solid #ff5334"
    item.style.borderRadius="10px"
    item.style.color="#ff5334"

})

document.querySelector('.submit').addEventListener("mouseover",()=>{
    _style(input5).backgroundColor="#ff5334"
    _style(input5).border="2px solid #ff5334"
    _style(input5).borderRadius="10px"
    _style(input5).color="#fff"
    _style(input5).cursor="pointer"
})
document.querySelector('.submit').addEventListener("mouseout",()=>{
    _style(input5).backgroundColor="transparent"
    _style(input5).border="2px solid #ff5334"
    _style(input5).borderRadius="10px"
    _style(input5).color="#ff5334"
    _style(input5).cursor="pointer"
})

input1.setAttribute('placeholder','Enter your name')
input1.setAttribute('type','text')
input2.setAttribute('placeholder','Enter email address')
input2.setAttribute('type','email')
input3.setAttribute('placeholder','Enter your subject')
input3.setAttribute('type','text')
input4.setAttribute('placeholder','Message')
input4.setAttribute('rows','4')
input5.setAttribute('type','submit')
input5.setAttribute('value','Send Message')
input5.setAttribute('onsubmit','document.getElementById("myForm").reset()')
input1.setAttribute('name','name')
input2.setAttribute('name','email')
input3.setAttribute('name','subject')
input4.setAttribute('name','message')
input1.setAttribute('required','')
input2.setAttribute('required','')
input3.setAttribute('required','')
input4.setAttribute('required','')

document.querySelectorAll(".bdr").forEach(item=>{
    item.style.border="1px solid black"
})