// Write your solution in this file!

const driver = new Object;

function updateDriverWithKeyAndValue(obj, key, value) {
	return Object.assign({}, obj, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
	return Object.assign(obj, {[key]: value})	
}

function deleteFromDriverByKey(obj, key) {
	const newDriver = Object.assign({}, obj);
	delete newDriver[key];
	return newDriver;
}

function destructivelyDeleteFromDriverByKey(obj, key) {
	delete obj[key];
	return obj;	
}