    var editorDoc;
        function InitEditable () {
            var editor = document.getElementById ("editor");
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