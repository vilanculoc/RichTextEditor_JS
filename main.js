    var editorDoc;
    var showingSourceCode = false;
        function InitEditable () {
            var editor = document.getElementById ("editorField");
            editorDoc = editor.contentWindow.document;
            var editorBody = editorDoc.body;

                // turn off spellcheck
            if ('spellcheck' in editorBody) {    // Firefox
                editorBody.spellcheck = false;
            }

            if ('contentEditable' in editorBody) {
                    // allow contentEditable
                editorBody.contentEditable = true;
            }
            else {  // Firefox earlier than version 3
                if ('designMode' in editorDoc) {
                        // turn on designMode
                    editorDoc.designMode = "on";
                }
            }
        }

        function execCmd (comando) {
        var x=comando;
        //alert(x);
        editorDoc.execCommand (x, false, null);
        }
        
        function toggleSource(){
        	if(showingSourceCode){
        		editor.document.getElementByTagName('body')[0].innerHTML=editor.document.getElementByTagName('body')[0].textContent;
        		showingSourceCode =  false;       	
        	}else{
        		editor.document.getElementByTagName('body')[0].textContent=editor.document.getElementByTagName('body')[0].innerHTML;
        		showingSourceCode = true;
        	}
        }

        function execCmdWithArg(comando, argumento){
            var y = comando;
            var z = argumento ;
            //document.getElementById('test').innerHTML =y +' '+ z;
            editorDoc.execCommand (y, false, z);

        }