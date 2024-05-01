// GetElementById()--

// const title=document.getElementById('main heading');
// console.log(title);

//GetElementByClassName()--

// const listItem=document.getElementsByClassName("list-item");
// console.log(listItem);

//GetElementByTagNAme()--

// const listItem2=document.getElementsByTagName("div");
// console.log(listItem2);

//querySelector()--

// const container=document.querySelector('div');
// console.log(container)

//querySelectorAll()--

// const container2=document.querySelectorAll('div');
// console.log(container2)



//styling the elements--

// const title=document.querySelector('#main heading');
// title.style.color='white';
// console.log(title);

// const listItem=document.querySelectorAll('.list-item');


// for(i=0;i<listItem.length;i++){

//     listItem[i].style.fontSize='2rem';

// }
// console.log(listItem);



//creating an element---

// const ul=document.querySelector('ul');
// const li=document.createElement('li');

//adding elelmt

// ul.append(li);

//modifying element
// const firstItem=document.querySelector('.list-item');

// console.log(firstItem.innerText);
// console.log(firstItem.textContent);
// console.log(firstItem.innerHTML);

//modifying the element

// li.innerText='spider-man';

//modifying attributes and classes

// li.setAttribute('id','main heading');
// li.removeAttribute('id');
// const title=document.querySelector('#main heading');
// console.log(title.getAttribute('id'));

// li.classList.add('list-item')
// // li.classList.remove('list-item')
// console.log(li.classList.contains('list-item'))


// //remove elements--

// li.remove();


// parent node traversal--

// let ul=document.querySelector('ul')
// console.log(ul)
// console.log(ul.parentNode.parentElement)
// console.log(ul.parentElement.parentNode)


// const html=document.documentElement;
// console.log(html.parentNode)
// console.log(html.parentElement)

//child node traversal--

// let ul=document.querySelector('ul')
// console.log(ul.childNodes)
// console.log(ul.childElementCount)
// console.log(ul.children)


//sibling node traversal--

// let ul=document.querySelector('ul')
// console.log(ul.previousSibling)
// console.log(ul.nextSibling)
// console.log(ul.nextElementSibling)



// element.addEventListener("click",function);

const buttonTwo =document.querySelector('.bb');
function alertBtn(){
    alert('i love you');
}
buttonTwo.addEventListener("click",alertBtn);




