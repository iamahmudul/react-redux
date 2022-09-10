const WarningBanner = (props) => {
    if (!props.warn) {
        return null;
    }

    return (
        <div style={{color: 'orange'}}>
            Warning!
        </div>
    );
}

export default WarningBanner