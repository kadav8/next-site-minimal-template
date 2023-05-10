import { dictionary } from '../../dictionary';
import Menubar from './menubar';

export default function Header(props) {
   const t = dictionary(props.lang)

   return (
      <header className='sticky top-0 self-start w-full z-[1000]'>
         <Menubar lang={props.lang} navigation={t.navigation}></Menubar>
      </header>
   )
}