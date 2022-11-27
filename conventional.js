
export function camelize(plainString){

    let parts = plainString.split(/[\W_]+/);

    let camelizedString = parts.filter(
        part => part.length > 1
    ).map(part => 
        part.substring(0,1).toUpperCase() + part.substring(1).toLowerCase() 
        ).join("");

    return camelizedString

}