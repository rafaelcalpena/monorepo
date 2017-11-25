/* Similar to jQuery extend method, but returns a new object
	 instead of modifying existing one
	 (good for functional programming) */

const extend = (state, newProps) => {
	return Object.assign({...state}, newProps)
}

export default extend
