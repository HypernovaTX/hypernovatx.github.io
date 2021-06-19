import { navigation, footer } from "./global";

export default class TemplateHome {
    
    output(): JSX.Element {
        return (<>
            { navigation() }
            { footer() }
        </>)
    }
}