const popUp = document.querySelector('#pop-up');
const btnToOpenPopUp = document.querySelector('#create-shop-btn');
const btnToCancelCreating = document.querySelectorAll('.cancel');
const btnToCreate = document.querySelector('.create');

btnToCancelCreating.forEach((e) => {
    e.addEventListener('click', () => {
        popUp.classList.add('none');
    });
})

btnToOpenPopUp.addEventListener('click', () => {
    popUp.classList.toggle('none');
})

btnToCreate.addEventListener('click', () => {
    popUp.classList.add('none');
    alert("Магазин успешно создан!");
})