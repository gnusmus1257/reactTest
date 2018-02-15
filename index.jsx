class Card extends React.Component {
    render() {
        return (
        <div className={"card"}>
            <div className={"card-header"}>
                <span>Test Card Now</span>
            </div>
            <div className={"card-body"}>
                <form className={"card-form"}>
                    <input placeholder={"Email"} type={"email"} className={"control-wrap"} autofocus autoComplete={"on"}/>
                    <input placeholder={"Password"} type={"password"} className={"control-wrap"} autoComplete={"on"}/>
                    <input type={"submit"} value={"Submit"} className={"btn btn-success"}/>
                </form>
            </div>
        </div>)
    }
}

ReactDOM.render(
    <Card />,
    document.getElementById("card")
)