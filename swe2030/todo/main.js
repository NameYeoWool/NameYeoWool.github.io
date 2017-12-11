var URLS = {
    //prefix:"localhost:8080", //"http://kdy0962.github.io/todo/",
    prefix:"https://NameYeoWool.github.io/swe2030/todo/",
    icon:{
        unchecked:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYR4sh0fM1Buy__0F9ea9VWazxLdfj9fV0dGCse3mMKiW5UVR-Yw",
        checked:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ok_sign_font_awesome.svg/2000px-Ok_sign_font_awesome.svg.png"
    },

    list:"json/groupList.json",
    eachList:"list.html",
    groupAdd:"json/groupAdd.json",
    taskList:"json/taskList.json",
    taskAdd:"json/taskAdd.json",
    toggleComplete1:"json/taskUncomplete.json",
    togglecomplete2:"json/taskUncomplete2.json"
};



function network(command, end, arg){
    switch(command){
        case "eachList":
            //location.href="URI" 자동으로 특정페이지로 이동
            location.href = URLS.prefix + URLS.eachList +"?name=" + encodeURIComponent(arg);
            break;
        case "addList":
            $.get(URLS.prefix + URLS.groupAdd, {name:arg}, end);
            /*
            data.data.push({name:args..});
            end(data);
            */
            break;
        case "taskList":
            $.get(URLS.prefix+ URLS.taskList, end);
            break;
        case "taskAdd":
            $.get(URLS.prefix + URLS.taskAdd,{name:arg},end );
            break;
        case "list":
            $.get(URLS.prefix + URLS.list, end);
            /*
            end(data);
            */
            break;
        
        case "toggleComplete":
            $.get(URLS.prefix + URLS.toggleComplete1,{id:arg[0],complete:arg[1]}, end);
            break;
            
        default: throw "invalid command";
    }
}