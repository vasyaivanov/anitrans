/*

 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var $p = $('p'),
    $cover = $('.cover'),
    width = $p.width(),
    decrement = width / $p.text().length;
function addChar()
        {    
            $cover.css('width', '-=' + decrement);
            
            if ( parseInt( $cover.css('width') ) < width )
            {
                        addChar
                document.getElementById('content12').value += signature
            }
        }
        var str = "I want to protect you. I can sense when you're in a bad mood. I need more exercise! I'm scared you won't come back. I can tell when you're not feeling well. Pay attention when I'm not myself. I need a routine, but with a little variety. Be clear when I'm doing something wrong. I'm not a human.";
                function addVal(){
                    for (var i = 0, len = str.length; i < len; i++) {
                        (function(i){
                        window.setTimeout(function(){
                        var textarea = document.getElementById('content12');
                        textarea.value += str[i]
                        textarea.scrollTop = textarea.scrollHeight;
                        }, i * 75);

                    }(i));
                    }
                    // document.getElementById('content12').value = str[i]
                    }

                //  document.getElementById('content12').value = signature
                
var app = {
    
    initialize: function() {
        $('#back').on('click', function () {
            window.location = "index.html";
        });
        $('#btnClick').on('click', function () {
            addVal();
        });
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        setTimeout(function() { addVal(); }, 2000);
    },
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        
    },
    receivedEvent: function(id) {
        setTimeout(function() { f(); }, 1900);
        // $('#video_dog').bind('autoplay', f);
   function f() {
            TTS.speak({
                        text: str,
                        locale: 'en-GB',
                        rate: 1.5
                    // }, 
                    // function () {
                    //     // alrt('success');
                    // }, function (reason) {
                        // alert(reason);
                    }
            );
        }
    }
};

app.initialize();