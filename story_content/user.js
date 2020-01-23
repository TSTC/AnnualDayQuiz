function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6kuDgL9UPnV":
        Script1();
        break;
  }
}

function Script1()
{
  function findLMSAPI(win) {
if (win.hasOwnProperty("GetStudentID")) return win;
else if (win.parent == win) return null;
else return findLMSAPI(win.parent);
}
var lmsAPI = findLMSAPI(this);

var player = GetPlayer();

var userID=lmsAPI.GetStudentID();

player.SetVar("StudentID", userID);

}

