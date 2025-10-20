import Quotes from './quotes';
const Inform = () => {
    return (
        <>
            <div className="card" style={{width: "18rem"}}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bill_Gates_at_the_European_Commission_-_2025_-_P067383-987995_%28cropped%29.jpg/500px-Bill_Gates_at_the_European_Commission_-_2025_-_P067383-987995_%28cropped%29.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Bill Gates</h5>
                    <p className="card-text">William Henry Gates III (born October 28, 1955) is an American businessman
                        and philanthropist. A pioneer of the microcomputer revolution of the 1970s and 1980s, he
                        co-founded the software company Microsoft in 1975 with his childhood friend Paul Allen.</p>
                    <Quotes />
                    <ul className="list-group" style={{
                        textDecoration: 'none',
                    }}>
                        <li className="list-group-item"><a href={"https://en.wikipedia.org/wiki/Bill_Gates"}>Wikipedia</a></li>
                        <li className="list-group-item"><a href={"https://www.gatesfoundation.org/"}>Foundation</a></li>
                        <li className="list-group-item"><a href={"https://twitter.com/billgates"}>Twitter</a></li>

                    </ul>
                </div>
            </div>
        </>
    )
}
export default Inform