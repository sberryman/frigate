(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(96)),i={id:"index",title:"Configuration"},c={unversionedId:"configuration/index",id:"configuration/index",isDocsHomePage:!1,title:"Configuration",description:"HassOS users can manage their configuration directly in the addon Configuration tab. For other installations, the default location for the config file is /config/config.yml. This can be overridden with the CONFIG_FILE environment variable. Camera specific ffmpeg parameters are documented here.",source:"@site/docs/configuration/index.md",slug:"/configuration/index",permalink:"/frigate/configuration/index",editUrl:"https://github.com/blakeblackshear/frigate/edit/master/docs/docs/configuration/index.md",version:"current",sidebar:"docs",previous:{title:"Troubleshooting and FAQ",permalink:"/frigate/troubleshooting"},next:{title:"Cameras",permalink:"/frigate/configuration/cameras"}},l=[{value:"Required",id:"required",children:[]},{value:"<code>mqtt</code>",id:"mqtt",children:[]},{value:"<code>cameras</code>",id:"cameras",children:[]},{value:"Optional",id:"optional",children:[{value:"<code>clips</code>",id:"clips",children:[]},{value:"<code>ffmpeg</code>",id:"ffmpeg",children:[]},{value:"<code>objects</code>",id:"objects",children:[]}]}],s={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"HassOS users can manage their configuration directly in the addon Configuration tab. For other installations, the default location for the config file is ",Object(o.b)("inlineCode",{parentName:"p"},"/config/config.yml"),". This can be overridden with the ",Object(o.b)("inlineCode",{parentName:"p"},"CONFIG_FILE")," environment variable. Camera specific ffmpeg parameters are documented ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/frigate/configuration/cameras"}),"here"),"."),Object(o.b)("p",null,"It is recommended to start with a minimal configuration and add to it:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"mqtt:\n  host: mqtt.server.com\ncameras:\n  back:\n    ffmpeg:\n      inputs:\n        - path: rtsp://viewer:{FRIGATE_RTSP_PASSWORD}@10.0.10.10:554/cam/realmonitor?channel=1&subtype=2\n          roles:\n            - detect\n            - rtmp\n    width: 1280\n    height: 720\n    fps: 5\n")),Object(o.b)("h2",{id:"required"},"Required"),Object(o.b)("h2",{id:"mqtt"},Object(o.b)("inlineCode",{parentName:"h2"},"mqtt")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"mqtt:\n  # Required: host name\n  host: mqtt.server.com\n  # Optional: port (default: shown below)\n  port: 1883\n  # Optional: topic prefix (default: shown below)\n  # WARNING: must be unique if you are running multiple instances\n  topic_prefix: frigate\n  # Optional: client id (default: shown below)\n  # WARNING: must be unique if you are running multiple instances\n  client_id: frigate\n  # Optional: user\n  user: mqtt_user\n  # Optional: password\n  # NOTE: Environment variables that begin with 'FRIGATE_' may be referenced in {}.\n  #       eg. password: '{FRIGATE_MQTT_PASSWORD}'\n  password: password\n  # Optional: interval in seconds for publishing stats (default: shown below)\n  stats_interval: 60\n")),Object(o.b)("h2",{id:"cameras"},Object(o.b)("inlineCode",{parentName:"h2"},"cameras")),Object(o.b)("p",null,"Each of your cameras must be configured. The following is the minimum required to register a camera in Frigate. Check the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/frigate/configuration/cameras"}),"camera configuration page")," for a complete list of options."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"cameras:\n  # Name of your camera\n  front_door:\n    ffmpeg:\n      inputs:\n        - path: rtsp://viewer:{FRIGATE_RTSP_PASSWORD}@10.0.10.10:554/cam/realmonitor?channel=1&subtype=2\n          roles:\n            - detect\n            - rtmp\n    width: 1280\n    height: 720\n    fps: 5\n")),Object(o.b)("h2",{id:"optional"},"Optional"),Object(o.b)("h3",{id:"clips"},Object(o.b)("inlineCode",{parentName:"h3"},"clips")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"clips:\n  # Optional: Maximum length of time to retain video during long events. (default: shown below)\n  # NOTE: If an object is being tracked for longer than this amount of time, the cache\n  #       will begin to expire and the resulting clip will be the last x seconds of the event.\n  max_seconds: 300\n  # Optional: size of tmpfs mount to create for cache files (default: not set)\n  # mount -t tmpfs -o size={tmpfs_cache_size} tmpfs /tmp/cache\n  # NOTICE: Addon users must have Protection mode disabled for the addon when using this setting.\n  # Also, if you have mounted a tmpfs volume through docker, this value should not be set in your config.\n  tmpfs_cache_size: 256m\n  # Optional: Retention settings for clips (default: shown below)\n  retain:\n    # Required: Default retention days (default: shown below)\n    default: 10\n    # Optional: Per object retention days\n    objects:\n      person: 15\n")),Object(o.b)("h3",{id:"ffmpeg"},Object(o.b)("inlineCode",{parentName:"h3"},"ffmpeg")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"ffmpeg:\n  # Optional: global ffmpeg args (default: shown below)\n  global_args: -hide_banner -loglevel fatal\n  # Optional: global hwaccel args (default: shown below)\n  # NOTE: See hardware acceleration docs for your specific device\n  hwaccel_args: []\n  # Optional: global input args (default: shown below)\n  input_args: -avoid_negative_ts make_zero -fflags +genpts+discardcorrupt -rtsp_transport tcp -stimeout 5000000 -use_wallclock_as_timestamps 1\n  # Optional: global output args\n  output_args:\n    # Optional: output args for detect streams (default: shown below)\n    detect: -f rawvideo -pix_fmt yuv420p\n    # Optional: output args for record streams (default: shown below)\n    record: -f segment -segment_time 60 -segment_format mp4 -reset_timestamps 1 -strftime 1 -c copy -an\n    # Optional: output args for clips streams (default: shown below)\n    clips: -f segment -segment_time 10 -segment_format mp4 -reset_timestamps 1 -strftime 1 -c copy -an\n    # Optional: output args for rtmp streams (default: shown below)\n    rtmp: -c copy -f flv\n")),Object(o.b)("h3",{id:"objects"},Object(o.b)("inlineCode",{parentName:"h3"},"objects")),Object(o.b)("p",null,"Can be overridden at the camera level"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"objects:\n  # Optional: list of objects to track from labelmap.txt (default: shown below)\n  track:\n    - person\n  # Optional: filters to reduce false positives for specific object types\n  filters:\n    person:\n      # Optional: minimum width*height of the bounding box for the detected object (default: 0)\n      min_area: 5000\n      # Optional: maximum width*height of the bounding box for the detected object (default: 24000000)\n      max_area: 100000\n      # Optional: minimum score for the object to initiate tracking (default: shown below)\n      min_score: 0.5\n      # Optional: minimum decimal percentage for tracked object's computed score to be considered a true positive (default: shown below)\n      threshold: 0.7\n")))}p.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return n?r.a.createElement(f,c(c({ref:t},s),{},{components:n})):r.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);