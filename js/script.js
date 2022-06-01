/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students.
Determines the grid for the cards
Creates a variable with the class student list. Then creates a for loop to build the students cards and inserts it to the HTML.
*/
const showPage = (list, page) => {
  const startIndex = page * 9 - 9;
  const endIndex = page * 9;

  const studentList = document.querySelector(".student-list");

  studentList.innerHTML = " ";

  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      let studentItem = `
         <li class="student-item cf">
         <div class="student-details">
           <img class="avatar" src=${list[i].picture.large} alt="Profile Picture">
           <h3>${list[i].name.first} ${list[i].name.last}</h3>
           <span class="email">${list[i].email}</span>
         </div>
         <div class="joined-details">
           <span class="date">Joined ${list[i].registered.date}</span>
         </div>
       </li>`;
      studentList.insertAdjacentHTML("beforeend", studentItem);
    }
  }
};

showPage(data,1);


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
Uses query selector to select the class link-list and sets it to the linklist variable.
Then creates a for loop for the number buttons that are added to the li element. 
To activate the button an if conditional statement is used activate the clicked button and unselect when another is clicked.
*/
const addPagination = (list) => {
  const numOfPages = Math.ceil(list.length / 9);
  let linkList = document.querySelector(".link-list");

  linkList.innerHTML = "";

  for (let i = 1; i <= numOfPages; i++) {
    const button = `
    <li>
      <button type="button">${[i]}</button>
    </li>`;
    linkList.insertAdjacentHTML("beforeend", button);

    let active = document.querySelector('li button')
    active.className = 'active';
  }

  linkList.addEventListener('click', ( (e) =>{
      if (e.target.tagName === 'BUTTON') {
         let unactive = document.querySelector('.active');
         unactive.className = '';
         e.target.className = 'active';
         showPage(list, e.target.textContent);

      }
  }));
};

addPagination(data);
