##How to run **`start.sh`** from your IDE

####Plan:
`0`. Restrictions

`1`. Netbeans

`2`. WebStorm/RubyMine

###Restrictions
As our framework uses github private repo and bower uses ssh, credentials of github can not be shared with IDE. 

So, command `bower update` as well as parameter `-u` of start.sh script can not be used.
Please, run `bower update` command separately from IDE.

###NetBeans
This was tested for NetBeans 8, but should work also for 7.x.

`1`. Right click on file `start.sh` and click `Properties`.

![Start.sh Properties][1]

* Enter arguments into `Arguments` field. E.g.: `-p demo2`
* Enter `.` into `Run Directory`. This means start.sh will be executed within folder where it is placed.
* Enter path to Bash script into `Shell` field.
* Optionally you can specify environment variables in the `Environment` field.

`2`. Right click on `start.sh` file and click `Run`.

![start.sh run][2]

`3`. `Output` window should appear.

![start.sh output ][3]

`4` After tests end output window should look like this.

![start.sh output finins][4]

###Webstorm/RubyMine
This was tested on RubyMine 6.3 and WebStorm 8.0.1

`1`. Open IDE and in top menu click `File` -> `Settings`. In opened window in `IDE Settings` section on the left click `Plugins`.

![IDE Settings][5]

`2`. Click on `Browse repositories` button, find and install `BashSupport` plugin.

![BashSupport][6]

`3`. Close `Plugins` and `Settings` window. IDE will restart.

`4`. Right click on `start.sh` file in project section and click on `Create 'start.sh'`. `Create Run/Debug Configuration` will be opened

![Run Configuration][7]

`5`. In field `Script parameters` enter parameters for start.sh.

`6`. In field `Bash interpreter` enter path to your executive interpreter of Bash. (For example, GIT one).

`7`. You can specify environment variables by clicking `...` near `Environment variables` field and adding variables.

`8`. Click "OK". 

`9`. In the Top Menu and click `Run` -> `Run 'start.sh'`. Executing should start. Do not use `Run 'start.sh(1)'` menu item in right-click menu. It will duplicate run configuration. The `Run console` window will appear.

![Bash console][9]

`10`. To change script parameters, In top menu click `Run` -> `Edit configurations`.

![Edit Configuration][8]

`11` Click `Bash`->`start.sh` in left section and you will find all parameters in right section.


  [1]: images/start_sh_properties_to_run.png
  [2]: images/start_sh_run.png
  [3]: images/start_sh_output.png
  [4]: images/start_sh_output_finish.png
  [5]: images/idea_plugins.png "Plugins window"
  [6]: images/idea_plugin_bash.png "Plugin BashSupport"
  [7]: images/idea_run_config.png
  [8]: images/idea_edit_run_config.png
  [9]: images/idea_console.png