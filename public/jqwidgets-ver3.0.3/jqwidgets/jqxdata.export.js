/*
jQWidgets v3.0.3 (2013-Oct-01)
Copyright (c) 2011-2013 jQWidgets.
License: http://jqwidgets.com/license/
*/

(function(b){var a=(function(){var m={},j,k,r,g,d;function i(s){s.beginFile();f(s);o(s);s.endFile();return s.getFile()}function f(v){var t=true;b.each(k,function(){if(this.hidden){t=false;return false}});v.beginHeader(t);for(var s in k){var u=c(s,k[s]);v.appendHeaderCell(k[s],s,u,t)}v.endHeader(t)}function o(t){t.beginBody();for(var s=0;s<j.length;s+=1){if(j[s]!==undefined){q(t,j[s],s)}}t.endBody()}function q(v,u,w){var t;v.beginRow();for(var s in k){t=n(w,s);if(u.hasOwnProperty(s)){v.appendBodyCell(u[s],k[s],t)}else{v.appendBodyCell("",k[s],t)}}v.endRow()}function c(t,u){if(u.style){return r[u.style]}var s=p();if(s.length>0){return s[0].style}return null}function p(){if(!d){d=new Array();b.each(r,function(s,t){d[d.length]={name:s,style:t}})}return d}function n(x,w){var y=k[w];if(y){if(y.customCellStyles){var u=y.customCellStyles[x];if(u){return r[u]}}if(y.cellStyle){if(y.cellAltStyle){var t=x%2;if(t==0){return r[y.cellStyle]}return r[y.cellAltStyle]}return r[y.cellStyle]}else{var s=p();if(s.length>0){var t=x%(s.length-1);var v=s[t+1].style;return v}}}return null}function e(v,t,u){var s=document.createElement("input");s.name=t;s.value=v;s.type="hidden";u.appendChild(s);return s}function h(u,s,t){var v=document.createElement("textarea");v.name=s;v.value=u;t.appendChild(v);return v}function l(t,w,v,s,x){var u=document.createElement("form");e(t,"filename",u);e(w,"format",u);h(v,"content",u);if(s==undefined||s==""){if(window&&window.location.toString().indexOf("jqwidgets.com")>=0){s="http://jqwidgets.com/export_server/save-file.php"}else{s="http://jquerygrid.net/export_server/save-file.php"}}u.action=s;u.method="post";if(x){u.acceptCharset=x}document.body.appendChild(u);return u}g=function(v,u,t,s){if(!(this instanceof a)){return new a(v,u,t)}j=v;k=u;r=t;this.exportTo=function(x){x=x.toString().toLowerCase();var w=m[x];if(typeof w==="undefined"){throw"You can't export to "+x+" format."}return i(w,j,k,r)};this.exportToFile=function(A,x,w,B){var z=this.exportTo(A),y=l(x,A,z,w,B);y.submit();document.body.removeChild(y)};this.exportToLocalFile=function(y,w){var x=this.exportTo(y);document.location.href="data:application/octet-stream;filename="+w+","+encodeURIComponent(x)}};g.extend=function(s,t){if(t instanceof b.jqx.dataAdapter.DataExportModuleBase){m[s]=t}else{throw"The module "+s+" is not instance of DataExportModuleBase."}};return g}());b.jqx.dataAdapter.ArrayExporter=a})(jQuery);(function(b){var a=function(){this.formatData=function(f,e,c,h){if(e==="date"){var d="";if(typeof f==="string"){d=b.jqx.dataFormat.tryparsedate(f);f=d}if(f===""||f===null){return""}d=b.jqx.dataFormat.formatdate(f,c,h);if(d.toString()=="NaN"||d==null){return""}f=d}else{if(e==="number"||e==="float"||e==="int"||e=="integer"){if(f===""||f===null){return""}if(!isNaN(new Number(f))){var g=b.jqx.dataFormat.formatnumber(f,c,h);if(g.toString()=="NaN"){return""}else{f=g}}}else{f=f}}if(f===null){return""}return f};this.getFormat=function(f){var c=f?f.formatString:"";var e=f?f.localization:"";var d="string";d=f?f.type:"string";if(d=="number"||d=="float"){if(!c){c="n2"}}if(d=="int"||d=="integer"){if(!c){c="n0"}}if(d=="date"){if(!c){c="d"}}return{type:d,formatString:c,localization:e}};this.beginFile=function(){throw"Not implemented!"};this.beginHeader=function(){throw"Not implemented!"};this.appendHeaderCell=function(){throw"Not implemented!"};this.endHeader=function(){throw"Not implemented!"};this.beginBody=function(){throw"Not implemented!"};this.beginRow=function(){throw"Not implemented!"};this.appendBodyCell=function(){throw"Not implemented!"};this.endRow=function(){throw"Not implemented!"};this.endBody=function(){throw"Not implemented!"};this.endFile=function(){throw"Not implemented!"};this.getFile=function(){throw"Not implemented!"}};b.jqx.dataAdapter.DataExportModuleBase=a})(jQuery);(function(d){var c=function(j){var e,h,g;var l=0;var i=this;this.beginFile=function(){e=""};this.beginHeader=function(){};this.appendHeaderCell=function(o,p,n,m){g=m;if(m){k(o.text)}};this.endHeader=function(){this.endRow()};this.beginBody=function(){l=0};this.beginRow=function(){if((l>0)||(l==0&&g)){e+="\n"}l++};this.appendBodyCell=function(n,m){k(n,m)};this.endRow=function(){e=e.substring(0,e.length-1)};this.endBody=function(){};this.endFile=function(){};this.getFile=function(){return e};function f(m,o){if(o){var n=i.getFormat(o);m=i.formatData(m,n.type,n.formatString,n.localization)}m='"'+m+'"';return m}function k(m,n){m=f(m,n);e+=m+j}};c.prototype=new d.jqx.dataAdapter.DataExportModuleBase();var a=function(){};a.prototype=new c(",");var b=function(){};b.prototype=new c("\t");d.jqx.dataAdapter.ArrayExporter.extend("csv",new a());d.jqx.dataAdapter.ArrayExporter.extend("tsv",new b())})(jQuery);(function(d){var a=function(){var i=false;var g;var h;var j=0;this.setPDF=function(){i=true};this.beginFile=function(){if(i){g='<table style="empty-cells: show;" cellspacing="0" cellpadding="2">'}else{g='<html>\n\t<head>\n\t\t<title></title>\n\t\t<meta http-equiv=Content-type content="text/html; charset=UTF-8">\n\t</head>\n\t<body>\n\t\t<table style="empty-cells: show;" cellspacing="0" cellpadding="2">'}};this.beginHeader=function(){if(i){g+="\n\t<thead><tr>"}else{g+="\n\t\t\t<thead>"}};this.appendHeaderCell=function(m,n,l,k){h=k;if(!k){return}if(i){g+='\n\t\t\t\t<th style="'+f(l)+'">'+m.text+"</th>"}else{if(m.width){g+='\n\t\t\t\t<th style="width: '+m.width+"px; "+f(l)+'">'+m.text+"</th>"}else{g+='\n\t\t\t\t<th style="'+f(l)+'">'+m.text+"</th>"}}};this.endHeader=function(){if(i){g+="\n\t</tr></thead>"}else{g+="\n\t\t\t</thead>"}};this.beginBody=function(){if(i){g+="\n\t<tbody>"}else{g+="\n\t\t\t<tbody>"}j=0};this.beginRow=function(){if(i){g+="\n\t<tr>"}else{g+="\n\t\t\t\t<tr>"}j++};this.appendBodyCell=function(l,n,k){var m=this.getFormat(n);if(l===""){l="&nbsp;"}if(i){if(j==1&&!h){g+='\n\t\t\t\t\t<td style="'+f(k)+' border-top-width: 1px;">'+this.formatData(l,m.type,m.formatString,m.localization)+"</td>"}else{g+='\n\t\t\t\t\t<td style="'+f(k)+'">'+this.formatData(l,m.type,m.formatString,m.localization)+"</td>"}}else{if(j==1&&!h){g+='\n\t\t\t\t\t<td style="'+f(k)+' border-top-width: 1px;">'+this.formatData(l,m.type,m.formatString,m.localization)+"</td>"}else{g+='\n\t\t\t\t\t<td style="'+f(k)+'">'+this.formatData(l,m.type,m.formatString,m.localization)+"</td>"}}};this.endRow=function(){if(i){g+="\n\t</tr>"}else{g+="\n\t\t\t\t</tr>"}};this.endBody=function(){if(i){g+="\n\t</tbody>"}else{g+="\n\t\t\t</tbody>"}};this.endFile=function(){if(i){g+="\n</table>"}else{g+="\n\t\t</table>\n\t</body>\n</html>\n"}};this.getFile=function(){return g};function f(m){var k="";for(var l in m){if(m.hasOwnProperty(l)){if(i&&l=="font-size"){m[l]="100%"}k+=l+":"+m[l]+";"}}return k}};a.prototype=new d.jqx.dataAdapter.DataExportModuleBase();var e=function(){};e.prototype=new a();var c=function(){};c.prototype=new a();var b=new c();b.setPDF();d.jqx.dataAdapter.ArrayExporter.extend("html",new e());d.jqx.dataAdapter.ArrayExporter.extend("pdf",b)})(jQuery);(function(b){var a=function(){var h,l,d,i,c,j,m={style:"",stylesMap:{font:{color:"Color","font-family":"FontName","font-style":"Italic","font-weight":"Bold"},interior:{"background-color":"Color",background:"Color"},alignment:{left:"Left",center:"Center",right:"Right"}},startStyle:function(p){this.style+='\n\t\t<Style ss:ID="'+p+'" ss:Name="'+p+'">'},buildAlignment:function(q){if(q["text-align"]){var r=this.stylesMap.alignment[q["text-align"]];if(!r){r="Left"}var p='\n\t\t\t<Alignment ss:Vertical="Bottom" ss:Horizontal="'+r+'"/>';this.style+=p}},buildBorder:function(s){if(s["border-color"]){var r="\n\t\t\t<Borders>";var u='\n\t\t\t\t<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="'+s["border-color"]+'"/>';var p='\n\t\t\t\t<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="'+s["border-color"]+'"/>';var q='\n\t\t\t\t<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="'+s["border-color"]+'"/>';var t='\n\t\t\t\t<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="'+s["border-color"]+'"/>';r+=u;r+=p;r+=q;r+=t;r+="\n\t\t\t</Borders>";this.style+=r}},buildFont:function(q){var r=this.stylesMap.font,p="\n\t\t\t<Font ";for(var s in r){if(typeof q[s]!=="undefined"){if(s==="font-style"&&q[s].toString().toLowerCase()==="italic"){p+='ss:Italic="1" '}else{if(s==="font-weight"&&q[s].toString().toLowerCase()==="bold"){p+='ss:Bold="1" '}else{if(s==="color"){p+="ss:"+r[s]+'="'+q[s]+'" '}}}}}p+="/>";this.style+=p},buildInterior:function(q){var r=this.stylesMap.interior,t="\n\t\t\t<Interior ";var p=false;for(var s in r){if(typeof q[s]!=="undefined"){t+="ss:"+r[s]+'="'+q[s]+'" ';p=true}}if(p){t+='ss:Pattern="Solid"'}t+="/>";this.style+=t},buildFormat:function(q){if(q.dataType=="number"||q.dataType=="float"||q.dataType=="int"||q.dataType=="integer"){var p=q.formatString;if(p==""||p.indexOf("n")!=-1||p.indexOf("N")!=-1){this.style+='\n\t\t\t<NumberFormat ss:Format="0"/>'}else{if(p=="f"||p=="F"||p=="D"||p.indexOf("d")!=-1){this.style+='\n\t\t\t<NumberFormat ss:Format="#,##0.00_);[Red](#,##0.00)"/>'}else{if(p.indexOf("p")!=-1||p.indexOf("P")!=-1){this.style+='\n\t\t\t<NumberFormat ss:Format="Percent"/>'}else{if(p.indexOf("c")!=-1||p.indexOf("C")!=-1){if(parseInt(q.currencysymbol.charCodeAt(0))==8364){this.style+='\n\t\t\t<NumberFormat ss:Format="Euro Currency"/>'}else{this.style+='\n\t\t\t<NumberFormat ss:Format="Currency"/>'}}}}}}else{if(q.dataType=="date"){this.style+='\n\t\t\t<NumberFormat ss:Format="Short Date"/>'}}},closeStyle:function(){this.style+="\n\t\t</Style>"},toString:function(){var p=this.style;this.style="";return p}};this.beginFile=function(){c={};j=0;h='<?xml version="1.0"?>\n\t<?mso-application progid="Excel.Sheet"?> \n\t<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" \n\txmlns:o="urn:schemas-microsoft-com:office:office" \n\txmlns:x="urn:schemas-microsoft-com:office:excel" \n\txmlns:ss="urn:schemas-microsoft-com:office:spreadsheet" \n\txmlns:html="http://www.w3.org/TR/REC-html40"> \n\t<DocumentProperties xmlns="urn:schemas-microsoft-com:office:office"> \n\t<Version>12.00</Version> \n\t</DocumentProperties> \n\t<ExcelWorkbook xmlns="urn:schemas-microsoft-com:office:excel"> \n\t<WindowHeight>8130</WindowHeight> \n\t<WindowWidth>15135</WindowWidth> \n\t<WindowTopX>120</WindowTopX> \n\t<WindowTopY>45</WindowTopY> \n\t<ProtectStructure>False</ProtectStructure> \n\t<ProtectWindows>False</ProtectWindows> \n\t</ExcelWorkbook> \n\t<Styles>'};this.beginHeader=function(){l='\n\t<Worksheet ss:Name="Sheet1">\n\t\t<Table>';d=[];i=[]};this.appendHeaderCell=function(r,s,q){var p=r.width!=undefined?r.width:r.text.length*10;l+='\n\t\t\t<Column ss:Width="'+p+'"/>';d.push(r);i.push(q)};this.endHeader=function(p){if(p){this.beginRow();for(var q=0;q<d.length;q+=1){g.call(this,d[q]["text"],null,i[q])}this.endRow()}};this.beginBody=function(){};this.beginRow=function(){l+="\n\t\t\t<Row>"};this.appendBodyCell=function(r,p,q){g.call(this,r,p,q)};this.endRow=function(){l+="\n\t\t\t</Row>"};this.endBody=function(){l+="\n\t\t</Table>"};this.endFile=function(){l+="\n\t</Worksheet>\n</Workbook>";h+="\n\t</Styles>"};this.getFile=function(){return h+l};function g(s,u,r){var q="String";var t=this.getFormat(u);if(s!=null&&s.toString().substring(0,2)=="AG"){s=s.toString().substring(2);q="String"}else{if(t.type=="date"){s=this.formatData(s,t.type,t.formatString,t.localization);if(s===null||s===""){s="";q="String"}}if(t.type=="string"){if(s===null||s===undefined){s=""}else{if(s.toString().indexOf("&")>=0){s=s.toString().replace(/&/g,"&amp;")}if(s.toString().indexOf(">")>=0){s=s.toString().replace(/>/g,"&gt;")}if(s.toString().indexOf("<")>=0){s=s.toString().replace(/</g,"&lt;")}if(s.toString().indexOf('"')>=0){s=s.toString().replace(/"/g,"&quot;")}if(s.toString().indexOf("'")>=0){s=s.toString().replace(/'/g,"&apos;")}}}if(r.dataType=="number"||r.dataType=="float"||r.dataType=="int"||r.dataType=="integer"){q="Number";s=parseFloat(s);if(s===null||isNaN(s)||s===""){s="";q="String"}if(s&&q!="String"&&s!=""){if(u&&u.formatString&&u.formatString.indexOf("p")>=0){s=s/100}}r.currencysymbol=u.localization.currencysymbol}}var p=f(r);l+='\n\t\t\t\t<Cell ss:StyleID="'+p+'"><Data ss:Type="'+q+'">'+s+"</Data></Cell>"}function n(){j+=1;return"xls-style-"+j}function k(q){for(var p in c){if(o(q,c[p])&&o(c[p],q)){return p}}return undefined}function o(t,q){var s=true;for(var r in t){if(t[r]!==q[r]){s=false}}return s}function e(q,p){m.startStyle(q);m.buildAlignment(p);m.buildBorder(p);m.buildFont(p);m.buildInterior(p);m.buildFormat(p);m.closeStyle();h+=m.toString()}function f(p){if(!p){return""}var q=k(p);if(typeof q==="undefined"){q=n();c[q]=p;e(q,p)}return q}};a.prototype=new b.jqx.dataAdapter.DataExportModuleBase();b.jqx.dataAdapter.ArrayExporter.extend("xls",new a())})(jQuery);(function(b){var a=function(){var e,c,d;this.beginFile=function(){e='<?xml version="1.0" encoding="UTF-8" ?>';e+="\n<table>"};this.beginHeader=function(){c=[]};this.appendHeaderCell=function(f,g){c.push(g)};this.endHeader=function(){};this.beginBody=function(g,f){};this.beginRow=function(){e+="\n\t<row>";d=0};this.appendBodyCell=function(f,h){var g=this.getFormat(h);f=this.formatData(f,g.type,g.formatString,g.localization);if(g.type=="string"){if(f.toString().indexOf("&")>=0){f=f.toString().replace(/&/g,"&amp;")}if(f.toString().indexOf(">")>=0){f=f.toString().replace(/>/g,"&gt;")}if(f.toString().indexOf("<")>=0){f=f.toString().replace(/</g,"&lt;")}if(f.toString().indexOf('"')>=0){f=f.toString().replace(/"/g,"&quot;")}if(f.toString().indexOf("'")>=0){f=f.toString().replace(/'/g,"&apos;")}}e+="\n\t\t<"+c[d]+">"+f+"</"+c[d]+">";d++};this.endRow=function(){e+="\n\t</row>";d=0};this.endBody=function(){};this.endFile=function(){e+="\n</table>"};this.getFile=function(){return e}};a.prototype=new b.jqx.dataAdapter.DataExportModuleBase();b.jqx.dataAdapter.ArrayExporter.extend("xml",new a())})(jQuery);(function(d){var j=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,l={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};function a(n){return'"'+n.replace(j,function(o){var p=l[o];return typeof p==="string"?p:"\\u"+("0000"+o.charCodeAt(0).toString(16)).slice(-4)})+'"'}function b(o){return o<10?"0"+o:o}function e(o){var n;if(isFinite(o.valueOf())){n=o.getUTCFullYear()+"-"+b(o.getUTCMonth()+1)+"-"+b(o.getUTCDate())+"T"+b(o.getUTCHours())+":"+b(o.getUTCMinutes())+":"+b(o.getUTCSeconds())+'Z"'}else{n="null"}return n}function g(q){var n=q.length,o=[],p;for(p=0;p<n;p++){o.push(h(p,q)||"null")}return"["+o.join(",")+"]"}function m(q){var o=[],p,n;for(p in q){if(Object.prototype.hasOwnProperty.call(q,p)){n=h(p,q);if(n){o.push(a(p)+":"+n)}}}return"{"+o.join(",")+"}"}function i(n){switch(Object.prototype.toString.call(n)){case"[object Date]":return e(n);case"[object Array]":return g(n)}return m(n)}function k(o,n){switch(n){case"string":return a(o);case"number":case"float":case"integer":case"int":return isFinite(o)?o:"null";case"boolean":return o}return"null"}function h(o,n){var q=n[o],p=typeof q;if(q&&typeof q==="object"&&typeof q.toJSON==="function"){q=q.toJSON(o);p=typeof q}if(/(number|float|int|integer|string|boolean)/.test(p)||(!q&&p==="object")){return k(q,p)}else{return i(q)}}function f(n){if(window.JSON&&typeof window.JSON.stringify==="function"){return window.JSON.stringify(n)}return h("",{"":n})}var c=function(){var p=this;this.prepareData=function(r,t){if(t){var s=p.getFormat(t);r=p.formatData(r,s.type,s.formatString,s.localization)}return r};var n,o,q;this.beginFile=function(){o=[]};this.beginHeader=function(){};this.appendHeaderCell=function(r){};this.endHeader=function(){};this.beginBody=function(s,r){};this.beginRow=function(){q={}};this.appendBodyCell=function(s,r){var t=this.prepareData(s,r);q[r.text]=t};this.endRow=function(){o.push(q)};this.endBody=function(){};this.endFile=function(){n=f(o)};this.getFile=function(){return n}};c.prototype=new d.jqx.dataAdapter.DataExportModuleBase();d.jqx.dataAdapter.ArrayExporter.extend("json",new c())})(jQuery);