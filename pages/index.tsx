import type { NextPage } from 'next'
import styles from './style.module.scss';
import CardInteractionFormContainer from 'containers/CardInteractionFormContainer';
import Container from 'components/Container';



const Home: NextPage = () => {
    
    return (
        <>
            <main className={styles.main}>
                <h1 className={styles.hidden}>
                    MorphSchool Students Details Form
                </h1>
                <Container className={styles.container}>
                    <CardInteractionFormContainer className={styles.cardInteractionFormContainer} />
                </Container>
            </main>
        </>
    );
};
// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch('http://localhost:3000/api/notion')
//   const data = await res.json()

//   // Pass data to the page via props
//   return { props:  { data }, }
// }

const fetchFromNotion = async () =>{
    const res = await fetch('http://localhost:3000/api/notion')
    const data:rowsStructured = await res.json()
    return (data)
}
export default Home
