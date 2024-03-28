// Color a span/div element content when a user moves the mouse over the element

// var div=document.createElement("div")
// div.innerHTML="This is div"
// div.addEventListener("mouseover",foo)
// document.body.append(div)
// function foo(){
//     document.querySelector("div").style.color="green"
// }

function tableheader(tagname,attr,attrval,content)
{
    var tab_h=document.createElement(tagname)
    tab_h.setAttribute(attr,attrval)
    tab_h.innerHTML=content
    return tab_h
}

function tab_row()
{
    var tab_r=document.createElement("tr")
    return tab_r
}

function tab_data(tagname,content)
{
    var td=document.createElement(tagname)
    td.innerHTML=content
    return td
}

function tab_body()
{
    var tab_body=document.createElement("tbody")
    return tab_body
}

function tab_head(tagname,classname)
{
    var t_head=document.createElement(tagname)
    t_head.className=classname
    return t_head
}

function tab_class(tagname,classname)
{
    var t_class=document.createElement(tagname)
    t_class.className=classname
    return t_class
}

var tab=tab_class("table","table")

var thead=tab_head("thead","thead-dark")

var tr1=tab_row()
var th1=tableheader("th","scope","col","#")
var th2=tableheader("th","scope","col","First")
var th3=tableheader("th","scope","col","Last")
var th4=tableheader("th","scope","col","Handle")

tr1.append(th1,th2,th3,th4)
thead.append(tr1)

var tbody=tab_body()

var tr2=tab_row()
var th5=tableheader("th","scope","row","1")
var td1=tab_data("td","Mark")
var td2=tab_data("td","Otto")
var td3=tab_data("td","@mdo")

tr2.append(th5,td1,td2,td3)

var tr3=tab_row()
var th6=tableheader("th","scope","row","2")
var td4=tab_data("td","Jacob")
var td5=tab_data("td","Thornton")
var td6=tab_data("td","@fat")

tr3.append(th6,td4,td5,td6)

var tr4=tab_row()
var th7=tableheader("th","scope","row","3")
var td7=tab_data("td","Larry")
var td8=tab_data("td","the Bird")
var td9=tab_data("td","@twitter")

tr4.append(th7,td7,td8,td9)

tbody.append(tr2,tr3,tr4)

tab.append(thead,tbody)

document.body.append(tab)