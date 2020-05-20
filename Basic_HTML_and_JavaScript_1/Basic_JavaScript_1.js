<!DOCTYPE HTML>
<html>
<script src="Hello_World.js"></script>

<body>
	<button onclick="my_First_Function()">
		Click me!
	</button>
	<p id="Irish"></p>
<script>
	function My_first_Function() {
	var String = "Kiss me, I'm Irish!";
	var result = String.fontcolor("green");
	document.getElementById("Irish").innerHTML =
	result;
	
}
</script>
</body>
</html>