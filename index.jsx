class Card extends React.Component {
    render() {
        return (
        <div className={"card"}>
            <div className={"card-header"}>
                <span>Test Card Now</span>
            </div>
            <div className={"card-body"}>
                <form>
                    <input placeholder={"Email"} type={"email"}/>

                </form>
            </div>
        </div>)
    }
}

ReactDOM.render(
    <Card />,
    document.getElementById("card")
)