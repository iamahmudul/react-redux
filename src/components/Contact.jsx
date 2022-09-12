import SplitPane from "./SplitPane";
import WarningBanner from "./WarningBanner";
import WelcomeDialog from "./WelcomeDialog";
import FlavorForm from "./FlavorForm";

const Contact = () => {
    return (
        <main className="Contact Body">
            <h2>Contact</h2>
            <br />
            <WelcomeDialog borderColor="coral" />
            <br />
            <SplitPane 
                left={ <FlavorForm /> }
                right={ <WarningBanner warn={true} /> }
                />
        </main>
    );
}

export default Contact;