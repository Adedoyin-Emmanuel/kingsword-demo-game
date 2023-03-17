const navigateToPage = (page:string) =>{
    window.location.href=`${page}`
}
/*handle the app footer navigation*/

export const navigateToHome = ():void =>
{
    navigateToPage("/app");
}

export const navigateToCategory = ():void =>
{
    navigateToPage("/app/category");
}

export const navigateToResult = ():void =>{

    navigateToPage("/app/result");
}