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
        		editorField.document.getElementByTagName('body')[0].innerHTML=editorField.document.getElementByTagName('body')[0].textContent;
        		showingSourceCode =  false;       	
        	}else{
        		editorField.document.getElementByTagName('body')[0].textContent=editorField.document.getElementByTagName('body')[0].innerHTML;
        		showingSourceCode = true;
        	}
        }

        function execCmdWithArg(comando, argumento){
            var y = comando;
            var z = argumento ;
            //document.getElementById('test').innerHTML =y +' '+ z;
            editorDoc.execCommand (y, false, z);

        }


        function changeSelectedItem(identifire){
            var chooser =identifire;
            document.getElementById('test').innerHTML=chooser;
            if (chooser=='file'){
                document.getElementById("home").classList.remove("selected");
                document.getElementById("home").classList.add("nonSelected");
                document.getElementById("insert").classList.remove("selected");
                document.getElementById("insert").classList.add("nonSelected");
                document.getElementById("file").classList.remove("nonSelected");
                document.getElementById("file").classList.add("selected");
                document.getElementById("tools").src = "file.html";

            }
            else if (chooser=='insert'){
                document.getElementById("home").classList.remove("selected");
                document.getElementById("home").classList.add("nonSelected");
                document.getElementById("file").classList.remove("selected");
                document.getElementById("file").classList.add("nonSelected");
                document.getElementById("insert").classList.remove("nonSelected");
                document.getElementById("insert").classList.add("selected");
                document.getElementById("tools").src = "insert.html";

            }
            else if (chooser=='home'){
                document.getElementById("file").classList.remove("selected");
                document.getElementById("file").classList.add("nonSelected");
                document.getElementById("insert").classList.remove("selected");
                document.getElementById("insert").classList.add("nonSelected");
                document.getElementById("home").classList.remove("nonSelected");
                document.getElementById("home").classList.add("selected");
                document.getElementById("tools").src = "home.html";

            } 
            
        }

        function mySave() {
            var myContent = document.getElementById("editorField").value;
            localStorage.setItem("myContent", myContent);
          }