function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6dhNeFzNSDH":
        Script1();
        break;
  }
}

function Script1()
{
  var player=GetPlayer(),xhttp=new XMLHttpRequest,targlink="https://cluelabs.com/stencil/display/widget-table-save-row?chart=MTE1N3wxMzEwfDg2YTQ2YTA5MGQ3ODk5ZjM1NzMyYmZhOGI5MGM5OGUx";targlink=targlink+"&newnum="+encodeURIComponent(parseFloat(player.GetVar("Score")))+"&newtext="+encodeURIComponent(player.GetVar("TextEntry1")),xhttp.onreadystatechange=function(){4==this.readyState&&200==this.status&&player.SetVar("stencilrendered",parseInt(player.GetVar("stencilrendered"))+1)},xhttp.open("GET",targlink,!0),xhttp.send();
		
}

