function singleKeyFilter(list: Array<any>, query: any, key: any) {
    let querySanitizer = String(query).trim().toLowerCase();
    return list.filter(
        (i: any) => String(i[key]).toLowerCase().indexOf(querySanitizer) > -1
    );
}

export default function multiSearch(list: Array<any>, query: any) {
    if (Array.isArray(list) && list.length > 0) {
        let searchList: any = [];
        // @ts-ignore
        for (let [key] of Object.entries(list[0])) searchList = [...searchList, singleKeyFilter(list, query, key)];
        // @ts-ignore
        let set: any = new Set(searchList.flat());
        return [...set];
    }
    return [];
}
