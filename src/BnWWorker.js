this.onmessage = function (event) {
	
	var	imagedata = event.data,
		px = imagedata.data,
		grey = null,
		length = px.length;  

	for (var i = 0 ; i < length; i+= 4 ) {  
		grey = px[i] * .3 + px[i+1] * .59 + px[i+2] * .11;  
		px[i] = px[i+1] = px[i+2] = grey;  
		
	}  
	
	postMessage(imagedata);
	
	// terminate the worker
	
	// the standard way - http://www.w3.org/TR/workers/#dedicated-workers-and-the-worker-interface
	if (this.terminate) {
	    this.terminate();
	}
	
	// IE 10 specific - http://msdn.microsoft.com/en-us/library/ie/hh673568(v=vs.85).aspx
	if(this.close) {
	    this.close();
	}
}
