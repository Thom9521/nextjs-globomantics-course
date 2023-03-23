import style from './styles.css';

export default function ConferenceLayout({ children }) {
  return (
   <>
    <header style={style.header}>Conference layout header</header>
    <section>{children}</section>
   </>
  )
}
