import Button from "./Button"

const Header = ({title}) => {
    const onClick = () => {
        console.log('se ha cliqueao')
    }
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button onClick={onClick} color="grey" text="q onda bo"/>
           
    
        </header>
    )

}
Header.defaultProps = { 
    title : 'Task Tracker'
}

export default Header
