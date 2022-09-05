"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[56887],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||s;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var u=2;u<s;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22412:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));const s={title:"Working with Multipass Instances"},r=void 0,o={unversionedId:"virtual-machines/multipass/working-with-multipass-instances",id:"virtual-machines/multipass/working-with-multipass-instances",title:"Working with Multipass Instances",description:"source//discourse.ubuntu.com/t/working-with-multipass-instances/8422",source:"@site/docs/virtual-machines/multipass/working-with-multipass-instances.md",sourceDirName:"virtual-machines/multipass",slug:"/virtual-machines/multipass/working-with-multipass-instances",permalink:"/hm/docs/virtual-machines/multipass/working-with-multipass-instances",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/docs/virtual-machines/multipass/working-with-multipass-instances.md",tags:[],version:"current",lastUpdatedBy:"papa31",lastUpdatedAt:1608669521,formattedLastUpdatedAt:"Dec 22, 2020",frontMatter:{title:"Working with Multipass Instances"},sidebar:"Docs",previous:{title:"Local K3s Cluster with Multipass",permalink:"/hm/docs/virtual-machines/multipass/local-k3s-cluster-multipass"},next:{title:"All vscode Keyboard Shortcuts",permalink:"/hm/docs/vs-code/all-vscode-keyboard-shortcuts"}},l={},u=[{value:"Launching your first instance",id:"launching-your-first-instance",level:2},{value:"Executing commands",id:"executing-commands",level:2},{value:"Getting more information",id:"getting-more-information",level:2},{value:"Sharing data with the instance",id:"sharing-data-with-the-instance",level:2},{value:"Deleting the instance",id:"deleting-the-instance",level:2},{value:"And more\u2026",id:"and-more",level:2},{value:"Additional Resources",id:"additional-resources",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"source: ",(0,i.kt)("a",{parentName:"p",href:"https://discourse.ubuntu.com/t/working-with-multipass-instances/8422"},"https://discourse.ubuntu.com/t/working-with-multipass-instances/8422")),(0,i.kt)("p",null,"This page is a quick primer on how to use Multipass."),(0,i.kt)("h2",{id:"launching-your-first-instance"},"Launching your first instance"),(0,i.kt)("p",null,"After having installed it, the ",(0,i.kt)("inlineCode",{parentName:"p"},"multipass")," command line utility is your main entry point."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell",metastring:'title="PowerShell"',title:'"PowerShell"'},"$ multipass launch\n\u2026\nLaunched: keen-yak\n\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"launch")," command creates a new Ubuntu instance using the default, at this point in time, image. It\u2019s most likely going to be the latest cloud image of the newest Ubuntu LTS (Long Term Support) release. You can also choose another image, use ",(0,i.kt)("a",{parentName:"p",href:"https://discourse.ubuntu.com/t/multipass-find-command/8351"},(0,i.kt)("inlineCode",{parentName:"a"},"find"))," to see what\u2019s available."),(0,i.kt)("p",null,"It will use a catchy name for you, but you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--name")," option to give it a name of your own. As is usual, you can pass ",(0,i.kt)("inlineCode",{parentName:"p"},"--help")," to see all the available options."),(0,i.kt)("h2",{id:"executing-commands"},"Executing commands"),(0,i.kt)("p",null,"There are a couple ways you can access the instance: ",(0,i.kt)("inlineCode",{parentName:"p"},"exec")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"shell")," (or ",(0,i.kt)("inlineCode",{parentName:"p"},"sh")," for short), which will execute the given command directly, or open a shell inside the instance, respectively:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ multipass exec keen-yak -- lsb_release --description\nDescription:    Ubuntu 18.04.1 LTS\n\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ multipass shell keen-yak\nWelcome to Ubuntu 18.04.1 LTS (GNU/Linux 4.15.0-36-generic x86_64)\n\u2026\nmultipass@keen-yak:~$\n\n")),(0,i.kt)("p",null,"Note the ",(0,i.kt)("inlineCode",{parentName:"p"},"--")," passed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"exec")," command - use it to separate the options passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"multipass")," from those passed to the command being executed."),(0,i.kt)("p",null,"From there you can work inside your instance as with any other Ubuntu installation. To install software, use ",(0,i.kt)("inlineCode",{parentName:"p"},"snap")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"apt"),", both are available."),(0,i.kt)("h2",{id:"getting-more-information"},"Getting more information"),(0,i.kt)("p",null,"To get some information about your instances, you can ",(0,i.kt)("inlineCode",{parentName:"p"},"list")," them (",(0,i.kt)("inlineCode",{parentName:"p"},"ls")," for short):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ multipass ls\nName                    State             IPv4             Release\nkeen-yak                RUNNING           10.140.94.253    Ubuntu 18.04 LTS\nsnapcraft-multipass     STOPPED           --               Ubuntu Snapcraft builder for Core 16\n\n")),(0,i.kt)("p",null,"Or you can ask for an extended status report:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ multipass info keen-yak\nName:           keen-yak\nState:          RUNNING\nIPv4:           10.140.94.253\nRelease:        Ubuntu 18.04.1 LTS\nImage hash:     d53116c67a41 (Ubuntu 18.04 LTS)\nLoad:           0.00 0.12 0.18\nDisk usage:     1.1G out of 4.7G\nMemory usage:   71.6M out of 985.4M\n\n")),(0,i.kt)("h2",{id:"sharing-data-with-the-instance"},"Sharing data with the instance"),(0,i.kt)("p",null,"The recommended way to share data between your host and the instance is the ",(0,i.kt)("inlineCode",{parentName:"p"},"mount")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ multipass mount $HOME keen-yak\n$ multipass info keen-yak\n\u2026\nMounts:         /home/ubuntu => /home/ubuntu\n\n")),(0,i.kt)("p",null,"From this point on ",(0,i.kt)("inlineCode",{parentName:"p"},"/home/ubuntu")," will be available inside the instance. Use ",(0,i.kt)("inlineCode",{parentName:"p"},"umount")," to unmount it again and you can change the target by passing it after the instance name:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ multipass umount keen-yak\n$ multipass mount $HOME keen-yak:/some/path\n$ multipass info keen-yak                \n\u2026\nMounts:         /home/michal => /some/path\n\n")),(0,i.kt)("p",null,"You can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"transfer")," to just copy files around - prefix the path with ",(0,i.kt)("inlineCode",{parentName:"p"},"<name>:")," if it\u2019s inside an instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ multipass transfer keen-yak:/etc/crontab keen-yak:/etc/fstab .\n$ ls -l crontab fstab\n-rw-r--r-- 1 ubuntu ubuntu 722 Oct 18 12:13 crontab\n-rw-r--r-- 1 ubuntu ubuntu  82 Oct 18 12:13 fstab\n$ multipass transfer crontab fstab keen-yak:\n$ multipass exec keen-yak -- ls -l crontab fstab\n-rw-rw-r-- 1 multipass multipass 722 Oct 18 12:14 crontab\n-rw-rw-r-- 1 multipass multipass  82 Oct 18 12:14 fstab\n\n")),(0,i.kt)("h2",{id:"deleting-the-instance"},"Deleting the instance"),(0,i.kt)("p",null,"When you\u2019re done with it, you can ",(0,i.kt)("inlineCode",{parentName:"p"},"delete")," the instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ multipass delete keen-yak\n\n")),(0,i.kt)("p",null,"You will see in ",(0,i.kt)("inlineCode",{parentName:"p"},"list")," that it\u2019s actually just marked for deletion (or to put it in other words, put in the Recycle bin):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ multipass list\nName                    State             IPv4             Release\nkeen-yak                DELETED           --               Not Available\n\n")),(0,i.kt)("p",null,"You can then ",(0,i.kt)("inlineCode",{parentName:"p"},"recover")," it, or ",(0,i.kt)("inlineCode",{parentName:"p"},"purge")," to remove all deleted instances completely:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ multipass recover keen-yak\n$ multipass list\nName                    State             IPv4             Release\nkeen-yak                STOPPED           --               Ubuntu 18.04 LTS\n$ multipass delete keen-yak\n$ multipass purge\n$ multipass ls\nNo instances found.\n\n")),(0,i.kt)("h2",{id:"and-more"},"And more\u2026"),(0,i.kt)("p",null,"See our ",(0,i.kt)("a",{parentName:"p",href:"https://discourse.ubuntu.com/t/multipass-documentation-outline/8294#command-line-reference"},"Command-line reference")," for a complete listing of the available commands and their options."),(0,i.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"local-k3s-cluster-multipass"},"Local K3s Cluster Made Easy With Multipass"))))}c.isMDXComponent=!0}}]);