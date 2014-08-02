var verbs = ["gently tidy up", "fluff the pillow of", "cuddle", "fluster", "mildly agitate", "massage"];
var nouns = ["gentle tidying", "pillow-fluffing", "cuddle", "flustering", "mild agitation", "massage"];
var adjectives = ["gently tidied", "fluffed", "cuddled", "flustered", "mildly agitated", "massaged"];
var gerunds = ["gently tidying up", "fluffing the pillow of", "cuddling", "flustering", "mildly agitating", "massaging"];

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

function oneOf(a) {
	return item = a[Math.floor(Math.random()*a.length)];
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;
	var capped = /[A-Z]/.test( v[0] );

	v = v.replace(/\bDisrupt\b/g, oneOf(verbs));
	v = v.replace(/\bdisrupt\b/g, oneOf(verbs));
	v = v.replace(/\bDisruption\b/g, oneOf(nouns));
	v = v.replace(/\bdisruption\b/g, oneOf(nouns));
	v = v.replace(/\bDisruptive\b/g, oneOf(adjectives));
	v = v.replace(/\bdisruptive\b/g, oneOf(adjectives));
	v = v.replace(/\bDisrupting\b/g, oneOf(gerunds));
	v = v.replace(/\bdisrupting\b/g, oneOf(gerunds));
	
	if (capped) { v = v.charAt(0).toUpperCase() + v.slice(1); }
	textNode.nodeValue = v;
}


