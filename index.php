<!DOCTYPE html>
<!--
All rights reserved. Copyright Robert Roy 2018.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Unminify CSS</title>
        <link rel="stylesheet" href="default.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
        <script src="script.js"></script>
    </head>
    <body>            
        <div><label class="label" for="input">Enter Minified CSS:</label></div>
        <textarea id="input" type="text" rows="4" name="input">This page will not work without JavaScript.</textarea>
        <input id="copy" class="crispbutton" style="margin-top:3px" type="submit" value="Copy">
        <textarea id="output" type="text" rows="4" name="output"></textarea>
        <input id="copyThis" type="text" name="copyThis">
    </body>
</html>
