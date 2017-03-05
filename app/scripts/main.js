(function() {
    'use strict';

    var articlesResponse;

    /**
     * If articles already stores in localStorage, skip making an http call and fetch
     * articles from localStorage instead.
     */
    if (!localStorage.getItem('articles')) {

        var xhr = new XMLHttpRequest();
        //setting async option to false in order to block the program until the response is obtained
        xhr.open('GET', 'http://starlord.hackerearth.com/cleartrip/hackernews', false);
        xhr.send();

        //parsing the response
        articlesResponse = JSON.parse(xhr.responseText);

        localStorage.setItem('articles', JSON.stringify(articlesResponse));
    }
    articlesResponse = JSON.parse(localStorage.getItem('articles'));

    //List all the articles
    listArticles(articlesResponse);

    //Search for an article when enter is hit
    var articleSearchInput = document.getElementById('articleSearchInput');
    articleSearchInput.addEventListener('keydown', function (e) {
        if (e.keyCode === 13) {
            searchArticle(this.value.toLowerCase(), articlesResponse);
        }
    });
})();

/**
 * Private Functions
 **/

/**
 * Search for an article from the list of articles.
 * An article is found in the array if the 'title' field contains the searched string.
 * @param searchString
 * @param articles
 */
function searchArticle(searchString, articles) {
    var resultantArticles = [];
    for (var i = 0; i < articles.length; i++) {
        if (!searchString || (articles[i].title && articles[i].title.toLowerCase().indexOf(searchString) > -1)) {
            resultantArticles.push(articles[i]);
        }
    }
    listArticles(resultantArticles);
}

/**
 * This function creates DOM elements for listing articles
 * @param articles
 */
function listArticles(articles) {

    var articlesList = document.getElementById('articlesList');
    articlesList.innerHTML = '';

    //This is for counting valid articles whose title is defined.
    var numOfValidArticles = 0;

    /**
     * Looping through all the articles and extracting each article's meta and then
     * Setting each info in the appropriate DOM.
     */
    for(var i=0; i <  articles.length; i++) {

        //Meta
        var link = articles[i].url,
            title = articles[i].title,
            author = articles[i].author,
            createdAt = articles[i].created_at,
            numOfPoints = articles[i].num_points
            ;

        //Considering an article to be valid only if title field is defined.
        if (title) {
            numOfValidArticles++;

            var node = document.createElement('div');
            node.className = 'articles--each';

            //Setting the meta for each article
            node.innerHTML = '' +
                //Setting the anchor tag
                //Also setting random images from Unsplash just to give the site a feel of a blogsite.
                '<a class="content" href="'+link+'" target="_blank"' +
                ' style="background: url(https://unsplash.it/300/270/?random='+numOfValidArticles+');">' +

                //Number of points
                '<span class="stars"><i class="zmdi zmdi-thumb-up"></i>' + numOfPoints + '</span>'+

                //Creeated At
                '<span class="meta-info created_at">' + createdAt + '</span>'+

                //Title and author name
                '<span class="bottom">' +
                '<h2 class="js-article-title">'+ title +'</h2>'+
                '<span class="text-right text-primary block"> created by - '+ author +'</span>'+
                '</span>'+

                '</a>';
            articlesList.appendChild(node);
        }
    }
}