class Card extends React.Component {
    render() {
        return (
        <div className={"card"}>
            <img src={"bg.jpg"} className={"responsive "}/>
            <div className={"desktop"}>

            </div>
            <div className={"footer"}>
                <img src={""}/>
            </div>
        </div>)
    }
}

ReactDOM.render(
    <Card />,
    document.getElementById("card")
)