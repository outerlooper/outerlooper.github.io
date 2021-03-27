// works

//(function () {

    var worksDesign = document.getElementById("works-design-grid");

    // load remote json file
    // kudos: https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
    function loadJSON(src, callback) {
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', src, true);
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
                callback(xobj.responseText);
            }
        };
        xobj.send(null);
    }

    // shuffle array
    // kudos: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    function shuffleArray(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    function formatItemContent(title, category, teaser, description, thumbnail, image) {
        var item = document.createElement("div");
        var itemTitle = (title) ? document.createTextNode(title) : null;
        var itemCategory = (category) ? document.createTextNode(category) : null;
        var itemTeaser = (teaser) ? document.createTextNode(teaser) : null;
        var itemDescription = (description) ? document.createTextNode(description) : null;
        var itemThumbnail = (thumbnail) ? document.createElement("IMG") : null;
        var itemImage = (image) ? document.createElement("IMG") : null;

        // if (itemTitle) {
        //     var titleContainer = document.createElement("div");
        //     titleContainer.appendChild(itemTitle);
        //     item.appendChild(titleContainer);
        // }

        // if (itemCategory) {
        //     var categoryContainer = document.createElement("div");
        //     categoryContainer.appendChild(itemCategory);
        //     item.appendChild(categoryContainer);
        // }

        // if (itemTeaser) {
        //     var teaserContainer = document.createElement("div");
        //     teaserContainer.appendChild(itemTeaser);
        //     item.appendChild(teaserContainer);
        // }

        // if (itemDescription) {
        //     var descriptionContainer = document.createElement("div");
        //     descriptionContainer.appendChild(itemDescription);
        //     item.appendChild(descriptionContainer);
        // }

        //<img data-src="images/light.jpg" width="1800" height="1200" alt="" uk-img>

        if (itemThumbnail) {
            var thumbnailContainer = document.createElement("div");
            itemThumbnail.setAttribute("data-src", thumbnail);
            itemThumbnail.setAttribute("uk-img", "");
            //itemThumbnail.setAttribute("width", "100%");
            //itemThumbnail.setAttribute("height", "100%");
            itemThumbnail.setAttribute("alt", "");
            itemThumbnail.setAttribute("title", "");
            thumbnailContainer.appendChild(itemThumbnail);
            item.appendChild(thumbnailContainer);
        }

        // if (itemImage) {
        //     var imageContainer = document.createElement("div");
        //     itemImage.setAttribute("src", image);
        //     itemImage.setAttribute("alt", "");
        //     itemImage.setAttribute("title", "");
        //     imageContainer.appendChild(itemImage);
        //     item.appendChild(imageContainer);
        // }

        return item;
    }

    function getWorks(container, works, resultType, tagsFilter) {
        var worksContainer = document.getElementById(container);
        loadJSON(works, function (response) {

            var obj;
            switch (resultType) {
                case 'reverse':
                    obj = JSON.parse(response).reverse(); // reverse (last to first)
                    break;
                case 'shuffle':
                    obj = shuffleArray(JSON.parse(response)); // shuffle (randomize)
                    break;
                default:
                    obj = JSON.parse(response); // normal (first to last)
                    break;

            }

            //var obj = JSON.parse(response); // normal
            //var obj = JSON.parse(response).reverse(); // reverse
            //var obj = shuffleArray(JSON.parse(response)); // shuffle (randomize)
            for (var i = 0; i < obj.length; i++) {

                if (tagsFilter) {
                    if (obj[i]["tags"].includes(tagsFilter)) {
                        var itemContainer = document.createElement("div");
                        var itemCard = document.createElement("div");
                        itemCard.className = "uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle";
                        var itemContent = formatItemContent(
                            obj[i]["title"],
                            obj[i]["category"],
                            obj[i]["teaser"],
                            obj[i]["description"],
                            obj[i]["thumbnail"],
                            obj[i]["image"]
                        );

                        itemCard.appendChild(itemContent);
                        itemContainer.appendChild(itemCard);
                        worksContainer.appendChild(itemContainer);
                    }
                } else {
                    var itemContainer = document.createElement("div");
                    var itemCard = document.createElement("div");
                    itemCard.className = "uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle";
                    var itemContent = formatItemContent(
                        obj[i]["title"],
                        obj[i]["category"],
                        obj[i]["teaser"],
                        obj[i]["description"],
                        obj[i]["thumbnail"],
                        obj[i]["image"]
                    );

                    itemCard.appendChild(itemContent);
                    itemContainer.appendChild(itemCard);
                    worksContainer.appendChild(itemContainer);
                }
                

                
            }
        });
    }

    //getWorks('works-web-grid', 'assets/data/works-web.json');
    getWorks('works-photography-grid', 'assets/data/works-photography.json', 'reverse', 'sonic');
    getWorks('works-design-grid', 'assets/data/works-design.json');
    getWorks('works-drawings-grid', 'assets/data/works-drawings.json');
    //getWorks('works-music-grid', 'assets/data/works-music.json');

    /*loadJSON('assets/data/works-design.json', function (response) {
        //var obj = JSON.parse(response).reverse(); // reverse
        var obj = shuffleArray(JSON.parse(response)); // shuffle (randomize)
        for (var i = 0; i < obj.length; i++) {

            var itemContainer = document.createElement("div");
            var itemCard = document.createElement("div");
            itemCard.className = "uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle";
            var itemContent = formatItemContent(
                obj[i]["title"],
                obj[i]["category"],
                obj[i]["teaser"],
                obj[i]["description"],
                obj[i]["thumbnail"],
                obj[i]["image"]
            );

            itemCard.appendChild(itemContent);
            itemContainer.appendChild(itemCard);
            worksDesign.appendChild(itemContainer);
        }

    });*/

//})();