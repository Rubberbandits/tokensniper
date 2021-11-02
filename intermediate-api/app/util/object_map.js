// I really don't know how I feel about this whole function

function objectFilter(obj, filterObject, notRecursive)
{
	let newObjectEntries = Object.entries(obj).map(
		([k, v]) => {
			let entry = [
				k, 
				filterObject[k] ? (typeof filterObject[k] == "object" && !notRecursive && v ? objectFilter(v, filterObject[k]) : v) : undefined
			]

			return entry;
		}
	);
	let newObject = Object.fromEntries(newObjectEntries);

	return newObject;
}

exports.objectFilter = objectFilter;