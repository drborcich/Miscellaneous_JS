<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Class Method</h2>

<p>Demonstration of how to add a method in a JavaScript Class.</p>

<p id="demo"></p>

<script>
class house {
  constructor(location, size, color, windows) {
    this.houselocation = location;
    this.housesize = size;
    this.housecolor = color;
    this.housewindows = windows;
    this.windows()
  }
  present() {
    return "The house in " + this.houselocation + " is " + this.housesize;
  }
  windows() {
    console.log("Would you like to know how many windows? " )
      
      
  }
}

mycar = new house("Kansas", "large", "purple", 6);

document.getElementById("demo").innerHTML = mycar.present();
</script>

</body>
</html>