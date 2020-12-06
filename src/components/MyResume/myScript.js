    function getElementByClassName(className) {
        return document.getElementsByClassName(className)[0];
    }

    function getElementsByClassName(className) {
        return document.getElementsByClassName(className);
    }

    function setStyles(node, styles) {
        Object.keys(styles).forEach((key) => {
            node.style[key] = styles[key];
        });
    }


    var tabContainerClassName = 'resume-categories';
    var versionContainerClassname = 'resume-contents';

    var tabActiveStyles = {
        color: '#2196f3',
        boxShadow : "inset 0 -2px 0 0 #2196f3",
    };

    var contentsActiveStyles = {
        animation: "moveFromRight .8s ease both",
        display : "block",
    }

    var contentsDefaultStyles = {
        animation:  "moveToLeft .8s ease both",
        display : "none",
    }

    var tabDefaultStyles = {
        color: '#000000',
        boxShadow: "none",
    };

    var versionsArr = getElementByClassName(tabContainerClassName);
    var contentsArr = getElementsByClassName(versionContainerClassname);
    // console.log(contentsArr);

    function activeHandler(index) {
        var childs = versionsArr.children;
        for (var i = 0; i < childs.length; i++) {
            console.log(contentsArr)
            // newView = "view" + (i+1);
            if (i === index) {
                setStyles(childs[i], tabActiveStyles);
                setStyles(contentsArr[i],contentsActiveStyles);
            } else {
                setStyles(childs[i], tabDefaultStyles);
                setStyles(contentsArr[i],contentsDefaultStyles)
            }
        }
    }

    function bindEvent() {
        var childs = versionsArr.children;
        for (var i = 0; i < childs.length; i++) {
            (function(index) {
                childs[i].onclick = function (e) {
                    activeHandler(index);
                }
            })(i)
        }
    }


    bindEvent();