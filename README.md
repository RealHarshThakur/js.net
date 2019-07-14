# JS.net
This repo contains code of JScript .NET to execute potentially malicious code, which ships in all Windows machines by default with a built-in compiler

## What is JScript .NET?
    You can access the whole of .NET with scripting capabilities.
    Here's the link: https://msdn.microsoft.com/en-us/ie/aa289164(v=vs.100)
   
## How to compile?
    C:\Windows\Microsoft.NET\Framework64\v4.0.30319\jsc.exe <name of the js file>
## What I found/did:
- All the machines with .NET installed have jsc.exe in them
- Jscript is directly compiled to .NET assembly.
- The compiler doesn't care about the extension used.
- You can access Win32 API as well so there's room for unmanaged code.
- I wrote a script (jscript-dotnet.js) which has another jscript-dotnet script within it, which is compiled in the %TEMP% directory and executed from there.
- Procmon dump showed no trace of Windows Scripting Host. It utilise Windows Scripting Runtime(scrrun.dll and jscript.dll). This would only occur if you use native jscript functionality like creating ActiveXObjects. 
- Can be used as an alternative to csc.exe. Although the code I wrote doesn't demonstrate that, but it can be used along with InstallUtil.exe as an application whitelist bypass depending on the environment being targetted.

## Advantage
-  Adds another tool in the attacker's arsenal.
- It is pretty easy to port C# code to JScript-Dotnet.
- Might be useful in environments where csc.exe is blocked.
- Since, Windows Scripting Host isn't in the picture, there's no need to worry about AMSI. 
- Network activity: Will blend right in with HTTP traffic as it is js.
- Extensions don't matter.

## Drawbacks
- Disk activity: Dropping temporary files to disk.
- Command line activity: To compile the files.

## TODO
- Port some of the popular C# tools.
- Look into possibility of converting this into a wscript edible js. As that can be used in html applications and oter Windows Scripting Components
