import { getRandomColor } from './utils'
getRandomColor()

export function initApp() {
const button = document.createElement('button')
     button.className = 'button'
     button.textContent = 'Изменить цвет страницы'
     document.body.append(button)
     console.log('Hello world')
     button.addEventListener("click", (event) => {
         const randomColor = getRandomColor()
         document.body.style.backgroundColor = randomColor

     })
}