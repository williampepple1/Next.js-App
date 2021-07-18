import styles from "../styles/EOM.module.css"
import { Toolbar } from '../components/toolbar'

export const EOM =({ developer})=>{
    console.log(developer);
    return(
        <div className="page-container">
        <Toolbar />
            <div className={styles.main}>
                <h1>The Creator</h1>
                <div className={styles.developer}>
                    <h3>{developer.name}</h3>
                    <h6>{developer.position}</h6>
                    <img src={developer.image} />
                    <p>{developer.description}</p>
                </div>
            </div>
        </div>
    )
};

export const getServerSideProps = async pageContext=>{
    const apiResponse = await fetch(
        'https://my-json-server.typicode.com/williampepple1/db.json/developer'
    );

    const developer = await apiResponse.json();

    return{
        props: {
           developer 
        }
    }
}

export default EOM; 