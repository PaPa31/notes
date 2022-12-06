"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[86821],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),d=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=d(e.components);return o.createElement(s.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=d(t),u=a,c=p["".concat(s,".").concat(u)]||p[u]||g[u]||l;return t?o.createElement(c,r(r({ref:n},m),{},{components:t})):o.createElement(c,r({ref:n},m))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var d=2;d<l;d++)r[d]=t[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},96944:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>g});var o=t(87462),a=(t(67294),t(3905)),l=t(34259),r=t(18679);const i={title:"Install MongoDB Linux",authors:["papa31"],tags:["database","mongodb","mongosh","linux","debian","bullseye"],date:new Date("2022-11-27T21:03:34.000Z"),description:"Installation MongoDB and mongosh",draft:!1},s=void 0,d={permalink:"/hm/blog/2022/11/27/install-mongodb-linux",editUrl:"https://github.com/papa31/hm/edit/documentation/blog/2022-11-27-install-mongodb-linux.md",source:"@site/blog/2022-11-27-install-mongodb-linux.md",title:"Install MongoDB Linux",description:"Installation MongoDB and mongosh",date:"2022-11-27T21:03:34.000Z",formattedDate:"November 27, 2022",tags:[{label:"database",permalink:"/hm/blog/tags/database"},{label:"mongodb",permalink:"/hm/blog/tags/mongodb"},{label:"mongosh",permalink:"/hm/blog/tags/mongosh"},{label:"linux",permalink:"/hm/blog/tags/linux"},{label:"debian",permalink:"/hm/blog/tags/debian"},{label:"bullseye",permalink:"/hm/blog/tags/bullseye"}],readingTime:7.25,hasTruncateMarker:!0,authors:[{name:"papa31",url:"https://github.com/papa31",imageURL:"https://github.com/papa31.png",key:"papa31"}],frontMatter:{title:"Install MongoDB Linux",authors:["papa31"],tags:["database","mongodb","mongosh","linux","debian","bullseye"],date:"2022-11-27T21:03:34.000Z",description:"Installation MongoDB and mongosh",draft:!1},nextItem:{title:"Install MongoDB Windows",permalink:"/hm/blog/2022/05/01/install-mongodb-windows"}},m={authorsImageUrls:[void 0]},g=[{value:"Configure Install Settings",id:"configure-install-settings",level:2},{value:"1. Import the MongoDB public GPG Key",id:"1-import-the-mongodb-public-gpg-key",level:4},{value:"2. Create a &#39;list file&#39; for MongoDB",id:"2-create-a-list-file-for-mongodb",level:4},{value:"3. Reload local package database",id:"3-reload-local-package-database",level:4},{value:"4. Install the MongoDB packages",id:"4-install-the-mongodb-packages",level:4},{value:"Configure after Install",id:"configure-after-install",level:2},{value:"Check Unix <code>ulimit</code> settings",id:"check-unix-ulimit-settings",level:3},{value:"Change <code>ulimit</code>",id:"change-ulimit",level:3},{value:"Default Directories",id:"default-directories",level:3},{value:"Run MongoDB",id:"run-mongodb",level:2},{value:"Start MongoDB as a Service",id:"start-mongodb-as-a-service",level:3},{value:"Begin Using MongoDB",id:"begin-using-mongodb",level:2},{value:"<code>localhost</code> issue in <code>node</code>",id:"localhost-issue-in-node",level:3},{value:"Uninstall MongoDB",id:"uninstall-mongodb",level:2},{value:"Source",id:"source",level:2}],p={toc:g};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Caution about this caution:")),(0,a.kt)("admonition",{title:"mongodb official caution",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"mongodb")," package provided by Debian is ",(0,a.kt)("strong",{parentName:"p"},"not")," maintained by MongoDB Inc. and conflicts with the official ",(0,a.kt)("inlineCode",{parentName:"p"},"mongodb-org")," package. If you have already installed the ",(0,a.kt)("inlineCode",{parentName:"p"},"mongodb")," package on your Debian system, you ",(0,a.kt)("strong",{parentName:"p"},"must")," first uninstall the ",(0,a.kt)("inlineCode",{parentName:"p"},"mongodb")," package before proceeding with these instructions.")),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},'Although the mongodb staff is trying to fix the situation, it only makes things worse. "Would that it were so simple!"')),(0,a.kt)("h2",{id:"configure-install-settings"},"Configure Install Settings"),(0,a.kt)("h4",{id:"1-import-the-mongodb-public-gpg-key"},"1. Import the MongoDB public GPG Key"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -\n")),(0,a.kt)("p",null,"Should be 'OK'."),(0,a.kt)("p",null,"If not, see: ",(0,a.kt)("a",{href:"https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-debian/#import-the-public-key-used-by-the-package-management-system",class:"external"},"mongodb.com: Import The Public Key")),(0,a.kt)("h4",{id:"2-create-a-list-file-for-mongodb"},"2. Create a 'list file' for MongoDB"),(0,a.kt)("p",null,"First, check your Debian version:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"lsb_release -a\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You can check the availability of MongoDB distro for your version of Debian. Open ",(0,a.kt)("a",{parentName:"p",href:"https://repo.mongodb.org/apt/"},"https://repo.mongodb.org/apt/"),", click to Debian, and try to find your version.")),(0,a.kt)("p",null,"Edit code below depend on your version of Debian:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'echo "deb http://repo.mongodb.org/apt/debian bullseye/mongodb-org/6.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list\n')),(0,a.kt)("p",null,"Run the above command."),(0,a.kt)("h4",{id:"3-reload-local-package-database"},"3. Reload local package database"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update\n")),(0,a.kt)("h4",{id:"4-install-the-mongodb-packages"},"4. Install the MongoDB packages"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"latest",label:"latest",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install -y mongodb-org\n"))),(0,a.kt)(r.Z,{value:"specific",label:"specific",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install -y mongodb-org=6.0.3 mongodb-org-database=6.0.3 mongodb-org-server=6.0.3 mongodb-mongosh=6.0.3 mongodb-org-mongos=6.0.3 mongodb-org-tools=6.0.3\n")),(0,a.kt)("p",null,"Although you can specify any available version of MongoDB, ",(0,a.kt)("inlineCode",{parentName:"p"},"apt-get")," will upgrade the packages when a newer version becomes available."))),(0,a.kt)("p",null,"To prevent unintended upgrades see ",(0,a.kt)("a",{href:"https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-debian/#install-the-mongodb-packages",class:"external"},"mongodb.com: Install The Mongodb Packages"),"."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"After install mongodb-org (6.0)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"~ $ sudo apt-get install -y mongodb-org\nReading package lists... Done\nBuilding dependency tree... Done\nReading state information... Done\nThe following additional packages will be installed:\n  mongodb-mongosh mongodb-org-database mongodb-org-database-tools-extra mongodb-org-mongos mongodb-org-server\n  mongodb-org-shell mongodb-org-tools\nThe following NEW packages will be installed:\n  mongodb-mongosh mongodb-org mongodb-org-database mongodb-org-database-tools-extra mongodb-org-mongos mongodb-org-server\n  mongodb-org-shell mongodb-org-tools\n0 upgraded, 8 newly installed, 0 to remove and 1 not upgraded.\nNeed to get 49.2 MB/86.9 MB of archives.\nAfter this operation, 464 MB of additional disk space will be used.\nGet:1 http://repo.mongodb.org/apt/debian bullseye/mongodb-org/6.0/main amd64 mongodb-org-shell amd64 6.0.3 [3,080 B]\nGet:2 http://repo.mongodb.org/apt/debian bullseye/mongodb-org/6.0/main amd64 mongodb-org-server amd64 6.0.3 [28.9 MB]\nGet:3 http://repo.mongodb.org/apt/debian bullseye/mongodb-org/6.0/main amd64 mongodb-org-mongos amd64 6.0.3 [20.3 MB]\nGet:4 http://repo.mongodb.org/apt/debian bullseye/mongodb-org/6.0/main amd64 mongodb-org-database-tools-extra amd64 6.0.3 [7,752 B]\nGet:5 http://repo.mongodb.org/apt/debian bullseye/mongodb-org/6.0/main amd64 mongodb-org-database amd64 6.0.3 [3,540 B]\nGet:6 http://repo.mongodb.org/apt/debian bullseye/mongodb-org/6.0/main amd64 mongodb-org-tools amd64 6.0.3 [2,892 B]\nGet:7 http://repo.mongodb.org/apt/debian bullseye/mongodb-org/6.0/main amd64 mongodb-org amd64 6.0.3 [2,932 B]\nFetched 49.2 MB in 7s (6,612 kB/s)\nSelecting previously unselected package mongodb-mongosh.\n(Reading database ... 489953 files and directories currently installed.)\nPreparing to unpack .../0-mongodb-mongosh_1.6.1_amd64.deb ...\nUnpacking mongodb-mongosh (1.6.1) ...\nSelecting previously unselected package mongodb-org-shell.\nPreparing to unpack .../1-mongodb-org-shell_6.0.3_amd64.deb ...\nUnpacking mongodb-org-shell (6.0.3) ...\nSelecting previously unselected package mongodb-org-server.\nPreparing to unpack .../2-mongodb-org-server_6.0.3_amd64.deb ...\nUnpacking mongodb-org-server (6.0.3) ...\nSelecting previously unselected package mongodb-org-mongos.\nPreparing to unpack .../3-mongodb-org-mongos_6.0.3_amd64.deb ...\nUnpacking mongodb-org-mongos (6.0.3) ...\nSelecting previously unselected package mongodb-org-database-tools-extra.\nPreparing to unpack .../4-mongodb-org-database-tools-extra_6.0.3_amd64.deb ...\nUnpacking mongodb-org-database-tools-extra (6.0.3) ...\nSelecting previously unselected package mongodb-org-database.\nPreparing to unpack .../5-mongodb-org-database_6.0.3_amd64.deb ...\nUnpacking mongodb-org-database (6.0.3) ...\nSelecting previously unselected package mongodb-org-tools.\nPreparing to unpack .../6-mongodb-org-tools_6.0.3_amd64.deb ...\nUnpacking mongodb-org-tools (6.0.3) ...\nSelecting previously unselected package mongodb-org.\nPreparing to unpack .../7-mongodb-org_6.0.3_amd64.deb ...\nUnpacking mongodb-org (6.0.3) ...\nSetting up mongodb-mongosh (1.6.1) ...\nSetting up mongodb-org-server (6.0.3) ...\nSystem has not been booted with systemd as init system (PID 1). Can't operate.\nFailed to connect to bus: Host is down\nSetting up mongodb-org-shell (6.0.3) ...\nSetting up mongodb-org-mongos (6.0.3) ...\nSetting up mongodb-org-database-tools-extra (6.0.3) ...\nSetting up mongodb-org-database (6.0.3) ...\nSetting up mongodb-org-tools (6.0.3) ...\nSetting up mongodb-org (6.0.3) ...\nProcessing triggers for man-db (2.9.4-2) ...\n"))),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"After endlessly trying to install MongoDB, I ran ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo apt-get install gnupg")," and found that ",(0,a.kt)("inlineCode",{parentName:"p"},"mongodb-database-tools")," was also installed:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"{6-7}","{6-7}":!0},"~ $ sudo apt-get install gnupg\nReading package lists... Done\nBuilding dependency tree... Done\nReading state information... Done\ngnupg is already the newest version (2.2.27-2+deb11u2).\nThe following package was automatically installed and is no longer required:\n  mongodb-database-tools\nUse 'sudo apt autoremove' to remove it.\n0 upgraded, 0 newly installed, 0 to remove and 1 not upgraded.\n"))),(0,a.kt)("p",null,"So if you're stuck like me, you should:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"apt list | grep mongodb-database-tools  # check\nsudo apt-get install mongodb-database-tools # install\n")),(0,a.kt)("h2",{id:"configure-after-install"},"Configure after Install"),(0,a.kt)("h3",{id:"check-unix-ulimit-settings"},"Check Unix ",(0,a.kt)("inlineCode",{parentName:"h3"},"ulimit")," settings"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"ulimit -a   # show all limits\n")),(0,a.kt)("blockquote",null,(0,a.kt)("h4",{parentName:"blockquote",id:"recommended-ulimit-settings"},"Recommended ",(0,a.kt)("inlineCode",{parentName:"h4"},"ulimit")," Settings"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-f")," (file size): ",(0,a.kt)("inlineCode",{parentName:"li"},"unlimited")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-t")," (cpu time): ",(0,a.kt)("inlineCode",{parentName:"li"},"unlimited")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-v")," (virtual memory): ",(0,a.kt)("inlineCode",{parentName:"li"},"unlimited")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-l")," (locked-in-memory size): ",(0,a.kt)("inlineCode",{parentName:"li"},"unlimited")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-n")," (open files): ",(0,a.kt)("inlineCode",{parentName:"li"},"64000")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-m")," (memory size): ",(0,a.kt)("inlineCode",{parentName:"li"},"unlimited")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-u")," (processes/threads): ",(0,a.kt)("inlineCode",{parentName:"li"},"64000"))),(0,a.kt)("p",{parentName:"blockquote"},"Source: ",(0,a.kt)("a",{href:"https://www.mongodb.com/docs/manual/reference/ulimit/",class:"external"},"UNIX ulimit Settings"))),(0,a.kt)("admonition",{title:"official warning",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Since MongoDB 4.4, if ",(0,a.kt)("inlineCode",{parentName:"p"},"-n")," is less than ",(0,a.kt)("inlineCode",{parentName:"p"},"64000"),", a startup error is generated.")),(0,a.kt)("h3",{id:"change-ulimit"},"Change ",(0,a.kt)("inlineCode",{parentName:"h3"},"ulimit")),(0,a.kt)("p",null,"In my case I need change:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"-n  (nofile)   1024   ->  64000\n-l  (memlock)  64     ->  unlimited\n-u  (nproc)    63371  ->  64000\n")),(0,a.kt)("p",null,"Add to the end of the 3 files below as ",(0,a.kt)("em",{parentName:"p"},"root"),":"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title=" /etc/security/limits.conf"',title:'"','/etc/security/limits.conf"':!0},"*               soft    nofile          64000\n*               hard    nofile          64000\n*               soft    memlock         unlimited\n*               hard    memlock         unlimited\n*               soft    nproc           64000\n*               hard    nproc           64000\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="/etc/pam.d/common-session"',title:'"/etc/pam.d/common-session"'},"session required        pam_limits.so\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="/etc/pam.d/common-session-noninteractive"',title:'"/etc/pam.d/common-session-noninteractive"'},"session required        pam_limits.so\n")))),(0,a.kt)("p",null,"Re-login (no reboot required) and check:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ ulimit -n -Hn -Sn\nopen files                          (-n) 64000\nopen files                          (-n) 64000  # Hard limit\nopen files                          (-n) 64000  # Soft limit\n")),(0,a.kt)("p",null,"And two other limits in a similar way..."),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{href:"https://superuser.com/a/1200818",class:"external"},"superuser.com: 1200818")),(0,a.kt)("h3",{id:"default-directories"},"Default Directories"),(0,a.kt)("p",null,"Automatically created dirs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/var/lib/mongodb")," - data files"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/var/log/mongodb")," - log files")),(0,a.kt)("admonition",{title:"official caution",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you installed MongoDB by downloading the tarballs, you must create these directories manually.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Possible Permission Issues"),(0,a.kt)("p",null,"These commands may help you:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo mkdir -p /data/db\nsudo chmod -R go+w /data/db\n\n# or\n\nsudo chown -R $USER /data/db\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo chown -R mongod:mongod /var/lib/mongodb\nsudo chown -R mongod:mongod /var/log/mongodb\nsudo chown mongod:mongod /etc/mongod.conf\n\nsudo chown mongod:mongod /var/run/mongod.pid\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mongod --repair\n"))),(0,a.kt)("h2",{id:"run-mongodb"},"Run MongoDB"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Start MongoDB Directly"),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{href:"https://learn.microsoft.com/en-us/windows/wsl/tutorials/wsl-database#install-mongodb",class:"external"},"learn.microsoft.com: Install Mongodb")),(0,a.kt)("p",null,"If you cannot start MongoDB as a service, you can try starting it directly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mongod --version                # Get the version number\nmkdir -p ~/data/db              # Make a directory to store data\nsudo mongod --dbpath ~/data/db  # Run a Mongo instance\nps -e | grep 'mongod'           # Check to see that your MongoDB instance is running\n"))),(0,a.kt)("h3",{id:"start-mongodb-as-a-service"},"Start MongoDB as a Service"),(0,a.kt)("p",null,"First, check which init system your platform uses:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"ps --no-headers -o comm 1\n")),(0,a.kt)("p",null,"Start MongoDB depend on your output:"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"init",label:"init",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"Download the ",(0,a.kt)("inlineCode",{parentName:"p"},"init.d")," script:"),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"This variant ",(0,a.kt)("strong",{parentName:"p"},"Doesn't work!")," (at the moment: 01/12/2022):"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl https://raw.githubusercontent.com/mongodb/mongo/master/debian/init.d | sudo tee /etc/init.d/mongod >/dev/null\n"))),(0,a.kt)("p",null,"use this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl https://raw.githubusercontent.com/mongodb/mongo/cad54eb5ebdff24ecec53b56788cd151d8d64272/debian/init.d | sudo tee /etc/init.d/mongod >/dev/null\n")),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{href:"https://stackoverflow.com/a/74190626",class:"external"},"stackoverflow.com: 74190626")),(0,a.kt)("p",null,"Assign that script executable permissions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo chmod +x /etc/init.d/mongod\n")),(0,a.kt)("p",null,"Now you can use MongoDB service commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo service mongod start   # start\nsudo service mongod status  # verify\nsudo service mongod stop    # stop\nsudo service mongod restart # restart\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Logs & Settings"),(0,a.kt)("p",null,"You can view the logs, find the lines with errors and try to fix them:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cat /var/log/mongodb/mongod.log\n")),(0,a.kt)("p",null,"Useful information about MongoDB settings can be found here:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"/etc/mongod.conf\n/lib/systemd/system/mongod.service\n")))),(0,a.kt)(r.Z,{value:"systemd",label:"systemd",mdxType:"TabItem"},(0,a.kt)("p",null,"Read more: ",(0,a.kt)("a",{href:"https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-debian/#procedure",class:"external"},"mongodb.com: Procedure")))),(0,a.kt)("h2",{id:"begin-using-mongodb"},"Begin Using MongoDB"),(0,a.kt)("admonition",{title:"official note",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The legacy ",(0,a.kt)("inlineCode",{parentName:"p"},"mongo")," shell is no longer included in server packages as of MongoDB 6.0. ",(0,a.kt)("inlineCode",{parentName:"p"},"mongo")," has been superseded by the ",(0,a.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/mongodb-shell/"},"new MongoDB Shell ( ",(0,a.kt)("inlineCode",{parentName:"a"},"mongosh")," )"))),(0,a.kt)("p",null,"Start mongoDB shell:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mongosh\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Quick mongosh examples"),(0,a.kt)("p",null,"Initial ",(0,a.kt)("inlineCode",{parentName:"p"},"mongosh")," command line:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"test>\n")),(0,a.kt)("p",null,'Create database "first":'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"test> use first\n")),(0,a.kt)("p",null,"Insert one item:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'first> db.pizza.insertOne({type: "Cheese"})\n')),(0,a.kt)("p",null,"Insert many items:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'first> db.pizza.insertMany([{type: "Veggie"},{type: "Olive"}])\n')),(0,a.kt)("p",null,"Show all items:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"first> db.pizza.find()\n")),(0,a.kt)("p",null,"Remove all items:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"db.pizza.deleteMany({})\n"))),(0,a.kt)("h3",{id:"localhost-issue-in-node"},(0,a.kt)("inlineCode",{parentName:"h3"},"localhost")," issue in ",(0,a.kt)("inlineCode",{parentName:"h3"},"node")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If you are using latest ",(0,a.kt)("inlineCode",{parentName:"p"},"nodejs")," (v17.x and above) , use ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost"),":"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="index.js"',title:'"index.js"'},'const mongoose = require("mongoose");   # MongoDB library\n...\n//This will error\nconst DB_URL = "mongodb://localhost/first";  # Error\nconst DB_URL = "mongodb://127.0.0.1/first";  # Work!\n...\n'))),(0,a.kt)("h2",{id:"uninstall-mongodb"},"Uninstall MongoDB"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"ls -l /etc/apt/sources.list.d/\nsudo rm /etc/apt/sources.list.d/mongodb-org-6.0.list\n\nsudo service mongod stop\nsudo apt-get purge mongodb-org*\n\nsudo rm -r /var/log/mongodb\nsudo rm -r /var/lib/mongodb\n")),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"These commands will delete your databases!!!"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo rm -rf /data/db/*\nsudo rm -rf /tmp/mongod*\n"))),(0,a.kt)("h2",{id:"source"},"Source"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-debian",class:"external"},"mongodb.com: Install Mongodb Community Edition On Debian"))))}u.isMDXComponent=!0},18679:(e,n,t)=>{t.d(n,{Z:()=>r});var o=t(67294),a=t(86010);const l="tabItem_Ymn6";function r(e){let{children:n,hidden:t,className:r}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,r),hidden:t},n)}},34259:(e,n,t)=>{t.d(n,{Z:()=>u});var o=t(87462),a=t(67294),l=t(86010),r=t(51048),i=t(33609),s=t(1943),d=t(72957);const m="tabList__CuJ",g="tabItem_LNqP";function p(e){var n;const{lazy:t,block:r,defaultValue:p,values:u,groupId:c,className:b}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=u??k.map((e=>{let{props:{value:n,label:t,attributes:o}}=e;return{value:n,label:t,attributes:o}})),f=(0,i.l)(h,((e,n)=>e.value===n.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===p?p:p??(null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)??k[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:v}=(0,s.U)(),[w,D]=(0,a.useState)(y),C=[],{blockElementScrollPositionUntilNextRender:x}=(0,d.o5)();if(null!=c){const e=N[c];null!=e&&e!==w&&h.some((n=>n.value===e))&&D(e)}const B=e=>{const n=e.currentTarget,t=C.indexOf(n),o=h[t].value;o!==w&&(x(n),D(o),null!=c&&v(c,String(o)))},M=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;t=C[n]??C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;t=C[n]??C[C.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",m)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},b)},h.map((e=>{let{value:n,label:t,attributes:r}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:e=>C.push(e),onKeyDown:M,onFocus:B,onClick:B},r,{className:(0,l.Z)("tabs__item",g,null==r?void 0:r.className,{"tabs__item--active":w===n})}),t??n)}))),t?(0,a.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==w})))))}function u(e){const n=(0,r.Z)();return a.createElement(p,(0,o.Z)({key:String(n)},e))}}}]);