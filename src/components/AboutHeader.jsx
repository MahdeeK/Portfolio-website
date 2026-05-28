function AboutHeader({number, sectionTitle}) {
    return (
        <div className="aboutHeaderContainer" style={{display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px", maxWidth: "720px", width: "100%", alignItems: "flex-start"}}>
            <div className="sectionTitleContainer" style={{display: "flex", gap: "12px"}}>
                <p className="aboutNumber" style={{fontSize: "20px", marginBlock: "0px"}}>{number}</p>
                <p className="aboutTitle" style={{fontSize: "20px", marginBlock: "0px"}}>{sectionTitle}</p>
            </div>
            <div className="aboutDivider" style={{width: "32px", height: "2px", backgroundColor: "#FFFFFF"}}/>
        </div>
    )
}

export default AboutHeader