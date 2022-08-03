"use strict";

/**
 * Recursively retrieves nested collection items and returns a new array
 * that contains the parent item and possible children.
 * @param {Object} obj   An object with nested properties
 * @param {Array} array  A default collection for our found items
 * @return {Array}       The Collection of items
 */

function recursiveFindSubsidiaries(obj, array =[]) {
    let subArray = obj.subsidiaries;
    array = [obj];
    // Base Case -- Terminating condition (end of branch)
    if (subArray.length === 0) {
        return array;
    }
    // Recursive Case -- Branch has sub-branches, search continues
    for (let i = 0; i < subArray.length; i++) {
        array = array.concat(
            recursiveFindSubsidiaries(subArray[i])
        );
    }
    return array;
}

let umbrellaCompany = {
    name: "Umbrella Corporation",
    logo: "☂️",
    subsidiaries: [
        {
            name: "Umbrella Industries",
            logo: "🚂",
            subsidiaries: [
                {
                    name: "Umbrella Pharmaceuticals",
                    logo: "🏥",
                    subsidiaries: [],
                },
                {
                    name: "Umbrella Medical",
                    logo: "🩺",
                    subsidiaries: [],
                },
            ],
        },
        {
            name: "Paragaus Line Company",
            logo: "🛳",
            subsidiaries: [],
        },
    ],
};

console.log(recursiveFindSubsidiaries(umbrellaCompany));