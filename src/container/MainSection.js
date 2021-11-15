import BlockOne from './SupportingComponent/BlockOne'
import BlockTwo from './SupportingComponent/BlockTwo'
import "../css/MainSection.css"
import BlockThree from './SupportingComponent/BlockThree'
import Foooter from './Foooter'
const MainSection = () => {
    
    return (
        <div className = "MainSection">
            <BlockOne/>
            <div class="spacer layer"></div>
            <BlockTwo/>
            <div class="spacer layer3"></div>
            <BlockThree/>
            <div class="spacer layer4"></div>
            <Foooter/>
        </div>
    )
}

export default MainSection
