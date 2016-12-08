<h3>Summary</h3>

<p>This project consists of a very simple, server-side Swift application based on Kitura that supports an AngularJS client application that loads data from the Kitura backend and displays the data in a browser-based user interface.</p>

<p>The application performs a very simple service of getting and setting timestamps. The service routes are defined in main.swift on the server and can be consumed by any client—iOS or Android applications, web client, etc. In the case of this sample, the timestamp services are consumed via REST calls made from an AngularJS client service.</p>

<h3>Clone, build and run the project</h3>

<ul>
<li>Install <a href="https://developer.apple.com/download/" target="_blank">Xcode 8</a> from Apple</li>
<li>Clone the repository</li>
<pre>$ git clone https://github.com/jkingoliver/Kitura-AngularJS.git</pre>
<li>Build the application</li>
<pre>$ cd Kitura-AngularJS
$ swift build</pre>
<li>Run the built executable</li>
<pre>$ ./build/debug/Kitura-AngularJS</pre>
<li>Open a browser pointing at http://localhost:8090</li>
</ul>

