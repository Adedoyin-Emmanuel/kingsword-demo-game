import { useNavigate } from "react-router-dom";

/*handle the app footer navigation*/
const navigateToPage = useNavigate();

const navigateToHome = ():void =>
{
    navigateToPage("/app");
}

const navigateToCategory = ():void =>
{
    navigateToPage("app/category");
}

const navigateToResult = ():void =>{

    navigateToPage("/app/result");
}