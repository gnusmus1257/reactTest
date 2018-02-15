class Card extends React.Component {
    render() {
        return (
        <div className={"card"}>
            <div className={"desktop"}>
                <img src={"../Content/Images/Icons/Apple Music.png"} className={"desktop-icon"}/>
                <img src={"../Content/Images/Icons/Safari.png"} className={"desktop-icon"}/>
                <img src={"../Content/Images/Icons/Settings.png"} className={"desktop-icon"}/>
                <img src={"../Content/Images/Icons/Wallet2.png"} className={"desktop-icon"}/>
                <img src={"../Content/Images/Icons/Photos.png"} className={"desktop-icon"}/>
            </div>
            <div className={"footer"}>

            </div>
        </div>)
    }
}

ReactDOM.render(
    <Card />,
    document.getElementById("card")
)