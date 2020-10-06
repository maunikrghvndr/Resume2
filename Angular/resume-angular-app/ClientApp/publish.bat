@call time /T
call ng build
call xcopy /I /E /Y /Q "dist" "..\..\..\wwwroot\NgApp"
powershell -c (New-Object Media.SoundPlayer "C:\Windows\Media\notify.wav").PlaySync();