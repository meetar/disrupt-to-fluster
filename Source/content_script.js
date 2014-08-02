walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

var verbs = ["gently tidy up", "fluff the pillow of", "cuddle", "fluster", "mildly agitate", "massage"];
var gerunds = ["gently tidying up", "fluffing the pillow of", "cuddling", "flustering", "mildly agitating", "massaging"];

function oneOf(array) {
	var item = array[Math.floor(Math.random()*array.length)];
}

}
function handleText(textNode) 
{
	var v = textNode.nodeValue;
	var capped = /[A-Z]/.test( v[0]) );

	v = v.replace(/\bDisrupt\b/g, oneOf(verbs));
	v = v.replace(/\bdisrupt\b/g, oneOf(verbs));
	v = v.replace(/\bDisruption\b/g, oneOf(gerunds));
	v = v.replace(/\bdisruption\b/g, oneOf(gerunds));
	v = v.replace(/\bDisruptive\b/g, oneOf(gerunds));
	v = v.replace(/\bdisruptive\b/g, oneOf(gerunds));
	v = v.replace(/\bDisrupting\b/g, oneOf(gerunds));
	v = v.replace(/\bdisrupting\b/g, oneOf(gerunds));
	
	if capped { v = v.charAt(0).toUpperCase() + v.slice(1); }
	textNode.nodeValue = v;
}


