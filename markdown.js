var m = document.createElement('script');
m.setAttribute('src','https://cdn.jsdelivr.net/npm/marked/marked.min.js');
document.head.appendChild(m);
m.onload = function(){
    var main  = document.createElement('main');
    main.innerHTML = marked(document.body.innerHTML);
    document.body.innerHTML = ""
    document.body.appendChild(main);
    // Array.from(document.querySelectorAll("table")).map(table => Sortable.initTable(table))
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://ajusa.github.io/mvp-nord/mvp.css';
    link.media = 'all';
    head.appendChild(link);
}
