'use strict';

// Add event listener to project container
const projectListEl = document.querySelector(".project-list");
const openProjectImgs = projectListEl.querySelectorAll(".project-img");
const modalDialogEl = document.querySelector("dialog");
const closeModalDialogEl = document.querySelector("#close");
const modalImgEl = document.querySelector(".modal-body > img");

// adding click event on every project
for (let i = 0; i < openProjectImgs.length; i++) {
  const openProjectImgEl = openProjectImgs[i];
  openProjectImgEl
    .querySelector(".project-item-icon-box")
    .addEventListener("click", () => {
      modalImgEl.src = openProjectImgEl.querySelector("img").src;
      modalDialogEl.showModal();
    });
}

// close btn handler
closeModalDialogEl.addEventListener("click", (event) =>
  modalCloseHandler(event, ["ION-ICON"])
);

// backdrop close handler
modalDialogEl.addEventListener("click", (event) =>
  modalCloseHandler(event, ["DIALOG"])
);

function modalCloseHandler(event, nodeName) {
  if (nodeName.includes(event.target.nodeName)) {
    modalImgEl.src = "";
    modalDialogEl.close();
  }
}
