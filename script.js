document.body.style.padding="0px";
document.body.style.margin="0px";
document.body.style.fontFamily="Poppins , san-serif";

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
var nav=create("nav")
var div_logo=create("div")
var logo_img=create("img")
var div_nav=create("div")
var ul=create("ul")
var li1=create("li")
var nav_a1=create("a")
var li2=create("li")
var nav_a2=create("a")
var li3=create("li")
var nav_a3=create("a")
var li4=create("li")
var nav_a4=create("a")
var li5=create("li")
var nav_a5=create("a")
var li6=create("li")
var nav_button=create("button")

header.className="myHeader"
nav.className="myNav"
div_logo.className="nav-logo"
logo_img.setAttribute('src','./img/logo.png')
logo_img.setAttribute('height','50')
div_nav.className="nav-bar"
ul.className="nav-links"
nav_a1.setAttribute('href',"#homeId")
nav_a2.setAttribute('href',"#aboutusId")
nav_a3.setAttribute('href',"#coursesId")
nav_a4.setAttribute('href',"#facilitiesId")
nav_a5.setAttribute('href',"#contactusId")
li1.className="nav-item"
li2.className="nav-item"
li3.className="nav-item"
li4.className="nav-item"
li5.className="nav-item"
li6.className="nav-button"

nav_a1.innerHTML="Home"
nav_a2.innerHTML="About us"
nav_a3.innerHTML="Courses"
nav_a4.innerHTML="Facilities"
nav_a5.innerHTML="Contact us"
nav_button.innerHTML="Sign Up"

appendToBody(header)
header.append(nav)
nav.append(div_logo)
div_logo.append(logo_img)
nav.append(div_nav)
div_nav.append(ul)
ul.append(li1)
ul.append(li2)
ul.append(li3)
ul.append(li4)
ul.append(li5)
ul.append(li6)
li1.append(nav_a1)
li2.append(nav_a2)
li3.append(nav_a3)
li4.append(nav_a4)
li5.append(nav_a5)
li6.append(nav_button)

_style(header).width="100%"
_style(header).height="100px"
_style(header).backgroundColor="#071933"
_style(div_logo).padding="28px"
_style(div_logo).paddingLeft="40px"
_style(nav).display="flex"
_style(nav).justifyContent = "space-between";
_style(ul).listStyleType="none"
_style(ul).gap="20px"
_style(nav_a1).color = "#fff";
_style(nav_a1).textDecoration = "none";
_style(nav_a2).color = "#fff";
_style(nav_a2).textDecoration = "none";
_style(nav_a3).color = "#fff";
_style(nav_a3).textDecoration = "none";
_style(nav_a4).color = "#fff";
_style(nav_a4).textDecoration = "none";
_style(nav_a5).color = "#fff";
_style(nav_a5).textDecoration = "none";
_style(nav_button).color = "#fff";
_style(nav_button).padding = "10px 20px";
_style(nav_button).backgroundColor = "transparent";
_style(nav_button).border = "2px solid #fff";
_style(nav_button).fontFamily = "Poppins , san-serif";
_style(nav_button).fontSize = "15px";
_style(nav_button).borderRadius = "10px";

var nb=document.querySelector(".nav-button")
nb.addEventListener('mouseover',function(){
     _style(nav_button).backgroundColor = "#ff5334";
    _style(nav_button).border = "2px solid #ff5334";
    _style(nav_button).cursor = "pointer";
})
nb.addEventListener('mouseout',function(){
     _style(nav_button).backgroundColor = "transparent";
    _style(nav_button).border = "2px solid #FFF";
})

nav_button.setAttribute('onclick','location.href="signup.html"')

_style(div_nav).display="flex"
_style(ul).display="flex"
_style(ul).alignItems="center"
_style(ul).justifyContent="space-between"
_style(ul).paddingRight="80px"
_style(ul).paddingBottom="10px"
_style(ul).margin="0px"

var ni=document.querySelectorAll(".nav-item")
ni.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.borderBottom = " 5px solid #FF0000";
        item.style.borderRadius = "5px";
        // item.style.transition = " 0.5s";
        
    });
    item.addEventListener('mouseout', () => {
        item.style.borderBottom = ""; 
    });
});



var main=create("main")

var home=create("div")
var overlayHome=create("div")
var homeText=create("div")
var homeTitle=create("span")
var homePara=create("p")
var homeButton=create("button")

var aboutus=create("div")
var a_title=create("p")
var a_content=create("div")
var a_text=create("div")
var a_textTitle=create("span")
var a_textPara=create("p")
var a_textButton=create("button")
var a_imgdiv=create("div")
var a_img=create("img")

var courses=create("div")
var c_title=create("p")
var c_para=create("p")
var c_group=create("div")
var c1=create("div")
var c1_title=create("span")
var c1_para=create("p")
var c2=create("div")
var c2_title=create("span")
var c2_para=create("p")
var c3=create("div")
var c3_title=create("span")
var c3_para=create("p")

var facilities=create("div")
var f_title=create("p")
var f_para=create("p")
var f_group=create("div")
var f1=create("div")
var f1_title=create("p")
var f1_overlay=create("div")
var f2=create("div")
var f2_title=create("p")
var f2_overlay=create("div")
var f3=create("div")
var f3_title=create("p")
var f3_overlay=create("div")

var contactus=create("div")
var cu_box=create("div")
var cu_overlay=create("div")
var cu_title=create("p")
var cu_button=create("button")

main.className="myMain"

home.id="homeId"
overlayHome.className="overlayHome"
homeButton.className="homeButton"

aboutus.id="aboutusId"
a_content.className="a_content"
a_text.className="a_text"
a_imgdiv.className="a_imgdiv"
a_textButton.className="a_textButton"

courses.id="coursesId"
c_group.className="c_group"
c1.className="c1 c"
c2.className="c2 c"
c3.className="c3 c"
c1_title.className="c-title"
c2_title.className="c-title"
c3_title.className="c-title"
c1_para.className="c-para"
c2_para.className="c-para"
c3_para.className="c-para"

facilities.id="facilitiesId"
f_group.className="f_group"
f1.className="f1 f "
f2.className="f2 f "
f3.className="f3 f "
f1_overlay.className="overlay"
f2_overlay.className="overlay"
f3_overlay.className="overlay"

contactus.id="contactusId"
cu_box.className="cu_box"
cu_button.className="cu_button"

appendToBody(main)

main.append(home)
home.append(overlayHome)
overlayHome.append(homeText)
homeText.append(homeTitle)
homeText.append(homePara)
homeText.append(homeButton)

main.append(aboutus)
aboutus.append(a_title)
aboutus.append(a_content)
a_content.append(a_text)
a_text.append(a_textTitle)
a_text.append(a_textPara)
a_text.append(a_textButton)
a_content.append(a_imgdiv)
a_imgdiv.append(a_img)

main.append(courses)
courses.append(c_title)
courses.append(c_para)
courses.append(c_group)
c_group.append(c1)
c1.append(c1_title)
c1.append(c1_para)
c_group.append(c2)
c2.append(c2_title)
c2.append(c2_para)
c_group.append(c3)
c3.append(c3_title)
c3.append(c3_para)

main.append(facilities)
facilities.append(f_title)
facilities.append(f_para)
facilities.append(f_group)
f_group.append(f1)
f1.append(f1_overlay)
f1_overlay.append(f1_title)
f_group.append(f2)
f2.append(f2_overlay)
f2_overlay.append(f2_title)
f_group.append(f3)
f3.append(f3_overlay)
f3_overlay.append(f3_title)

main.append(contactus)
contactus.append(cu_box)
cu_box.append(cu_overlay)
cu_overlay.append(cu_title)
cu_overlay.append(cu_button)

//******Home Style*******/
homeTitle.innerHTML="World's Biggest Pune University"
homePara.innerHTML="Making website is now one of the easiest thing in the world. You just need to learn HTML, CSS, Javascript and you are good to go."
homeButton.innerHTML="Visit Us to Know More"

_style(home).backgroundColor="#16345d"
_style(home).background="url('img/banner.png')"
_style(home).backgroundSize="100% 100%"
_style(home).backgroundRepeat="no-repeat"
_style(home).height="550px"
_style(overlayHome).height="550px"
_style(overlayHome).width="100%"
_style(overlayHome).display="flex"
_style(overlayHome).alignItems="center"
_style(overlayHome).justifyContent="center"
_style(overlayHome).backgroundColor="rgba(7, 25, 51, 0.7)";
_style(homeText).color="#fff"
_style(homeText).height="50%"
_style(homeText).width="60%"
_style(homeText).display="flex"
_style(homeText).flexDirection="column"
_style(homeText).alignItems="center"
_style(homeText).justifyContent="center"
_style(homeText).width="60%"
_style(homeTitle).fontSize="40px"
_style(homeTitle).fontWeight="700"
_style(homePara).fontSize="15px"
_style(homePara).textAlign="center"
_style(homeButton).padding="9px 30px"
_style(homeButton).margin="15px "
_style(homeButton).backgroundColor="transparent "
_style(homeButton).border="2px solid #fff "
_style(homeButton).borderRadius="10px "
_style(homeButton).color="#fff "
_style(homeButton).fontSize="15px "
_style(homeButton).fontFamily="Poppins,san-serif"
var hb=document.querySelector(".homeButton")
hb.addEventListener('mouseover',function(){
    _style(homeButton).backgroundColor="#ff5334"
    _style(homeButton).cursor="pointer"
    _style(homeButton).border="2px solid #ff5334"
})
hb.addEventListener('mouseout',function(){
    _style(homeButton).backgroundColor="transparent"
    
    _style(homeButton).border="2px solid #fff"
})

// *****About us Style****

a_title.innerText="About Us"
a_textTitle.innerText="We are world's largest university"
a_textPara.innerText="university, institution of higher education, usually comprising a college of liberal arts and sciences and graduate and professional schools and having the authority to confer degrees in various fields of study. A university differs from a college in that it is usually larger, has a broader curriculum, and offers graduate and professional degrees (master’s and doctorates), professional degrees "
a_textButton.innerText="EXPLORE NOW"

_style(aboutus).height="550px"
_style(a_title).marginTop="0px"
_style(a_title).paddingTop="40px"
_style(a_title).fontSize="35px"
_style(a_title).fontWeight="700"
_style(a_title).textAlign="center"
_style(a_content).display="flex"
_style(a_content).justifyContent="center"
_style(a_content).alignItems="center"
_style(a_text).height="350px"
_style(a_text).width="500px"
_style(a_imgdiv).height="350px"
_style(a_imgdiv).width="500px"
_style(a_textTitle).fontSize="35px"
_style(a_textTitle).fontWeight="600"
_style(a_textPara).fontSize="13px"
_style(a_textPara).color="#A9A9A9"
_style(a_textPara).paddingRight="40px"
_style(a_textButton).backgroundColor="rgba(255,83,52,0.050)"
_style(a_textButton).color="rgba(255,83,52)"
_style(a_textButton).padding="10px 30px"
_style(a_textButton).fontFamily="Poppins , san-serif"
_style(a_textButton).fontWeight="500"
_style(a_textButton).border="1px solid #ff5334"

let tb=document.querySelector(".a_textButton")
tb.addEventListener('mouseover',function(){
    _style(a_textButton).backgroundColor="#ff5334"
    _style(a_textButton).color="#fff"
    _style(a_textButton).cursor="pointer"
    _style(a_textButton).fontWeight="500"
    _style(a_textButton).fontFamily="Poppins , san-serif"
    _style(a_textButton).border="1px solid #ff5334"
})
tb.addEventListener('mouseout',function(){
    _style(a_textButton).backgroundColor="rgba(255,83,52,0.050)"
    _style(a_textButton).color="rgba(255,83,52)"
    _style(a_textButton).border="2px solid #ff5334"
})

a_img.setAttribute('src','img/about.jpg')
a_img.setAttribute('height','350')
a_img.setAttribute('width','500')

//****Courses Style*******
c_title.innerText="Courses We Offer"
c_para.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit."

_style(courses).height="430px"
_style(courses).margin="0px"
_style(c_title).paddingTop="40px"
_style(c_title).fontSize="35px"
_style(c_title).margin="0px"
_style(c_title).fontWeight="700"
_style(c_title).textAlign="center"
_style(c_para).fontSize="13px"
_style(c_para).color="#A9A9A9"
_style(c_para).textAlign="center"
_style(c_group).display="flex"
_style(c_group).justifyContent="space-evenly"
_style(c_group).alignItems="center"
_style(c_group).margin="40px"

var c=document.querySelectorAll(".c");
c.forEach(item => {
    item.style.height="200px"
    item.style.width="350px"
    item.style.backgroundColor="#fff3f1"
    item.style.borderRadius="5px"
    item.style.display="flex"
    item.style.flexDirection="column"
    item.style.justifyContent="center"
    item.style.alignItems="center"
});

document.querySelectorAll(".c-title").forEach(item =>{
    item.style.fontSize="20px"
    item.style.fontWeight="600"
    item.style.margin="20px 0px 0px 0px"

});
document.querySelectorAll(".c-para").forEach(item =>{
    item.style.fontSize="13px"
    item.style.padding=" 0px 30px"
    item.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, molestias veritatis enim, voluptatem corrupti id accusamus illum nihil vero earum deserunt incidunt soluta vitae molestiae et cumque excepturi inventore quia."
    item.style.textAlign="center"
    item.style.color="#afa8a2"

});

c.forEach(element => {
    element.addEventListener("mouseover",()=>{
        element.style.boxShadow="0 0 40px #D3CBBE"
        element.style.cursor="pointer"
    })
    element.addEventListener("mouseout",()=>{
        element.style.boxShadow="none"
        
    })
});

c1_title.innerText="Intermediate"
c2_title.innerText="Graduation"
c3_title.innerText="Post Graduation"

// ********Facilities Style********

f_title.innerText="Our Facilities"
f_para.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit."

_style(facilities).height="550px"
_style(facilities).margin="0px"
_style(f_title).paddingTop="40px"
_style(f_title).fontSize="35px"
_style(f_title).margin="0px"
_style(f_title).fontWeight="700"
_style(f_title).textAlign="center"
_style(f_para).fontSize="13px"
_style(f_para).color="#A9A9A9"
_style(f_para).textAlign="center"
_style(f_group).display="flex"
_style(f_group).justifyContent="space-evenly"
_style(f_group).alignItems="center"
_style(f_group).margin="40px"

var f=document.querySelectorAll(".f")
f.forEach(element => {
    element.style.height="320px"
    element.style.width="350px"
    element.style.borderRadius="5px"
    element.style.position="relative"
    element.style.overflow="hidden"
    element.style.display="inline-block"

});

document.querySelector(".f1").style.background="url('img/library.png')"
document.querySelector(".f1").style.backgroundSize="100% 100%"
document.querySelector(".f2").style.background="url('img/basketball.png')"
document.querySelector(".f2").style.backgroundSize="100% 100%"
document.querySelector(".f3").style.background="url('img/cafeteria.png')"
document.querySelector(".f3").style.backgroundSize="100% 100%"

var overlay=document.querySelectorAll(".overlay")
overlay.forEach(item=>{
    item.style.height="100%"
    item.style.width="100%"
    item.style.backgroundColor="rgba(0,0,0,0.7)"
    item.style.position="absolute"
    item.style.top="320px"
    item.style.left="0px"
    item.style.transition="all ease-in-out 0.4s"

    item.style.color="#fff"
    item.style.fontSize="30px"
    item.style.fontWeight="500"
    item.style.display="flex"
    item.style.justifyContent="center"
    item.style.alignItems="center"
    item.style.textAlign="center"
})

f.forEach(element => {
    element.addEventListener("mouseover",()=>{
        element.querySelector(".overlay").style.top="0px"
    })
    element.addEventListener("mouseout",()=>{
        element.querySelector(".overlay").style.top="320px"
    })
});

f1_title.innerText="World Class Library"
f2_title.innerText="Largest PlayGround"
f3_title.innerText="Healthy and Tasty Food"

// ********Facilities Style********
_style(contactus).height="450px"
_style(contactus).display="flex"
_style(contactus).justifyContent="center"
_style(contactus).alignItems="center"
_style(cu_box).height="300px"
_style(cu_box).width="80%"
_style(cu_box).borderRadius="5px"
_style(cu_box).background="url('img/banner2.jpg')"
_style(cu_box).backgroundSize="100% 100%"
_style(cu_overlay).height="100%"
_style(cu_overlay).width="100%"
_style(cu_overlay).backgroundColor="rgba(0,0,0,0.7)"
_style(cu_overlay).borderRadius="5px"
_style(cu_overlay).display="flex"
_style(cu_overlay).flexDirection="column"
_style(cu_overlay).justifyContent="center"
_style(cu_overlay).alignItems="center"
_style(cu_title).fontSize="30px"
_style(cu_title).fontWeight="500"
_style(cu_title).color="#fff"
_style(cu_title).color="#fff"
_style(cu_title).padding="0% 20%"
_style(cu_title).textAlign="center"
_style(cu_title).margin="0px"
_style(cu_button).padding="8px 25px"
_style(cu_button).margin="30px"
_style(cu_button).borderRadius="5px"
_style(cu_button).border="2px solid #fff"
_style(cu_button).backgroundColor="transparent"
_style(cu_button).color="#fff"
_style(cu_button).fontFamily="Poppins,san-serif"
_style(cu_button).fontSize="15px"

document.querySelector(".cu_button").addEventListener("mouseover",()=>{
    _style(cu_button).border="2px solid #ff5334"
    _style(cu_button).backgroundColor="#ff5334"
    _style(cu_button).color="#fff"
    _style(cu_button).cursor="pointer"

})
document.querySelector(".cu_button").addEventListener("mouseout",()=>{
    _style(cu_button).border="2px solid #FFF"
    _style(cu_button).backgroundColor="transparent"
    _style(cu_button).color="#fff"
})

cu_button.setAttribute('onclick','location.href="contactus.html"')

cu_title.innerText="Enroll For Our Various Online Courses Anywhere From The World"
cu_button.innerText="Contact Us"

var footer=create("footer")
var f_box=create("div")
var f_box_inner=create("div")
var foot1=create("div")
var foot1_img=create("div")
var foot2=create("div")
var foot2_p1=create("p")
var foot2_p2=create("p")
var foot2_a1=create("a")
var foot2_a2=create("a")
var foot3=create("div")
var foot3_i1=create("a")
var foot3_i2=create("a")
var foot3_i3=create("a")
var foot3_i4=create("a")


footer.className="myFooter"
f_box.className="f_box"
f_box_inner.className="f_box_inner"
foot1.className="foot1"
foot2.className="foot2"
foot3.className="foot3"
foot2_p1.className="foot2_p"
foot2_p2.className="foot2_p"
foot2_a1.className="foot2_a"
foot2_a2.className="foot2_a"
foot3_i1.className="foot3_i"
foot3_i2.className="foot3_i"
foot3_i3.className="foot3_i"
foot3_i4.className="foot3_i"


appendToBody(footer)
footer.append(f_box)

f_box.append(f_box_inner)
f_box_inner.append(foot1)
foot1.append(foot1_img)
f_box_inner.append(foot2)
foot2.append(foot2_p1)
foot2.append(foot2_p2)
foot2.append(foot2_a1)
foot2.append(foot2_a2)
f_box.append(foot3)
foot3.append(foot3_i1)
foot3.append(foot3_i2)
foot3.append(foot3_i3)
foot3.append(foot3_i4)

//******footer style **********/

_style(footer).height="160px"
_style(footer).backgroundColor="#071933"
_style(f_box).height="100%"
_style(f_box).width="100%"
_style(f_box).display="flex"
_style(f_box).justifyContent="space-between"
_style(f_box).alignItems="center"

_style(f_box_inner).height="80%"
_style(f_box_inner).width="55%"
_style(f_box_inner).color="#fff"
_style(f_box_inner).display="flex"
_style(f_box_inner).justifyContent="center"

_style(foot1).width="30%"
_style(foot1).display="flex"
_style(foot1).justifyContent="end"
_style(foot1).alignItems="center"
foot1.innerHTML='<i style="font-size:70px; text-align:center" class="fa-solid fa-graduation-cap"></i>'

_style(foot2).width="70%"
_style(foot2).display="flex"
_style(foot2).justifyContent="center"
_style(foot2).alignItems="start"
_style(foot2).flexDirection="column"

var fp2=document.querySelectorAll(".foot2_p")
fp2.forEach(element => {
    // element[0].style.margin="20px 0px 0px 0px"
    element.style.margin="0px 0px 0px 30px"
    element.style.fontSize="15px"
});
var fa2=document.querySelectorAll(".foot2_a")
fa2.forEach(element => {
    // element[0].style.margin="20px 0px 0px 0px"
    element.style.margin="0px 0px 0px 30px"
    element.style.fontSize="15px"
    element.style.color="#fff"
    element.style.textDecoration="underline"
    element.setAttribute('href',"#")
});
fa2.forEach(element => {
    element.addEventListener("mouseover",()=>{
        element.style.color="#ff5332"
    })
    element.addEventListener("mouseout",()=>{
        element.style.color="#fff"
    })
});

foot2_p1.innerHTML="&copy; 2024 Eduford Institute of Technology"
foot2_p2.innerHTML="Registration no : 229865"
foot2_a1.innerHTML="Terms of Service"
foot2_a2.innerHTML="Privacy Policy"

_style(foot3).height="80%"
_style(foot3).width="45%"
_style(foot3).marginRight="100px"
_style(foot3).color="#fff"
_style(foot3).display="flex"
_style(foot3).justifyContent="flex-end"
_style(foot3).alignItems="center"

document.querySelectorAll(".foot3_i").forEach(element=>{
    element.style.margin="20px"
    element.style.fontSize="30px"
    element.setAttribute('href',"#")
    element.style.color="#fff"
})

document.querySelectorAll(".foot3_i").forEach(element => {
    element.addEventListener("mouseover",()=>{
        element.style.color="#ff5332"
    })
    element.addEventListener("mouseout",()=>{
        element.style.color="#fff"
    })
});



foot3_i1.innerHTML='<i class="fa-brands fa-square-facebook"></i>'
foot3_i2.innerHTML='<i class="fa-brands fa-twitter"></i>'
foot3_i3.innerHTML='<i class="fa-brands fa-youtube"></i>'
foot3_i4.innerHTML='<i class="fa-brands fa-linkedin"></i>'




