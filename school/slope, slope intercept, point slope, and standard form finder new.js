javascript:alert("slope, slope intercept, point slope, and standard form finder. Notes: two - make a +");var x1=prompt('what is the x coordinate of the first point?');var y1=prompt('what is the y coordinate of the first point?');var x2=prompt('what is the x coordinate of the second point?');var y2=prompt('what is the y coordinate of the second point?');var st=y2-y1;var sb=x2-x1;alert('the slope of the line is '+st+'/'+sb+'.');alert('point slope form is y-'+y1+'='+st+'/'+sb+'(x-'+x1+')'); var left=0;var right=st/sb*x1-y1;alert('the slope intercept form is y='+st+'/'+sb+'x- '+right+'.');var e=st/sb;var l=e%1;(function() { if (e>0) {e=e*-1;if (l!=1) {e=e*sb;alert("the standard form is - "+e+"x+"+sb+"y="+right*sb+".");}}else {alert("the standard form is - "+e+"x+y="+right+".");}})();alert('by dragonmaster73101');
