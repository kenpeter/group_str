
function myGroup(str, len) {
	let num = str.length / len;
	num = Math.floor(num);
	let left = str.length % len;

	let buf = [];
	for(let i=0, start=0; i<num; i++, start+=len) {
		// substring is start, end index
		// substr is start, len. Smaller so len needed
		let group = str.substr(start, len);	
		buf.push(group);
	} // end

	// - length, so right to left
	let leftStr = str.substr(-left);
	buf.push(leftStr);

	return buf;
}


let str = 'abcde';
let len = 2;
let out = myGroup(str, len);
console.log(out);


