// происходит событие
// генерируется объект со сведениями о произошедшем событии
// вызывается функция-обработчик
// объект со сведениями передается в качестве параметра в обработчик

const sml = document.getElementById("small");
const mdm = document.getElementById("medium");
const big = document.getElementById("big");

// const onClickHandler = (e) => {
//   if (e.target.tagName === 'BUTTON') { //делегирование обработки события на все дочерние кнопки
//     alert(e.target.name);
//   }
// };


const onClickHandler = (e) => {
  e.stopPropagation(); // прекратить всплытие
  console.log(e.currentTarget.id);
};

sml.addEventListener('click', onClickHandler);
mdm.addEventListener('click', onClickHandler);
big.addEventListener('click', onClickHandler);


//e.target - элемент, который сгенерировал событие
//e.currentTarget - элемент, который вызвал событие в процессе всплытия