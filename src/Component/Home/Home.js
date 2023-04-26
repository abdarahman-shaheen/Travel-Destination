import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Tours from "../Tours/Tours";
function Home(props){

    return(
        <>
       <Tours dataTour={props.data}/>
      
        </>

    )

}

export default Home;