function adduser()
{
    player1 = document.getElementById("player1").value;
    player2 = document.getElementById("player2").value;
    localStorage.setItem("player1key",player1);
    localStorage.setItem("player2key",player2);
    window.location = "index1.html";
}
