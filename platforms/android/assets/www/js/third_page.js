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

var KEY_UNAME = "username";
var KEY_UPASS = "password";

var app = {

    // Application Constructor
    initialize: function() {

        console.log ("ON LOAD username: " + localStorage.getItem (KEY_UNAME) + ";password: " + localStorage.getItem (KEY_UPASS));

        var uname = localStorage.getItem (KEY_UNAME);
        $('#displayUsername').text("Are you " + uname + " ?");

        $('#back').on('click', function () {
            window.location = "index.html";
        });
        $('#card1').on('click', function () {
            window.location = "fourth_page.html";
        });
        $('#card2').on('click', function () {
            window.location = "fourth_page.html";
        });
        $('#card3').on('click', function () {
            window.location = "fourth_page.html";
        });
        $('#card4').on('click', function () {
            window.location = "second_page.html";
        });
        $('#skip').on('click', function () {
            window.location = "fourth_page.html";
        });
        $('#login').on('click', function () {

            var upass = $('#password').val();
            console.log ("ON LOGIN password: " + upass);

            if (upass !== localStorage.getItem (KEY_UPASS)){
                $('#wrongPassword').attr("style", "visibility: visible");
            } else {
                $('#wrongPassword').attr("style", "visibility: hidden");
                window.location = "fourth_page.html";
            }

        });

        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    }
};

app.initialize();