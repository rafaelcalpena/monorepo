/* This function divides items into two distinct groups:
	- Given a certain condition, first group will contain elements to which condition is truthy
	- For second group, condition will be false

	This function is used by topologicalSort to separate items that don't have dependencies from others
*/


/* Function used to determine if a certain item has dependencies */
const hasDependencies = item => ( item.dependsOn && item.dependsOn.length > 0 )

/* Constructor Function that inverts the output of a function call */
const negate = (f) => (...args) => !f(...args)

/* Given a item dependency, this function checks if it should be removed */
const filterOutDep = (dep, independentItems) => {
	let shouldRemove = false;
	if (independentItems.get(dep)) {
		shouldRemove = true;
	}
	return !shouldRemove;
}

/* Will return a new item without dependencies that have no dependencies */
const removeIndependentDependencies = (item, index, independentItems) => {
	const r = {
		[index]: Object.assign({...item}, {
			dependsOn: item.dependsOn && item.dependsOn.filter(dep => filterOutDep(dep, independentItems))
		})
	}

	return r;
}

/* Sort items topologically, into levels [0,1,2,3,...] */

/* IMPORTANT: items should be an indexify object */
const topologicalSort = (items, levels = []) => {
	/* if there are no items, just return an empty array */
	if (items.length() === 0){
		return levels;
	}

	/* separate items in two categories: independent and dependent */
	const {yes: independentItems, no: dependentItems} = items.divide(negate(hasDependencies) )

	/* add the independent items to the current level */
	levels = [...levels, independentItems.values().map(i => i.id)]

	/* Each dependent item can have dependencies to the independent ones.
		 Because of that, we have to remove those links to ensure that the dependency number will be correct for
		 the next recursive step
	*/
	const filteredDependentItems = dependentItems.map((item, index) => removeIndependentDependencies(item, index, independentItems))

	/* Now we do the same ONLY for the dependentItems */
	return topologicalSort(filteredDependentItems, levels)
}

export default topologicalSort
