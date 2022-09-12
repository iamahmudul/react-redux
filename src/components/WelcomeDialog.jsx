import Dialog from "./Dialog";

const WelcomeDialog = ({ borderColor }) => {
    return (
        <Dialog title="Welcome" 
            message="Hey, thank you for cisiting our spacecraft!"
            color="coral" />
    );
}

export default WelcomeDialog;