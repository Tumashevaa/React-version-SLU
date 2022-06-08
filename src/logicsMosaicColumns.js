/**
 * данная функция возвращает номер индекса самой короткой колонки  
 * @param {*} columns
 * @param {*} index 
 */
function CalculateTopmostColumn() {
  const columnsEls = document.querySelectorAll('[data-col]')
  const col0Height = columnsEls[0].offsetHeight
  const col1Height = columnsEls[1].offsetHeight
  const col2Height = columnsEls[2].offsetHeight

  if (col0Height < col1Height && col0Height < col2Height) {
    return 0
  }

  if (col1Height < col0Height && col1Height < col2Height) {
    return 1
  }

  return 2
}
  
/**
 * данная функция получает массив строк с html данными и каждый раз перезаписывает в data-wrapper
 * @param {string[]} htmlColumns - массив строк
 */
function RenderItems(htmlColumns) {
  //выбираем элемент в html куда будем подставлять результат строки со всеми html
  //в выбранный элемент в html подставляем строку с всеми html элементами
  const indexMinHeight = CalculateTopmostColumn()
  const wrapperEl = document.querySelector('[data-wrapper]')
  const colElements = wrapperEl.querySelectorAll('[data-col]')

  htmlColumns.forEach(function (str, index) {
    if (colElements[index]) {
      colElements[index].insertAdjacentHTML('beforeend', str)
    } else {
      colElements[indexMinHeight].insertAdjacentHTML('beforeend', str)
    }
  })
}

  export default RenderItems