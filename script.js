/* ===== TechResQ: content, quiz logic, and page routing ===== */

/* Builds a YouTube embed. Pass '' as the id to show the "Video coming soon" box instead. */
const yt = id => id ? `<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` : '';

/*
  Each operating system has: its short intro (shown on the Home page),
  4 modules (the rescue guides) and 3 quiz questions per module.
  To add a YouTube video to a module, put the video ID inside yt('...') on its "video" line.
  (The ID is the part after "v=" in the YouTube link.)  Leave it as yt('') to show "Video coming soon".
*/
const OS_LIST = [
  /* ============================ LINUX ============================ */
  {
    id: 'linux', name: 'Linux', mono: 'LX',
    blurb: 'Free, open-source and powerful. Linux runs everything from school laptops to servers, and most fixes take only a few handy commands.',
    issues: ['Frozen apps and stuck desktops', 'Wi-Fi and network drops', 'Files removed with no Trash', 'Black screens and display glitches'],
    lead: 'Linux gives you a lot of control, which also means you can fix almost anything yourself. These guides use Ubuntu-style desktops, and the ideas work on most other distros too.',
    modules: [
      { id: 1, title: 'Frozen Apps & Stuck Desktops', tag: 'System Monitor & kill commands',
        card: 'System Monitor, the terminal and text consoles for stopping a stuck program.',
        intro: 'A window will not close, the desktop stops reacting, or a program just hangs. On Linux you almost always have a way in to stop the one bad process.',
        video: { title: 'Watch: How to Kill a Frozen App in Linux', embed: yt('GJfnh_JvIKw') },
        what: 'Whats happening? A freeze happens when an app or the screen itself gets overloaded and stops responding. Common causes include too many open programs, low memory, overheating, or display glitches. A crash happens when an app closes suddenly or the system restarts unexpectedly',
        steps: [
          ['Wait 30 to 60 seconds', 'Pause for a short moment before taking action. Heavy background work can pause the screen briefly and clear up on its own.'],
          ['Open System Monitor', 'Open the app menu, search for System Monitor, and click it to open'],
          ['Close the frozen app', 'Find the frozen or heavy program in the list, click it, and select End Process or Kill.'],
          ['Restart if the whole screen is stuck', 'Press Ctrl + Alt + Delete or open the power menu from the top corner of your screen and choose Restart. If the screen still will not respond, go to the next step.'],
          ['Check for overheating and give the computer time to cool down', 'If your computer feels unusually hot or its fan is running loudly, let it cool down for a few minutes. Make sure the air vents are not blocked and avoid using heavy applications until the temperature returns to normal.'],
          ['Hold the power button as a last resort', 'Press and hold the physical Power button for about 5 to 10 seconds only when nothing on screen responds. Unsaved work will be lost, so use this last']
        ],
        shortcuts: [['‌Super + type System Monitor', 'Open System Monitor to close frozen or heavy apps'], ['Alt + F2, then type xkill ', 'Click any frozen window to close it immediately'], ['Ctrl + Alt + Del', 'Open logout and restart options when the screen is stuck'], ['Ctrl + S', 'Save your work often to prevent data loss ']],
        tips: ['Save your work every few minutes.', '‌Close tabs and apps you are not using.', 'Keep your Linux system and apps updated.', '‌Restart your PC regularly.'] },
      { id: 2, title: 'The "No Internet" Mystery', tag: 'Wi-Fi & NetworkManager',
        card: 'Wi-Fi checks, ping and restarting the network service on Linux.',
        intro: 'The Wi-Fi icon is there, but nothing loads. A few quick checks and one or two commands fix most Linux connection problems.',
        video: { title: 'Watch: How to Fix Wi-Fi on Linux', embed: yt('n5ImjMm2QbA') },
        what: '"No internet" usually comes from one of three places: your device (Wi-Fi turned off, airplane mode, a glitch, or Network Manager turned off), your router (needs a restart or has loose cables), or your internet provider (an outage on their side). Figuring out which one it is is the key to fixing it fast.',
        steps: [
          ['Check the basics on your device', 'Open the system or network menu in the corner of your screen and make sure Wi-Fi or Wired is on and Airplane Mode is off.'],
          ['Test another device', 'If your phone also cannot get online, the problem is the router or provider, not your computer.'],
          ['Restart the router', 'Unplug the router (and modem) for 30 seconds, plug it back in, and wait about 2 minutes for the lights to settle.'],
          ['Reconnect to the network', 'Click the Wi-Fi icon to reconnect or re-enter your password. If the network icon is missing or Wi-Fi will not turn on, open Terminal and run sudo systemctl enable NetworkManager followed by sudo systemctl start NetworkManager.'],
          ['Check cables and lights', 'Make sure power and Ethernet cables are firmly plugged in. A red or blinking Internet light usually means a provider outage, so contact your ISP.']
        ],
        shortcuts: [['Super key', 'Open the app menu to search Settings or Terminal'], ['Ctrl + R ', 'Reload the current page in your browser'], ['Ctrl + Shift + R', ' Reload a page and refresh cached files'], ['Ctrl + S', 'Save your work often']],
        tips: ['Save your work every few minutes.', 'Close tabs and apps you are not using.', 'Keep your Linux system and apps updated.', 'Restart your PC regularly.'] },
      { id: 3, title: 'The Deleted File Panic', tag: 'Trash & backups',
        card: 'The Trash folder, safe deleting and what to do when a file is gone for good.',
        intro: 'You deleted the wrong file and your heart dropped. If it went to the Trash, getting it back takes seconds. If it did not, act quickly.',
        video: { title: 'Watch: How to Recover Deleted Files on Linux', embed: yt('tEWtRkrQYQg') },
        what: 'When you delete a file normally, Linux does not erase it right away. Instead, it moves the file into a holding folder called Trash, where it waits until you empty it. Each extra drive or memory card also has its own hidden Trash folder, though your file manager shows everything together in one place. Depending on the type of Linux you use (such as Ubuntu, Linux Mint, or Fedora), your personal files may be stored in one main folder area or in a separate personal storage section. If you empty the Trash, delete from a USB drive, or use Shift + Delete, the file skips the Trash and needs a backup or recovery tool to get back.',
        steps: [
          ['Try Undo right away', 'Press Ctrl + Z immediately after deleting in your file manager. This brings the file straight back.'],
          ['Open the Trash', ' Open your file manager and click Trash in the sidebar. Use the search icon or Ctrl + F if there are lots of files.'],
          ['Restore the file', 'Right-click the file and choose Restore from Trash or Restore. It returns directly to its original folder.'],
          ['Check backups, cloud, and the right drive', 'Check any backup drive or folder, plus the trash in Google Drive, OneDrive, or Nextcloud. If you use multiple drives or systems like Fedora or Ubuntu, make sure you check the specific drive or personal storage section where the file lived.'],
          ['Stop using the drive if it is gone for good', 'If the Trash was emptied or you used Shift + Delete, avoid saving new files so the space is not overwritten, then use a trusted recovery tool or ask a technician.']
        ],
        shortcuts: [['Ctrl + Z', 'Undo a recent delete or move'], ['Ctrl + F', 'Search inside your file manager or window'], ['Delete', 'Move a selected file to Trash'], ['Ctrl + S', 'Save your work often']],
        tips: ['Save your work every few minutes.', 'Close tabs and apps you are not using.', 'Restart your PC regularly.'] },
      { id: 4, title: 'Hardware & Display Troubles', tag: 'Black screens & display settings',
        card: 'Black screens, cables and display settings that fix most Linux screen problems.',
        intro: 'A black screen, "no signal" or a second monitor that is not detected. Most of these are a loose cable or a display setting, so start with the simple checks.',
        video: { title: 'Watch: How to Fix a Black Screen on Linux', embed: yt('Q5_nPH7-DEE') },
        what: 'If your screen stays black when starting or using Linux, it is usually a graphics driver glitch, a loose display cable, or a power issue. Sometimes Linux starts up in the background, but the graphics driver fails to draw the desktop. If nothing powers on at all, check your wall outlet, power strip, charger, and battery first.',
        steps: [
          ['Check power, cables, and wake the screen', 'Make sure the monitor power light is on, cables are firmly plugged in on both ends, and the monitor is set to the right input. Move your mouse or press any key to wake the screen. If frozen, hold the Power button for 10 to 15 seconds to force shut down. (Caution: Force powering off can lose unsaved work in open programs.'],
          ['Open the boot menu or try Safe Graphics', ' Restart and hold Shift as the PC starts to open the boot menu, then pick Advanced options and recovery mode if available. If you see a Safe Graphics option, choose it to load Linux with basic display drivers.'],
          ['Switch to a text screen or update graphics drivers', 'If only the desktop screen is black, press Ctrl + Alt + F2 (or F3) to open a text login screen (press Ctrl + Alt + F1 or F7 to switch back). From a terminal or desktop, update your graphics drivers or switch between Nvidia and open-source drivers, then reboot.'],
          ['Check display logs and test hardware', 'If the black screen continues, check display manager logs in Terminal for startup errors and confirm your PC meets your distros basic hardware specs. Try another cable, port, or monitor to rule out faulty parts.'],
          ['Protect your files during recovery', ' Read recovery menu prompts carefully before making system changes. (Caution: Reinstalling Linux or formatting a drive erases personal files—always back up important data first.'],
          ['Open the boot menu', 'Restart and hold Shift at startup to oppdate or swen the boot menu. Choose Advanced options / recovery, or Safe Graphics if it is available. Read each prompt carefully.'],
          ['Back up before big changes', 'Reinstalling Linux or formatting a drive erases personal files, so back up important data first.']
        ],
        shortcuts: [['Shift at startup', 'Open the boot menu for advanced or recovery options'], ['Ctrl + Alt + F2 (or F3)', ' Open a text console if the desktop screen stays black'], ['Ctrl + Alt + F1 (or F7)', ' Return to the visual desktop screen'], ['Super + P', 'Switch between mirror, extend, or single-screen display modes']],
        tips: ['Switch to open-source graphics drivers if proprietary Nvidia drivers cause a black screen.', 'Confirm your device meets your Linux versions minimum hardware requirements.', 'Keep PC and laptop vents clear of dust to prevent heat shutdowns.', '‌ Save your work often and back up files before changing drivers or running recovery repairs.'] }
    ],
    questions: [
      { m: 1, q: 'How do you close a single frozen or heavy program in Linux without restarting the whole computer?', o: ['Hold the physical Power button for 5 to 10 seconds', 'Open System Monitor from the app menu (or use Alt + F2 with xkill), select the frozen or heavy program, and end or kill its process', 'Unplug the monitor cable', 'Restart the Wi-Fi router'], a: 1, why: 'System Monitor (or xkill) lets you end only the stuck program, so you do not need to restart the whole computer.' },
      { m: 1, q: 'What should you try when the whole Linux screen is stuck before holding the physical Power button?', o: ['Press Ctrl + Alt + Delete or open the power menu from the top corner to choose Restart', 'Press Ctrl + F in the file manager', 'Delete files from the Trash folder', 'Turn off the monitor power strip'], a: 0, why: 'Try the power menu or Ctrl + Alt + Delete first. Holding the Power button should come last.' },
      { m: 1, q: 'When should you press and hold the physical Power button for about 5 to 10 seconds on Linux?', o: ['Whenever a single browser tab slows down', 'Before checking System Monitor', 'Only as a last resort when nothing on screen responds, because unsaved work will be lost', 'Every time you finish working'], a: 2, why: 'A hard shutdown cuts power and loses unsaved work, so use it only when nothing else responds.' },
      { m: 2, q: 'Which command quickly tests whether you can reach the internet?', o: ['ping google.com', 'ls', 'mkdir', 'cd'], a: 0, why: 'ping sends a small test message to a website and shows whether a reply comes back.' },
      { m: 2, q: 'Which command restarts the network service on many Linux systems?', o: ['sudo systemctl restart NetworkManager', 'sudo apt remove firefox', 'ls -l', 'clear'], a: 0, why: 'Restarting NetworkManager resets the network service and often fixes a stuck connection.' },
      { m: 2, q: 'Your laptop cannot see any Wi-Fi networks. What should you check first?', o: ['That Wi-Fi is on and Airplane mode is off', 'The wallpaper', 'The keyboard layout', 'The Trash'], a: 0, why: 'A switched-off Wi-Fi or Airplane mode is a very common cause and takes seconds to check.' },
      { m: 3, q: 'Where do files go when you delete them normally in a Linux file manager?', o: ['The Trash', 'They are erased instantly', 'The Downloads folder', 'The terminal'], a: 0, why: 'A normal delete moves the file to the Trash, where it waits until you empty it.' },
      { m: 3, q: 'Which terminal command removes a file immediately, without using the Trash?', o: ['rm', 'ls', 'cp', 'cat'], a: 0, why: 'rm deletes the file for good, so double-check before you run it.' },
      { m: 3, q: 'You deleted a file and it is not in the Trash. What should you do first?', o: ['Stop saving new files to that drive and check your backups', 'Keep installing apps', 'Format the disk', 'Delete more files'], a: 0, why: 'New files can overwrite the deleted data, so stop writing to the drive and check backups.' },
      { m: 4, q: 'What should you check first for Linux display or power issues, and how do you open the boot menu or try Safe Graphics at startup?', o: ['Check monitor power, cables, input, and wake the screen (or hold Power 10 to 15 seconds if frozen); to open the boot menu at startup, hold Shift and choose Advanced options/recovery or Safe Graphics if available', 'Press Ctrl + Alt + F2 at the BIOS screen to format the drive', 'Unplug the monitor and press Ctrl + S', 'Hold the Power button for 1 second while saving files'], a: 0, why: 'Start with the simple checks (power, cables, input), then hold Shift at startup to reach the boot menu and Advanced options or Safe Graphics.' },
      { m: 4, q: 'What can you do if only the Linux desktop screen is black or the black screen keeps happening?', o: ['Press Ctrl + Alt + F2 (or F3) for a text login screen (and Ctrl + Alt + F1 or F7 to switch back), update or switch graphics drivers (such as Nvidia vs. open-source) and reboot, or check display manager logs and hardware specs/cables', 'Delete all files in the home folder', 'Turn off the router', 'Unplug the keyboard before booting'], a: 0, why: 'A text console lets you fix the problem even when the desktop is black, and graphics drivers are a common cause.' },
      { m: 4, q: 'What caution must you remember before making system changes in recovery, reinstalling Linux, or formatting a drive?', o: ['Read recovery prompts carefully, and back up important data first because reinstalling Linux or formatting a drive erases personal files', 'Reinstalling Linux only changes the wallpaper', 'Formatting a drive saves a copy to the Trash folder', 'Recovery mode never affects personal files'], a: 0, why: 'Reinstalling or formatting can erase personal files, so read each prompt carefully and back up first.' }
    ]
  },

  /* ============================ WINDOWS ============================ */
  {
    id: 'windows', name: 'Windows', mono: 'WIN',
    blurb: 'The most widely used desktop OS, found in homes, schools and offices. Most Windows problems have a quick, safe fix once you know where to look.',
    issues: ['Freezes, crashes and blue screens', 'No internet or Wi-Fi problems', 'Accidentally deleted files', 'Black screens and loose cables'],
    lead: 'Windows is the system most of us use every day. These guides cover the emergencies you are most likely to meet, with fixes that are safe for beginners.',
    modules: [
      { id: 1, title: 'Sudden Crashouts & Freezes', tag: 'Task Manager & safe force-quitting',
        card: 'Task Manager, safe force-quitting and what to do when everything stops responding.',
        intro: 'Your screen stops moving, the mouse spins forever, or a program just vanishes. It feels scary, but most freezes come from one stubborn app using too much memory or CPU.',
        video: { title: 'Watch: How to Use Task Manager', embed: yt('eey6agMuV90') },
        what: 'A freeze happens when a program (or Windows itself) gets overloaded and stops responding. Common causes: too many apps or browser tabs open, low memory (RAM), an overheating computer, buggy or outdated software, or a pending update. A crash is when a program closes suddenly or Windows shows a blue screen.',
        steps: [
          ['Wait 30–60 seconds', 'Give it a moment. Heavy tasks can make the screen look stuck even though the computer is still working.'],
          ['Open Task Manager', 'Press Ctrl + Shift + Esc. If that does not open, press Ctrl + Alt + Delete and choose Task Manager.'],
          ['End the frozen app safely', 'On the Processes tab, find the app marked "Not responding" (or using very high CPU / Memory), select it, then click End task.'],
          ['Restart if the whole PC is stuck', 'Press Ctrl + Alt + Delete, click the power icon in the corner, then choose Restart.'],
          ['Hard shutdown as a last resort', 'Hold the power button for about 10 seconds only if nothing responds. Unsaved work will be lost, so use this last.']
        ],
        shortcuts: [['Ctrl + Shift + Esc', 'Open Task Manager'], ['Ctrl + Alt + Del', 'Security screen & restart options'], ['Alt + F4', 'Close the current window'], ['Ctrl + S', 'Save your work often']],
        tips: ['Save your work every few minutes.', 'Close tabs and apps you are not using.', 'Keep Windows and drivers updated.', 'Restart your PC regularly.'] },
      { id: 2, title: 'The "No Internet" Mystery', tag: 'Wi-Fi & router troubleshooting',
        card: 'Wi-Fi checks and router troubleshooting to get you back online fast.',
        intro: 'The Wi-Fi icon says connected, but nothing loads. Before calling anyone, a few simple checks fix most connection problems in under five minutes.',
        video: { title: 'Watch: How to Fix Your Wi-Fi and Router', embed: yt('oAgACevpnjE') },
        what: '"No internet" usually comes from one of three places: your device (Wi-Fi turned off, airplane mode, a glitch), your router (needs a restart or has loose cables), or your internet provider (an outage on their side). Figuring out which one it is is the key to fixing it fast.',
        steps: [
          ['Check the basics on your device', 'Make sure Wi-Fi is on and Airplane mode is off. Many laptops have an Fn + Wi-Fi key that is easy to press by accident.'],
          ['Test another device', 'If your phone also cannot get online, the problem is the router or provider, not your computer.'],
          ['Restart the router', 'Unplug the router (and modem) for 30 seconds, plug it back in and wait about 2 minutes for the lights to settle.'],
          ['Reconnect to the network', 'Click the Wi-Fi icon, choose your network, select Forget, then connect again and re-enter the password. You can also run the Windows Network troubleshooter.'],
          ['Check cables and lights', 'Make sure power and Ethernet cables are firmly plugged in. A red or blinking Internet light usually means a provider outage, so contact your ISP.']
        ],
        shortcuts: [['Win + A', 'Quick settings (Wi-Fi, Airplane)'], ['Win + I', 'Open Windows Settings'], ['ping google.com', 'Test your connection (Command Prompt)'], ['Fn + Wi-Fi key', 'Toggle Wi-Fi on laptops']],
        tips: ['Keep the router in an open, central spot.', 'Restart the router once a month.', 'Store your Wi-Fi password somewhere safe.', 'Know your ISP support number.'] },
      { id: 3, title: 'The Deleted File Panic', tag: 'Recycle Bin & undo shortcuts',
        card: 'Recycle Bin rescues and undo shortcuts that bring lost files back.',
        intro: 'You hit Delete and your heart dropped. Take a breath: in most cases deleted files are still recoverable, especially if you act quickly.',
        video: { title: 'Watch: How to Recover Deleted Files', embed: yt('eWBYiwuiZCs') },
        what: 'When you delete a file normally, Windows moves it to the Recycle Bin instead of erasing it. It stays there until you empty the bin. Files deleted with Shift + Delete, from a USB drive or from a network drive skip the bin and need other recovery options.',
        steps: [
          ['Try Undo right away', 'Press Ctrl + Z immediately after deleting. In File Explorer this brings the file straight back.'],
          ['Open the Recycle Bin', 'Double-click the Recycle Bin icon on your desktop. Use the search box if there are lots of files.'],
          ['Restore the file', 'Right-click the file and choose Restore. It returns to its original folder.'],
          ['Check previous versions & cloud', 'Right-click the folder, choose Properties, then Previous Versions. Also check the trash in OneDrive or Google Drive.'],
          ['Stop using the drive if it is gone for good', 'If the bin was emptied, avoid saving new files and try a trusted file-recovery tool or ask a technician.']
        ],
        shortcuts: [['Ctrl + Z', 'Undo the last action'], ['Ctrl + Y', 'Redo the action'], ['Delete', 'Send file to Recycle Bin'], ['Shift + Delete', 'Permanent delete (careful!)']],
        tips: ['Back up important files regularly.', 'Think twice before emptying the Recycle Bin.', 'Turn on File History or cloud sync.'] },
      { id: 4, title: 'Hardware & Display Troubles', tag: 'Black screens & loose cables',
        card: 'Black screens, loose cables and quick physical checks that fix most problems.',
        intro: 'A black screen, "no signal" or a mouse that will not respond. Many "broken computer" problems are really just a loose cable, so start with the physical checks.',
        video: { title: 'Watch: How to Fix a Black Screen', embed: yt('LqA5l7fZ2s0') },
        what: 'If the screen is black but the computer is on (fans spinning, lights on), the problem is usually the display connection, the monitor itself or the wrong output selected. If nothing turns on at all, check power first: the outlet, power strip, charger and battery.',
        steps: [
          ['Check power everywhere', 'Is the monitor power light on? Is the PC plugged in and the power strip switched on? On a laptop, plug in the charger.'],
          ['Reseat the cables', 'Unplug and firmly re-plug the HDMI / DisplayPort / VGA cable on both ends. Also check the USB cables for keyboard and mouse.'],
          ['Wake or switch the display', 'Press any key, then try Win + P to change the display mode, or Win + Ctrl + Shift + B to restart the graphics driver.'],
          ['Swap and test', 'Try a different cable, port or monitor. This quickly shows which part is faulty.'],
          ['Do a hold-power reset', 'For a laptop that will not turn on: unplug the charger, hold the power button for 15 seconds, then plug in and try again.']
        ],
        shortcuts: [['Win + P', 'Switch display / projector mode'], ['Win + Ctrl + Shift + B', 'Restart the graphics driver'], ['Win + D', 'Show the desktop'], ['Fn + Brightness', 'Raise brightness if it looks black']],
        tips: ['Never force a cable. Check the shape of the port.', 'Shut down before touching internal parts.', 'Keep vents clean to prevent overheating.'] }
    ],
    // a = index of the correct option in o
    questions: [
      { m: 1, q: 'Which shortcut opens Task Manager directly?', o: ['Ctrl + C', 'Ctrl + Shift + Esc', 'Alt + Tab', 'Win + L'], a: 1, why: 'Ctrl + Shift + Esc opens Task Manager straight away, without the extra security screen.' },
      { m: 1, q: 'One app is frozen but the rest of your PC works. What should you try first?', o: ['Hold the power button right away', 'Unplug the computer', 'Wait a minute, then End task in Task Manager', 'Reinstall Windows'], a: 2, why: 'Give it a minute, then close only the stuck app with End task. It is safer than forcing the whole PC off.' },
      { m: 1, q: 'When is a hard shutdown (holding the power button) appropriate?', o: ['Every time something is slow', 'Only as a last resort when nothing responds', 'Before opening any app', 'Whenever you finish work'], a: 1, why: 'Holding the power button cuts power and unsaved work is lost, so use it only when nothing else responds.' },
      { m: 2, q: 'Your laptop says "No internet". What is a good first check?', o: ['Reinstall Windows', 'Make sure Wi-Fi is on and Airplane mode is off', 'Delete your browser history', 'Buy a new laptop'], a: 1, why: 'A switched-off Wi-Fi or Airplane mode is a very common cause, and it takes seconds to check.' },
      { m: 2, q: 'What is the right way to restart a router?', o: ['Unplug it for about 30 seconds, plug it back in and wait', 'Press the reset button many times', 'Hit it gently', 'Cover its vents'], a: 0, why: 'Unplugging for about 30 seconds lets the router fully reset. Wait around 2 minutes for the lights to settle.' },
      { m: 2, q: 'All devices are offline and the router\'s Internet light is red. What is the likely cause?', o: ['An outdated keyboard', 'A problem with the internet provider (ISP)', 'Low screen brightness', 'A full Recycle Bin'], a: 1, why: 'If every device is offline and the Internet light is red, the problem is likely on the provider\'s side. Contact your ISP.' },
      { m: 3, q: 'You just deleted a file by accident. What is the fastest undo?', o: ['Ctrl + Z', 'Ctrl + P', 'Ctrl + N', 'Alt + F4'], a: 0, why: 'Ctrl + Z undoes the last action, including a delete, if you press it right away.' },
      { m: 3, q: 'Where do normally deleted files go on Windows?', o: ['They vanish forever', 'The Recycle Bin', 'The Desktop', 'Task Manager'], a: 1, why: 'Normal deletes go to the Recycle Bin, where files wait until the bin is emptied.' },
      { m: 3, q: 'Which action skips the Recycle Bin?', o: ['Pressing Delete', 'Right-click, then Delete', 'Pressing Shift + Delete', 'Dragging a file to the Desktop'], a: 2, why: 'Shift + Delete removes the file straight away without sending it to the Recycle Bin.' },
      { m: 4, q: 'The screen is black but the PC fans are spinning. What should you check first?', o: ['Monitor power and cable connections', 'Reinstall Windows', 'Buy a new PC', 'Change the wallpaper'], a: 0, why: 'A black screen with spinning fans usually means a power or cable problem at the monitor, so check those first.' },
      { m: 4, q: 'Which shortcut switches the display output (projector / second screen)?', o: ['Win + P', 'Win + L', 'Ctrl + P', 'Win + D'], a: 0, why: 'Win + P opens the display menu where you can duplicate, extend or switch screens.' },
      { m: 4, q: 'Your USB mouse suddenly stops working. What is a sensible first step?', o: ['Format the drive', 'Replug it or try a different USB port', 'Replace the motherboard', 'Update the BIOS'], a: 1, why: 'Replugging or trying another USB port fixes many "dead" mice and keyboards.' }
    ]
  },

  /* ============================ macOS ============================ */
  {
    id: 'macos', name: 'macOS', mono: 'MAC',
    blurb: 'Apple\'s smooth, easy-to-use system for MacBook, iMac and Mac mini. It rarely breaks, but when it does, a few built-in tools get you back on track.',
    issues: ['The spinning beachball and frozen apps', 'Wi-Fi connected but no internet', 'Trash mix-ups and lost files', 'External displays not detected'],
    lead: 'macOS is designed to be simple, and it comes with great built-in rescue tools. These guides show you where they are and how to use them.',
    modules: [
      { id: 1, title: 'Frozen Screen', tag: 'Force Quit & Activity Monitor',
        card: 'Force Quit, Activity Monitor and what to do when the beachball will not go away.',
        intro: 'The colorful spinning wheel appears and the app will not respond. It looks serious, but usually one app is stuck and you can close it safely.',
        video: { title: 'Watch: How to Force Quit on a Mac', embed: yt('RegkBy_U2n8') },
        what: 'A freeze happens when an app or macOS gets overloaded and stops responding, often showing a spinning rainbow wheel. Common causes include too many open apps or tabs, low memory, overheating, or outdated software. A crash happens when an app closes suddenly or the computer restarts on its own.',
        steps: [
          ['Wait 30 to 60 seconds', 'Give your Mac a moment before clicking anything else. Busy tasks can make the screen look stuck even when the computer is still working.'],
          ['Open the Force Quit window', 'Press Command + Option + Esc at the same time, or click the Apple icon in the top-left corner and pick Force Quit....'],
          ['Close the frozen app', 'Click the app that says (Not Responding) in red, then click Force Quit and confirm.'],
          ['Restart if the whole Mac is still stuck', 'If the mouse will not move or nothing on screen responds, hold Control + Command and press the Power button (or Touch ID) to restart right away.'],
          ['Hold the power button as a last resort', 'Hold the Power button or Touch ID for about 10 seconds only if nothing else works. Unsaved work will be lost, so do this last.']
        ],
        shortcuts: [['Command + Option + Esc', 'Open Force Quit to close a frozen app'], ['Command + Space', 'Open Spotlight to check Activity Monitor or System Settings'], ['Control + Command + Power', 'Restart your Mac when the whole screen is stuck'], ['Command + S', 'Save your work often to prevent data loss']],
        tips: ['Save your work every few minutes.', 'Close tabs and apps you are not using.', 'Keep macOS and your apps updated.', 'Restart your Mac regularly.'] },
      { id: 2, title: 'The "No Internet" Mystery', tag: 'Wi-Fi & router troubleshooting',
        card: 'Wi-Fi checks and router troubleshooting to get your Mac back online fast.',
        intro: 'Your Mac says it is connected to Wi-Fi, but pages will not load. A few simple steps fix most connection problems quickly.',
        video: { title: 'Watch: How to Fix Wi-Fi on a Mac', embed: yt('-veBN063FE4') },
        what: '"No internet" usually comes from one of three places: your device (Wi-Fi turned off, a glitch), your router (needs a restart or has loose cables), or your internet provider (an outage on their side). Figuring out which one it is is the key to fixing it fast.',
        steps: [
          ['Check the basics on your device', 'Click the Wi-Fi icon or Control Center in the top-right corner and make sure Wi-Fi is turned on. If a VPN is turned on, switch it off briefly to test.'],
          ['Test another device', 'If your phone also cannot get online, the problem is the router or provider, not your Mac.'],
          ['Restart the router', 'Unplug the router (and modem) for 30 seconds, plug it back in, and wait about 2 minutes for the lights to settle.'],
          ['Reconnect to the network', 'Open System Settings, go to Wi-Fi, click Details next to your network, choose Forget This Network, then reconnect and enter your password.'],
          ['Check cables and lights', 'Make sure power and Ethernet or adapter cables are firmly plugged in. A red or blinking Internet light usually means a provider outage, so contact your ISP.']
        ],
        shortcuts: [['Command + Space', 'Open Spotlight to search System Settings or Terminal'], ['Command + R', 'Reload the current page in your browser'], ['Command + Shift + R', 'Reload a page and refresh cached files'], ['Command + S', 'Save your work often before closing tabs or apps']],
        tips: ['Save your work every few minutes.', 'Close tabs and apps you are not using.', 'Keep macOS and your apps updated.', 'Restart your Mac regularly.'] },
      { id: 3, title: 'Accidental File Delete', tag: 'Trash & Time Machine',
        card: 'The Trash, Put Back and Time Machine for bringing lost files home.',
        intro: 'You dragged the wrong file to the Trash, or emptied it too soon. Do not panic: on a Mac there are several ways to get files back.',
        video: { title: 'Watch: How to Recover Deleted Files on a Mac', embed: yt('PmD6tcowDTc') },
        what: 'When you delete a file normally, macOS moves it to the Trash instead of erasing it right away. It stays there until you empty the Trash. Files deleted immediately with Option + Command + Delete, from a USB drive, or from a network drive skip the Trash and need other recovery options.',
        steps: [
          ['Try Undo right away', 'Press Command + Z immediately after deleting or moving a file in Finder to bring it straight back.'],
          ['Open the Trash', 'Click the Trash icon in the Dock. Use the search bar in the top-right corner if there are lots of files.'],
          ['Restore the file', 'Right-click or Control-click the file and choose Put Back. It returns to its original folder.'],
          ['Check backups and cloud', 'Check Time Machine if you use it, and also check the trash in iCloud Drive, OneDrive, or Google Drive.'],
          ['Stop using the drive if it is gone for good', 'If the Trash was emptied, avoid saving new files to that drive and try a trusted file-recovery tool or ask a technician.']
        ],
        shortcuts: [['Command + Z', 'Undo a recent delete or move right away'], ['Command + Space', 'Open Spotlight to search for missing files'], ['Command + Delete', 'Move a selected item to the Trash'], ['Command + S', 'Save your work often']],
        tips: ['Save your work every few minutes.', 'Close tabs and apps you are not using.', 'Keep macOS and your apps updated.', 'Restart your Mac regularly.'] },
      { id: 4, title: 'Hardware & Display Troubles', tag: 'Black screens & external displays',
        card: 'Black screens, external monitors and quick physical checks for your Mac.',
        intro: 'A black screen, an external monitor that will not show anything, or a Mac that will not turn on. Start with the simple physical checks first.',
        video: { title: 'Watch: How to Fix a Black Screen on a Mac', embed: yt('6OACm0vq8aI') },
        what: 'If your Mac powers on (sound, keyboard lights, or fans) but the screen stays black, it is usually dimmed brightness, a software glitch, display settings, or a connected accessory. If nothing turns on, check the wall outlet, power strip, charger, and battery first.',
        steps: [
          ['Check brightness and unplug accessories', 'Press Brightness Up in case the display is dimmed. Unplug extra USB drives, cables, or dongles, leaving only the charger, then restart.'],
          ['Wake the screen or force a restart', 'Press Control + Power for the shutdown menu, or Option + Command + Power to sleep and Power to wake. If frozen, hold Power for 10 seconds, wait 15 to 30 seconds, and turn it back on.'],
          ['Check power and external displays', 'Confirm your charger, power strip, and outlet work. For an external monitor, check power, select the right input, and reseat or swap cables and ports.'],
          ['Reset SMC or NVRAM / PRAM', 'On Intel Macs, shut down, hold Shift + Control + Option + Power on the left side for 10 seconds, release, and power on. To reset NVRAM or PRAM, turn on the Mac and immediately hold Command + Option + P + R for about 20 seconds.'],
          ['Try Safe Mode or macOS Recovery', 'Start in Safe Mode to rule out app or system glitches: on newer Macs (Apple silicon), hold the Power button until startup options appear, select your drive, hold Shift, and click Continue in Safe Mode; on older Macs (Intel), hold Shift right after pressing Power until you see the login screen. If the screen still stays black, open macOS Recovery (hold Power and choose Options on newer Macs, or hold Command + R at startup on older Macs) to repair or reinstall macOS. Caution: Reinstalling macOS normally keeps your personal files, but erasing a drive in Disk Utility permanently deletes everything on it, so back up important files first if possible.']
        ],
        shortcuts: [['Brightness Up key', 'Raise screen brightness if dimmed'], ['Option + Command + Power', 'Sleep the Mac before waking the screen'], ['Control + Power', 'Open the restart, sleep, and shut down menu'], ['Command + R (Intel) or Power held at startup (Apple silicon)', 'Open startup options or macOS Recovery']],
        tips: ['Unplug extra accessories and dongles first so a bad peripheral does not block display output.', 'Test a known-good charger and outlet before assuming the Mac will not power on.', 'Avoid forcing power off while saving files unless the Mac is frozen.', 'Keep regular backups in case you use macOS Recovery or Disk Utility.'] }
    ],
    questions: [
      { m: 1, q: 'What should you do first when your Mac screen looks stuck, and why?', o: ['Wait 30 to 60 seconds because busy tasks can temporarily pause the screen while the Mac still works', 'Hold the Power button for 10 seconds to force a restart', 'Press Command + S to force-save all open apps', 'Unplug the charger right away'], a: 0, why: 'Busy tasks can make the screen look stuck while the Mac is still working, so give it 30 to 60 seconds first.' },
      { m: 1, q: 'How do you close a single frozen app on a Mac?', o: ['Press Control + Command + Power to restart the whole Mac', 'Open Force Quit with Command + Option + Esc (or the Apple menu), select the app marked (Not Responding) in red, and click Force Quit', 'Open Spotlight with Command + Space and restart', 'Hold the Power button for about 10 seconds'], a: 1, why: 'Force Quit closes only the stuck app, so the rest of your Mac keeps running.' },
      { m: 1, q: 'When should you hold the Power button or Touch ID for about 10 seconds on a frozen Mac?', o: ['As the very first step whenever an app freezes', 'Instead of waiting 30 to 60 seconds', 'Only as a last resort when nothing else works, knowing unsaved work will be lost', 'To open the Force Quit window'], a: 2, why: 'Holding the Power button cuts power and loses unsaved work, so use it only as a last resort.' },
      { m: 2, q: 'Your Mac says it is connected but pages will not load. What is a good first step?', o: ['Turn Wi-Fi off and on, then test another device', 'Erase the Mac', 'Delete Safari', 'Replace the keyboard'], a: 0, why: 'Toggling Wi-Fi is quick, and testing another device shows whether the problem is the Mac or the router.' },
      { m: 2, q: 'How do you make your Mac forget a Wi-Fi network so you can rejoin it fresh?', o: ['Wi-Fi settings, choose the network, then Forget This Network', 'Empty the Trash', 'Quit Finder', 'Press Cmd + Q'], a: 0, why: 'Forgetting the network removes the saved settings, so you can reconnect and enter the password again.' },
      { m: 2, q: 'Your Mac cannot get online, and your phone cannot either. What does that suggest?', o: ['The problem is the router or internet provider, not your Mac', 'Your Mac needs macOS reinstalled', 'Your keyboard is broken', 'The Trash is full'], a: 0, why: 'If another device is offline too, the problem is the router or provider, so restart the router or contact your ISP.' },
      { m: 3, q: 'Which shortcut undoes your last action, such as moving a file to the Trash?', o: ['Cmd + Z', 'Cmd + Q', 'Cmd + N', 'Cmd + W'], a: 0, why: 'Cmd + Z undoes the last action in Finder if you press it right away.' },
      { m: 3, q: 'How do you return a file from the Trash to its original folder?', o: ['Right-click it and choose Put Back', 'Rename it', 'Drag it onto the Dock', 'Restart the Mac'], a: 0, why: 'Put Back sends the file straight to the folder it came from.' },
      { m: 3, q: 'Which built-in feature can restore older versions of your files from a backup?', o: ['Time Machine', 'Mission Control', 'Siri', 'Launchpad'], a: 0, why: 'Time Machine keeps backups so you can go back to a date when the file still existed.' },
      { m: 4, q: 'What should you do first if your Mac turns on (sound, keyboard lights, or fans) but the screen is black, and how do you force shut down if it stays stuck?', o: ['Erase the disk in Disk Utility right away', 'Press Brightness Up and unplug extra accessories or dongles (keeping only the charger) then restart; if stuck, try Control + Power or Option + Command + Power, or hold Power for ~10 seconds, wait 15 to 30 seconds, and turn back on', 'Reinstall macOS before checking brightness or cables', 'Unplug the wall outlet and leave it off for a day'], a: 1, why: 'Check brightness and accessories first. Only force a shutdown if the Mac stays stuck.' },
      { m: 4, q: 'How do you reset NVRAM or PRAM on a Mac?', o: ['Hold Shift + Control + Option + Power while the Mac is running', 'Turn on the Mac and immediately hold Command + Option + P + R for about 20 seconds before releasing', 'Press Command + Z at the login screen', 'Unplug the external monitor cable for 2 minutes'], a: 1, why: 'Hold Command + Option + P + R right after turning the Mac on, for about 20 seconds, then release.' },
      { m: 4, q: 'What file-safety rule should you remember when using macOS Recovery and Disk Utility?', o: ['Reinstalling macOS over your existing system normally keeps personal files intact, but erasing a disk in Disk Utility permanently deletes files on that drive, so back up important files first', 'Safe Mode permanently erases all personal files', 'Disk Utility only adjusts screen brightness', 'Reinstalling macOS always deletes external USB drives'], a: 0, why: 'Reinstalling normally keeps your files, but erasing a disk deletes everything on it, so back up first.' }
    ]
  }
];

/* ---------- helpers ---------- */
const app = document.getElementById('app');
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const pad2 = n => String(n).padStart(2, '0');
const LETTERS = ['A', 'B', 'C', 'D'];
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
const osById = id => OS_LIST.find(o => o.id === id);
const moduleOf = (os, id) => os && os.modules.find(m => m.id === id);

/* ---------- quiz state ---------- */
let quiz = null;    // the quiz currently being taken
let result = null;  // the last finished quiz

function buildQuiz(kind, os, id) {
  let pool;
  if (kind === 'module') {
    pool = os.questions.filter(q => q.m === id).map(q => ({ ...q, os: os.id }));
  } else {
    // Random quiz: 2 random questions from each operating system (6 total), in random order
    pool = OS_LIST.flatMap(o => shuffle(o.questions).slice(0, 2).map(q => ({ ...q, os: o.id })));
  }
  const items = shuffle(pool).map(q => {
    const order = shuffle(q.o.map((_, i) => i));
    return { os: q.os, m: q.m, q: q.q, opts: order.map(i => q.o[i]), correct: order.indexOf(q.a), why: q.why, picked: null };
  });
  return { kind, osId: os ? os.id : null, id, items };
}

/* ---------- views ---------- */
function renderHome() {
  document.title = 'TechResQ | Computer Emergency Rescue Hub';
  app.innerHTML = `
    <section class="hero">
      <div class="hero-art" aria-hidden="true">
        <div class="stars"></div><div class="glow glow-a"></div><div class="glow glow-b"></div>
        <svg class="rocks left" viewBox="0 0 430 240" preserveAspectRatio="none"><polygon points="0,240 0,50 70,0 120,100 180,20 260,140 330,100 430,240"/></svg>
        <svg class="rocks right" viewBox="0 0 430 240" preserveAspectRatio="none"><polygon points="0,240 0,50 70,0 120,100 180,20 260,140 330,100 430,240"/></svg>
        <div class="grid"></div>
      </div>
      <div class="hero-photo" aria-hidden="true"></div>
      <div class="hero-shade" aria-hidden="true"></div>
      <div class="hero-inner">
        <div class="mascot" aria-hidden="true"><div class="orb"></div><span class="eye l"></span><span class="eye r"></span></div>
        <p class="eyebrow">THE COMPUTER EMERGENCY RESCUE HUB</p>
        <h1>Computer in Crisis? Don't Panic.</h1>
        <p class="intro">Quick, friendly rescue guides for the most common computer emergencies on Linux, Windows and macOS. Learn the fix in minutes, then test your tech-survival skills with a gamified quiz.</p>
        <div class="hero-actions">
          <a class="btn" href="#/quick">Start Quick Quiz</a>
          <a class="btn btn-ghost" href="#/os" id="browse">What OS?</a>
        </div>
        <p class="hint">Randomized quiz covering Linux, Windows and macOS. Takes about 3 minutes.</p>
      </div>
    </section>
    <section class="section" id="os-intro" aria-labelledby="os-h">
      <div class="container">
        <div class="sec-head">
          <h2 id="os-h">Pick Your Operating System</h2>
          <p>Every system has its own quirks. Read a quick intro to each one, then tap Learn More to open its 4 rescue modules.</p>
        </div>
        <div class="os-cards">
          ${OS_LIST.map(o => `
            <article class="os-card">
              <div class="card-top"><span class="num" aria-hidden="true">${esc(o.mono)}</span><span class="tag">OPERATING SYSTEM</span></div>
              <h3>${esc(o.name)}</h3>
              <p>${esc(o.blurb)}</p>
              <div class="issues">
                <p class="issues-title">COMMON ISSUES</p>
                <ul>${o.issues.map(i => `<li>${esc(i)}</li>`).join('')}</ul>
              </div>
              <a class="btn btn-small btn-outline" href="#/os/${o.id}" aria-label="Learn more about ${esc(o.name)}">Learn more</a>
            </article>`).join('')}
        </div>
      </div>
    </section>`;
}

function renderOSList() {
  document.title = 'Operating Systems | TechResQ';
  app.innerHTML = `
    <header class="banner">
      <div class="container">
        <a class="back" href="#/">&larr; Back to home</a>
        <p class="kicker" style="font-size:12.5px;font-weight:700;letter-spacing:.14em;color:var(--peach)">STEP 1 &middot; CHOOSE YOUR SYSTEM</p>
        <h1>Which operating system do you use?</h1>
        <p class="lead">Pick one to see its rescue modules. Each operating system has 4 guides, and each guide ends with a short quiz.</p>
      </div>
    </header>
    <section class="section os-page">
      <div class="container">
        <div class="os-cards">
          ${OS_LIST.map(o => `
            <a class="card os-link" href="#/os/${o.id}">
              <div class="card-top"><span class="num" aria-hidden="true">${esc(o.mono)}</span><span class="tag">4 MODULES</span></div>
              <h3>${esc(o.name)}</h3>
              <p>${esc(o.blurb)}</p>
              <span class="go">Open ${esc(o.name)}</span>
            </a>`).join('')}
        </div>
      </div>
    </section>`;
}

function renderOS(osId) {
  const os = osById(osId);
  if (!os) return renderOSList();
  document.title = `${os.name} Rescue Modules | TechResQ`;
  app.innerHTML = `
    <header class="banner">
      <div class="container">
        <a class="back" href="#/os">&larr; Back to operating systems</a>
        <div class="title-row">
          <span class="num" aria-hidden="true">${esc(os.mono)}</span>
          <div>
            <p class="kicker">OPERATING SYSTEM &middot; 4 MODULES</p>
            <h1>${esc(os.name)}</h1>
          </div>
        </div>
        <p class="lead">${esc(os.lead)}</p>
      </div>
    </header>
    <section class="section os-page" id="modules" aria-labelledby="mod-h">
      <div class="container">
        <div class="sec-head">
          <h2 id="mod-h">Pick Your Emergency</h2>
          <p>Choose a card to jump straight into a ${esc(os.name)} rescue guide. Each module ends with a short quiz so you can lock in what you learned.</p>
        </div>
        <div class="cards">
          ${os.modules.map(m => `
            <a class="card" href="#/module/${os.id}/${m.id}">
              <div class="card-top"><span class="num" aria-hidden="true">${pad2(m.id)}</span><span class="tag">MODULE ${pad2(m.id)}</span></div>
              <h3>${esc(m.title)}</h3>
              <p>${esc(m.card)}</p>
              <span class="go">Start rescue</span>
            </a>`).join('')}
        </div>
      </div>
    </section>`;
}

function renderModule(osId, id) {
  const os = osById(osId), m = moduleOf(os, id);
  if (!m) return renderOS(osId);
  document.title = `${m.title} (${os.name}) | TechResQ`;
  app.innerHTML = `
    <header class="banner">
      <div class="container">
        <a class="back" href="#/os/${os.id}">&larr; Back to ${esc(os.name)} modules</a>
        <div class="title-row">
          <span class="num" aria-hidden="true">${pad2(m.id)}</span>
          <div>
            <p class="kicker">${esc(os.name.toUpperCase())} &middot; MODULE ${pad2(m.id)} &middot; ${esc(m.tag.toUpperCase())}</p>
            <h1>${esc(m.title)}</h1>
          </div>
        </div>
        <p class="lead">${esc(m.intro)}</p>
      </div>
    </header>
    <div class="container">
      <div class="module-body">
        <div class="stack">
          <section class="panel"><h2>WHAT'S HAPPENING?</h2><p>${esc(m.what)}</p></section>
          ${m.video ? `
          <section class="panel video-panel">
            <h3 class="video-title">${esc(m.video.title)}</h3>
            <div class="video-frame">
              ${m.video.embed || '<p class="video-empty">Video coming soon</p>'}
            </div>
          </section>` : ''}
          <h2>Rescue steps</h2>
          <ol class="steps">
            ${m.steps.map((s, i) => `<li class="step"><span class="n" aria-hidden="true">${i + 1}</span><div><h3>${esc(s[0])}</h3><p>${esc(s[1])}</p></div></li>`).join('')}
          </ol>
        </div>
        <aside class="stack" aria-label="Shortcuts and tips">
          <section class="panel hl"><h2>SHORTCUTS &amp; QUICK TOOLS</h2>
            <dl class="keys">${m.shortcuts.map(s => `<div><dt>${esc(s[0])}</dt><dd>${esc(s[1])}</dd></div>`).join('')}</dl>
          </section>
          <section class="panel"><h2>PRO TIPS</h2>
            <ul class="tips">${m.tips.map(t => `<li>${esc(t)}</li>`).join('')}</ul>
          </section>
        </aside>
      </div>
      <section class="cta-band">
        <h2>Ready to test your knowledge?</h2>
        <p>Take a short 3-question quiz on this module and see if you can rescue the day.</p>
        <a class="btn btn-light" href="#/quiz/${os.id}/${m.id}">Take the Module Quiz</a>
      </section>
    </div>`;
}

function renderQuiz(kind, osId, id) {
  const os = kind === 'module' ? osById(osId) : null;
  const mod = os ? moduleOf(os, id) : null;
  if (kind === 'module' && !mod) return renderHome();
  quiz = buildQuiz(kind, os, id);
  const title = mod ? `${mod.title} Quiz` : 'Quick Quiz Challenge';
  document.title = `${title} | TechResQ`;
  const n = quiz.items.length;
  const backHref = mod ? `#/module/${os.id}/${mod.id}` : '#/';
  app.innerHTML = `
    <header class="banner">
      <div class="container">
        <a class="back" href="${backHref}">&larr; ${mod ? 'Back to module' : 'Back to home'}</a>
        <p class="kicker" style="font-size:12.5px;font-weight:700;letter-spacing:.14em;color:var(--peach)">${mod ? esc(os.name.toUpperCase()) + ' &middot; MODULE ' + pad2(mod.id) + ' QUIZ' : 'RANDOMIZED CHALLENGE &middot; LINUX, WINDOWS &amp; MACOS'}</p>
        <h1>${esc(title)}</h1>
        <p class="quiz-meta">${n} questions. Pick one answer for each. No timer, no pressure.</p>
        <div class="progress"><div class="bar"><i id="barfill"></i></div><span id="progtext" aria-live="polite">0 of ${n} answered</span></div>
      </div>
    </header>
    <form class="quiz" id="quizform" novalidate>
      ${quiz.items.map((it, qi) => `
        <div class="qcard" id="q${qi}">
          <fieldset>
            <legend><span class="qnum">QUESTION ${qi + 1} OF ${n}${kind === 'quick' ? ' &middot; ' + esc(osById(it.os).name.toUpperCase()) : ''}</span><span class="qtext">${esc(it.q)}</span></legend>
            <div class="opts">
              ${it.opts.map((o, oi) => `
                <label class="opt"><input type="radio" name="q${qi}" value="${oi}"><span class="ltr" aria-hidden="true">${LETTERS[oi]}</span><span>${esc(o)}</span></label>`).join('')}
            </div>
          </fieldset>
        </div>`).join('')}
      <p class="notice" id="notice" role="alert"></p>
      <div class="quiz-actions">
        <button class="btn" type="submit">Submit Answers</button>
        <a class="btn btn-ghost" href="${backHref}">${mod ? 'Review Module' : 'Back to Home'}</a>
      </div>
    </form>`;

  const form = document.getElementById('quizform');
  const fill = document.getElementById('barfill');
  const prog = document.getElementById('progtext');
  const notice = document.getElementById('notice');

  form.addEventListener('change', e => {
    const input = e.target;
    if (input.type !== 'radio') return;
    const qi = Number(input.name.slice(1));
    quiz.items[qi].picked = Number(input.value);
    form.querySelectorAll(`input[name="q${qi}"]`).forEach(r => r.closest('.opt').classList.toggle('on', r.checked));
    document.getElementById('q' + qi).classList.remove('missing');
    const done = quiz.items.filter(x => x.picked !== null).length;
    fill.style.width = (done / n * 100) + '%';
    prog.textContent = `${done} of ${n} answered`;
    if (done === n) notice.textContent = '';
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const firstMissing = quiz.items.findIndex(x => x.picked === null);
    if (firstMissing !== -1) {
      quiz.items.forEach((x, i) => document.getElementById('q' + i).classList.toggle('missing', x.picked === null));
      const left = quiz.items.filter(x => x.picked === null).length;
      notice.textContent = `Answer ${left === 1 ? 'the remaining question' : 'all ' + left + ' remaining questions'} before submitting.`;
      const card = document.getElementById('q' + firstMissing);
      card.scrollIntoView({ block: 'center' });
      card.querySelector('input').focus({ preventScroll: true });
      return;
    }
    result = { kind: quiz.kind, osId: quiz.osId, id: quiz.id, items: quiz.items, score: quiz.items.filter(x => x.picked === x.correct).length };
    location.hash = '#/results';
  });
}

function renderResults() {
  if (!result) { location.replace('#/'); return; }
  document.title = 'Quiz Results | TechResQ';
  const { items, score, kind, osId, id } = result;
  const total = items.length, ratio = score / total;
  const headline = ratio === 1 ? 'Perfect rescue!' : ratio >= 0.6 ? 'Nice work, Rescuer!' : 'Good start, keep practicing';
  const sub = ratio === 1 ? 'You got every answer right. Your computer is in safe hands.'
    : ratio >= 0.6 ? 'You know the basics. Check the answers below to lock in the rest.'
    : 'No worries. Review the module, then try again. The questions will be shuffled.';
  // unique (operating system + module) pairs the person got wrong
  const missed = [];
  items.filter(x => x.picked !== x.correct).forEach(x => {
    if (!missed.some(p => p.os === x.os && p.m === x.m)) missed.push({ os: x.os, m: x.m });
  });
  const retryHref = kind === 'module' ? `#/quiz/${osId}/${id}` : '#/quick';
  app.innerHTML = `
    <section class="results">
      <div class="mascot" aria-hidden="true"><div class="orb"></div><span class="eye l"></span><span class="eye r"></span></div>
      <p class="eyebrow">QUIZ COMPLETE</p>
      <h1>${headline}</h1>
      <div class="score"><span>YOUR SCORE</span><b>${score} / ${total}</b></div>
      <p class="sub">${sub}</p>
      <div class="hero-actions">
        <a class="btn" href="#/">Back to Home</a>
        <a class="btn btn-ghost" href="${retryHref}">${kind === 'module' ? 'Retake Quiz' : 'Try Another Random Quiz'}</a>
      </div>
      <div class="review">
        <h2>Your answers</h2>
        ${items.map((it, i) => {
          const ok = it.picked === it.correct;
          return `<article class="ritem">
            <p class="q">${i + 1}. ${esc(it.q)}</p>
            <p class="you">Your answer: ${esc(it.opts[it.picked])}<span class="badge ${ok ? 'ok' : 'no'}">${ok ? 'Correct' : 'Not quite'}</span></p>
            ${ok ? '' : `<p class="you">Correct answer: ${esc(it.opts[it.correct])}</p>`}
            <p class="why">${esc(it.why)}</p>
          </article>`;
        }).join('')}
        ${missed.length ? `<p class="again">Want a refresher? ${missed.map(p => { const o = osById(p.os); return `<a href="#/module/${p.os}/${p.m}">${esc(o.name)} Module ${p.m}: ${esc(moduleOf(o, p.m).title)}</a>`; }).join(' &middot; ')}</p>` : ''}
      </div>
    </section>`;
}

/* ---------- router ---------- */
function setActiveNav(key) {
  document.querySelectorAll('[data-nav]').forEach(a => {
    if (a.dataset.nav === key) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
  });
}

/*
  Routes:
    #/                      Home
    #/os                    Operating system list (Linux, Windows, macOS)
    #/os/windows            One operating system with its 4 modules
    #/module/windows/1      A module guide
    #/quiz/windows/1        A module quiz
    #/quick                 Random quiz across all operating systems
    #/results               Quiz results
*/
function route() {
  const parts = location.hash.replace(/^#\/?/, '').split('/');
  const page = parts[0];
  let nav = 'home';

  if (page === 'os' && parts[1]) { renderOS(parts[1]); nav = 'os'; }
  else if (page === 'os' || page === 'modules') { renderOSList(); nav = 'os'; }
  else if (page === 'module' && parts[1] && parseInt(parts[2], 10)) { renderModule(parts[1], parseInt(parts[2], 10)); nav = 'os'; }
  else if (page === 'quiz' && parts[1] && parseInt(parts[2], 10)) { renderQuiz('module', parts[1], parseInt(parts[2], 10)); nav = 'quick'; }
  else if (page === 'quick') { renderQuiz('quick'); nav = 'quick'; }
  else if (page === 'results') { renderResults(); nav = 'quick'; }
  else { renderHome(); }

  setActiveNav(nav);
  window.scrollTo(0, 0);
  app.focus({ preventScroll: true });
}

window.addEventListener('hashchange', route);
route();
