import { InputText } from "../inputText.ts/inputText";
import './navigation.css';

export function NavEl() {
  return (
    <nav className='navigation'>
      <a href="http://yandex.ru">About</a>
      <a href="http://yandex.ru">Gallery</a>
      <a href="http://yandex.ru">Price</a>
      <a href="http://yandex.ru">Contacts</a>
      <InputText></InputText>
    </nav>
  )
}
