// import RenderItems from './renderItems'
// import CreateItemHtmlFromObject from './creatItemHtmlFromObject'

// /**
//  * element button page
//  */
// const buttonEl = document.querySelector('[data-btn]')

// /**
//  * счетчик с текущим значением страницы
//  */
// let counterPage = 1


// /**
//  * данная функция переключает состояние кнопки в зависимости от значения аргумента,
//  * ничего не возвращает
//  * @param {boolean} sign 
//  */ 
// function ToggleButtonState(sign) {
//     if (sign === true) {
//       buttonEl.innerText = 'Loading...'
//       buttonEl.disabled = true
//     } else {
//       buttonEl.innerText = 'Show more photos'
//       buttonEl.disabled = false
//     }
// }
  
// /**
//  * получает массив объектов, делить его содержимое на 3 массива и возвращает новый массив с тремя массивами внутри
//  * @param {array} array 
//  */
// function SplitAnArray(array) {
//     let size = 3
//     let subData = []
    
//     for (let index = 0; index < Math.ceil(array.length / size); index++) {
//       subData[index] = array.slice((index * size), ((index * size) + size))
//     }
//     return subData
// }

// /**
//  * данная функция принимает массив объектов и возвращает строку со всеми html элементами
//  * @param {array} arr 
//  * @returns {string}
//  */
// function CreateHtmlStringFromArrayOfElements(arr) {
//     //у массива вызываем метод map, который применяет к каждому элементу(объекту) массива указанную функцию в аргументе
//     //функция возвращает массив строк со всеми html из объекта с данными
//     //далее присваиваем результат работы map к переменной 
//     //массив строк
//     const imagesHtmlList = arr.map({CreateItemHtmlFromObject})
//     //у массива строк вызываем метод join, который соединяет все элементы в одну строку через разделитель указаный параметром
//     const imagesHtml = imagesHtmlList.join('\n')
//     return imagesHtml
// }

// /**
//  * получает массив массивов с объектами и возвращает один большой массив c N-количеством (от splita) html строками
//  * @param {object[][]} arrayColums 
//  * @returns {string[]}
//  */
// function CreateHtmlForColumns(arrayColums) {
//     return arrayColums.map((column) => {
//       return CreateHtmlStringFromArrayOfElements(column)
//     })
// }

// /**
//  * 1 получает данные для текущей страницы
//  * 2 создает html, добавляет на страницу
//  */
// function renderAll() {
//     ToggleButtonState(true)
  
//     getAllPhotosData(counterPage).then(function (data) {
//       console.log(data)
//       const dataForColumns = SplitAnArray(data)
  
//       const htmlForColumns = CreateHtmlForColumns(dataForColumns)
  
//       {RenderItems}(htmlForColumns)
//       ToggleButtonState(false)
//     })
// }