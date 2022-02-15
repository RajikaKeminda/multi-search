function singleKeyFilter(list, query, key) {
    let querySanitizer = String(query).trim().toLowerCase();
    return list.filter(
        (i) => String(i[key]).toLowerCase().indexOf(querySanitizer) > -1
    );
}

export default function multiSearch(list, query) {
    if (Array.isArray(list) && list.length > 0) {
        let searchList = [];
        for (let [key] of Object.entries(list[0])) searchList = [...searchList, singleKeyFilter(list, query, key)];
        let set = new Set(searchList.flat());
        return [...set];
    }
    return [];
}