class Card extends React.Component {
    render() {
        return (
        <div className={"card"}>
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