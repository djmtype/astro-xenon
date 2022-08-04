function wrap_single(el, wrapper) {
	el.parentNode.insertBefore(wrapper, el)
	wrapper.appendChild(el)
}
let divWrapper
let elementToWrap
elementToWrap = document.querySelector("table")
divWrapper = document.createElement("div")
divWrapper.className = "table-wrapper"

if (document.querySelector("table")) {
	wrap_single(elementToWrap, divWrapper)
}

// let original = document.querySelector('table');
// let wrapper = document.createElement('div');
// wrapper.classList.add('table-wrapper');
// wrapper.append(original.cloneNode(true));

// original.replaceWith(wrapper);
