/**
 * Changes the body attribute
 */
 const changeHTMLAttribute = (attribute : any, value : string) => {
    if (document.documentElement) document.documentElement.setAttribute(attribute, value);
    return true;
}
export { changeHTMLAttribute };