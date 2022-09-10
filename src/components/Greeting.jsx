const Greeting = (props) => {
    const isLoggedIn = props.isLoggedIn;
    return (
        <>
            <h4>User is {isLoggedIn ? 'logged' : 'not logged'} in</h4>
        </>
    )
}

export default Greeting