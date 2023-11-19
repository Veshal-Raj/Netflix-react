import Mainpage from "../components/Mainpage";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
    console.log('hello')
    return (
        <>
            <Mainpage />
            <Row rowID = '5' title='Popular shows' fetchURL={requests.requestPopular} />
            <Row rowID = '4' title='Trending' fetchURL={requests.requestTrending} />
            <Row rowID = '3' title='Recomendations' fetchURL={requests.requestRecommendations} />
            <Row rowID = '1' title='Top Rated' fetchURL={requests.requestTopRated} />
            {/* <Row rowID = '2' title='New Release' fetchURL={requests.requestLatest} /> */}
            <Row rowID = '6' title='Current Running' fetchURL={requests.requestAiring} />
        </>
    )
}

export default Home;